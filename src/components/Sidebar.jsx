// import Link from 'next/link';
// import UserProfile from '@/components/UserProfile';
import UserProfile from '@/components/UserProfile';
function Sidebar() {
  return (
    <div className="flex flex-col h-screen justify-center items-center">
      <div className="w-60 h-4/5 overflow-y-auto bg-white p-5 shadow-md rounded-3xl">
        <div className="header mb-5">
          <div className="text-slate-500 mt-2">
            Ask your favorite creators & get their voice replies
          </div>
        </div>
        <UserProfile />
      </div>
    </div>
  );
}
export default Sidebar;
