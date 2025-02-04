import React, { useState ,useRef } from "react";
// import axios from "axios";
import Buttons from "./Buttons";
import Counter from "./Counter";
import CopyPrompt from "./CopyPrompt";
import PromptBox from "./PromptBox";
import { GoogleGenerativeAI } from "@google/generative-ai";


export default function TextForm(props) {
  const [apiResponse, setApiResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [text, setText] = useState("");
  const [language, setLanguage] = useState("English");
  const promptBoxRef = useRef(null);
  // const { GoogleGenerativeAI } = require("@google/generative-ai");
  // Access your API key as an environment variable (see "Set up your API key" above)
 const API_KEY = "AIzaSyDaP301UPruGVR-E34IgTl3bUpAlF5e80Q"
 const genAI = new GoogleGenerativeAI(API_KEY);

 
 
  

  const handleInputChange = (event) => {
    setText(event.target.value);
  };

  const languageHandler = (lang) => {
    setLanguage(lang);
  };

  // const makeApiRequest = async (prompt) => {
  //   try {
  //     promptBoxRef.current.scrollIntoView({ behavior: "smooth" });
  //     const response = await axios.post("http://localhost:5000/api", { prompt });
  //     return response.data.response;
  //   } catch (error) {
  //     return "Something went wrong. Please try again.";
  //   }
  // };
  const makeApiRequest = async (prompt) => {
    // Choose a model that's appropriate for your use case.
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});
    try {
      promptBoxRef.current.scrollIntoView({ behavior: "smooth" });
      const result = await model.generateContent(prompt);
     const response = result.response;
      console.log(response.text());
      return response.text();
      
    } catch (error) {
      return "Something went wrong. Please try again.";
    }
  };
  
  
  
  
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const prompt = `Give the answer of the Question and  Word : ${text}`;
   
    try {
      const response = await makeApiRequest(prompt);
      props.showAlert({ type : "Successfully" , message : "Genrate Information  With Google Gamini ai"} );
      setApiResponse(response);
    } catch (error) {
      setApiResponse("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  

  const handleParagraph = async (e) => {
    e.preventDefault();
    setLoading(true);
 
    const prompt = `Generate 4, 1 line paragraphs and every paragraph starts with a new line for given text: ${text}.`;
    console.log(prompt);
    try {
      const response = await makeApiRequest(prompt);
      props.showAlert({ type : "Successfully" , message : "Genrate Pragraph  With Google Gamini ai"} );
      
      setApiResponse(response);
    } catch (error) {
      setApiResponse("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleTranslate = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    const prompt = `Please translate the following text into ${language}: ${text}`;
    console.log(prompt);
    try {
      const response = await makeApiRequest(prompt);
      props.showAlert({ type : "Successfully" , message : " Translate  With Google Gamini ai"} );
      setApiResponse(response);
    } catch (error) {
      setApiResponse("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleNotes = async (e) => {
    e.preventDefault();
    setLoading(true);
 
    const prompt = `Check the below condition for in this text: ${text}.
      The Text  Word Count  should be greater than 100 and less than 1000. 
      if this Condition is true - 
      " Generate Notes  and Every Notes Start with  Bullet point   from the given text: ${text}."
      Otherwise, Greerate Wrning - " The Word is Greater Than 100 and Less Than !1000." 
      `;
      console.log(prompt);
    try {
      const response = await makeApiRequest(prompt);
      props.showAlert({ type : "Successfully" , message : "Genrate Notes  With Google Gamini ai"} );
      setApiResponse(response);
    } catch (error) {
      setApiResponse("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="container my-3">
        <h3
          className={`text-center ${
            props.mode === "Dark" ? "main-heading-d" : "main-heading-l"
          }`}
        >
          {props.heading}
        </h3>
      </div>

      <Buttons
        languageHandler={languageHandler}
       
        handleParagraph={handleParagraph}
        handleTranslate={handleTranslate}
        handleNotes={handleNotes}
        text={text}
        mode={props.mode}
        setText={setText}
        showAlert={props.showAlert}
      />

      <div className="mb-2 container">
        <div className="row">
          <div className="col-12">
            <textarea
              className={`form-control ${
                props.mode === "Dark" ? "form-control-d" : "form-control-l"
              }`}
              id="myBox"
              rows="8"
              value={text}
              onChange={handleInputChange}
              placeholder="Enter text here"
            />
          </div>
        </div>
      </div>

      <Counter text={text} mode={props.mode}  handleSubmit = {handleSubmit} />

      <CopyPrompt  showAlert={props.showAlert} apiResponse = {apiResponse} mode={props.mode}   />

      <PromptBox ref = {promptBoxRef} loading ={loading}  mode={props.mode} apiResponse={apiResponse} />
    </>
  );
}




