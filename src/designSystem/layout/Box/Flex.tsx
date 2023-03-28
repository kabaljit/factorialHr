import { forwardRef } from 'react';
import { View } from 'react-native';

import Box from './Box';
import { BoxPropsExtended } from './Box.models';

const Flex = forwardRef<View, BoxPropsExtended>((props, ref) => (
  <Box display="flex" ref={ref} name="flex" {...props}>
    {props?.children}
  </Box>
));

export default Flex;
