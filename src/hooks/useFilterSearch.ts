import { useRouter } from "next/router";

export type filterSearchProps = {
  category?: string | null;
  order?: string | null;
  keyword?: string | null;
};

const useFilterSearch = () => {
  const router = useRouter();

  const filterSearch = ({ category, order, keyword }: filterSearchProps) => {
    const { query } = router; // pathname 추가
    console.log({ category, order, keyword }, query);

    updateQuery(query, "keyword", keyword);
    updateQuery(query, "order", order);
    updateQuery(query, "category", category);

    router.push({
      pathname: router.pathname,
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
