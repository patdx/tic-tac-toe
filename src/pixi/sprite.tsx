import spriteImg from '../assets/sprite.png';

// import type {gsap} from "gsap"

export const Sprite: ParentComponent<{ delay?: number }> = (props) => {
  console.log(spriteImg);
  let sprite = PIXI.Sprite.from(spriteImg);

  const parentContext = useContext(PixiContext);
  const app = parentContext?.app;

  const context: IPixiContext = {
    app: app as any,
    parent: sprite,
  };

  // test23

  parentContext?.parent.addChild(sprite);
  sprite.anchor.set(0.1);

  onCleanup(() => {
    console.log('destroy sprite');
    sprite.destroy();
  });

  // Add a variable to count up the seconds our demo has been running
  let elapsed = props.delay ?? 0.0;
  // Tell our application's ticker to run a new callback every frame, passing
  // in the amount of time that has passed since the last tick

  useTick((delta) => {
    elapsed += delta / 60;
    const amount = Math.sin(elapsed);
    const scale = 1.0 + 0.25 * amount;
    const alpha = 0.75 + 0.25 * amount;
    const angle = 40 * amount;
    const x = 75 * amount;

    sprite.scale.set(scale);
    sprite.alpha = alpha;
    sprite.angle = angle;
    sprite.x = x;
  });
  // test

  return (
    <PixiContext.Provider value={context}>
      {props.children}
    </PixiContext.Provider>
  );
};
