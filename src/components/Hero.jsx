import React from "react";
import { BsFillArrowDownCircleFill } from "react-icons/bs";

function Hero() {
  return (
    <div className="my-20 text-white max-h-screen">
      <section className="flex">
        <article className="mx-auto">
          <div className="space-y-5">
            <h1 className="text-5xl max-w-lg font-bold">
              Hello folks, we are 8k Choi Studio.
            </h1>
            <p className="text-3xl max-w-lg">
              We produce breathtaking digital experiences to enhance your
              company stand out.
            </p>
          </div>
        </article>

        <article className="flex-col space-y-1">
          <div className="hero--card">
            <h3>About</h3>
            <p>who we are</p>
          </div>
          <div className="hero--card">
            <h3>Services</h3>
            <p>what we do</p>
          </div>
          <div className="hero--card">
            <h3>Contact</h3>
            <p>get in touch</p>
          </div>
        </article>
      </section>

      <section className="flex justify-between mx-20 my-36">
        <div className="flex space-x-5">
          <p className="font-bold">Follow Us </p>
          <p className="">Facebok</p>
          <p className="">Twitter</p>
          <p className="">Linked In</p>
        </div>

        <div className="flex items-center space-x-5">
          <p className="uppercase">Scroll Down</p>
          <BsFillArrowDownCircleFill className="text-5xl cursor-pointer" />
        </div>
      </section>
    </div>
  );
}

export default Hero;
