import { combineReducers } from "redux";
import { listProducts } from "./Reducer.Listproducts";
import { yourCarts } from "./Reducer.YourCarts";
import { report } from "./Reducer.Report";
export const rootReducer = combineReducers({ listProducts, yourCarts, report });
