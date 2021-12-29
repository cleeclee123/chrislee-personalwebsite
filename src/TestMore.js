import React, { useEffect, useState } from "react";
import { db } from './Firebase.js';
import "./TestMore.css";

const Answers = () => {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPostsFromFirebase = [];
    const subscriber = db
      .collection("Test")
      .onSnapshot((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          getPostsFromFirebase.push({
            ...doc.data(), 
            key: doc.id, 
          });
        });
        setPosts(getPostsFromFirebase);
        setLoading(false);
      });

    return () => subscriber();
  }, [loading]); 

  if (loading) {
    return <h1> loading firebase data... </h1>;
  }

  return (
    <div className="container">
      <h1>Answers:</h1>
      {posts.length > 0 ? (
        posts.map((post) => <div key={post.key}>{post.answer}</div>)
      ) : (
        <h1>no answers yet :(</h1>
      )}
    </div>
  );
};

export default Answers;