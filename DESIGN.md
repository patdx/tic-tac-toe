# Design

I would like to make it so that Pixi and Yoga Layout can be used together inside Solid.

The graph of components may look something like this:

```jsx
<Scene>
  <YogaRoot>
    <View padding={10} gap={10}>
      <Rectangle width={100} height={100} flex={1}>
        <Text margin={10} text='Hello world' />
      </Rectangle>
      <Rectangle width={100} height={100} flex={1} />
    </View>
  </YogaRoot>
</Scene>
```

Each Solid element may be one Pixi Container, one Yoga Node, or both.

`View` would be a basic Yoga Node with no Pixi Container, similar to something like React Native.

`Rectangle` would be a PIXI.Rectangle, which could either be positioned using Pixi layout tools, or Yoga layout, if it is contained in a Yoga layout. We may consider adding an option `yoga={true}` to Pixi components to enable Yoga mode.

All Yoga and PIXI components should automatically initialize, attach to parent, unattach from parent and unmount.

We should be able to calculate the Yoga layout performantly but we can worry about that later...

Since it is a bit annoying to translate a style prop to yoga props, I think yoga nodes should support a callback, eg:

```jsx
<View
  yoga={(yoga) => {
    yoga.setWidth(100);
  }}
/>
```

Since there are many PIXI components to support, I would like to create a factory to support the standard component:

```jsx
const Rectangle = createPixiComponent(PIXI.Rectangle);

<Rectangle
  yoga={(node) => {
    node.setFleX(Yoga.FLEX_COL);
  }}
  init={(pixi) => {
    pixi.setLineWidth(10);
  }}
></Rectangle>;
```
