type Cell = 'X' | 'O' | null;

type Row = Array<Cell>;

type Coord = [y: number, x: number];

function createGrid() {
  let rows: Row[] = [];

  for (let index = 0; index < 3; index++) {
    rows.push([null, null, null]);
  }

  return rows;
}

export const [state, setState] = createStore({
  move: 0,
  rows: createGrid(),
});

export function resetState() {
  setState({
    move: 0,
    rows: createGrid(),
  });
}

function checkCells(a: Cell, b: Cell, c: Cell) {
  return a === b && b === c && a !== null;
}

const WINNING_COMBINATIONS = [
  // horizontal
  // [y1, x1, y2, x2, y3, x3]
  [0, 0, 0, 1, 0, 2],
  [1, 0, 1, 1, 1, 2],
  [2, 0, 2, 1, 2, 2],
  // vertical
  [0, 0, 1, 0, 2, 0],
  [0, 1, 1, 1, 2, 1],
  [0, 2, 1, 2, 2, 2],
  // diagonal
  [0, 0, 1, 1, 2, 2],
  [0, 2, 1, 1, 2, 0],
].map(
  (c) =>
    [
      [c[0], c[1]],
      [c[2], c[3]],
      [c[4], c[5]],
    ] satisfies Coord[]
);

export const winnerInfo = createMemo<{
  didWin: boolean;
  player: Cell;
  combination: Coord[] | null;
}>(() => {
  for (const combination of WINNING_COMBINATIONS) {
    const isWinner = checkCells(
      state.rows[combination[0][0]][combination[0][1]],
      state.rows[combination[1][0]][combination[1][1]],
      state.rows[combination[2][0]][combination[2][1]]
    );
    if (isWinner) {
      return {
        didWin: true,
        player: state.rows[combination[0][0]][combination[0][1]],
        combination: combination,
      };
    }
  }

  return {
    didWin: false,
    player: null,
    combination: null,
  };
});

export const movesAvailable = createMemo(() => {
  for (const row of state.rows) {
    for (const cell of row) {
      if (cell === null) return true;
    }
  }

  return false;
});

export const nextTurn = createMemo(() => {
  return state.move % 2 === 0 ? 'X' : 'O';
});
