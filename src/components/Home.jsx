import React from "react";
import Sidebar from "./Sidebar";
import { FaArrowRight } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa6";
import { CiBellOn } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { FaTelegram } from "react-icons/fa6";

const Home = () => {
  const PlayedGames = [
    {
      img: "/assets/Ghost_of_Tsushima.webp",
      title: "Ghost of Tsushima",
      duration: "38 hrs",
    },
    {
      img: "/assets/Horizon_Zero_Dawn.webp",
      title: "Horizon Zero Dawn",
      duration: "43 hrs",
    },
    // {
    //   img: "/assets/Ratchet_and_Clank.webp",
    //   title: "Ratchet and Clank",
    //   duration: "65 hrs",
    // },
  ];
  const OnlineList = [
    {
      img: "/assets/Ghost_of_Tsushima.webp",
      name: "Dogfather",
      work: "Playing Rocket League",
    },
    {
      img: "/assets/Horizon_Zero_Dawn.webp",
      name: "Mr Jam",
      work: "Playing Nor Automata",
    },
    {
      img: "/assets/Ratchet_and_Clank.webp",
      name: "GhostToost",
      work: "Watching Netflix",
    },
  ];
  const PartiesList = [
    {
      img: "/assets/Ratchet_and_Clank.webp",
      name: "Rocket League",
      work: "Playing Rocket League",
    },
    {
      img: "/assets/Horizon_Zero_Dawn.webp",
      name: "Fortnite",
      work: "Playing Nor Automata",
    },
    {
      img: "/assets/Ghost_of_Tsushima.webp",
      name: "Destiny 2",
      work: "Watching Netflix",
    },
  ];

  const LibraryLists = [
    {
      img: "/assets/Ghost_of_Tsushima.webp",
      title: "Cyberpunk",
      playst: "PS4 & PS5",
      launch_date: "12 Dec",
      year: "2020",
    },
    {
      img: "/assets/Horizon_Zero_Dawn.webp",
      title: "Demon's Souls",
      playst: "PS5",
      launch_date: "14 Nov",
      year: "2020",
    },
    {
      img: "/assets/Ratchet_and_Clank.webp",
      title: "Overwatch",
      playst: "PS4",
      launch_date: "20 Oct",
      year: "2020",
    },
  ];
  return (
    <>
      <div className="h-screen grid grid-cols-12 gap-8">
        <div className="md:flex hidden  col-span-1 ring-1 ring-gray-700 rounded-xl rounded-bl-none rounded-tl-none m-4 mt-0 ml-0">
          <Sidebar />
        </div>
        <div className="flex flex-col col-span-8 ml-4 md:ml-0 rounded-xl shadow-lg ">
          <div className="flex ring-1 w-max md:w-auto  ring-gray-700 justify-between  m-4 mt-0 rounded-xl gap-2  bg-gray-400  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10">
            <div className="flex flex-col justify-evenly gap-4 p-4">
              <span>
                <span className="bg-red-500 p-1 rounded-xl">NEW</span>
              </span>
              <span>
                <h2 className="text-xl font-semibold">
                  Marvel's Spider-Man:
                  <br />
                  Myles Morales
                </h2>
              </span>
              <span className="flex justify-between items-center p-2 bg-gray-900 rounded-lg">
                <span>£69.99</span>
                <button className="bg-blue-500 shadow-sm shadow-blue-500 p-1 rounded-lg">
                  Purchase
                </button>
              </span>
            </div>
            <div className="flex justify-center items-center">
              <img
                src="/assets/spider_morales.png"
                alt="spider_img"
                height={200}
                width={200}
                className=" flex scale-125 items-baseline"
              />
            </div>
          </div>
          <div className="m-4 w-max md:w-auto">
            <div className="flex justify-between mb-4">
              <div>Most Played Games</div>
              <div className="flex justify-between gap-4">
                <div>Last</div>
                <div>Recently</div>
                <div>Now</div>
              </div>
            </div>
            <div className="flex justify-between gap-4 overflow-x-auto">
              {PlayedGames.map((items, idx) => {
                return (
                  <div className="flex flex-col gap-2" key={idx}>
                    <div>
                      <img
                        src={items.img}
                        alt="spider_img"
                        height={100}
                        width={200}
                        className="flex object-fill rounded-2xl"
                      />
                    </div>
                    <div>
                      <div className="font-bold">{items.title}</div>
                      <div className="text-xs font-semibold">
                        {items.duration}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 m-4">
            <div className="col-span-12 w-full md:w-auto md:col-span-4 ring-1 ring-gray-700  bg-gray-400 rounded-xl  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10">
              <div className="flex justify-between items-center p-4">
                <div>Accessories</div>
                <div>
                  <FaArrowRight />
                </div>
              </div>
              <div className="flex justify-center items-center">
                <img
                  src="/assets/headphone.webp"
                  alt="Headphone_img"
                  className="w-max"
                />
              </div>
            </div>
            <div className="col-span-12 w-full md:w-auto md:col-span-8 ring-1 ring-gray-700  bg-gray-400 rounded-xl  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10">
              <div className="flex justify-between items-center p-4">
                <div>Library</div>
                <div>
                  <FaArrowRight />
                </div>
              </div>
              <div className="m-4 gap-4">
                {LibraryLists.map((item, idx) => (
                  <div
                    className="grid grid-cols-3 justify-items-center pb-8"
                    key={idx}
                  >
                    <div className="flex justify-self-start space-x-4">
                      <img
                        src={item.img}
                        alt="jdjsh"
                        className="rounded-full h-12 w-12" // Adjust height and width as needed
                      />
                      <div>
                        <p className="font-semibold">{item.title}</p>
                        <p className="text-gray-500 text-sm">{item.playst}</p>
                      </div>
                    </div>

                    <div>
                      <p>{item.launch_date}</p>
                      <p>{item.year}</p>
                    </div>
                    <div className="flex items-center">
                      <button className="ring-1 ring-blue-600 text-blue-600 font-semibold rounded-lg px-3 md:px-6">Download</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-3 ring-1 hidden md:block ring-gray-700 rounded-xl m-4 mt-0 space-y-4 bg-gray-400  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 ">
          <div className="flex justify-between items-center p-4 text-gray-500 text-lg font-bold cursor-pointer">
            <p>Social</p>
            <FaAngleDown />
          </div>
          <div className="flex items-center justify-around rounded-2xl m-4 p-4 shadow-md shadow-white bg-white  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-15 ">
            <div className="">
              <p className="font-bold">Rocket League Update</p>
              <p className="text-sm font-semibold text-gray-500">
                12 min remaining
              </p>
            </div>
            <div className="flex items-center justify-center">
              <span className="ring rounded-full p-4">35%</span>
            </div>
          </div>
          <div className="text-gray-500 text-sm p-4 pb-0 font-bold space-y-4">
            <div>
              <p>ONLINE • 3</p>
            </div>
            <div className="flex flex-col gap-4">
              {OnlineList.map((item, idx) => {
                return (
                  <div className="flex gap-4" key={idx}>
                    <img
                      src={item.img}
                      alt="idjsk"
                      height={40}
                      width={40}
                      className="rounded-full"
                    />
                    <div>
                      <h4 className="text-white">{item.name}</h4>
                      <p className="text-xs">{item.work}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="text-gray-500 text-sm p-4 font-bold space-y-4">
            <div>
              <p>PARTIES • 3</p>
            </div>
            <div className="flex flex-col gap-4">
              {PartiesList.map((item, idx) => {
                return (
                  <div className="flex gap-4" key={idx}>
                    <img
                      src={item.img}
                      alt="idjsk"
                      height={40}
                      width={40}
                      className="rounded-full"
                    />
                    <div>
                      <h4 className="text-white">{item.name}</h4>
                      <p className=" text-xs">{item.work}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className=" rounded-xl ">
            <div className="flex flex-col p-4 bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-15 ">
              <div>
                <p className="text-xs font-bold text-gray-400">Party Chat</p>
              </div>
              <div className="flex items-center justify-between">
                <p>Scott Pilgrim + 7 others</p>
                <div className="flex gap-4 text-2xl">
                  <button>
                    <CiBellOn />
                  </button>
                  <button>
                    <IoCallOutline />
                  </button>
                </div>
              </div>
            </div>

            <div className="p-4  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-15 ">
              <div className="flex items-center justify-between">
                <input
                  placeholder="Type a message..."
                  className="bg-transparent focus:outline-none"
                />
                <button>
                  <FaTelegram className="text-blue-500 text-2xl" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
