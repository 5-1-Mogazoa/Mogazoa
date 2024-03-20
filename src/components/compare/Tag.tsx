import { useState } from "react";
import clsx from "clsx";
import styles from "./TagInput.module.scss";
import { TodoCreateType } from "@/types/cards";
import { generateRandomColorHexCode } from "@/utils/color";
import TagChips from "@/components/chips/TagChips";

interface TagInputProps {
  formState: TodoCreateType;
  setFormState: React.Dispatch<React.SetStateAction<TodoCreateType>>;
}

function TagInput({ formState, setFormState }: TagInputProps) {
  const [tagInput, setTagInput] = useState<string>("");
  const [tags, setTags] = useState<string[]>([]);

  const handleTagChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTagInput(event.target.value);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();

      const newTag = `${tagInput}`;
      if (newTag !== "") {
        const newColor = generateRandomColorHexCode();
        setFormState((prevState) => ({
          ...prevState,
          tags: [...prevState.tags, newTag],
        }));
        setTags((prevTags) => [...prevTags, newColor]);
        setTagInput("");
      }
    }
  };

  const handleDeleteTag = (index: number) => {
    const updatedTags = [...formState.tags];
    updatedTags.splice(index, 1);
    setFormState((prevState) => ({
      ...prevState,
      tags: updatedTags,
    }));

    const updatedTagColors = [...tags];
    updatedTagColors.splice(index, 1);
    setTags(updatedTagColors);
  };

  return (
    <div className={clsx(styles.tagWrapper)}>
      <div className={clsx(styles.tagsContainer)}>
        {formState.tags.map((tag, index) => (
          <TagChips
            key={`tags_${index}`}
            tagName={tag}
            color={generateRandomColorHexCode()}
            onDelete={() => handleDeleteTag(index)}
          />
        ))}
      </div>
      <input
        type="text"
        value={tagInput}
        onChange={handleTagChange}
        onKeyPress={handleKeyDown}
        placeholder="입력 후 Enter"
      />
    </div>
  );
}
export default TagInput;
