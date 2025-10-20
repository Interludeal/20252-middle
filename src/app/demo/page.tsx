import Image from 'next/image'
import Link from 'next/link'

export default function Demo() {
  const boxHoverStyle =
    'shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1'

  const projects = [
    {
      id: 1,
      title: 'Clerk-app Demo',
      description:
        'Next.js 프레임워크 자체의 이해와 더 나아가 일반적인 HTML과는 <br /> 다른 디렉터리 구조, 파일명을 알고 API와 라우팅, 렌더링 방식을 <br /> 활용하여 강의 중 제작한 예제 프로젝트입니다.',
      imgSrc: '/demo.png',
      demoUrl: 'https://clerk-app-lyart.vercel.app/',
      gitUrl: 'https://github.com/Interludeal/clerk-app',
    },
    {
      id: 2,
      title: 'CRUD Demo',
      description:
        '간단한 CRUD (Create, Read, Update, Delete)를 이해하고<br /> 더 나아가 DB를 이해하고 Mongo DB를 활용하기 위해 <br />제작한 예제 프로젝트입니다.',
      imgSrc: '/crud.png',
      demoUrl: 'https://crud-cdycqr1ps-interludeals-projects.vercel.app/',
      gitUrl: 'https://github.com/Interludeal/crud',
    },
  ]

  const ProjectBox = ({ project }: { project: (typeof projects)[0] }) => (
    <div
      className={`group bg-white border-2 border-black rounded-2xl ${boxHoverStyle}`}
    >
      <div className="p-8 md:p-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-10 items-center">
          <div className="md:col-span-2">
            <div
              className="w-full max-w-[320px] mx-auto md:mx-0 
                            h-80 relative overflow-hidden"
            >
              <div
                className="relative aspect-video w-full h-auto 
                              rounded-xl border-2 border-gray-400 overflow-hidden 
                              mx-auto my-auto top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              >
                <Image
                  src={project.imgSrc}
                  alt={project.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  priority={project.id === 1}
                />
              </div>
            </div>
          </div>

          <div className="md:col-span-3">
            <h1 className="text-3xl md:text-4xl font-bold text-black mb-4">
              {project.title}
            </h1>
            <p
              className="text-lg text-gray-700 leading-relaxed mb-6"
              dangerouslySetInnerHTML={{ __html: project.description }}
            />

            <div className="flex flex-wrap gap-4">
              <Link
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-all duration-200 flex items-center space-x-2 hover:ring-2 hover:ring-blue-500 hover:ring-opacity-50"
              >
                <span>데모 보기</span>
                <svg
                  className="w-4 h-4 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </Link>

              <Link
                href={project.gitUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-medium hover:border-gray-400 hover:bg-gray-50 transition-all duration-200 flex items-center space-x-2 hover:ring-2 hover:ring-gray-300 hover:ring-opacity-50"
              >
                <svg
                  className="w-4 h-4 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                <span>소스코드</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex items-center justify-center">
        <div className="w-full">
          <div className="mx-auto max-w-5xl space-y-8">
            <ProjectBox project={projects[0]} />

            <ProjectBox project={projects[1]} />
          </div>
        </div>
      </div>
    </div>
  )
}
