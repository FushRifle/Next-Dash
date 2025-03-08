import type { Metadata } from "next";
import React from "react";

import { EcommerceMetrics } from "@/components/ecommerce/EcommerceMetrics";
import MonthlySalesChart from "@/components/ecommerce/MonthlySalesChart";
import MonthlyTarget from "@/components/ecommerce/MonthlyTarget";
import RecentOrders from "@/components/ecommerce/RecentOrders";
import StatisticsChart from "@/components/ecommerce/StatisticsChart";

export default function Ecommerce() {
  return (
    <div className="w-full items-center justify-between">

    <br/>
    <br/>
      {/* Header Section */}
      <div className="flex items-center justify-between">
        <p className="text-sm md:text-base text-gray-400">Overview</p>
        <p className="text-sm md:text-base text-gray-400">Today</p>
      </div>

      {/* Main Grid Layout */}
      <div className="grid grid-cols-12 lg:col-span-8">
        
        {/* Top Full-Width Section */}
        <div className="col-span-12">
          <div className="p-2">
            <EcommerceMetrics />
          </div>
        </div>

        {/* Stats and Sales Charts */}
        <div className="col-span-12 lg:col-span-8 flex flex-col h-full">
          <div className="p-2">
            <StatisticsChart />
          </div>
        </div>

        <div className="col-span-12 lg:col-span-4 flex flex-col h-full h[350px]">
          <div className="p-2">
            <RecentOrders />
          </div>
        </div>

        <div className="col-span-12 lg:col-span-6 flex flex-col h-full">
          <div className="p-2">
            <MonthlySalesChart/>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-6 flex flex-col h-full">
          <div className="p-2">
            <MonthlyTarget />
          </div>
        </div>

      </div>
    </div>
  );
}
