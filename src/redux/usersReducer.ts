
export type userDataType = {
  id: number
  photoUser: string
  followed: boolean
  fullName: string
  status: string
  location: {
    country: string
    city: string
  }
}
type InitionStateType = typeof initionState

export type followACType = ReturnType<typeof followAC> 
export type unfollowACType = ReturnType<typeof unfollowAC>
export type setUsersACType = ReturnType<typeof setUsersAC>

const photoUrl = "https://img.freepik.com/free-photo/luxury-plain-green-gradient-abstract-studio-background-empty-room-with-space-for-your-text-and-picture_1258-54283.jpg?size=626&ext=jpg&ga=GA1.1.1412446893.1704931200&semt=ais"

const initionState = {
  userData: [
    {id:1, photoUser: photoUrl, followed: true, fullName: "Alena Zinovieva", status: "I'm a student", location: {country: "Russia", city: "Moscow"}},
    {id:2, photoUser: photoUrl, followed: true, fullName: "Artem Zinovieva", status: "I'm good", location: {country: "Russia", city: "Moscow"}},
    {id:3, photoUser: photoUrl, followed: false, fullName: "Svetlana Starodubseva", status: "I'm at work", location: {country: "Russia", city: "Moscow"}},
    {id:4, photoUser: photoUrl, followed: false, fullName: "Sergey Suspitsyn", status: "Everything is great", location: {country: "Russia", city: "Moscow"}},
  ] as userDataType[],
}

const usersReducer = (state: InitionStateType = initionState, action: followACType | unfollowACType | setUsersACType) => {
  switch(action.type){
    case "FOLLOW": 
      return {...state, userData: state.userData.map(u => u.id === action.userId ? {...u, followed: true} : u)}
    
    case "UNFOLLOW":
      return {...state, userData: state.userData.map(u => u.id === action.userId ? {...u, followed: false} : u)}

    case "SET-USERS":
      return {...state, userData: [...state.userData, action.users]}
    
    default: 
      return state
  }
}

export const followAC = (userId: number) => ({type: 'FOLLOW', userId } as const)
export const unfollowAC = (userId: number) => ({type: 'UNFOLLOW', userId} as const)
export const setUsersAC = (users: userDataType) => ({type: 'SET-USERS', users} as const)
  
export default usersReducer;