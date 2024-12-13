import { useState } from "react";

import viewIcon from "../assets/view.png";
import ActionButton from "./ActionButton";
import plusIcon from "../assets/plus.svg";
import sendIcon from "../assets/send.svg";

function AccountBalance() {
  const [showBalance, setShowBalance] = useState(true);

  return (
    <section className="w-full px-16 mt-12">
      <div className="flex mt-[4.5rem] gap-x-12">
        <div className="bg-[#19918F] p-12 rounded-2xl w-1/5">
          <p>Account No.</p>
          <p className="mt-3 font-bold">100899</p>
        </div>
        <div className="flex justify-between bg-white p-12 rounded-2xl w-full text-black">
          <div>
            <p>Balance</p>
            <span className="flex items-center mt-3 gap-x-2">
              <p className="font-bold">
                {showBalance ? "Rp10.000.000,00" : "Rp ********"}
              </p>
              <img
                src={viewIcon}
                alt="view"
                className="w-4 h-4 object-cover cursor-pointer"
                onClick={() => setShowBalance((prev) => !prev)}
              />
            </span>
          </div>
          <div className="flex gap-x-6">
            <ActionButton>
              <img src={plusIcon} alt="plus icon" className="w-8 h-8" />
            </ActionButton>
            <ActionButton>
              <img src={sendIcon} alt="send icon" className="w-8 h-8" />
            </ActionButton>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AccountBalance;
