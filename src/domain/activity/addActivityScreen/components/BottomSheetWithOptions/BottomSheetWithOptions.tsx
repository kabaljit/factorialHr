import React, { forwardRef, useMemo, useState } from "react";

import { P } from "@designSystem/elements/Typography";

import { useModuleTranslations } from "./BottomSheetWithOptions.i18n";
import { BottomSheetWithOptionsContainer } from "./BottomSheetWithOptions.styles";
import { BottomSheetWithOptionsProps } from "./BottomSheetWithOptions.models";
import BottomSheet from "@gorhom/bottom-sheet";

import { Picker } from "@react-native-picker/picker";
import SuperScreen from "@designSystem/layout/SuperScreen";
import { TouchableOpacity } from "react-native";
import OptionControl from "./components/OptionControl";
import Box from "@designSystem/layout/Box";

const BottomSheetWithOptions = forwardRef<
  BottomSheet,
  BottomSheetWithOptionsProps
>(({ categories, selectedValue, onCancel, onConfirm }, bottomSheetRef) => {
  const { t } = useModuleTranslations();

  const [selectedOption, onSelectOption] = useState(
    selectedValue ?? categories?.[0]
  );

  const snapPoints = useMemo(() => ["50%"], []);

  return (
    <BottomSheet
      testID="bottom-sheet-with-options"
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
      <SuperScreen background="white">
        <Box
          marginBottom={20}
          flexDirection="row"
          justifyContent="space-between"
        >
          <OptionControl
            name="cancel"
            onPress={onCancel}
            title={t("button.cancel")}
          />
          <OptionControl
            name="confirm"
            onPress={() => onConfirm(selectedOption)}
            title={t("button.confirm")}
          />
        </Box>
        <Picker
          selectedValue={selectedOption?.name}
          onValueChange={(_itemValue, itemIndex) => {
            console.log("_itemValue", _itemValue, itemIndex);
            onSelectOption(categories?.[itemIndex - 1]);
          }}
        >
          <Picker.Item label={t("optionDefault") as string} />
          {categories?.map((category) => (
            <Picker.Item
              label={category.title}
              value={category.name}
              key={category.name}
            />
          ))}
        </Picker>
      </SuperScreen>
    </BottomSheet>
  );
});

export default BottomSheetWithOptions;
