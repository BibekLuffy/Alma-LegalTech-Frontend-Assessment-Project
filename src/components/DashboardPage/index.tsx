"use client";

import { redirect, RedirectType } from "next/navigation";
import { useAppSelector } from "@/redux/hooks";
import { selectIsLoggedIn } from "@/redux/adminSlice/selectors";
import DashboardSidebar from "./DashboardSidebar";
import DashboardContent from "./DashboardContent";
import DashboardTopBar from "./DashboardTopBar";

const DashboardPage = () => {
  const isLoggedIn = useAppSelector(selectIsLoggedIn);

  if (!isLoggedIn) {
    redirect("/admin/login", RedirectType.replace);
  }
  return (
    <div className="sm:flex h-[100dvh] overflow-x-hidden">
      <DashboardSidebar />
      <DashboardTopBar />
      <DashboardContent />
    </div>
  );
};

export default DashboardPage;
