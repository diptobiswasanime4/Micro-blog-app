"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import PostArea from "@/components/PostArea";
import Post from "@/components/Post";

function Home() {
  return (
    <main className="">
      <Navbar />
      <div className="flex">
        <div className="w-1/4">1</div>
        <div className="w-1/2">
          <PostArea />
          <Post />
        </div>
        <div className="w-1/4">3</div>
      </div>
    </main>
  );
}

export default Home;
