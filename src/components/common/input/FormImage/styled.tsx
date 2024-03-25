import * as S from "../FormMultiImageInput/styled";
import styled from "styled-components";
import PhotoIcon from "../../../../../public/icons/photoSvgr.svg";

type ImageInputProps = {
  $previewImage: string | undefined;
};

export const Label = styled(S.Label)<ImageInputProps>`
  background-image: url(${({ $previewImage }) => $previewImage});
  background-size: cover;
  background-position: center;
`;

export const ImageInput = styled(S.ImageInput)``;

export const Icon = styled(S.Icon)``;
