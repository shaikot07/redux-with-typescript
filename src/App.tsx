import { useDispatch, useSelector } from "react-redux";
import "./index.css"; // Import Tailwind CSS
import { decrement, increment } from "./redux/features/counter/CounterSlice";

function App() {

const dispatch =useDispatch();
const {count} =useSelector((state)=>state.counter)


const handleIncrement=()=>{
  dispatch(increment())
}
const handleDecrement=()=>{
  dispatch(decrement())
}

  return (
    <>
      <div className="min-h-screen bg-[#F3E8FF] p-8">
        <h2 className=" text-center text-2xl font-semibold">
          Explore The <span className="text-[#7B5EA7]">Redux-Toolkit</span> With{" "}
          <span className="text-[#3178C6]"> TypeScript</span>
          <div className="mt-10">
            <p>Result: {count}</p>

            <div className="mt-6 ">
              <button onClick={ handleIncrement} className="bg-purple-600 mr-5 text-white px-4 py-2 rounded-md shadow-md hover:bg-purple-700 transition duration-300">
                Increment
              </button>
              <button onClick={ handleDecrement} className="bg-gray-300 text-gray-800 px-4 py-2 rounded-md shadow-md hover:bg-gray-400 transition duration-300">
                Decrement
              </button>
            </div>
          </div>
        </h2>
      </div>
    </>
  );
}

export default App;
