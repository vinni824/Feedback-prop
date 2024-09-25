import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import AboutIconLink from './components/AboutLink';
import AboutPage from './About';
import feedbackData from './FeedbackData';
import { v4 as uuidv4 } from 'uuid';
import './index.css';

function App() {
  const [feedback, setFeedback] = useState([]);
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  useEffect(() => {
    const initializedFeedback = feedbackData.map(item => ({
      ...item,
      id: item.id || uuidv4(),
    }));
    setFeedback(initializedFeedback);
  }, []);

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };

  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure you want to delete?')) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  const updateFeedback = (id, updItem) => {
    setFeedback(
      feedback.map((item) =>
        item.id === id ? { ...item, ...updItem } : item
      )
    );
    setFeedbackEdit({ item: {}, edit: false });
  };

  const editFeedback = (item) => {
    setFeedbackEdit({ item, edit: true });
  };

  return (
    <Router>
      <Header
        text='Feedback UI'
        menuItems={[
          { label: 'Home', link: '/' },
          { label: 'About', link: '/about' },
        ]}
      />
      <div className='container'>
        <Routes>
          <Route
            path='/'
            element={
              <>
                <FeedbackForm
                  addFeedback={addFeedback}
                  feedbackEdit={feedbackEdit}
                  updateFeedback={updateFeedback}
                />
                <FeedbackStats feedback={feedback} />
                <FeedbackList
                  feedback={feedback}
                  deleteFeedback={deleteFeedback}
                  editFeedback={editFeedback}
                />
              </>
            }
          />
          <Route path='/about' element={<AboutPage />} />
        </Routes>

        <AboutIconLink />
      </div>
    </Router>
  );
}

export default App;
