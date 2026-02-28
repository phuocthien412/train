interface InputProps {
  title: string;
  placeholder: string;
  type: "text" | "textarea";
}

export const Input = (props: InputProps) => {
  return (
    <div className="mt-4">
      <label
        className="font-poppins block text-sm font-semibold"
        htmlFor={props.type === "textarea" ? "review-textarea" : "review-input"}
      >
        {props.title}
      </label>
      {props.type === "textarea" ? (
        <textarea
          id="review-textarea"
          placeholder={props.placeholder}
          className="mt-1 w-full rounded-md border-2 p-4 py-3 min-h-[100px] resize"
        />
      ) : (
        <div className="relative">
          <input
            id="review-input"
            placeholder={props.placeholder}
            className="mt-1 w-full rounded-md border-2 p-4 py-3 pr-12"
          />
          <button className="absolute right-3 top-1/2 -translate-y-1/2 p-1 bg-gray-200 rounded">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};
