import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = sdk.getEditionDrop("0x6fe06e4325e42a6b4942d8Aeed1eAa1688c95b32");

(async () => {
  try {
    await editionDrop.createBatch([
      {
        name: "Fantasy Dao Access",
        description: "This NFT will give you access to Fantasy DAO!",
        image: readFileSync("scripts/assets/nft.jpg"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();