import React, { useCallback, useMemo, useRef, useState } from "react";

import { P } from "@designSystem/elements/Typography";

import { useModuleTranslations } from "./AddActivityScreen.i18n";
import { FormikHelpers, useFormik } from "formik";
import {
  AddActivityValues,
  DatePickerFields,
} from "./AddActivityScreen.models";
import SuperScreen from "@designSystem/layout/SuperScreen";
import SecondaryButton from "@designSystem/buttons/SecondaryButton";
import Box from "@designSystem/layout/Box";
import TextInput from "@designSystem/inputs/TextInput";
import DateTimePicker from "react-native-modal-datetime-picker";
import format from "date-fns/format";
import {
  collection,
  CollectionReference,
  DocumentData,
  query,
} from "firebase/firestore";
import { firestore } from "@lib/firebase";
import {
  useFirestoreCollectionMutation,
  useFirestoreQueryData,
} from "@react-query-firebase/firestore";
import BottomSheetWithOptions from "@domain/activity/addActivityScreen/components/BottomSheetWithOptions";
import BottomSheet from "@gorhom/bottom-sheet";
import { Category } from "@domain/category/models";
import NavigationButton from "@designSystem/buttons/NavigationButton";
import { useNavigation } from "@react-navigation/native";
import { NavigationProp } from "src/main/navigation/navigation.models";
import { Keyboard } from "react-native";
import * as Yup from "yup";
import { formatDate } from "./lib/formatDate";

