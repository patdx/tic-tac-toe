export function useMountChild(child: any) {
  const parent = useParent();

  if (!parent) {
    console.warn(`No parent found for child ${child}`);
  }

  parent?.addChild(child);

  onCleanup(() => {
    parent?.removeChild(child);
  });
}
