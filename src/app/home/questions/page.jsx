'use client';
import { QuestionCard } from '@/components/QuestionCard';
import { Input, Select, SelectItem } from '@nextui-org/react';
import { useEffect, useState } from 'react';
export default function Page() {
  const [questions, setQuestions] = useState([]);
  const [orderType, setOrderType] = useState(['timeDes']);
  const [search, setSearch] = useState('');

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
  useEffect(() => {
    const type = orderType.values().next().value;
    const URL = `/api/questions?orderType=${type}&search=${search}`;
    fetch(URL, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res.content);
        setQuestions(res.content);
      });
  }, [orderType, search]);
  return (
    <div className="w-9/12 mx-auto">
      <div className="flex items-center p-4  justify-between">
        <div className="flex">
          <div className="mr-4">
            <p className="text-black text2-2xl font-semibold  ">
              All Questions
            </p>
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
            className="w-36 text-black"
            selectedKeys={orderType}
            onSelectionChange={setOrderType}
            classNames={{
              trigger: 'bg-white',
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
      {questions.map((question) => (
        <QuestionCard {...question} key={question.questionID} />
      ))}
      <div className="h-8"></div>
    </div>
  );
}
