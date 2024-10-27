/* eslint-disable @next/next/no-css-tags */
import React, { useEffect } from "react";
import Head from "next/head";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

function SuggestMentor() {
  useEffect(() => {
    // Load jQuery and MailChimp validation scripts
    const jqueryScript = document.createElement("script");
    jqueryScript.src =
      "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js";
    jqueryScript.onload = () => {
      const mcScript = document.createElement("script");
      mcScript.src =
        "//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js";
      mcScript.async = true;
      document.body.appendChild(mcScript);

      const inlineScript = document.createElement("script");
      inlineScript.innerHTML = `(function($) {
        window.fnames = new Array(); 
        window.ftypes = new Array();
        fnames[0]='EMAIL'; ftypes[0]='email';
        fnames[1]='MENTORNAME'; ftypes[1]='text';
        fnames[2]='COMNAME'; ftypes[2]='text';
        fnames[3]='SOCIALMEDI'; ftypes[3]='text';
        fnames[4]='CHOICE'; ftypes[4]='radio';
        fnames[5]='YOUTUBE'; ftypes[5]='text';
        fnames[6]='WEBSITE'; ftypes[6]='text';
        fnames[7]='BESTKNOWN'; ftypes[7]='text';
        fnames[8]='WHY'; ftypes[8]='text';
      }(jQuery)); var $mcj = jQuery.noConflict(true);`;
      document.body.appendChild(inlineScript);
    };
    document.body.appendChild(jqueryScript);

    return () => {
      document.body.removeChild(jqueryScript);
    };
  }, []);

  return (
    <>
      {/* eslint-disable-next-line @next/next/no-css-tags */}
      <Head>
        <link
          href="//cdn-images.mailchimp.com/embedcode/classic-061523.css"
          rel="stylesheet"
          type="text/css"
        />
      </Head>

      <div
        id="mc_embed_signup"
        className="bg-white text-gray-800 w-full max-w-lg p-6 mx-auto rounded-lg shadow-md"
      >
        <form
          action="https://ratemytradingmentor.us9.list-manage.com/subscribe/post?u=102d29b40880b520e8bb1c3d0&amp;id=4ecdfa5b3d&amp;f_id=00f156e1f0"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          className="validate"
          target="_blank"
          noValidate
        >
          <div id="mc_embed_signup_scroll">
            <h2 className="text-2xl font-bold mb-4">Subscribe</h2>
            <div className="mb-2 text-sm text-gray-500">
              * indicates required
            </div>

            {/* Email Field */}
            <div className="mc-field-group mb-4">
              <label htmlFor="mce-EMAIL" className="block text-sm font-medium">
                Email Address *
              </label>
              <Input
                type="email"
                name="EMAIL"
                id="mce-EMAIL"
                required
                className="w-full mt-1"
              />
            </div>

            {/* Mentor Name Field */}
            <div className="mc-field-group mb-4">
              <label
                htmlFor="mce-MENTORNAME"
                className="block text-sm font-medium"
              >
                Mentor&apos;s Name *
              </label>
              <Input
                type="text"
                name="MENTORNAME"
                id="mce-MENTORNAME"
                required
                className="w-full mt-1"
              />
            </div>

            {/* Community Name Field */}
            <div className="mc-field-group mb-4">
              <label
                htmlFor="mce-COMNAME"
                className="block text-sm font-medium"
              >
                Community Name
              </label>
              <Input
                type="text"
                name="COMNAME"
                id="mce-COMNAME"
                className="w-full mt-1"
              />
            </div>

            {/* Social Media Handle */}
            <div className="mc-field-group mb-4">
              <label
                htmlFor="mce-SOCIALMEDI"
                className="block text-sm font-medium"
              >
                Primary Social Media Handle
              </label>
              <Input
                type="text"
                name="SOCIALMEDI"
                id="mce-SOCIALMEDI"
                className="w-full mt-1"
              />
            </div>

            {/* Choice of Social Media */}
            <div className="mc-field-group input-group mb-4">
              <strong className="text-sm font-medium">
                Choice of Social Media
              </strong>
              <div className="mt-2 flex gap-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="CHOICE"
                    value="Insta"
                    id="mce-CHOICE0"
                  />
                  <span className="ml-2">Insta</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="CHOICE"
                    value="Twitter"
                    id="mce-CHOICE1"
                  />
                  <span className="ml-2">Twitter</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="CHOICE"
                    value="TikTok"
                    id="mce-CHOICE2"
                  />
                  <span className="ml-2">TikTok</span>
                </label>
              </div>
            </div>

            {/* Additional Fields */}
            {[
              {
                label: "YouTube Channel URL (if applicable)",
                field: "YOUTUBE",
              },
              { label: "Website (if applicable)", field: "WEBSITE" },
              { label: "Best Known For", field: "BESTKNOWN" },
              { label: "Why do you recommend this mentor?", field: "WHY" },
            ].map(({ label, field }, idx) => (
              <div className="mc-field-group mb-4" key={idx}>
                <label
                  htmlFor={`mce-${field}`}
                  className="block text-sm font-medium"
                >
                  {label}
                </label>
                <Input
                  type="text"
                  name={field}
                  id={`mce-${field}`}
                  className="w-full mt-1"
                />
              </div>
            ))}

            {/* Captcha and Submit */}
            <div id="mce-responses" className="clear mb-4">
              <div
                id="mce-error-response"
                className="response text-red-500"
                style={{ display: "none" }}
              ></div>
              <div
                id="mce-success-response"
                className="response text-green-500"
                style={{ display: "none" }}
              ></div>
            </div>
            <div
              style={{ position: "absolute", left: "-5000px" }}
              aria-hidden="true"
            >
              <input
                type="text"
                name="b_102d29b40880b520e8bb1c3d0_4ecdfa5b3d"
                tabIndex={-1}
                defaultValue=""
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-blue-600 text-white font-semibold py-2 rounded mt-4"
            >
              Submit
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}

export default SuggestMentor;
