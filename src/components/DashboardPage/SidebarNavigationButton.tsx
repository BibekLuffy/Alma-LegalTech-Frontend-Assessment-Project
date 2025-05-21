import React from "react";

const SidebarNavigationButton = ({
  name,
  isSelected,
  onClick,
}: {
  name: string;
  isSelected: boolean;
  onClick: () => void;
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`text-left cursor-pointer mb-2 ${
        isSelected ? "font-bold" : ""
      }`}
    >
      {name}
    </button>
  );
};

export default SidebarNavigationButton;
