import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { fetchUsersData } from "../store/users/users-actions";

const Users = () => {
  const userData = useSelector((state) => state.users.items);

  const dispatch = useDispatch();

  useEffect(() => {
    console.count("z Users");
    dispatch(fetchUsersData());
  }, [dispatch]);

  const check = () => {
    console.log("data", userData);
  };

  return (
    <div>
      Users
      <button onClick={check}>USERS CHECK</button>
      {userData.map((user) => {
        return <div key={user.login.uuid}>{user.name.first}</div>;
      })}
    </div>
  );
};

export default Users;
