import React from "react";

function PostArea() {
  return (
    <>
      <div className="flex my-1 p-1">
        <img
          className="rounded-full w-1/4 h-1/4"
          src="images/Profile pic.jpg"
          alt="admin_pp"
        />
        <textarea
          className="border-2 rounded-xl w-full p-1 ml-1"
          placeholder="Write something here!"
        />
      </div>
    </>
  );
}

export default PostArea;
