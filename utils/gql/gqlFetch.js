const { request } = require("graphql-request");

const endpoint = "https://www.reolteknikk.no/graphql";

async function gqlFetch(gql) {
  let fetches = 1;
  const data = [];

  await new Promise((resolve, reject) => {
    recursive(null, resolve);
  });

  return data.flat();

  async function recursive(nextpage = null, res) {
    console.log(fetches);
    if (fetches > 2) {
      res();
      return;
    }
    const response = await request(endpoint, gql);
    console.log(response.products.nodes.length, "nodes collected");
    data.push(response.products.nodes);
    fetches++;
    if (response.products.pageInfo.hasNextPage) {
      console.log("loading nextpage:", response.products.pageInfo.endCursor);
      recursive({ nextPage: response.products.pageInfo.endCursor }, res);
    } else {
      res();
    }
  }
}

module.exports = gqlFetch;
