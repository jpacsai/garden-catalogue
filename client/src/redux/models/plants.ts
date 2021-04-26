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
    case PLANTS_SET_ITEMS:
      return { ...state, items: payload };
    case PLANTS_SET_LOADING:
      return { ...state, loading: payload };
    case PLANTS_SET_ERROR:
      return { ...state, error: payload };
    /* case USERS_UPDATE_LOADING: return { ...state, updating: payload };
    case USERS_UPDATE_ERROR: return { ...state, updateError: payload }; */
    default:
      return state;
  }
};

// TYPES

export enum PlantType {
  Climber,
  Grass,
  Herb,
  Perennial,
  Annual,
  Shrub,
  Tree,
  Fern,
  Fruit,
  Vegetable,
  Flower
}

export enum InterestType {
  flower,
  foliage,
  bark,
  crop,
}

export enum Position {
  shade,
  partial_sun,
  full_sun,
}

export enum Hardiness {
  fully,
  frost,
  half,
  tender,
}

export enum SoilType {
  chalk,
  clay,
  loam,
  sand,
}

export enum SoilPh {
  acid,
  neutral,
  alkaline,
}

export enum SoilMoisture {
  poorly_drained = 'Poorly drained',
  moist = 'Moist',
  dry = 'Dry',
}

export interface InterestGroupType {
  interest_start: number;
  interest_end: number;
  interest: InterestType;
}

// FLOWER COLOR enum

export interface Plant {
  latin_name: string;
  hybrid_name: string;
  hungarian_name: string;
  english_name: string;
  type: PlantType;
  height: number;
  spread: number;
  description: string;
  links: string[];
  interests: InterestGroupType[];
  winter_interest: boolean;
  spring_interest: boolean;
  summer_interest: boolean;
  autumn_interest: boolean;
  fragrant: boolean;
  position: Position;
  hardiness: Hardiness;
  soil: SoilType;
  soil_ph: SoilPh;
  soil_moisture: SoilMoisture;
}

export enum FlowerColor {
  Black,
  Blue,
  Brown,
  Cream,
  Green,
  Orange,
  Pink,
  Purple,
  Red,
  White,
  Yellow,
}

export interface PlantsState {
  items: any[];
  loading: boolean;
  updating: boolean;
  error: any;
  updateError: any;
}

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
