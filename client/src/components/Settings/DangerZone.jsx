import { useState } from "react";
import { LogOut, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

import api from "../../services/api";
import ConfirmModal from "../common/ConfirmModal";

const DangerZone = () => {
  const navigate = useNavigate();

  const [logoutOpen, setLogoutOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const handleDeleteAccount = async () => {
    try {
      setLoading(true);

      await api.delete("/settings/account");

      localStorage.removeItem("token");

      navigate("/login");

    } catch (error) {
      console.error(error);

    } finally {
      setLoading(false);
      setDeleteOpen(false);
    }
  };

  return (
    <>
      <div className="rounded-2xl border border-red-200 bg-white p-5 shadow-sm dark:border-red-900 dark:bg-gray-800">

        <div className="mb-5">

          <h2 className="text-base font-semibold text-gray-900 dark:text-white">
            Account Actions
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            Logout or permanently delete your account.
          </p>

        </div>


        <div className="flex flex-col gap-3 sm:flex-row">


          <button
            onClick={() => setLogoutOpen(true)}
            className="flex items-center justify-center gap-2 rounded-xl border border-gray-300 px-4 py-2.5 font-medium transition hover:bg-gray-50 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700"
          >

            <LogOut className="h-4 w-4" />

            Logout

          </button>



          <button
            onClick={() => setDeleteOpen(true)}
            className="flex items-center justify-center gap-2 rounded-xl border border-red-200 bg-red-50 px-4 py-2.5 font-medium text-red-600 transition hover:bg-red-100 dark:border-red-900 dark:bg-red-900/20 dark:hover:bg-red-900/40"
          >

            <Trash2 className="h-4 w-4" />

            Delete Account

          </button>


        </div>

      </div>



      <ConfirmModal
        open={logoutOpen}
        title="Logout"
        message="Are you sure you want to logout?"
        confirmText="Logout"
        loading={false}
        onConfirm={handleLogout}
        onCancel={() => setLogoutOpen(false)}
      />



      <ConfirmModal
        open={deleteOpen}
        title="Delete Account"
        message="This action cannot be undone. Your account and all associated data will be permanently deleted."
        confirmText="Delete Account"
        loading={loading}
        onConfirm={handleDeleteAccount}
        onCancel={() => setDeleteOpen(false)}
      />

    </>
  );
};

export default DangerZone;