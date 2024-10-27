import React, { useEffect } from "react";
import Head from "next/head";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";


const FORM_LINK = "https://ratemytradingmentor.us9.list-manage.com/subscribe/post?u=102d29b40880b520e8bb1c3d0&amp;id=e74fc122b4&amp;f_id=00cc56e1f0";

const MailChimpExtendedFormEmbed = () => {
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
        fnames[1] = 'FNAME'; ftypes[1] = 'text';
        fnames[2] = 'LNAME'; ftypes[2] = 'text';
        fnames[7] = 'MMERGE7'; ftypes[7] = 'text';
        fnames[8] = 'MMERGE8'; ftypes[8] = 'text';
        fnames[9] = 'MMERGE9'; ftypes[9] = 'text';
        fnames[10] = 'MMERGE10'; ftypes[10] = 'text';
        fnames[11] = 'MMERGE11'; ftypes[11] = 'text';
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
      <Head>
        <link
          href="//cdn-images.mailchimp.com/embedcode/classic-061523.css"
          rel="stylesheet"
          type="text/css"
        />
      </Head>

      <div
        id="mc_embed_signup"
        style={{
          background: "#fff",
          clear: "left",
          font: "14px Helvetica, Arial, sans-serif",
          width: "600px",
          padding: "20px",
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
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
        >
          <div id="mc_embed_signup_scroll">
            {/* <h2 className="text-xl font-semibold mb-2">Subscribe</h2> */}
            {/* <p className="text-sm text-gray-600 mb-4">
              <span className="text-red-500">*</span> indicates required
            </p> */}
            <div className="mb-4">
              <label htmlFor="mce-EMAIL" className="block text-gray-700">
                Email Address <span className="text-red-500">*</span>
              </label>
              <Input
                type="email"
                name="EMAIL"
                id="mce-EMAIL"
                className="mt-1 block w-full"
                required
              />
            </div>

            {/* Additional Fields */}
            {[
              { id: "mce-FNAME", label: "Members Name", name: "FNAME" },
              { id: "mce-LNAME", label: "Community Name", name: "LNAME" },
              { id: "mce-MMERGE7", label: "Primary Social Media Handle", name: "MMERGE7" },
              { id: "mce-MMERGE8", label: "YouTube Channel URL (if applicable)", name: "MMERGE8" },
              { id: "mce-MMERGE9", label: "Website (if applicable)", name: "MMERGE9" },
              { id: "mce-MMERGE10", label: "Best known for", name: "MMERGE10" },
              { id: "mce-MMERGE11", label: "Why do you recommend this mentor?", name: "MMERGE11" }
            ].map(field => (
              <div key={field.id} className="mb-4">
                <label htmlFor={field.id} className="block text-gray-700">
                  {field.label}
                </label>
                <Input
                  type="text"
                  name={field.name}
                  id={field.id}
                  className="mt-1 block w-full"
                />
              </div>
            ))}

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
              Subscribe
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default MailChimpExtendedFormEmbed;
