import AddCommentsForm from "./AddCommentsForm";
import Comments from "./Comments";

import { useState, useEffect } from "react";
import data from "../mockData/comments";

const App = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    setComments(data);
  }, []);
  return (
    <div>
      <Comments comments={comments} />
      <AddCommentsForm />
    </div>
  );
};

// Whenever yo uwant to update the state based on the previous state, you SHOULD pass a function to the setState

export default App;
