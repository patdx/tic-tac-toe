export function PlayAgain() {
  return (
    <button
      class='bg-green-200 hover:bg-green-300 active:bg-green-400 p-2 rounded border border-black'
      onClick={[resetState, null]}
    >
      Play again
    </button>
  );
}
