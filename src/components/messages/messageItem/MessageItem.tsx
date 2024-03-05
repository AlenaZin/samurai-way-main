
import { MessagesDataType } from '../../../redux/store';
import s from './../Messages.module.css'


  type MessagesItemsProps = { message: MessagesDataType}

  export const MessageItem = ({message}: MessagesItemsProps) => {
    return (
      <div>
        <div className={s.message}>
          <div className={s.text}>
            <div className={s.messageText}>{message.message}</div>
          </div>
        </div>
      </div>
    ); 

  }

