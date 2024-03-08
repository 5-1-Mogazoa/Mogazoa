import SearchCardList from "../SearchCardList/SearchCardList";
import SearchTitle from "../SearchTitle/SearchTitle";
export default function SearchProducts() {
  return (
    <>
      <SearchTitle searchKeyword={"테스트제목"} />
      <SearchCardList />
    </>
  );
}
