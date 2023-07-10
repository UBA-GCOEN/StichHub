import React, { useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import Navbar from "../Home/Navbar";
import Footer from "../MainLandingPage/Footer";

//progressbar function code
const Progressbar = ({ progressPercentage }) => {
  return (
    <div className="bg-[#130F26] ">
      <div className=" h-2 w-full bg-gray-300  ">
        <div
          style={{ width: `${progressPercentage}%` }}
          className={` h-full   ${
            progressPercentage <= 40
              ? "bg-red-600"
              : progressPercentage > 40 && progressPercentage < 100
              ? "bg-orange-600 "
              : "bg-green-500"
          }`}
        ></div>
      </div>
    </div>
  );
};

const YourOrders = () => {
  const [view, setView] = useState(false);

  return (
    <div>
      {!view ? (
        <div className="bg-gray-50">
          <Navbar />
          <div className="max-w-2xl mx-auto pt-16 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="px-4 space-y-2 sm:px-0 sm:flex sm:items-baseline sm:justify-between sm:space-y-0">
              <div className="flex sm:items-baseline sm:space-x-4">
                <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
                  Your Orders
                </h1>
                <a
                  href="#"
                  className="hidden text-sm font-medium text-indigo-600 hover:text-indigo-500 sm:block"
                >
                  View invoice<span aria-hidden="true"> &rarr;</span>
                </a>
              </div>
              <p className="text-sm text-gray-600">
                Order placed{" "}
                <time
                  datetime="2021-03-22"
                  className="font-medium text-gray-900"
                ></time>
              </p>
              <a
                href="#"
                className="text-sm font-medium text-indigo-600 hover:text-indigo-500 sm:hidden"
              >
                View invoice<span aria-hidden="true"> &rarr;</span>
              </a>
            </div>

            <div className="mt-6">
              <h2 className="sr-only">Products purchased</h2>

              <div className="space-y-8">
                <div className="bg-white border-t border-b border-gray-200 shadow-sm sm:border sm:rounded-lg">
                  <div className="py-6 px-4 sm:px-6 lg:grid lg:grid-cols-12 lg:gap-x-8 lg:p-8">
                    <div className="sm:flex lg:col-span-7">
                      <div className="flex-shrink-0 w-full aspect-w-1 aspect-h-1 rounded-lg overflow-hidden sm:aspect-none sm:w-40 sm:h-40">
                        <img loading="lazy"
                          src="https://tailwindui.com/img/ecommerce-images/confirmation-page-04-product-02.jpg"
                          alt="Off-white t-shirt with circular dot illustration on the front of mountain ridges that fade."
                          className="object-center object-cover"
                        />
                      </div>

                      <div className="mt-6 sm:mt-0 sm:ml-6">
                        <h3 className="text-base font-medium text-gray-900">
                          <a href="#">Amazing Tshirt</a>
                        </h3>
                        <p className="mt-2 text-sm font-medium text-gray-900">
                          ₹35.00
                        </p>
                        <p className="mt-3 text-sm text-gray-500">
                          This durable and portable insulated tumbler will keep
                          your beverage at the perfect temperature during your
                          next adventure.
                        </p>
                      </div>
                    </div>

                    <div className="mt-6 lg:mt-0 lg:col-span-5">
                      <dl className="grid grid-cols-2 gap-x-6 text-sm">
                        <div>
                          <dt className="font-medium text-gray-900">
                            Delivery address
                          </dt>
                          <dd className="mt-3 text-gray-500">
                            <span className="block">GCOEN, IIT Khapari</span>
                            <span className="block">768, Mihan</span>
                            <span className="block">Nagpur, MH India</span>
                          </dd>
                        </div>
                        <div>
                          <dt className="font-medium text-gray-900">
                            Shipping updates
                          </dt>
                          <dd className="mt-3 text-gray-500 space-y-3">
                            <p>f•••@example.com</p>
                            <p>1•••••••••40</p>
                            <button
                              type="button"
                              className="font-medium text-indigo-600 hover:text-indigo-500"
                            >
                              Edit
                            </button>
                          </dd>
                          <button
                            className="text-center text-white rounded-md hover:bg-blue-500 m-5 px-5 py-2 bg-blue-600"
                            onClick={() => setView(!view)}
                          >
                            Details
                          </button>
                        </div>
                      </dl>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 py-6 px-4 sm:px-6 lg:p-8">
                    <h4 className="sr-only">Status</h4>
                    <p className="text-sm font-medium text-gray-900">
                      Preparing to ship on{" "}
                      <time datetime="2023-03-24">March 24, 2023</time>
                    </p>
                    <div
                      className="mt-6"
                      aria-hidden="true"
                    >
                      <div className="bg-gray-200 rounded-full overflow-hidden">
                        {/* <div className="h-2 bg-indigo-600 rounded-full" style={"width: calc((1 * 2 + 1) / 8 * 100%)"}></div> */}
                        <Progressbar progressPercentage={50} />
                      </div>
                      <div className="hidden sm:grid grid-cols-4 text-sm font-medium text-gray-600 mt-6">
                        <div className="text-indigo-600">Order placed</div>
                        <div className="text-center text-indigo-600">
                          Processing
                        </div>
                        <div className="text-center">Shipped</div>
                        <div className="text-right">Delivered</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white border-t border-b border-gray-200 shadow-sm sm:border sm:rounded-lg">
                  <div className="py-6 px-4 sm:px-6 lg:grid lg:grid-cols-12 lg:gap-x-8 lg:p-8">
                    <div className="sm:flex lg:col-span-7">
                      <div className="flex-shrink-0 w-full aspect-w-1 aspect-h-1 rounded-lg overflow-hidden sm:aspect-none sm:w-40 sm:h-40">
                        <img loading="lazy"
                          src="https://tailwindui.com/img/ecommerce-images/confirmation-page-04-product-01.jpg"
                          alt="Off-white t-shirt with circular dot illustration on the front of mountain ridges that fade."
                          className="object-center object-cover"
                        />
                      </div>

                      <div className="mt-6 sm:mt-0 sm:ml-6">
                        <h3 className="text-base font-medium text-gray-900">
                          <a href="#">Durable Tshirt</a>
                        </h3>
                        <p className="mt-2 text-sm font-medium text-gray-900">
                          ₹149.00
                        </p>
                        <p className="mt-3 text-sm text-gray-500">
                          This contemporary Tshirt has a clean, minimalist look
                          and high quality components.
                        </p>
                      </div>
                    </div>

                    <div className="mt-6 lg:mt-0 lg:col-span-5">
                      <dl className="grid grid-cols-2 gap-x-6 text-sm">
                        <div>
                          <dt className="font-medium text-gray-900">
                            Delivery address
                          </dt>
                          <dd className="mt-3 text-gray-500">
                            <span className="block">Floyd Miles</span>
                            <span className="block">7363 Cynthia Pass</span>
                            <span className="block">Toronto, ON N3Y 4H8</span>
                          </dd>
                        </div>
                        <div>
                          <dt className="font-medium text-gray-900">
                            Shipping updates
                          </dt>
                          <dd className="mt-3 text-gray-500 space-y-3">
                            <p>f•••@example.com</p>
                            <p>1•••••••••40</p>
                            <button
                              type="button"
                              className="font-medium text-indigo-600 hover:text-indigo-500"
                            >
                              Edit
                            </button>
                          </dd>
                          <button
                            className="text-center text-white rounded-md hover:bg-blue-500 m-5 px-5 py-2 bg-blue-600"
                            onClick={() => setView(!view)}
                          >
                            Details
                          </button>
                        </div>
                      </dl>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 py-6 px-4 sm:px-6 lg:p-8">
                    <h4 className="sr-only">Status</h4>
                    <p className="text-sm font-medium text-gray-900">
                      Shipped on{" "}
                      <time datetime="2021-03-23">March 23, 2021</time>
                    </p>
                    <div
                      className="mt-6"
                      aria-hidden="true"
                    >
                      <div className="bg-gray-200 rounded-full overflow-hidden">
                        {/* <div className="h-2 bg-indigo-600 rounded-full" style={"width: calc((0 * 2 + 1) / 8 * 100%)"}></div> */}
                        <Progressbar progressPercentage={100} />
                      </div>
                      <div className="hidden sm:grid grid-cols-4 text-sm font-medium text-gray-600 mt-6">
                        <div className="text-indigo-600">Order placed</div>
                        <div className="text-center">Processing</div>
                        <div className="text-center">Shipped</div>
                        <div className="text-right">Delivered</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <!-- More products... --> */}
              </div>
            </div>

            {/* <!-- Billing --> */}
            <div className="mt-16">
              <h2 className="sr-only">Billing Summary</h2>

              <div className="bg-gray-100 py-6 px-4 sm:px-6 sm:rounded-lg lg:px-8 lg:py-8 lg:grid lg:grid-cols-12 lg:gap-x-8">
                <dl className="grid grid-cols-2 gap-6 text-sm sm:grid-cols-2 md:gap-x-8 lg:col-span-7">
                  <div>
                    <dt className="font-medium text-gray-900">
                      Billing address
                    </dt>
                    <dd className="mt-3 text-gray-500">
                      <span className="block">Floyd Miles</span>
                      <span className="block">7363 Cynthia Pass</span>
                      <span className="block">Toronto, ON N3Y 4H8</span>
                    </dd>
                  </div>
                  <div>
                    <dt className="font-medium text-gray-900">
                      Payment information
                    </dt>
                    <div className="mt-3">
                      <dd className="-ml-4 -mt-4 flex flex-wrap">
                        <div className="ml-4 mt-4 flex-shrink-0">
                          <svg
                            aria-hidden="true"
                            width="36"
                            height="24"
                            viewBox="0 0 36 24"
                            xmlnsXlink="http://www.w3.org/2000/svg"
                            className="h-6 w-auto"
                          >
                            <rect
                              width="36"
                              height="24"
                              rx="4"
                              fill="#224DBA"
                            />
                            <path
                              d="M10.925 15.673H8.874l-1.538-6c-.073-.276-.228-.52-.456-.635A6.575 6.575 0 005 8.403v-.231h3.304c.456 0 .798.347.855.75l.798 4.328 2.05-5.078h1.994l-3.076 7.5zm4.216 0h-1.937L14.8 8.172h1.937l-1.595 7.5zm4.101-5.422c.057-.404.399-.635.798-.635a3.54 3.54 0 011.88.346l.342-1.615A4.808 4.808 0 0020.496 8c-1.88 0-3.248 1.039-3.248 2.481 0 1.097.969 1.673 1.653 2.02.74.346 1.025.577.968.923 0 .519-.57.75-1.139.75a4.795 4.795 0 01-1.994-.462l-.342 1.616a5.48 5.48 0 002.108.404c2.108.057 3.418-.981 3.418-2.539 0-1.962-2.678-2.077-2.678-2.942zm9.457 5.422L27.16 8.172h-1.652a.858.858 0 00-.798.577l-2.848 6.924h1.994l.398-1.096h2.45l.228 1.096h1.766zm-2.905-5.482l.57 2.827h-1.596l1.026-2.827z"
                              fill="#fff"
                            />
                          </svg>
                          <p className="sr-only">Visa</p>
                        </div>
                        <div className="ml-4 mt-4">
                          <p className="text-gray-900">Ending with 4242</p>
                          <p className="text-gray-600">Expires 02 / 24</p>
                        </div>
                      </dd>
                    </div>
                  </div>
                </dl>

                <dl className="mt-8 divide-y divide-gray-200 text-sm lg:mt-0 lg:col-span-5">
                  <div className="pb-4 flex items-center justify-between">
                    <dt className="text-gray-600">Subtotal</dt>
                    <dd className="font-medium text-gray-900">₹72</dd>
                  </div>
                  <div className="py-4 flex items-center justify-between">
                    <dt className="text-gray-600">Shipping</dt>
                    <dd className="font-medium text-gray-900">₹5</dd>
                  </div>
                  <div className="py-4 flex items-center justify-between">
                    <dt className="text-gray-600">Tax</dt>
                    <dd className="font-medium text-gray-900">₹6.16</dd>
                  </div>
                  <div className="pt-4 flex items-center justify-between">
                    <dt className="font-medium text-gray-900">Order total</dt>
                    <dd className="font-medium text-indigo-600">₹83.16</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      ) : (
        <Orderdetail
          view={view}
          setView={setView}
        />
      )}
    </div>
  );
};

