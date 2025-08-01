import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const Loader = () => {
	return (

		<div className="inline-flex flex-col gap-8 w-full">
			{Array.from({ length: 10 }).map((_, index) => (
				<div key={index} className="flex w-full flex-col space-y-3 bg-white p-4 rounded-xl">
					<Skeleton className="h-[125px] w-full rounded-xl bg-indigo-100" />
					<div className="space-y-2">
						<Skeleton className="h-4 w-[250px] bg-indigo-100" />
					</div>
				</div>
			))}
		</div>
	);
};

export default Loader;
