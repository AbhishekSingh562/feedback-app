import Header from "./components/Header";
import FeedbackItems from "./components/FeedbackItems";
import { useState } from "react";
import FeedbackData from "./Data/FeedbackData";
import FeedbackList from "./components/FeedbackList";

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  return (
    <>
      <Header />
      <div className="container">
        <FeedbackList />
      </div>
    </>
  );
}

export default App;
