import React from "react";

import Image from "next/image";
import ContactImage from "@/public/Assets/Images/contact.webp";
import ContactSmall from "@/public/Assets/Images/contact-mobile.webp";

import ContactForm from "@/components/ui/contact/ContactForm";
import NewsletterForm from "@/components/ui/contact/NewsletterForm";

const Contact = () => {
  return (
    <div className="container text-center w-full">
      <h1 className="mb-8">Contact</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="relative order-first md:order-last">
          <Image
            className="medium-screen-component w-full max-w-md h-auto object-contain mx-auto responsive"
            alt="Rose Long sat leading a retreat class in cross-legged position on the floor, smiling with her eyes closed. She is sat in-front of a large bay window which looks out onto a large sun-filled garden. There is a large, golden gong to her left and a plant with a himilayan salt lamp on her right."
            src={ContactImage}
            sizes="100vw"
            style={{
              width: "100%",
              height: "auto",
            }}
            placeholder="blur"
          />

          <Image
            className="small-screen-component responsive"
            alt="Rose Long sat leading a retreat class in cross-legged position on the floor, smiling with her eyes closed. She is sat in-front of a large bay window which looks out onto a large sun-filled garden. There is a large, golden gong to her left and a plant with a himilayan salt lamp on her right."
            src={ContactSmall}
            placeholder="blur"
            sizes="100vw"
            style={{
              width: "100%",
              height: "auto",
            }}
          />
        </div>
        <div className="text mb-12">
          <ContactForm />
          <NewsletterForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
