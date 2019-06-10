import { SimpleClass } from "./helloWold";

describe("Testing Simple Class", () => {
  let sc = new SimpleClass();

  it("contains 12 charactes", function() {
    expect(sc.helloWorld().length).toEqual(12);
  });
  it("says hello", function() {
    expect(sc.helloWorld()).toEqual("Hello World!");
  });
});
