import React, {useState, useEffect} from "react";
import './App.css';
import Axios from "axios";

function App() {

    const [movieName, setMovieName] = useState("");
    const [review, setReview] = useState("");
    const [movieReviewList, setMovieList] = useState([]);

    useEffect(() => {
        Axios.get("http://localhost:3001/api/get").then((response) => {
            setMovieList(response.data)
        });
    }, []);

  const submitReview = () => {
      Axios.post("http://localhost:3001/api/insert", {
          movieName: movieName,
          movieReview: review,
      }).then(() => {
          alert("successful insert");
      });

  };

  return (
    <div className="App">
        <h1>CRUD APPLICATION</h1>

        <div className="form">
            <label>Movie Name:</label>
            <input type="text"
                   name="movieName"
                   onChange={(event) => {
                       setMovieName(event.target.value);
                   }}
            />

            <label>Movie Review:</label>
            <input type="text"
                   name="movieReview"
                   onChange={(e) => {
                       setReview(e.target.value);
                   }}
            />

            <button onClick={submitReview}>Submit</button>

            {movieReviewList.map((val) => {
                return <h1>Movie name: {val.movieName} | Movie review: {val.movieReview}</h1>
            })}
        </div>
    </div>
  );
}

export default App;
