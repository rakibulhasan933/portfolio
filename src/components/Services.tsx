import Link from "next/link"
import { BorderBeam } from "./ui/border-beam"

export default function Services() {
    return (
        <main className="flex-1">
            <section className="w-full py-6 md:py-12">
                <div className="container space-y-12 px-4 md:px-6">
                    <div className="flex flex-col items-center justify-center space-y-4 text-center z-10">
                        <div className="space-y-2">
                            <h2 className="text-3xl text-white font-bold tracking-tighter sm:text-5xl">What I Can Do For You</h2>
                            <p className="max-w-[900px] text-white md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                I offer a wide range of web development services to help you achieve your online goals.
                            </p>
                        </div>
                    </div>
                    <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
                        <div className="relative grid gap-4 p-6  rounded-lg h-full z-10 bg-gray-700">
                            <div className="flex items-center gap-4">
                                <div className="bg-primary rounded-md p-3 flex items-center justify-center">
                                    <CodeIcon className="w-6 h-6 text-primary-foreground" />
                                </div>
                                <h3 className="text-xl text-white font-semibold">Web Development</h3>
                            </div>
                            <p className="text-white">
                                I can build custom web applications and websites using the latest technologies and best practices.
                            </p>
                            <Link
                                href="#"
                                className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                                prefetch={false}
                            >
                                Learn More
                            </Link>
                            <BorderBeam size={250} duration={20} delay={20} />
                        </div>
                        <div className=" relative grid gap-4 p-6  bg-gray-700 rounded-lg h-full z-10">
                            <BorderBeam size={250} duration={20} delay={15} />
                            <div className="flex items-center gap-4">
                                <div className="bg-primary rounded-md p-3 flex items-center justify-center">
                                    <BrushIcon className="w-6 h-6 text-primary-foreground" />
                                </div>
                                <h3 className="text-xl text-white font-semibold">Web Design</h3>
                            </div>
                            <p className="text-white">
                                I can create visually appealing and user-friendly designs for your website or web application.
                            </p>
                            <Link
                                href="#"
                                className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                                prefetch={false}
                            >
                                Learn More
                            </Link>
                        </div>
                        <div className="relative grid gap-4 p-6  bg-gray-700 rounded-lg h-full z-10">
                            <BorderBeam size={250} duration={20} delay={10} />
                            <div className="flex items-center gap-4">
                                <div className="bg-primary rounded-md p-3 flex items-center justify-center">
                                    <BriefcaseIcon className="w-6 h-6 text-primary-foreground" />
                                </div>
                                <h3 className="text-xl text-white font-semibold">Consulting</h3>
                            </div>
                            <p className="text-white">
                                I can provide expert advice and guidance to help you make informed decisions about your web projects.
                            </p>
                            <Link
                                href="#"
                                className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                                prefetch={false}
                            >
                                Learn More
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

function BriefcaseIcon(props: any) {
    return (
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
            <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
            <rect width="20" height="14" x="2" y="6" rx="2" />
        </svg>
    )
}


function BrushIcon(props: any) {
    return (
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
            <path d="m9.06 11.9 8.07-8.06a2.85 2.85 0 1 1 4.03 4.03l-8.06 8.08" />
            <path d="M7.07 14.94c-1.66 0-3 1.35-3 3.02 0 1.33-2.5 1.52-2 2.02 1.08 1.1 2.49 2.02 4 2.02 2.2 0 4-1.8 4-4.04a3.01 3.01 0 0 0-3-3.02z" />
        </svg>
    )
}


function CodeIcon(props: any) {
    return (
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
            <polyline points="16 18 22 12 16 6" />
            <polyline points="8 6 2 12 8 18" />
        </svg>
    )
}