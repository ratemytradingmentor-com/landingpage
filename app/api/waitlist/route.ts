import { NextRequest, NextResponse } from "next/server";

function isExisting(errors: { error_code: string }[]) {
  return errors.some(
    ({ error_code }: { error_code: string }) =>
      error_code === "ERROR_CONTACT_EXISTS"
  );
}

export async function POST(req: NextRequest) {
  try {
    const { email, token } = await req.json();

    if (!email || !token) {
      return NextResponse.json({ error: "Email and reCAPTCHA token are required" }, { status: 400 });
    }

    const recaptchaRes = await fetch(
      "https://www.google.com/recaptcha/api/siteverify",
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
      }
    );

    const recaptchaData = await recaptchaRes.json();
    if (!recaptchaData.success) {
      return NextResponse.json(
        { error: "reCAPTCHA verification failed. Please try again." },
        { status: 400 }
      );
    }

    const mailChimpData = {
      members: [
        {
          email_address: email,
          status: "subscribed",
        },
      ],
    };

    const audienceId = process.env.MAILCHIMP_AUDIENCE_ID;
    const apiKey = process.env.MAILCHIMP_API_KEY;
    const dataCenter = process.env.MAILCHIMP_DATA_CENTER;

    if (!audienceId || !apiKey) {
      return NextResponse.json(
        { error: "MailChimp configuration is missing." },
        { status: 500 }
      );
    }

    const URL = `https://${dataCenter}.api.mailchimp.com/3.0/lists/${audienceId}`;
    const response = await fetch(URL, {
      method: "POST",
      headers: {
        Authorization: `Basic ${Buffer.from(`any:${apiKey}`).toString(
          "base64"
        )}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(mailChimpData),
    });

    const data = await response.json();

    if (!response.ok) {
      const errorMessage =
        data.detail || "Failed to subscribe. Please try again later.";
      return NextResponse.json(
        { error: errorMessage },
        { status: response.status }
      );
    }

    if (!!data.errors.length) {
      if (isExisting(data.errors)) {
        return NextResponse.json({
          message: "Already a member",
          success: true,
        });
      }

      return NextResponse.json(
        { error: data.errors?.[0]?.error },
        { status: 500 }
      );
    }
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Something went wrong, please try again later." },
      { status: 500 }
    );
  }
}
