import { Input } from "./Input";
import { Review } from "./Review";

export const ReviewForm = () => {
  return (
    <div className="w-[42rem] bg-white p-16 ">
      <h1 className="font-poppins text-2xl font-black">Overall rating</h1>
      <Review />
      <Input
        title="Review title"
        placeholder="Example: Easy to use"
        type="text"
      />

      <p className="mt-6 text-sm">
        Would you recommend this product to a friend?
      </p>
      <div className="flex items-center gap-x-6 mt-2">
        <div className="flex items-center gap-x-2">
          <input
            type="radio"
            id="yes"
            name="recommend"
            value="yes"
            className="w-4 h-4"
          />
          <label htmlFor="yes" className="text-sm">
            Yes
          </label>
        </div>
        <div className="flex items-center gap-x-2">
          <input
            type="radio"
            id="no"
            name="recommend"
            value="no"
            className="w-4 h-4"
          />
          <label htmlFor="no" className="text-sm">
            No
          </label>
        </div>
      </div>

      <Input
        title="Product review"
        placeholder="Example: Since I bought this a month ago, it has been used a lot. What I like best/what is worst about this product is ..."
        type="textarea"
      />

      <div className="flex gap-x-4">
        <div className="grow">
          <Input title="Nickname" placeholder="Example: bob27" type="text" />
        </div>
        <div className="grow">
          <Input
            title="Email address (will not be published)"
            placeholder="Example: your@email.com"
            type="text"
          />
        </div>
      </div>

      <div className="flex items-center gap-x-2 mt-6">
        <input type="radio" id="terms" name="terms" className="w-4 h-4" />
        <label htmlFor="terms" className="text-sm">
          I accept the terms and conditions
        </label>
      </div>

      <p className="text-sm text-gray-600 mt-4">
        You will be able to receive emails in connection with this review (eg if
        others comment on your review). All emails contain the option to
        unsubscribe. We can use the text and star rating from your review in
        other marketing.
      </p>

      <button className="rounded-md bg-[#121633] px-6 py-4 text-white mt-6">
        Submit product review
      </button>
    </div>
  );
};
