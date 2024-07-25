import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";

const PostData = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [bio, setBio] = useState("");

  const bioPost = async () => {
    addDoc(collection(db, "My Profile"), {
      name,
      email,
      bio,
    });
    setName("");
    setEmail("");
    setBio("");
    alert("Data posted successfully");
  };

  return (
    <div>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        type="text"
        placeholder="Enter your name"
      />
      <br />
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        placeholder="Enter your email"
      />
      <br />
      <input
        value={bio}
        onChange={(e) => setBio(e.target.value)}
        type="text"
        placeholder="Enter your Bio"
      />
      <br />
      <button onClick={bioPost}>Submit</button>
    </div>
  );
};

export default PostData;
