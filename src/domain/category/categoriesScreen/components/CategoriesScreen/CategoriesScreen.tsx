import React, { useCallback, useRef, useState } from "react";

import { P } from "@designSystem/elements/Typography";

import { useModuleTranslations } from "./CategoriesScreen.i18n";
import { CategoryContainer, Container } from "./CategoriesScreen.styles";
import SuperScreen from "@designSystem/layout/SuperScreen";
import { Button } from "@designSystem/buttons/Button";
import SecondaryButton from "@designSystem/buttons/SecondaryButton";
import Ionicons from "@expo/vector-icons/Ionicons";
import Box from "@designSystem/layout/Box";
import BottomSheetAddCategory from "@domain/category/BottomSheetAddCategory";
import BottomSheet from "@gorhom/bottom-sheet";
import {
  useFirestoreInfiniteQuery,
  useFirestoreQuery,
  useFirestoreQueryData,
} from "@react-query-firebase/firestore";

import {
  query,
  collection,
  limit,
  QuerySnapshot,
  DocumentData,
  startAfter,
} from "firebase/firestore";
import { firestore } from "@lib/firebase";
import { FlatList } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import { tokens } from "@theme/tokens";

export function CategoriesScreen() {
  const { t } = useModuleTranslations();

  const [selectedCategory, setSelectedCategory] = useState();
  const bottomSheetRef = useRef<BottomSheet>(null);

  const categoriesCollection = collection(firestore, "categories");

  const categoreisQuery = query(categoriesCollection);
  // NOte: I am not using Inifite queyr as I am not expecting huge amount of categories
  const categories = useFirestoreQueryData(["categoriess"], categoreisQuery, {
    subscribe: true,
    idField: "_id",
  });

  const renderItem = useCallback((item) => {
    return (
      <CategoryItem
        category={item}
        onSelectedCategory={() => {
          setSelectedCategory(item);
          bottomSheetRef.current?.expand();
        }}
      />
    );
  }, []);
  const EmptyState = useCallback(
    () => (
      <>
        <Ionicons name="warning" size={24} color="orange" />
        <P>{t("emptyData")}</P>
      </>
    ),
    []
  );

  return (
    <>
      <SuperScreen background="white">
        {categories.isLoading && <ActivityIndicator />}

        <FlatList
          data={categories.data}
          renderItem={({ item }) => renderItem(item)}
          ListEmptyComponent={EmptyState}
        />

        <SecondaryButton
          name="add-category"
          onPress={() => {
            bottomSheetRef.current?.expand();
            setSelectedCategory(undefined);
          }}
          title=""
        >
          <Box flexDirection="row">
            <Ionicons name="add" size={24} color="white" />
            <P>{t("button.addNewCategory")}</P>
          </Box>
        </SecondaryButton>
      </SuperScreen>

      <BottomSheetAddCategory
        ref={bottomSheetRef}
        selectedCategory={selectedCategory}
      />
    </>
  );
}

function CategoryItem({
  category,
  onSelectedCategory,
}: {
  category: any;
  onSelectedCategory: () => void;
}) {
  const { title } = category;

  return (
    <CategoryContainer
      onPress={() => {
        console.log("[CategoryItem] Iteme is pressed", category);
        onSelectedCategory();
      }}
    >
      <P>{title}</P>
    </CategoryContainer>
  );
}
