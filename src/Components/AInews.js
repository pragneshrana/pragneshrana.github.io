import React, { useEffect, useState } from 'react';

const AiNews = () => {
  const [news, setNews] = useState([]);
  const apiKey = '9ffe50d151014ecbb929ff6923ad7d44'; // Replace with your NewsAPI key

  useEffect(() => {
    fetch(`https://newsapi.org/v2/everything?q=AI&apiKey=${apiKey}`)
      .then((response) => response.json())
      .then((data) => setNews(data.articles.slice(0, 2))) // Limit to 2 articles
      .catch((error) => console.error('Error fetching AI news:', error));
  }, []);

  return (
    <section id="ai-news">
      <h2>AI News</h2>
      <div>
        {news.length > 0 ? (
          news.map((article, index) => (
            <div key={index} className="news-item">
              <h3><a href={article.url} target="_blank" rel="noopener noreferrer">{article.title}</a></h3>
              <p>{article.description}</p>
            </div>
          ))
        ) : (
          <p>Loading AI news...</p>
        )}
      </div>
    </section>
  );
};

export default AiNews;
