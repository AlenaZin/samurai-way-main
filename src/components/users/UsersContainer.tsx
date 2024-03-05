import { useAppDispatch, useAppSelector } from "../../redux/reduxStore";
import { followAC, setUsersAC, unfollowAC, userDataType } from "../../redux/usersReducer";
import { Users } from "./Users";

export const UsersContainer = () => {

  const usersPage = useAppSelector(state => state.usersPage);
  const dispatch = useAppDispatch();

  const followCallback = (userId: number) => {
    dispatch(followAC(userId))
  }
  const unfollowCallback = (userId: number) => {
    dispatch(unfollowAC(userId))
  }
  const setUsers = (users: userDataType) => {
    dispatch(setUsersAC(users))
  }

  return(
    <Users followCallback={followCallback} unfollowCallback={unfollowCallback} setUsers={setUsers} users={usersPage.userData}/>
  )
} 