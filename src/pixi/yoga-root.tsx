export const YogaRoot: ParentComponent = (props) => {
  return (
    <View
      yoga={(root) => {
        root.setGap(Yoga.GUTTER_ALL, 10);
        root.setPadding(Yoga.EDGE_ALL, 10);
        root.setPadding(Yoga.EDGE_TOP, 150);
      }}
    >
      {props.children}
    </View>
  );
};
