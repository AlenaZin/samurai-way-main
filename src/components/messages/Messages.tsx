import { NavLink } from 'react-router-dom'
import s from './Messages.module.css'
import { DialogItem } from './dialogItem/DialogItem'
import { MessageItem } from './messageItem/MessageItem'
import { DialogsDataType, MessagesDataType } from '../../redux/state'

type MessagesProps = { dialogs: DialogsDataType[], messages: MessagesDataType[] }

export const Messages = ({dialogs, messages}: MessagesProps) => {

  const dialogsElement = dialogs.map((dialog) => (
    <DialogItem key={dialog.id} dialog={dialog} />
  ));
  const messagesElement = messages.map((message) => (
    <MessageItem message={message} key={message.id} />
  ));

  return (
    <div className={s.messages}>
      <div className={s.dialogsItems}>{dialogsElement}</div> 
      <div className={s.messagesItems}>{messagesElement}</div>
    </div>
  );
}


