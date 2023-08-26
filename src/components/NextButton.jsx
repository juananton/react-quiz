import { useQuiz } from '../contexts/QuizContext';

function NextButton() {
  const { answer, dispatch, index, numQuestions } = useQuiz();
  if (answer === null) return null;
  if (index < numQuestions - 1)
    return (
      <button
        className='btn btn-ui'
        onClick={() => {
          dispatch({ type: 'nextQuestion' });
        }}
      >
        Next →
      </button>
    );
  if (index === numQuestions - 1)
    return (
      <button
        className='btn btn-ui'
        onClick={() => {
          dispatch({ type: 'finish' });
        }}
      >
        Get your score!
      </button>
    );
}

export default NextButton;
