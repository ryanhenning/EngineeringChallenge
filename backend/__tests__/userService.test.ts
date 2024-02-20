import users from "../data/userData.json";
import { getUser } from "../userService";
import { Request } from "express";

describe("getUser", () => {
  it("returns user data correctly if found", () => {
    const request = { body: { userName: "Ryan" } } as Request;
    const result = getUser(request);

    expect(result).toBe(users[0]);
  });
  it("returns undefined if user not found", () => {
    const request = { body: { userName: "Henning" } } as Request;
    const result = getUser(request);

    expect(result).toBeUndefined();
  });
});
describe("addUser", () => {
  it("returns new user data on succesful add", () => {});
  it("throws error if user already exists", () => {});
});
