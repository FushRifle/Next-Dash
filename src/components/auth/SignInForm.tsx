"use client";
import Checkbox from "@/components/form/input/Checkbox";
import Input from "@/components/form/input/InputField";
import Label from "@/components/form/Label";
import Button from "@/components/ui/button/Button";
import { ChevronLeftIcon, EyeCloseIcon, EyeIcon } from "@/icons";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";

export default function SignInForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  return (
    <div className="flex flex-col items-center justify-center w-full bg-pink-300 p-8">
      <div className="w-full max-w-md sm:pt-10 mx-auto">
        <Link
          href="/"
          className="inline-flex items-center text-sm text-gray-500 hover:text-gray-700 
          dark:text-gray-400 dark:hover:text-gray-300"
        >
          <ChevronLeftIcon />
          Back to dashboard
        </Link>
      </div>
      <div className="flex flex-col justify-center w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <div className="bg-white">
          <form>
            <div className="space-y-3">
              <div>
                <Label>
                  Email <span className="text-error-500">*</span>
                </Label>
                <Input placeholder="info@gmail.com" type="email" 
                className="bg-gray-100 border border-white-300 focus:outline-none focus:ring-2 focus:ring-brand-500"
                />
              </div>

              <div>
                <Label>
                  Password <span className="text-black-500">*</span>
                </Label>
                <div className="relative">
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    className="bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-500"
                  />
                  <span
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute z-30 -translate-y-1/2 cursor-pointer right-4 top-1/2"
                  >
                    {showPassword ? (
                      <EyeIcon className="fill-gray-500" />
                    ) : (
                      <EyeCloseIcon className="fill-gray-500" />
                    )}
                  </span>
                </div>
              </div>
               <div>
                  <Label>
                    CAPTCHA Verification<span className="text-error-500">*</span>
                  </Label>

                  <div className="bg-gray-100 p-3 rounded-md">
                    {/* CAPTCHA component can go here */}
                    <span className="text-gray-500">I'm not a robot</span>
                  </div>

                </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Checkbox checked={isChecked} onChange={setIsChecked} />
                  <span className="block font-normal text-gray-700">
                    Keep me logged in
                  </span>
                </div>
                </div>


                <div className="mt-5">
                  <p className="text-sm font-normal text-center text-gray-700">
                    <Link href="/reset-password" className="text-sm text-pink-500 hover:text-brand-600">
                    Forgot password?
                    </Link>
                  </p>
                </div>
              

              <div>
                <Button className="w-full bg-pink-500" size="sm">
                  Sign in
                </Button>
              </div>
            </div>
          </form>

          <div className="mt-5">
            <p className="text-sm font-normal text-center text-gray-700">
              Don&apos;t have an account? {" "}
              <Link
                href="/signup"
                className="text-brand-500 hover:text-brand-600"
              >
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
      <div className="mb-6 text-center">
        <Link href="/" className="flex items-center gap-3 p-3">
          <img src="/images/user/owner.png" alt="Logo" className="w-10 h-10" />
          <span className="text-lg font-bold">Pretura</span>
        </Link>
      </div>
    </div>
  );
}
