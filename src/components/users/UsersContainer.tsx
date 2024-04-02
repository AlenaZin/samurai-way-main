import { useAppDispatch, useAppSelector } from "../../redux/reduxStore";
import { followAC, setCurrentPageAC, setUsersAC, setTotalUsersCountAC, unfollowAC, UserDataType, toggleIsFetcingAC } from "../../redux/usersReducer";
import { UsersAPIComponent } from "./UsersAPIComponent";

export const UsersContainer = () => {

  const usersPage = useAppSelector(state => state.usersPage);
  const dispatch = useAppDispatch();

  const followCallback = (userId: number) => {
    dispatch(followAC(userId))
  }
  const unfollowCallback = (userId: number) => {
    dispatch(unfollowAC(userId))
  }
  const setUsers = (users: UserDataType[]) => {
    dispatch(setUsersAC(users))
  }
  const setCurrentPageCallback = (currentPage: number) => {
    dispatch(setCurrentPageAC(currentPage))
  }
  const setTotalUsersCount = (count: number) => {
    dispatch(setTotalUsersCountAC(count))
  }
  const toggleIsFetcing = (isFetching: boolean) => {
    dispatch(toggleIsFetcingAC(isFetching))
  }

  return(
    <UsersAPIComponent 
      followCallback={followCallback}
      unfollowCallback={unfollowCallback}
      setCurrentPageCallback={setCurrentPageCallback} 
      setUsers={setUsers}
      users={usersPage.userData}
      pageSize={usersPage.pageSize}
      totalUsersCount={usersPage.totalUsersCount}
      setTotalUsersCount={setTotalUsersCount}
      currentPage={usersPage.currentPage}
      isFetching={usersPage.isFetching}
      toggleIsFetcing={toggleIsFetcing}
    />
  )
} 