"use client";
import { Button, Label, TextInput } from "keep-react";
import Link from "next/link";
import { FaFacebook, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import Logo from "../Logo";

function Footer() {
  return (
    <footer className="w-full px-3 pt-10 mx-auto max-w-7xl">
      <div className="flex flex-col w-full gap-4 px-8 py-4 md:gap-0 md:px-0 md:flex-row">
        <div className="flex flex-col flex-1 gap-4">
          <Logo />
          <div className="text-sm font-normal text-gray-500">
            <p>Address: Gazipur, Dhaka</p>
            <p> Phone: +88019218837244</p>
            <p> Email: info@theshopx.net</p>
          </div>
          <div className="flex items-center gap-2 font-normal text-gray-400 ">
            <FaLinkedinIn />
            <FaFacebook />
            <FaTwitter />
          </div>
        </div>
        <div className="flex flex-col flex-1 gap-4">
          <h3 className="text-base font-bold text-gray-800">Categories</h3>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>
              <Link href="/">Health & Wellness</Link>
            </li>
            <li>
              <Link href="/">Electronics & Gadgets</Link>
            </li>
            <li>
              <Link href="/">Fashion & Apparel</Link>
            </li>
            <li>
              <Link href="/">Beauty & Personal Care</Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col flex-1 gap-4">
          <h3 className="text-base font-bold text-gray-800">Useful Link</h3>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>
              <Link href="/">About Us</Link>
            </li>
            <li>
              <Link href="/">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/">Terms & Service</Link>
            </li>
            <li>
              <Link href="/">How It Works</Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col flex-1 gap-4">
          <h3 className="text-base font-bold text-gray-800">Newsletter</h3>
          <div>
            <Label value="Email Address" />
            <TextInput
              id="#id-8"
              placeholder="example@gmail.com"
              color="gray"
            />
          </div>
          <Button className="w-full bg-[#5D5FEF]" type="primary" size="sm">
            Subscribe
          </Button>
        </div>
      </div>
      <hr />
      <div className="py-4 text-center">
        <p className="text-sm font-normal text-gray-400">
          © All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
