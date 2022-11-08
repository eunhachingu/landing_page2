import React from "react";
import { BsApple } from "react-icons/bs";

function Works() {
  return (
    <div className="w-3/4 h-screen mx-auto p-32">
      <section className="">
        <p className="uppercase text-slate-400 mb-5">Featured Works</p>
        <h1 className="text-5xl max-w-screen-lg font-bold mb-10">
          These are some of our recent design projects and we are so excited to
          show them to you.
        </h1>
      </section>

      <section className="grid grid-cols-3 p-2 gap-1 ">
        <img src="./img/1.jpg" className="about--image" />
        <img src="./img/2.jpg" className="about--image" />
        <img src="./img/3.jpg" className="about--image" />
        <img src="./img/4.jpg" className="about--image" />
        <img src="./img/5.jpg" className="about--image" />
        <img src="./img/6.jpg" className="about--image" />
      </section>

      <section className="py-32">
        <h1 className="text-center text-3xl font-bold">
          What Clients Are Saying
        </h1>
        <div className="flex p-5 space-x-5 items-center">
          <BsApple className="flex h-auto w-24 p-2 rounded-full bg-black text-white items-center justify-center" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
            temporibus at explicabo perferendis repellat magni rem magnam dolor
            pariatur quasi nobis consequatur sapiente ab quod non quo sit,
            consequuntur unde.
          </p>
          <BsApple className="flex h-auto w-24 p-2 rounded-full bg-black text-white items-center justify-center" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
            temporibus at explicabo perferendis repellat magni rem magnam dolor
            pariatur quasi nobis consequatur sapiente ab quod non quo sit,
            consequuntur unde.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Works;
