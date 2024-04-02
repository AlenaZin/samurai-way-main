import s from "./Users.module.css"

import userIcon from "./../../assets/images/user_icon.png"
import { UserDataType } from "../../redux/usersReducer"

type UsersProps = {
  totalUsersCount: number
  pageSize: number
  changeCurrentPage: (currentPage: number) => void
  currentPage: number
  users: UserDataType[]
  unfollow: (userId: number) => void
  follow: (userId: number) => void
}

export const Users = ({totalUsersCount, pageSize, changeCurrentPage, currentPage, users, unfollow, follow}: UsersProps) => {

  let pageCount = Math.ceil(totalUsersCount / pageSize);
  let pages = [];
  for(let i=1; i<=20; i++) {
    pages.push(i)
  }

  return(
    <>
      <div>
        {pages.map(p => {
          return <span onClick={()=>changeCurrentPage(p)} className={ currentPage === p ? s.activePage : s.pageNumber}>{p}</span>
        })}
      </div>
        {users.map((user) => (
          <div key={user.id} className={s.usersPage}>
            <div className={s.user}>
              <img
                src={user.photos.small != null ? user.photos.small : userIcon}
              />
              {user.followed ? (
                <button onClick={() => unfollow(user.id)}>unfollow</button>
              ) : (
                <button onClick={() => follow(user.id)}>follow</button>
              )}
            </div>
            <div className={s.dataContainer}>
              <div className={s.userData}>
                <p>{user.name}</p>
                <p>{user.status}</p>
              </div>
              <div className={s.location}>
                <p>{"user.location.country"}</p>
                <p>{"user.location.city"}</p>
              </div>
            </div>
          </div>
        ))}
      </>
  )
}