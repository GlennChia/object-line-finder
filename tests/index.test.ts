import objectLineFinder from "../src/index";
import * as dataTest1 from "./examples/test1.json";
import * as dataTest2 from "./examples/test2.json";
import * as dataTest3 from "./examples/test3.json";
import * as dataTest4 from "./examples/test4.json";
import * as dataTest5 from "./examples/test5.json";
import * as dataTest6 from "./examples/test6.json";
import * as dataTest7 from "./examples/test7.json";
import * as dataTest8 from "./examples/test8.json";
import * as dataTest9 from "./examples/test9.json";

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

test("Testset 3: finds the line number of firstName", () => {
  expect(objectLineFinder(dataTest3, 'firstName')).toStrictEqual([2]);
});

test("Testset 3: finds the line number of hobbyDays", () => {
  expect(objectLineFinder(dataTest3, 'hobbyDays')).toStrictEqual([4]);
});

test("Testset 3: finds the line number of tennis", () => {
  expect(objectLineFinder(dataTest3, 'tennis')).toStrictEqual([5]);
});

test("Testset 3: finds the line number of age", () => {
  expect(objectLineFinder(dataTest3, 'age')).toStrictEqual([8]);
});

test("Testset 4: finds the line number of hobbies", () => {
  expect(objectLineFinder(dataTest4, 'hobbies')).toStrictEqual([2]);
});

test("Testset 4: finds the line number of tennis", () => {
  expect(objectLineFinder(dataTest4, 'tennis')).toStrictEqual([]);
});

test("Testset 4: finds the line number of golf", () => {
  expect(objectLineFinder(dataTest4, 'golf')).toStrictEqual([]);
});

test("Testset 5: finds the line number of hobbies", () => {
  expect(objectLineFinder(dataTest5, 'hobbies')).toStrictEqual([4]);
});

test("Testset 5: finds the line number of tennis", () => {
  expect(objectLineFinder(dataTest5, 'tennis')).toStrictEqual([]);
});

test("Testset 5: finds the line number of age", () => {
  expect(objectLineFinder(dataTest5, 'age')).toStrictEqual([12]);
});

test("Testset 6: finds the line number of hobbies", () => {
  expect(objectLineFinder(dataTest6, 'hobbies')).toStrictEqual([4]);
});

test("Testset 6: finds the line number of tennis", () => {
  expect(objectLineFinder(dataTest6, 'tennis')).toStrictEqual([6]);
});

test("Testset 6: finds the line number of age", () => {
  expect(objectLineFinder(dataTest6, 'age')).toStrictEqual([10]);
});

test("Testset 7: finds the line number of firstName", () => {
  expect(objectLineFinder(dataTest7, 'firstName')).toStrictEqual([2,11,19]);
});

test("Testset 7: finds the line number of lastName", () => {
  expect(objectLineFinder(dataTest7, 'lastName')).toStrictEqual([3,12,20]);
});

test("Testset 7: finds the line number of hobbies", () => {
  expect(objectLineFinder(dataTest7, 'hobbies')).toStrictEqual([4,13,21]);
});

test("Testset 7: finds the line number of age", () => {
  expect(objectLineFinder(dataTest7, 'age')).toStrictEqual([8]);
});

test("Testset 7: finds the line number of soccer", () => {
  expect(objectLineFinder(dataTest7, 'soccer')).toStrictEqual([]);
});

test("Testset 8: finds the line number of hobbies", () => {
  expect(objectLineFinder(dataTest8, 'hobbies')).toStrictEqual([5,14,22]);
});

test("Testset 8: finds the line number of age", () => {
  expect(objectLineFinder(dataTest8, 'age')).toStrictEqual([9]);
});

test("Testset 8: finds the line number of soccer", () => {
  expect(objectLineFinder(dataTest8, 'soccer')).toStrictEqual([]);
});

test("Testset 9: finds the line number of firstName", () => {
  expect(objectLineFinder(dataTest9, 'firstName')).toStrictEqual([2]);
});

test("Testset 9: finds the line number of hobbies", () => {
  expect(objectLineFinder(dataTest9, 'hobbies')).toStrictEqual([4]);
});

test("Testset 9: finds the line number of age", () => {
  expect(objectLineFinder(dataTest9, 'age')).toStrictEqual([5]);
});
