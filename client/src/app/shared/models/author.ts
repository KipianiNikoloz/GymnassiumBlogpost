import {Story} from "./story";

export interface Author {
  id: number;
  fullName: string;
  birthday: string;
  imageUrl: string;
  stories: Story[];
}
