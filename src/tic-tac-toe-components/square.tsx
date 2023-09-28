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

  let tween: gsap.core.Tween | null = null;

  square.on('pointerover', () => {
    tween?.kill();
    tween = gsap.to(square, {
      duration: 0.2,
      pixi: {
        scale: 1.1,
      },
    });
    // square.scale.set(1.1);
  });

  square.on('pointerleave', () => {
    tween?.kill();
    tween = gsap.to(square, {
      duration: 0.2,
      pixi: {
        scale: 1,
      },
    });
    // square.scale.set(1);
  });

  square.on('pointerdown', () => {
    tween?.kill();
    tween = gsap.to(square, {
      duration: 0.2,
      pixi: {
        scale: 0.9,
      },
    });
    // square.scale.set(1);
  });

  square.on('pointerup', () => {
    tween?.kill();
    tween = gsap.to(square, {
      duration: 0.2,
      pixi: {
        scale: 1,
      },
    });
    // square.scale.set(1);
  });

  square.on('pointertap', () => {
    props.onClick?.();
  });

  useMountChild(square);

  onCleanup(() => {
    console.log('destroy square');
    tween?.kill();
    square.destroy();
  });

  return null;
};
