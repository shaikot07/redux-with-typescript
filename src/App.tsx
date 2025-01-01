import { useDispatch,  } from "react-redux";
import "./index.css"; // Import Tailwind CSS
import { decrement, increment, reset } from "./redux/features/counter/CounterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hook";

function App() {

const dispatch =useAppDispatch()
const {count} =useAppSelector((state)=>state.counter)


const handleIncrement=(amount:number)=>{
  dispatch(increment(amount))
}
const handleDecrement=()=>{
  dispatch(decrement())
}
const handleReset=()=>{
  dispatch(reset())
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
              <button onClick={()=> handleIncrement(5)} className="bg-pink-600 mr-5 text-white px-4 py-2 rounded-md shadow-md hover:bg-purple-700 transition duration-300">
                Increment By 5
              </button>
              <button onClick={()=> handleIncrement(1)} className="bg-purple-600 mr-5 text-white px-4 py-2 rounded-md shadow-md hover:bg-purple-700 transition duration-300">
                Increment
              </button>
              <button onClick={ handleDecrement} className="bg-gray-300 mr-5 text-gray-800 px-4 py-2 rounded-md shadow-md hover:bg-gray-400 transition duration-300">
                Decrement
              </button>
              <button onClick={handleReset} className="bg-green-800 text-white px-4 py-2 rounded-md shadow-md hover:bg-gray-400 transition duration-300">
               Reset 
              </button>
            </div>
          </div>
        </h2>
      </div>
    </>
  );
}

export default App;
