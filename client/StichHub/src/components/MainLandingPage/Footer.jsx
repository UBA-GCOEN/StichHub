import React from "react";
import { Dropdown } from "rsuite";
import logo from "../../assets/logo/Long - Logo Transparent (White).png"

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
        <button className="block bg-[#33BBCF] w-auto mr-10 col-span-1 h-10  pr-[10%] ml-[-14%] mb-[30%] lg:mt-[-5%] mt-[5%] w-[130px] px-6 py-1.5 rounded-xl text-white hover:bg-[#5CE1E6]">
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
                className="w-[9rem] lg:w-[15rem] rounded-lg bg-white text-black p-2 m-2"
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
              <a href="/" class="flex items-center">
          <img src={logo} alt="logo with text that says StichHub stitch your way" className="w-48 cursor-pointer" loading="lazy"/>
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
                    <a href="#" class="hover:underline">
                      Overview
                    </a>
                  </li>
                  <li class="mb-2">
                    <a href="#" class="hover:underline">
                      Features
                    </a>
                  </li>
                  <li class="mb-2">
                    <a href="#" class="hover:underline">
                      How it works?
                    </a>
                  </li>
                  <li class="mb-2">
                    <a href="#" class="hover:underline">
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
                    <a href="#" class="hover:underline">
                      About Us
                    </a>
                  </li>
                  <li class="mb-2">
                    <a href="#" class="hover:underline">
                      Contact Us
                    </a>
                  </li>
                  <li class="mb-2">
                    <a href="#" class="hover:underline">
                      Team
                    </a>
                  </li>
                  <li class="mb-2">
                    <a href="#" class="hover:underline">
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
                    <a href="#"  class="hover:underline">
                      Newsletter
                    </a>
                  </li>
                  <li class="mb-2">
                    <a href="#"  class="hover:underline">
                      Events
                    </a>
                  </li>
                  <li class="mb-2">
                    <a href="#"  class="hover:underline">
                      Tutorials
                    </a>
                  </li>
                  <li class="mb-2">
                    <a href="#"  class="hover:underline">
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
                      href="https://www.instagram.com/sidd.0203/" target='_blank'
                      class="hover:underline "
                    >
                      Instagram
                    </a>
                  </li>
                  <li class="mb-2">
                    <a
                      href="mailto:uba.gcoen@gmail.com" target='_blank'
                      class="hover:underline"
                    >
                      Email
                    </a>
                  </li>
                  <li class="mb-2">
                    <a
                      href="https://youtu.be/EV6m7hZ4RKU" target='_blank'
                      class="hover:underline "
                    >
                      Youtube
                    </a>
                  </li>
                  <li class="mb-2">
                    <a
                      href="https://github.com/UBA-GCOEN/StichHub" target='_blank'
                      class="hover:underline"
                    >
                      Github
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
                href="https://youtu.be/EV6m7hZ4RKU"
                target="_blank"
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
                href=" mailto:uba.gcoen@gmail.com"
                target="_blank"
                class="text-[#c13584] hover:text-[#c13584]-500 dark:hover:text-white pt-1"
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
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
