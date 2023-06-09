import { Category } from "../models";

export interface BottomSheetAddCategoryProps {}

export interface AddCategoryValues {
  /**
   * Slug of the category or project
   */
  name: string;

  /**
   * Ttile of the category or project
   */
  title: string;

  /*
   * Values of current Category
   */
  selectedCategory: Category;
}
