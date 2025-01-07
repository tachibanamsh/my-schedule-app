"use client";

import { useState } from "react";
import { settings } from "@/lib/data";

export default function SettingsPage() {
  const [start, setStart] = useState(settings.businessHours.start);
  const [end, setEnd] = useState(settings.businessHours.end);
  const [minBreak, setMinBreak] = useState(settings.minBreakTime);

  const handleSave = () => {
    settings.businessHours.start = start;
    settings.businessHours.end = end;
    settings.minBreakTime = parseInt(minBreak, 10);

    alert("設定を保存しました");
  };

  return (
    <div>
      <h2>営業時間設定</h2>
      <div>
        <label>開始時間: </label>
        <input
          type="time"
          value={start}
          onChange={(e) => setStart(e.target.value)}
        />
      </div>
      <div>
        <label>終了時間: </label>
        <input
          type="time"
          value={end}
          onChange={(e) => setEnd(e.target.value)}
        />
      </div>
      <div>
        <label>休み時間(分): </label>
        <input
          type="number"
          value={minBreak}
          onChange={(e) => setMinBreak(e.target.value)}
        />
      </div>
      <button onClick={handleSave}>保存</button>
    </div>
  );
}
