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
      <h1 class='text-3xl font-bold text-center'>Tic Tac Toe</h1>

      <Game />

      <p class='mb-2 text-center'>
        {winnerInfo().didWin ? (
          <>
            Game finished! Congratulations,{' '}
            <span class='font-bold'>
              Player {winnerInfo().player?.toUpperCase()}
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

      <table class='mx-auto'>
        <tbody>
          <For each={state.rows}>
            {(row, y) => (
              <tr>
                <For each={row}>
                  {(cell, x) => (
                    <td
                      onClick={() => {
                        setState(
                          produce((state) => {
                            if (
                              state.rows[y()][x()] === null &&
                              movesAvailable() &&
                              !winnerInfo().didWin
                            ) {
                              state.rows[y()][x()] =
                                state.move % 2 === 0 ? 'x' : 'o';
                              state.move += 1;
                            }
                          })
                        );
                      }}
                      class='p-4 border text-5xl w-32 h-32 text-center align-middle'
                    >
                      {cell ?? ' '}
                    </td>
                  )}
                </For>
              </tr>
            )}
          </For>
        </tbody>
      </table>
    </>
  );
}
