"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../card";

const ContactForm = () => {
  // 1. Define your form.

  return (
    <Card className="mx-auto max-w-md text-left border-hidden shadow-none">
      <CardHeader className="px-0">
        <CardTitle>
          {" "}
          <h2>Get in Touch</h2>
        </CardTitle>
        <CardDescription>
          <p className="para pt-4">
            If you&apos;d like to book a{" "}
            <strong>class, workshop, or retreat,</strong> or have any questions,
            please don&apos;t hesitate to reach out.
          </p>
        </CardDescription>
      </CardHeader>
      <CardContent className="p-1"></CardContent>
    </Card>
  );
};
export default ContactForm;
