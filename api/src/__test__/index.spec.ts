import { exampleFunction } from "../index";

describe("index", () => {
  test("hello", () => {
    expect(exampleFunction()).toBe("hello");
  });

  test("not goodbye", () => {
    expect(exampleFunction()).not.toBe("goodbye");
  });
});
