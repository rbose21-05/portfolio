import React from "react";

const CustomButton = ({ label, onClick }) => {
    return (
        <button
            onClick={onClick}
            className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition duration-300  dark:bg-purple-500 dark:hover:bg-purple-600 dark:text-black"
        >
            {label}
        </button>
    );
};

export default CustomButton;
