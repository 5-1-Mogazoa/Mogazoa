import { useRouter } from "next/router";

export type filterSearchProps = {
  category?: string;
  sort?: string;
  searchQuery?: string;
};

const useFilterSearch = () => {
  const router = useRouter();

  const filterSearch = ({ category, sort, searchQuery }: filterSearchProps) => {
    const { query } = router;
    if (searchQuery !== undefined) query.searchQuery = searchQuery;
    if (sort !== undefined) query.sortValue = sort;
    if (category !== undefined) query.category = category;

    router.push({
      pathname: router.pathname,
      query: query,
    });
  };

  return filterSearch;
};

export default useFilterSearch;
