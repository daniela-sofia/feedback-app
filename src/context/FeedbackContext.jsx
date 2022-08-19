import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: "This feedback item 1",
      rating: 10
    },
    {
      id: 2,
      text: "This feedback item 2",
      rating: 9
    },
    {
      id: 3,
      text: "This feedback item 3",
      rating: 7
    }
  ]);

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false
  });

  //delete feedback item
  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  //add new feedback item
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };

  //set item to be updated
  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true
    });
  };

  const updateFeedback = (id, upItem) => {
    //...item is needed for the id bc the upItem doesnt have the id
    setFeedback(
      feedback.map((item) => (item.id === id ? { ...item, ...upItem } : item))
    );
    //set edit back to false, otherwise new feedback cannot be added
    setFeedbackEdit({
      item: {},
      edit: false
    });
  };

  //editFeedback is the function
  //feedbackEdit is the piece of state
  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        deleteFeedback,
        addFeedback,
        editFeedback,
        feedbackEdit,
        updateFeedback
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
