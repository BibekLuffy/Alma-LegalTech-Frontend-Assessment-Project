import { useAppDispatch } from "@/redux/hooks";
import { setIsLoggedIn } from "@/redux/adminSlice/adminSlice";

const AdminButton = () => {
  const dispatch = useAppDispatch();

  const adminClick = () => {
    const signOut = window.confirm("Would you like to sign out?");
    if (signOut) {
      dispatch(setIsLoggedIn(false));
    }
  };
  return (
    <button
      type="button"
      onClick={adminClick}
      className="appearance-none pl-8 py-1 cursor-pointer flex items-center gap-2 hover:bg-gray-100"
    >
      <div className="size-8 bg-gray-200 rounded-full flex justify-center items-center text-xs font-bold">
        A
      </div>
      <p className="font-bold text-sm">Admin</p>
    </button>
  );
};

export default AdminButton;
