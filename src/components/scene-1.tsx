import { ALIGN_CENTER } from 'yoga-wasm-web';

export const Scene1: Component = () => {
  return (
    <Container
      debug
      yoga={(node) => {
        node.setGap(Yoga.GUTTER_ALL, 10);
        node.setPadding(Yoga.EDGE_ALL, 10);
        node.setPadding(Yoga.EDGE_TOP, 100);
        node.setFlexDirection(Yoga.FLEX_DIRECTION_COLUMN);
        node.setAlignItems(ALIGN_CENTER);
      }}
      yogaFitContent
    >
      <PixiText
        debug
        yoga
        yogaFitContent
        text='Tic Tac Toe'
        init={(text) => {
          text.style.fontSize = '52pt';
        }}
      />
      <PixiText debug yoga yogaFitContent text='xyz' />
      <Container
        debug
        // yogaFitContent
        // centerAnchor
        yoga={(node) => {
          node.setWidth(300);
          node.setFlex(1);
          node.setAlignSelf(Yoga.ALIGN_CENTER);
        }}
      >
        <For each={state.rows}>
          {(row, y) => (
            <For each={row}>
              {(cell, x) => (
                <>
                  <Square
                    x={50 + x() * 100}
                    y={50 + y() * 100}
                    onClick={() => {
                      setState(
                        produce((state) => {
                          const cell = state.rows[y()][x()];
                          if (!cell) {
                            console.warn(`Invalid cell ${y()} ${x()}`);
                            return;
                          }
                          if (
                            cell.mark == null &&
                            movesAvailable() &&
                            !winnerInfo().didWin
                          ) {
                            cell.mark = state.move % 2 === 0 ? 'X' : 'O';
                            state.move += 1;
                          }
                        })
                      );
                    }}
                  />
                  <Piece
                    text={cell?.mark?.toUpperCase() ?? ''}
                    x={50 + x() * 100}
                    y={50 + y() * 100}
                  />
                </>
              )}
            </For>
          )}
        </For>
      </Container>
    </Container>
  );
};
