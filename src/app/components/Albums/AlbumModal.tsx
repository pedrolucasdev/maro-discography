import { ComponentPropsWithRef, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { AlbumType, SelectedModalType } from "./Albums";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const scaleAnimation = {
  initial: { scale: 0, x: "-50%", y: "-50%" },
  enter: {
    scale: 1,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    scale: 0,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
  },
};

type AlbumModalPropsType = ComponentPropsWithRef<"div"> & {
  modal: SelectedModalType;
  albums: AlbumType[];
};

export const AlbumModal: React.FC<AlbumModalPropsType> = (props) => {
  const { modal, albums } = props;
  const { active, index } = modal;

  const modalContainer = useRef(null);
  const cursor = useRef(null);
  const cursorLabel = useRef(null);

  useGSAP(() => {
    //Move Container
    let xMoveContainer = gsap.quickTo(modalContainer.current, "left", {
      duration: 0.8,
      ease: "power3",
    });
    let yMoveContainer = gsap.quickTo(modalContainer.current, "top", {
      duration: 0.8,
      ease: "power3",
    });

    //Move cursor
    let xMoveCursor = gsap.quickTo(cursor.current, "left", {
      duration: 0.5,
      ease: "power3",
    });
    let yMoveCursor = gsap.quickTo(cursor.current, "top", {
      duration: 0.5,
      ease: "power3",
    });

    //Move cursor label
    let xMoveCursorLabel = gsap.quickTo(cursorLabel.current, "left", {
      duration: 0.45,
      ease: "power3",
    });
    let yMoveCursorLabel = gsap.quickTo(cursorLabel.current, "top", {
      duration: 0.45,
      ease: "power3",
    });

    window.addEventListener("mousemove", (e) => {
      const { pageX, pageY } = e;

      xMoveContainer(pageX);
      yMoveContainer(pageY);

      xMoveCursor(pageX);
      yMoveCursor(pageY);

      xMoveCursorLabel(pageX);
      yMoveCursorLabel(pageY);
    });
  });

  return (
    <>
      <motion.div
        ref={modalContainer}
        variants={scaleAnimation}
        initial="initial"
        animate={active ? "enter" : "closed"}
        className="absolute h-[300px] w-[300px] overflow-hidden pointer-events-none flex items-center justify-center"
      >
        <div
          style={{ top: index * -100 + "%" }}
          className="absolute h-full w-full transition-top duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]"
        >
          {albums.map((album, index) => {
            const { src } = album;
            return (
              <div
                className="h-full w-full flex items-center justify-center"
                key={`modal_${index}`}
              >
                <Image
                  src={`/images/${src}`}
                  width={300}
                  height={0}
                  alt="image"
                  className="h-auto"
                />
              </div>
            );
          })}
        </div>
      </motion.div>
      <motion.div
        ref={cursor}
        className="absolute z-2 flex items-center justify-center w-[80px] h-[80px] rounded-full bg-[#0a0a0a9d] text-white text-[14px] font-light pointer-events-none"
        variants={scaleAnimation}
        initial="initial"
        animate={active ? "enter" : "closed"}
      ></motion.div>
      <motion.div
        ref={cursorLabel}
        variants={scaleAnimation}
        initial="initial"
        animate={active ? "enter" : "closed"}
        className="absolute z-2 flex items-center justify-center w-[80px] h-[80px] rounded-full  text-white text-[14px] font-light pointer-events-none bg-transparent"
      >
        View
      </motion.div>
    </>
  );
};
