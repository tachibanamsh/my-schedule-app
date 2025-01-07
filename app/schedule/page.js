"use client";

import { useState } from "react";
import { generateSchedule } from "@/lib/generateSchedule";

export default function SchedulePage() {
  const [schedule, setSchedule] = useState([]);

  const handleGenerate = () => {
    const result = generateSchedule();
    setSchedule(result);
  };

  return (
    <div>
      <h2>時間割の自動作成</h2>
      <button onClick={handleGenerate}>時間割を作成</button>

      <h3>作成結果</h3>
      {schedule.length === 0 ? (
        <p>まだ作成されていません</p>
      ) : (
        <table border="1" style={{ borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th>クラス名</th>
              <th>担当先生</th>
              <th>教室</th>
              <th>開始時間</th>
              <th>終了時間</th>
            </tr>
          </thead>
          <tbody>
            {schedule.map((s, idx) => (
              <tr key={idx}>
                <td>{s.className}</td>
                <td>{s.teacherName}</td>
                <td>{s.roomName}</td>
                <td>{s.startTime}</td>
                <td>{s.endTime}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
