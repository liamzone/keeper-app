import React from "react";

const currentYear = new Date().getFullYear();

function Footer() {
  return (
    <footer>
      <p>&copy; {currentYear} Keeper App.</p>
    </footer>
  );
}

export default Footer;
