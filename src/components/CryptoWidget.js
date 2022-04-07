import React from "react";

export default function CryptoWidget() {
  React.useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://crypto.com/price/static/widget/index.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
      <div
        id="crypto-widget-CoinList"
        data-design="modern"
        data-coins="likecoin"
      ></div>
  );
}
