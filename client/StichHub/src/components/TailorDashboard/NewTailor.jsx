import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
const percentage = 20;

const NewTailor = () => {
  return (
    <div className="bg-primary h-screen">
      {percentage < 50 && (
        <div className="p-5 lg:m-0 lg:ml-[20%] pt-10">
          <div className="bg-white bg-opacity-10 lg:mr-20 rounded-xl">
            <div className="flex ">
              <div className="text-white m-5">
                <label className="font-bold text-xl">Profile Status</label>
                <p className="font-semibold text-sm lg:text-md mt-2">
                  Looks like you have not completely registered or verified as a
                  tailor on our website, Complete your proflie by clicking{" "}
                  <a
                    href="#"
                    className="text-green-500 underline hover:text-green-700 font-semibold"
                  >
                    HERE
                  </a>
                </p>
              </div>
              <div className="w-[70%] lg:w-[8%] mt-5  mr-5  ">
                <CircularProgressbar
                  strokeWidth="12"
                  className=""
                  value={percentage}
                  text={`${percentage}%`}
                />
                ;
              </div>
            </div>
          </div>
          <div className="bg-white bg-opacity-10 mt-3 pt-1 pb-1 lg:mr-20 rounded-xl h-fit">
            <div className="">
              <div className="text-white m-5 grid grid-cols-6 ">
                <div className="col-start-1 col-end-6">
                  <label className=" font-bold text-xl">
                    Recently Registered Tailors
                  </label>
                </div>
                <div className="col-start-6 col-end-7">
                  <button className="col-span-1 justify-self-right">
                    <svg
                      width="31"
                      height="29"
                      viewBox="0 0 31 29"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="hover:bg-primary rounded-md"
                    >
                      <path
                        d="M7.75039 4.34961C6.92822 4.34961 6.13972 4.65514 5.55836 5.199C4.977 5.74285 4.65039 6.48048 4.65039 7.24961V10.1496C4.65039 10.9187 4.977 11.6564 5.55836 12.2002C6.13972 12.7441 6.92822 13.0496 7.75039 13.0496H10.8504C11.6726 13.0496 12.4611 12.7441 13.0424 12.2002C13.6238 11.6564 13.9504 10.9187 13.9504 10.1496V7.24961C13.9504 6.48048 13.6238 5.74285 13.0424 5.199C12.4611 4.65514 11.6726 4.34961 10.8504 4.34961H7.75039ZM7.75039 15.9496C6.92822 15.9496 6.13972 16.2551 5.55836 16.799C4.977 17.3429 4.65039 18.0805 4.65039 18.8496V21.7496C4.65039 22.5187 4.977 23.2564 5.55836 23.8002C6.13972 24.3441 6.92822 24.6496 7.75039 24.6496H10.8504C11.6726 24.6496 12.4611 24.3441 13.0424 23.8002C13.6238 23.2564 13.9504 22.5187 13.9504 21.7496V18.8496C13.9504 18.0805 13.6238 17.3429 13.0424 16.799C12.4611 16.2551 11.6726 15.9496 10.8504 15.9496H7.75039ZM17.0504 7.24961C17.0504 6.48048 17.377 5.74285 17.9584 5.199C18.5397 4.65514 19.3282 4.34961 20.1504 4.34961H23.2504C24.0726 4.34961 24.8611 4.65514 25.4424 5.199C26.0238 5.74285 26.3504 6.48048 26.3504 7.24961V10.1496C26.3504 10.9187 26.0238 11.6564 25.4424 12.2002C24.8611 12.7441 24.0726 13.0496 23.2504 13.0496H20.1504C19.3282 13.0496 18.5397 12.7441 17.9584 12.2002C17.377 11.6564 17.0504 10.9187 17.0504 10.1496V7.24961ZM21.7004 15.9496C22.1115 15.9496 22.5057 16.1024 22.7964 16.3743C23.0871 16.6462 23.2504 17.015 23.2504 17.3996V18.8496H24.8004C25.2115 18.8496 25.6057 19.0024 25.8964 19.2743C26.1871 19.5462 26.3504 19.915 26.3504 20.2996C26.3504 20.6842 26.1871 21.053 25.8964 21.3249C25.6057 21.5968 25.2115 21.7496 24.8004 21.7496H23.2504V23.1996C23.2504 23.5842 23.0871 23.953 22.7964 24.2249C22.5057 24.4968 22.1115 24.6496 21.7004 24.6496C21.2893 24.6496 20.8951 24.4968 20.6044 24.2249C20.3137 23.953 20.1504 23.5842 20.1504 23.1996V21.7496H18.6004C18.1893 21.7496 17.7951 21.5968 17.5044 21.3249C17.2137 21.053 17.0504 20.6842 17.0504 20.2996C17.0504 19.915 17.2137 19.5462 17.5044 19.2743C17.7951 19.0024 18.1893 18.8496 18.6004 18.8496H20.1504V17.3996C20.1504 17.015 20.3137 16.6462 20.6044 16.3743C20.8951 16.1024 21.2893 15.9496 21.7004 15.9496Z"
                        fill="white"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:flex">
            <div className="bg-white bg-opacity-10 mt-3 lg:mr-3 rounded-xl h-fit lg:w-3/5">
              <div className="flex ">
                <div className="text-white m-5  ">
                  <label className="font-bold text-xl">
                    Frequently Asked Questions (FAQ's)
                  </label>
                  <Accordion className="rounded-md mt-2">
                    <AccordionItem className="rounded-xl border mb-2">
                      <AccordionItemHeading className="rounded-md bg-transparent">
                        <AccordionItemButton className="rounded-md bg-transparent m-3">
                          What harsh truths do you prefer to ignore?
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p>
                          Exercitation in fugiat est ut ad ea cupidatat ut in
                          cupidatat occaecat ut occaecat consequat est minim
                          minim esse tempor laborum consequat esse adipisicing
                          eu reprehenderit enim.
                        </p>
                      </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem className="rounded-xl border mb-2">
                      <AccordionItemHeading>
                        <AccordionItemButton className="rounded-md bg-transparent m-3">
                          Is free will real or just an illusion?
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p>
                          In ad velit in ex nostrud dolore cupidatat consectetur
                          ea in ut nostrud velit in irure cillum tempor laboris
                          sed adipisicing eu esse duis nulla non.
                        </p>
                      </AccordionItemPanel>
                    </AccordionItem>
                  </Accordion>
                </div>
              </div>
            </div>
            <div className="mt-3 lg:w-[32%] h-fit p-5 rounded-xl  bg-white bg-opacity-10">
              <center>
                <label className="font-bold text-xl justify-center pt-20  text-white">
                  Support!
                </label>
              </center>
              <div className="grid grid-cols-4 text-white mt-3 mb-5">
                <div className="col-start-1 col-end-2 ml-7">
                  <span className="">
                    <svg
                      width="31"
                      height="30"
                      viewBox="0 0 31 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.10547 8.826L15.5008 14.823L27.8962 8.826C27.8503 8.06167 27.5042 7.34323 26.9287 6.81784C26.3532 6.29245 25.592 5.99986 24.8008 6H6.20082C5.40967 5.99986 4.64841 6.29245 4.07294 6.81784C3.49748 7.34323 3.15136 8.06167 3.10547 8.826Z"
                        fill="white"
                      />
                      <path
                        d="M27.8996 12.1768L15.4996 18.1768L3.09961 12.1768V20.9998C3.09961 21.7954 3.42622 22.5585 4.00758 23.1211C4.58894 23.6837 5.37744 23.9998 6.19961 23.9998H24.7996C25.6218 23.9998 26.4103 23.6837 26.9916 23.1211C27.573 22.5585 27.8996 21.7954 27.8996 20.9998V12.1768Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                  <span className="">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="mt-2"
                    >
                      <path
                        d="M2 3C2 2.73478 2.10536 2.48043 2.29289 2.29289C2.48043 2.10536 2.73478 2 3 2H5.153C5.38971 2.00011 5.6187 2.08418 5.79924 2.23726C5.97979 2.39034 6.10018 2.6025 6.139 2.836L6.879 7.271C6.91436 7.48222 6.88097 7.69921 6.78376 7.89003C6.68655 8.08085 6.53065 8.23543 6.339 8.331L4.791 9.104C5.34611 10.4797 6.17283 11.7293 7.22178 12.7782C8.27072 13.8272 9.52035 14.6539 10.896 15.209L11.67 13.661C11.7655 13.4695 11.9199 13.3138 12.1106 13.2166C12.3012 13.1194 12.5179 13.0859 12.729 13.121L17.164 13.861C17.3975 13.8998 17.6097 14.0202 17.7627 14.2008C17.9158 14.3813 17.9999 14.6103 18 14.847V17C18 17.2652 17.8946 17.5196 17.7071 17.7071C17.5196 17.8946 17.2652 18 17 18H15C7.82 18 2 12.18 2 5V3Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                  <span>
                    <svg
                      width="25"
                      height="25"
                      viewBox="0 0 25 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="mt-2"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M2.5 6.25C2.5 5.58696 2.76339 4.95107 3.23223 4.48223C3.70107 4.01339 4.33696 3.75 5 3.75H15C15.663 3.75 16.2989 4.01339 16.7678 4.48223C17.2366 4.95107 17.5 5.58696 17.5 6.25V18.75C17.5 19.413 17.7634 20.0489 18.2322 20.5178C18.7011 20.9866 19.337 21.25 20 21.25H5C4.33696 21.25 3.70107 20.9866 3.23223 20.5178C2.76339 20.0489 2.5 19.413 2.5 18.75V6.25ZM6.25 7.5H13.75V12.5H6.25V7.5ZM13.75 15H6.25V17.5H13.75V15Z"
                        fill="white"
                      />
                      <path
                        d="M18.75 8.75H20C20.663 8.75 21.2989 9.01339 21.7678 9.48223C22.2366 9.95107 22.5 10.587 22.5 11.25V18.125C22.5 18.6223 22.3025 19.0992 21.9508 19.4508C21.5992 19.8025 21.1223 20 20.625 20C20.1277 20 19.6508 19.8025 19.2992 19.4508C18.9475 19.0992 18.75 18.6223 18.75 18.125V8.75Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                </div>
                <div className="col-start-2 col-end-5">
                  <div>stichhubsupport@co.ac.in</div>{" "}
                  <div className="mt-2">09898969666</div>{" "}
                  <div className="mt-2">stichhub@faqs.in</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NewTailor;
