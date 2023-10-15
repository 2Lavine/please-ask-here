'use client';
import { PAHButton } from '@/components/PAHButton';
import { QuestionCard } from '@/components/QuestionCard';
import { Spacer, Tab, Tabs } from '@nextui-org/react';
import { useEffect, useState } from 'react';
export default function Page() {
  const [selected, setSelected] = useState('questions');
  const [questions, setQuestions] = useState([]);
  let tabs = [
    {
      id: 'questions',
      label: 'My Questions',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
      id: 'unlocks',
      label: 'My Unlocks',
      content:
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    },
  ];
  useEffect(() => {
    const userData = localStorage.getItem('user') || '';
    // setUserData(JSON.parse(userData));
    const curUser = JSON.parse(userData).user;
    const userID = curUser.id || 1;
    fetch(`/api/users/${userID}/questions?type=${selected}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((res) => {
        const question = res.content.map((item) => {
          return { ...item, big: true };
        });
        setQuestions(question);
      });
  }, [selected]);
  return (
    <div className="flex flex-col w-4/5 mx-auto">
      <h2 className="text-2xl font-semibold mb-8">My Activities</h2>
      <Tabs
        aria-label="Dynamic tabs"
        radius="full"
        variant="light"
        selectedKey={selected}
        onSelectionChange={setSelected}
        classNames={{
          tab: 'h-12 w-36 mx-2 text-xl',
        }}
        items={tabs}
      >
        {(item) => (
          <Tab key={item.id} title={item.label}>
            {questions.length ? (
              questions.map((question) => (
                <QuestionCard {...question} key={question.questionID} />
              ))
            ) : (
              <div
                className="p-8 bg-white border rounded-xl w-full flex flex-col
             justify-center items-center mx-auto shadow-lg"
              >
                <div className="flex justify-center items-center">
                  <div className="relative w-24 h-24 bg-black rounded-full p-4">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-white w-16 h-16 rounded-full p-2"></div>
                    </div>
                    <svg
                      className="w-6 h-6 text-white absolute -top-2 -right-2"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 9v2m0 4h.01"
                      ></path>
                    </svg>
                  </div>
                </div>
                <h2 className="text-center text-3xl mt-4 mb-2">
                  No questions just yet
                </h2>
                <p className="text-center text-gray-600">
                  Invite your twitter fans to start asking you questions
                </p>
                <Spacer y={6} />
                <PAHButton
                  frontColor="bg-black"
                  backColor="bg-white"
                  width="w-44"
                  textColor={'text-white'}
                >
                  Invite Fans
                </PAHButton>
              </div>
            )}
          </Tab>
        )}
      </Tabs>
    </div>
  );
}
