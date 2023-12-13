import { useEffect, useState } from "react";
import "./App.css";
import { getArticles } from "./utils/axios";
import { Route, Routes } from "react-router-dom";
import Dash from "./pages/Dash";
import Home from "./pages/Home";
import SinglePage from "./pages/SinglePage";

function App() {
  const [articles, setArticles] = useState();
  const [isLoading, setIsLoading] = useState(true);

  async function getData() {
    try {
      const data = await getArticles();
      if (data) {
        setArticles(data.data.articles);
        console.log(data.data.articles);
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    !isLoading && (
      <div className="App">
        <Routes>
          <Route path="/" element={<Home articles={articles} />} />
          <Route path="/single" element={<SinglePage articles={articles} />} />
          <Route path="/dash" element={<Dash articles={articles} />} />
        </Routes>
      </div>
    )
  );
}

export default App;
