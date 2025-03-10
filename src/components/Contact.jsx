import React from "react";

const Contact = () => {
  return (
    <div
      className="relative md:pt-16 pt-8 pb-6 bg-[#000300]"
      id="contact"
    >
      <div className="w-full">
        <div className="w-full px-4 mx-auto max-w-[1400px]">
          <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
            <div>
              <div className="flex flex-col space-y-4 mt-8">
                <div className="flex md:justify-start justify-center">
                  <h3 className="uppercase font-bold text-green-500 tracking-wide">
                    get in touch
                  </h3>
                </div>
                <div className="flex md:justify-start justify-center md:text-start text-center">
                  <h3 className="lg:text-5xl text-4xl font-bold tracking-normal  leading-normal text-white text-headingColor">
                    Motivated to make a better future, connect to me through
                    this form.
                  </h3>
                </div>
                <div className="flex md:justify-start justify-center md:text-start text-center">
                  <h3 className="leading-relaxed tracking-wide font-medium lg:text-[20px] text-[16px] text-white text-sideHeading">
                    Taking a step for a better and prosperous future is what
                    makes a human unique from others!!! Let's grow together in
                    this technological world faster.
                  </h3>
                </div>
              </div>
            </div>

            <div>
              <form action="" method="POST" className="mt-8">
                <div className="w-full flex justify-center items-center">
                  <div className="mb-5 md:w-10/12 w-full">
                    <label
                      htmlFor="email"
                      className="mb-3 block text-base font-medium text-headingColor text-white"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Your Full Name"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none  focus:shadow-md"
                    />
                  </div>
                </div>
                <div className="w-full flex justify-center items-center">
                  <div className="mb-5 md:w-10/12 w-full">
                    <label
                      htmlFor="email"
                      className="mb-3 block text-base font-medium text-headingColor text-white"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="example@domain.com"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none  focus:shadow-md"
                    />
                  </div>
                </div>

                <div className="w-full flex justify-center items-center">
                  <div className="mb-5 md:w-10/12 w-full">
                    <label
                      htmlFor="message"
                      className="mb-3 block text-base font-medium text-headingColor text-white"
                    >
                      Message
                    </label>
                    <textarea
                      rows="4"
                      name="message"
                      id="message"
                      placeholder="Type your message"
                      className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none  focus:shadow-md"
                    ></textarea>
                  </div>
                </div>

                <div className="w-full flex justify-center items-center ">
                  <div className=" md:w-8/12 w-full flex md:justify-start justify-center items-center">
                    <a
                      href="#home"
                      className="hover:shadow-form rounded-3xl bg-green-500 transition duration-1000 ease-in-out hover:bg-[#10C0A2] py-3 px-12 text-base font-semibold dark:text-black text-white outline-none"
                    >
                      Submit
                    </a>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
