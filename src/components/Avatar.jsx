import { useState } from "react";

function Avatar({ name, avatarUrl }) {
  const [isAvatarActive, setIsAvatarActive] = useState(false);

  return (
    <div className="flex items-center gap-x-4 ml-auto">
      <span className="text-right">
        <p className="text-black font-bold dark:text-white">{name}</p>
        <p className="text-black dark:text-white">Personal Account</p>
      </span>
      <div
        className={`rounded-full border-[6px] hover:border-[6px] hover:border-[#178F8D] cursor-pointer transition-all ${
          isAvatarActive ? "border-[#178F8D]" : "border-[#fafbfd]"
        }`}
        onClick={() => setIsAvatarActive((prev) => !prev)}
      >
        <img
          src={avatarUrl}
          alt="avatar"
          className="rounded-full h-20 w-20 object-cover"
        />
      </div>
    </div>
  );
}

export default Avatar;
