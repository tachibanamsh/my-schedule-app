"use client";

import { useState } from "react";
import { rooms } from "@/lib/data";

export default function RoomsPage() {
  const [roomName, setRoomName] = useState("");
  const [capacity, setCapacity] = useState(30);

  const handleAddRoom = () => {
    if (!roomName) return;

    rooms.push({
      id: `room-${Date.now()}`,
      name: roomName,
      capacity: parseInt(capacity, 10)
    });

    alert("教室を追加しました");
    setRoomName("");
    setCapacity(30);
  };

  return (
    <div>
      <h2>教室一覧</h2>
      <ul>
        {rooms.map((r) => (
          <li key={r.id}>
            {r.name} (定員: {r.capacity}人)
          </li>
        ))}
      </ul>

      <h3>新しい教室を追加</h3>
      <input
        type="text"
        value={roomName}
        onChange={(e) => setRoomName(e.target.value)}
        placeholder="例: 101教室"
      />
      <input
        type="number"
        value={capacity}
        onChange={(e) => setCapacity(e.target.value)}
      />
      <button onClick={handleAddRoom}>追加</button>
    </div>
  );
}
