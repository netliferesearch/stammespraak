import documents from "../stammespraak";
import * as bluebird from "bluebird";
/* eslint-disable no-console */
import client from "part:@sanity/base/client";

const main = async () => {
  const { dataset } = client.config();

  await bluebird.map(
    documents.documents,
    async doc => {
      console.log(doc);
      await client.create(doc).catch(err => console.error(err));
    },
    { concurrency: 2 }
  );
  console.log("done with work");
};

main();
