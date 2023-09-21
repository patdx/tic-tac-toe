import * as PIXI from 'pixi.js';
import spriteImg from '../assets/sprite.png';
import type { Component, ParentComponent } from 'solid-js';
import { useMountChild } from './hooks';

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

export const Square: Component<{
  x: number;
  y: number;
  onClick?: () => any;
}> = (props) => {
  var square = new PIXI.Graphics();
  square.beginFill('gray');
  square.drawRect(-45, -45, 90, 90);
  square.endFill();
  // square.anchor.set(0.5, 0.5);
  square.position.set(props.x, props.y);
  square.interactive = true;

  square.on('pointerover', () => {
    square.scale.set(1.1);
  });

  square.on('pointerleave', () => {
    square.scale.set(1);
  });

  square.on('click', () => {
    props.onClick?.();
  });

  useMountChild(square);

  onCleanup(() => {
    console.log('destroy square');
    square.destroy();
  });

  return null;
};

export const Piece: ParentComponent<{ text: string; x: number; y: number }> = (
  props
) => {
  const sprite = new PIXI.Text(props.text, {
    fontSize: '52px',
    fill: 'white',
    align: 'center',
  });

  useMountChild(sprite);

  sprite.anchor.set(0.5, 0.5);
  sprite.position.set(props.x, props.y);

  const parentContext = useContext(PixiContext);
  const app = parentContext?.app;

  const context: IPixiContext = {
    app: app as any,
    parent: sprite,
  };

  // test23

  onCleanup(() => {
    console.log('destroy sprite');
    sprite.destroy();
  });

  return (
    <PixiContext.Provider value={context}>
      {props.children}
    </PixiContext.Provider>
  );
};
