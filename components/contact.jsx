"use client";

import React, { useState } from "react";
import * as z from "zod";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from "@emailjs/browser";
import { Toaster, toast } from "react-hot-toast";

import { Button } from "./ui/button";
import ContactUsTitle from "@/public/title-picture/contact-us-1.png";

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

const Contact = () => {
  const [mounted, setMounted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
  });

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        {
          from_name: data.name,
          from_email: data.email,
          subject: data.subject,
          message: data.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID,
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
      <div className="flex basis-1/2 flex-col items-center justify-center gap-6">
        <div className="">
          <Image src={ContactUsTitle} alt="Contact Us" />
        </div>
        <p className="text-2xl text-[#d2def4]">How can we help you?</p>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex basis-1/2 flex-col"
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
              className="w-full rounded-md border border-white/70 bg-transparent p-2 text-[#d2def4]"
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
              className="w-full rounded-md border border-white/70 bg-transparent p-2 text-[#d2def4]"
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
              className="w-full rounded-md border border-white/70 bg-transparent p-2 text-[#d2def4]"
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
              className="w-full rounded-md border border-white/70 bg-transparent p-2 pb-24 text-[#d2def4]"
            />
            {errors.message && (
              <p className="text-xs text-red-500">{errors.message.message}</p>
            )}
          </div>
          <input type="hidden" {...register("honeypot")} />
          <Button.Primary
            type="submit"
            disabled={isSubmitting}
            className="mt-6 w-fit scale-125 font-bold uppercase shadow-md"
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
