import Link from "next/link";
import React from "react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (

    <div className="relative p-6 bg-pink-300 sm:p-0">
        <div className="relative flex lg:flex-row w-full h-screen justify-center flex-col  sm:p-0">
          {children}
        </div>
    </div>
  );
}