import React from "react";

const footerInfo = [
  "123 Fake Street, London, E1 4UD",
  "hello@fakehotel.com",
  "0123 456789"
];
function Footer() {
  return (
    <div className="footer">
      <ul>
        {footerInfo.map(data => {
          return <li>{data}</li>;
        })}
      </ul>
    </div>
  );
}

export default Footer;
