import { CategoryType } from "../product/schema";

export interface GetCategoryListResponseType {
  id: number;
  name: CategoryType;
  createdAt: string;
  updatedAt: string;
}
