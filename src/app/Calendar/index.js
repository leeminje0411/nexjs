'use client'

import React, { useState, useEffect, use } from 'react';
import { Calendar } from "@/components/ui/calendar";
import { useRouter  } from 'next/navigation';
import { set } from 'date-fns';

export default function Index({ isClicked, setIsClicked }) {
  // 날짜, 일정, 작성자 상태
  const [date, setDate] = useState(null);
  const [schedule, setSchedule] = useState("");
  const [writer, setWriter] = useState("");
    const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const router = useRouter();
    useEffect(() => {
    setDate(new Date());
  }, []);

  // Date 객체를 "YYYY-MM-DD" 문자열로 변환
  function formatDateForInput(dateObj) {
    if (!dateObj) return '';
    const year = dateObj.getFullYear();
    const month = String(dateObj.getMonth() + 1).padStart(2, '0');
    const day = String(dateObj.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  // input[type="date"] 변경 시 Date 객체로 역변환
  function handleDateChange(e) {
    const newDate = new Date(e.target.value);
    setDate(newDate);
  }

  const submitHandler = async (e) => {
    e.preventDefault();
   
    await fetch('/api/calendar', {
      method: 'POST',
      body: JSON.stringify({ date: formatDateForInput(date), schedule, writer, startTime, endTime }),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => {router.refresh();
       setIsClicked(!isClicked);
  });
  }


  return (
    <div className="p-4 max-w-md mx-auto flex flex-col justify-center items-center space-y-6">
      <h1 className="text-2xl font-bold mb-4">About Us</h1>

      {/* shadcn/ui의 Calendar 컴포넌트 */}
      <Calendar
        mode="single"
        selected={date}
        onSelect={(selectedDate) => {
          setDate(selectedDate);
          console.log("캘린더에서 선택된 날짜:", selectedDate);
        }}
        className="rounded-md border flex justify-center items-center p-4"
      />

      <form onSubmit={submitHandler} className="mt-6 space-y-4">
        {/* 날짜 입력 */}
        <div>
          <label className="block font-semibold mb-1">날짜</label>
          <input
            type="date"
            className="w-full border rounded p-2 bg-gray-100"
            value={formatDateForInput(date)}
            onChange={handleDateChange}
            placeholder="날짜를 선택하세요"
          />
        </div>

           <div>
          <label className="block font-semibold mb-1">작성자</label>
          <input
            type="text"
            className="w-full border rounded p-2"
            value={writer}
            onChange={(e) => setWriter(e.target.value)}
            placeholder="작성자 이름을 입력하세요"
          />
        </div>

          {/* 시작 시간 */}
 <div>
        <label className="block font-semibold mb-1">시작 시간</label>
        <input
          type="time"
          className="w-full border rounded p-2"
          value={startTime}
          onChange={(e) => setStartTime(e.target.value)}
          placeholder="시작 시간을 선택하세요"
        />
      </div>

      {/* 종료 시간 */}
      <div>
        <label className="block font-semibold mb-1">종료 시간</label>
        <input
          type="time"
          className="w-full border rounded p-2"
          value={endTime}
          onChange={(e) => setEndTime(e.target.value)}
          placeholder="종료 시간을 선택하세요"
        />
      </div>


        {/* 일정 입력 */}
        <div>
          <label className="block font-semibold mb-1">일정</label>
          <input
            type="text"
            className="w-full border rounded p-2"
            value={schedule}
            onChange={(e) => setSchedule(e.target.value)}
            placeholder="예: 회의, 모임, 운동 등"
          />
        </div>

        {/* 제출 버튼 */}
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
        >
          일정 등록
        </button>
      </form>

      {/* 선택한 날짜 표시 (선택사항) */}

    </div>
  );
}