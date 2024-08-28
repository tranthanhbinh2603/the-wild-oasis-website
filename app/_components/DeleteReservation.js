"use client";

import { TrashIcon } from "@heroicons/react/24/solid";
import { deleteBooking } from "../_lib/action";
import { useTransition } from "react";
import SpinnerMini from "./SpinnerMini";

function DeleteReservation({ bookingId }) {
	const [isPending, startTransition] = useTransition();

	function handleDelete() {
		if (confirm("Are you sure you want to delete this reservation?"))
			startTransition(() => deleteBooking(bookingId));
	}

	return (
		<button
			className="group flex items-center gap-2 uppercase text-xs font-bold text-primary-300 flex-grow px-3 hover:bg-accent-600 transition-colors hover:text-primary-900"
			onClick={handleDelete}
		>
			{!isPending ? (
				<>
					<TrashIcon className="h-5 w-5 text-primary-600 group-hover:text-primary-800 transition-colors" />
					<span className="mt-1">Delete</span>
				</>
			) : (
				<div className="flex items-center justify-center w-full h-full">
					<SpinnerMini />
				</div>
			)}
		</button>
	);
}

export default DeleteReservation;
