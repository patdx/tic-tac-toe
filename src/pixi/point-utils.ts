import { DisplayObject, ObservablePoint, Point } from 'pixi.js';
import { isNil } from 'lodash-es';
import invariant from 'tiny-invariant';

// https://pixijs.io/pixi-react/typescript/
export type PointLike =
  | string
  | { x: number; y: number }
  | Point
  | ObservablePoint
  | number
  | [number]
  | [number, number];

export function isPointType(value: unknown): value is Point | ObservablePoint {
  return value instanceof Point || value instanceof ObservablePoint;
}

// https://github.com/pixijs/pixi-react/blob/master/packages/react/src/utils/pixi.js
export function parsePoint(value: PointLike): number[] {
  let arr: any[] = [];

  if (typeof value === 'undefined') {
    return arr;
  } else if (typeof value === 'string') {
    arr = value.split(',');
  } else if (typeof value === 'number') {
    arr = [value];
  } else if (Array.isArray(value)) {
    arr = [...value];
  } else if (value !== null && typeof value === 'object') {
    const x = (value && value?.x) || 0;
    const y = (value && value?.y) || 0;

    arr = [x, y];
  } else {
    return arr;
  }

  return arr.filter((p) => !isNil(p) && !isNaN(p)).map(Number);
}

export function pointsAreEqual(oldValue: number[], newValue: number[]) {
  if (oldValue.length !== newValue.length) {
    return false;
  }

  for (let i = 0; i < oldValue.length; i++) {
    if (oldValue[i] !== newValue[i]) {
      return false;
    }
  }

  return true;
}

export function setValue(instance: DisplayObject, prop: string, value: any) {
  const oldValue = (instance as any)[prop];
  if (isPointType(oldValue) && isPointType(value)) {
    // copy value
    oldValue.copyFrom(value);
  } else if (isPointType(oldValue)) {
    if (value == null) {
      console.warn(
        `Null or undefined values for prop "${prop}" are ignored...`
      );
    } else {
      // parse value if a non-Point type is being assigned to a Point type
      const coordinates = parsePoint(value);

      invariant(
        typeof coordinates !== 'undefined' &&
          coordinates.length > 0 &&
          coordinates.length < 3,
        [
          'The property `%s` is a `PIXI.Point` or `PIXI.ObservablePoint` and must be set to a comma-separated string of ' +
            'either 1 or 2 coordinates, a 1 or 2 element array containing coordinates, or a PIXI Point/ObservablePoint. ' +
            'If only one coordinate is given then X and Y will be set to the provided value. Received: `%s` of type `%s`.',
          prop,
          JSON.stringify(value),
          typeof value,
        ].join()
      );

      oldValue.set(coordinates.shift(), coordinates.shift());
    }
  } else {
    // just hard assign value
    (instance as any)[prop] = value;
  }
}
