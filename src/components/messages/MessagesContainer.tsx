import {newMessageTextAC, sendMessage } from '../../redux/messagesReducer'
import { useAppDispatch, useAppSelector } from '../../redux/reduxStore'
import { Messages } from './Messages'

export const MessagesContainer = () => {
  const messagesPage = useAppSelector(state => state.messagesPage);
  const dispatch = useAppDispatch();
  
  const onChangeMessageTextCallback = (text: string) => {
    dispatch(newMessageTextAC(text))
  }
  const sendMessageCallback = () => {
    dispatch(sendMessage())
  }

  return (
    <Messages
      onChangeMessageTextCallback={onChangeMessageTextCallback}
      sendMessageCallback={sendMessageCallback}
      dialogs={messagesPage.dialogsData}
      messages={messagesPage.messagesData}
      text={messagesPage.newMessageText}
    />
  );
}


