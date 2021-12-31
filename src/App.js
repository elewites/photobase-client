//libraries
import { useEffect, useState } from "react";
import axios from "axios";

//styling
import "./App.css";

function App() {
  //image url
  const [image, setImage] = useState("");
  //loading status
  const [loading, setLoading] = useState(true);

  //MODIFIES: image, loading
  //EFFECTS: makes get request to /get-random-image-url,
  //         sets image to response, and updates loading state
  const updatePhoto = async () => {
    setLoading(true);
    //
    try {
      const response = await axios.get(
        "http://localhost:3001/get-random-image-url"
      );
      setImage(response.data);
      console.log(response.data);
      //
      setTimeout(() => {
        setLoading(false);
      }, 1000);
      //
    } catch (error) {
      console.log(error);
    }
  };

  //updatePhoto function will be called on each page refresh
  useEffect(() => {
    updatePhoto();
  }, []);

  return (
    <div className="App">
      <div className="button-div">
        <button
          onClick={() => {
            updatePhoto();
          }}
        >
          Random Photo
        </button>
      </div>
      <div className="image-div">
        {loading ? <div class="loader"></div> : <img alt={1} src={image}></img>}
      </div>
    </div>
  );
}

export default App;
