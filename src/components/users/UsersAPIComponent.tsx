import axios from "axios"
import { UserDataType } from "../../redux/usersReducer"
import React from "react"
import { Users } from "./Users"
import { Preloader } from "../../common/preloader/Preloader"


interface UsersAPIComponentProps {
  followCallback: (userId: number)=>void
  unfollowCallback: (userId: number)=>void
  setCurrentPageCallback: (currentPage: number)=>void
  setTotalUsersCount: (count: number)=>void
  setUsers: (users: UserDataType[])=>void
  users: UserDataType[]
  pageSize: number
  totalUsersCount: number
  currentPage: number
  isFetching: boolean
  toggleIsFetcing: (isFetching: boolean)=>void
}

export class UsersAPIComponent extends React.Component<UsersAPIComponentProps> {
  // constructor(props: UsersProps) {
  //   super(props);
  // }
  componentDidMount(): void {
    this.props.toggleIsFetcing(true)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then((response) => {
        this.props.toggleIsFetcing(false)
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
      });
  }

  unfollow = (userId: number) => {
    this.props.unfollowCallback(userId);
  };
  follow = (userId: number) => {
    this.props.followCallback(userId);
  };
  changeCurrentPage = (currentPage: number) => {
    this.props.toggleIsFetcing(true)
    this.props.setCurrentPageCallback(currentPage)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.pageSize}`)
    .then((response) => {
      this.props.toggleIsFetcing(false)
      this.props.setUsers(response.data.items);
    });
  }

  render() {
    return (
      <>
      {this.props.isFetching ? <Preloader/> : null}
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          changeCurrentPage={this.changeCurrentPage}
          users={this.props.users}
          unfollow={this.unfollow}
          follow={this.follow}
        />
      </>
    );
  }
}
  
//https://loading.io/asset/732128


// const photoUrl = "https://img.freepik.com/free-photo/luxury-plain-green-gradient-abstract-studio-background-empty-room-with-space-for-your-text-and-picture_1258-54283.jpg?size=626&ext=jpg&ga=GA1.1.1412446893.1704931200&semt=ais"
// [
//   {id:1, photoUser: photoUrl, followed: true, fullName: "Alena Zinovieva", status: "I'm a student", location: {country: "Russia", city: "Moscow"}},
//   {id:2, photoUser: photoUrl, followed: true, fullName: "Artem Zinovieva", status: "I'm good", location: {country: "Russia", city: "Moscow"}},
//   {id:3, photoUser: photoUrl, followed: false, fullName: "Svetlana Starodubseva", status: "I'm at work", location: {country: "Russia", city: "Moscow"}},
//   {id:4, photoUser: photoUrl, followed: false, fullName: "Sergey Suspitsyn", status: "Everything is great", location: {country: "Russia", city: "Moscow"}},
// ]