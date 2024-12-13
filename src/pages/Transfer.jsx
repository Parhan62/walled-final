import { useState } from "react";
import ActionButton from "../components/ActionButton";
import useFetch from "../hooks/useFetch";
// import { getCurrentUser } from "../utils";

function Transfer() {
  const [amount, setAmount] = useState(0);
  const [isBalanceLacking, setIsBalanceLacking] = useState(false);
  const { data: users } = useFetch("http://localhost:8080/users");

  const currentUser = getCurrentUser(users);

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleTransfer = async () => {
    const url = `http://localhost:3000/users/1`;

    try {
      const response = await fetch(url, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ balance: 10000 }),
      });

      const data = await response.json();

      console.log("DATA", data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = () => {
    if (currentUser.balance < amount) {
      setIsBalanceLacking(true);
    } else {
      setIsBalanceLacking(false);

      handleTransfer();
    }
  };

  return (
    <section className="w-full px-16 pt-12 bg-[#fafbfd] dark:bg-[#3E3E42]">
      <div className="w-1/2 mx-auto">
        <h1 className="font-bold text-5xl">Transfer</h1>
        <div className="mt-6 shadow-[0_0_10px_0_rgba(91,91,91,0.1)] bg-white py-[56px] px-[56px] rounded-[20px]">
          <div
            className="w-full flex shadow-[0_0_10px0_rgba(91, 91, 91, 0.1)];
"
          >
            <button className="absolute z-50 py-4 px-8 bg-[#EDEDED] rounded-[20px] font-bold text-2xl">
              <label htmlFor="to">To</label>
            </button>
            <select
              name="to"
              id="to"
              className="relative w-full bg-[#FAFBFD] text-[#737373] py-5 pr-4 pl-8 ml-[70px] rounded-[10px] border-r-8 border-transparent outline-none"
            >
              <option value="900782139">127271684 (Asmo)</option>
            </select>
          </div>
          <div className="pt-5 px-8 pb-9 mt-7 bg-[#FAFBFD] rounded-[20px]">
            <h2 className="font-semibold">Amount</h2>
            <span className="font-semibold">IDR</span>
            <input
              name="amount"
              type="number"
              onChange={handleAmountChange}
              className="bg-[#FAFBFD] outline-none ml-2 mt-2 font-semibold"
            />
          </div>
          <p className="mt-2.5 text-[#26AA99] font-semibold">
            Balance: IDR{" "}
            {new Intl.NumberFormat("id-ID").format(currentUser?.balance)}
          </p>
          <div className="py-4 px-8 mt-7 bg-[#FAFBFD] rounded-[20px]">
            <label htmlFor="notes" className="font-semibold">
              Notes:
            </label>
            <input
              name="notes"
              type="text"
              className="bg-[#fafbfd] outline-none ml-2"
            />
          </div>
          {isBalanceLacking && (
            <p className="mt-2 text-red-500">Maaf, saldo Anda kurang</p>
          )}
          <div className="flex flex-col mt-[60px]">
            <ActionButton onClick={handleSubmit}>Transfer</ActionButton>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Transfer;
