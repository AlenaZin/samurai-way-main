
export type UserDataType = {
  id: number
  photos: {
    small: null | string,
    large: null | string
  }
  followed: boolean
  name: string
  status: string
  location?: {
    country: string
    city: string
  }
}
type InitionStateType = {
  userData: UserDataType[]
  pageSize: number
  totalUsersCount: number
  currentPage: number
  isFetching: boolean
}

export type followACType = ReturnType<typeof followAC> 
export type unfollowACType = ReturnType<typeof unfollowAC>
export type setUsersACType = ReturnType<typeof setUsersAC>
export type setUserACType = ReturnType<typeof setUserAC>
export type setCurrentPageACType = ReturnType<typeof setCurrentPageAC>
export type setTotalUsersCountACType = ReturnType<typeof setTotalUsersCountAC>
export type toggleIsFetcingACType = ReturnType<typeof toggleIsFetcingAC>

type ActionsType =
  | followACType
  | unfollowACType
  | setUsersACType
  | setUserACType
  | setCurrentPageACType
  | setTotalUsersCountACType
  | toggleIsFetcingACType;

const photoUrl = "https://img.freepik.com/free-photo/luxury-plain-green-gradient-abstract-studio-background-empty-room-with-space-for-your-text-and-picture_1258-54283.jpg?size=626&ext=jpg&ga=GA1.1.1412446893.1704931200&semt=ais"

const initionState: InitionStateType = {
  userData: [],
  pageSize: 10,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: true
}

const usersReducer = (state: InitionStateType = initionState, action: ActionsType): InitionStateType => {
  switch (action.type) {
    case "FOLLOW":
      return {
        ...state,
        userData: state.userData.map((u) =>
          u.id === action.userId ? { ...u, followed: true } : u
        ),
      };

    case "UNFOLLOW":
      return {
        ...state,
        userData: state.userData.map((u) =>
          u.id === action.userId ? { ...u, followed: false } : u
        ),
      };

    case "SET-USERS":
      return { ...state, userData: [...action.users] };

    case "SET-USER":
      return { ...state, userData: [...state.userData, action.user] };
    case "SET-CURRENT-Page":
      return { ...state, currentPage: action.currentPage };
    case "SET-TOTAL-USERS_COUNT":
      return { ...state, totalUsersCount: action.count };
    case "TOGGLE-IS-FETCING":
      return { ...state, isFetching: action.isFetching };

    default:
      return state;
  }
};

export const followAC = (userId: number) => ({type: 'FOLLOW', userId } as const)
export const unfollowAC = (userId: number) => ({type: 'UNFOLLOW', userId} as const)
export const setUsersAC = (users: UserDataType[]) => ({type: 'SET-USERS', users} as const)
export const setUserAC = (user: UserDataType) => ({type: 'SET-USER', user} as const)
export const setCurrentPageAC = (currentPage: number) => ({type: "SET-CURRENT-Page", currentPage} as const)
export const setTotalUsersCountAC = (count: number) => ({type: "SET-TOTAL-USERS_COUNT", count} as const)
export const toggleIsFetcingAC = (isFetching: boolean) => ({type: "TOGGLE-IS-FETCING", isFetching} as const)
  
export default usersReducer;