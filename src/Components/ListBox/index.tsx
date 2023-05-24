"use client";
import { Combobox, Transition } from "@headlessui/react";
import { useState, Fragment, useMemo } from "react";
import { checkIcon, iconArrowDown } from "@/constants/icon";

interface ListBoxProps {
  data: Array<any>;
  label: string;
  selected: any;
  className?: string;
  onChange: any;
  multiple: Boolean /* boolean */;
  checkSelected?: any;
}
export default function ListBox({
  label,
  selected,
  data,
  multiple,
  className,
  checkSelected,
  onChange,
}: ListBoxProps) {
  const [query, setQuery] = useState("");

  const filteredData = useMemo(
    () =>
      query === ""
        ? data
        : data.filter((person: any) =>
            person.Name.toLowerCase()
              .replace(/\s+/g, "")
              .includes(query.toLowerCase().replace(/\s+/g, ""))
          ),
    [query, data]
  );

  return (
    <div className={`${className} inline-block`}>
      <Combobox
        value={selected}
        onChange={onChange}
        {...(multiple && { multiple: true })}
      >
        <div className="relative mt-1">
          {label && <label className="dark:text-true-gray text-sm text-smleading-none ml-5">{label}</label>}
          <div className="relative w-full cursor-default rounded-lg bg-[#F1F5F9] dark:bg-[#262626] text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
            <Combobox.Input
              className="w-full py-2 text-base pl-3 pr-10 leading-5 text-gray-900 rounded-lg
                      hover:border-sky-blue/50 dark:hover:border-sky-blue/50 dark:border-slate-700 
                            outline-none bg-[#F1F5F9] dark:bg-[#262626] dark:text-gray-300
                        "
              displayValue={(cate: any) => cate && cate.Name}
              onChange={(event) => setQuery(event.target.value)}
            />
            <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
              {/* <ChevronUpDownIcon className='h-5 w-5 text-gray-400' aria-hidden='true' /> */}
              {iconArrowDown}
            </Combobox.Button>
          </div>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery("")}
          >
            <Combobox.Options className="absolute top-9 left-0 z-[100] mt-1 max-h-[250px] w-full overflow-auto rounded-md bg-white  py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {filteredData.length === 0 && query !== "" ? (
                <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                  Nothing found.
                </div>
              ) : (
                filteredData.map((cate: any) => (
                  <Combobox.Option
                    key={cate.Code || cate.code}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 ${
                        active ? "bg-gradient-fire text-white" : "text-gray-900"
                      }`
                    }
                    value={cate}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={`block truncate ${
                            checkSelected?.(cate.Code)
                              ? "font-medium"
                              : "font-normal"
                          }`}
                        >
                          {cate.Name}
                        </span>
                        {checkSelected?.(cate.Code) || selected ? (
                          <span
                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                              active ? "text-white" : "text-teal-600"
                            }`}
                          >
                            {/* <CheckIcon className='h-5 w-5' aria-hidden='true' /> */}
                            {checkIcon}
                          </span>
                        ) : null}
                      </>
                    )}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
}
