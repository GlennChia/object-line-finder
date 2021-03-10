import objectLineFinder from "../src/index";
import * as dataTest1 from "./examples/test1.json";
import * as dataTest2 from "./examples/test2.json";

test("Testset 1: finds the line number of firstName", () => {
  expect(objectLineFinder(dataTest1, 'firstName')).toStrictEqual([2]);
});

test("Testset 1: finds the line number of age", () => {
  expect(objectLineFinder(dataTest1, 'age')).toStrictEqual([4]);
});

test("Testset 2: finds the line number of firstName", () => {
  expect(objectLineFinder(dataTest2, 'firstName')).toStrictEqual([2]);
});

test("Testset 2: finds the line number of hobbies", () => {
  expect(objectLineFinder(dataTest2, 'hobbies')).toStrictEqual([4]);
});

test("Testset 2: finds the line number of age", () => {
  expect(objectLineFinder(dataTest2, 'age')).toStrictEqual([8]);
});
