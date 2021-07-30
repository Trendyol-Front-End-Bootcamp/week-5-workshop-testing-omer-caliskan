
export class GetMaxTitle {
constructor(postProvider){
  this.postProvider = postProvider;
}

async returnTitles(){
  const list = await this.postProvider.getPosts()

  if(list.length === 0) return []

  const idCount = list
    .map((item) => item.userId)
    .reduce((prev, cur) => {
      prev[cur] = (prev[cur] || 0) + 1;
      return prev;
    }, []);

  const maxKey = idCount.reduce((a, b) =>
    idCount[a] > idCount[b] ? a : b
  );

  const titles = list
    .filter((element) => element.userId === +maxKey)
    .map((element) => element.title);

  return titles;
}

};
