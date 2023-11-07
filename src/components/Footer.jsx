import {
  FacebookLogo,
  InstagramLogo,
  TwitterLogo,
} from "@phosphor-icons/react/dist/ssr";
import React from "react";

function Footer() {
  return (
    <div>
      <div className="flex justify-center gap-4 mb-10">
        <a href="https://facebook.com" className="hover:text-blue-700">
          <FacebookLogo size={28} />
        </a>
        <a href="https://twitter.com" className="hover:text-blue-700">
          <TwitterLogo size={28} />
        </a>
        <a href="https://instagram.com" className="hover:text-blue-700">
          <InstagramLogo size={28} />
        </a>
      </div>
      <p className="text-center mb-8">© 2023 . All Rights Reserved</p>
    </div>
  );
}

export default Footer;
