import React from "react";
import Button from "./Button";

export default function Footer() {
  return (
    <footer className="flex justify-center md:justify-end mt-[88px] p-[32px]">
      <nav>
        <ul className="grid grid-flow-col-dense auto-cols-auto gap-x-[8px] gap-y-[16px]">
          <li>
            <Button
              href="https://blog.like.co/"
              target="_blank"
              rel="noreferrer"
            >
              Blog
            </Button>
          </li>
          <li>
            <Button
              href="https://docs.like.co/faq"
              target="_blank"
              rel="noreferrer"
            >
              FAQ
            </Button>
          </li>
          <li>
            <Button
              href="https://likecoin.notion.site/Branding-and-Design-96b3d582c3014003985a8819b31217fa"
              target="_blank"
              rel="noreferrer"
            >
              Brand
            </Button>
          </li>
        </ul>
      </nav>
    </footer>
  );
}
