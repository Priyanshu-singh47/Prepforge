import ProfileCard from "../components/Settings/ProfileCard";
import AppearanceCard from "../components/Settings/AppearanceCard";
import AccountSettings from "../components/Settings/AccountSettings";
import DangerZone from "../components/Settings/DangerZone";

import settingsData from "../mock/settingsData";

const Settings = () => {
  return (
    <div className="space-y-5">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">
          Settings
        </h1>

        <p className="text-gray-500 mt-1">
          Manage your account settings.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-5">
        <div className="lg:col-span-2">
          <ProfileCard profile={settingsData.profile} />
        </div>

        <div className="space-y-5">
          <AppearanceCard />
          <AccountSettings />
        </div>
      </div>

      <DangerZone />
    </div>
  );
};

export default Settings;