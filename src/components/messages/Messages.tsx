import { NavLink } from 'react-router-dom'
import s from './Messages.module.css'
import { DialogItem } from './dialogItem/DialogItem'
import { MessageItem } from './messageItem/MessageItem'
import { ChangeEvent } from 'react'

type DialogsDataType = {
  id: number
  name: string
}
type MessagesDataType = {
  id: number
  message: string
}
type MessagesProps = { 
  dialogs: DialogsDataType[]
  messages: MessagesDataType[]
  text: string
  onChangeMessageTextCallback: (text: string)=>void
  sendMessageCallback:()=>void
}

export const Messages = ({dialogs, messages, text, onChangeMessageTextCallback, sendMessageCallback}: MessagesProps) => {

  const dialogsElement = dialogs.map((dialog) => (
    <DialogItem key={dialog.id} dialog={dialog} />
  ));
  const messagesElement = messages.map((message) => (
    <MessageItem message={message} key={message.id} />
  ));
  
  const onChangeMessageText = (e: ChangeEvent<HTMLInputElement>) => {
    onChangeMessageTextCallback(e.currentTarget.value)
  }
  const sendMessage = () => {
    sendMessageCallback()    
  }

  return (
    <div className={s.messages}>
      <div className={s.dialogsItems}>{dialogsElement}</div>
      <div className={s.messagesItems}>
        {messagesElement}
        <div>
          <input value={text} onChange={onChangeMessageText}/>
          <button onClick={sendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
}


