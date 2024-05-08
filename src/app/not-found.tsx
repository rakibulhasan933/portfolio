import Link from 'next/link'

export default function NotFound() {
	return (
		<div className="flex text-gray-300 items-center justify-center min-h-[400px] px-4 text-center md:px-6">
			<div className="space-y-4">
				<h1 className="text-4xl font-bold tracking-tighter sm:text-5xl text-blue-500">4<span className=' text-red-500'>0</span>4 : <span className=" text-gray-300">Page Not Found</span></h1>
				<p className="max-w-[600px] text-gray-200 md:text-xl/relaxed dark:text-gray-400">
					Sorry, we couldn’t find the page you’re looking for.
				</p>
				<Link
					className="inline-flex h-10 items-center justify-center rounded-md border  border-gray-200 px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
					href="/"
				>
					Return to website
				</Link>
			</div>
		</div>
	)
}