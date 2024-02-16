import { NavLink } from 'react-router-dom'
import s from './../Messages.module.css'
import { DialogsDataType } from '../../../redux/state';

type DialogsItemsProps = { dialog: DialogsDataType };

  export const DialogItem = ({dialog}: DialogsItemsProps) => {    
    return (
      <div className={s.dialog}>
        <img src="https://img.freepik.com/free-photo/luxury-plain-green-gradient-abstract-studio-background-empty-room-with-space-for-your-text-and-picture_1258-54283.jpg?size=626&ext=jpg&ga=GA1.1.1412446893.1704931200&semt=ais" />
        
        <div className={s.dialogName}>
          <NavLink
            to={"/dialogs/" + dialog.id}
            className={({ isActive }) => (isActive ? s.activeLink : "")}
          >
            {dialog.name}
          </NavLink>
        </div>
      </div>
    );
  }

