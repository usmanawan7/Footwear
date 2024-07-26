import React from "react";
import Wrapper from "@/components/Wrapper";
import Link from "next/link";

const Contact = () => {
  return (
    <div className="min-h-[650px] flex items-center">
      <Wrapper>
        <div class="mt-6">
          <div class="grid sm:grid-cols-2 items-start gap-14 p-8 mx-auto max-w-4xl bg-white shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-md font-[sans-serif]">
            <div>
              <h1 class="text-gray-800 text-3xl font-extrabold">Let's <span className="text-coral-red">Talk</span></h1>
              <p class="text-sm text-gray-500 mt-4">
                Have some big idea or brand to develop and need help? Then reach
                out we'd love to hear about your project and provide help.
              </p>

              <div class="mt-12">
                <h2 class="text-gray-800 text-base font-bold">Email</h2>
                <ul class="mt-4">
                  <li class="flex items-center">
                    <div class="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20px"
                        height="20px"
                        fill="#007bff"
                        viewBox="0 0 479.058 479.058"
                      >
                        <path
                          d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 0 1 5.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z"
                          data-original="#000000"
                        />
                      </svg>
                    </div>
                    <a
                      href="javascript:void(0)"
                      class="text-[#007bff] text-sm ml-4"
                    >
                      <small class="block text-coral-red">Mail</small>
                      <strong className="text-coral-red">info@example.com</strong>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <form class="ml-auo space-y-4">
              <input
                type="text"
                placeholder="Name"
                class="w-full text-gray-800 rounded-md py-2.5 px-4 border text-sm outline-coral-red"
              />
              <input
                type="email"
                placeholder="Email"
                class="w-full text-gray-800 rounded-md py-2.5 px-4 border text-sm outline-coral-red"
              />
              <input
                type="text"
                placeholder="Subject"
                class="w-full text-gray-800 rounded-md py-2.5 px-4 border text-sm outline-coral-red"
              />
              <textarea
                placeholder="Message"
                rows="6"
                class="w-full text-gray-800 rounded-md px-4 border text-sm pt-2.5 outline-coral-red"
              ></textarea>
              <button
                type="button"
                class=" text-white bg-coral-red hover:bg-red-500 rounded-md text-sm px-4 py-3 w-full !mt-6"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Contact;
