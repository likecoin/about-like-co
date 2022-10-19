import * as React from "react"
import { Helmet } from "react-helmet"

import GradientText from "./GradientText"

export const SubscribeNewsletterSection = () => {
  const isSSR = typeof window === "undefined";
  React.useEffect(() => {
    window.CustomSubstackWidget = {
      substackUrl: "likecoin.substack.com",
      placeholder: "example@gmail.com",
      buttonText: "Subscribe",
      theme: "custom",
      colors: {
        primary: "#AAF1E7",
        input: "#28646E",
        email: "#FFFFFF",
        text: "#28646E",
      }
    };
  }, []);
  return (
    <section className="flex flex-col items-center mt-[88px]">
      <GradientText tag="h3" className="text-[32px] text-center">Newsletter</GradientText>
      <div id="custom-substack-embed" className="mt-[32px]" />
      {!isSSR && (
        <React.Suspense>
          <Helmet>
            <script src="https://substackapi.com/widget.js" async />
          </Helmet>
        </React.Suspense>
      )}
    </section>
  );
}

export default SubscribeNewsletterSection;
