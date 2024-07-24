import React, { useState } from "react";

function Dropdown(props) {
 

 
  
   
    const [language, setLanguage] = useState(props.defaultValue || "English");

    const languageCodes = ["Afrikaans", "Albanian",
      "Arabic", "Armenian",
      "Basque", "Bengali",
      "Bulgarian", "Catalan",
      "Cambodian", "Chinese (Mandarin)",
      "Croatian", "Czech", "Danish",
      "Dutch", "English", "Estonian",
      "Fiji", "Finnish", "French",
      "Georgian", "German", "Greek",
      "Gujarati", "Hebrew", "Hindi",
      "Hungarian", "Icelandic",
      "Indonesian", "Irish",
      "Italian", "Japanese",
      "Javanese", "Korean",
      "Latin", "Latvian",
      "Lithuanian", "Macedonian", "Malay", "Malayalam", "Maltese", 
      "Maori", "Marathi", "Mongolian", "Nepali", "Norwegian", 
      "Persian", "Polish", "Portuguese", "Punjabi", "Quechua", 
      "Romanian", "Russian", "Samoan", "Serbian", "Slovak", 
      "Slovenian", "Spanish", "Swahili", "Swedish", "Tamil", 
      "Tatar", "Telugu", "Thai", "Tibetan", "Tonga",
      "Turkish", "Ukrainian", "Urdu", "Uzbek",
      "Vietnamese", "Welsh", "Xhosa",];
  
  
    const handleLanguageChange = (event) => {
      const selectedLanguage = event.target.value;
      setLanguage(selectedLanguage);
      props.languageHandler(selectedLanguage);
    };


  return (
    <select
      className={`form-select ${props.mode === "Dark" ? "select-d" : "select-l"}`}
      aria-label="Default select example"
      value={language}
      onChange={handleLanguageChange}
    >
      <option value="">Language</option>
      {languageCodes.map((language) => (
        <option value={language} key={language}>
          {language}
        </option>
      ))}
    </select>
  );
}

export default Dropdown;