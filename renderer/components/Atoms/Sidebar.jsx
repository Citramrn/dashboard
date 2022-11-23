// import link router
import Link from "next/link";

import { navLinks } from "./menus";

export default function Sidebar() {
  return (
    <div className="h-auto shadow-sm w-64 px-9 py-4  space-y-16 bg-color-grey-light">
      <div className="flex flex-row items-center">
        <picture>
          <source srcSet="/img/logo.png" type="image/webp" />
          <img src="/img/logo.png" alt="picture" />
        </picture>
      </div>
      <ul className="font-['Roboto']">
        {navLinks.map((list) => (
          <Link href={list.link} key={list.id}>
            <li className="flex flex-row items-center mb-7 text-color-grey cursor-pointer  text-color-gray-light">
              <div className="mr-5">{list.iconify}</div>
              <div className="font-medium"> {list.menu}</div>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
