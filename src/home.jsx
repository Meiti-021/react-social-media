import { Meow } from "./meow";
import "./home.css";
import { Post } from "./post";
import { useGlobalContext } from "./context";
export const Home = () => {
  const { data } = useGlobalContext();
  return (
    <>
      <div className="meow-container">
        {data.map((meow) => {
          return <Meow {...meow} key={meow.id} />;
        })}
      </div>
    </>
  );
};
