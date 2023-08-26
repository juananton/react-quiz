import { useQuiz } from '../contexts/QuizContext';

function FinishScreen() {
  const { points, maxPoints, highScore, dispatch } = useQuiz();
  const percentage = Math.ceil((points / maxPoints) * 100);

  let emoji;
  if (percentage === 100) emoji = '🏆';
  if (percentage >= 50 && percentage < 100) emoji = '🙂';
  if (percentage >= 0 && percentage < 50) emoji = '😭';

  return (
    <div className='finish'>
      <p className='result'>
        {emoji} You scored <strong>{points}</strong> out of {maxPoints} (
        {percentage}%)
      </p>
      <p className='highscore'>(Highscore: {highScore} points)</p>
      <button
        className='btn btn-ui'
        onClick={() => {
          dispatch({ type: 'restart' });
        }}
      >
        Restart quiz
      </button>
    </div>
  );
}

export default FinishScreen;
