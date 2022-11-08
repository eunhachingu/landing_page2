import React from "react";
import { RiNumber1 } from "react-icons/ri";

function About() {
  return (
    <div className="flex-col mx-auto justify-center p-32 w-3/4 max-h-screen">
      <section className="">
        <p className="uppercase text-slate-400 mb-5">Who We Are</p>
        <h1 className="text-5xl max-w-screen-lg font-bold mb-10">
          We are a group of design driven individuals passionate about creating
          beautiful UI designs.
        </h1>
        <p className="text-lg max-w-screen-lg">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat
          ducimus recusandae, enim reprehenderit mollitia voluptatum
          perspiciatis omnis ipsam delectus architecto? Temporibus, accusamus
          sint. Voluptates repellendus quam eos sequi quasi nisi.
        </p>
      </section>

      <section className="my-20">
        <div className="grid grid-cols-2 gap-20">
          <div className="flex items-center space-x-5 flex-wrap">
            <p className="bg-black text-white text-2xl w-10 h-10 flex justify-center items-center rounded-full">
              1
            </p>
            <h1 className="text-3xl font-bold flex-1">Define</h1>
            <p className="py-2 px-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus fugiat expedita alias dolor deserunt nam dolore repellat fugit excepturi. Fuga magnam maiores, ratione cumque impedit ut molestias ex quas debitis!
            </p>
            
          </div>
          <div className="flex items-center space-x-5 flex-wrap">
            <p className="bg-black text-white text-2xl w-10 h-10 flex justify-center items-center rounded-full">
              2
            </p>
            <h1 className="text-3xl font-bold flex-1">Design</h1>
            <p className="py-2 px-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus fugiat expedita alias dolor deserunt nam dolore repellat fugit excepturi. Fuga magnam maiores, ratione cumque impedit ut molestias ex quas debitis!
            </p>
            
          </div>
          <div className="flex items-center space-x-5 flex-wrap">
            <p className="bg-black text-white text-2xl w-10 h-10 flex justify-center items-center rounded-full">
              3
            </p>
            <h1 className="text-3xl font-bold flex-1">Build</h1>
            <p className="py-2 px-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus fugiat expedita alias dolor deserunt nam dolore repellat fugit excepturi. Fuga magnam maiores, ratione cumque impedit ut molestias ex quas debitis!
            </p>
            
          </div>
          <div className="flex items-center space-x-5 flex-wrap">
            <p className="bg-black text-white text-2xl w-10 h-10 flex justify-center items-center rounded-full">
              4
            </p>
            <h1 className="text-3xl font-bold flex-1">Launch</h1>
            <p className="py-2 px-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus fugiat expedita alias dolor deserunt nam dolore repellat fugit excepturi. Fuga magnam maiores, ratione cumque impedit ut molestias ex quas debitis!
            </p>
            
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
