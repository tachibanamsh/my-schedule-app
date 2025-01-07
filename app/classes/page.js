"use client"; 
// クライアントコンポーネントとして定義

import { useState } from "react";
import { classes } from "@/lib/data";

export default function ClassesPage() {
  const [newClassName, setNewClassName] = useState("");

  const handleAddClass = () => {
    if (!newClassName) return;

    classes.push({
      id: `class-${Date.now()}`,
      name: newClassName,
      // 本来はここに teacherId, roomId, etc... の割り当てが必要
    });

    alert("クラスを追加しました");
    setNewClassName("");
  };

  return (
    <div>
      <h2>クラス一覧</h2>
      <ul>
        {classes.map((c) => (
          <li key={c.id}>{c.name}</li>
        ))}
      </ul>

      <h3>新しいクラスを追加</h3>
      <input
        type="text"
        value={newClassName}
        onChange={(e) => setNewClassName(e.target.value)}
        placeholder="例: 中学2年生の難関数学"
      />
      <button onClick={handleAddClass}>追加</button>
    </div>
  );
}
