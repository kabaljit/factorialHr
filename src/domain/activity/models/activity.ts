import { Timestamp } from "firebase/firestore";

/** That data that is returned from the firebase */
export interface Activity {
  category: string;
  title: string;
  startTime: Timestamp;
  endTime: Timestamp;
  _id: string;
}
