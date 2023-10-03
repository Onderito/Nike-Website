import { headerLogo } from "../assets/images/index.js";
import { hamburger } from "../assets/icons/index.js";
import { navLinks } from "../constants";
function Nav() {
  return (
    <header className="padding-x py-8 absolute z-10 w-ful">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="Logo" width={130} height={29} />
        </a>
        <ul className="flex-1 flex justify-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
