export type PostDataType = {
  id: number
  title: string
  likeCount: number
}
export type DialogsDataType = {
  id: number
  name: string
}
export type MessagesDataType = {
  id: number
  name: string
}
export type profilePageType = {
  postData: PostDataType[]
}
export type messagesPageType = {
  dialogsData: DialogsDataType[]
  messagesData: MessagesDataType[]
}
export type sidebarType = {
}
export type StateType = {
  profilePage: profilePageType,
  messagesPage: messagesPageType,
  sidebar: sidebarType
}

export const state: StateType = {
  profilePage:{
    postData: [
      {id:1, title: "Hi, how are you?", likeCount: 15},
      {id:2, title: "It's my first post?", likeCount: 20}
    ],
  },
  messagesPage: {
    dialogsData: [
      {id: 1, name: "Alena"},
      {id: 2, name: "Artem"},
      {id: 3, name: "Sveta"},
      {id: 4, name: "Sergey"},
      {id: 5, name: "Danya"},
      {id: 6, name: "Yana"},
    ],
    messagesData: [
      {id: 1, name: "Hi"},
      {id: 2, name: "How is your it-kamasutra?"},
      {id: 3, name: "Yo"},
      {id: 4, name: "Yo"},
      {id: 5, name: "Yo"},
    ]
  },
  sidebar: {


  }
}

