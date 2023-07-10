import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { useCCustomization } from "../../../contexts/Configurator";

const TitleSection = () => {
  const { selected, setSelected, fabrics } = useCCustomization();

  return (
    <div>
      <div className="flex justify-center">
        <div
          id="line"
          className="relative w-[80px] h-1 bg-gray-400 rounded-full"
        ></div>
      </div>
      <div id="Title" className="text-xl flex justify-center">
        <span className="pt-3 pb-1">
          <b>Configure </b> the Shirt
        </span>
      </div>
      <div id="fabric" className="">
        <div className="flex justify-center">
          <Listbox value={selected} onChange={setSelected}>
            <div className="relative mt-1">
              <Listbox.Button className="relative w-fit cursor-pointer rounded-lg bg-white py-[5px] pl-3 pr-10 text-left shadow-md border-2 border-indigo-500 focus-visible:border-indigo-500 sm:text-sm z-[5]">
                <span className="flex truncate">
                  Fabric : <img loading="lazy" src="" className="px-[9px] border-2 rounded-md border-gray-400 mx-[5px]" />{" "}
                  <b> {selected.name}</b>
                </span>
                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                  <ChevronUpDownIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </span>
              </Listbox.Button>
              <Transition
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="configurator absolute mt-1 max-h-40 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm z-[5]">
                  {fabrics.map((fabric, index) => (
                    <Listbox.Option
                      key={index}
                      className={({ active }) =>
                        `relative cursor-pointer select-none py-2 pl-10 pr-4 ${
                          active ? "bg-indigo-300 text-black" : "text-gray-500"
                        }`
                      }
                      value={fabric}
                    >
                      {({ selected }) => (
                        <>
                          <span
                            className={`block truncate ${
                              selected ? "font-medium" : "font-normal"
                            }`}
                          >
                            {fabric.name}
                          </span>
                          {selected ? (
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-indigo-600">
                              <CheckIcon
                                className="h-5 w-5"
                                aria-hidden="true"
                              />
                            </span>
                          ) : null}
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </Listbox>
        </div>
      </div>
    </div>
  );
};

export default TitleSection;
