import React from 'react';

const FeaturedCard = ({ title, description, icon, url }) => {
  return (
    <a 
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full mb-4 p-4 bg-gray-800 rounded-xl shadow-md 
                border border-lavender-200 hover:shadow-lg
                transition-all duration-200 hover:border-lavender-300"
    >
      <div className="flex items-start">
        {icon && <span className="text-2xl mr-2 flex-shrink-0">{icon}</span>}
        <div>
          <h3 className="font-semibold text-base text-lavender-100">{title}</h3>
          {description && (
            <p className="text-lavender-200 text-sm mt-1">{description}</p>
          )}
        </div>
      </div>
      <div className="mt-3">
        <div className="bg-amber-400 hover:bg-amber-500 
                      text-center py-2 px-4 rounded-lg 
                      text-white font-medium text-sm 
                      transition-colors duration-200">
          Learn More
        </div>
      </div>
    </a>
  );
};

export default FeaturedCard; 