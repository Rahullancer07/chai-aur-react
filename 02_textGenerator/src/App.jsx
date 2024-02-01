import { useCallback, useState, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSpecialChars, setIncludeSpecialChars] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const copyPasswordToClipboard = useCallback(() => {
    // to show text selected effect
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  const generatePassword = useCallback(
    function () {
      let pass = "";
      let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

      if (includeNumbers) {
        str += "1234567890";
      }
      if (includeSpecialChars) {
        str += "!@#$%^&*(){}?|";
      }

      for (let i = 1; i <= length; i++) {
        const randomIndex = Math.floor(Math.random() * str.length + 1);
        pass += str.charAt(randomIndex);
      }

      setPassword(pass);
    },
    [length, includeNumbers, includeSpecialChars, setPassword]
  );

  useEffect(() => {
    generatePassword();
  }, [length, includeNumbers, includeSpecialChars, generatePassword]);

  return (
    <div className="w-full h-screen py-10">
      <div className="flex flex-wrap justify-center flex-col bg-gray-500 max-w-2xl mx-auto px-10 py-2 rounded-xl">
        <h1 className="text-center text-2xl text-black mb-5">
          Password Generator
        </h1>
        <div className="flex w-full">
          <input
            type="text"
            value={password}
            readOnly
            className="text-black rounded-l-xl h-10 placeholder:pl-5 pl-5 font-semibold w-full"
            placeholder="Your password"
            ref={passwordRef}
          ></input>
          <button
            onClick={copyPasswordToClipboard}
            className="outline-none bg-blue-500 text-white shrink-0 py-0.5 px-3 rounded-r-xl "
          >
            Copy
          </button>
        </div>
        <div className="mt-10 flex flex-row items-center">
          <input
            type="range"
            value={length}
            min={6}
            max={20}
            onChange={(e) => setLength(e.target.value)}
          />
          <label
            htmlFor="range"
            className="ml-3 text-orange-700 font-semibold text-lg"
          >
            Length : {length}
          </label>
          <input
            type="checkbox"
            value={includeNumbers}
            onChange={() => setIncludeNumbers((prev) => !prev)}
            className="ml-10"
          />
          <label
            htmlFor="includeNumbers"
            className="ml-3  text-orange-700 font-semibold text-lg"
          >
            Numbers
          </label>
          <input
            type="checkbox"
            value={includeSpecialChars}
            onChange={() => setIncludeSpecialChars((prev) => !prev)}
            className="ml-10"
          />
          <label
            htmlFor="includeSpecialChars"
            className="ml-3  text-orange-700 font-semibold text-lg"
          >
            Special Characters
          </label>
        </div>
      </div>
    </div>
  );
}

export default App;
