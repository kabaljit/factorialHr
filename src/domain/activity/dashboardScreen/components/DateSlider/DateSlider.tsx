import React, { useCallback, useState } from "react";

import useUid from "@lib/hooks/useUid";
import { P } from "@designSystem/elements/Typography";

import { useModuleTranslations } from "./DateSlider.i18n";
import { DateSliderContainer, DateWrapper } from "./DateSlider.styles";
import { DateSliderProps } from "./DateSlider.models";
import { FlatList } from "react-native";
import format from "date-fns/format";
import isEqual from "date-fns/isEqual";

function DateSlider({ data, onSelect, selectedDate }: DateSliderProps) {
  const { t } = useModuleTranslations();
  // TODO: Fixed the active state

  const renderItem = useCallback(({ item }: { item: Date }) => {
    const active = isEqual(item, selectedDate);

    return (
      <DateWrapper
        $active={active}
        onPress={() => {
          console.log("Pressed", item), onSelect(item);
        }}
      >
        <P weight="bold" color={active ? "secondary" : "primary"}>
          {format(item, "dd")}
        </P>
        <P color={active ? "secondary" : "primary"}>{format(item, "EEE")}</P>
      </DateWrapper>
    );
  }, []);

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => `${item.getTime()}`}
      horizontal
      inverted
      extraData={`${selectedDate.getTime()}`}
    />
  );
}

export default DateSlider;
