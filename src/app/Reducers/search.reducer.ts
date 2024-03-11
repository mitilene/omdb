import {createReducer, on} from "@ngrx/store";
import {reset} from "../Actions/search.actions";

export const initialState = 0;

export const searcheReducer = createReducer(
  initialState,
  on(reset, (state) => 0),
);
