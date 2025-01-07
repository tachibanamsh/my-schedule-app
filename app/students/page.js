"use client";

import { useState } from "react";
import { students } from "@/lib/data";

export default function StudentsPage() {
  const [studentName, setStudentName] = useState("");

  const handleAddStudent = () => {
    if (!studentName) return;

    students.push({
      id: `student-${Date.now()}`,
      name: studentName,
      enrolledClassIds: []
    });

    alert("生徒を追加しました");
    setStudentName("");
  };

  return (
    <div>
      <h2>生徒一覧</h2>
      <ul>
        {students.map((s) => (
          <li key={s.id}>{s.name}</li>
        ))}
      </ul>

      <h3>新しい生徒を追加</h3>
      <input
        type="text"
        value={studentName}
        onChange={(e) => setStudentName(e.target.value)}
        placeholder="例: 佐藤花子"
      />
      <button onClick={handleAddStudent}>追加</button>
    </div>
  );
}
