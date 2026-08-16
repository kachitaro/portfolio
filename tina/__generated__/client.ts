import { createClient } from "tinacms/dist/client";
import { queries } from "./types.js";
export const client = createClient({ url: 'http://localhost:4001/graphql', token: 'd5b7775f1a088c0dcda21fc823ffd23d603137b5', queries,  });
export default client;
  