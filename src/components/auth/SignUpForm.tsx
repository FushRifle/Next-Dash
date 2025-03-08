"use client";
import Checkbox from "@/components/form/input/Checkbox";
import Input from "@/components/form/input/InputField";
import Label from "@/components/form/Label";
import { ChevronLeftIcon, EyeCloseIcon, EyeIcon } from "@/icons";
import Link from "next/link";
import React, { useState } from "react";

export default function SignUpForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="flex flex-col flex-1 lg:w-1/2 w-full overflow-y-auto no-scrollbar">
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
      <div className="flex flex-col justify-center flex-1 w-full max-w-md mx-auto">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <form className="mt-6 bg-white">
            <div className="space-y-5">
              <div>
                <Label>
                  Full Name<span className="text-error-500">*</span>
                </Label>
                <Input
                  type="text"
                  id="fullName"
                  name="fullName"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <Label>
                  Email<span className="text-error-500">*</span>
                </Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <Label>
                  Password<span className="text-error-500">*</span>
                </Label>
                <div className="relative">
                  <Input
                    placeholder="Enter your password"
                    type={showPassword ? "text" : "password"}
                  />
                  <span
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute z-30 -translate-y-1/2 cursor-pointer right-4 top-1/2"
                  >
                    {showPassword ? (
                      <EyeIcon className="fill-gray-500 dark:fill-gray-400" />
                    ) : (
                      <EyeCloseIcon className="fill-gray-500 dark:fill-gray-400" />
                    )}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Checkbox
                  className="w-5 h-5"
                  checked={isChecked}
                  onChange={setIsChecked}
                />
                <p className="inline-block text-sm text-gray-500 dark:text-gray-400">
                  I agree to the
                  <Link href="/terms" className="text-brand-500 hover:text-brand-600">
                    Terms & Conditions
                  </Link>
                </p>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full px-4 py-3 text-sm font-medium text-white bg-pink-500 rounded-lg hover:bg-brand-600"
                >
                  Sign Up
                </button>
              </div>
            </div>
          </form>

          <div className="mt-5">
            <p className="text-sm text-center text-gray-700 dark:text-gray-400">
              Already have an account?
              <Link
                href="/signin"
                className="text-brand-500 hover:text-brand-600 dark:text-brand-400"
              >
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>   
                <div className="mb-6 flex justify-center items-center">
  <Link href="/" className="flex items-center gap-3">
    <img src="/images/user/owner.png" alt="Logo" className="w-10 h-10" />
    <span className="text-lg font-bold">Pretura</span>
  </Link>
</div>

    </div>
  );
}