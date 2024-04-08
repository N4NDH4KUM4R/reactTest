import About from "./Components/About";
import ErrorPage from "./Components/ErrorPage";
import Header from "./Components/Header";
import PageOne from "./Components/PageOne";
import PostPage from "./Components/PostPage";
import { Routes, Route, Link } from "react-router-dom";
import PostPageTwo from "./Components/PostPageTwo";
import PostPageThree from "./Components/PostPageThree";
import Home from "./Components/Home";
import PostNav from "./Components/PostNav";
import Footer from "./Components/Footer";
import NewPost from "./Components/NewPost";
function App() {
  return (
    <div>
      <nav>
        <Header />
        <About />
        <PostNav />
        <PostPage />
        <Home />
        <ErrorPage />
        <Footer />
        <NewPost />
      </nav>
    </div>
  );
}

export default App;
