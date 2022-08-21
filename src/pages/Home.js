import React from "react";
import { useDispatch } from "react-redux";
import { usersActions } from "../store/users/users";

import { fetchUsersData } from "../store/users/users-actions";

const Home = () => {
  const dispatch = useDispatch();

  const loadHandler = () => {
    dispatch(fetchUsersData());
  };

  const resetHandler = () => {
    dispatch(
      usersActions.resetData({
        items: [],
      })
    );
  };

  const addHandler = () => {
    dispatch(fetchUsersData(1));
  };

  return (
    <div>
      <h2>Home</h2>
      <div>
        <button onClick={loadHandler}>load</button>
        <button onClick={resetHandler}>reset</button>
        <button onClick={addHandler}>add</button>
      </div>
    </div>
  );
};

export default Home;
