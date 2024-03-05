import profileReducer, { addPostACType, changeNewTextACType } from "./profileReducer"
import messagesReducer, { newMessageTextACType, sendMessageType } from "./messagesReducer"

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
  message: string
}
export type profilePageType = {
  postData: PostDataType[]
  messageForNewPost: string
}
export type messagesPageType = {
  dialogsData: DialogsDataType[]
  messagesData: MessagesDataType[]
  newMessageText: string
}
export type sidebarType = {
}
export type StateType = {
  profilePage: profilePageType,
  messagesPage: messagesPageType,
  sidebar: sidebarType
}

export type ActionsType = addPostACType | changeNewTextACType | newMessageTextACType | sendMessageType


export type StoreType = {
  _state: StateType
  _rerenderEntereThee: ()=>void
  subscriber: (observer: ()=>void)=> void
  getState: ()=> StateType
  dispatch: (action: ActionsType)=>void
}

const store: StoreType = {
  _state: {
    profilePage:{
      postData: [
        {id:1, title: "Hi, how are you?", likeCount: 15},
        {id:2, title: "It's my first post?", likeCount: 20}
      ],
      messageForNewPost: "",
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
        {id: 1, message: "Hi"},
        {id: 2, message: "How is your it-kamasutra?"},
        {id: 3, message: "Yo"},
        {id: 4, message: "Yo"},
        {id: 5, message: "Yo"},
      ],
      newMessageText: '',
    },
    sidebar: {  }
  },
  _rerenderEntereThee() {
    console.log('state chenged')
  },
  subscriber(observer) {
    this._rerenderEntereThee = observer
  },
  getState(){
    return this._state
  },
  dispatch(action) {
    // profileReducer(this._state.profilePage, action);
    // messagesReducer(this._state.messagesPage, action);
    // sidebarReducer(this._state.sidebar, action);

    this._rerenderEntereThee()
  }
}




