import React from "react";
import Job from "./Job";

const jobs = [
  {
    id: 1,
    title: "Furniture",
    bgColor: "bg-red-100",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="h-5 w-5 text-black-500"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
        />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Property",
    bgColor: "bg-blue-100",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="h-5 w-5 text-black-500"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 10.5v11.25c0 .621.504 1.125 1.125 1.125h15.75c.621 0 1.125-.504 1.125-1.125V10.5M7.5 21v-6.75h9V21M3 10.5l9-9 9 9"
        />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Job",
    bgColor: "bg-green-100",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="h-5 w-5 text-black-500"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M16.5 10.5V6.75A2.25 2.25 0 0 0 14.25 4.5h-4.5A2.25 2.25 0 0 0 7.5 6.75v3.75m9 0H7.5m9 0v7.5a2.25 2.25 0 0 1-2.25 2.25h-4.5A2.25 2.25 0 0 1 7.5 18V10.5m0 0h9"
        />
      </svg>
    ),
  },
  {
    id: 4,
    title: "Travel",
    bgColor: "bg-yellow-100",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="h-5 w-5 text-black-500"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.59 14.37a5.25 5.25 0 1 0-7.18 0m7.18 0a5.25 5.25 0 0 1-7.18 0m7.18 0l2.83 2.83m-10.01-2.83l-2.83 2.83"
        />
      </svg>
    ),
  },
  {
    id: 5,
    title: "Furniture",
    bgColor: "bg-red-100",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="h-5 w-5 text-black-500"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
        />
      </svg>
    ),
  },
  {
    id: 6,
    title: "Property",
    bgColor: "bg-blue-100",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="h-5 w-5 text-black-500"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 10.5v11.25c0 .621.504 1.125 1.125 1.125h15.75c.621 0 1.125-.504 1.125-1.125V10.5M7.5 21v-6.75h9V21M3 10.5l9-9 9 9"
        />
      </svg>
    ),
  },
  {
    id: 7,
    title: "Job",
    bgColor: "bg-green-100",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="h-5 w-5 text-black-500"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M16.5 10.5V6.75A2.25 2.25 0 0 0 14.25 4.5h-4.5A2.25 2.25 0 0 0 7.5 6.75v3.75m9 0H7.5m9 0v7.5a2.25 2.25 0 0 1-2.25 2.25h-4.5A2.25 2.25 0 0 1 7.5 18V10.5m0 0h9"
        />
      </svg>
    ),
  },
  {
    id: 8,
    title: "Travel",
    bgColor: "bg-yellow-100",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="h-5 w-5 text-black-500"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.59 14.37a5.25 5.25 0 1 0-7.18 0m7.18 0a5.25 5.25 0 0 1-7.18 0m7.18 0l2.83 2.83m-10.01-2.83l-2.83 2.83"
        />
      </svg>
    ),
  },
];

const Joblist: React.FC = () => {
  return (
    <div className="w-[40rem] rounded-md bg-white p-16">
      <div className="flex gap-2">
        <div className="relative grow rounded-md border-gray-300 border">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
          <input
            type="text"
            className="w-full py-2 pl-10 pr-4 outline-none rounded-md"
            placeholder="Search for a part-time job"
          />
        </div>
        <button
          className="rounded-md bg-[#281A51] px-4 py-2 text-white flex items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-5 w-5 mr-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z"
            />
          </svg>
          Use map
        </button>
      </div>
      <div className="mt-4 grid grid-cols-4 gap-4">
        {jobs.map((job) => (
          <Job
            key={job.id}
            title={job.title}
            bgColor={job.bgColor}
            icon={job.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default Joblist;
