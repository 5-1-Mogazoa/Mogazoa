import { StyledCategoryMenuBarTitle, StyledCategoryMenuItem } from "./Styled/StyledCategoryMenuBar";

export default function CategoryMenuBar() {
  return (
    <div>
      <StyledCategoryMenuBarTitle>카테고리</StyledCategoryMenuBarTitle>
      <StyledCategoryMenuItem>분류1</StyledCategoryMenuItem> <StyledCategoryMenuItem>분류1</StyledCategoryMenuItem>
      <StyledCategoryMenuItem>분류2</StyledCategoryMenuItem>
      <StyledCategoryMenuItem>분류3</StyledCategoryMenuItem>
      <StyledCategoryMenuItem $selected>분류4</StyledCategoryMenuItem>
    </div>
  );
}
