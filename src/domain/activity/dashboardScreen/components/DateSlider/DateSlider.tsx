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

  const [selectedId, setSelectedId] = useState(
    data.findIndex(
      (day) => format(selectedDate, "dd/MM/yyyy") === format(day, "dd/MM/yyyy")
    )
  );

  const renderItem = useCallback(
    ({ item, index }: { item: Date; index: number }) => {
      const active = index === selectedId;

      return (
        <DateWrapper
          $active={active}
          onPress={() => {
            setSelectedId(index);
            onSelect(item);
          }}
        >
          <P weight="bold" color={active ? "secondary" : "primary"}>
            {format(item, "dd")}
          </P>
          <P color={active ? "secondary" : "primary"}>{format(item, "EEE")}</P>
        </DateWrapper>
      );
    },
    [selectedId]
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => `${item.getTime()}`}
      horizontal
      inverted
      extraData={selectedId}
    />
  );
}

export default DateSlider;
