import { Piece } from './pixi/sprite';

export function Game() {
  return (
    <Stage>
      <For each={state.rows}>
        {(row, y) => (
          <For each={row}>
            {(cell, x) => (
              <>
                <Square
                  x={100 + x() * 100}
                  y={100 + y() * 100}
                  onClick={() => {
                    setState(
                      produce((state) => {
                        if (
                          state.rows[y()][x()] === null &&
                          movesAvailable() &&
                          !winnerInfo().didWin
                        ) {
                          state.rows[y()][x()] =
                            state.move % 2 === 0 ? 'X' : 'O';
                          state.move += 1;
                        }
                      })
                    );
                  }}
                />
                <Piece
                  text={cell?.toUpperCase() ?? ''}
                  x={100 + x() * 100}
                  y={100 + y() * 100}
                />
              </>
            )}
          </For>
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
