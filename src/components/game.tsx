export function Game() {
  return (
    <Stage>
      <Routes>
        <Route path={'/'} component={Scene1}></Route>
        <Route path={'/scene-2'} component={Scene2}></Route>
      </Routes>
    </Stage>
  );
}
