export function App() {
  return (
    <>
      <Game />
      <div class='absolute top-0 w-full z-10 text-white p-4'>
        <div class='flex gap-2'>
          <Link href='/'>Main</Link>
          <Link href='/scene-2'>Scene 2</Link>
        </div>

        <p class='mb-2 text-center'>
          {winnerInfo().didWin ? (
            <>
              Game finished! Congratulations,{' '}
              <span class='font-bold'>
                Player {winnerInfo().player?.mark?.toUpperCase()}
              </span>
              . <PlayAgain />
            </>
          ) : !movesAvailable() ? (
            <>
              Tie! <PlayAgain />
            </>
          ) : (
            <>
              It's <span class='font-bold'>{nextTurn().toUpperCase()}</span>'s
              turn.
            </>
          )}
        </p>
      </div>
    </>
  );
}
