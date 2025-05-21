"use client";

import { redirect, RedirectType } from "next/navigation";
import { useAppSelector } from "@/redux/hooks";
import { selectIsLoggedIn } from "@/redux/adminSlice/selectors";
import DashboardSidebar from "./DashboardSidebar";
import DashboardContent from "./DashboardContent";

const DashboardPage = () => {
  const isLoggedIn = useAppSelector(selectIsLoggedIn);

  if (!isLoggedIn) {
    redirect("/admin/login", RedirectType.replace);
  }
  return (
    <div className="flex h-[100vh] overflow-x-hidden">
      <DashboardSidebar />
      <DashboardContent />
    </div>
  );
};

export default DashboardPage;
