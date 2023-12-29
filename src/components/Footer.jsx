/*
    File: Footer.jsx
    Version: 1.0
*/

import { getCopyrightYear } from "../utils/date";

export default function Footer() {
  return (
    <footer className="bg-neutGray-800 dark:bg-neutGray-1050 mt-auto px-mobileBound py-8 sm:px-6 sm:py-9 md:px-7 md:py-10 lg:px-8">
      <p className="font-heading text-center mx-auto">
        &copy; {getCopyrightYear()} Christopher H. All rights reserved
      </p>
    </footer>
  );
}
