import { CHANGE_LANGUAGE } from './action'

const initialState = {
  language: 'ES'
}
export default function rootReducer (state = initialState, action) {
  switch (action.type) {
    case CHANGE_LANGUAGE:
      if (state.language === 'ES') {
        return { ...state, language: 'EN' }
      } else {
        return { ...state, language: 'ES' }
      }
    default:
      return state
  }
}
