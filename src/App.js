import React from "react";
import Quiz from "./components/Quiz";
import { questions } from "./data/question";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Ứng dụng Kiểm tra Trắc nghiệm</h1>
      <Quiz questions={questions} />
    </div>
  );
}

export default App;
