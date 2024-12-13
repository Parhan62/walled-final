import useFetch from "../hooks/useFetch";

const TABLE_HEAD = [
  "Date & Time",
  "Type",
  "From / To",
  "Description",
  "Amount",
];

function Transaction() {
  // const { data: transactions } = useFetch("http://localhost:3000/transactions");
  const { data: transactions } = useFetch("localhost:8080/transactions");

  // const transactions = async () => {
  //   try {
  //     const response = await fetch("http://localhost:8080/auth/transactions", {
  //       method: "POST",
  //       headers: {
  //         Accept: "application/json",
  //         "Content-Type": "application/json",
  //       },
  //       // body: JSON.stringify(registerData),
  //     });

  //     const data = await response.json();

  //     console.log("DATA", data);
  //   } catch (error) {
  //     console.error(error.message);
  //   }
  // };


  return (
    <div>
      <div className="flex w-3/4 mx-auto mt-10 justify-between">
        <input
          name="search"
          type="text"
          placeholder="Search"
          className="w-[300px] h-[50px] rounded-[10px] pl-6"
        />
        <div className="flex">
          <div className="flex gap-x-4 items-center mr-12">
            <p className="text-[#737373]">Show</p>
            <select
              name="limit"
              id="limit"
              className="text-[#737373] py-3 px-4 rounded-[10px] border-r-8 border-transparent"
            >
              <option value="10">Limit 10 transactions</option>
              <option value="20">Limit 20 transactions</option>
            </select>
          </div>
          <div className="flex gap-x-2 items-center">
            <p className="text-[#737373] mr-3">Sort by</p>
            <select
              name="date"
              id="date"
              className="text-[#737373] py-3 px-4 rounded-[10px] border-r-8 border-transparent"
            >
              <option value="date">Date</option>
            </select>
            <select
              name="sortby"
              id="sortby"
              className="text-[#737373] py-3 px-4 rounded-[10px] border-r-8 border-transparent"
            >
              <option value="desc">Descending</option>
              <option value="asc">Ascending</option>
            </select>
          </div>
        </div>
      </div>
      <div className="w-3/4 mx-auto">
        <table className="table-auto text-black border-collapse border border-slate-500 mt-10 w-full overflow-hidden">
          <thead className="bg-white">
            <tr>
              {TABLE_HEAD.map((head, index) => (
                <th key={index} className="border border-[#EDEDED] py-2 px-4">
                  {head}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {transactions.slice(0, 10).map((transaction, index) => {
              const formattedDate = new Date(transaction.date * 1000);

              return (
                <tr
                  key={index}
                  className={`${
                    transaction.type === "DEBIT" ? "bg-[#F6F6F6]" : "bg-white"
                  }`}
                >
                  <td className="border border-[#EDEDED] py-2 px-4">
                    {formattedDate.toLocaleString()}
                  </td>
                  <td className="border border-[#EDEDED] py-2 px-4">
                    {transaction.type}
                  </td>
                  <td className="border border-[#EDEDED] py-2 px-4">
                    {transaction.address}
                  </td>
                  <td className="border border-[#EDEDED] py-2 px-4">
                    {transaction.desc}
                  </td>
                  <td
                    className={`border border-[#EDEDED] py-2 px-4 ${
                      transaction.type === "DEBIT"
                        ? "text-red-500"
                        : "text-[#219653]"
                    }`}
                  >
                    {transaction.type === "DEBIT" ? "-" : "+"}{" "}
                    {new Intl.NumberFormat("id-ID").format(transaction.amount)}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="pt-10">
          <button className="font-bold px-5 py-[9.5px] border-2 border-[#E9E9E9] rounded-l-md dark:bg-white">
            First
          </button>
          {Array.from(
            { length: Math.ceil(transactions.length / 10) },
            (_, i) => i + 1
          ).map((item, index) => (
            <button
              key={index}
              className="font-bold px-5 py-[9.5px] border-2 border-[#E9E9E9] dark:bg-white"
            >
              {item}
            </button>
          ))}
          <button className="font-bold px-5 py-[9.5px] border-2 border-[#E9E9E9] rounded-r-md dark:bg-white">
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default Transaction;
