import GetData from "./component/GetData";
import PostData from "./component/PostData";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./static/Header";
import EditData from "./component/EditData";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/home" element={<PostData />} />
          <Route path="/" element={<GetData />} />
          <Route path="/edit/:id" element={<EditData />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
