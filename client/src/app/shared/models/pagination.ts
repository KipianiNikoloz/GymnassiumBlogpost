import {Story} from "./story";

export interface Pagination {
  pageIndex: number;
  pageSize: number;
  count: number;
  data: Story[];
}
