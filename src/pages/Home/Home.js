import React, { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [roomCode, setRoomCode] = useState();
  const navigate = useNavigate(); 
  return (
    <div className="videoapp">
        <div>
        <h1>Create Your Own Meeting Room</h1>
      <input
        type="text"
        value={roomCode}
        placeholder="Enter Room code Here"
        onChange={(e) => setRoomCode(e.target.value)}
      />
      <button onClick={()=>navigate(`/room/${roomCode}`)}>Join</button>
        </div>
    </div>
  );
};

export default Home;
