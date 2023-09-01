import { ChevronDownIcon } from "@heroicons/react/20/solid";

export default function Contact() {
  return (
    <div
      id="contact"
      className="isolate bg-[#3f5d49] px-6 py-24 sm:py-32 lg:px-8 text-[#f5f2e9]"
    >
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Get in Touch With Us
        </h2>
        <p className="mt-2 text-lg leading-8">
          We'd love to hear from you. Fill out the form below to reach out.
        </p>
      </div>
      <form
        action="https://api.staticforms.xyz/submit"
        method="POST"
        className="mx-auto mt-16 max-w-xl sm:mt-20"
      >
        <input
          type="hidden"
          name="accessKey"
          value="1217782b-9c19-421c-8df2-dadf6982a63f"
        />
        {/* Change redirect to https://edgewoodcontracting.com before deploying */}
        <input type="hidden" name="redirectTo" value="https://merry-figolla-474f54.netlify.app/" />
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          {/* First Name */}
          <div>
            <label
              htmlFor="first-name"
              className="block text-sm font-semibold leading-6"
            >
              First name
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="first-name"
                id="first-name"
                autoComplete="given-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-black placeholder:black focus:ring-2 focus:ring-inset focus:ring-[#f5f2e9] sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          {/* Last Name */}
          <div>
            <label
              htmlFor="last-name"
              className="block text-sm font-semibold leading-6"
            >
              Last name
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="last-name"
                id="last-name"
                autoComplete="family-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-black placeholder:black focus:ring-2 focus:ring-inset focus:ring-[#f5f2e9] sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          {/* Email */}
          <div className="sm:col-span-2">
            <label
              htmlFor="email"
              className="block text-sm font-semibold leading-6"
            >
              Email
            </label>
            <div className="mt-2.5">
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-black placeholder:black focus:ring-2 focus:ring-inset focus:ring-[#f5f2e9] sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          {/* Phone Number */}
          <div className="sm:col-span-2">
            <label
              htmlFor="phone-number"
              className="block text-sm font-semibold leading-6"
            >
              Phone number
            </label>
            <div className="relative mt-2.5 flex">
              <select
                id="country"
                name="$phoneNumber"
                className="block rounded-md border-0 px-3 py-2 text-black placeholder:black focus:ring-2 focus:ring-inset focus:ring-[#f5f2e9] sm:text-sm sm:leading-6 h-[38px] leading-[38px] min-w-[70px] mr-2"
              >
                <option>US</option>
                <option>CA</option>
                <option>EU</option>
              </select>

              <input
                type="tel"
                name="$phoneNumber"
                id="phone-number"
                autoComplete="tel"
                className="block w-full rounded-md border-0 px-3.5 py-2 pl-4 text-black placeholder:black focus:ring-2 focus:ring-inset focus:ring-[#f5f2e9] sm:text-sm sm:leading-6 h-[38px] leading-[38px]"
              />
            </div>
          </div>
          {/* Message */}
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block text-sm font-semibold leading-6"
            >
              Message
            </label>
            <div className="mt-2.5">
              <textarea
                name="message"
                id="message"
                rows={4}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-black placeholder:black focus:ring-2 focus:ring-inset focus:ring-[#f5f2e9] sm:text-sm sm:leading-6"
              ></textarea>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <button
            type="submit"
            className="block w-full rounded-md bg-[#f5f2e9] px-3.5 py-2.5 text-center text-sm font-semibold text-[#3f5d49] focus:ring-2 focus:ring-inset focus:ring-[#f5f2e9]"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
}
