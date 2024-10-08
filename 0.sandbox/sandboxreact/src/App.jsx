import Tweet from "./Tweet";
import { useState } from "react";

const DEFAULT_TWEET = [
  {
    id: 0,
    name: "François",
    content: "Hell yeah",
    like: 0,
  },
  {
    id: 1,
    name: "Cassandre",
    content: "Hell yeah",
    like: 0,
  },
  {
    id: 2,
    name: "Oli",
    content: "Hell yeah",
    like: 0,
  },
  {
    id: 3,
    name: "Bigflo",
    content: "Hell yeah",
    like: 0,
  },
];

export default function App() {
  const [tweets, setTweets] = useState(DEFAULT_TWEET);

  const handleSubmit = (event) => {
    event.preventDefault();

    const name = event.target.name.value;
    const content = event.target.content.value;
    const newTweet = {
      id: tweets[tweets.length - 1]?.id + 1 ?? 0,
      name,
      content,
      like: 0,
    };

    addTweet(newTweet);
    event.target.reset(); // Réinitialiser le formulaire après soumission
  };

  const addTweet = (tweet) => setTweets([...tweets, tweet]);

  const onDelete = (tweetId) => {
    setTweets((curr) => curr.filter((tweet) => tweet.id !== tweetId));
  };

  const onLike = (tweetId) => {
    setTweets((curr) => {
      const copyTweet = [...curr];
      const likedTweet = copyTweet.find((tweet) => tweet.id === tweetId);
      likedTweet.like += 1;

      return copyTweet; // Retourne le nouvel état mis à jour
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="tweet-form">
        <h4>New tweet</h4>
        <input placeholder="name" type="text" name="name"/>
        <input placeholder="content" type="content" name="content"/>
        <input type="submit" className="submit" />
      </form>
      <div className="tweet-container">
        {tweets.map((tweet) => {
          return (
            <Tweet
              key={tweet.id}
              id={tweet.id}
              name={tweet.name}Z
              content={tweet.content}
              like={tweet.like}
              onDelete={(id) => {
                onDelete(id);
              }}
              onLike={() => {
                onLike(tweet.id)
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
