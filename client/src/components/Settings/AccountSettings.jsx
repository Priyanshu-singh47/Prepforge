import { Lock } from "lucide-react";

const AccountSettings = () => {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5">
      <div className="flex items-center gap-3 mb-5">
        <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center">
          <Lock className="w-5 h-5 text-blue-600" />
        </div>

        <div>
          <h2 className="text-base font-semibold text-gray-900">
            Account
          </h2>
          <p className="text-sm text-gray-500">
            Manage your account security.
          </p>
        </div>
      </div>

      <button className="w-full flex items-center justify-between rounded-xl border border-gray-200 px-4 py-3 hover:bg-gray-50 transition">
        <div className="text-left">
          <p className="font-medium text-gray-900">
            Change Password
          </p>

          <p className="text-sm text-gray-500">
            Update your account password.
          </p>
        </div>

        <Lock className="w-5 h-5 text-gray-500" />
      </button>
    </div>
  );
};

export default AccountSettings;