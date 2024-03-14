import { useRouter } from "next/router";

export type filterSearchProps = {
  category?: string | null;
  sort?: string | null;
  searchQuery?: string | null;
};

const useFilterSearch = () => {
  const router = useRouter();

  const filterSearch = ({ category, sort, searchQuery }: filterSearchProps) => {
    const { query } = router; // pathname 추가
    console.log({ category, sort, searchQuery }, query);

    updateQuery(query, "searchQuery", searchQuery);
    updateQuery(query, "sortValue", sort);
    updateQuery(query, "category", category);

    router.push({
      pathname: "/search",
      query: query,
    });
  };

  const updateQuery = (query: any, key: string, value?: string | null) => {
    if (value) {
      query[key] = value;
    } else if (query[key] && value === null) {
      delete query[key];
    }
  };

  return filterSearch;
};

export default useFilterSearch;
