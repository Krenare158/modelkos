import { CHOOSE_LANGUAGE } from '../actions/actionTypes';
import { dataLocalStorage } from '../../Components/main/SelectLanguage/dataLocalStorage';

const initialState = {
  language: dataLocalStorage.getLocale() || 'en-GB',
};

export const languageReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CHOOSE_LANGUAGE:
      return {
        ...state,
        language: payload,
      };

    default:
      return state;
  }
};
