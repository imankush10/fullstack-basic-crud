import React from "react";
import SocialButton from "./SocialButton";
import { motion } from "framer-motion";

const card = ({
  name,
  description,
  interests,
  reference,
  social,
  socialLink,
  keys,
  deleting,
  editing
}) => {
  return (
    <motion.div
      drag
      whileDrag={{ scale: 1.1 }}
      dragConstraints={reference}
      className="shadow-lg shadow-zinc-900 border border-zinc-900 w-72 h-fit m-4 px-5 py-14 rounded-lg"
      key={keys}
    >
      <div className="mb-3">
        <h2 className="font-bold text-2xl mb-4">{name}</h2>
        <h5>{description}</h5>
      </div>
      <div>
        <h2 className="font-bold text-2xl mb-3">Interests</h2>
        <div className="flex flex-col gap-[2px]">
          {interests.map((intr) => (
            <h2>{intr}</h2>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-5 mt-5">
        <SocialButton social={social} socialLink={socialLink}/>
        <div className="flex gap-10">
          <button
            className="bg-white px-3 text-center py-2 rounded-md font-semibold text-black"
            onClick={() => deleting(keys)}
          >
            Delete
          </button>
          <button
            className="bg-white px-3 text-center py-2 rounded-md font-semibold text-black"
            onClick={() => editing(keys)}
          >
            Edit
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default card;
