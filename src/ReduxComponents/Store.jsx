import { createStore } from "redux";
import { rootReducer } from "./ReducerComponents/Reducer.Root";

export const store = createStore(rootReducer);
