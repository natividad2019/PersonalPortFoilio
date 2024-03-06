import React from "react";

const Contact = () => {
  return (
    <div>
      <div>
        <div>
          <p>Contact</p>
          <p>Submit the form below to get in touch with me</p>
        </div>
        <div>
          <form action="">
            <div className="mb-4">
              <label htmlFor="name" className="block text-white">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              />
               <input
                type="text"
                id="email"
                name="name"
                placeholder="Enter your email"
                className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              />
              

            </div>
            {/* Add more form fields here */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
