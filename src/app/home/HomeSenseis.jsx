'use client';
import CategoryTabs from '@/components/CategoryTabs';
import { UserCard } from '@/components/UserCard';
import Link from 'next/link';
import { useEffect, useState } from 'react';
const categories = [
  { label: 'All', icon: '🟢' },
  { label: 'Education', icon: '📚' },
  { label: 'AI', icon: '🤖' },
  { label: 'Business', icon: '💼' },
  { label: 'Career', icon: '🌱' },
  { label: 'Crypto', icon: '💎' },
  { label: 'Influencer', icon: '📸' },
];
export default function HomeSenseis() {
  const [selectedTab, setSelectedTab] = useState(categories[0]);
  const [senseis, setSenseis] = useState([]);

  const handleTabChange = (category) => {
    setSelectedTab(category);
    // 处理选中标签的变化
  };
  useEffect(() => {
    const URL = `/api/sensies?category=${selectedTab.label}`;
    fetch(URL, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res.content);
        setSenseis(res.content);
      });
  }, [selectedTab]);
  return (
    <>
      <div className="p-4 flex justify-between">
        <h1 className="text-xl font-bold">Sensei Category</h1>
      </div>
      <CategoryTabs
        categories={categories}
        selectedTab={selectedTab}
        onTabClick={handleTabChange}
      />
      <div className="p-4 flex justify-between">
        <h1 className="text-xl font-bold">Recommended</h1>
        <Link
          href="/home/senseis"
          className="text-blue-500 hover:text-blue-700"
        >
          See all
        </Link>
      </div>
      <div className="flex flex-wrap items-center justify-between">
        {senseis.map((userCard) => (
          <UserCard {...userCard} key={userCard.userID} />
        ))}
      </div>
    </>
  );
}
