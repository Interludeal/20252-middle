import Image from 'next/image'

export default function About() {
  const hoverStyle =
    'hover:shadow-2xl hover:-translate-y-1 transition-all duration-300' // 박스 hover 효과

  // 학력 및 경력 데이터 (순서대로 8개)
  const experienceData = [
    { title: '정보보안 동아리 S.C.P 2025 임원', date: '2025.09' },
    { title: '2024 제12회 창업경진대회 참여 및 입상', date: '2024.03' },
    { title: '2025 사이버공격방어대회(CCE) CTF 참여', date: '2025.08' },
    { title: '제 3회 JBU-CTF 문제 출제', date: '2022.10' },
    { title: '2025 핵테온 세종 CTF 참여', date: '2025.04' },
    { title: '정보보안 동아리 S.C.P 활동', date: '2022.04' },
    { title: '육군 병장 만기전역', date: '2024.09' },
    { title: '중부대학교 정보보호학전공 입학', date: '2022.03 ' },
  ]

  // 개인 프로젝트 데이터 (기존 내용 유지)
  const webProjects = [
    <>
      <strong className="font-semibold">CVE-2023-50447 분석</strong> :{' '}
      <span className="inline-block bg-gray-200 px-1 rounded text-xs font-medium text-gray-800">
        ImageMath
      </span>{' '}
      모듈의 취약점이{' '}
      <span className="inline-block bg-gray-200 px-1 rounded text-xs font-medium text-gray-800">
        dunder 체인
      </span>{' '}
      공격을 통해 악용될 수 있음을 알고 PoC 해석을 토대로 CTF 문제 풀이를
      진행하였습니다.
    </>,
    <>
      <strong className="font-semibold">PHP +MySQL 게시판 모의해킹</strong> :
      직접 환경 구축을 하며{' '}
      <span className="inline-block bg-gray-200 px-1 rounded text-xs font-medium text-gray-800">
        DB
      </span>{' '}
      이해력을 올리고, 웹 취약점을 토대로{' '}
      <span className="inline-block bg-gray-200 px-1 rounded text-xs font-medium text-gray-800">
        모의해킹
      </span>
      을 하며 방어 로직을 짜는 실습을 진행했습니다.
    </>,
    <>
      <strong className="font-semibold">Shadow API</strong> :
      <span className="inline-block bg-gray-200 px-1 rounded text-xs font-medium text-gray-800">
        API
      </span>{' '}
      기본 공부 후, 직접 구현한{' '}
      <span className="inline-block bg-gray-200 px-1 rounded text-xs font-medium text-gray-800">
        Node.js
      </span>
      서버 에서{' '}
      <span className="inline-block bg-gray-200 px-1 rounded text-xs font-medium text-gray-800">
        Burp Suite{' '}
      </span>
      를 활용하여 로그 탈취 방어 실습을 진행했습니다.
    </>,
    <>
      <strong className="font-semibold">HTTP Desync Attacks</strong> : HTTP 요청{' '}
      <span className="inline-block bg-gray-200 px-1 rounded text-xs font-medium text-gray-800">
        파싱 불일치
      </span>
      경우를{' '}
      <span className="inline-block bg-gray-200 px-1 rounded text-xs font-medium text-gray-800">
        Nginx
      </span>{' '}
      Proxy 로 구현하고{' '}
      <span className="inline-block bg-gray-200 px-1 rounded text-xs font-medium text-gray-800">
        Flask
      </span>{' '}
      서버 보호 로직을 짜보며 실습을 진행했습니다.
    </>,
    <>
      <strong className="font-semibold">URL Redirection</strong> :{' '}
      <span className="inline-block bg-gray-200 px-1 rounded text-xs font-medium text-gray-800">
        Open Redirection
      </span>{' '}
      취약점과 피싱 공격 연계 위험성을 알고{' '}
      <span className="inline-block bg-gray-200 px-1 rounded text-xs font-medium text-gray-800">
        Flask
      </span>{' '}
      기반의 공격 및 방어 실습을 진행했습니다.
    </>,
  ]

  const otherProjects = [
    <>
      <strong className="font-semibold">Fire Wall / Spoofing</strong> : Dos,
      스니핑/스푸핑 위험을 알고{' '}
      <span className="inline-block bg-gray-200 px-1 rounded text-xs font-medium text-gray-800">
        프로토콜
      </span>
      역할을 공부하여{' '}
      <span className="inline-block bg-gray-200 px-1 rounded text-xs font-medium text-gray-800">
        VPN
      </span>
      으로 네트워크 보호 실습을 하였습니다.
    </>,
    <>
      <strong className="font-semibold">LCA 알고리즘</strong> : 트리 구조에서
      <span className="inline-block bg-gray-200 px-1 rounded text-xs font-medium text-gray-800">
        LCA
      </span>
      를 찾는 알고리즘을 구현하여{' '}
      <span className="inline-block bg-gray-200 px-1 rounded text-xs font-medium text-gray-800">
        이진 리프팅
      </span>{' '}
      을 이해하였습니다.
    </>,
    <>
      <strong className="font-semibold">Abstract Data Type</strong> : push/pop
      연산을 알고 더 나아가{' '}
      <span className="inline-block bg-gray-200 px-1 rounded text-xs font-medium text-gray-800">
        LIFO, FIFO
      </span>
      구조 를 이해하고 실제로 구현해보았습니다.
    </>,
    <>
      <strong className="font-semibold">Python Board Game 구현</strong> :
      플레이어 관리, 턴 기반 진행,{' '}
      <span className="inline-block bg-gray-200 px-1 rounded text-xs font-medium text-gray-800">
        매트릭스 기반
      </span>{' '}
      게임 보드를 구축해보며{' '}
      <span className="inline-block bg-gray-200 px-1 rounded text-xs font-medium text-gray-800">
        Python
      </span>{' '}
      활용 능력을 높였습니다.
    </>,
    <>
      <strong className="font-semibold">DevOps CI/CD 파이프라인 구축</strong> :{' '}
      <span className="inline-block bg-gray-200 px-1 rounded text-xs font-medium text-gray-800">
        DevOps
      </span>
      문화와{' '}
      <span className="inline-block bg-gray-200 px-1 rounded text-xs font-medium text-gray-800">
        Cloud
      </span>
      지식을 쌓고 개발부터 배포, 운영 자동화 과정을 진행 중입니다.
    </>,
  ]

  const ExperienceItem = ({ title, date }: { title: string; date: string }) => (
    <div className="flex justify-between items-center p-3 border border-gray-300 rounded-lg bg-white hover:bg-gray-50 transition-colors duration-200">
      <span className="text-black font-semibold text-sm mr-2">{title}</span>
      <span className="text-gray-700 text-xs flex-shrink-0">{date}</span>
    </div>
  )

  // 학력/경력 항목을 좌우로 4개씩 분리
  const leftColumn = [
    experienceData[0], // 1
    experienceData[2], // 3
    experienceData[4], // 5
    experienceData[6], // 7
  ]
  const rightColumn = [
    experienceData[1], // 2
    experienceData[3], // 4
    experienceData[5], // 6
    experienceData[7], // 8
  ]

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex items-center justify-center">
        <div className="w-full">
          <div className="mx-auto max-w-5xl">
            <div className="space-y-8">
              {/* 프로필 박스 (생략) */}
              <div
                className={`bg-white border-2 border-black rounded-2xl p-8 shadow-md ${hoverStyle}`}
              >
                <h2 className="text-2xl font-bold text-black mb-6">프로필</h2>
                <div className="flex items-start space-x-8">
                  {/* 프로필 이미지 */}
                  <div className="w-32 h-40 border-2 border-gray-400 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                    <Image
                      src="/about.png"
                      alt="프로필 사진"
                      width={128}
                      height={160}
                      className="w-full h-full object-cover"
                      priority
                    />
                  </div>

                  {/* 프로필 정보 */}
                  <div className="flex-1 min-w-0">
                    <div className="mb-4">
                      <h3 className="text-2xl font-bold text-black inline-block mr-2">
                        정재성
                      </h3>
                      <span className="text-lg font-normal text-gray-500">
                        Jung Jae Seong (鄭宰成)
                      </span>
                    </div>

                    {/* 개인 정보 항목들을 2단 그리드 레이아웃으로 분리 */}
                    <div className="text-lg text-gray-800 mb-6 grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-4">
                      {/* 1. 생년월일 (좌상) */}
                      <p>
                        <strong>생년월일:</strong>{' '}
                        <span className="text-gray-700 font-light">
                          2003.07.28 (만 22세)
                        </span>
                      </p>

                      {/* 2. 전화번호 (우상) */}
                      <p>
                        <strong>전화번호:</strong>{' '}
                        <span className="text-gray-700 font-light">
                          010-4253-6405
                        </span>
                      </p>

                      {/* 3. E-mail (좌하) */}
                      <p>
                        <strong>E-mail:</strong>{' '}
                        <span className="text-gray-700 font-light">
                          akrehtk1151@naver.com
                        </span>
                      </p>

                      {/* 4. 거주지 (우하) */}
                      <p>
                        <strong>거주지:</strong>{' '}
                        <span className="text-gray-700 font-light">
                          경기도 시흥시 은행동 (현재 기숙사)
                        </span>
                      </p>
                    </div>

                    {/* 소속/전공 및 학번/학년 테이블 */}
                    <div className="border border-gray-300 rounded-lg overflow-hidden mb-6">
                      <div className="grid grid-cols-4 divide-x divide-gray-300 text-center text-sm">
                        <div className="p-2 border-b border-gray-300 bg-gray-50 font-semibold text-black">
                          소속
                        </div>
                        <div className="p-2 border-b border-gray-300 bg-white text-black font-normal">
                          중부대학교
                        </div>
                        <div className="p-2 border-b border-gray-300 bg-gray-50 font-semibold text-black">
                          전공
                        </div>
                        <div className="p-2 border-b border-gray-300 bg-white text-black font-normal">
                          정보보호학전공
                        </div>
                      </div>

                      <div className="grid grid-cols-4 divide-x divide-gray-300 text-center text-sm">
                        <div className="p-2 bg-gray-50 font-semibold text-black">
                          학번
                        </div>
                        <div className="p-2 bg-white text-black font-normal">
                          92213093
                        </div>
                        <div className="p-2 bg-gray-50 font-semibold text-black">
                          학년
                        </div>
                        <div className="p-2 bg-white text-black font-normal">
                          2학년
                        </div>
                      </div>
                    </div>

                    {/* Github, Tistory, Instagram 아이콘 버튼 */}
                    <div className="mt-6 flex space-x-4 justify-end">
                      {/* Github 아이콘 버튼 */}
                      <a
                        href="https://github.com/Interludeal"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-800 hover:text-black transition-colors duration-200 p-2 rounded-full hover:bg-gray-100" // (디자인 개선) 아이콘 주변에 hover 효과 추가
                      >
                        <GithubIcon className="w-6 h-6" />
                      </a>
                      {/* Tistory 아이콘 버튼 */}
                      <a
                        href="https://interludeal.tistory.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-colors duration-200 p-2 rounded-full hover:bg-red-100" // Hover 배경색을 Tistory 로고와 어울리게
                      >
                        <TistoryIcon className="w-6 h-6 text-red-600" />{' '}
                        {/* Tistory 로고 색상 적용 */}
                      </a>
                      {/* Instagram 아이콘 버튼 */}
                      <a
                        href="https://www.instagram.com/jaexxeong_bsns"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-pink-600 hover:text-pink-800 transition-colors duration-200 p-2 rounded-full hover:bg-pink-50" // (디자인 개선) 아이콘 주변에 hover 효과 추가
                      >
                        <InstagramIcon className="w-6 h-6" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* 관심 분야 박스 (생략) */}
              <div
                className={`bg-white border-2 border-black rounded-2xl p-8 shadow-md ${hoverStyle}`}
              >
                <h2 className="text-2xl font-bold text-black mb-6">
                  관심 분야
                </h2>
                <div className="space-y-4">
                  {/* 항목 1: 웹 해킹/보안 */}
                  <div className="bg-white border border-gray-300 rounded-lg p-4 text-black font-semibold hover:bg-gray-50 transition-colors duration-300">
                    웹 해킹 / 보안
                  </div>

                  {/* 항목 2: 다양히 하고 싶어하는 편 */}
                  <div className="bg-white border border-gray-300 rounded-lg p-4 text-black font-semibold hover:bg-gray-50 transition-colors duration-300">
                    다양히 하고 싶어하는 편
                  </div>

                  {/* 항목 3: 네트워크, 클라우드, 개발 등 */}
                  <div className="bg-white border border-gray-300 rounded-lg p-4 text-black font-semibold hover:bg-gray-50 transition-colors duration-300">
                    네트워크, 클라우드, 개발 등
                  </div>
                </div>
              </div>

              {/* 학력 및 경력 박스: 2단 그리드 레이아웃 적용 (생략) */}
              <div
                className={`bg-white border-2 border-black rounded-2xl p-8 shadow-md ${hoverStyle}`}
              >
                <h2 className="text-2xl font-bold text-black mb-6">
                  학력 및 경력
                </h2>

                {/* 2단 그리드 컨테이너: 모바일은 1열, md 이상은 2열 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
                  {/* 1열 (좌측) */}
                  <div className="space-y-4">
                    {leftColumn.map((item, index) => (
                      <ExperienceItem
                        key={`left-${index}`}
                        title={item.title}
                        date={item.date}
                      />
                    ))}
                  </div>

                  {/* 2열 (우측) */}
                  <div className="space-y-4">
                    {rightColumn.map((item, index) => (
                      <ExperienceItem
                        key={`right-${index}`}
                        title={item.title}
                        date={item.date}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* 기술 스택 박스: 요청된 최종 항목으로 대체 */}
              <div
                className={`bg-white border-2 border-black rounded-2xl p-8 shadow-md ${hoverStyle}`}
              >
                <h2 className="text-2xl font-bold text-black mb-6">
                  기술 스택
                </h2>
                <div className="space-y-6">
                  {/* 1. Language 스택 */}
                  <div>
                    <h3 className="text-lg font-semibold text-black mb-3">
                      Language
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                      {/* C */}
                      <TechIcon src="/tech/c.png" alt="C" w={64} h={64} />
                      {/* PHP */}
                      <TechIcon
                        src="/tech/php.png"
                        alt="PHP"
                        w={72}
                        h={72}
                      />{' '}
                      {/* 크기 보정: 72x72 (작은 로고 확대) */}
                      {/* Python */}
                      <TechIcon
                        src="/tech/python.png"
                        alt="Python"
                        w={64}
                        h={64}
                      />
                    </div>
                  </div>

                  {/* 2. Frontend 스택 (Next.js, Tailwind CSS 추가) */}
                  <div>
                    <h3 className="text-lg font-semibold text-black mb-3">
                      Frontend
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                      {/* HTML */}
                      <TechIcon src="/tech/html.png" alt="HTML" w={64} h={64} />
                      {/* CSS */}
                      <TechIcon src="/tech/css.png" alt="CSS" w={64} h={64} />
                      {/* JS */}
                      <TechIcon
                        src="/tech/JS.png"
                        alt="JavaScript"
                        w={64}
                        h={64}
                      />
                      {/* Next.js (추가) */}
                      <TechIcon
                        src="/tech/next_js.png"
                        alt="Next.js"
                        w={72}
                        h={72}
                      />{' '}
                      {/* 크기 보정: 72x72 */}
                      {/* Tailwind CSS (추가) */}
                      <TechIcon
                        src="/tech/tailwind_css.png"
                        alt="Tailwind CSS"
                        w={72}
                        h={72}
                      />{' '}
                      {/* 크기 보정: 72x72 */}
                    </div>
                  </div>

                  {/* 3. Back 스택 */}
                  <div>
                    <h3 className="text-lg font-semibold text-black mb-3">
                      Backend
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                      {/* Node.js */}
                      <TechIcon
                        src="/tech/node_js.png"
                        alt="Node.js"
                        w={64}
                        h={64}
                      />
                      {/* Flask */}
                      <TechIcon
                        src="/tech/flask.png"
                        alt="Flask"
                        w={72}
                        h={72}
                      />{' '}
                      {/* 크기 보정: 72x72 */}
                    </div>
                  </div>

                  {/* 4. Other 스택 */}
                  <div>
                    <h3 className="text-lg font-semibold text-black mb-3">
                      Other
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                      {/* GCP */}
                      <TechIcon
                        src="/tech/GCP.png"
                        alt="GCP"
                        w={72}
                        h={72}
                      />{' '}
                      {/* 크기 보정: 72x72 */}
                      {/* MySQL */}
                      <TechIcon
                        src="/tech/mysql.png"
                        alt="MySQL"
                        w={72}
                        h={72}
                      />{' '}
                      {/* 크기 보정: 72x72 */}
                      {/* Unity */}
                      <TechIcon
                        src="/tech/unity.png"
                        alt="Unity"
                        w={72}
                        h={72}
                      />{' '}
                      {/* 크기 보정: 72x72 */}
                    </div>
                  </div>
                </div>
              </div>

              {/* 개인 프로젝트 */}
              <div
                className={`bg-white border-2 border-black rounded-2xl p-8 shadow-md ${hoverStyle}`}
              >
                <h2 className="text-2xl font-bold text-black mb-6">
                  개인 프로젝트
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-black mb-2">
                      Web 분야
                    </h3>
                    <ul className="space-y-2 text-black">
                      {webProjects.map((project, index) => (
                        <li
                          key={`web-${index}`}
                          className="border border-gray-200 bg-gray-50 rounded-md p-3 text-sm hover:bg-gray-100 transition-colors duration-200"
                        >
                          {project}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="border-t border-gray-200 pt-4">
                    <h3 className="text-lg font-semibold text-black mb-2">
                      기타
                    </h3>
                    <ul className="space-y-2 text-black">
                      {otherProjects.map((project, index) => (
                        <li
                          key={`other-${index}`}
                          className="border border-gray-200 bg-gray-50 rounded-md p-3 text-sm hover:bg-gray-100 transition-colors duration-200"
                        >
                          {project}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* 좌우명 - 박스 제거, 문구만 표시 */}
              <p className="text-center text-2xl font-bold text-black italic">
                <span className="cursor-pointer hover:text-blue-600 transition-colors duration-300">
                  "Act as if you have already achieved"
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// === 개별 기술 아이콘 컴포넌트 (텍스트 라벨 제거 및 스타일 조정) ===
const TechIcon = ({
  src,
  alt,
  w = 64,
  h = 64,
}: {
  src: string
  alt: string
  w?: number
  h?: number
}) => (
  // 배경색 흰색, hover 시 연한 회색.
  <div className="flex items-center justify-center w-24 h-24 p-3 border border-gray-300 rounded-lg bg-white hover:bg-gray-100 transition-colors duration-200">
    <Image
      src={src}
      alt={alt}
      width={w}
      height={h}
      className="object-contain"
    />
  </div>
)

// 아이콘 컴포넌트 정의 (파일 하단에 한 번만 정의하여 오류 해결)
const GithubIcon = (props: any) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
)
// Tistory SVG 아이콘 컴포넌트 (T 모양의 가로 간격을 넓게 수정)
const TistoryIcon = (props: any) => (
  <svg
    {...props}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* 빨간색 배경의 둥근 사각형 */}
    <rect
      x="2"
      y="2"
      width="20"
      height="20"
      rx="5"
      ry="5"
      fill="rgb(239 68 68)"
    />{' '}
    {/* Tailwind red-600 */}
    {/* 흰색 T 모양의 점들 (가로 간격 확대) */}
    <circle cx="12" cy="7" r="1.5" fill="#fff" />{' '}
    {/* 상단 가로줄 가운데 (y=7) */}
    <circle cx="8" cy="7" r="1.5" fill="#fff" /> {/* 상단 가로줄 왼쪽 (x=8) */}
    <circle cx="16" cy="7" r="1.5" fill="#fff" />{' '}
    {/* 상단 가로줄 오른쪽 (x=16) */}
    <circle cx="12" cy="12" r="1.5" fill="#fff" /> {/* 가운데 세로줄 (y=12) */}
    <circle cx="12" cy="17" r="1.5" fill="#fff" /> {/* 하단 세로줄 (y=17) */}
  </svg>
)
const InstagramIcon = (props: any) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
)
