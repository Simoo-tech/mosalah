import { useState } from "react";
import "./App.css";
import { BiSolidHappyBeaming } from "react-icons/bi";

function App() {
  const [choose, setChoose] = useState([]);
  const [popUp, setPopUp] = useState(false);
  const [error, setError] = useState(null);

  const questions = [
    "هل انت مهتم بمادة التفكير النقدي",
    "هل انت راض عن هذا العرض",
    "هل تري ان هناك بعض المعلومات التي يجب ان تكون متواجدة في العرض",
  ];

  const items = questions.map((ques, i) => {
    return (
      <li
        key={i}
        className="text-lg lg:text-xl flex gap-3 items-start md:items-center justify-between w-full flex-col md:flex-row "
      >
        {i + 1 + ". " + ques}
        <div className="flex gap-2">
          <button
            onClick={(e) => {
              e.preventDefault();
              if (choose.includes(i + "false") || choose.includes(i + "true")) {
                null;
              } else {
                setChoose((prev) => [...prev, i + "true"]);
              }
              setError();
            }}
            className={`py-1 px-6 border-2 h-fit border-black ${
              choose.includes(i + "true") && "bg-green-500 "
            } `}
          >
            نعم
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              if (choose.includes(i + "false") || choose.includes(i + "true")) {
                null;
              } else {
                setChoose((prev) => [...prev, i + "false"]);
              }
              setError();
            }}
            className={`py-1 px-6 border-2 h-fit border-black ${
              choose.includes(i + "false") && "bg-green-500 "
            } `}
          >
            لا
          </button>
        </div>
      </li>
    );
  });

  const HandleClick = () => {
    if (choose.length <= 0) {
      setError("اخبرنا برايك اولا");
    } else if (choose.length < 3) {
      setError("اكمل الاسئلة اولا");
    } else {
      setChoose([]);
      setPopUp(true);
      setError();
    }
  };

  return (
    <div className="w-full h-screen container max-w-full flex justify-center items-center py-10 flex-col gap-5 relative">
      {
        <PopUp
          setPopUp={setPopUp}
          popUp={popUp}
          setChoose={setChoose}
          setError={setError}
        />
      }
      <h1 className=" text-xl text-center lg:text-3xl ">
        اخبرنا برايك عن العرض
      </h1>
      <ul
        className="list-decimal w-fit h-fit flex flex-col gap-5 border-2 p-10 "
        dir="rtl"
      >
        {items}
        <textarea
          name="more"
          cols="20"
          rows="6"
          className={`bg-[#eee] p-3 rounded-lg ${
            choose.includes(2 + "false") ? "block" : "hidden"
          }`}
          placeholder=" اقترح بعض المعلومات التي يجب ان تذكر في العرض"
        ></textarea>
      </ul>
      <span className="text-lg text-red-500">{error}</span>
      <div className="btn flex gap-5">
        <button
          onClick={HandleClick}
          className="text-lg text-white bg-green-500 px-6 py-2 "
        >
          ارسل
        </button>
        <button
          onClick={() => {
            setChoose([]);
            setError();
          }}
          className="text-lg text-white bg-red-500 px-6 py-2 "
        >
          مسح الاجابات
        </button>
      </div>
    </div>
  );
}

const PopUp = ({ popUp }) => {
  return (
    <div
      className={`${
        popUp ? "flex" : "hidden"
      } absolute w-full h-full top-0 left-0 bg-black/50 flex items-center justify-center`}
    >
      <div className="message bg-white w-5/12 h-3/6  rounded-2xl flex items-center flex-col justify-center gap-6 shadow-2xl">
        <BiSolidHappyBeaming size={60} className="text-yellow-500" />
        <h2 className="text-2xl">شكرا لك اتمني ان تكون استمتعت بالعرض</h2>
        <div className="btn flex justify-center w-full gap-5">
          <button
            onClick={() => {
              window.location.reload();
            }}
            className="bg-blue-700 py-2 px-6 text-white"
          >
            لدي اجابة اخري
          </button>
          <button
            onClick={() => window.location.reload()}
            className="bg-red-700 py-2 px-6 text-white "
          >
            الغاء
          </button>
        </div>
      </div>
    </div>
  );
};
export default App;
