
type PostDataType = {
  id: number
  title: string
  likeCount: number
}
type InitionStateType = typeof initionState

export type addPostACType = ReturnType<typeof addPostAC> 
export type changeNewTextACType = ReturnType<typeof changeNewTextAC>

const initionState = {
  postData: [
    {id:1, title: "Hi, how are you?", likeCount: 15},
    {id:2, title: "It's my first post?", likeCount: 20}
  ] as PostDataType[],
  messageForNewPost: "",
}

const profileReducer = (state: InitionStateType = initionState, action: addPostACType | changeNewTextACType) => {
  switch(action.type){
    case 'ADD-POST': {
      const newPost: PostDataType = {
        id: new Date().getTime(), 
        title: state.messageForNewPost, 
        likeCount: 0
      };
      
      return {...state, postData: [newPost, ...state.postData]}
    }
    case 'CHANGE-NEW-TEXT': {
      return {...state, messageForNewPost: action.newText }
    }
    default: 
      return state
  }
}

export const addPostAC = () => ({type: 'ADD-POST'} as const)
export const changeNewTextAC = (newText: string) => (
  {
    type: 'CHANGE-NEW-TEXT', 
    newText
  } as const
)
  
export default profileReducer;