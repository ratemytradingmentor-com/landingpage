import React, { useEffect } from "react";
import Head from "next/head";

import { Input } from "@/components/ui/input";
import GlowButton from "@/components/GlowButton";
import { Button } from "@/components/ui/button";

const FORM_LINK = "https://ratemytradingmentor.us9.list-manage.com/subscribe/post?u=102d29b40880b520e8bb1c3d0&amp;id=e74fc122b4&amp;f_id=00cc56e1f0";

const MailChimpFormEmbed = () => {
  useEffect(() => {
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
        fnames[0] = 'EMAIL'; ftypes[0] = 'email';
      }(jQuery)); var $mcj = jQuery.noConflict(true);`;
      document.body.appendChild(inlineScript);
    };
    document.body.appendChild(jqueryScript);

    return () => {
      document.body.removeChild(jqueryScript);
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted"); // Log to verify submission initiation
    e.target.submit();
  };

  return (
    <>
      <Head>
        {/* Link Mailchimp CSS for the embedded form */}
        <link
          href="//cdn-images.mailchimp.com/embedcode/classic-061523.css"
          rel="stylesheet"
          type="text/css"
        />
      </Head>

      <div
        id="mc_embed_signup"
        style={{
          // background: "#fff",
          // clear: "left",
          // font: "14px Helvetica, Arial, sans-serif",
          // width: "500px",
          // padding: "20px",
          // borderRadius: "8px",
          // boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        }}
      >
        <form
          action={FORM_LINK}
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          className="validate"
          target="_blank"
          noValidate
          onSubmit={handleSubmit}
        >
          <div id="mc_embed_signup_scroll">
            {/* <h2 className="text-xl font-semibold mb-2">Join our waitlist</h2> */}
            {/* <p className="text-sm text-gray-600 mb-4">
              <span className="text-red-500">*</span> indicates required
            </p> */}
            <div className="mb-4">
              {/* <label htmlFor="mce-EMAIL" className="block text-gray-700 text-left">
                Email Address <span className="text-red-500">*</span>
              </label> */}
              <Input
                type="email"
                name="EMAIL"
                placeholder="Enter your email"
                id="mce-EMAIL"
                className="mt-1 block w-full"
                required
                autoComplete="off"
              />
            </div>
            <div
              aria-hidden="true"
              style={{ position: "absolute", left: "-5000px" }}
            >
              <input
                type="text"
                name="b_102d29b40880b520e8bb1c3d0_e74fc122b4"
                tabIndex={-1}
                defaultValue=""
              />
            </div>
            <Button type="submit" name="subscribe" className="mt-4">
              Join Waitlist
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default MailChimpFormEmbed;
