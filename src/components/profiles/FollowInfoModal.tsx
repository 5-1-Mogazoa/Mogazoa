import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import * as S from "@/src/components/common/modal/StyledModal";
import Image from "next/image";
import { getUserFollowees, getUserFollowers } from "@/src/apis/user";
import { useQuery } from "@tanstack/react-query";
import { followDataType, followeeType, followerType } from "@/src/types/user/userDataType";
import { StyledProfileContainer, StyledProfileImage, StyledProfileUl, StyledUserName } from "./Styled/StyledFollowUser";
import Link from "next/link";
import { PAGE_ROUTES } from "@/src/routes";

interface ModalProps {
  setIsOpen: (value: boolean) => void;
  dataType: "follower" | "followee";
  userId: number;
  nickname: string;
}

function FollowInfoModal({ setIsOpen, dataType, userId, nickname }: ModalProps) {
  const [portalRoot, setPortalRoot] = useState<HTMLElement | null>(null);
  const [cursor, setCursor] = useState<number | null>(null);
  const title = `${nickname}님${dataType === "follower" ? "을" : "이"} 팔로우하는 유저`;
  const [dataList, setDataList] = useState<followerType[] | followeeType[]>([]);

  const { data: userList } = useQuery<followDataType>({
    queryKey: ["usersList", cursor],
    queryFn: () =>
      (dataType === "follower"
        ? getUserFollowers(userId, cursor)
        : getUserFollowees(userId, cursor)) as Promise<followDataType>,
  });

  const stopEventBubbing = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  useEffect(() => {
    setPortalRoot(document.body);
  }, []);

  useEffect(() => {
    if (userList) {
      setDataList([...dataList, ...userList.list] as followerType[] | followeeType[]);
    }
  }, [userList]);

  const handleCloseButton = () => setIsOpen(false);

  const scrollableRef = useRef<HTMLUListElement>(null);

  const handleScroll = () => {
    const scrollableDiv = scrollableRef.current;
    if (scrollableDiv) {
      if (scrollableDiv.scrollHeight - scrollableDiv.scrollTop === scrollableDiv.clientHeight) {
        if (userList?.nextCursor) {
          setCursor(userList?.nextCursor);
        }
      }
    }
  };

  return (
    portalRoot &&
    createPortal(
      <S.Background onClick={handleCloseButton}>
        <S.Container $isSmall={false} onClick={stopEventBubbing}>
          <S.Header>
            <S.Title>{title}</S.Title>
            <S.CloseButton onClick={handleCloseButton}>
              <Image fill src="/icons/closeSvgr.svg" alt="" />
            </S.CloseButton>
          </S.Header>
          <StyledProfileUl ref={scrollableRef} onScroll={handleScroll}>
            {dataList.map((item) => {
              return dataType === "follower" ? (
                <Link href={PAGE_ROUTES.USER_DETAIL((item as followerType).follower.id)}>
                  <StyledProfileContainer key={(item as followerType).follower.id}>
                    <StyledProfileImage $image={(item as followerType).follower.image} />
                    <StyledUserName>{(item as followerType).follower.nickname}</StyledUserName>
                  </StyledProfileContainer>
                </Link>
              ) : (
                <Link href={PAGE_ROUTES.USER_DETAIL((item as followeeType).followee.id)}>
                  <StyledProfileContainer key={(item as followeeType).followee.id}>
                    <StyledProfileImage $image={(item as followeeType).followee.image} />
                    <StyledUserName>{(item as followeeType).followee.nickname}</StyledUserName>
                  </StyledProfileContainer>
                </Link>
              );
            })}
          </StyledProfileUl>
        </S.Container>
      </S.Background>,
      document.body,
    )
  );
}

export default FollowInfoModal;
