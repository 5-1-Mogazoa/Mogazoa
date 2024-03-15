import { deleteFollow, postFollow } from "@/src/apis/follow";
import { StyledFollowButton } from "./Styled/StyledFollowButton";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";

type FollowButtonProps = {
  isFollowingData: boolean;
  userId: number;
};

export default function FollowButton({ isFollowingData, userId }: FollowButtonProps) {
  const [isFollowing, setIsFollowing] = useState(isFollowingData);
  const postFollowMutation = useMutation({
    mutationFn: (userId: number) => postFollow(userId),
  });
  const deleteFollowMutation = useMutation({
    mutationFn: (userId: number) => deleteFollow(userId),
  });
  const handleButtonClick = async () => {
    if (isFollowing) {
      await deleteFollowMutation.mutateAsync(userId);
    } else {
      await postFollowMutation.mutateAsync(userId);
    }
    setIsFollowing(!isFollowing);
  };

  return (
    <StyledFollowButton onClick={handleButtonClick} $isFollowing={isFollowing}>
      {isFollowing ? "팔로우 취소" : "팔로우"}
    </StyledFollowButton>
  );
}
