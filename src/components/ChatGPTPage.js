import { useState } from "react";
const ChatGPTPage = () => {
  const [results, setResults] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();
    const query = e.target.value;
    fetch(`https://api.openai.com/v1/chatgpt/generate`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.REACT_APP_OPENAI_SECRET_KEY}`,
      },
      body: JSON.stringify({
        prompt: query,
        max_tokens: 1024,
        temperature: 0.5,
      }),
    })
      .then((response) => response.json())
      .then((data) => setResults(data.text));
  };

  return (
    <div className="popup-box">
      <div className="box">
        <form>
          <input type="text" onChange={handleSearch} />
          <button type="submit">Search</button>
        </form>
        <div style={{ width: "50%", overflow: "scroll" }}>
          {results.map((result) => (
            <p key={result}>{result}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChatGPTPage;
