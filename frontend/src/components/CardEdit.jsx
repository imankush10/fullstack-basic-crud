import React, { useEffect, useState } from "react";
import SocialButton from "./SocialButton";
import { motion } from "framer-motion";

const CardEdit = ({ reference, add, editing }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [intr1, setIntr1] = useState("");
  const [intr2, setIntr2] = useState("");
  const [intr3, setIntr3] = useState("");
  const [social, setSocial] = useState("");
  const [socialLink, setSocialLink] = useState("");

  useEffect(()=>{
    if(editing){
      setName(editing.name);
      setDescription(editing.description);
      setIntr1(editing.interests[0]);
      setIntr2(editing.interests[1]);
      setIntr3(editing.interests[2]);
      setSocial(editing.social);
      setSocialLink(editing.socialLink);
    }
  }, [editing]);

  return (
    <motion.div
      drag
      whileDrag={{ scale: 1.1 }}
      dragConstraints={reference}
      className="absolute bottom-4 right-20 shadow-lg shadow-zinc-900 border border-zinc-900 w-72 w-min-fit h-fit m-4 p-5 rounded-lg"
    >
      <div className="mb-2">
        <input
          className="text-xl mb-5 border-white border-b outline-none"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        ></input>
        <input
          className="mb-4 border-white border-b outline-none"
          placeholder="Description"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        ></input>
      </div>
      <div>
        <h2 className="font-bold text-2xl mb-3">Interests</h2>
        <input
          className="mb-3 border-white border-b outline-none"
          placeholder="Interest 1"
          onChange={(e) => setIntr1(e.target.value)}
          value={intr1}
        ></input>
        <input
          className="mb-3 border-white border-b outline-none"
          placeholder="Interest 2"
          onChange={(e) => setIntr2(e.target.value)}
          value={intr2}
        ></input>
        <input
          className="mb-4 border-white border-b outline-none"
          placeholder="Interest 3"
          onChange={(e) => setIntr3(e.target.value)}
          value={intr3}
        ></input>
      </div>
      <div>
        <input
          type="text"
          className="mb-3 px-2 border-white border-b outline-none"
          placeholder="Social"
          onChange={(e) => setSocial(e.target.value)}
          value={social}
        />
        <input
          type="text"
          className="mb-3 px-2 border-white border-b outline-none"
          placeholder="Social Link"
          onChange={(e) => setSocialLink(e.target.value)}
          value={socialLink}
        />
      </div>
      <button
        className="font-bold bg-slate-700 px-3 py-1 rounded-md"
        onClick={() => {
          add(name, description, intr1, intr2, intr3, social, socialLink,editing?.key);
          setName("");
          setDescription("");
          setIntr1("");
          setIntr2("");
          setIntr3("");
          setSocial("");
          setSocialLink("");
        }}
      >
        Done
      </button>
    </motion.div>
  );
};

export default CardEdit;
