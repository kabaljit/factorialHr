import { forwardRef } from 'react';
import { View } from 'react-native';

import Box from './Box';
import { BoxPropsExtended } from './Box.models';

const Expanded = forwardRef<View, BoxPropsExtended>((props, ref) => (
  <Box width="full" height="full" ref={ref} name="expanded" {...props}>
    {props?.children}
  </Box>
));

export default Expanded;
