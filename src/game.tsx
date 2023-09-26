export function Game() {
  return (
    <Stage>
      <For each={state.rows}>
        {(row, y) => (
          <Index each={row}>
            {(cell, x) => (
              <>
                <Square
                  x={100 + x * 100}
                  y={200 + y() * 100}
                  onClick={() => {
                    setState(
                      produce((state) => {
                        if (
                          state.rows[y()][x]?.mark == null &&
                          movesAvailable() &&
                          !winnerInfo().didWin
                        ) {
                          state.rows[y()][x] = {
                            mark: state.move % 2 === 0 ? 'X' : 'O',
                          };
                          state.move += 1;
                        }
                      })
                    );
                  }}
                />
                <Piece
                  text={cell()?.mark?.toUpperCase() ?? ''}
                  x={100 + x * 100}
                  y={200 + y() * 100}
                />
              </>
            )}
          </Index>
        )}
      </For>
      {/* <Sprite>
        <Sprite>
          <Sprite />
        </Sprite>
      </Sprite> */}
    </Stage>
  );
}
