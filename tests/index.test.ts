import objectLineFinder from "../src/index";
import * as dataTest1 from "./examples/test1.json";

test("Testset 1: finds the line number of firstName", () => {
  expect(objectLineFinder(dataTest1, 'firstName')).toStrictEqual([2]);
});

test("Testset 1: finds the line number of age", () => {
  expect(objectLineFinder(dataTest1, 'age')).toStrictEqual([4]);
});
