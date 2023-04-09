import React from "react";
import { Dropdown } from "rsuite";

const Footer = () => {
  return (
    <div>
      <div className=" grid grid-col-1 lg:grid-col-3 mx-[20%] bg-gradient-to-r from-neutral-700 to-neutral-800 my-[5%] rounded-xl">
        <h4 className="text-white col-span-2  text-2xl font-bold  mx-[5%] mt-[5%]">
          Let's Try Out Services Now!
        </h4>
        <h6 className="text-white text-xs mb-5 ml-[7%] mt-3 mr-[15%] ">
          Everything you need to accept card payments and Grow your business
          anywhere on the planet.
        </h6>
        <button className="block bg-[#33BBCF] col-span-1 h-10  pr-[10%] ml-[-14%] mb-[30%] lg:mt-[-5%] mt-[5%] w-[130px] px-6 py-1.5 rounded-xl text-white hover:bg-[#5CE1E6]">
          Get Started
        </button>
      </div>

      <footer class="bg-[#0B0A0C] self-center">
        <div class="mx-auto w-full container p-4 sm:p-6 ">
          <div className=" flex grid lg:grid-col-2 mb-10">
            <div className="col-start-1 col-end-2 w-1/2 ml-14 lg:ml-0">
              {" "}
              <h4 className="text-white   text-xl font-bold  mx-[2%] mt-[5%]">
                Sign up to our newsletter
              </h4>
              <h6 className="text-white text-xs mb-5 ml-[2%] mt-3 mr-5 ">
                Stay up to date with the latest news, announcements, and
                articles.
              </h6>
            </div>
            <div className="col-start-2 col-end-3 ">
              <input
                className="rounded-lg bg-white text-black p-2 m-2"
                type="text"
                placeholder="Enter email"
              />
              <button className="rounded-lg bg-black text-white text-semibold p-2 px-5">
                Subscribe
              </button>
            </div>
          </div>
          <div class="md:flex md:justify-between">
            <div class="mb-6 md:mb-0">
              <a href="#" class="flex items-center">
                <span class="self-center text-2xl font-semibold whitespace-nowrap text-white">
                  Stichhub{" "}
                </span>
              </a>
              <span class="self-center text-sm whitespace-nowrap text-semibold text-white dark:text-white mr-7">
                We Bridges the gap between tailors and <br />
                customer to Stich customizing cloths{" "}
              </span>
            </div>
            <div class="hidden lg:grid lg:grid-cols-5 gap-8 sm:gap-6 sm:grid-cols-1">
              <div classname="col-span-1">
                <h2 class="mb-6  text-sm font-semibold text-white  dark:text-white">
                  Product{" "}
                </h2>
                <ul class="text-gray-500 dark:text-white font-medium">
                  <li class="mb-2">
                    <a href="https://flowbite.com/" class="hover:underline">
                      Overview
                    </a>
                  </li>
                  <li class="mb-2">
                    <a href="https://tailwindcss.com/" class="hover:underline">
                      Features
                    </a>
                  </li>
                  <li class="mb-2">
                    <a href="https://flowbite.com/" class="hover:underline">
                      How it works?
                    </a>
                  </li>
                  <li class="mb-2">
                    <a href="https://tailwindcss.com/" class="hover:underline">
                      Tutorials
                    </a>
                  </li>
                </ul>
              </div>
              <div classname="col-span-1">
                <h2 class="mb-6 text-sm font-semibold text-white  dark:text-white">
                  Company
                </h2>
                <ul class="text-gray-500 dark:text-white font-medium">
                  <li class="mb-2">
                    <a href="https://flowbite.com/" class="hover:underline">
                      About Us
                    </a>
                  </li>
                  <li class="mb-2">
                    <a href="https://tailwindcss.com/" class="hover:underline">
                      Contact Us
                    </a>
                  </li>
                  <li class="mb-2">
                    <a href="https://flowbite.com/" class="hover:underline">
                      Team
                    </a>
                  </li>
                  <li class="mb-2">
                    <a href="https://tailwindcss.com/" class="hover:underline">
                      News
                    </a>
                  </li>
                </ul>
              </div>
              <div classname="col-span-1">
                <h2 class="mb-6 text-sm font-semibold text-white  dark:text-white">
                  Resources
                </h2>
                <ul class="text-gray-500 dark:text-white font-medium">
                  <li class="mb-2">
                    <a href="https://flowbite.com/" class="hover:underline">
                      Newsletter
                    </a>
                  </li>
                  <li class="mb-2">
                    <a href="https://tailwindcss.com/" class="hover:underline">
                      Events
                    </a>
                  </li>
                  <li class="mb-2">
                    <a href="https://flowbite.com/" class="hover:underline">
                      Tutorials
                    </a>
                  </li>
                  <li class="mb-2">
                    <a href="https://tailwindcss.com/" class="hover:underline">
                      Support
                    </a>
                  </li>
                </ul>
              </div>
              <div classname="col-span-1">
                <h2 class="mb-6 text-sm font-semibold text-white  dark:text-white">
                  Social
                </h2>
                <ul class="text-gray-500 dark:text-gray-400 font-medium">
                  <li class="mb-2">
                    <a
                      href="https://github.com/themesberg/flowbite"
                      class="hover:underline "
                    >
                      Instagram
                    </a>
                  </li>
                  <li class="mb-2">
                    <a
                      href="https://discord.gg/4eeurUVvTy"
                      class="hover:underline"
                    >
                      Email
                    </a>
                  </li>
                  <li class="mb-2">
                    <a
                      href="https://github.com/themesberg/flowbite"
                      class="hover:underline "
                    >
                      Youtube
                    </a>
                  </li>
                  <li class="mb-2">
                    <a
                      href="https://discord.gg/4eeurUVvTy"
                      class="hover:underline"
                    >
                      Whatsapp
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 class="mb-6 text-sm font-semibold text-white dark:text-white">
                  Legal
                </h2>
                <ul class="text-gray-500 dark:text-gray-400 font-medium">
                  <li class="mb-2">
                    <a href="#" class="hover:underline">
                      Terms
                    </a>
                  </li>
                  <li class="mb-2">
                    <a href="#" class="hover:underline">
                      Privacy
                    </a>
                  </li>
                  <li class="mb-2">
                    <a href="#" class="hover:underline">
                      Cookies
                    </a>
                  </li>
                  <li class="mb-2">
                    <a href="#" class="hover:underline">
                      Licences
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex text-white justify-center items-center  h-24 lg:hidden">
            <Dropdown title="Product" className="m-2">
              <Dropdown.Item>Overview</Dropdown.Item>
              <Dropdown.Item>Features</Dropdown.Item>
              <Dropdown.Item>How it works</Dropdown.Item>
              <Dropdown.Item>Tutorials</Dropdown.Item>
            </Dropdown>
            <Dropdown title="Company" className="m-2">
              <Dropdown.Item>About Us</Dropdown.Item>
              <Dropdown.Item>Contact Us</Dropdown.Item>
              <Dropdown.Item>Team</Dropdown.Item>
              <Dropdown.Item>News</Dropdown.Item>
            </Dropdown>
            <Dropdown title="Resources" className="m-2">
              <Dropdown.Item>Newsletter</Dropdown.Item>
              <Dropdown.Item>Events</Dropdown.Item>
              <Dropdown.Item>Tutorials</Dropdown.Item>
              <Dropdown.Item>Support</Dropdown.Item>
            </Dropdown>
            <Dropdown title="Social" className="m-2">
              <Dropdown.Item>Instagram</Dropdown.Item>
              <Dropdown.Item>Youtube</Dropdown.Item>
              <Dropdown.Item>Email</Dropdown.Item>
              <Dropdown.Item>Whatsapp</Dropdown.Item>
            </Dropdown>
            <Dropdown title="Legal" className="m-2">
              <Dropdown.Item>Terms</Dropdown.Item>
              <Dropdown.Item>Policy</Dropdown.Item>
              <Dropdown.Item>Cookies</Dropdown.Item>
              <Dropdown.Item>Licences</Dropdown.Item>
            </Dropdown>
          </div>
          <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div class="sm:flex sm:items-center sm:justify-between">
            <span class="text-sm text-white  sm:text-center dark:text-gray-400">
              © 2023{" "}
              <a href="#" class="hover:underline">
                Stichhub™
              </a>
              . All Rights Reserved.
            </span>
            <div class="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
              <a
                href="#"
                class="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-7 w-7 text-[#ff0000]"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                </svg>{" "}
                <span class="sr-only">Youtube</span>
              </a>
              <a
                href="#"
                class="text-[#c13584] hover:text-[#c13584]-500 dark:hover:text-white"
              >
                <svg
                  class="w-7 h-7"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span class="sr-only">Instagram page</span>
              </a>
              <a
                href="#"
                class="text-[#c13584] hover:text-[#c13584]-500 dark:hover:text-white"
              >
                <svg
                  height="19"
                  viewBox="0 0 256 194"
                  width="25"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                >
                  <linearGradient
                    id="a"
                    x1=".00389%"
                    x2="100.032232%"
                    y1="49.997619%"
                    y2="49.997619%"
                  >
                    <stop offset="0" stop-opacity=".1" />
                    <stop offset="1" stop-opacity=".2" />
                  </linearGradient>
                  <path
                    d="m238.833923 193.595007h-222.6797035c-8.63451906 0-15.90569305-7.04395-15.90569305-15.905693v-160.8747242c0-8.63451907 7.0439498-15.90569305 15.90569305-15.90569305h222.6797035c8.634519 0 15.905693 7.04394979 15.905693 15.90569305v160.8747242c0 8.861743-7.04395 15.905693-15.905693 15.905693z"
                    fill="#e3e3e3"
                  />
                  <path
                    d="m32.0599126 193.595007 95.2069344-76.574551.681673-4.090035-98.1608492-70.6667222-.2272242 147.9229452z"
                    fill="#231f20"
                    opacity=".1"
                  />
                  <path
                    d="m16.1542195 193.595007c-8.86174325 0-15.90569305-7.04395-15.90569305-15.905693v-161.1019484c0-8.86174324 7.0439498-10.45231255 15.90569305-10.45231255 8.8617433 0 15.9056931 1.81779349 15.9056931 10.45231255v177.0076414z"
                    fill="#d54b3d"
                  />
                  <path
                    d="m16.1542195 8.40729492c11.3612094 0 13.6334513 3.40836278 13.6334513 8.18007068v174.7353994h-13.6334513c-7.49839813 0-13.63345118-6.135053-13.63345118-13.633451v-161.1019484c0-4.9989321 2.27224187-8.18007068 13.63345118-8.18007068zm0-2.27224187c-8.86174325 0-15.90569305 1.81779349-15.90569305 10.45231255v161.1019484c0 8.861743 7.0439498 15.905693 15.90569305 15.905693h15.9056931v-177.0076414c0-8.86174324-7.0439498-10.45231255-15.9056931-10.45231255z"
                    fill="#d72b27"
                  />
                  <path
                    d="m238.833923 193.595007h-15.905693v-177.4620897c0-8.86174332 7.043949-9.99786425 15.905693-9.99786425 8.861743 0 15.905693 1.13612093 15.905693 9.99786425v161.7836207c0 8.634519-7.04395 15.678469-15.905693 15.678469z"
                    fill="#d54b3d"
                  />
                  <path
                    d="m238.833923 8.40729492c10.225088 0 13.633451 2.04501768 13.633451 7.72562238v161.7836207c0 7.498399-6.135053 13.633452-13.633451 13.633452h-13.633451v-175.4170727c0-5.9078289 3.408362-7.72562238 13.633451-7.72562238zm0-2.27224187c-8.861744 0-15.905693 1.13612093-15.905693 9.99786425v177.6893137h15.905693c8.861743 0 15.905693-7.043949 15.905693-15.905693v-161.7836207c0-8.86174332-7.04395-9.99786425-15.905693-9.99786425z"
                    fill="#d72b27"
                  />
                  <path
                    d="m170.666667 193.595007-169.08686794-170.4002526 8.89381584 3.6176997 117.7021291 84.7546219 126.563876-92.8066129-.000004 159.1560749c0 8.634519-7.04395 15.678469-15.905693 15.678469z"
                    fill="url(#a)"
                  />
                  <path
                    d="m127.266847 117.020456-120.20159494-87.2540875c-7.04394979-5.2261563-9.08896748-15.2240205-3.86281118-22.26797033 5.2261563-7.0439498 15.45124472-8.6345191 22.72241872-3.4083628l101.5692114 73.84786073 102.250884-74.75675748c7.04395-5.2261563 17.041814-3.63558699 22.267971 3.63558699 5.226156 7.04394979 3.635587 17.04181399-3.635587 22.26797029z"
                    fill="#d54b3d"
                  />
                  <path
                    d="m238.833923 2.27224187c4.317259 0 8.407295 2.04501768 11.133985 5.68060467 4.317259 6.13505306 2.953914 14.54234796-2.953915 19.08683166l-119.747146 87.2540878-118.83824982-86.345191c-6.13505304-4.5444837-7.72562235-13.1790028-3.4083628-19.08683171 2.49946606-3.4083628 6.81672562-5.68060467 11.36120932-5.68060467 2.9539145 0 5.9078289.90889675 8.1800708 2.72669024l101.3419875 73.62063654 1.363345.9088968 1.363345-.9088968 102.02366-74.75675747c2.499466-1.59056931 5.226156-2.49946606 8.180071-2.49946606zm0-2.27224187c-3.181139 0-6.589502.90889675-9.316192 2.95391443l-102.250884 74.75675747-101.5692116-73.84786072c-2.7266903-2.04501768-6.1350531-2.95391443-9.5434159-2.95391443-4.9989321 0-9.99786418 2.27224187-13.1790028 6.58950142-4.99893212 7.04394983-2.95391443 17.04181403 4.09003536 22.26797033l120.20159494 87.4813115 120.883267-88.1629841c7.04395-5.2261563 8.63452-14.9967963 3.635587-22.26797029-3.181138-4.54448374-7.952846-6.81672561-12.951778-6.81672561z"
                    fill="#d72b27"
                  />
                </svg>{" "}
                <span class="sr-only">Gmail</span>
              </a>

              <a
                href="#"
                class="text-blue-500 hover:text-blue-900 dark:hover:text-white"
              >
                <svg
                  class="w-6 h-6 text-blue-300 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>{" "}
                <span class="sr-only">Twitter page</span>
              </a>
              <a
                href="#"
                class="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              >
                <svg
                  class="w-6 h-6 text-green-400 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path>
                </svg>
                <span class="sr-only">Whatsapp</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
