/**
 * Loader Component
 * 
 * Loading skeleton component that displays while fonts are being fetched.
 * Provides visual feedback during data loading states.
 * 
 * Features:
 * - Skeleton loading animation
 * - Consistent with font card layout
 * - Multiple skeleton items for realistic loading
 */

import { Skeleton } from "@/components/ui/skeleton";
import React from "react";
import { Separator } from "@/components/ui/separator";

const Loader = () => {
	return (

		<div className="inline-flex flex-col gap-8 w-full">
			{Array.from({ length: 10 }).map((_, index) => (
				<div key={index} className="flex w-full flex-col gap-4 rounded-xl">
					<Skeleton className="h-20 w-full rounded-xl border-2 border-gray-200" />
					<Skeleton className="h-4 w-[250px] border-2 border-gray-200 mb-4" />
					<Separator />
				</div>
			))}
		</div>
	);
};

export default Loader;
