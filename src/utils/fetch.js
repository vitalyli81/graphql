import { fetch } from "cross-fetch";
import dotenv from "dotenv";

dotenv.config();

const { SWAPI_BASE } = process.env;

export const find = (path) => {
  return fetch(`${SWAPI_BASE}${path}`)
    .then(resp => {
      if (resp.ok) {
        return resp.json();
      }
      throw new Error('Something went wrong');
    })
    .then(json => json)
};
