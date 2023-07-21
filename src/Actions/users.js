import * as type from "./types";

// action creator
export default function getUser(user) {
  return {
    type: type.GET_USER,
    payload: user,
  };
}
