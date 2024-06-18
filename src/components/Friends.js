/** @format */

// src/components/Friends.js
import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, addDoc, getDocs } from "firebase/firestore";

const Friends = () => {
  const [friends, setFriends] = useState([]);
  const [friendName, setFriendName] = useState("");

  useEffect(() => {
    const fetchFriends = async () => {
      const friendsCollection = collection(db, "friends");
      const friendsSnapshot = await getDocs(friendsCollection);
      const friendsList = friendsSnapshot.docs.map((doc) => doc.data());
      setFriends(friendsList);
    };

    fetchFriends();
  }, []);

  const addFriend = async () => {
    if (friendName.trim()) {
      await addDoc(collection(db, "friends"), { name: friendName });
      setFriendName("");
      // Re-fetch friends
      const friendsSnapshot = await getDocs(collection(db, "friends"));
      setFriends(friendsSnapshot.docs.map((doc) => doc.data()));
    }
  };

  return (
    <div>
      <h1>Friends</h1>
      <input
        type='text'
        value={friendName}
        onChange={(e) => setFriendName(e.target.value)}
        placeholder="Enter friend's name"
      />
      <button className='button' onClick={addFriend}>
        Add Friend
      </button>
      <ul>
        {friends.map((friend, index) => (
          <li key={index}>{friend.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Friends;
