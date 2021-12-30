import {Story} from "./story";

export interface Author {
  id: number;
  fullName: string;
  birthday: Date;
  imageUrl: string;
  stories: Story[];
}
