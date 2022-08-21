import axios from "axios";
import { usersActions } from "./users";

export const fetchUsersData = (count = 10) => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://randomuser.me/api/?results=${count}`
      );

      return response;
    };

    try {
      dispatch(usersActions.replaceData({ items: [], isLoading: true }));
      const userData = await fetchData();
      dispatch(
        usersActions.replaceData({
          items: userData.data.results || [],
          isLoading: false,
        })
      );
    } catch (error) {
      console.log(error);
      dispatch(
        usersActions.replaceData({
          items: [],
          isError: true,
          isLoading: false,
        })
      );
    }
  };
};
