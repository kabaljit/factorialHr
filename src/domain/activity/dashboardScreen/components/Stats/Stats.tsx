import React, { useCallback } from "react";

import useUid from "@lib/hooks/useUid";
import { P } from "@designSystem/elements/Typography";

import { useModuleTranslations } from "./Stats.i18n";
import { Stat, StatsContainer } from "./Stats.styles";
import { StatsProps } from "./Stats.models";
import { Reports } from "../DashboardScreen/DashboardScreen.models";

function Stats({ reports }: StatsProps) {
  const { t } = useModuleTranslations();

  if (!reports) {
    return <StatsContainer testID="stats"></StatsContainer>;
  }

  return (
    <StatsContainer testID="stats">
      {Object.keys(reports).map((key) => (
        <Stat key={key}>
          <P weight="bold" color="secondary">
            {reports[key] ?? 0}
          </P>
          <P size="bodySmall" color="secondary">
            {t(key)}
          </P>
        </Stat>
      ))}
    </StatsContainer>
  );
}

export default Stats;
