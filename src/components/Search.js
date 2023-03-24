import { useState } from "react";



const handleSubmit = (e) => {
  e.preventDefault();
//   console.log("testing");
  //   <Route path="/chatgpt" component={ChatGPTPage} />
//   setShowPopup(!showPopup);
//    <ChatGPTPage />;
};

const Search = () => {
    const [showPopup, setShowPopup] = useState(false);
  return (
    <header>
      <h2 className="header__title">Find it. Tour it. Own it.</h2>
      <form onSubmit={handleSubmit}>
        {/* <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} /> */}
        {/* <button type="submit">Search</button> */}
        <input
          type="text"
          className="header__search"
          placeholder="Enter an address, neighborhood, city, or ZIP code"
          onKeyDown={() => setShowPopup(!showPopup)}
        />
        {/* {showPopup && (
        <ChatGPTPage />
      )} */}
        {/* <Route path="/chatgpt" component={ChatGPTPage} /> */}
      </form>
    </header>
  );
};

export default Search;
