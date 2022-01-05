import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0x5DC5115973a23e569D02906B804Fe5AF9E22F9bd",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Chocolate Bolu Cake",
        description: "This NFT will give you access to BoluDAO!",
        image: readFileSync("scripts/assets/cake.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()