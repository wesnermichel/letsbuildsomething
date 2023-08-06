import React, { useState } from "react";
import axios from "axios";

function Index() {
  const [inputType, setInputType] = useState("domain");
  const [inputValue, setInputValue] = useState("");
  const [email, setEmail] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleInputTypeChange = (e) => {
    setInputType(e.target.value);
    setInputValue("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send the form data to the server and handle the response
      const response = await axios.post("/api/form", {
        email,
        inputType,
        inputValue,
      });

      // TODO: Handle the response from the server
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div>
      <h2>Domain Availability Checker</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Enter your email"
            required
          />
        </div>
        <div>
          <label>
            <input
              type="radio"
              value="domain"
              checked={inputType === "domain"}
              onChange={handleInputTypeChange}
            />
            Check Domain Availability
          </label>
          <label>
            <input
              type="radio"
              value="keywords"
              checked={inputType === "keywords"}
              onChange={handleInputTypeChange}
            />
            Generate Domain Suggestions
          </label>
        </div>
        <div>
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder={
              inputType === "domain"
                ? "Enter domain (e.g., example.com)"
                : "Enter keywords (comma-separated)"
            }
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Index;
