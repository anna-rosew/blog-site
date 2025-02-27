"use client";

import { z } from "zod";
import Link from "next/link";
import { toast } from "sonner";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { newsletterSchema } from "@/lib/schemas/newsletterSchema";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { subscribe } from "@/api/newsletter";
import { Card, CardContent } from "@/components/ui/card";
import SendIcon from "@/public/Assets/Icons/SendIcon";

type Inputs = z.infer<typeof newsletterSchema>;

export default function NewsletterForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>({
    resolver: zodResolver(newsletterSchema),
    defaultValues: {
      email: "",
    },
  });

  const processForm: SubmitHandler<Inputs> = async (data) => {
    const result = await subscribe(data);

    if (result?.error) {
      console.log("error");
      toast.error("An error occurred! Please try again.");
      return;
    }

    toast.success("Subscribed successfully!");
    console.log("Successfully sunscribed");
    reset();
  };

  return (
    <section>
      <Card className="rounded-lg border-0 dark:border">
        <CardContent className="flex flex-col text-left gap-8 pt-6  md:pt-8">
          <div>
            <h2>Subscribe to my newsletter</h2>
            <p className="text-muted-foreground">
              If you’d like to <strong>stay up-to-date</strong> with classes,
              workshops and retreats, please sign-up to the monthly newsletter.
            </p>
            <p className="text-muted-foreground">
              I like to keep it short but sweet. (You can unsubscribe at
              anytime.)
            </p>
          </div>
          <div className="flex flex-row justify-center">
            <SendIcon className="w-20 h-20 md:mx-auto px-2" />

            <form
              onSubmit={handleSubmit(processForm)}
              className="flex flex-col items-start gap-3"
            >
              <div className="w-full">
                <Input
                  type="email"
                  id="email"
                  autoComplete="email"
                  placeholder="Email"
                  className="w-full"
                  {...register("email")}
                />

                {errors.email?.message && (
                  <p className="ml-1 mt-2 text-sm text-rose-400">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div className="w-full">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full disabled:opacity-50"
                >
                  {isSubmitting ? "Submitting..." : "Subscribe"}
                </Button>
              </div>

              <div>
                <p className="text-xs text-muted-foreground">
                  We care about your data. Read our{" "}
                  <Link href="/privacy" className="font-bold">
                    privacy&nbsp;policy.
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
