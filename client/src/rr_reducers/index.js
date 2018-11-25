import { combineReducers } from 'redux';

import Theme from './rr_r_theme';
import Layout from './rr_r_layout';

const rootReducer = combineReducers({
  theme: Theme,
  layout: Layout
});

export default rootReducer;