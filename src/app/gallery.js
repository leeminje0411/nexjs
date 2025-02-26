
import React from 'react';
import Link from 'next/link';

export default async function Gallery() {
  // 가상의 임시 데이터 (사진 URL 배열)
  const photos = [
    {
      id: 1,
      url: 'https://linkup-mj12270411.s3.ap-northeast-2.amazonaws.com/1740199186750_fa59aa_84647d6f98c34e3b9354999b5f3916fd~mv2.avif', // 빨간색 임시 이미지
    },
    {
      id: 2,
      url: 'https://linkup-mj12270411.s3.ap-northeast-2.amazonaws.com/1740187071392_fa59aa_deadb8f28ffc456ba188bbc38b579e37~mv2.avif', // 초록색
    },
    {
      id: 3,
      url: 'https://linkup-mj12270411.s3.ap-northeast-2.amazonaws.com/1740199152925_fa59aa_63b943757c0045b0844dade865b76be7~mv2.avif', // 파란색
    },
    {
      id: 4,
      url: 'https://linkup-mj12270411.s3.ap-northeast-2.amazonaws.com/1740173070199_fa59aa_a8b23fe3454144f4bd8e07385e9370ee~mv2.avif', // 노란색
    },
    {
      id: 5,
      url: 'https://linkup-mj12270411.s3.ap-northeast-2.amazonaws.com/1740365811833_KakaoTalk_20250224_115242737_15.jpg', // 분홍색
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className='flex justify-between items-center'>
        <h1 className="text-4xl font-bold mb-6">갤러리</h1>
        <div><Link href='/'>더 보기</Link></div>
      </div>
      {/* grid: 5컬럼 레이아웃 + 갭 */}
      <div className="grid grid-cols-5 gap-4">
        {photos.map((photo) => (
          <div key={photo.id} className="border rounded-lg overflow-hidden">
            <img
              src={photo.url}
              alt={`Placeholder ${photo.id}`}
              className="w-full h-auto object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export const dynamic = "force-dynamic";