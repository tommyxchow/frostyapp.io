export default function FAQ({ question, answer }: FAQProps) {
  return (
    <details className='rounded-lg bg-neutral-800 p-8 shadow' key={question}>
      <summary className='cursor-pointer text-lg font-semibold lg:text-xl'>
        {question}
      </summary>
      <p className='mt-4 text-neutral-400 lg:text-lg'>{answer}</p>
    </details>
  );
}

interface FAQProps {
  question: string;
  answer: string;
}
