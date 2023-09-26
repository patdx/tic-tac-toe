function PlayAgain() {
  return (
    <button
      class='bg-green-200 hover:bg-green-300 active:bg-green-400 p-2 rounded border border-black'
      onClick={[resetState, null]}
    >
      Play again
    </button>
  );
}

export function App() {
  return (
    <>
      <Game />
      <div class='absolute top-0 w-full z-10 text-white p-4'>
        <h1 class='text-3xl font-bold text-center'>Tic Tac Toe</h1>

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
