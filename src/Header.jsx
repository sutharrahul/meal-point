import React from "react";
import mealLogo from "./assets/icons8-meal-64.png";

function Header() {
  return (
    <nav className="bg-white dark:bg-gray-800 sticky top-0 ">
      <div className="px-8 mx-auto max-w-7xl">
        <div className="flex items-center justify-between h-16">
          <div className=" flex items-center">
            <a className="flex-shrink-0" href="/">
              <img className="w-12 h-12" src={mealLogo} alt="Workflow" />
            </a>
            <span className="text-gray-950 dark:text-white font-semibold ml-2 text-xl">
              Meal Point
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
