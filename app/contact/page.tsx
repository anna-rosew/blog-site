import React from "react";

import Image from "next/image";
import ContactImage from "@/public/Assets/Images/contact.webp";
import ContactSmall from "@/public/Assets/Images/contact-mobile.webp";

import ContactForm from "@/components/ui/contact/ContactForm";
import NewsletterForm from "@/components/ui/contact/NewsletterForm";

const Contact = () => {
  return (
    <div className="container text-center w-full pb-20">
      <h1 className="mb-10">Contact</h1>
      <div className="grid md:grid-cols-2 gap-12 md:items-stretch">
        <div className="relative order-first md:order-last rounded-xl overflow-hidden min-h-[400px]">
          <Image
            className="medium-screen-component absolute inset-0 w-full h-full object-cover rounded-xl"
            alt="Rose Long sat leading a retreat class in cross-legged position on the floor, smiling with her eyes closed. She is sat in-front of a large bay window which looks out onto a large sun-filled garden. There is a large, golden gong to her left and a plant with a himilayan salt lamp on her right."
            src={ContactImage}
            fill
            sizes="50vw"
            placeholder="blur"
            style={{ objectFit: "cover" }}
          />
          <Image
            className="small-screen-component responsive"
            alt="Rose Long sat leading a retreat class in cross-legged position on the floor, smiling with her eyes closed. She is sat in-front of a large bay window which looks out onto a large sun-filled garden. There is a large, golden gong to her left and a plant with a himilayan salt lamp on her right."
            src={ContactSmall}
            placeholder="blur"
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
        <div className="text text-left space-y-8 pb-4">
          <ContactForm />
          <NewsletterForm />
          {/* PAYMENT SECTION — uncomment when Rose approves
          <div className="text-left border border-customBeige/60 rounded-xl p-6 bg-customLightBeige/40">
            <h3 className="mb-3">Payment</h3>
            <p className="text-sm text-black/70 mb-4">
              If you already know what you&apos;d like to book, please make a
              bank transfer directly to:
            </p>
            <div className="space-y-2 mb-4">
              <div className="flex justify-between text-sm border-b border-black/8 pb-2">
                <span className="text-black/55">Name</span>
                <span className="font-semibold">H R Long</span>
              </div>
              <div className="flex justify-between text-sm border-b border-black/8 pb-2">
                <span className="text-black/55">Account number</span>
                <span className="font-semibold font-mono">08256131</span>
              </div>
              <div className="flex justify-between text-sm pb-2">
                <span className="text-black/55">Sort code</span>
                <span className="font-semibold font-mono">08-91-03</span>
              </div>
            </div>
            <div className="bg-white/60 rounded-lg p-4 text-sm space-y-2 border border-customBeige/40">
              <p className="m-0">
                <span className="font-semibold">Reference:</span> Please include
                what you&apos;re booking (e.g. &ldquo;Easter Series&rdquo; or
                &ldquo;Evening Chill April&rdquo;).
              </p>
              <p className="m-0">
                <span className="font-semibold">New here?</span> Please also
                send a quick email to confirm your booking and say hello — Rose
                will be in touch to welcome you.
              </p>
            </div>
          </div>
          */}
        </div>
      </div>
    </div>

  );
};

export default Contact;
