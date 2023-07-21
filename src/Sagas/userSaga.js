import { GET_USER, USER_LOADED } from "../Actions/types";
import { put, takeLatest, all } from "redux-saga/effects";

function* fetchUser(formData) {
  const json = yield fetch("http://localhost:3300/login", {
    mode: "cors",
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData.payload),
  })
    .then((response) => {
      console.log(response);
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Something went wrong ...");
      }
    })
    .catch((error) => console.log(error));
  localStorage.setItem("usertoken", json.user.token);
  localStorage.setItem("user", json.user);
  yield put({ type: USER_LOADED, user: json.user });
}

function* getUser() {
  yield takeLatest(GET_USER, fetchUser);
}

export default function* rootSaga() {
  yield all([getUser()]);
}
