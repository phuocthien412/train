export const Collections = () => {
  const Tags: string[] = ["All", "Clothing", "Food", "Accessories", "Home"];

  return (
    <div className="w-full rounded-lg bg-[#f7f7f7] p-6 md:p-16 shadow-lg">
      <h1 className="text-3xl font-poppins font-bold">Popular Collections</h1>

      <div className="mt-6 flex flex-wrap gap-2">
        {Tags.map((tag: string) => (
          <button
            key={tag}
            type="button"
            className="mb-2 cursor-pointer rounded-lg bg-white px-4 py-2 font-poppins font-semibold hover:text-blue-400"
          >
            {tag}
          </button>
        ))}
      </div>

      <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
        {/* Card 1 */}
        <div className="rounded-3xl bg-white p-6 border border-gray-100 shadow-sm">
          <img
            src="https://placewaifu.com/image/100"
            className="w-full aspect-video rounded-2xl object-cover"
            alt="Popular Collection"
          />

          <div className="mt-4 grid grid-cols-3 gap-4">
            <img
              src="https://placewaifu.com/image/200"
              className="w-full aspect-video rounded-xl object-cover"
              alt="Popular Collection"
            />
            <img
              src="https://placewaifu.com/image/300"
              className="w-full aspect-video rounded-xl object-cover"
              alt="Popular Collection"
            />
            <img
              src="https://placewaifu.com/image/400"
              className="w-full aspect-video rounded-xl object-cover"
              alt="Popular Collection"
            />
          </div>

          <div className="flex items-center pt-6">
            <p className="font-poppins text-2xl grow font-medium">People</p>
            <p className="font-poppins flex items-center text-gray-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-6 w-6 mr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
              144
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="rounded-3xl bg-white p-6 border border-gray-100 shadow-sm">
          <img
            src="https://placewaifu.com/image/101"
            className="w-full aspect-video rounded-2xl object-cover"
            alt="Popular Collection"
          />

          <div className="mt-4 grid grid-cols-3 gap-4">
            <img
              src="https://placewaifu.com/image/201"
              className="w-full aspect-video rounded-xl object-cover"
              alt="Popular Collection"
            />
            <img
              src="https://placewaifu.com/image/301"
              className="w-full aspect-video rounded-xl object-cover"
              alt="Popular Collection"
            />
            <img
              src="https://placewaifu.com/image/401"
              className="w-full aspect-video rounded-xl object-cover"
              alt="Popular Collection"
            />
          </div>

          <div className="flex items-center pt-6">
            <p className="font-poppins text-2xl grow font-medium">People</p>
            <p className="font-poppins flex items-center text-gray-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-6 w-6 mr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
              144
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="rounded-3xl bg-white p-6 border border-gray-100 shadow-sm">
          <img
            src="https://placewaifu.com/image/102"
            className="w-full aspect-video rounded-2xl object-cover"
            alt="Popular Collection"
          />

          <div className="mt-4 grid grid-cols-3 gap-4">
            <img
              src="https://placewaifu.com/image/202"
              className="w-full aspect-video rounded-xl object-cover"
              alt="Popular Collection"
            />
            <img
              src="https://placewaifu.com/image/302"
              className="w-full aspect-video rounded-xl object-cover"
              alt="Popular Collection"
            />
            <img
              src="https://placewaifu.com/image/402"
              className="w-full aspect-video rounded-xl object-cover"
              alt="Popular Collection"
            />
          </div>

          <div className="flex items-center pt-6">
            <p className="font-poppins text-2xl grow font-medium">People</p>
            <p className="font-poppins flex items-center text-gray-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-6 w-6 mr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
              144
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
