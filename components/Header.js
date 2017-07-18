import Link from 'next/link';
import { baseUrl } from '../variables';

const Header = () => (
  <header>
    <nav>
      <Link href={`${baseUrl}/`}><a>Home</a></Link> |
      <Link href={`${baseUrl}/about`}><a> About</a></Link>
    </nav>
  </header>
);

export default Header;
