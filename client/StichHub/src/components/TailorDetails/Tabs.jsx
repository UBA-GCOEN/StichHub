import { useState } from "react";
import { Tab } from "@headlessui/react";
import { FaStar } from "react-icons/fa";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Tabs() {
  // Constanst for starts
  const stars = Array(5).fill(0);

  //colors for stars
  const colors = {
    yellow: "#ebeb35",
    gray: "#676d67",
  };

  // Defining state to display the info in tabs
  let [categories] = useState({
    Details: [
      {
        id: 1,
        title: "Works faster than horse",
        // date: "5h ago",
        // commentCount: 5,
        // shareCount: 2,
      },
      {
        id: 2,
        title: "Clothes last longer than your toothpaste",
        // date: "2h ago",
        // commentCount: 3,
        // shareCount: 2,
      },
    ],
    Skills: [
      {
        id: 1,
        name: "shirt1",
        value: 4,
      },
      {
        id: 2,
        name: "shirt2",
        value: 3,
      },
    ],
    Activities: [
      {
        id: 1,
        title: "Ask Me Anything: 10 answers to your questions about coffee",
        date: "2d ago",
        commentCount: 9,
        shareCount: 5,
      },
      {
        id: 2,
        title: "The worst advice we've ever heard about coffee",
        date: "4d ago",
        commentCount: 1,
        shareCount: 2,
      },
    ],
  });
  // Ending the use state declaration here
  return (
    <Tab.Group>
      <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20">
        {Object.keys(categories).map((category) => (
          <Tab
            key={category}
            className={({ selected }) =>
              classNames(
                "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700",
                "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                selected
                  ? "bg-white shadow"
                  : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
              )
            }
          >
            {category}
          </Tab>
        ))}
      </Tab.List>
      <Tab.Panels className="w-auto p-2">
        <Tab.Panel
          className={classNames(
            "rounded-xl bg-white p-3",
            "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
          )}
        >
          <ul>
            {categories.Details.map((post) => (
              <li
                key={post.id}
                className="relative rounded-md p-3 hover:bg-gray-100"
              >
                <h3 className="text-sm font-medium leading-5">{post.title}</h3>

                <ul className="mt-1 flex space-x-1 text-xs font-normal leading-4 text-gray-500">
                  <li>{post.date}</li>
                  <li>&middot;</li>
                  <li>{post.commentCount} comments</li>
                  <li>&middot;</li>
                  <li>{post.shareCount} shares</li>
                </ul>

                <a
                  href="#"
                  className={classNames(
                    "absolute inset-0 rounded-md",
                    "ring-blue-400 focus:z-10 focus:outline-none focus:ring-2"
                  )}
                />
              </li>
            ))}
          </ul>
        </Tab.Panel>

        {/* Cntent for the skills tab */}
        <Tab.Panel
          className={classNames(
            "flex m-2 rounded-xl bg-white p-3",
            "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
          )}
        >
          {Object.values(categories.Skills).map((post, idx) => (
            <div
              key={idx}
              className="m-2 p-2"
            >
              <div className="justify-center text-center">
                <h1>{post.name}</h1>
              </div>
              <div className="flex justify-center">
                {stars.map((_, index) => {
                  let currentValue = post.value;
                  return (
                    <FaStar
                      key={index}
                      className="cursor-pointer"
                      color={currentValue > index ? colors.yellow : colors.gray}
                    />
                  );
                })}
              </div>
            </div>
          ))}
        </Tab.Panel>

        <Tab.Panel
          className={classNames(
            "rounded-xl bg-white p-3",
            "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
          )}
        >
          <ul>
            {categories.Details.map((post) => (
              <li
                key={post.id}
                className="relative rounded-md p-3 hover:bg-gray-100"
              >
                <h3 className="text-sm font-medium leading-5">{post.title}</h3>

                <ul className="mt-1 flex space-x-1 text-xs font-normal leading-4 text-gray-500">
                  <li>{post.date}</li>
                  <li>&middot;</li>
                  <li>{post.commentCount} comments</li>
                  <li>&middot;</li>
                  <li>{post.shareCount} shares</li>
                </ul>

                <a
                  href="#"
                  className={classNames(
                    "absolute inset-0 rounded-md",
                    "ring-blue-400 focus:z-10 focus:outline-none focus:ring-2"
                  )}
                />
              </li>
            ))}
          </ul>
        </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
}
