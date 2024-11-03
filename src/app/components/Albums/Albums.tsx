"use client";
import { useState } from "react";
import { Album } from "./Album";
import { AlbumModal } from "./AlbumModal";

export interface AlbumType {
  src: string;
  name: string;
  year: number;
}

export interface SelectedModalType {
  active: boolean;
  index: number;
}

const albums: AlbumType[] = [
  {
    src: "hortela.jpg",
    name: "hortelã",
    year: 2023,
  },
  {
    src: "canyouseeme.jpg",
    name: "can you see me?",
    year: 2022,
  },
  {
    src: "itsok.jpg",
    name: "it's OK",
    year: 2018,
  },
  {
    src: "maromanel.jpg",
    name: "MARO & Manel",
    year: 2018,
  },
  {
    src: "marovol3.jpg",
    name: "MARO,Vol.3",
    year: 2018,
  },
  {
    src: "marovol2.jpg",
    name: "MARO,Vol.2",
    year: 2018,
  },
  {
    src: "marovol1.jpg",
    name: "MARO,Vol.1",
    year: 2018,
  },
];

export default function Albums() {
  const [modal, setModal] = useState<SelectedModalType>({
    active: false,
    index: 0,
  });
  return (
    <div className="w-full flex flex-col items-center justify-center px-52 h-full">
      {albums.map((album, index) => {
        return (
          <Album
            index={index}
            name={album.name}
            year={album.year}
            setModal={setModal}
            key={index}
          />
        );
      })}
      <AlbumModal modal={modal} albums={albums}></AlbumModal>
    </div>
  );
}
