import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header>
      <div>
      <div className="topNav">
        <Image
          alt="logo"
          src={"/images/logo_black.png"}
          width={50}
          height={50}
        />

        <nav>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/events">Events</Link>
            </li>
            <li>
              <Link href="/about-us">About Us</Link>
            </li>
          </ul>
        </nav>
      </div>
      <h1 className="title">Get Ready to Connect and Engage With Our Event App</h1>
      </div>
    </header>
  );
};

export default Header;
