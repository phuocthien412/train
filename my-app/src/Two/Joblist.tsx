import React from "react";

const Joblist: React.FC = () => {
	return (
		<div className="w-[40rem] rounded-md bg-white p-16">
            <div className="flex items-center">
                <input type="text" 
                className=" mr-2 w-full rounded-md border-gray-300 px-4 py-2"
                placeholder="Search for a job..."
                />
              <button className="rounded-md bg-blue-500 px-4 py-2 text-white
              hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
              ">
                Search
              </button>
            </div>
        </div>
	);
};

export default Joblist;

