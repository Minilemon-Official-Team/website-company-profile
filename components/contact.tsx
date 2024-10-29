"use client";

import emailjs from "@emailjs/browser";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Toaster, toast } from "react-hot-toast";
import * as z from "zod";

import { Button } from "@/components/ui/button-sec";
import { cn } from "@/lib/utils";
import ContactUsTitle from "@/public/title/contact-us.png";

const schema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters long" }),
  email: z.string().email({ message: "Invalid email address" }),
  subject: z
    .string()
    .min(5, { message: "Subject must be at least 5 characters long" }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters long" }),
  honeypot: z.string().max(0, { message: "Bot detected" }),
});

const Contact = ({
  className,
  titleWidth,
}: {
  className?: string;
  titleWidth?: string;
}) => {
  const [mounted, setMounted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
  });

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const onSubmit = async (data: z.infer<typeof schema>) => {
    setIsSubmitting(true);
    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
      const userId = process.env.NEXT_PUBLIC_EMAILJS_USER_ID!;

      if (!serviceId || !templateId || !userId) {
        toast.error("Email service configuration is missing");
        setIsSubmitting(false);
        return;
      }

      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: data.name,
          from_email: data.email,
          subject: data.subject,
          message: data.message,
        },
        userId,
      );
      toast.success("Message sent successfully");
      reset();
    } catch (error) {
      console.error(error); // Handle error
      toast.error("Failed to send message");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div
        className={cn(
          "flex basis-1/2 flex-col items-center justify-center gap-6",
          className,
        )}
      >
        <div>
          <Image src={ContactUsTitle} alt="Contact Us" className={titleWidth} />
        </div>
        <p id="contact" className="text-2xl text-[#d2def4]">
          How can we help you?
        </p>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={cn("flex basis-1/2 flex-col pl-4 pr-[1rem]", className)}
      >
        <div className="flex flex-col gap-2">
          <div className="">
            <label htmlFor="name" className="sr-only">
              Name
            </label>
            <input
              {...register("name")}
              id="name"
              placeholder="Name"
              className="w-full rounded-md border border-white/30 bg-transparent px-4 py-2 text-sm text-[#d2def4]"
            />
            {errors.name && (
              <p className="text-xs text-red-500">{errors.name.message}</p>
            )}
          </div>
          <div>
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input
              {...register("email")}
              id="email"
              type="email"
              placeholder="Email"
              className="w-full rounded-md border border-white/30 bg-transparent px-4 py-2 text-sm text-[#d2def4]"
            />
            {errors.email && (
              <p className="text-xs text-red-500">{errors.email.message}</p>
            )}
          </div>
          <div>
            <label htmlFor="subject" className="sr-only">
              Subject
            </label>
            <input
              {...register("subject")}
              id="subject"
              type="text"
              placeholder="Subject"
              className="w-full rounded-md border border-white/30 bg-transparent px-4 py-2 text-sm text-[#d2def4]"
            />
            {errors.subject && (
              <p className="text-xs text-red-500">{errors.subject.message}</p>
            )}
          </div>
          <div>
            <label htmlFor="message" className="sr-only">
              Message
            </label>
            <textarea
              {...register("message")}
              id="message"
              rows={4}
              placeholder="Message"
              className="w-full rounded-md border border-white/30 bg-transparent px-4 py-2 pb-16 text-sm text-[#d2def4]"
            />
            {errors.message && (
              <p className="text-xs text-red-500">{errors.message.message}</p>
            )}
          </div>
          <input type="hidden" {...register("honeypot")} />
          <Button.Primary
            type="submit"
            disabled={isSubmitting}
            className="mt-4 w-fit scale-90 font-bold uppercase shadow-md"
          >
            {isSubmitting ? "Sending..." : "Submit"}
          </Button.Primary>
        </div>
      </form>
      <Toaster position="top-center" />
    </>
  );
};

export default Contact;
