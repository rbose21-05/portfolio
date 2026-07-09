import { useEffect } from "react";
import { useRouter } from "@tanstack/react-router";

function NotFound() {
	const router = useRouter();
	useEffect(() => {
		router.navigate({ to: "/" });
	}, []);
	return null;
}
export default NotFound;
