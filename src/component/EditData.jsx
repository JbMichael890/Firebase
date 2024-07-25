import { doc, updateDoc } from "firebase/firestore";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { db } from "../firebase";

const EditData = () => {
  const { id } = useParams();
  const navigate  = useNavigate()

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [bio, setBio] = useState("");

  const editData = async () => {
    // const userDoc = doc(db,  "My Profile", id)
    // const newFilds = doc{name, email,bio}
    // await update(userDoc,newFilds) another method for edditing data

    await updateDoc(doc(db, "My Profile", id), {
      name: name,
      email: email,
      bio: bio,
    });
    alert("Data has been edited");
    navigate("/");
  };
  return (
    <div>
      <p>{id}</p>
      <input
        type="text"
        placeholder="Enter your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <input
        type="text"
        placeholder="Enter your Bio"
        value={bio}
        onChange={(e) => setBio(e.target.value)}
      />
      <br />
      <button
        onClick={() => {
          editData(id);
        }}
      >
        Edit Profile
      </button>
    </div>
  );
};

export default EditData;
