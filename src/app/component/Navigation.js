'use client';
import React, { useState } from "react";
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const path = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: '일정', href: '/Calendar' },
    { name: '갤러리', href: '/Contact' },
    { name: '청구서', href: '/Charge' },
    { name: '공지사항', href: '/Nofi' },
  ];

  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* 로고 */}
        <Link href="/" className="text-white text-lg font-bold">
          우리 가족 사이트
        </Link>

        {/* 모바일 메뉴 버튼 (햄버거) */}
        <button
          className="lg:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

        {/* 데스크톱 메뉴 */}
        <ul className="hidden lg:flex space-x-4">
          {navItems.map((item, index) => (
            <li key={index}>
              <Link
                href={item.href}
                className={clsx(
                  'text-white px-4 py-2 rounded-md transition',
                  path === item.href ? 'active' : 'hover:bg-gray-700'
                )}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* 모바일 메뉴 (햄버거 클릭 시 나타남) */}
      {isOpen && (
        <ul className="lg:hidden flex flex-col mt-2 space-y-2">
          {navItems.map((item, index) => (
            <li key={index}>
              <Link
                href={item.href}
                className={clsx(
                  'block text-white px-4 py-2 rounded-md transition',
                  path === item.href ? 'active' : 'hover:bg-gray-700'
                )}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}