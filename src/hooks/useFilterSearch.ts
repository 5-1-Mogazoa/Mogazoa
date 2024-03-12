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
    if (searchQuery !== undefined) {
      query.searchQuery = searchQuery;
    } else {
      delete query.sort;
    }
    if (sort !== undefined) {
      query.sortValue = sort;
    } else {
      delete query.sort;
    }
    if (category !== undefined) {
      query.category = category;
    } else {
      delete query.category;
    }

    router.push({
      pathname: "/search",
      query: query,
    });
  };

  return filterSearch;
};

export default useFilterSearch;
