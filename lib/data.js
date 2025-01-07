// lib/data.js

// 教室一覧
let rooms = [
    { id: "room-1", name: "101教室", capacity: 30 },
    { id: "room-2", name: "102教室", capacity: 30 },
    { id: "room-3", name: "103教室", capacity: 30 }
  ];
  
  // クラス(授業)一覧
  let classes = [
    { id: "class-1", name: "中学1年生・難関数学", teacherId: "teacher-1", roomId: "room-1"},
    { id: "class-2", name: "中学2年生・難関数学", teacherId: "teacher-2", roomId: "room-2"},
    { id: "class-3", name: "中学3年生・難関数学", teacherId: "teacher-3", roomId: "room-3"}
  ];
  
  // 先生一覧
  let teachers = [
    { id: "teacher-1", name: "山田太郎", availableDays: [1,3,5], availableTimes: ["9:00-12:00"]},
    { id: "teacher-2", name: "花田勝", availableDays: [1,3,5], availableTimes: ["9:00-12:00"]},
    { id: "teacher-3", name: "適当太郎", availableDays: [1,3,5], availableTimes: ["9:00-12:00"]}
  ];
  
  // 生徒一覧
  let students = [
    { id: "student-1", name: "佐藤A子", enrolledClassIds: ["class-1", "class-2"] },
    { id: "student-1", name: "佐藤B子", enrolledClassIds: ["class-2", "class-1"] },
    { id: "student-1", name: "佐藤C子", enrolledClassIds: ["class-3", "class-2"] },
    { id: "student-1", name: "佐藤D子", enrolledClassIds: ["class-1", "class-3"] },
    { id: "student-1", name: "佐藤E子", enrolledClassIds: ["class-2", "class-3"] }
  ];
  
  // その他設定
  let settings = {
    businessHours: { start: "09:00", end: "22:00" },
    minBreakTime: 10, // 分
    // ...etc
  };
  
  export {
    rooms,
    classes,
    teachers,
    students,
    settings
  };