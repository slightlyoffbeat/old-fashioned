import Link from 'next/link';
import variables from '../variables';

const baseUrl = variables.prodUrl;

const Header = () => (
  <header>
    <nav>
      <Link prefetch href={`${baseUrl}/`}><a>Home</a></Link> |
      <Link prefetch href={`${baseUrl}/about`}><a> About</a></Link>
    </nav>
  </header>
);

export default Header;
