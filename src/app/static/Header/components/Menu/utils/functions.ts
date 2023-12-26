import { MenuItem } from "../../../../../types/header";

export function sort_by_id() {
    return function (elem1:MenuItem, elem2:MenuItem) {
      if (elem1.id < elem2.id) {
        return -1;
      } else if (elem1.id > elem2.id) {
        return 1;
      } else {
        return 0;
      }
    };
  }