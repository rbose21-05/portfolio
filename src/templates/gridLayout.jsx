import React from "react";

const GridLayout = ({ title_1, description_1, title_2, description_2 }) => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        {/* Card 1 */}
        <div className="bg-white dark:bg-gray-800 shadow-md rounded-xl p-6 text-left">
            <h3 className="text-xl font-semibold text-purple-700 dark:text-purple-400 mb-2">
                {title_1}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
                {description_1}
            </p>
            <button className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition dark:bg-purple-500 dark:hover:bg-purple-600">
                View Project
            </button>
        </div>

        {/* Card 2 */}
        <div className="bg-white dark:bg-gray-800 shadow-md rounded-xl p-6 text-left">
            <h3 className="text-xl font-semibold text-purple-700 dark:text-purple-400 mb-2">
                {title_2}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
                {description_2}
            </p>
            <button className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition dark:bg-purple-500 dark:hover:bg-purple-600">
                View Project
            </button>
        </div>
    </div>
);

export default GridLayout;
