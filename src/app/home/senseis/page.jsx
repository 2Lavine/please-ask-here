'use client';
import CategoryTabs from '@/components/CategoryTabs';
import { UserDetailCard } from '@/components/UserDetailCard';
import { Input, Select, SelectItem } from '@nextui-org/react';
import { useEffect, useState } from 'react';
const order = [
  {
    value: 'timeDes',
    label: 'New to Old',
  },
  {
    value: 'timeAsc',
    label: 'Old to New',
  },
];
const categories = [
  { label: 'All', icon: '🟢' },
  { label: 'Education', icon: '📚' },
  { label: 'AI', icon: '🤖' },
  { label: 'Business', icon: '💼' },
  { label: 'Career', icon: '🌱' },
  { label: 'Crypto', icon: '💎' },
  { label: 'Influencer', icon: '📸' },
];

export default function Page() {
  const [senseis, setSenseis] = useState([]);
  const [orderType, setOrderType] = useState(['timeDes']);
  const [search, setSearch] = useState('');
  const [selectedTab, setSelectedTab] = useState(categories[0]);

  const handleTabChange = (category) => {
    setSelectedTab(category);
    // 处理选中标签的变化
  };
  useEffect(() => {
    const type = orderType.values().next().value;
    const URL = `/api/sensies?orderType=${type}&category=${selectedTab.label}&search=${search}`;
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
  }, [orderType, search, selectedTab]);
  return (
    <div className="w-9/12 mx-auto">
      <div className="flex items-center p-4  justify-between">
        <div className="flex">
          <div className="mr-4">
            <p className="text-black text2-2xl font-semibold  ">Senseis</p>
          </div>
        </div>
        <div className="flex space-x-2">
          <Input
            label="Search"
            classNames={{
              inputWrapper: 'h-full bg-white',
            }}
            className="w-64 text-black"
            placeholder="Start Search"
            value={search}
            onValueChange={setSearch}
          />
          <Select
            label="Sort by"
            placeholder="Followers"
            // labelPlacement="outside-left"
            className="w-48 text-black"
            selectedKeys={orderType}
            onSelectionChange={setOrderType}
            classNames={{
              trigger: 'bg-white',
              // label: 'w-24 ',
            }}
          >
            {order.map((item) => (
              <SelectItem key={item.value} value={item.value}>
                {item.label}
              </SelectItem>
            ))}
          </Select>
        </div>
      </div>
      <CategoryTabs
        categories={categories}
        selectedTab={selectedTab}
        onTabClick={handleTabChange}
      />
      <div className="flex flex-col space-y-8">
        {senseis.map((item) => (
          <UserDetailCard {...item} key={item.userID} />
        ))}
      </div>
      <div className="h-8"></div>
    </div>
  );
}
