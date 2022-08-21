import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { fetchUsersData } from "../store/users/users-actions";

const Users = () => {
  const userData = useSelector((state) => state.users.items);
  const loading = useSelector((state) => state.users.isLoading);
  const error = useSelector((state) => state.users.isError);

  const dispatch = useDispatch();

  let userDataStatus = userData.length > 0;

  useEffect(() => {
    console.count("z Users");
    if (userDataStatus) {
      return;
    } else {
      dispatch(fetchUsersData());
    }
  }, [userDataStatus, dispatch]);

  const check = () => {
    console.log("data", userData);
  };

  return (
    <div>
      Users
      <button onClick={check}>USERS CHECK</button>
      {loading && <h2>loading...</h2>}
      {error && <h2>error...</h2>}
      {userData.map((user) => {
        return <div key={user.login.uuid}>{user.name.first}</div>;
      })}
    </div>
  );
};

export default Users;
