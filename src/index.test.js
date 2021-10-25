import { findN } from "./index";

it("Empty Array", () => {
  expect(findN([])).toEqual(1);
});

it("An array from one element", () => {
  expect(findN([1])).toEqual(2);
  expect(findN([2])).toEqual(1);
});

function compareRandom(a, b) {
  return Math.random() - 0.5;
}

it("An array from an element missing at the beginning", () => {
  expect(findN([5, 4, 3, 2].sort(compareRandom))).toEqual(1);
});

it("An array from an element missing at the ending", () => {
  expect(findN([4, 3, 2, 1].sort(compareRandom))).toEqual(5);
});

it("An array from an element missing at the middle", () => {
  expect(findN([5, 4, 2, 1].sort(compareRandom))).toEqual(3);
});
