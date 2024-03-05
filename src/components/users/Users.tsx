import { userDataType } from "../../redux/usersReducer"
import s from "./Users.module.css"

type UsersProps = {
  followCallback: (userId: number)=>void
  unfollowCallback: (userId: number)=>void
  setUsers: (users: userDataType)=>void
  users: userDataType[]
}
export const Users = ({followCallback, unfollowCallback, setUsers, users}: UsersProps) => {

  const unfollow = (userId: number) => {
    unfollowCallback(userId)
  }
  const follow = (userId: number) => {
    followCallback(userId)
  }

  return (
    <>
      {users.map(user => (
        <div key={user.id} className={s.usersPage}>
          <div className={s.user}>
            <img src={user.photoUser}/>
            {user.followed 
            ? <button onClick={()=>unfollow(user.id)}>unfollow</button>
            : <button onClick={()=>follow(user.id)}>follow</button>
            }            
          </div>
          <div className={s.dataContainer}>
            <div className={s.userData}>
              <p>{user.fullName}</p>
              <p>{user.status}</p>
            </div>
            <div className={s.location}>
              <p>{user.location.country}</p>
              <p>{user.location.city}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
} 