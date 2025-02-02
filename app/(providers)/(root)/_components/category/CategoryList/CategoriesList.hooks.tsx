import api from "@/api/api";
import { useQuery } from "@tanstack/react-query";

function useCategoriesList() {
	const { data: categories } = useQuery({
		queryKey: ["categories"],
		queryFn: api.categories.getCategories,
		initialData: [],
	});

	return { categories };
}

export default useCategoriesList;
