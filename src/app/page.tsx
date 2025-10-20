import Image from 'next/image'
import Link from 'next/link'

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
)
const LinkIconSVG = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
  </svg>
)

interface MemberProps {
  name: string
  role: string
  imgSrc: string
  githubUrl: string
  blogUrl: string
}

const TeamMemberCard = ({
  name,
  role,
  imgSrc,
  githubUrl,
  blogUrl,
}: MemberProps) => {
  const cardHoverStyle =
    'shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-blue-400'

  return (
    <div
      className={`bg-white border-2 border-gray-300 rounded-lg p-4 text-center ${cardHoverStyle}`}
    >
      <div className="w-20 h-20 mx-auto rounded-full overflow-hidden mb-3 relative border border-gray-200">
        <Image
          src={imgSrc}
          alt={name + ' 프로필'}
          fill
          style={{ objectFit: 'cover' }}
          sizes="80px"
          priority={role === '팀장 (PM)'}
        />
      </div>

      <h3 className="text-md font-semibold text-black">{name}</h3>
      <p className="text-sm text-gray-500 mb-4">{role}</p>

      <div className="flex justify-center space-x-2">
        <Link
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 border border-gray-300 rounded-full text-gray-700 hover:bg-gray-100 transition-colors"
        >
          <GithubIcon className="w-4 h-4" />
        </Link>

        <Link
          href={blogUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 border border-gray-300 rounded-full text-blue-600 hover:bg-blue-50 transition-colors"
        >
          <LinkIconSVG className="w-4 h-4" />
        </Link>
      </div>
    </div>
  )
}

export default function Home() {
  const boxHoverStyle =
    'shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1'

  const teamData = [
    {
      name: '정재성',
      role: '팀장 (PM)',
      imgSrc: '/team/interludeal.png',
      githubUrl: 'https://github.com/Interludeal',
      blogUrl: '/about',
    },
    {
      name: '곽민경',
      role: '팀원 (PA)',
      imgSrc: '/team/kkaturi14.jpg',
      githubUrl: 'https://github.com/kkaturi14',
      blogUrl: '/',
    },
    {
      name: '박혜수',
      role: '팀원 (PA)',
      imgSrc: '/team/Pandyo.png',
      githubUrl: 'https://github.com/Pandyo',
      blogUrl: 'https://web-server-class-project-01.vercel.app/',
    },
    {
      name: '심재훈',
      role: '팀원 (PA)',
      imgSrc: '/team/J4EH00N.png',
      githubUrl: 'https://github.com/J4EH00N',
      blogUrl: 'https://midterm-portfolio-two.vercel.app/',
    },
    {
      name: '정윤서',
      role: '팀원 (PA)',
      imgSrc: '/team/oesp91.jpg',
      githubUrl: 'https://github.com/oesp91',
      blogUrl: '/',
    },
  ]

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex items-center justify-center">
        <div className="w-full">
          <div className="mx-auto max-w-5xl">
            <div
              className={`group bg-white border-2 border-black rounded-2xl ${boxHoverStyle}`}
            >
              <div className="p-8 md:p-12">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-10 items-center">
                  <div className="md:col-span-2">
                    <div className="aspect-square w-full max-w-[320px] mx-auto md:mx-0 rounded-xl border-2 border-gray-400 bg-gray-100 overflow-hidden relative">
                      <Image
                        src="/home.png"
                        alt="웹서버보안프로그래밍 포트폴리오 메인 화면"
                        fill
                        style={{ objectFit: 'cover' }}
                        priority
                      />
                    </div>
                  </div>

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

            <div className="mt-8 max-w-5xl mx-auto">
              <div
                className={`bg-white border-2 border-black rounded-2xl p-6 shadow-lg`}
              >
                <h2 className="text-2xl font-bold text-black mb-6 text-center">
                  동네ON
                </h2>

                <div className="border-t border-b border-gray-200 py-6">
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                    {teamData.map((member, index) => (
                      <TeamMemberCard key={index} {...member} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
