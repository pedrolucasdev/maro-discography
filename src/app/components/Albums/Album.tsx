"use client";
import React, { ComponentPropsWithRef, Dispatch, SetStateAction } from "react";
import classNames from "classnames";

type AlbumPropsType = ComponentPropsWithRef<"div"> & {
  index: number;
  name: string;
  year: number;
  setModal: Dispatch<
    SetStateAction<{
      active: boolean;
      index: number;
    }>
  >;
};

export const Album: React.FC<AlbumPropsType> = (props) => {
  const { index, name, year, setModal } = props;

  return (
    <div
      onMouseEnter={() => {
        setModal({ active: true, index });
      }}
      onMouseLeave={() => {
        setModal({ active: false, index });
      }}
      className={classNames(
        "flex w-full justify-between items-center p-6 border-t border-gray-300 cursor-pointer transition-all duration-200",
        "last:border-b border-gray-300 hover:opacity-50",
        "hover:h2:transform hover:h2:-translate-x-2",
        "hover:p:transform hover:p:translate-x-2"
      )}
    >
      <h2 className="text-5xl m-0 font-normal transition-all duration-400">
        {name}
      </h2>
      <p className="transition-all duration-400 font-light text-lg">{year}</p>
    </div>
  );
};
