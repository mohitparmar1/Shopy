import React from "react";
import Cart from "../assets/cart_icon.png";
import phone from "../assets/phone_icon.png"
import chat from "../assets/chat_icon.png"
import mail from "../assets/email_icon.png"

const Contact = () => {
    return (
        <>
<div style={{ textAlign: 'center' }}>
    <h1 className="text-3xl mt-20 sm:text-4xl md:text-5xl mb-14 font-Poppins">
        Contact Us
    </h1>
</div>
<div className="flex flex-col xl:flex-row   justify-center gap-16 px-20">

    <div className="block p-6 w-sm max-w-sm bg-gradient-to-b from-purple-200 to-blue-300 rounded-lg border border-gray-200 shadow-md p-20">
        <img src={phone} alt="cart" className="w-10 h-10 cursor-pointer" />

        <h1 className="mt-5 text-2xl font-bold text-gray-900 font-Poppins">
            By Phone
        </h1>
        <h6 className="mt-3 font-Poppins font-semibold">
            All India Toll-free:
        </h6>
        <p className="font-normal font-Poppins">
            01-XXXXXXX
        </p>
        <h6 className="mt-3 font-Poppins font-semibold">
            International:
        </h6>
        <p className="font-normal font-Poppins">
            01-XXXXXXX
        </p>
    </div>

    <div className="block p-6 max-w-sm bg-gradient-to-b from-purple-200 to-blue-300 rounded-lg border border-gray-200 shadow-md p-20">
        <img src={mail} alt="cart" className="w-10 h-10 cursor-pointer" />

        <h1 className="mt-5 text-2xl font-bold text-gray-900 font-Poppins">
            By mail
        </h1>
        <h6 className="mt-3 font-Poppins">
            shopy@gmail.com
        </h6>
       
        <h6 className="mt-3 font-Poppins font-semibold ">
            Customer care:
        </h6>
        <p className="font-normal font-Poppins">
            shopy.customercare@gmail.com
        </p>
    </div>

    <div className="block p-6 max-w-sm bg-gradient-to-b from-purple-200 to-blue-300 rounded-lg border border-gray-200 shadow-md p-20">
        <img src={chat} alt="cart" className="w-10 h-10 cursor-pointer" />

        <h1 className="mt-5 text-2xl font-bold text-gray-900 font-Poppins">
            Live chat
        </h1>
        <p className="font-normal font-Poppins mt-3  ">
            chat with the member of our team.
        </p>
        <button className=" font-Poppins mt-3 cursor-pointer  border text-white bg-black border-gray-400 rounded-3xl px-4 py-1 active:bg-slate-200 absolute ">
          <a href="#">Start chat</a>
        </button>
       
    </div>

</div>

        </>
    );
};

export default Contact;

