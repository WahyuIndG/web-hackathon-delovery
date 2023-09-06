/**
setAuthUserActionCreator(authUser)
unsetAuthUserActionCreator()
asyncSetAuthUser()
asyncUnsetAuthUser()
 */

// import { showLoading, hideLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';

const ActionType = {
  SET_AUTH_USER: 'SET_AUTH_USER',
  UNSET_AUTH_USER: 'UNSET_AUTH_USER',
};

function setAuthUserActionCreator(authUser) {
  return {
    type: ActionType.SET_AUTH_USER,
    payload: {
      authUser,
    },
  };
}

function unsetAuthUserActionCreator() {
  return {
    type: ActionType.UNSET_AUTH_USER,
    payload: {
      authUser: null,
    },
  };
}

// THUNK

// dipanggil di saat Register (RegisterPage.jsx)
function asyncRegisterUser({ email, name, password, jenis_kelamin }) {
  return async (dispatch) => {
    try {
      await api.register({ email, name, password, jenis_kelamin });
    } catch (error) {
      alert(`failed to fetch | error : ${error}`);
    }
  };
}

// dipanggil di saat Login (LoginPage.jsx)
function asyncSetAuthUser({ email, password }) {
  return async (dispatch) => {
    try {
      const token = await api.login({ email, password });

      api.putAccessToken(token);

      const authUser = await api.getOwnProfile();

      dispatch(setAuthUserActionCreator(authUser));
    } catch (error) {
      alert(`failed to fetch | error : ${error}`);
    }
  };
}

// dipanggil di saat LogOut (App.jsx)
function asyncUnsetAuthUser() {
  return (dispatch) => {
    dispatch(unsetAuthUserActionCreator());
    api.putAccessToken('');
  };
}

export {
  ActionType,
  setAuthUserActionCreator,
  unsetAuthUserActionCreator,
  asyncSetAuthUser,
  asyncUnsetAuthUser,
  asyncRegisterUser,
};
