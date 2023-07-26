import React, { useRef } from "react";
import SectionTitle from "./SectionTitle";
import {useInputFieldReveal} from "../Hooks/gsap"
import emailjs from "@emailjs/browser"
import { toast } from 'react-toastify';


const Contact = () => {

const formRef=useRef(null)

const nameRef=useRef(null)
const emailRef=useRef(null)
const messageRef=useRef(null)
const btnRef=useRef(null)

const contactFieldRef=[nameRef,emailRef,messageRef,btnRef]

useInputFieldReveal(contactFieldRef,1.5)

  const sendEmail=(e)=>{
      e.preventDefault()

      //emailjs integration
    emailjs.sendForm(process.env.REACT_APP_SERVICE_ID,
      process.env.REACT_APP_TEMPLATE_ID,
      formRef.current,
      process.env.REACT_APP_PUBLIC_ID
      ).then(()=>{

        toast.success('🦄 Message Send Success', {
          position: "bottom-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          });
      },()=>{
        toast.error('🦄 Message Not Send Success', {
          position: "bottom-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          });
      })

      //reset
      e.target.querySelector(".fullname").value=""
      e.target.querySelector(".email").value=""
      e.target.querySelector(".message").value=""
  }

  return (
    <div className="contact container mx-auto mt-40" id="contact">
      <SectionTitle title={"contact"} />

      <form onSubmit={sendEmail}   className="mt-40 grid grid-cols-2 gap-20"
      ref={formRef}
      >
        <div className="from-control overflow-hidden" ref={nameRef}>
          <input
            type="text"
            placeholder="Write your name"
            name="fullName"
            required
            className=" fullname bg-transparent border py-16 px-28 rounded-full border-white/20 outline-none focus:border-cyan-400 duration-300 w-full"
          />
        </div>
        <div className="from-control overflow-hidden" ref={emailRef}>
          <input
            type="email"
            placeholder="Write your email"
            name="email"
            required
            className="email bg-transparent border py-16 px-28 rounded-full border-white/20 outline-none focus:border-cyan-400 duration-300 w-full"
          />
        </div>
        <div className="from-control overflow-hidden" ref={messageRef}>
          <textarea
            placeholder="Write your message"
            name="message"
            required
            rows="1"
          cols="30"
            className="message bg-transparent border py-16 px-28 rounded-full border-white/20 outline-none focus:border-cyan-400 duration-300 w-full resize-none"
          />
        </div>

        <div className="from-control overflow-hidden" ref={btnRef}>
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
