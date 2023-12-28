import style from "./search.module.css";
import { MdSearch, MdCalendarMonth, MdPerson } from "react-icons/md";

const Search = () => {
  return (
    <div className="grid grid-cols-4 w-full md:w-[60%] h-[120px] border-2 rounded-lg border-[#212A39] bg-[#16202F]">
      <div className="col-span-4 mx-5">
        <div className="w-[100%] border-b py-3 border-[#425472] flex">
          <MdSearch style={{ color: "#425472", width: "2em", height: "2em" }} />
          <input
          type="text"
            className="w-full ml-2 bg-transparent placeholder-[#425472] font-light"
            placeholder="find your desired stay.."
          />
        </div>
        <div className="flex justify-between py-3">
        <div className="flex pr-4 border-r border-[#425472]">
          <MdCalendarMonth
            style={{ color: "#425472", width: "1em", height: "1.5em" }}
          />
          <p className="font-light text-[#425472]">from</p>
        </div>
        <div className="flex pr-4 border-r border-[#425472]">
        <MdCalendarMonth
            style={{ color: "#425472", width: "1em", height: "1.5em" }}
          />
          <p className="font-light text-[#425472]">to</p>
        </div>
        <div className="flex">
        <MdPerson
            style={{ color: "#425472", width: "1em", height: "1.5em" }}
          />
          <p className="font-light text-[#425472]">count</p>
        </div>
        </div>
        
      </div>

      {/* <button className="w-full bg-gray-950 px-3">
        <MdSearch style={{ color: "#425472", width: "3em", height: "3em" }} />
      </button> */}
    </div>
  );
};

export default Search;
