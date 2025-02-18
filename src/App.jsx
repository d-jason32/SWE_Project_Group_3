import './App.css'

import { Chessboard } from "react-chessboard";

function App() {
  return (
    <div style={{ width: "500px", margin: "auto", paddingTop: "20px" }}>
      <Chessboard position="start" />
    </div>
  );
}

export default App
