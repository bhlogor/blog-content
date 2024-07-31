import menu from "@config/menu.json";
import { usePathname} from 'next/navigation';
import Link from 'next/link';

const Header = () => {
 
  return (
    <>
      <header className={`header mt-8 pt-12 pb-3`}>
        <nav className="navbar container text-center md:text-left">
        </nav>
      </header>
    </>
  );
};

export default Header;