const datePickerField = {
  date: { mode: "date" as "date", field: "date" },
  startTime: { mode: "time" as "time", field: "startTime" },
  endTime: { mode: "time" as "time", field: "endTime" },
};
export function AddActivityScreen() {
  const { t } = useModuleTranslations();
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectedDatePickerInfo, setSelectedDatePickerInfo] = useState<{
    mode: "date" | "time";
    field: string;
  }>(datePickerField.date);

  const navigation = useNavigation<NavigationProp<"AddActivity">>();

  const bottomSheetRef = useRef<BottomSheet>(null);

  const showDatePicker = (field: keyof DatePickerFields) => {
    setSelectedDatePickerInfo(datePickerField[field]);
    setDatePickerVisibility(true);
    Keyboard.dismiss();
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const categoriesCollection = query(
    collection(firestore, "categories") as CollectionReference<Category>
  );

  const categories = useFirestoreQueryData(
    ["categoriess"],
    categoriesCollection,
    {
      subscribe: true,
      idField: "_id",
    }
  );

  const activitiesRef = collection(firestore, "activities");
  const addMutation = useFirestoreCollectionMutation(activitiesRef);

  const AddActvitySchema = Yup.object().shape({
    title: Yup.string().required(t("input.title.error.required") as string),
    date: Yup.date().required(t("input.date.error.required") as string),
    category: Yup.object().required(
      t("input.category.error.required") as string
    ),
    startTime: Yup.date()
      .required(t("input.startTime.error.required") as string)
      .max(
        Yup.ref("endTime"),
        t("input.startTime.error.greaterThenEndTime") as string
      ),

    endTime: Yup.date()
      .required(t("input.endTime.error.required") as string)
      .min(
        Yup.ref("startTime"),
        t("input.endTime.error.lowerThenStartTime") as string
      ),
  });

  const onSubmit = useCallback(
    (values: AddActivityValues, action: FormikHelpers<AddActivityValues>) => {
      action.setSubmitting(true);
      addMutation.mutate(
        {
          title: values.title,
          category: values.category?.name,
          startTime: formatDate(values.date, values?.startTime).getTime(),
          endTime: formatDate(values.date, values?.endTime).getTime(),
        },
        {
          onSuccess(result) {
            console.log("onSuccess: ", result);
            action.setSubmitting(false);
          },
          onError(result) {
            console.log("onError: ", result);
            action.setSubmitting(false);
          },
        }
      );
    },
    []
  );

  const {
    values,
    setFieldValue,
    errors,
    touched,
    setFieldTouched,
    handleSubmit,
    isSubmitting,
  } = useFormik<AddActivityValues>({
    initialValues: {
      title: "",
      category: undefined,
      date: new Date(),
      startTime: undefined,
      endTime: undefined,
    },
    onSubmit,
    validationSchema: AddActvitySchema,
  });

  const handleConfirm = useCallback(
    (date: Date) => {
      console.warn("A date has been picked: ", date);
      setFieldValue(selectedDatePickerInfo.field, date);
      hideDatePicker();
    },
    [setFieldValue, hideDatePicker]
  );

  const activityTime = useMemo(() => {
    return `${values.startTime ? format(values.startTime, "kk:mm") : ""}${
      values.startTime && values.endTime ? " - " : ""
    }${values.endTime ? format(values.endTime, "kk:mm") : ""}`;
  }, [values.startTime, values.endTime]);

  return (
    <>
      <SuperScreen>
        <NavigationButton
          name="back"
          onPress={() => navigation.goBack()}
          inline
        />
        <P color="secondary">{t("title")}</P>
        <Box marginTop={14}>
          <TextInput
            placeholder={t("input.title.placeholder")}
            value={values.title}
            onChangeText={(value: string) => {
              setFieldValue("title", value);
            }}
            error={errors.title && touched.title}
            errorMessage={errors.title}
            onBlur={() => setFieldTouched("title")}
            onFocus={() => bottomSheetRef.current?.close()}
            maxLength={40}
          />
        </Box>

        <Box marginTop={14}>
          <TextInput
            placeholder={t("input.category.placeholder")}
            value={values.category?.title}
            error={errors.category && touched.category}
            errorMessage={errors.category}
            onFocus={() => {
              bottomSheetRef.current?.expand();
              Keyboard.dismiss();
            }}
          />
        </Box>

        <DateTimePicker
          isVisible={isDatePickerVisible}
          mode={selectedDatePickerInfo.mode}
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
          locale={"en_GB"}
          date={values[selectedDatePickerInfo.field]}
          maximumDate={new Date()}
        />

        <Box marginTop={14}>
          <TextInput
            placeholder={t("input.date.placeholder")}
            value={format(values.date, "dd/MM/yyyy")}
            error={errors.date && touched.date}
            errorMessage={errors.date}
            onFocus={() => {
              showDatePicker("date");
              Keyboard.dismiss();
              bottomSheetRef.current?.close();
            }}
          />
        </Box>

        <Box marginTop={14}>
          <TextInput
            placeholder={t("input.startTime.placeholder")}
            value={values.startTime && format(values.startTime, "kk:mm")}
            error={errors.startTime && touched.startTime}
            errorMessage={errors.startTime}
            onFocus={() => showDatePicker("startTime")}
          />
        </Box>

        <Box marginTop={14}>
          <TextInput
            placeholder={t("input.endTime.placeholder")}
            value={values.endTime && format(values.endTime, "kk:mm")}
            error={errors.endTime && touched.endTime}
            errorMessage={errors.endTime}
            onFocus={() => showDatePicker("endTime")}
          />
        </Box>

        <Box marginTop={14}>
          <SecondaryButton
            name="add-category"
            onPress={() => {
              handleSubmit();
            }}
            title=""
            busy={isSubmitting}
          >
            <Box alignItems="center">
              <P weight="bold">{values.title}</P>
              <P>
                {activityTime.length > 0 && `(${activityTime}), `}
                {format(values.date, "dd MMMM yyyy")}
              </P>
            </Box>
          </SecondaryButton>
        </Box>
      </SuperScreen>
      <BottomSheetWithOptions
        ref={bottomSheetRef}
        categories={categories.data}
        selectedValue={values.category}
        onCancel={() => bottomSheetRef.current?.close()}
        onConfirm={(value: Category) => {
          setFieldValue("category", value);
          bottomSheetRef.current?.close();
        }}
      />
    </>
  );
}
