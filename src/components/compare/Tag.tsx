// pages/index.js

import React, { useState } from "react";
import { CompareChipA, CompareChipB } from "@/src/components/common/chip/CompareChip"

const IndexPage = () => {
  const [tags, setTags] = useState([]);
  const [tagInput, setTagInput] = useState<string>("");

  const handleeAddTag = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTagInput(event.target.value);
  };

  const handleRemoveTag = (index: number) => {
    const updatedTags = [...formState.tags];
    updatedTags.splice(index, 1);
    setFormState((prevState) => ({
      ...prevState,
      tags: updatedTags,
    }));
  };
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();

    }
  };

  return (
    <div>
      <div>
        {/* <input type="text" id="tagInput" placeholder="단어를 입력하세요" /> */}
          <div 
            {formState.tags.map((tag, index) => (
              <TagChips
                key={`tags_${index}`}
                tagName={tag}
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
      </div>
    </div>
  );
};

export default IndexPage;
