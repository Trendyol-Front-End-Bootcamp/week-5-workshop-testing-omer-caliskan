import { PostProvider } from "../src/postProvider";
import axios from "axios";

jest.mock("axios");

describe("PostProvider", () => {
  it("should return posts", async () => {
    const postProvider = new PostProvider();

    axios.get.mockImplementation(() => {
      return Promise.resolve({
        data: [
            { userId: 1, id: 1, title: "Title 1.1", body: "Body 1.1" }
        ]
      });
    });
    
    expect(await postProvider.getPosts()).toEqual([
        { userId: 1, id: 1, title: "Title 1.1", body: "Body 1.1" }
    ]);
  });

  it("should return error when get products catch error", async () => {
    const postProvider = new PostProvider();
    axios.get.mockImplementation(() => {
      return Promise.reject("network error");
    });
    expect(await postProvider.getPosts()).toBe("network error");
  });
});