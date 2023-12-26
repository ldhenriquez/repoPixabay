import { createSelector } from "@ngrx/store";


export const selectData = createSelector(
  (data) => data,
  (value) => value
);

export const selectDataCollection = createSelector(
  selectData,
  (data) => {
    return data;
  }
);
