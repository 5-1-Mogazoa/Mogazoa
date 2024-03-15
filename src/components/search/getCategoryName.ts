export const getCategoryName = (categoryId: string | undefined): string => {
  switch (categoryId) {
    case "1":
      return "음악";
    case "2":
      return "영화/드라마";
    case "3":
      return "강의/책";
    case "4":
      return "호텔";
    case "5":
      return "가구/인테리어";
    case "6":
      return "식당";
    case "7":
      return "전자기기";
    case "8":
      return "화장품";
    case "9":
      return "의류/잡화";
    case "10":
      return "앱";
    default:
      return "";
  }
};
