import "./style/Global.css";
import { Route, Routes } from "react-router-dom";
import { Birthday, CreateEvent } from "./Page";
import Landing from "./Page/Landing";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/create" element={<CreateEvent />} />
        <Route path="/event" element={<Birthday />} />
      </Routes>
    </>
  );
}

export default App;
