import { useMemo } from "react";

import { createTestId } from "@lib/createTestId";

/**
 * Generates a unique enough string to be used by elements as an id and test id, can also be used in analytics events.
 */
const useUid = (...parameters: Parameters<typeof createTestId>) =>
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useMemo(() => createTestId(...parameters), [parameters[1]]);

export default useUid;
