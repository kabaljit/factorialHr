import * as React from "react";

import { P } from "@designSystem/elements/Typography";

import { useModuleTranslations } from "./BottomSheetAddCategory.i18n";
import {
  BottomSheetAddCategoryContainer,
  DeleteTouchableOpacity,
} from "./BottomSheetAddCategory.styles";
import {
  AddCategoryValues,
  BottomSheetAddCategoryProps,
} from "./BottomSheetAddCategory.models";
import { forwardRef, useCallback, useEffect, useMemo, useState } from "react";
import BottomSheet from "@gorhom/bottom-sheet";
import { Keyboard, TouchableOpacity } from "react-native";
import { Button } from "@designSystem/buttons/Button";
import SecondaryButton from "@designSystem/buttons/SecondaryButton";
import SuperScreen from "@designSystem/layout/SuperScreen";
import Box from "@designSystem/layout/Box";
import TextInput from "@designSystem/inputs/TextInput";
import { FormikHelpers, useFormik } from "formik";
import { kebabCase } from "lodash";
import { collection, doc } from "firebase/firestore";
import { firestore } from "@lib/firebase";
import {
  useFirestoreCollectionMutation,
  useFirestoreDocumentDeletion,
  useFirestoreDocumentMutation,
} from "@react-query-firebase/firestore";
import Ionicons from "@expo/vector-icons/Ionicons";

const BottomSheetAddCategory = forwardRef<
  BottomSheet,
  BottomSheetAddCategoryProps
>(({ selectedCategory }, bottomSheetRef) => {
  const { t } = useModuleTranslations();

  // Add data
  const collectionRef = collection(firestore, "categories");
  const addMutation = useFirestoreCollectionMutation(collectionRef);

  const isUpdateMode = Boolean(selectedCategory?._id) ?? false;

  // Update data
  const categoryRef = doc(collectionRef, selectedCategory?._id ?? "1");
  const updateMutation = useFirestoreDocumentMutation(categoryRef);

  // Delete Data
  const deleteMutation = useFirestoreDocumentDeletion(categoryRef);
  const [isDeleteMode, setDeleteMode] = useState(false);

  console.log("selectedCategory", selectedCategory, isUpdateMode, isDeleteMode);
  const snapPoints = useMemo(() => ["70%"], []);

  const onClose = useCallback(async () => {
    Keyboard.dismiss();
    setTimeout(() => {
      (bottomSheetRef?.current as any)?.close();
    }, 100);
  }, [bottomSheetRef]);

  function addCategory(
    values: AddCategoryValues,
    action: FormikHelpers<AddCategoryValues>
  ) {
    addMutation.mutate(
      { name: values.name, title: values.title },
      {
        onSuccess(result) {
          console.log("onSuccess: ", result);
          onClose();
          action.setSubmitting(false);
        },
        onError(result) {
          console.log("onError: ", result);
          action.setSubmitting(false);
        },
      }
    );
  }

  function updateCategory(
    values: AddCategoryValues,
    action: FormikHelpers<AddCategoryValues>
  ) {
    updateMutation.mutate(
      { name: values.name, title: values.title },
      {
        onSuccess(result) {
          console.log("onSuccess: ", result);
          onClose();
          action.setSubmitting(false);
        },
        onError(result) {
          console.log("onError: ", result);
          action.setSubmitting(false);
        },
      }
    );
  }

  function deleteCategory(
    values: AddCategoryValues,
    action: FormikHelpers<AddCategoryValues>
  ) {
    deleteMutation.mutate(undefined, {
      onSuccess(result) {
        console.log("onSuccess: ", result);
        onClose();
        action.setSubmitting(false);
        setDeleteMode(false);
      },
      onError(result) {
        console.log("onError: ", result);
        action.setSubmitting(false);
        setDeleteMode(false);
      },
    });
  }

  const onSubmit = useCallback(
    (values: AddCategoryValues, action: FormikHelpers<AddCategoryValues>) => {
      console.log("fjjg", { name: values.name, title: values.title });
      !isUpdateMode && addCategory(values, action);
      isUpdateMode && !isDeleteMode && updateCategory(values, action);
      isDeleteMode && deleteCategory(values, action);
    },
    [addCategory, updateCategory, isUpdateMode, isDeleteMode]
  );

  const {
    values,
    setFieldValue,
    errors,
    touched,
    setFieldTouched,
    handleSubmit,
    isSubmitting,
  } = useFormik<AddCategoryValues>({
    initialValues: {
      name: selectedCategory?.name ?? "",
      title: selectedCategory?.title ?? "",
    },
    onSubmit,
    // validationSchema,
  });

  useEffect(() => {
    setFieldValue("name", selectedCategory?.name ?? "");
    setFieldValue("title", selectedCategory?.title ?? "");
  }, [selectedCategory]);

  return (
    <BottomSheet
      data-testid="bottom-sheet-add-category"
      ref={bottomSheetRef}
      index={-1}
      snapPoints={snapPoints}
      enablePanDownToClose={true}
      style={{
        backgroundColor: "white",
        borderTopStartRadius: 25,
        borderTopEndRadius: 25,
        shadowOffset: {
          width: 0,
          height: 12,
        },
        shadowOpacity: 0.5,
        shadowRadius: 24,
        elevation: 32,
      }}
    >
      <SuperScreen>
        <P color="secondary">
          {t(`${isUpdateMode ? "updateTitle" : "title"}`)}
        </P>
        <Box marginTop={14}>
          <TextInput
            placeholder={t("input.title.placeholder")}
            value={values.title}
            onChangeText={(value: string) => {
              setFieldValue("title", value);
              setFieldValue("name", kebabCase(value));
            }}
            error={errors.title && touched.title}
            errorMessage={errors.title}
            onBlur={() => setFieldTouched("title")}
          />
        </Box>
        <Box marginTop={14} marginBottom={14}>
          <TextInput
            placeholder={t("input.name.placeholder")}
            value={values.name}
            onChangeText={(value: string) => setFieldValue("name", value)}
            error={errors.name && touched.name}
            errorMessage={errors.name}
            onBlur={() => setFieldTouched("name")}
          />
          <P color="secondary" size="bodySmall">
            {t("input.name.info")}
          </P>
        </Box>
        {!isUpdateMode && (
          <SecondaryButton
            name="add-category"
            onPress={() => {
              handleSubmit();
            }}
            title=""
            busy={isSubmitting}
          >
            <P>{t("button.addCategory")}</P>
          </SecondaryButton>
        )}

        {isUpdateMode && (
          <Box flexDirection="row" alignItems="center">
            <Box>
              <DeleteTouchableOpacity
                onPress={() => {
                  setDeleteMode(true);
                  handleSubmit();
                }}
                data-testID="button-delete-category"
              >
                <Ionicons name="trash" size={24} color="white" />
              </DeleteTouchableOpacity>
            </Box>
            <Box marginLeft={14} flex={1}>
              <SecondaryButton
                name="update-category"
                onPress={() => {
                  handleSubmit();
                }}
                title=""
                busy={isSubmitting}
              >
                <P>{t("button.updateCategory")}</P>
              </SecondaryButton>
            </Box>
          </Box>
        )}
      </SuperScreen>
    </BottomSheet>
  );
});

export default BottomSheetAddCategory;
