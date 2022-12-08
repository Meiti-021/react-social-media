import { AiFillHeart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { BiCommentAdd } from "react-icons/bi";
import { IoMdShare } from "react-icons/io";
import "./meow.css";
import prof from "./assets/prof.jpg";
export const Meow = () => {
  return (
    <>
      <div className="meow">
        <div className="meow-header">
          <img src={prof} alt="" className="meow__profile-picture" />
          <div className="meow__user-info">
            <p className="meow__username">Anna Smith</p>
            <p className="meow__user-id">Anna754</p>
          </div>
        </div>
        <div className="meow-content">
          <p className="meow-title">new meowww</p>
          <p className="meow-massage">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam
            dolore necessitatibus laudantium nesciunt, perferendis in aliquam
            quisquam voluptatum deserunt neque eveniet eligendi corporis tempora
            ratione eius dignissimos possimus, veniam recusandae!
          </p>
          <div className="tags">
            <button className="tag-btn">#web</button>
            <button className="tag-btn">#front-end</button>
            <button className="tag-btn">#developer</button>
          </div>
          <div className="inter-activity">
            <button className="like-btn">
              <AiOutlineHeart />
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
