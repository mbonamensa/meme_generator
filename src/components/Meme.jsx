import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import Draggable from "react-draggable";

function Meme() {
  const [meme, setMeme] = useState({
    topText: "I am the",
    bottomText: "Baddest Bitch!!",
    randomImg: "./img/shrek-meme.jpg",
  });
  const [allMemes, setAllMemes] = useState([]);
  const [loading, setLoading] = useState(true);
  console.log(allMemes);
  const fetchImages = () => {
    setLoading(true);
    return fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => {
        setAllMemes(data.data.memes);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchImages();
  }, []);


  // Generate random memes
  const randomMemeImg = () => {
    setLoading(true);
    const randomNum = Math.floor(Math.random() * allMemes.length);
    const url = allMemes[randomNum].url;
    setTimeout(() => {
      setMeme((prevMeme) => ({
        ...prevMeme,
        randomImg: url,
      }));
      setLoading(false);
    }, 200);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  };

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
            <Draggable bounds="parent" defaultPosition={{ x: -66, y: 0 }}>
              <p className="top-text">{meme.topText}</p>
            </Draggable>
            <Draggable bounds="parent" defaultPosition={{ x: -100, y: 0 }}>
              <p className="bottom-text">{meme.bottomText}</p>
            </Draggable>
          </div>
        )}
      </div>
    </section>
  );
}

export default Meme;
