import axios from "axios";
import { usersActions } from "./users";

export const fetchUsersData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await axios.get("https://randomuser.me/api/?results=12");

      return response;
    };

    try {
      const userData = await fetchData();
      dispatch(
        usersActions.replaceData({ items: userData.data.results || [] })
      );
    } catch (error) {
      console.log(error);
      // dispatch(
      //   uiActions.toggleStatus({
      //     status: "error",
      //     title: "Error!",
      //     message: "FETCHING cart data failed!",
      //   })
      // );
    }
  };
};
