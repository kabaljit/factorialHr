import React, { useState } from "react";

import SuperScreen from "@designSystem/layout/SuperScreen";
import { useModuleTranslations } from "./DashboardScreen.i18n";
import Box from "@designSystem/layout/Box";
import Ionicons from "@expo/vector-icons/build/Ionicons";
import { P } from "@designSystem/elements/Typography";
import { useNavigation } from "@react-navigation/native";
import { NavigationProp } from "src/main/navigation/navigation.models";
import { Button } from "@designSystem/buttons/Button";

import DateSlider from "../DateSlider";
import { useFirestoreQueryData } from "@react-query-firebase/firestore";
import {
  collection,
  CollectionReference,
  query,
  where,
} from "firebase/firestore";
import { firestore } from "@lib/firebase";
import { ReportPeriod } from "./DashboardScreen.models";
import { useGenerateFilter } from "../lib/useGenerateFilters";
import { useGenerateDates } from "../lib/useGenerateDate/useGenerateDate";
import { Activity } from "@domain/activity/models";
import Stats from "../Stats";
import History from "../History";
import { useGenerateReport } from "../lib/useGenerateReports";

export function DashboardScreen() {
  const { t } = useModuleTranslations();
  const navigation = useNavigation<NavigationProp<"Home">>();
  const data = useGenerateDates();

  const [reportType, setReportType] = useState(ReportPeriod.Daily);
  const [reportDate, setReportDate] = useState(data[0]);
  const filter = useGenerateFilter(reportDate, reportType);

  const activitiesCollection = query(
    collection(firestore, "activities") as CollectionReference<Activity>,
    where("startTime", ">=", filter.time.start),
    where("startTime", "<", filter.time.end)
  );

  const activities = useFirestoreQueryData(
    ["activitiess", filter.time.start, filter.time.end],
    activitiesCollection,
    {
      subscribe: true,
      idField: "_id",
    }
  );

  const reports = useGenerateReport(activities?.data, reportType);

  return (
    <SuperScreen
      background="cyan"
      containContentScrollable={true}
      statusBarColor="light-content"
    >
      <Box flex={1}>
        <Box flexDirection="row">
          <DateSlider
            data={data}
            onSelect={(date: Date) => {
              console.log("df");
              setReportDate(date);
            }}
            selectedDate={reportDate}
          />
        </Box>

        {/* <Box flexDirection="row">
          <DateSlider
            data={data}
            onSelect={(date: Date) => {
              console.log("df");
              setReportDate(date);
            }}
            selectedDate={reportDate}
          />
        </Box> */}

        <Box>
          <Stats reports={reports} />
        </Box>

        <Box>
          <History activities={activities.data} />
        </Box>
      </Box>

      <Button
        name="add-category"
        onPress={() => {
          navigation.navigate("AddActivity");
        }}
        title=""
      >
        <Box flexDirection="row">
          <Ionicons name="add" size={24} color="black" />
          <P color="secondary">{t("button.addActivity")}</P>
        </Box>
      </Button>
    </SuperScreen>
  );
}
