"use client";
import { sidebarLinks } from "@/constants/constants";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { Button } from "../ui/button";
import { SignedOut } from "@clerk/nextjs";

const LeftSidebar = () => {
  const pathname = usePathname();
  return (
    <section className="sticky left-0 top-0 flex h-screen flex-col bg-accent justify-between overflow-y-hidden border-r p-6 pt-36 dark:shadow-none max-sm:hidden lg:w-[266px]">
      <div className="flex flex-1 flex-col gap-6 ">
        {sidebarLinks.map((item) => {
          const isActive =
            (pathname.includes(item.route) && item.route.length > 1) ||
            pathname === item.route;
          return (
            <Link
              key={item.route}
              href={item.route}
              className={`${
                isActive ? `bg-primary` : ""
              } flex items-center justify-start gap-4 p-4 hover:bg-primary/50 rounded-lg`}
            >
              <Image
                src={item.imgURL}
                alt={item.label}
                width={20}
                height={20}
                className="invert dark:invert-0"
              />
              <p
                className={`${
                  isActive ? "text-base font-bold" : ""
                } max-lg:hidden`}
              >
                {item.label}
              </p>
            </Link>
          );
        })}
      </div>
      <SignedOut>
        <div className="flex flex-col gap-3">
          <Link href="/sign-in">
            <Button className="w-full min-h-[41px] rounded-lg px-4 py-3 shadow-none">
              <Image
                src="/assets/icons/account.svg"
                alt="login"
                width={20}
                height={20}
                className="lg:hidden invert"
              />
              <p className="max-lg:hidden">Login</p>
            </Button>
          </Link>

          <Link href="/sign-up">
            <Button
              className="w-full min-h-[41px] rounded-lg px-4 py-3 shadow-none"
              variant="outline"
            >
              <Image
                src="/assets/icons/sign-up.svg"
                alt="sign-up"
                width={20}
                height={20}
                className="lg:hidden invert"
              />
              <p className="max-lg:hidden">Sign Up</p>
            </Button>
          </Link>
        </div>
      </SignedOut>
    </section>
  );
};

export default LeftSidebar;
