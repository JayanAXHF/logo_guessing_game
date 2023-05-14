import React from "react";

const Footer = () => {
  return (
    <div className="fixed bottom-0 w-screen text-center">
      {" "}
      <footer className="bg-white rounded-lg shadow  dark:bg-zinc-800 text-center">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span
            className="text-sm text-gray-500 sm:text-center dark:text-gray-100 text-center
          
          "
          >
            © 2023{" "}
            <a href="https://flowbite.com/" className="hover:underline">
              Jayan S. Choudhary
            </a>
            . All Rights Reserved.
          </span>
          <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0 text-right">
            <li>
              <a
                href="https://github.com/JayanAXHF/logo_guessing_game"
                className="mr-4 hover:underline md:mr-6 text-right"
                target="_blank"
              >
                Github Repo
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
