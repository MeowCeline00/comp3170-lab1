import React, { useState } from 'react';
import news_feed from './sample_news_stories.json';

function App() {
  const [stories, setStories] = useState(news_feed.results);

  const handleRemoveStory = (index) => {
    const updatedStories = stories.filter((_, i) => i !== index);
    setStories(updatedStories); 
  };

  return (
    <div className="App">
      <h1>Random News Feed</h1>
      <div className="feed">
        {stories.map((story, index) => (
          <div key={index} className="story">
            <span className="delete" onClick={() => handleRemoveStory(index)}>X</span>
            <div className="story_header">
              <div className="story_image">
                {story.image_url ? (
                  <img src={story.image_url} alt="News story" />
                ) : (
                  <img src="https://placehold.co/200x150?text=News+Story" alt="Placeholder" />
                )}
              </div>
              <div className="story_info">
                <h2>
                  <a href={story.link} target="_blank" rel="noopener noreferrer">{story.title}</a>
                </h2>
                <span className="story_creator">By: {story.creator ? story.creator.join(', ') : 'Unknown Author'}</span>
                <p className="story_description">{story.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
