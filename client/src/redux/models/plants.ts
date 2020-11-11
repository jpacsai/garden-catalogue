// Constants
export const PLANTS_SET_ITEMS = 'PLANTS_SET_ITEMS';
export const PLANTS_SET_LOADING = 'PLANTS_SET_LOADING';
export const PLANTS_SET_ERROR = 'PLANTS_SET_ERROR';
/* export const USERS_UPDATE_LOADING = 'USERS_UPDATE_LOADING';
export const USERS_UPDATE_ERROR = 'USERS_UPDATE_ERROR'; */

// Creators
export const setPlantsLoading = (payload: any) => ({ type: PLANTS_SET_LOADING, payload });
export const setPlantsError = (payload: any) => ({ type: PLANTS_SET_ERROR, payload });
export const setPlants = (payload: any) => ({ type: PLANTS_SET_ITEMS, payload });
// export const setUsersUpdateLoading = (payload: any) => ({ type: USERS_UPDATE_LOADING, payload });
// export const setUsersUpdateError = (payload: any) => ({ type: USERS_UPDATE_ERROR, payload });

export const plantsReducer = (state: PlantsState = plantsInitState, { type, payload }: any): PlantsState => {
  switch (type) {
    case PLANTS_SET_ITEMS: return { ...state, items: payload };
    case PLANTS_SET_LOADING: return { ...state, loading: payload };
    case PLANTS_SET_ERROR: return { ...state, error: payload };
    /* case USERS_UPDATE_LOADING: return { ...state, updating: payload };
    case USERS_UPDATE_ERROR: return { ...state, updateError: payload }; */
    default: return state;
  }
};

export interface PlantsState {
  items: any[],
  loading: boolean,
  updating: boolean,
  error: any,
  updateError: any,
};

// Initial state
export const plantsInitState: PlantsState = {
  items: [],
  loading: false,
  updating: false,
  error: null,
  updateError: null,
};

// Thunks
export const fetchAllPlants = () => async (dispatch: any, getState: any, { api }: any) => {
  await dispatch(setPlantsLoading(true));
  try {
    const { fetchAllPlants } = api.plants;
    const plants = await fetchAllPlants();
    if (plants) await dispatch(setPlants(plants));
  } catch (error) {
    await dispatch(setPlantsError(error));
  }
  await dispatch(setPlantsLoading(false));
};