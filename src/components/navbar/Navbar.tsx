import s from'./Navbar.module.css';

export const Navbar = () => {
  return(
    <nav className={s.nav}>
        <div>
          <a className={`${s.item} ${s.active}`}>Profile</a>
        </div>
        <div>
          <a className={s.item}>Messages</a>
        </div>
        <div>
          <a className={s.item}>News</a>
        </div>
        <div>
          <a className={s.item}>Music</a>
        </div>
        <div>
          <a className={s.item}>Settings</a>
        </div>
      </nav>
  )
}