export default YourOrders;

const Orderdetail = (props) => {
  return (
    <>
      <div className="bg-white">
        <Navbar />
        <div className="max-w-3xl mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="max-w-xl">
            <h1 className="text-sm font-semibold uppercase tracking-wide text-indigo-600">
              Thank you!
            </h1>
            <p className="mt-2 text-4xl font-extrabold tracking-tight sm:text-5xl">
              It's on the way!
            </p>
            <p className="mt-2 text-base text-gray-500">
              Your order #14034056 has shipped and will be with you soon.
            </p>

            <dl className="mt-12 text-sm font-medium">
              <dt className="text-gray-900">Tracking number</dt>
              <dd className="text-indigo-600 mt-2">51547878755545848512</dd>
            </dl>
          </div>

          <div className="mt-10 border-t border-gray-200">
            <h2 className="sr-only">Your order</h2>

            <h3 className="sr-only">Items</h3>

            <div className="py-10 border-b border-gray-200 flex space-x-6">
              <img loading="lazy"
                src="https://tailwindui.com/img/ecommerce-images/confirmation-page-04-product-02.jpg"
                alt="Glass bottle with black plastic pour top and mesh insert."
                className="flex-none w-20 h-20 object-center object-cover bg-gray-100 rounded-lg sm:w-40 sm:h-40"
              />
              <div className="flex-auto flex flex-col">
                <div>
                  <h4 className="font-medium text-gray-900">
                    <a href="#"> Amazing Tshirt</a>
                  </h4>
                  <p className="mt-2 text-sm text-gray-600">
                    amazing tshirt comfortable for school
                  </p>
                </div>
                <div className="mt-6 flex-1 flex items-end">
                  <dl className="flex text-sm divide-x divide-gray-200 space-x-4 sm:space-x-6">
                    <div className="flex">
                      <dt className="font-medium text-gray-900">Quantity</dt>
                      <dd className="ml-2 text-gray-700">1</dd>
                    </div>
                    <div className="pl-4 flex sm:pl-6">
                      <dt className="font-medium text-gray-900">Price</dt>
                      <dd className="ml-2 text-gray-700">₹32.00</dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>

            <div className="sm:ml-40 sm:pl-6">
              <h3 className="sr-only">Your information</h3>

              <h4 className="sr-only">Addresses</h4>
              <dl className="grid grid-cols-2 gap-x-6 text-sm py-10">
                <div>
                  <dt className="font-medium text-gray-900">
                    Shipping address
                  </dt>
                  <dd className="mt-2 text-gray-700">
                    <address className="not-italic">
                      <span className="block">Kristin Watson</span>
                      <span className="block">7363 Cynthia Pass</span>
                      <span className="block">Toronto, ON N3Y 4H8</span>
                    </address>
                  </dd>
                </div>
                <div>
                  <dt className="font-medium text-gray-900">Billing address</dt>
                  <dd className="mt-2 text-gray-700">
                    <address className="not-italic">
                      <span className="block">Kristin Watson</span>
                      <span className="block">7363 Cynthia Pass</span>
                      <span className="block">Toronto, ON N3Y 4H8</span>
                    </address>
                  </dd>
                </div>
              </dl>

              <h4 className="sr-only">Payment</h4>
              <dl className="grid grid-cols-2 gap-x-6 border-t border-gray-200 text-sm py-10">
                <div>
                  <dt className="font-medium text-gray-900">Payment method</dt>
                  <dd className="mt-2 text-gray-700">
                    <p>Apple Pay</p>
                    <p>Mastercard</p>
                    <p>
                      <span aria-hidden="true">•••• </span>
                      <span className="sr-only">Ending in </span>1545
                    </p>
                  </dd>
                </div>
                <div>
                  <dt className="font-medium text-gray-900">Shipping method</dt>
                  <dd className="mt-2 text-gray-700">
                    <p>DHL</p>
                    <p>Takes up to 3 working days</p>
                  </dd>
                </div>
              </dl>

              <h3 className="sr-only">Summary</h3>

              <dl className="space-y-6 border-t border-gray-200 text-sm pt-10">
                <div className="flex justify-between">
                  <dt className="font-medium text-gray-900">Subtotal</dt>
                  <dd className="text-gray-700">₹36.00</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="flex font-medium text-gray-900">
                    Discount
                    <span className="rounded-full bg-gray-200 text-xs text-gray-600 py-0.5 px-2 ml-2">
                      STUDENT50
                    </span>
                  </dt>
                  <dd className="text-gray-700">-₹18.00 (50%)</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="font-medium text-gray-900">Shipping</dt>
                  <dd className="text-gray-700">₹5.00</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="font-medium text-gray-900">Total</dt>
                  <dd className="text-gray-900">₹23.00</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
        <div className="text-center">
          <button
            className="text-center text-white rounded-md hover:bg-blue-500 m-5 px-5 py-2 bg-blue-600"
            onClick={() => props.setView(!props.view)}
          >
            Previous
          </button>
        </div>
        <Footer />
      </div>
    </>
  );
};
