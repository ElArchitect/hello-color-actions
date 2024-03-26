const hello = require("./hello");
describe("My hello", () => {
  test("works", () => {
    expect(hello.hello()).toEqual("Hello World from Winterthur Iberg in sunny Switzerland (my location for the month of March'24!");
  });
});
