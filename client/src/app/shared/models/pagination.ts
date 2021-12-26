import {Story} from "./story";

export interface Pagination<T> {
  pageIndex: number;
  pageSize: number;
  count: number;
  data: T[];
}
