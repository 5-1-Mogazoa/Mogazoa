import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import * as S from "@/src/components/common/modal/StyledModal";
import Image from "next/image";
import { getUserFollowees, getUserFollowers } from "@/src/apis/user";
import { useQuery } from "@tanstack/react-query";
import { FollowDataType, FolloweeType, FollowerType } from "@/src/types/user/userDataType";
import { StyledProfileContainer, StyledProfileImage, StyledProfileUl, StyledUserName } from "./Styled/StyledFollowUser";
import Link from "next/link";
import { PAGE_ROUTES } from "@/src/routes";
import { StyledDescription } from "./Styled/StyledDescription";

interface ModalProps {
  setIsOpen: (value: boolean) => void;
  dataType: "follower" | "followee";
  userId: number;
  nickname: string;
  followList: any;
}

function FollowInfoModal({ setIsOpen, dataType, userId, nickname, followList }: ModalProps) {
  const [portalRoot, setPortalRoot] = useState<HTMLElement | null>(null);
  const [cursor, setCursor] = useState<number | null>(null);
  const title = `${nickname}님${dataType === "follower" ? "을" : "이"} 팔로우하는 유저`;
  const [dataList, setDataList] = useState<FollowerType[] | FolloweeType[]>(followList);
  const [noMoreUsers, setNoMoreUsers] = useState(false);

  const { data: userList } = useQuery<FollowDataType>({
    queryKey: ["usersList", cursor],
    queryFn: () =>
      (dataType === "follower"
        ? getUserFollowers(userId, cursor)
        : getUserFollowees(userId, cursor)) as Promise<FollowDataType>,
  });

  const stopEventBubbing = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  useEffect(() => {
    setPortalRoot(document.body);
  }, []);

  useEffect(() => {
    if (userList?.list.length) {
      setDataList([...dataList, ...userList.list] as FollowerType[] | FolloweeType[]);
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
        } else {
          setNoMoreUsers(true);
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
            {dataList.length
              ? dataList.map((item) => {
                  console.log(item);
                  return dataType === "follower" ? (
                    <Link
                      onClick={handleCloseButton}
                      key={(item as FollowerType).follower?.id}
                      href={PAGE_ROUTES.USER_DETAIL((item as FollowerType).follower?.id)}>
                      <StyledProfileContainer>
                        <StyledProfileImage $image={(item as FollowerType).follower?.image} />
                        <StyledUserName>{(item as FollowerType).follower?.nickname}</StyledUserName>
                      </StyledProfileContainer>
                    </Link>
                  ) : (
                    <Link
                      onClick={handleCloseButton}
                      key={(item as FolloweeType).followee?.id}
                      href={PAGE_ROUTES.USER_DETAIL((item as FolloweeType).followee?.id)}>
                      <StyledProfileContainer>
                        <StyledProfileImage $image={(item as FolloweeType).followee?.image} />
                        <StyledUserName>{(item as FolloweeType).followee?.nickname}</StyledUserName>
                      </StyledProfileContainer>
                    </Link>
                  );
                })
              : null}
            {noMoreUsers && <StyledDescription>더 이상 불러올 유저가 없습니다</StyledDescription>}
          </StyledProfileUl>
        </S.Container>
      </S.Background>,
      document.body,
    )
  );
}

export default FollowInfoModal;
