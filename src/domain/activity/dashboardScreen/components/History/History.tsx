import React, { useCallback } from "react";

import useUid from "@lib/hooks/useUid";
import { H2, H3, P } from "@designSystem/elements/Typography";

import { useModuleTranslations } from "./History.i18n";
import { Header, HistoryContainer, HistoryItem } from "./History.styles";
import { HistoryProps } from "./History.models";
import { FlatList } from "react-native";
import { Activity } from "@domain/activity/models";
import Box from "@designSystem/layout/Box";
import formatDistance from "date-fns/formatDistance";
import intervalToDuration from "date-fns/intervalToDuration";

function History({ activities }: HistoryProps) {
  const { t } = useModuleTranslations();

  const renderItem = useCallback(({ item }: { item: Activity }) => {
    const { hours, minutes } = intervalToDuration({
      start: new Date(item.startTime),
      end: new Date(item.endTime),
    });
    formatDistance(new Date(item.startTime), new Date(item.endTime));
    return (
      <HistoryItem>
        <Box>
          <P color="secondary" weight="bold">
            {item.title}
          </P>
          <P color="secondary">{item.category}</P>
        </Box>
        <P color="secondary">
          {formatDistance(new Date(item.startTime), new Date(item.endTime))}
        </P>
      </HistoryItem>
    );
  }, []);

  const EmptyState = useCallback(() => <P>{t("emptyData")}</P>, []);

  return (
    <>
      <Header>
        <P weight="bold" color="secondary">
          {t("title")}
        </P>
      </Header>
      <FlatList
        data={activities}
        renderItem={renderItem}
        // keyExtractor={(item) => `${item.getTime()}`}
        ListEmptyComponent={EmptyState}
      />
    </>
  );
}

export default History;
