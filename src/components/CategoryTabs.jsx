const CategoryTabs = () => {
  const categories = [
    { label: 'All', icon: '🟢' },
    { label: 'Education', icon: '📚' },
    { label: 'AI', icon: '🤖' },
    { label: 'Business', icon: '💼' },
    { label: 'Career', icon: '🌱' },
    { label: 'Crypto', icon: '💎' },
    { label: 'Influencer', icon: '📸' },
  ];

  return (
    <div className="p-4 flex space-x-4  justify-between">
      {categories.map((category, index) => (
        <div key={index} className="flex flex-col items-center space-y-2">
          <span className="text-2xl">{category.icon}</span>
          <span>{category.label}</span>
        </div>
      ))}
    </div>
  );
};

export default CategoryTabs;
