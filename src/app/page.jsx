import { Button } from '@nextui-org/button';
import Link from 'next/link';
export default function Home() {
  return (
    <>
      <div className="text-3xl font-bold underline">Hello world</div>
      <Link href="/login"> login </Link>
      <Button>Button</Button>
    </>
  );
}
