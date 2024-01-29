import React, { useState } from "react";
import { Transition, Menu } from "@headlessui/react";

import actionArrow from "../../../Assets/action-arrow.svg";
import ReviewDetailsModal from "./ReviewDetailsModal";
import ReviewReportModal from "./ReviewReportModal";

function DropdownActionMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          onClick={handleToggle}
          className="flex py-2.5 px-[15px] items-center gap-2.5 rounded-md bg-[#00CCB6] action-btn"
        >
          Actions
          <img src={actionArrow} alt="action" />
        </button>
      </div>

      <Transition
        show={isOpen}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
        className="relative z-50"
      >
        <Menu className="z-50">
          <Menu.Items
            static
            className="absolute z-50 right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          >
            <div className="py-1">
              <ReviewDetailsModal />
              <ReviewReportModal />
            </div>
          </Menu.Items>
        </Menu>
      </Transition>
    </div>
  );
}

export default DropdownActionMenu;
