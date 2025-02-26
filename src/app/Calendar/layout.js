import React from 'react';
import prisma from '../lib/prisma';
import Schedule from './index'

const AboutLayout = async ({ children }) => {
    const schedules = await prisma.schedule.findMany();
        
    console.log(schedules);

    return (
       
              <div className='container mx-auto p-4'>
            <h1 className='text-4xl text-center text-blue-500 m-5'>일정</h1>
            {children? children : null}
           {/* 테이블 컨테이너 */}
                <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-white shadow-md rounded-lg overflow-hidden">
                    {/* 테이블 헤더 */}
                    <thead className="bg-blue-500 text-white text-center">
                    <tr className="text-center">
                        <th className="p-3 ">작성자</th>
                        <th className="p-3 ">일정</th>
                        <th className="p-3 ">날짜</th>
                        <th className="p-3 ">시작 시간</th>
                        <th className="p-3 ">종료 시간</th>
                    </tr>
                    </thead>

                    {/* 테이블 바디 */}
                    <tbody>
                    {schedules.map((item) => (
                        <tr key={item.id} className="border-b text-center hover:bg-gray-100">
                            <td className="p-3">{item.writer}</td>
                            <td className="p-3">{item.schedule}</td>
                            <td className="p-3">{item.date}</td>
                            <td className="p-3">{item.startTime}</td>
                            <td className="p-3">{item.endTime}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                </div>
        </div>
    );
};

export default AboutLayout;