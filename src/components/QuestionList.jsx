import { QuestionCard } from '@/components/QuestionCard';
async function getData() {
  const res = await fetch('http://127.0.0.1:8080/qa/all/question-list', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      pageSize: 2,
    },
  });
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  const responseData = await res.json();
  return responseData.data.content;
}
export default async function QuestionList() {
  const questionList = await getData();
  console.log(questionList, typeof questionList, '=======3232=========');

  return (
    <div className="flex items-center justify-between space-x-8">
      {questionList.map((question) => (
        <QuestionCard {...question} key={question.questionDes} />
      ))}
    </div>
  );
}
