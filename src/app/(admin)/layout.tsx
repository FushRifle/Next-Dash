"use client";

import { useSidebar } from "@/context/SidebarContext";
import AppHeader from "@/layout/AppHeader";
import AppSidebar from "@/layout/AppSidebar";
import Backdrop from "@/layout/Backdrop";
import RightSideBar from "@/layout/RightSideBar";
import React from "react";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const { isExpanded, isHovered, isMobileOpen } = useSidebar();

  // Dynamic margins for responsive layout
  const sidebarWidth = isMobileOpen ? "0" : isExpanded || isHovered ? "212px" : "90px";
  const rightSidebarWidth = "250px";

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900">
      {/* Header */}
      <AppHeader />

      <div className="flex flex-1">
        {/* Left Sidebar */}
        <div
          className={`fixed top-0 left-0 z-50 h-full transition-all duration-300 ease-in-out`}
          style={{ width: sidebarWidth }}
        >
          <AppSidebar />
        </div>

        {/* Main Content */}
        <div
          className="flex-grow flex flex-col transition-all duration-300 ease-in-out"
          style={{ marginLeft: sidebarWidth, marginRight: rightSidebarWidth }}
        >
          {/* Backdrop for mobile */}
          <Backdrop />

          <div className="flex-1 p-4 mx-auto w-full max-w-screen-2xl md:p-6">
            {children}
          </div>
        </div>

        {/* Right Sidebar */}
        <div
          className="fixed top-0 right-0 z-40 h-full transition-all duration-300 ease-in-out"
          style={{ width: rightSidebarWidth }}
        >
          <RightSideBar />
        </div>
      </div>
    </div>
  );
}
