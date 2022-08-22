import React from "react";
import { useDispatch } from "react-redux";
import { messageActions } from "../store/messages/messages";
import { usersActions } from "../store/users/users";

import { fetchUsersData } from "../store/users/users-actions";
import { HomeWrapper } from "../styled-components/styled-components";

const Home = () => {
  const dispatch = useDispatch();

  const loadHandler = () => {
    dispatch(fetchUsersData());
    dispatch(
      messageActions.addMessage({
        message: "Loading more users...",
        type: "pending",
        isActive: true,
      })
    );
  };

  const resetHandler = () => {
    dispatch(
      usersActions.resetData({
        items: [],
      })
    );
    dispatch(
      messageActions.addMessage({
        message: "Users reseted",
        type: "danger",
        isActive: true,
      })
    );
  };

  const addHandler = () => {
    dispatch(fetchUsersData(1));
    dispatch(
      messageActions.addMessage({
        message: "Loading 1 more user...",
        type: "pendingSingle",
        isActive: true,
      })
    );
  };

  return (
    <HomeWrapper>
      <p>controls</p>
      <div>
        <button onClick={loadHandler}>Load</button>
        <button onClick={resetHandler}>Reset</button>
        <button onClick={addHandler}>Add</button>
      </div>
    </HomeWrapper>
  );
};

export default Home;
