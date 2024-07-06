import React from "react";
import Like from "./svg/Like";
import Unlike from "./svg/Unlike";
import Comment from "./svg/Comment";
import Follow from "./svg/Follow";

function Post() {
  return (
    <>
      <div className="">
        <div className="flex">
          <img
            className="rounded-full w-1/4 h-1/4"
            src="images/pp.png"
            alt="user_pp"
          />
          <div className="">
            <div className="">Dipto Biswas</div>
            <div className="text-gray-600">arya2k14</div>
          </div>
        </div>
        <div className="">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Necessitatibus inventore voluptatum voluptas ducimus praesentium
          aperiam perspiciatis placeat ex iusto velit adipisci nostrum, est vel
          perferendis, reprehenderit nam quis tenetur. Eos consequuntur
          praesentium cupiditate, quae rem nobis beatae tenetur esse voluptatem
          deserunt cum. Nobis, eligendi. Excepturi sit molestias consequuntur
          cupiditate nostrum!
        </div>
        <div className="flex justify-between">
          <Like />
          <Unlike />
          <Comment />
          <Follow />
        </div>
      </div>
    </>
  );
}

export default Post;
