import { JsonDB } from "node-json-db";
import { Config } from "node-json-db/dist/lib/JsonDBConfig";

export const account_json_db = new JsonDB(
  new Config(process.env.d1 || "account.json", true, true, "/")
);
