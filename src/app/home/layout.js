""
import Nav from '@/components/Navigation';
export default function Layout({ children }) {
  return (
    <div>
      <Nav />
      {children}
    </div>
  );
}
