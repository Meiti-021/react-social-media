import "./profile.css";
import "./assets/back.jpg";
import prof from "./assets/prof.jpg";

export const Profile = () => {
  return (
    <>
      <div className="profile">
        <figure>
          <img src={prof} alt="" className="profile-picture" />
        </figure>
        <div className="user-info">
          <h1 className="username">ANNA Smith</h1>
          <div className="user-id">@anna758</div>
        </div>
        <div className="account-insight">
          <div className="followers-insight">
            <p className="placeholder">FOLLOWERS</p>
            <p className="follow-counter">546K</p>
          </div>
          <div className="followings-insight">
            <p className="placeholder">FOLLOWINGS</p>
            <p className="follow-counter">546K</p>
          </div>
        </div>
      </div>
    </>
  );
};
