// eslint-disable-next-line
type interfaceObject = {[key: string]: any};

// eslint-disable-next-line
function isArray(value: any): boolean{
  return Object.prototype.toString.call(value) == '[object Array]';
}

// Assume that the keys of the object are all strings
function objectLineFinderRecursion(targetObject: interfaceObject, target: string, _value?: string): Array<number[] | number> {
  const matchingLines = [];
  // If object { first key starts at line 2
  let line = 2;
  for (const [key, value] of Object.entries(targetObject)) {
    if (key === 'default') { break; }
    if (key == target) {
      matchingLines.push(line);
    }
    if (isArray(value)){
      if (typeof(value[0]) != 'object') {
        // Add 1 for the closing bracket
        line += value.length + 1;
      }
    } else if (typeof(value) == 'object') {
      const [recurMatchingLines, recurLine] = objectLineFinderRecursion(value, target);
      if (recurMatchingLines){
        let castRecurMatchingLines = recurMatchingLines as number[];
        castRecurMatchingLines = castRecurMatchingLines.map((i: number) => line + i - 1);
        for (let i=0; i<castRecurMatchingLines.length; i++){
          matchingLines.push(castRecurMatchingLines[i]);
        }
      }
      line += recurLine as number - 1;
    }
    line += 1;
  }
  return [matchingLines, line]
}

export default function objectLineFinder(targetObject: interfaceObject, target: string, _value?: string): number[] {
  const result = objectLineFinderRecursion(targetObject,target);
  return result[0] as number[];
}
