import { GetMaxTitle } from "../src/getMaxTitle";
import { PostProvider } from "../src/postProvider";

jest.mock("../src/postProvider")

describe("maxPostedUser", () => {
  const postProvider = new PostProvider();
  const getMaxTitle = new GetMaxTitle(postProvider);

  it("should return max posted user's titles", async () => {
    postProvider.getPosts.mockImplementation(() => {
      return Promise.resolve([
        { userId: 1, id: 1, title: "Title 1.1", body: "Body 1.1" },
        { userId: 2, id: 3, title: "Title 2.1", body: "Body 2.1"  },
        { userId: 2, id: 4, title: "Title 2.2", body: "Body 2.2"  },
        { userId: 3, id: 5, title: "Title 3.1", body: "Body 3.1"  },
        { userId: 3, id: 6, title: "Title 3.2", body: "Body 3.2"  },
        { userId: 3, id: 7, title: "Title 3.3", body: "Body 3.3"  },
      ])
    })

    const titles = await getMaxTitle.returnTitles()

    expect(titles).toEqual(["Title 3.1", "Title 3.2", "Title 3.3"]);
  });

  it("should return empty array", async () => {
    postProvider.getPosts.mockImplementation(() => {
      return Promise.resolve([]);
    });

    const titles = await getMaxTitle.returnTitles()

    expect(titles).toEqual([]);
  });
});
