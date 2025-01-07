"use client";

import { useState } from "react";
import { teachers } from "@/lib/data";

export default function TeachersPage() {
  const [teacherName, setTeacherName] = useState("");

  const handleAddTeacher = () => {
    if (!teacherName) return;

    teachers.push({
      id: `teacher-${Date.now()}`,
      name: teacherName,
      // 本来は担当可能なクラス・勤務可能日などを指定
      availableDays: [],
      availableTimes: []
    });

    alert("先生を追加しました");
    setTeacherName("");
  };

  return (
    <div>
      <h2>先生一覧</h2>
      <ul>
        {teachers.map((t) => (
          <li key={t.id}>{t.name}</li>
        ))}
      </ul>

      <h3>新しい先生を追加</h3>
      <input
        type="text"
        value={teacherName}
        onChange={(e) => setTeacherName(e.target.value)}
        placeholder="例: 山田太郎"
      />
      <button onClick={handleAddTeacher}>追加</button>
    </div>
  );
}
