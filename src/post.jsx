import "./post.css";
import meow from "./assets/meow.png";
import { useState } from "react";
import { useEffect } from "react";
import { myInfo } from "./myInfo";
import { useGlobalContext } from "./context";
export const Post = () => {
  const [formData, setFormData] = useState({
    newMassage: "",
    title: "",
    tags: "",
  });
  const { data, setData } = useGlobalContext();
  const [limitNumber, setLimitNumber] = useState(300);
  useEffect(() => {
    const counter = 300 - formData.newMassage.length;
    setLimitNumber(counter);
  }, [formData.newMassage]);
  const changeHandler = (event) => {
    setFormData({
      ...formData,
      [event.target.dataset.type]: event.target.value,
    });
  };
  const submition = (event) => {
    event.preventDefault();
    const hashtags = formData.tags.split(" ");
    const newPost = {
      userInfo: {
        ...myInfo,
      },
      post: {
        title: formData.title,
        massage: formData.newMassage,
        id: "dshvbsvbshvbdlsvhdbsvh",
        tags: [...hashtags],
      },
    };
    console.log(newPost);
    setData([...data, newPost]);
    setFormData({
      newMassage: "",
      title: "",
      tags: "",
    });
  };
  return (
    <>
      <div className="post">
        <figure>
          <img src={meow} alt="" className="post-image" />
        </figure>
        <form
          action="#"
          className="post-form"
          onSubmit={() => submition(event)}
        >
          <label htmlFor="post-content">New Meow:</label>
          <textarea
            name="post-content"
            id="post-content"
            cols="30"
            rows="10"
            maxLength={300}
            data-type="newMassage"
            onChange={() => changeHandler(event)}
            value={formData.newMassage}
            required
          ></textarea>
          <p className="word-counter">{`${limitNumber}`} / 300</p>
          <div className="additional-content">
            <input
              type="text"
              placeholder="Title"
              data-type="title"
              onChange={() => changeHandler(event)}
              value={formData.title}
              required
            />
            <input
              type="text"
              placeholder="Tags"
              data-type="tags"
              onChange={() => changeHandler(event)}
              value={formData.tags}
              required
            />
          </div>
          <button className="post-btn">POST</button>
        </form>
      </div>
    </>
  );
};
