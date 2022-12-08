import { AiFillHeart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { BiCommentAdd } from "react-icons/bi";
import { IoMdShare } from "react-icons/io";
import "./meow.css";
import prof from "./assets/prof.jpg";
import { useState } from "react";
export const Meow = ({ userInfo, post }) => {
  const [liked, setLiked] = useState(false);
  const liker = () => {
    liked ? setLiked(false) : setLiked(true);
  };
  return (
    <>
      <div className="meow">
        <div className="meow-header">
          <img
            src={userInfo.profile}
            alt=""
            className="meow__profile-picture"
          />
          <div className="meow__user-info">
            <p className="meow__username">{userInfo.name}</p>
            <p className="meow__user-id">{userInfo.id}</p>
          </div>
        </div>
        <div className="meow-content">
          <p className="meow-title">{post.title}</p>
          <p className="meow-massage">{post.massage}</p>
          <div className="tags">
            {post.tags.map((item) => {
              return <button className="tag-btn">{item}</button>;
            })}
          </div>
          <div className="inter-activity">
            <button className="like-btn" onClick={liker}>
              {liked ? <AiFillHeart /> : <AiOutlineHeart />}
            </button>
            <button className="comment-btn">
              <BiCommentAdd />
            </button>
            <button className="share-btn">
              <IoMdShare />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
