import React from "react";

const SocialButton = ({ social, socialLink }) => {
  return (
    <button className="bg-white px-3 text-center py-2 rounded-md font-semibold text-black" onClick={()=>window.open(socialLink, '_blank')}>
      {social}
    </button>
  );
};

export default SocialButton;
