import ContainerBody from "@/components/layouts/SectionPage/ContainerBody.jsx";
import React from "react";

export default function ContactView() {
  return (
    <ContainerBody classname={"py-5"}>
      <div className="container pt-20">
        <div className="w-full px-4" data-aos="zoom-in-up">
          <div className="mx-auto mb-16 max-w-xl text-center">
            <h4 className="mb-2 text-lg font-semibold uppercase text-paragraph dark:text-secondary">
              Contact
            </h4>
            <h2 className="mb-4 text-3xl font-bold text-secondary dark:text-primary sm:text-4xl lg:text-5xl">
              Say Hello
            </h2>
            <p className="text-medium font-medium text-paragraph dark:text-secondary md:text-lg">
              email-[at]-gmail-[dot]-com.
            </p>
          </div>
        </div>
        <form action="https://formspree.io/f/mknlbgyn" method="post">
          <div className="w-full lg:mx-auto lg:w-2/3" data-aos="zoom-in-left">
            <div className="mb-8 w-full px-4">
              <label
                htmlFor="name"
                className="text-base font-bold text-secondary dark:text-primary"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter Your Name..."
                className="w-full rounded-md bg-slate-300 p-3 text-dark focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>
            <div className="mb-8 w-full px-4">
              <label
                htmlFor="email"
                className="text-base font-bold text-secondary dark:text-primary"
              >
                <span className="after:ml-0.5 after:text-red-600 after:content-['*']">
                  E-mail
                </span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter Your E-mail..."
                className="peer w-full rounded-md bg-slate-300 p-3 text-dark invalid:text-red-600 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary invalid:focus:border-red-700 invalid:focus:ring-red-700"
              />
              <p className="invisible m-1 text-sm text-red-600 peer-invalid:visible">
                E-mail tidak valid !
              </p>
            </div>
            <div className="mb-8 w-full px-4">
              <label
                htmlFor="Message"
                className="text-base font-bold text-secondary dark:text-primary"
              >
                Message
              </label>
              <textarea
                type="text"
                id="Message"
                name="message"
                placeholder="Please leave a message here..."
                className="h-32 w-full rounded-md bg-slate-300 p-3 text-dark focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              ></textarea>
            </div>
            <div className="w-full px-4">
              <button
                name="submit"
                className="w-full rounded-full bg-secondary dark:bg-primary py-3 px-8 text-base font-semibold text-white transition duration-500 hover:opacity-80 hover:shadow-lg"
              >
                Send it !
              </button>
            </div>
          </div>
        </form>
      </div>
    </ContainerBody>
  );
}
