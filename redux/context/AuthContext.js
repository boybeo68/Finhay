import React, {createContext, useReducer, useEffect, useMemo} from 'react';
import {authReducer} from '../reducers/authReducer';
import AsyncStorage from '@react-native-community/async-storage';

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
  const [state, dispatch] = useReducer(authReducer, {
    isSignout: false,
    isLoading: true,
    userToken: null,
  });

  useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      let userToken;
      try {
        userToken = await AsyncStorage.getItem('userToken');
        if (userToken) {
          dispatch({type: 'SIGN_IN', token: userToken});
        }
      } catch (e) {}
      dispatch({type: 'RESTORE_TOKEN', token: userToken});
    };
    bootstrapAsync();
  }, []);

  const authContext = useMemo(
    () => ({
      signIn: async (data) => {
        AsyncStorage.setItem('userToken', 'auth-token');
        dispatch({type: 'SIGN_IN', token: 'dummy-auth-token'});
      },
      signOut: () => dispatch({type: 'SIGN_OUT'}),
      signUp: async (data) => {
        dispatch({type: 'SIGN_IN', token: 'dummy-auth-token'});
      },
    }),
    [],
  );

  return (
    <AuthContext.Provider value={{state, authContext}}>
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthContextProvider;
