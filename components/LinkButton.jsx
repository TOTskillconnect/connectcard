import React from 'react';

const LinkButton = ({ label, icon, url }) => {
  return (
    <a 
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center w-full py-3 px-4 mb-3 
                bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 active:bg-gray-100 dark:active:bg-gray-600
                text-gray-800 dark:text-gray-200 font-medium rounded-lg 
                border border-gray-200 dark:border-gray-700 shadow-sm
                transition-all duration-200 hover:scale-[1.02] 
                focus:outline-none focus:ring-2 focus:ring-amber-400"
    >
      {icon && <span className="mr-2 text-lg">{icon}</span>}
      {label}
    </a>
  );
};

export default LinkButton; 