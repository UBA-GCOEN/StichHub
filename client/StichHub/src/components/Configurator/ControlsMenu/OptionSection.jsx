import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { useCCustomization } from "../../../contexts/Configurator";

const OptionSection = () => {
  const {
    part,
    shirtPart,
    selectedColor,
    setSelectedColor,
    clothColor,
    sleeveType,
    collarType,
    backType,
    cuffType,
    setSleeveType,
    setBackType,
    setCollarType,
    setCuffType,
  } = useCCustomization();
  return (
    <div>
      {/* Part Title */}
      <div id="partTitle" className="mt-[6px]">
        <span className="text-lg font-semibold">
          {shirtPart[part].text} Details :
        </span>
      </div>

      {/* Color Options */}
      <div className="flex justify-start">
        <Listbox value={selectedColor} onChange={setSelectedColor}>
          <div className="relative mt-2">
            <Listbox.Button className="relative w-fit cursor-pointer rounded-lg bg-white py-[2px] pl-3 pr-8 text-left border-2 border-indigo-500 focus-visible:border-indigo-500 sm:text-sm z-0">
              <span className="flex truncate">
                Color : <b className="ml-[7px]"> {selectedColor.color}</b>
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
              <Listbox.Options className="configurator absolute mt-1 max-h-[7.5rem] w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm z-10">
                {clothColor.map((item, index) => (
                  <Listbox.Option
                    key={index}
                    className={({ active }) =>
                      `relative cursor-pointer select-none py-2 pl-10 pr-4 ${
                        active ? "bg-indigo-300 text-black" : "text-gray-500"
                      }`
                    }
                    value={item}
                  >
                    {({ selected }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? "font-medium" : "font-normal"
                          }`}
                        >
                          {item.color}
                        </span>
                        {selected ? (
                          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-indigo-600">
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
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

      {/* Types */}
      <div>
        <div className="flex justify-start pt-3 pb-7">
          {shirtPart[part].types.map((type) => (
            <div
              key={type.typeName}
              className={`w-[50px] h-[40px] rounded-lg  cursor-pointer mr-3 drop-shadow-2xl border-[1px] border-indigo-500 ${
                type === sleeveType ||
                type === collarType ||
                type === backType ||
                type === cuffType
                  ? "bg-indigo-500 hover:bg-indigo-500"
                  : "bg-white hover:bg-indigo-200"
              }`}
              onClick={() => {
                if (part === 0) setSleeveType(type);
                else if (part === 1) setCollarType(type);
                else if (part === 2) setBackType(type);
                else if (part === 3) setCuffType(type);
              }}
            >
              <div className="flex justify-center">
                <img loading="lazy"
                  src={type.img}
                  alt={type.typeName}
                  className="p-1 w-9 h-9"
                />
              </div>
              <div className="flex justify-center">
                <span className="text-xs py-1">{type.typeName}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OptionSection;
