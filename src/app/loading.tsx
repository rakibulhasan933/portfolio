
export default function Loading() {
	return (
		<div className="space-y-4">
			<div className="flex animate-pulse space-x-4">
				<div className="h-12 w-12 rounded-full bg-muted" />
				<div className="flex-1 space-y-4 py-1">
					<div className="h-4 w-3/4 rounded bg-muted" />
					<div className="h-4 w-1/2 rounded bg-muted" />
				</div>
			</div>
			<div className="grid grid-cols-3 gap-4 animate-pulse">
				<div className="col-span-1 rounded bg-muted h-40" />
				<div className="col-span-1 rounded bg-muted h-40" />
				<div className="col-span-1 rounded bg-muted h-40" />
			</div>
			<div className="space-y-4 animate-pulse">
				<div className="h-4 w-full rounded bg-muted" />
				<div className="h-4 w-full rounded bg-muted" />
				<div className="h-4 w-3/4 rounded bg-muted" />
			</div>
		</div>
	)
}