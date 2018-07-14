import { CHANGE_SCORE } from './actionTypes';

export const changeScore = usersScore => (
  {
    type: CHANGE_SCORE,
    payload: usersScore
  }
);

// export const addImages = image => ({ type: ADD_IMAGES, payload: image });
// export const toggleModal = () => ({ type: TOGGLE_MODAL, payload: null });
// export const setBackgroundImage = image => ({ type: SET_BACKGROUND_IMAGE, payload: image });
