import styled from "styled-components";
import PhotoIcon from "../../../../../public/icons/photoSvgr.svg";

type ImageInputProps = {
  $previewImage: string | undefined;
};

export const Label = styled.label<ImageInputProps>`
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
  background-image: url(${({ $previewImage }) => $previewImage});
  background-size: cover;
  background-position: center;
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
