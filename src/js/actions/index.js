import { ADD_ARTICLE } from "../constants/action-types";
import { DATA_LOADED } from "../constants/action-types";
import { DATA_REQUESTED } from "../constants/action-types";

export function addArticle(payload) {
  return { type: ADD_ARTICLE, payload };
}
export function addNewArticle(payload) {
  return { type: ADD_ARTICLE, payload };
}

// export function getData() {
//   return function(dispatch) {
//     return fetch("https://jsonplaceholder.typicode.com/posts")
//       .then(res => res.json())
//       .then(json => {
//         dispatch({ type: DATA_LOADED, payload: json });
//       });
//   };
// }

export function getData() {
  return { type: DATA_REQUESTED };
}
