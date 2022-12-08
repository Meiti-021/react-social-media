import "./profile.css";
import "./assets/back.jpg";
import prof from "./assets/prof.jpg";
import { useGlobalContext } from "./context";

export const Profile = () => {
  const { data, myInfoData } = useGlobalContext();
  return (
    <>
      <div className="profile">
        <figure style={{ backgroundImage: `url(${myInfoData.background})` }}>
          <img
            src="https://static-cse.canva.com/blob/975732/1600w-EW4cggXkgbc.jpg"
            alt={myInfoData.name}
            className="profile-picture"
          />
        </figure>
        <div className="user-info">
          <h1 className="username">{myInfoData.name}</h1>
          <div className="user-id">{myInfoData.id}</div>
        </div>
        <div className="account-insight">
          <div className="followers-insight">
            <p className="placeholder">FOLLOWERS</p>
            <p className="follow-counter">{myInfoData.followers}</p>
          </div>
          <div className="followings-insight">
            <p className="placeholder">FOLLOWINGS</p>
            <p className="follow-counter">{myInfoData.following}</p>
          </div>
        </div>
      </div>
    </>
  );
};
