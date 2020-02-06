import React, { useReducer } from "react";
import alertReducer from "./alertReducer";
import uuid from "uuid";
import { SET_ALERT, REMOVE_ALERT } from "../types";

const AlertState = props => {
  const initialState = [];

  const [state, dispatch] = useReducer(alertReducer, initialState);

  // Set Alert
  const setAlert = (msg, type, timeout = 3000) => {
    const id = uuid.v4();
    dispatch(
      {
        type: SET_ALERT,
        payload: {
          msg,
          type,
          id
        }
      },

      // Remove Alert
      setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), timeout)
    );
  };

  return (
    <AlertState.provider
      value={{
        alerts: state,
        setAlert
      }}
    >
      {props.children}
    </AlertState.provider>
  );
};
