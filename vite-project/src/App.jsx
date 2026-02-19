import React, { useState } from 'react'
import "./App.css";

const App = () => {
  const [value, setValue] = useState("");
  const [results, setResults] = useState([]);

  const fetchImages = async () => {
    if (!value) return;

    const res = await fetch(
      `https://api.unsplash.com/search/photos?query=${value}&client_id=Y5m4nyWA0veB9wE-pHObpDmM8hTSfPh7kSYxEq8UyAg`
    )
    const data = await res.json();
    setResults(data.results);
  }

  return (
    <div>
      <div className='App'>
        <div className='mydiv'>
          <span className='hearding'>search images...</span>
          <input type='text' placeholder='Search images...' className="input" value={value} onChange={(e) => setValue(e.target.value)} />
          <button className="btn" onClick={fetchImages}>Send</button>
        </div>
        <div className='gallery'>
          {results.map((item) => (
            <>
            <img key={item.id}
             src={item.urls.small}
             alt={item.name}
             className='item' />
             <p>UserName:{item.user.username}</p>
             <h1>Insta User:{item.user.instagram_username}</h1>
             </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App