import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

import { EmailVariables } from "../constants/constant";
import { motion } from "framer-motion";

//Format to sendForm :   YOUR_SERVICE_ID:"",YOUR_TEMPLATE_ID:"",YOUR_PUBLIC_KEY:""

export const CustomEmailJS = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        EmailVariables.YOUR_SERVICE_ID,
        EmailVariables.YOUR_TEMPLATE_ID,
        form.current,
        {
          publicKey: EmailVariables.YOUR_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="flex flex-col w-full" style={{ paddingRight: "18px" }}>
      <form ref={form} onSubmit={sendEmail}>
        <div className="">
          {/* <label>Name</label> */}

          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            style={{
              width: "100%",
              margin: "10px",
              height: "40px",
              borderRadius: "10px",
              backgroundColor: "black",
              textAlign: "center",
              color: "white",
              outlineColor: "white",
              borderWidth: "1px",
            }}
            required
          />
        </div>
        <div>
          {/* <label>Email</label> */}
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            style={{
              width: "100%",
              margin: "10px",
              height: "40px",
              borderRadius: "10px",
              backgroundColor: "black",
              borderStyle: "solid",
              textAlign: "center",
              color: "white",
              outlineColor: "white",
              borderWidth: "1px",
            }}
            required
          />
        </div>
        <div>
          {/* <label>Message</label> */}
          <input
            name="message"
            placeholder="Write a message ..."
            style={{
              width: "100%",
              margin: "10px",
              height: "40px",
              borderRadius: "10px",
              backgroundColor: "black",
              borderStyle: "solid",
              textAlign: "center",
              color: "white",
              outlineColor: "white",
              borderWidth: "1px",
            }}
          />
        </div>
        <motion.button
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.2 },
            backgroundColor: "white",
            color: "black",
          }}
          whileTap={{ scale: 0.9 }}
          type="submit"
          value="Send"
          style={{
            width: "100%",
            marginLeft: "9px",
            padding: "12px",
            borderRadius: "12px",
            fontWeight: "bold",
            marginTop: "24px",
            padding: "12px",
            outlineColor: "white",
            borderWidth: "1px",
            // padding: "20px",
            hoveColor: "green",
            fontSize: "18px",
          }}
        >
          Submit
        </motion.button>
      </form>
    </div>
  );
};
