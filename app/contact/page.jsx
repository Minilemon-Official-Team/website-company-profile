import React from "react";
import { cn } from "../../lib/utils";
import { luckiest_guy } from "../fonts";
import { Button } from "../../components/ui/button";
import Link from "next/link";
import { FaInstagram, FaYoutube, FaTiktok, FaLemon } from "react-icons/fa6";

const ContactPage = () => {
  return (
    <div className="flex flex-col">
      {/* Contact */}
      <div className="bg-[#1b1b1b] py-20">
        <div className="container flex flex-col gap-x-20 gap-y-10 p-6 md:flex-row">
          <div className="flex basis-1/2 flex-col gap-4">
            <h2
              className={cn(
                luckiest_guy.className,
                "items-center text-wrap bg-gradient-to-b from-[#fdfe28] from-10% via-[#ffa136] via-40% to-[#f66708] to-80% bg-clip-text text-5xl text-transparent md:text-6xl lg:text-7xl",
                "drop-shadow-[0px_4px_2px_rgba(47,48,46,1)]",
              )}
            >
              Contact Us
            </h2>
            <p className="text-2xl text-[#d5ddf4] md:text-3xl lg:text-4xl">
              How can we help you?
            </p>
          </div>
          <div className="flex basis-1/2 flex-col gap-2">
            <input
              type="text"
              placeholder="Name"
              className="rounded border bg-transparent p-2 text-[#d2def4]"
            />
            <input
              type="email"
              placeholder="Email"
              className="rounded border bg-transparent p-2 text-[#d2def4]"
            />
            <input
              type="text"
              placeholder="Subject"
              className="rounded border bg-transparent p-2 text-[#d2def4]"
            />
            <input
              type="text"
              placeholder="Message"
              className="rounded border bg-transparent p-2 pb-24 text-[#d2def4]"
            />
            <Button.Primary className="mt-6 w-fit font-bold uppercase shadow-md">
              Submit
            </Button.Primary>
          </div>{" "}
        </div>
      </div>

      {/* Social */}
      <div className="bg-[#d2d5f4] py-20">
        <div className="container flex flex-col justify-center gap-x-40 gap-y-10 p-6 md:flex-row">
          <div className="flex flex-col gap-y-6">
            <h2
              className={cn(
                luckiest_guy.className,
                "items-center text-wrap bg-gradient-to-b from-[#fdfe28] from-10% via-[#ffa136] via-40% to-[#f66708] to-80% bg-clip-text text-5xl text-transparent md:text-6xl lg:text-7xl",
                "drop-shadow-[0px_4px_2px_rgba(134,5,166,1)]",
              )}
            >
              Official
            </h2>
            <ul className="flex flex-col gap-4">
              <li>
                <Link
                  href={"https://minilemon.id"}
                  className="flex flex-row items-center gap-x-4"
                >
                  <FaLemon className="h-6 w-6 text-black" />
                  minilemon.id
                </Link>
              </li>
              <li>
                <Link
                  href={"https://store.minilemon.id"}
                  className="flex flex-row items-center gap-x-4"
                >
                  <FaLemon className="h-6 w-6 text-black" />
                  store.minilemon.id
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-y-6">
            <h2
              className={cn(
                luckiest_guy.className,
                "items-center text-wrap bg-gradient-to-b from-[#fdfe28] from-10% via-[#ffa136] via-40% to-[#f66708] to-80% bg-clip-text text-5xl text-transparent md:text-6xl lg:text-7xl",
                "drop-shadow-[0px_4px_2px_rgba(134,5,166,1)]",
              )}
            >
              Follow
            </h2>
            <ul className="flex flex-col gap-4">
              <li>
                <Link
                  href={"https://instagram.com/minilemon.studio"}
                  target="_blank"
                  className="flex flex-row items-center gap-x-4"
                >
                  <span className="rounded-full bg-black p-1 shadow-lg">
                    <FaInstagram className="text-white" />
                  </span>
                  minilemon.studio
                </Link>
              </li>
              <li>
                <Link
                  href={"https://www.tiktok.com/@minilemon.studio"}
                  target="_blank"
                  className="flex flex-row items-center gap-x-4"
                >
                  <span className="rounded-full bg-black p-1 shadow-lg">
                    <FaTiktok className="text-white" />
                  </span>
                  minilemon.id
                </Link>
              </li>
              <li>
                <Link
                  href={"https://www.youtube.com/@MinilemonIndonesia"}
                  target="_blank"
                  className="flex flex-row items-center gap-x-4"
                >
                  <span className="rounded-full bg-black p-1 shadow-lg">
                    <FaYoutube className="text-white" />
                  </span>
                  minilemon.id
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
