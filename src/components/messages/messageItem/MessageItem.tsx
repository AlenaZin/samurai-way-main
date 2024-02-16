
import { MessagesDataType } from '../../../redux/state';
import s from './../Messages.module.css'


  type MessagesItemsProps = { message: MessagesDataType}

  export const MessageItem = ({message}: MessagesItemsProps) => {
    return(
      <div>          
          <div className={s.message}>{message.name}</div>
      </div>
    ) 

  }

