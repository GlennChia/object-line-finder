// eslint-disable-next-line
type interfaceObject = {[key: string]: any};

// Assume that the keys of the object are all strings
function objectLineFinderRecursion(targetObject: interfaceObject, target: string, _value?: string): Array<number[] | number> {
  const matchingLines = [];
  // If object { first key starts at line 2
  let line = 2;
  // eslint-disable-next-line
  for (const [key, _value] of Object.entries(targetObject)) {
    if (key == target) {
      matchingLines.push(line);
    }
    line += 1;
  }
  return [matchingLines, line]
}

export default function objectLineFinder(targetObject: interfaceObject, target: string, _value?: string): number[] {
  const result = objectLineFinderRecursion(targetObject,target);
  return result[0] as number[];
}
