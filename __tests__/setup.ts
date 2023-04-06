import '@testing-library/jest-dom/extend-expect';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import 'jest-styled-components';

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.setDefault('Europe/London');

global.ResizeObserver = ResizeObserver;
(global as any).Cypress = undefined;

jest.mock('analytics-node');
