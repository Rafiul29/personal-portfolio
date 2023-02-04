import React from "react";
import SectionTitle from "./SectionTitle";

const Contact = () => {
  const sendEmail=(e)=>{
      e.preventDefault()

      //rest
      
      // console.log(e.target.querySelector(".fullname").value)
      // console.log(e.target.querySelector(".email").value)
      // console.log(e.target.querySelector(".message").value)
  }
  return (
    <div className="contact container mx-auto mt-40" id="contact">
      <SectionTitle title={"contact"} />

      <form onSubmit={sendEmail} className="mt-40 grid grid-cols-2 gap-20">
        <div className="from-control overflow-hidden">
          <input
            type="text"
            placeholder="Write your name"
            name="fullName"
            required
            className=" fullname bg-transparent border py-16 px-28 rounded-full border-white/20 outline-none focus:border-cyan-400 duration-300 w-full"
          />
        </div>
        <div className="from-control overflow-hidden">
          <input
            type="email"
            placeholder="Write your email"
            name="email"
            required
            className="email bg-transparent border py-16 px-28 rounded-full border-white/20 outline-none focus:border-cyan-400 duration-300 w-full"
          />
        </div>
        <div className="from-control overflow-hidden">
          <textarea
            placeholder="Write your message"
            name="message"
            required
            rows="1"
          cols="30"
            className="message bg-transparent border py-16 px-28 rounded-full border-white/20 outline-none focus:border-cyan-400 duration-300 w-full resize-none"
          />
        </div>

        <div className="from-control overflow-hidden">
          <input
            type="submit"
            value="Send message"
            className="uppercase cursor-pointer  bg-transparent border py-16 px-28 rounded-full border-white/20 outline-none
            hover:bg-cyan-400/20  hover:border-cyan-400/20 focus:border-cyan-400 duration-300 w-full tracking-widest"
          />
        </div>
      </form>
    </div>
  );
};

export default Contact;
