import { fetch } from "cross-fetch";
import dotenv from "dotenv";

dotenv.config();

const { SWAPI_BASE } = process.env;

export const findFilm = (path) => {
  return fetch(`${SWAPI_BASE}films/${path}`)
    .then(resp => {
      if (resp.ok) {
        return resp.json();
      }
      throw new Error('Something went wrong');
    })
    .then(json => json);
};
