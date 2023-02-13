import React from "react";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const ClientSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    appendDots: (dots) => {
      return <ul style={{ margin: "0px" }}>{dots}</ul>;
    },
  };

  return (
    <>
      {/* <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center ">
        <div className="col-md-6">hi</div>
        <div className="flex-1">
          <Slider {...settings}>
            {Sdata.map((value, index) => {
              return (
                <div
                  className="flex border border-2 border-white/50  flex-col items-center rounded-lg p-6  max-h-[200px] max-w-[200px]"
                  key={index}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-sm">2d ago</span>
                    <span className="text-emerald-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                        />
                      </svg>
                    </span>
                  </div>
                  <div className="mt-3 w-fit mx-auto">
                    <img
                      src="https://api.lorem.space/image/face?w=120&h=120&hash=bart89fe"
                      claclassNamess="rounded-full w-28 "
                      alt="profile"
                      srcset=""
                    />
                  </div>

                  <div className="mt-4 ">
                    <h2 className="text-white font-bold text-2xl tracking-wide">
                      {value.title}
                    </h2>
                  </div>
                  <p className="text-emerald-400 font-semibold mt-2.5">
                    {value.desc}
                  </p>

                  <div className="h-1 w-full bg-black mt-6 rounded-full">
                    <div className="h-1 rounded-full w-2/5 bg-yellow-500 "></div>
                  </div>
                  <div className="mt-3 text-white text-sm">
                    <span className="text-gray-400 font-semibold">
                      Storage:
                    </span>
                    <span>40%</span>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div> */}
      <div class="w-full">
        <div class="flex ">
          <div class="hidden xl:block sm:flex-2 w-64 bg-gray-200">
            <div class="user-profile text-center">
              <div class="w-32 h-32 rounded-full m-auto mt-16 border-2 border-white bg-white shadow-lg">
                <img
                  src="../resources/profile-image.png"
                  alt="user"
                  class="block"
                />
              </div>
              <div class="text-gray-800 mt-8">
                Omer Mohamed Ali
                <span class="inline-block align-text-bottom">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    class="w-4 h-4"
                  >
                    <path d="M19 9l-7 7-7-7"></path>
                  </svg>
                </span>
              </div>
            </div>

            <div class="menu mt-8">
              <a
                class="block py-4 px-12 border-l-4 text-gray-600 hover:bg-gray-300 hover:text-black"
                href=" "
              >
                <span class="inline-block align-text-bottom mr-2">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    class="w-4 h-4"
                  >
                    <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                  </svg>
                </span>
                Home
              </a>
              <a
                class="block py-4 px-12 border-l-4 border-gray-800 bg-gray-300 text-black hover:bg-gray-300 hover:text-black"
                href=" "
              >
                <span class="inline-block align-text-bottom mr-2">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    class="w-4 h-4"
                  >
                    <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                  </svg>
                </span>
                Chat
              </a>
              <a
                class="block py-4 px-12 border-l-4 text-gray-600 hover:bg-gray-300 hover:text-black"
                href=" ;"
              >
                <span class="inline-block align-text-bottom mr-2">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    class="w-4 h-4"
                  >
                    <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                </span>
                Calendar
              </a>
              <a
                class="block py-4 px-12 border-l-4 text-gray-600 hover:bg-gray-300 hover:text-black"
                href=" "
              >
                <span class="inline-block align-text-bottom mr-2">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    class="w-4 h-4"
                  >
                    <path d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"></path>
                  </svg>
                </span>
                Files
              </a>
              <a
                class="block py-4 px-12 border-l-4 text-gray-600 hover:bg-gray-300 hover:text-black"
                href=" "
              >
                <span class="inline-block align-text-bottom mr-2">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    class="w-4 h-4"
                  >
                    <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  </svg>
                </span>
                Jobs
              </a>
              <a
                class="block py-4 px-12 border-l-4 text-gray-600 hover:bg-gray-300 hover:text-black"
                href=" "
              >
                <span class="inline-block align-text-bottom mr-2">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    class="w-4 h-4"
                  >
                    <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                    <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </span>
                Settings
              </a>
            </div>
          </div>
          <div class="flex-1 bg-gray-100 w-full h-full">
            <div class="main-body container m-auto w-11/12 h-full flex flex-col">
              <div class="py-4 flex-2 flex flex-row">
                <div class="flex-1">
                  <span class="xl:hidden inline-block text-gray-700 hover:text-gray-900 align-bottom">
                    <span class="block h-6 w-6 p-1 rounded-full hover:bg-gray-400">
                      <svg
                        class="w-4 h-4"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M4 6h16M4 12h16M4 18h16"></path>
                      </svg>
                    </span>
                  </span>
                  <span class="lg:hidden inline-block ml-8 text-gray-700 hover:text-gray-900 align-bottom">
                    <span class="block h-6 w-6 p-1 rounded-full hover:bg-gray-400">
                      <svg
                        class="h-4 w-4"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                      </svg>
                    </span>
                  </span>
                </div>
                <div class="flex-1 text-right">
                  <span class="inline-block text-gray-700">
                    Status:{" "}
                    <span class="inline-block align-text-bottom w-4 h-4 bg-green-400 rounded-full border-2 border-white"></span>{" "}
                    <b>Online</b>
                    <span class="inline-block align-text-bottom">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                        class="w-4 h-4"
                      >
                        <path d="M19 9l-7 7-7-7"></path>
                      </svg>
                    </span>
                  </span>

                  <span class="inline-block ml-8 text-gray-700 hover:text-gray-900 align-bottom">
                    <span class="block h-6 w-6 p-1 rounded-full hover:bg-gray-400">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                        class="w-4 h-4"
                      >
                        <path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
                      </svg>
                    </span>
                  </span>
                </div>
              </div>

              <div class="main flex-1 flex flex-col">
                <div class="hidden lg:block heading flex-2">
                  <h1 class="text-3xl text-gray-700 mb-4">Chat</h1>
                </div>

                <div class="flex-1 flex h-full">
                  <div class="sidebar hidden lg:flex w-1/3 flex-2 flex-col pr-6">
                    <div class="search flex-2 pb-6 px-2">
                      <input
                        type="text"
                        class="outline-none py-2 block w-full bg-transparent border-b-2 border-gray-200"
                        placeholder="Search"
                      />
                    </div>
                    <div class="flex-1 h-full overflow-auto px-2">
                      <div class="entry cursor-pointer transform hover:scale-105 duration-300 transition-transform bg-white mb-4 rounded p-4 flex shadow-md">
                        <div class="flex-2">
                          <div class="w-12 h-12 relative">
                            <img
                              class="w-12 h-12 rounded-full mx-auto"
                              src="../resources/profile-image.png"
                              alt="chat-user"
                            />
                            <span class="absolute w-4 h-4 bg-green-400 rounded-full right-0 bottom-0 border-2 border-white"></span>
                          </div>
                        </div>
                        <div class="flex-1 px-2">
                          <div class="truncate w-32">
                            <span class="text-gray-800">Ryann Remo</span>
                          </div>
                          <div>
                            <small class="text-gray-600">Yea, Sure!</small>
                          </div>
                        </div>
                        <div class="flex-2 text-right">
                          <div>
                            <small class="text-gray-500">15 April</small>
                          </div>
                          <div>
                            <small class="text-xs bg-red-500 text-white rounded-full h-6 w-6 leading-6 text-center inline-block">
                              23
                            </small>
                          </div>
                        </div>
                      </div>
                      <div class="entry cursor-pointer transform hover:scale-105 duration-300 transition-transform bg-white mb-4 rounded p-4 flex shadow-md">
                        <div class="flex-2">
                          <div class="w-12 h-12 relative">
                            <img
                              class="w-12 h-12 rounded-full mx-auto"
                              src="../resources/profile-image.png"
                              alt="chat-user"
                            />
                            <span class="absolute w-4 h-4 bg-gray-400 rounded-full right-0 bottom-0 border-2 border-white"></span>
                          </div>
                        </div>
                        <div class="flex-1 px-2">
                          <div class="truncate w-32">
                            <span class="text-gray-800">Karp Bonolo</span>
                          </div>
                          <div>
                            <small class="text-gray-600">Yea, Sure!</small>
                          </div>
                        </div>
                        <div class="flex-2 text-right">
                          <div>
                            <small class="text-gray-500">15 April</small>
                          </div>
                          <div>
                            <small class="text-xs bg-red-500 text-white rounded-full h-6 w-6 leading-6 text-center inline-block">
                              10
                            </small>
                          </div>
                        </div>
                      </div>
                      <div class="entry cursor-pointer transform hover:scale-105 duration-300 transition-transform bg-white mb-4 rounded p-4 flex shadow-md border-l-4 border-red-500">
                        <div class="flex-2">
                          <div class="w-12 h-12 relative">
                            <img
                              class="w-12 h-12 rounded-full mx-auto"
                              src="../resources/profile-image.png"
                              alt="chat-user"
                            />
                            <span class="absolute w-4 h-4 bg-gray-400 rounded-full right-0 bottom-0 border-2 border-white"></span>
                          </div>
                        </div>
                        <div class="flex-1 px-2">
                          <div class="truncate w-32">
                            <span class="text-gray-800">Mercedes Yemelyan</span>
                          </div>
                          <div>
                            <small class="text-gray-600">Yea, Sure!</small>
                          </div>
                        </div>
                        <div class="flex-2 text-right">
                          <div>
                            <small class="text-gray-500">15 April</small>
                          </div>
                        </div>
                      </div>
                      <div class="entry cursor-pointer transform hover:scale-105 duration-300 transition-transform bg-white mb-4 rounded p-4 flex shadow-md">
                        <div class="flex-2">
                          <div class="w-12 h-12 relative">
                            <img
                              class="w-12 h-12 rounded-full mx-auto"
                              src="../resources/profile-image.png"
                              alt="chat-user"
                            />
                            <span class="absolute w-4 h-4 bg-gray-400 rounded-full right-0 bottom-0 border-2 border-white"></span>
                          </div>
                        </div>
                        <div class="flex-1 px-2">
                          <div class="truncate w-32">
                            <span class="text-gray-800">Cadi Kajetán</span>
                          </div>
                          <div>
                            <small class="text-gray-600">Yea, Sure!</small>
                          </div>
                        </div>
                        <div class="flex-2 text-right">
                          <div>
                            <small class="text-gray-500">15 April</small>
                          </div>
                        </div>
                      </div>
                      <div class="entry cursor-pointer transform hover:scale-105 duration-300 transition-transform bg-white mb-4 rounded p-4 flex shadow-md">
                        <div class="flex-2">
                          <div class="w-12 h-12 relative">
                            <img
                              class="w-12 h-12 rounded-full mx-auto"
                              src="../resources/profile-image.png"
                              alt="chat-user"
                            />
                            <span class="absolute w-4 h-4 bg-gray-400 rounded-full right-0 bottom-0 border-2 border-white"></span>
                          </div>
                        </div>
                        <div class="flex-1 px-2">
                          <div class="truncate w-32">
                            <span class="text-gray-800">Rina Samuel</span>
                          </div>
                          <div>
                            <small class="text-gray-600">Yea, Sure!</small>
                          </div>
                        </div>
                        <div class="flex-2 text-right">
                          <div>
                            <small class="text-gray-500">15 April</small>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="chat-area flex-1 flex flex-col">
                    <div class="flex-3">
                      <h2 class="text-xl py-1 mb-8 border-b-2 border-gray-200">
                        Chatting with <b>Mercedes Yemelyan</b>
                      </h2>
                    </div>
                    <div class="messages flex-1 overflow-auto">
                      <div class="message mb-4 flex">
                        <div class="flex-2">
                          <div class="w-12 h-12 relative">
                            <img
                              class="w-12 h-12 rounded-full mx-auto"
                              src="../resources/profile-image.png"
                              alt="chat-user"
                            />
                            <span class="absolute w-4 h-4 bg-gray-400 rounded-full right-0 bottom-0 border-2 border-white"></span>
                          </div>
                        </div>
                        <div class="flex-1 px-2">
                          <div class="inline-block bg-gray-300 rounded-full p-2 px-6 text-gray-700">
                            <span>
                              Hey there. We would like to invite you over to our
                              office for a visit. How about it?
                            </span>
                          </div>
                          <div class="pl-4">
                            <small class="text-gray-500">15 April</small>
                          </div>
                        </div>
                      </div>
                      <div class="message mb-4 flex">
                        <div class="flex-2">
                          <div class="w-12 h-12 relative">
                            <img
                              class="w-12 h-12 rounded-full mx-auto"
                              src="../resources/profile-image.png"
                              alt="chat-user"
                            />
                            <span class="absolute w-4 h-4 bg-gray-400 rounded-full right-0 bottom-0 border-2 border-white"></span>
                          </div>
                        </div>
                        <div class="flex-1 px-2">
                          <div class="inline-block bg-gray-300 rounded-full p-2 px-6 text-gray-700">
                            <span>
                              All travel expenses are covered by us of course :D
                            </span>
                          </div>
                          <div class="pl-4">
                            <small class="text-gray-500">15 April</small>
                          </div>
                        </div>
                      </div>
                      <div class="message me mb-4 flex text-right">
                        <div class="flex-1 px-2">
                          <div class="inline-block bg-blue-600 rounded-full p-2 px-6 text-white">
                            <span>It's like a dream come true</span>
                          </div>
                          <div class="pr-4">
                            <small class="text-gray-500">15 April</small>
                          </div>
                        </div>
                      </div>
                      <div class="message me mb-4 flex text-right">
                        <div class="flex-1 px-2">
                          <div class="inline-block bg-blue-600 rounded-full p-2 px-6 text-white">
                            <span>I accept. Thank you very much.</span>
                          </div>
                          <div class="pr-4">
                            <small class="text-gray-500">15 April</small>
                          </div>
                        </div>
                      </div>
                      <div class="message mb-4 flex">
                        <div class="flex-2">
                          <div class="w-12 h-12 relative">
                            <img
                              class="w-12 h-12 rounded-full mx-auto"
                              src="../resources/profile-image.png"
                              alt="chat-user"
                            />
                            <span class="absolute w-4 h-4 bg-gray-400 rounded-full right-0 bottom-0 border-2 border-white"></span>
                          </div>
                        </div>
                        <div class="flex-1 px-2">
                          <div class="inline-block bg-gray-300 rounded-full p-2 px-6 text-gray-700">
                            <span>You are welome. We will stay in touch.</span>
                          </div>
                          <div class="pl-4">
                            <small class="text-gray-500">15 April</small>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="flex-2 pt-4 pb-10">
                      <div class="write bg-white shadow flex rounded-lg">
                        <div class="flex-3 flex content-center items-center text-center p-4 pr-0">
                          <span class="block text-center text-gray-400 hover:text-gray-800">
                            <svg
                              fill="none"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              class="h-6 w-6"
                            >
                              <path d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                          </span>
                        </div>
                        <div class="flex-1">
                          <textarea
                            name="message"
                            class="w-full block outline-none py-4 px-4 bg-transparent"
                            rows="1"
                            placeholder="Type a message..."
                            autofocus
                          ></textarea>
                        </div>
                        <div class="flex-2 w-32 p-2 flex content-center items-center">
                          <div class="flex-1 text-center">
                            <span class="text-gray-400 hover:text-gray-800">
                              <span class="inline-block align-text-bottom">
                                <svg
                                  fill="none"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                  class="w-6 h-6"
                                >
                                  <path d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"></path>
                                </svg>
                              </span>
                            </span>
                          </div>
                          <div class="flex-1">
                            <button class="bg-blue-400 w-10 h-10 rounded-full inline-block">
                              <span class="inline-block align-text-bottom">
                                <svg
                                  fill="none"
                                  stroke="currentColor"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  viewBox="0 0 24 24"
                                  class="w-4 h-4 text-white"
                                >
                                  <path d="M5 13l4 4L19 7"></path>
                                </svg>
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="flex-1 p:2 sm:p-6 justify-between flex flex-col h-screen">
        <div class="flex sm:items-center justify-between py-3 border-b-2 border-gray-200">
          <div class="relative flex items-center space-x-4">
            <div class="relative">
              <span class="absolute text-green-500 right-0 bottom-0">
                <svg width="20" height="20">
                  <circle cx="8" cy="8" r="8" fill="currentColor"></circle>
                </svg>
              </span>
              <img
                src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
                alt=""
                class="w-10 sm:w-16 h-10 sm:h-16 rounded-full"
              />
            </div>
            <div class="flex flex-col leading-tight">
              <div class="text-2xl mt-1 flex items-center">
                <span class="text-gray-700 mr-3">Anderson Vanhron</span>
              </div>
              <span class="text-lg text-gray-600">Junior Developer</span>
            </div>
          </div>
          <div class="flex items-center space-x-2">
            <button
              type="button"
              class="inline-flex items-center justify-center rounded-lg border h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                class="h-6 w-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </button>
            <button
              type="button"
              class="inline-flex items-center justify-center rounded-lg border h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                class="h-6 w-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                ></path>
              </svg>
            </button>
            <button
              type="button"
              class="inline-flex items-center justify-center rounded-lg border h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                class="h-6 w-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        <div
          id="messages"
          class="flex flex-col space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch"
        >
          <div class="chat-message">
            <div class="flex items-end">
              <div class="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
                <div>
                  <span class="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600">
                    Can be verified on any platform using docker
                  </span>
                </div>
              </div>
              <img
                src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
                alt="My profile"
                class="w-6 h-6 rounded-full order-1"
              />
            </div>
          </div>
          <div class="chat-message">
            <div class="flex items-end justify-end">
              <div class="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end">
                <div>
                  <span class="px-4 py-2 rounded-lg inline-block rounded-br-none bg-blue-600 text-white ">
                    Your error message says permission denied, npm global
                    installs must be given root privileges.
                  </span>
                </div>
              </div>
              <img
                src="https://images.unsplash.com/photo-1590031905470-a1a1feacbb0b?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
                alt="My profile"
                class="w-6 h-6 rounded-full order-2"
              />
            </div>
          </div>
          <div class="chat-message">
            <div class="flex items-end">
              <div class="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
                <div>
                  <span class="px-4 py-2 rounded-lg inline-block bg-gray-300 text-gray-600">
                    Command was run with root privileges. I'm sure about that.
                  </span>
                </div>
                <div>
                  <span class="px-4 py-2 rounded-lg inline-block bg-gray-300 text-gray-600">
                    I've update the description so it's more obviously now
                  </span>
                </div>
                <div>
                  <span class="px-4 py-2 rounded-lg inline-block bg-gray-300 text-gray-600">
                    FYI https://askubuntu.com/a/700266/510172
                  </span>
                </div>
                <div>
                  <span class="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600">
                    Check the line above (it ends with a # so, I'm running it as
                    root )<pre># npm install -g @vue/devtools</pre>
                  </span>
                </div>
              </div>
              <img
                src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
                alt="My profile"
                class="w-6 h-6 rounded-full order-1"
              />
            </div>
          </div>
          <div class="chat-message">
            <div class="flex items-end justify-end">
              <div class="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end">
                <div>
                  <span class="px-4 py-2 rounded-lg inline-block rounded-br-none bg-blue-600 text-white ">
                    Any updates on this issue? I'm getting the same error when
                    trying to install devtools. Thanks
                  </span>
                </div>
              </div>
              <img
                src="https://images.unsplash.com/photo-1590031905470-a1a1feacbb0b?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
                alt="My profile"
                class="w-6 h-6 rounded-full order-2"
              />
            </div>
          </div>
          <div class="chat-message">
            <div class="flex items-end">
              <div class="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
                <div>
                  <span class="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600">
                    Thanks for your message David. I thought I'm alone with this
                    issue. Please, ? the issue to support it :)
                  </span>
                </div>
              </div>
              <img
                src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
                alt="My profile"
                class="w-6 h-6 rounded-full order-1"
              />
            </div>
          </div>
          <div class="chat-message">
            <div class="flex items-end justify-end">
              <div class="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end">
                <div>
                  <span class="px-4 py-2 rounded-lg inline-block bg-blue-600 text-white ">
                    Are you using sudo?
                  </span>
                </div>
                <div>
                  <span class="px-4 py-2 rounded-lg inline-block rounded-br-none bg-blue-600 text-white ">
                    Run this command sudo chown /.npm-global/ then install the
                    package globally without using sudo
                  </span>
                </div>
              </div>
              <img
                src="https://images.unsplash.com/photo-1590031905470-a1a1feacbb0b?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
                alt="My profile"
                class="w-6 h-6 rounded-full order-2"
              />
            </div>
          </div>
          <div class="chat-message">
            <div class="flex items-end">
              <div class="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
                <div>
                  <span class="px-4 py-2 rounded-lg inline-block bg-gray-300 text-gray-600">
                    It seems like you are from Mac OS world. There is no /Users/
                    folder on linux ?
                  </span>
                </div>
                <div>
                  <span class="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600">
                    I have no issue with any other packages installed with root
                    permission globally.
                  </span>
                </div>
              </div>
              <img
                src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
                alt="My profile"
                class="w-6 h-6 rounded-full order-1"
              />
            </div>
          </div>
          <div class="chat-message">
            <div class="flex items-end justify-end">
              <div class="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end">
                <div>
                  <span class="px-4 py-2 rounded-lg inline-block rounded-br-none bg-blue-600 text-white ">
                    yes, I have a mac. I never had issues with root permission
                    as well, but this helped me to solve the problem
                  </span>
                </div>
              </div>
              <img
                src="https://images.unsplash.com/photo-1590031905470-a1a1feacbb0b?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
                alt="My profile"
                class="w-6 h-6 rounded-full order-2"
              />
            </div>
          </div>
          <div class="chat-message">
            <div class="flex items-end">
              <div class="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
                <div>
                  <span class="px-4 py-2 rounded-lg inline-block bg-gray-300 text-gray-600">
                    I get the same error on Arch Linux (also with sudo)
                  </span>
                </div>
                <div>
                  <span class="px-4 py-2 rounded-lg inline-block bg-gray-300 text-gray-600">
                    I also have this issue, Here is what I was doing until now:
                    #1076
                  </span>
                </div>
                <div>
                  <span class="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600">
                    even i am facing
                  </span>
                </div>
              </div>
              <img
                src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
                alt="My profile"
                class="w-6 h-6 rounded-full order-1"
              />
            </div>
          </div>
        </div>
        <div class="border-t-2 border-gray-200 px-4 pt-4 mb-2 sm:mb-0">
          <div class="relative flex">
            <span class="absolute inset-y-0 flex items-center">
              <button
                type="button"
                class="inline-flex items-center justify-center rounded-full h-12 w-12 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  class="h-6 w-6 text-gray-600"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                  ></path>
                </svg>
              </button>
            </span>
            <input
              type="text"
              placeholder="Write your message!"
              class="w-full focus:outline-none focus:placeholder-gray-400 text-gray-600 placeholder-gray-600 pl-12 bg-gray-200 rounded-md py-3"
            />
            <div class="absolute right-0 items-center inset-y-0 hidden sm:flex">
              <button
                type="button"
                class="inline-flex items-center justify-center rounded-full h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  class="h-6 w-6 text-gray-600"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                  ></path>
                </svg>
              </button>
              <button
                type="button"
                class="inline-flex items-center justify-center rounded-full h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  class="h-6 w-6 text-gray-600"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                  ></path>
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                  ></path>
                </svg>
              </button>
              <button
                type="button"
                class="inline-flex items-center justify-center rounded-full h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  class="h-6 w-6 text-gray-600"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
              </button>
              <button
                type="button"
                class="inline-flex items-center justify-center rounded-lg px-4 py-3 transition duration-500 ease-in-out text-white bg-blue-500 hover:bg-blue-400 focus:outline-none"
              >
                <span class="font-bold">Send</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  class="h-6 w-6 ml-2 transform rotate-90"
                >
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="w-80 h-96 flex flex-col border shadow-md bg-white">
        <div class="flex items-center justify-between border-b p-2">
          <div class="flex items-center">
            <img
              class="rounded-full w-10 h-10"
              src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            />
            <div class="pl-2">
              <div class="font-semibold">
                <a class="hover:underline" href=" ">
                  John Doe
                </a>
              </div>
              <div class="text-xs text-gray-600">Online</div>
            </div>
          </div>

          <div>
            <a class="inline-flex hover:bg-indigo-50 rounded-full p-2" href=" ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                />
              </svg>
            </a>

            <button
              class="inline-flex hover:bg-indigo-50 rounded-full p-2"
              type="button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>

        <div class="flex-1 px-4 py-4 overflow-y-auto">
          <div class="flex items-center mb-4">
            <div class="flex-none flex flex-col items-center space-y-1 mr-4">
              <img
                class="rounded-full w-10 h-10"
                src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              />
              <a href=" " class="block text-xs hover:underline">
                John Doe
              </a>
            </div>
            <div class="flex-1 bg-indigo-400 text-white p-2 rounded-lg mb-2 relative">
              <div>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </div>

              <div class="absolute left-0 top-1/2 transform -translate-x-1/2 rotate-45 w-2 h-2 bg-indigo-400"></div>
            </div>
          </div>

          <div class="flex items-center flex-row-reverse mb-4">
            <div class="flex-none flex flex-col items-center space-y-1 ml-4">
              <img
                class="rounded-full w-10 h-10"
                src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              />
              <a href=" " class="block text-xs hover:underline">
                Jesse
              </a>
            </div>
            <div class="flex-1 bg-indigo-100 text-gray-800 p-2 rounded-lg mb-2 relative">
              <div>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem
                ipsum dolor sit amet, consectetur adipisicing elit.
              </div>

              <div class="absolute right-0 top-1/2 transform translate-x-1/2 rotate-45 w-2 h-2 bg-indigo-100"></div>
            </div>
          </div>

          <div class="flex items-center mb-4">
            <div class="flex-none flex flex-col items-center space-y-1 mr-4">
              <img
                class="rounded-full w-10 h-10"
                src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              />
              <a href=" " class="block text-xs hover:underline">
                John Doe
              </a>
            </div>
            <div class="flex-1 bg-indigo-400 text-white p-2 rounded-lg mb-2 relative">
              <div>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </div>

              <div class="absolute left-0 top-1/2 transform -translate-x-1/2 rotate-45 w-2 h-2 bg-indigo-400"></div>
            </div>
          </div>
        </div>

        <div class="flex items-center border-t p-2">
          <div>
            <button
              class="inline-flex hover:bg-indigo-50 rounded-full p-2"
              type="button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
            </button>
          </div>

          <div class="w-full mx-2">
            <input
              class="w-full rounded-full border border-gray-200"
              type="text"
              value=""
              placeholder="Aa"
              autofocus
            />
          </div>

          <div>
            <button
              class="inline-flex hover:bg-indigo-50 rounded-full p-2"
              type="button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div class="container mx-auto">
        <div class="min-w-full border rounded lg:grid lg:grid-cols-3">
          <div class="border-r border-gray-300 lg:col-span-1">
            <div class="mx-3 my-3">
              <div class="relative text-gray-600">
                <span class="absolute inset-y-0 left-0 flex items-center pl-2">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    class="w-6 h-6 text-gray-300"
                  >
                    <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                  </svg>
                </span>
                <input
                  type="search"
                  class="block w-full py-2 pl-10 bg-gray-100 rounded outline-none"
                  name="search"
                  placeholder="Search"
                  required
                />
              </div>
            </div>

            <ul class="overflow-auto h-[32rem]">
              <h2 class="my-2 mb-2 ml-2 text-lg text-gray-600">Chats</h2>
              <li>
                <a class="flex items-center px-3 py-2 text-sm transition duration-150 ease-in-out border-b border-gray-300 cursor-pointer hover:bg-gray-100 focus:outline-none">
                  <img
                    class="object-cover w-10 h-10 rounded-full"
                    src="https://cdn.pixabay.com/photo/2018/09/12/12/14/man-3672010__340.jpg"
                    alt="username"
                  />
                  <div class="w-full pb-2">
                    <div class="flex justify-between">
                      <span class="block ml-2 font-semibold text-gray-600">
                        Jhon Don
                      </span>
                      <span class="block ml-2 text-sm text-gray-600">
                        25 minutes
                      </span>
                    </div>
                    <span class="block ml-2 text-sm text-gray-600">bye</span>
                  </div>
                </a>
                <a class="flex items-center px-3 py-2 text-sm transition duration-150 ease-in-out bg-gray-100 border-b border-gray-300 cursor-pointer focus:outline-none">
                  <img
                    class="object-cover w-10 h-10 rounded-full"
                    src="https://cdn.pixabay.com/photo/2016/06/15/15/25/loudspeaker-1459128__340.png"
                    alt="username"
                  />
                  <div class="w-full pb-2">
                    <div class="flex justify-between">
                      <span class="block ml-2 font-semibold text-gray-600">
                        Same
                      </span>
                      <span class="block ml-2 text-sm text-gray-600">
                        50 minutes
                      </span>
                    </div>
                    <span class="block ml-2 text-sm text-gray-600">
                      Good night
                    </span>
                  </div>
                </a>
                <a class="flex items-center px-3 py-2 text-sm transition duration-150 ease-in-out border-b border-gray-300 cursor-pointer hover:bg-gray-100 focus:outline-none">
                  <img
                    class="object-cover w-10 h-10 rounded-full"
                    src="https://cdn.pixabay.com/photo/2018/01/15/07/51/woman-3083383__340.jpg"
                    alt="username"
                  />
                  <div class="w-full pb-2">
                    <div class="flex justify-between">
                      <span class="block ml-2 font-semibold text-gray-600">
                        Emma
                      </span>
                      <span class="block ml-2 text-sm text-gray-600">
                        6 hour
                      </span>
                    </div>
                    <span class="block ml-2 text-sm text-gray-600">
                      Good Morning
                    </span>
                  </div>
                </a>
              </li>
            </ul>
          </div>
          <div class="hidden lg:col-span-2 lg:block">
            <div class="w-full">
              <div class="relative flex items-center p-3 border-b border-gray-300">
                <img
                  class="object-cover w-10 h-10 rounded-full"
                  src="https://cdn.pixabay.com/photo/2018/01/15/07/51/woman-3083383__340.jpg"
                  alt="username"
                />
                <span class="block ml-2 font-bold text-gray-600">Emma</span>
                <span class="absolute w-3 h-3 bg-green-600 rounded-full left-10 top-3"></span>
              </div>
              <div class="relative w-full p-6 overflow-y-auto h-[40rem]">
                <ul class="space-y-2">
                  <li class="flex justify-start">
                    <div class="relative max-w-xl px-4 py-2 text-gray-700 rounded shadow">
                      <span class="block">Hi</span>
                    </div>
                  </li>
                  <li class="flex justify-end">
                    <div class="relative max-w-xl px-4 py-2 text-gray-700 bg-gray-100 rounded shadow">
                      <span class="block">Hiiii</span>
                    </div>
                  </li>
                  <li class="flex justify-end">
                    <div class="relative max-w-xl px-4 py-2 text-gray-700 bg-gray-100 rounded shadow">
                      <span class="block">how are you?</span>
                    </div>
                  </li>
                  <li class="flex justify-start">
                    <div class="relative max-w-xl px-4 py-2 text-gray-700 rounded shadow">
                      <span class="block">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit.
                      </span>
                    </div>
                  </li>
                </ul>
              </div>

              <div class="flex items-center justify-between w-full p-3 border-t border-gray-300">
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-6 h-6 text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </button>
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-5 h-5 text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                    />
                  </svg>
                </button>

                <input
                  type="text"
                  placeholder="Message"
                  class="block w-full py-2 pl-4 mx-3 bg-gray-100 rounded-full outline-none focus:text-gray-700"
                  name="message"
                  required
                />
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-5 h-5 text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                    />
                  </svg>
                </button>
                <button type="submit">
                  <svg
                    class="w-5 h-5 text-gray-500 origin-center transform rotate-90"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClientSlider;
