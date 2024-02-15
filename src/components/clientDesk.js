import React, { useEffect, useState } from "react";
import { IoChatbox } from "react-icons/io5";
import { RiInboxArchiveFill } from "react-icons/ri";
import { IoIosContacts } from "react-icons/io";
import {
  IoIosCall,
  IoIosSearch,
  IoIosLink,
  IoIosAddCircle,
  IoMdSend,
} from "react-icons/io";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { DiGoogleAnalytics } from "react-icons/di";
import { AiOutlineLogout } from "react-icons/ai";
import { SlOptions } from "react-icons/sl";
import { CgProfile } from "react-icons/cg";
import { useNavigate } from "react-router-dom";
import { MdContacts } from "react-icons/md";
import { CiInboxIn } from "react-icons/ci";
import { TbDeviceAnalytics } from "react-icons/tb";
import { CiLogout } from "react-icons/ci";
export const ClientDesk = (props) => {
  const username=props.username;
  const photo=props.photo;
  console.log(username);
  
  const [selected, setSelected] = useState(0);
  const people = [
    {
      name: "Yuvraj",
      email: "yuviverma@gmailcom",
      phone: "+91 54XXXXXXXX",
      location: "India",
      chat: "Send a meme you think they'd find funny.",
      reply:
        "You came to the right Person Boi ",
    },
    {
      name: "Kriti",
      email: "kritisharma@gmailcom",
      phone: "+91 82XXXXXXXX",
      location: "Canada",
      chat: "I just saw the funniest video I think you'd love.",
      reply: "Sure,Can you share the order Details ?",
    },
    {
      name: "Tanya",
      email: "singhtanya@gmailcom",
      phone: "+91 87XXXXXXXX",
      location: "India",
      chat: "Hey! What’s the name of that band you were talking about last week?",
      reply: "“What’s the best bit of your day so far?”",
    },
    {
      name: "Shubhi",
      email: "subhi.amazoni@gmailcom",
      phone: "+91 74XXXXXXXX",
      location: "California",
      chat: " “I don’t know what to have for dinner, any suggestions?",
      reply: "Any Netflix suggestions",
    },
  ];

  useEffect(() => {
    //Runs on the first render
    //And any time any dependency value changes
  }, [selected]);
  const [flag,setflag]=useState(true);
  const navigate = useNavigate();
  const logout = () => {
    navigate("/");
  };
  const dialog=()=>{
    setflag(false);
    alert("Signed in As " + username)
  }
  return (
    <div>
      {flag && dialog()}
      <div className="flex font-[Poppins]">
        <div className="w-[5%]  h-[100vh] overflow-hidden border-r-2 border-black/20 flex-col text-5xl ">
          <img src={photo} height={80} width={80} className="rounded-full"/>
          
          <IoChatboxEllipsesOutline className="mt-8 ml-auto mr-auto hover:text-blue-500 cursor-pointer" />

          <CiInboxIn 
            className="mt-5 ml-auto mr-auto hover:text-blue-500 cursor-pointer"
            onClick={() => {
              navigate("/inbox");
            }}
          />
          <MdContacts
            className="mt-5 ml-auto mr-auto hover:text-blue-500 cursor-pointer"
            onClick={() => {
              navigate("/contacts");
            }}
          />
          <TbDeviceAnalytics
            className="mt-5 ml-auto mr-auto text-6xl hover:text-blue-500 cursor-pointer"
            onClick={() => {
              navigate("/analytics");
            }}
          />
          <CiLogout
            className="mt-10 ml-auto mr-auto text-red-500 cursor-pointer"
            onClick={logout}
          />
        </div>
        <div className="w-[20%]  h-[100vh] overflow-hidden border-r-2 border-black/20 bg-gray-200">
          <h1 className=" text-2xl m-4">Chats</h1>
          <div>
            <ul>
              {people.map((person, index) => {
                return selected !== index ? (
                  <li
                    className="h-24 rounded-md m-1 bg-white text-black cursor-pointer"
                    onClick={() => setSelected(index)}
                  >
                    <div className="flex justify-between p-2 ">
                      <div className="text-lg">{person.name}</div>
                      <div>11:00pm</div>
                    </div>
                    <div className="p-2 ">
                      <h1>The products was amazing and i ....</h1>
                    </div>
                  </li>
                ) : (
                  <li className="h-24 rounded-md m-1 bg-blue-500 text-white">
                    <div className="flex justify-between p-2 ">
                      <div className="text-lg">{person.name}</div>
                      <div>02:00pm</div>
                    </div>
                    <div className="p-2 ">
                      <h1>The products was amazing and i ....</h1>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="w-[55%] h-[100vh] overflow-hidden  border-r-4 border-black/50 ">
          <div className="flex justify-between shadow-md  border-b-2 border-black/20 p-2">
            <div className="flex">
              <div className="text-4xl p-2">
                <CgProfile />
              </div>
              <div>
                <div className="text-xl">{people[selected].name}</div>
                <div className="text-gray-500">last seen recently</div>
              </div>
            </div>
            <div className="flex justify-around w-[20%] text-2xl p-2 items-center">
              <IoIosCall className="hover:text-blue-500 cursor-pointer" />
              <IoIosSearch className="hover:text-blue-500 cursor-pointer" />
              <IoIosLink className="hover:text-blue-500 cursor-pointer" />
              <SlOptions className="hover:text-blue-500 cursor-pointer" />
            </div>
          </div>
          <div className="h-[82%] ">
            <div className="mt-4">
              <div className="flex gap-2 p-2">
                <h1>{people[selected].name}</h1>
                <h1 className="text-gray-500">12:00pm</h1>
              </div>
              <div className="bg-white ">
                <h1 className="inline border-2  border-black rounded-lg ml-2 p-2">
                  {people[selected].chat}
                </h1>
              </div>
            </div>
            <div className="mt-4 text-right mr-4">
              <div className="flex gap-2 p-2 w-full text-right justify-end">
                <h1 className="text-gray-500 inline ">12:28pm</h1>
                <h1 className="inline">You</h1>
              </div>
              <div className="text-white">
                <h1 className="inline border-2  border-black bg-blue-500 rounded-lg ml-2 p-2">
                  {people[selected].reply}
                </h1>
              </div>
            </div>
          </div>
          <div className="flex  mb-2 h-12 justify-around items-center">
            <IoIosAddCircle className="text-3xl " />
            <textarea className="h-full w-[80%] border-2 rounded-lg mb-2"></textarea>
            <IoMdSend className="text-3xl" />
          </div>
        </div>
        <div className="w-[20%] bg-blue-600 h-[100vh] overflow-hidden text-white">
          <h1 className="font-[Poppins] text-2xl m-4">Details</h1>
          <div className="items-center justify-center">
            <div className="bg-white text-black text-9xl w-[60%] rounded-xl h-[30vh] ml-auto mr-auto items-center flex justify-center mt-10">
              <CgProfile />
            </div>
            <div className="flex justify-center mt-10 text-sm">
              <div className="w-[30%]">
                <ul>
                  <li>Name</li>
                  <li>Email</li>
                  <li>PhoneNo.</li>
                  <li>Location</li>
                </ul>
              </div>
              <div className="flex justify-end ">
                <ul>
                  <li>{people[selected].name}</li>
                  <li>{people[selected].email}</li>
                  <li>{people[selected].phone}</li>
                  <li>{people[selected].location}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};