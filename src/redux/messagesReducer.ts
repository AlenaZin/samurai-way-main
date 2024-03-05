type MessagesDataType = {
  id: number
  message: string
}
type DialogsDataType = {
  id: number
  name: string
}
export type newMessageTextACType = ReturnType<typeof newMessageTextAC> 
export type sendMessageType = ReturnType<typeof sendMessage>
type InitionStateType = typeof initionState

const initionState = {
  dialogsData: [
    {id: 1, name: "Alena"},
    {id: 2, name: "Artem"},
    {id: 3, name: "Sveta"},
    {id: 4, name: "Sergey"},
    {id: 5, name: "Danya"},
    {id: 6, name: "Yana"},
  ] as DialogsDataType[],
  messagesData: [
    {id: 1, message: "Hi"},
    {id: 2, message: "How is your it-kamasutra?"},
    {id: 3, message: "Yo"},
    {id: 4, message: "Yo"},
    {id: 5, message: "Yo"},
  ] as MessagesDataType[],
  newMessageText: '',
}

const messagesReducer = (state: InitionStateType = initionState, action: newMessageTextACType | sendMessageType) => {
  switch(action.type){
    case 'NEW-MESSAGE-TEXT': {
      // state.newMessageText = action.text; 
      return {...state, newMessageText: action.text}
  } case 'SEND-MESSAGE': {
      const newMessage = state.newMessageText;
      state.newMessageText = '';
      // state.messagesData.push({id: 6, message: newMessage})
      return {...state, messagesData: [...state.messagesData, {id: 6, message: newMessage}]}
    }
    default: 
      return state
  }
}

export const newMessageTextAC = (text: string) => (
  {
    type: 'NEW-MESSAGE-TEXT',
    text
  } as const
)
export const sendMessage = () => (
  {
    type: 'SEND-MESSAGE'
  } as const
)

export default messagesReducer;