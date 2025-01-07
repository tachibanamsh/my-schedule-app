// lib/generateSchedule.js

import { rooms, classes, teachers, students, settings } from "./data";

// 時間割を単純に生成するサンプルロジック (実際はもっと複雑な制約考慮が必要)
export function generateSchedule() {
  // 例: 1コマ = 1時間 (9:00-10:00), (10:00-11:00), ... のように単純化
  // 先生の空き時間、教室の空き状況、クラスの所要時間などを一切考慮していない、非常に単純な例です。

  let scheduleResult = [];

  // 例: classes の順に、「可能な先生」「可能な教室」をただ割当てる (バッティングチェック省略)
  for (let c of classes) {
    const teacher = teachers.find((t) => t.id === c.teacherId);
    const room = rooms.find((r) => r.id === c.roomId);
    // あれば、とりあえず予約表に追加する (時間は仮に固定で表示)
    if (teacher && room) {
      scheduleResult.push({
        className: c.name,
        teacherName: teacher.name,
        roomName: room.name,
        startTime: settings.businessHours.start,
        endTime: "1時間後(例)"
      });
    }
  }

  return scheduleResult;
}