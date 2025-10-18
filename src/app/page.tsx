import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  // Tailwind 공통 스타일
  const boxHoverStyle =
    'shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1'

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex items-center justify-center">
        <div className="w-full">
          <div className="mx-auto max-w-5xl">
            {/* main 박스*/}
            <div
              className={`group bg-white border-2 border-black rounded-2xl ${boxHoverStyle}`}
            >
              <div className="p-8 md:p-12">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-10 items-center">
                  {/* 사진 */}
                  <div className="md:col-span-2">
                    {/* Image 컴포넌트 컨테이너 */}
                    <div className="aspect-square w-full max-w-[320px] mx-auto md:mx-0 rounded-xl border-2 border-gray-400 bg-gray-100 overflow-hidden relative">
                      <Image
                        src="/home.png"
                        alt="웹서버보안프로그래밍 포트폴리오 메인 화면"
                        fill
                        style={{ objectFit: 'cover' }} // 사진 비율 유지
                        priority // (성능)LCP를 위해 우선 로드하는 기능
                      />
                    </div>
                  </div>

                  {/* 텍스트 */}
                  <div className="md:col-span-3">
                    <h1 className="text-2xl md:text-3xl font-bold text-black mb-4">
                      웹서버보안프로그래밍 01분반 정재성
                    </h1>

                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      해당 페이지는 지금까지 배운{' '}
                      <strong className="font-semibold">
                        Next.js 프레임워크
                      </strong>
                      를 이용하여 제작한 간단한 포트폴리오입니다.
                    </p>
                    <div className="h-10 md:h-12"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* 팀 테이블*/}
            <div className="mt-8 max-w-5xl mx-auto">
              <div
                className={`bg-white border-2 border-black rounded-2xl overflow-hidden ${boxHoverStyle}`}
              >
                {/* 테이블 경계선 설정 */}
                <table className="w-full divide-y divide-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left font-semibold text-black w-1/4">
                        구분
                      </th>
                      <th className="px-4 py-3 text-left font-semibold text-black">
                        이름
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {/* 각 행 hover 배경색 설정 */}
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="px-4 py-3 font-medium text-black">팀명</td>
                      <td className="px-4 py-3 text-gray-900">동네ON</td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="px-4 py-3 font-medium text-black">팀장</td>
                      <td className="px-4 py-3 text-gray-900">정재성</td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="px-4 py-3 font-medium text-black">팀원</td>
                      <td className="px-4 py-3 text-gray-900">
                        곽민경, 박혜수, 심재훈, 정윤서
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
