import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";

function Meme() {
  const [meme, setMeme] = useState({
    topText: "I am the",
    bottomText: "Baddest Bitch!!",
    randomImg: "../img/shrek-meme.jpg"
  });
  const [allMemes, setAllMemes] = useState([]);
  const [loading, setLoading] = useState(true)

  const fetchImages = () => {
    return fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => {
        setAllMemes(data.data.memes);
        setLoading(false)
      })
       
      
  };

  useEffect(() => {
    fetchImages(); 
  }, [loading]);

  // Generate random memes
  const randomMemeImg = () => {
    setLoading(prevLoad => !prevLoad)
    const randomNum = Math.floor(Math.random() * allMemes.length)
    const url = allMemes[randomNum].url
    setMeme(prevMeme => ({
      ...prevMeme,
      randomImg: url
    }))
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setMeme(prevMeme => ({
      ...prevMeme,
      [name]: value
    }))
  }

  return (
    <section className="meme-container">
      <div className="text-container">
        <input
          type="text"
          id="top-text"
          placeholder="Top text"
          name="topText"
          value={meme.topText}
          onChange={handleInputChange}
        />
        <input
          type="text"
          id="bottom-text"
          placeholder="Bottom text"
          name="bottomText"
          value={meme.bottomText}
          onChange={handleInputChange}
        />
      </div>

      <button onClick={randomMemeImg}>Get a new meme image 🖼</button>
      <div className="meme-wrapper">
        {loading ? (
          <div className="spinner-container">
            <Spinner animation="border" />
          </div>
        ) : (
          <div className="meme">
            <img src={meme.randomImg} alt="meme-img" />
            <p className="top-text">{meme.topText}</p>
            <p className="bottom-text">{meme.bottomText}</p>
          </div>
        )}
      </div>
    </section>
  );
}

export default Meme;
