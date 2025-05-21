import { useSearchParams } from "next/navigation";
import LeadsPage from "./LeadsPage";
import SettingsPage from "./SettingsPage";

const DashboardContent = () => {
  const pathname = useSearchParams();
  const isSettingsPage = pathname.get("setting");

  if (isSettingsPage) {
    return <SettingsPage />;
  }
  return <LeadsPage />;
};

export default DashboardContent;
