import Sidebar from '@/components/Sidebar';
import Image from 'next/image';
export default function Layout({ children }) {
  return (
    <>
      <div className="fixed ml-8 z-10">
        <Sidebar />
      </div>
      <div className="w-screen h-28 relative">
        <Image src="/top-banner.png" alt="top banner" fill={true} />
      </div>
      <div className="ml-[25rem]  mt-8 w-3/5">{children}</div>
    </>
  );
}
