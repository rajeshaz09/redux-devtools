import * as React from 'react';
import { createDevTools } from 'redux-devtools';
import DockMonitor from 'redux-devtools-dock-monitor';


// export default createDevTools(
//   <DockMonitor toggleVisibilityKey='ctrl-h' changePositionKey='ctrl-q' changeMonitorKey='ctrl-m'>
//     <LogMonitor />
//     <SliderMonitor />
//     <Inspector />
//     <DiffMonitor theme='tomorrow' />
//     <FilterableLogMonitor />
//     <ChartMonitor />
//   </DockMonitor>
// );
export default createDevTools(
  <DockMonitor toggleVisibilityKey='ctrl-h' changePositionKey='ctrl-q' changeMonitorKey='ctrl-m'>
  </DockMonitor>
);
