import React from "react";
import SearchBar from "./components/SearchBar/SearchBarContainer";
import Post from "./components/PostContainer/Post"

import "./App.css";

function App() {
  return (
    <div className="App">
      <SearchBar />
      <p>
        NASA Photo of the Day! <span role="img" aria-label='go!'>🚀</span>!
      </p>
      <Post />
    </div>
    
  );
}

export default App;
