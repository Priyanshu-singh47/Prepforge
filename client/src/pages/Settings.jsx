import ProfileCard from "../components/Settings/ProfileCard";
import AppearanceCard from "../components/Settings/AppearanceCard";
import AccountSettings from "../components/Settings/AccountSettings";
import DangerZone from "../components/Settings/DangerZone";


const Settings = () => {

  return (

    <div className="space-y-5">


      <div>

        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Settings
        </h1>


        <p className="mt-1 text-gray-500">
          Manage your account settings.
        </p>


      </div>




      <div className="grid gap-5 lg:grid-cols-3">


        <div className="lg:col-span-2">

          <ProfileCard />

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