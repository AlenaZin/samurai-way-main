import s from './ProfileInfo.module.css'

export const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img src="https://kartin.papik.pro/uploads/posts/2023-06/1687110851_kartin-papik-pro-p-kartinki-s-kolibri-i-tsvetami-krasivie-61.jpg" />
      </div>
      <div className={s.discription}>ava + discription</div>
    </div>
  );
}