import { Category } from "@domain/category/models/";

export interface BottomSheetWithOptionsProps {
  /** List of categories or project */
  categories?: Category[];
  /**
   * Value of selected category
   *  */
  selectedValue: Category;
  /**
   * Callback when cancel button is pressedd
   */
  onCancel: () => void;
  /**
   *  Callback when confirm button is pressedd
   */
  onConfirm: (category: Category) => void;
}
