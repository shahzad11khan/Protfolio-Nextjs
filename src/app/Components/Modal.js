import React, { useRef, useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Modal = ({ isclose }) => {
  const [formData, setFormData] = useState({
    SenderEmail: "",
    SenderMessage: "",
  });
  const modalRef = useRef();

  const handleClose = (e) => {
    if (modalRef.current === e.target) {
      isclose();
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      isclose();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const sendMessage = async () => {
    // Assuming formData is an object containing SenderEmail and SenderMessage properties
    const _obj = {
      SenderEmail: formData.SenderEmail,
      SenderMessage: formData.SenderMessage,
    };

    console.log(_obj);

    // Here you can add your logic to send the message, e.g., API call
    try {
      const response = await fetch(`/api/messages`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(_obj),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log(data);
      toast.success("Message submitted successfully");
      isclose();
      // Reset form data after successful sending
      setFormData({
        SenderEmail: "",
        SenderMessage: "",
      });
    } catch (error) {
      console.error("Error fetching or parsing messages:", error);
      // Handle error gracefully, you might want to display an error message to the user
    }
  };

  return (
    <div
      ref={modalRef}
      onClick={handleClose}
      className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center"
    >
      <div className="mt-10 flex flex-col gap-4 text-white bg-slate-400 rounded-md p-8 w-96">
        <button className="self-end" onClick={isclose}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <h2 className="text-xl font-semibold text-gray-950">Contact me</h2>
        <div>
          <label htmlFor="email" className="text-gray-950">
            Sender Email:
          </label>
          <br />
          <input
            type="email"
            id="email"
            name="SenderEmail"
            className="mt-1 px-3 py-1.5 w-full rounded-md border-gray-400 border focus:outline-none focus:border-indigo-500 text-black"
            value={formData.SenderEmail}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="message" className="text-gray-950">
            Sender Message:
          </label>
          <textarea
            id="message"
            name="SenderMessage"
            rows="4"
            className="mt-1 px-3 py-1.5 w-full rounded-md border-gray-400 border focus:outline-none focus:border-indigo-500 text-black"
            value={formData.SenderMessage}
            onChange={handleInputChange}
          ></textarea>
        </div>
        <button
          className="border-2 bg-white text-black p-2 rounded-md hover:shadow-md hover:shadow-cyan-400"
          onClick={sendMessage}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Modal;
