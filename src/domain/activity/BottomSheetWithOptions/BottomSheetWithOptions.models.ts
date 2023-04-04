import { Category } from "@domain/category/models/";

export interface BottomSheetWithOptionsProps {
  /** List of categories or project */
  categories?: Category[];
}
