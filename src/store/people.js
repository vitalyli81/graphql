import { find } from "../utils/fetch";

export const findPeople = (path) => {
  return find(`people/${path}`);
};
