import React, { useState } from "react";
import { BsList, BsXSquare, BsFacebook, BsTwitter, BsInstagram, BsDiscord, BsGoogle,} from "react-icons/bs";

function Navbar() {
  const [list, setList] = useState(true);

  function handleClick() {
    setList((prevList) => !prevList);
  }

  return (
    <nav className="nav flex justify-between items-center px-32 py-5">
      <img src="./img/logo.svg" className="bg-black" />
      <div className="">
        <section className={list ? "flex items-center space-x-5 cursor-pointer ease-in-out duration-1000" : "hidden"} onClick={handleClick}>
          <h4 className="text-2xl">Menu</h4>
          <BsList className="text-4xl" />
        </section>

        <section className={!list ? "fixed right-0 top-0 p-10 h-full bg-slate-700 duration-500" : "hidden"}>
          <div className="flex border-b border-gray-600 items-center pb-10 space-x-10 cursor-pointer" onClick={handleClick}>
            <h4 className="uppercase">Transcend Studio</h4>
            <div className="">
                < BsXSquare />

            </div>
          </div>
          <ul className="">
            <li className="py-2 pr-32 border-b border-gray-600"><a href="#"><span>01. </span>Home</a></li>
            <li className="py-2 pr-32 border-b border-gray-600"><a href="#"><span>02. </span>About</a></li>
            <li className="py-2 pr-32 border-b border-gray-600"><a href="#"><span>03. </span>Services</a></li>
            <li className="py-2 pr-32 border-b border-gray-600"><a href="#"><span>04. </span>Works</a></li>
            <li className="py-2 pr-32 border-b border-gray-600"><a href="#"><span>05. </span>Contact</a></li>
          </ul>

          
          <p className="my-10 max-w-fit">Perspiciatis hic praesentium nesciunt. Et neque a dolorum voluptatem porro iusto sequi veritatis libero enim. Iusto id suscipit veritatis neque reprehenderit.</p>

          <div className="flex space-x-5 cursor-pointer">
            < BsFacebook />
            < BsTwitter />
            < BsInstagram />
            < BsDiscord />
            < BsGoogle />
          </div>

          
        </section>
      </div>
    </nav>
  );
}

export default Navbar;
