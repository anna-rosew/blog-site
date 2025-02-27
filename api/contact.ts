"use server";

import FirstResponse from "@/components/ui/contact/templates/FirstResponse";
import { Resend } from "resend";
import { contactSchema } from "@/lib/schemas/contactSchema";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

export const send = async (contactFormData: z.infer<typeof contactSchema>) => {
  try {
    const { error } = await resend.emails.send({
      from: `Acme <${process.env.RESEND_FROM_EMAIL}>`,
      to: [contactFormData.email],
      subject: "Thank you for getting in touch!",
      react: FirstResponse({ FirstName: contactFormData.firstName }),
    });

    if (error) {
      throw error;
    }
  } catch (e) {
    throw e;
  }
};
