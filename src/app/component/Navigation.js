'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

/**
 * Tailwind CSS를 사용하고 있다는 가정 하에 작성하였습니다.
 * 'react-icons'나 'fortawesome' 등을 쓰면 아이콘을 좀 더 이쁘게 꾸밀 수 있어요!
 */

export default function Navigation() {
  // 현재 라우트 경로 확인 (활성화 스타일 주기 위함)
  const pathname = usePathname();

  // 사이드 메뉴 열림/닫힘
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // 검색어
  const [searchQuery, setSearchQuery] = useState('');

  // 유튜브처럼 상단에 표시할 메뉴들
  const topNavItems = [
    { name: '홈', href: '/' },
    { name: '일정', href: '/Calendar' },
    { name: '갤러리', href: '/Contact' },
    { name: '공지사항', href: '/Nofi' },
  ];

  // 사이드 메뉴에서 표시할 예시 항목
  const sideMenuItems = [
    { name: '내 채널', href: '/mychannel' },
    { name: '구독', href: '/subscribe' },
    { name: '시청기록', href: '/history' },
    { name: '좋아요 표시한 동영상', href: '/liked' },
    // ...원하시는 메뉴 더 추가 가능
  ];

  const handleSidebarToggle = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    // 실제 검색 로직은 여기서 처리!
    alert(`검색어: ${searchQuery}`);
  };

  return (
    <div className="relative">
      {/* 상단바 (헤더) */}
      <header className="flex items-center justify-between bg-black px-4 py-2 text-white">
        {/* 왼쪽 햄버거 버튼 */}

        <div className='flex'>

        <button
          className="mr-4 text-2xl hover:bg-red-700 p-2 rounded-full"
          onClick={handleSidebarToggle}
          aria-label="Toggle sidebar"
        >
          ☰
        </button>

        {/* 로고 (유튜브처럼) */}
        <Link href="/" className="flex items-center text-xl font-bold">
          <span className="text-white">우리 가족 사이트</span>
        </Link>

        </div>

 

        {/* 우측 아이콘들 예시 (알림, 프로필 등) */}
        <div className="flex items-center space-x-3">
          <button className="hover:bg-red-700 p-2 rounded-full">
     </button>
          <button className="hover:bg-red-700 p-2 rounded-full">👤</button>
        </div>
      </header>

      {/* 모바일 전용 검색창 (화면 폭이 좁을 때) */}
      <form onSubmit={handleSearch} className="flex md:hidden p-2 bg-gray-100">
        <input
          type="text"
          className="flex-1 px-4 py-2 text-black rounded-l-full focus:outline-none"
          placeholder="검색어를 입력하세요"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button
          type="submit"
          className="bg-white text-black rounded-r-full px-4 py-2 hover:bg-gray-200"
        >
          검색
        </button>
      </form>

      {/* 상단바 아래에 표시할 네비게이션 탭 (원한다면) */}
      <nav className="bg-white border-b hidden md:block">
        <ul className="flex space-x-4 p-2">
          {topNavItems.map((item, i) => (
            <li key={i}>
              <Link
                href={item.href}
                className={clsx(
                  'px-3 py-1 rounded-md hover:bg-gray-200',
                  pathname === item.href && 'bg-gray-300'
                )}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* 사이드바 (슬라이드 아웃) */}
      <aside
        className={clsx(
          'fixed top-0 left-0 h-full w-64 bg-white shadow-md transform transition-transform',
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        )}
        style={{ zIndex: 1000 }}
      >
        <div className="flex items-center justify-between p-4 bg-gray-100">
          <h2 className="text-xl font-semibold">메뉴</h2>
          <button
            onClick={handleSidebarToggle}
            className="text-xl p-2 hover:bg-gray-200 rounded-full"
          >
            ✕
          </button>
        </div>
        <ul className="p-4 space-y-2">
          {sideMenuItems.map((item, i) => (
            <li key={i}>
              <Link
                href={item.href}
                className={clsx(
                  'block px-4 py-2 rounded-md hover:bg-gray-200',
                  pathname === item.href && 'bg-gray-300'
                )}
                onClick={() => setIsSidebarOpen(false)}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </aside>

      {/* 오버레이: 사이드바 열렸을 때 뒷배경 클릭하면 닫히게 */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50"
          style={{ zIndex: 999 }}
          onClick={handleSidebarToggle}
        />
      )}
    </div>
  );
}