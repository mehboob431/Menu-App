import React, { useState } from 'react';
import { useFormik } from 'formik';

const OnlinePayment = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isEasyPaisaOpen, setIsEasyPaisaOpen] = useState(false);
  const [isJazzCashOpen, setIsJazzCashOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  const toggleEasyPaisa = () => {
    setIsEasyPaisaOpen(!isEasyPaisaOpen);
  };

  const toggleJazzCash = () => {
    setIsJazzCashOpen(!isJazzCashOpen);
  };

  // Formik setup
  const formik = useFormik({
    initialValues: {
      easyPaisaAccount: '',
      jazzCashAccount: '',
    },
    onSubmit: (values) => {
      console.log('Form data', values);
    },
  });

  return (
    <div id="accordion-collapse" data-accordion="collapse">
      <form onSubmit={formik.handleSubmit}>
        <h2 id="accordion-collapse-heading-1">
          <button
            type="button"
            className="flex items-center justify-between w-full p-5 text-white"
            onClick={toggleAccordion}
            aria-expanded={isOpen}
            aria-controls="accordion-collapse-body-1"
          >
            <span>Online Payment</span>
            <svg
              className={`w-3 h-3 transform ${isOpen ? 'rotate-0' : 'rotate-180'} shrink-0`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M5 1l4 4H1L5 1z" : "M1 5l4-4 4 4H1z"} // Change direction based on open state
              />
            </svg>
          </button>
        </h2>
        <div
          id="accordion-collapse-body-1"
          className={`${isOpen ? 'block' : 'hidden'}`}
          aria-labelledby="accordion-collapse-heading-1"
        >
          <div className="p-5 bg-gray-800">
            {/* EasyPaisa Sub-Accordion */}
            <h3>
              <button
                type="button"
                className="flex items-center justify-between w-full p-3 text-white"
                onClick={toggleEasyPaisa}
                aria-expanded={isEasyPaisaOpen}
                aria-controls="easyPaisa-content"
              >
                <span>EasyPaisa</span>
                <svg
                  className={`w-3 h-3 transform ${isEasyPaisaOpen ? 'rotate-0' : 'rotate-180'} shrink-0`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d={isEasyPaisaOpen ? "M5 1l4 4H1L5 1z" : "M1 5l4-4 4 4H1z"} // Change direction based on open state
                  />
                </svg>
              </button>
            </h3>
            <div
              id="easyPaisa-content"
              className={`${isEasyPaisaOpen ? 'block' : 'hidden'} p-3`}
            >
              <p className="text-white">
                Set your Easypaisa account as the default method and ensure it's active with sufficient balance.
              </p>
              <label className="block text-white p-2">
                Easypaisa Account No:
                <input
                  type="text"
                  name="easyPaisaAccount"
                  onChange={formik.handleChange}
                  value={formik.values.easyPaisaAccount}
                  className="mt-1 p-2 w-full bg-gray-700 text-white rounded-md"
                />
              </label>
            </div>

            {/* JazzCash Sub-Accordion */}
            <h3>
              <button
                type="button"
                className="flex items-center justify-between w-full p-3 text-white mt-2"
                onClick={toggleJazzCash}
                aria-expanded={isJazzCashOpen}
                aria-controls="jazzCash-content"
              >
                <span>JazzCash</span>
                <svg
                  className={`w-3 h-3 transform ${isJazzCashOpen ? 'rotate-0' : 'rotate-180'} shrink-0`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d={isJazzCashOpen ? "M5 1l4 4H1L5 1z" : "M1 5l4-4 4 4H1z"} // Change direction based on open state
                  />
                </svg>
              </button>
            </h3>
            <div
              id="jazzCash-content"
              className={`${isJazzCashOpen ? 'block' : 'hidden'} p-3`}
            >
              <p className="text-white">
                For Jazz/Warid, unlock your phone to enter your MPIN in the prompt.
              </p>
              <label className="block text-white p-2">
                JazzCash Account No:
                <input
                  type="text"
                  name="jazzCashAccount"
                  onChange={formik.handleChange}
                  value={formik.values.jazzCashAccount}
                  className="mt-1 p-2 w-full bg-gray-700 text-white rounded-md"
                />
              </label>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default OnlinePayment;
