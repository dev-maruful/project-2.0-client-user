"use client";
import { Button, Dropdown, Navbar } from "keep-react";
import Link from "next/link";
import { CaretDown } from "phosphor-react";
import Logo from "../Logo";
import { SearchBarComponent } from "./searchBar/SearchBarComponent";

export default function NavbarComponent() {
  return (
    <header className=" bg-gray-50">
      <nav className="">
        <div className="hidden md:block">
          <div className="flex items-center py-6 mx-auto max-w-7xl">
            <Logo />
            <div className="w-3/5">
              <SearchBarComponent />
            </div>
            <div className="flex justify-center w-1/5 gap-4">
              <Button type="primary" size="sm">
                Login
              </Button>
              <Button type="outlinePrimary" size="sm">
                Register
              </Button>
            </div>
          </div>
          <hr className="bg-gray-200" />
          <ul className="flex items-center gap-4 mx-auto max-w-7xl">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/shop">Shop</Link>
            </li>
            <li>
              <Dropdown
                label="Pages"
                size="sm"
                type="outline"
                dismissOnClick={true}
              >
                <Dropdown.Item>Dashboard</Dropdown.Item>
                <Dropdown.Item>Settings</Dropdown.Item>
                <Dropdown.Item>Earnings</Dropdown.Item>
                <Dropdown.Item>Sign out</Dropdown.Item>
              </Dropdown>
            </li>
            <li>
              <Link href="/help">Help Line</Link>
            </li>
          </ul>
        </div>
        <Navbar fluid={true} className="!py-5 md:hidden">
          <Navbar.Container className="flex items-center justify-between">
            <Logo />
            <Navbar.Collapse
              collapseType="sidebar"
              className="fixed right-0 top-0 bg-white p-10 xl:!w-1/6 lg:!w-2/6 md:!w-1/2 w-2/3 shadow-lg"
            >
              <Navbar.Container tag="ul" className="flex flex-col gap-5">
                <Navbar.Link
                  linkName="Home"
                  icon={<CaretDown size={20} />}
                  className="!py-0"
                />
                <Navbar.Link
                  linkName="Projects"
                  icon={<CaretDown size={20} />}
                  className="!py-0"
                />
                <Navbar.Link
                  linkName="Blogs"
                  icon={<CaretDown size={20} />}
                  className="!py-0"
                />
                <Navbar.Link linkName="News" className="!py-0" />
                <Navbar.Link linkName="Resources" className="!py-0" />
              </Navbar.Container>
            </Navbar.Collapse>
            <Navbar.Container className="flex gap-1">
              <Navbar.Toggle className="block" />
            </Navbar.Container>
          </Navbar.Container>
        </Navbar>
      </nav>
    </header>
  );
}
