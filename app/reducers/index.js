import { combineReducers } from 'redux';

import JobsReducer from './reducer_jobs';
import ActiveJob from './reducer_active_job';
import ActiveYelp from './reducer_active_yelp';
import ToggleModal from './reducer_toggle_modal_on';


const rootReducer = combineReducers({
  jobs: JobsReducer,
  activeJob: ActiveJob,
  activeYelp: ActiveYelp,
  toggleModal: ToggleModal
});

export default rootReducer;
