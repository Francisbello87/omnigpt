import { fetchUser } from "../utils/fetchLocalStoragesData";

const userInfo = fetchUser();

export const initialState = {
  user: userInfo,
};
