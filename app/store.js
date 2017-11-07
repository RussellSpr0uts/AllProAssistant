import { createStore } from "redux";

import getRootReducer from "./";

export default function getStore(navReducer) {
    const store = createStore(
        getRootReducer(navReducer)
    );

    return store;
}