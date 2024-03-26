import styled from "styled-components";
import PhotoIcon from "../../../../../public/icons/photoSvgr.svg";
import DeleteIcon from "../../../../../public/icons/closeSvgr.svg";

export const Container = styled.div`
  position: relative;
  width: 29.5rem;
  overflow-x: scroll;

  /* 스크롤바가 보이더라도 가시적으로 숨기기 */
  scrollbar-width: none; /* Firefox 용 */
  -ms-overflow-style: none; /* IE 및 Edge 용 */

  /* Webkit 브라우저를 위한 스크롤바 숨기기 */
  &::-webkit-scrollbar {
    display: none;
  }

  @media (min-width: ${({ theme }) => theme.deviceSizes.tablet}) {
    width: 51rem;
  }

  @media (min-width: ${({ theme }) => theme.deviceSizes.desktop}) {
    width: 54rem;
  }
`;

export const LabelWithPreviews = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;

  @media (min-width: ${({ theme }) => theme.deviceSizes.tablet}) {
    gap: 1.5rem;
  }

  @media (min-width: ${({ theme }) => theme.deviceSizes.desktop}) {
    gap: 2rem;
  }
`;

export const Label = styled.label`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 14rem;
  height: 14rem;
  object-fit: cover;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid var(--color-black-35);
  background-color: var(--color-black-25);
  flex-shrink: 0;

  &:hover {
    border: 0.1rem solid var(--color-main-blue);
  }

  @media (min-width: ${({ theme }) => theme.deviceSizes.tablet}) {
    width: 13.5rem;
    height: 13.5rem;
  }

  @media (min-width: ${({ theme }) => theme.deviceSizes.desktop}) {
    width: 16rem;
    height: 16rem;
  }
`;

export const ImageInput = styled.input`
  display: none;
`;

export const Icon = styled(PhotoIcon)`
  position: absolute;
  top: 5.9rem;
  left: 5.9rem;
  width: 2.4rem;
  height: 2.4rem;
  cursor: pointer;
  svg {
    width: 100%;
    height: 100%;
  }

  @media (min-width: ${({ theme }) => theme.deviceSizes.tablet}) {
    top: 5.5rem;
    left: 5.5rem;
    width: 2.5rem;
    height: 2.5rem;
  }

  @media (min-width: ${({ theme }) => theme.deviceSizes.desktop}) {
    top: 6.3rem;
    left: 6.3rem;
    width: 3.4rem;
    height: 3.4rem;
  }
`;

export const PreviewImage = styled(Label)`
  position: relative;
  border: none;
`;

export const DeleteButton = styled(DeleteIcon)`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  width: 2.6rem;
  height: 2.6rem;
  padding: 0.4rem;
  border-radius: 0.8rem;
  background: rgba(0, 0, 0, 0.5);
  z-index: ${({ theme }) => theme.zIndex.default};
  cursor: pointer;

  @media (min-width: ${({ theme }) => theme.deviceSizes.tablet}) {
    width: 2.8rem;
    height: 2.8rem;
  }
`;
