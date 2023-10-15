'use client';
const CategoryTabs = ({ categories, selectedTab, onTabClick }) => {
  return (
    <div className="p-4 flex space-x-4  justify-between">
      {categories.map((category, index) => (
        <div
          key={index}
          className={`flex cursor-pointer flex-col items-center space-y-2 ${
            selectedTab === category ? 'text-blue-500' : 'text-gray-500'
          }`}
          onClick={() => onTabClick(category)}
        >
          <span className="text-2xl">{category.icon}</span>
          <span>{category.label}</span>
        </div>
      ))}
    </div>
  );
};

export default CategoryTabs;
