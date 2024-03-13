// import { FormProvider, useForm } from "react-hook-form";
// import * as S from "./styled";
// import Modal from "../../common/modal/Modal";
// import { useState } from "react";
// import FormImageInput from "../../common/input/FormImageInput";
// import FormTextareaInput from "../../common/input/FormTextareaInput";
// import ERROR_MESSAGE from "@/src/constant/ERROR_MESSAGE";

// interface ModalEditProps {
//   userId: number;
//   productDetail: any;
//   onClose: () => void;
// }
// function ModalEdit({ userId, productDetail, onClose }: ModalEditProps) {
//   const [productImage, setProductsImag] = useState();
//   const { name, image, categoryId, description } = productDetail;

//   const methods = useForm();

//   const editProductCallback = () => {};

//   return (
//     <FormProvider {...methods}>
//       <Modal title="상품편집" modalType="edit" onClose={onClose} callback={editProductCallback} isFormData>
//         <S.Container>
//           <FormImageInput name="image" defaultValue={image} />
//           <FormTextareaInput
//             name="description"
//             rules={{
//               required: { value: true, message: ERROR_MESSAGE.REQUIRED_DESCRIPTION },
//               minLength: { value: 10, message: ERROR_MESSAGE.DESCRIPTION_MAX_LENGTH },
//               maxLength: { value: 500, message: ERROR_MESSAGE.DESCRIPTION_MAX_LENGTH },
//             }}
//             placeholder="상품 설명을 입력해 주세요."
//           />
//         </S.Container>
//       </Modal>
//     </FormProvider>
//   );
// }

// export default ModalEdit;

//

import { FormProvider, useForm } from "react-hook-form";
import * as S from "./styled";
import Modal from "../../common/modal/Modal";
import { useState } from "react";
import FormImageInput from "../../common/input/FormImageInput";
import FormTextareaInput from "../../common/input/FormTextareaInput";
import ERROR_MESSAGE from "@/src/constant/ERROR_MESSAGE";
import FormSelectInput from "../../common/input/FormSelectInput";

interface ModalEditProps {
  userId: number;
  productDetail: any;
  onClose: () => void;
}
function ModalEdit({ userId, productDetail, onClose }: ModalEditProps) {
  const [product, setProduct] = useState(productDetail);
  // const { name, image, categoryId, description } = productDetail;

  const methods = useForm();

  const editProductCallback = () => {};

  return (
    <FormProvider {...methods}>
      <Modal title="상품편집" modalType="edit" onClose={onClose} callback={editProductCallback} isFormData>
        <S.Container>
          <FormSelectInput
            id={productDetail.id}
            name="name"
            userId={userId}
            defaultValue={productDetail.name}
            setProduct={setProduct}
          />
          <FormImageInput name="image" defaultValue={product.image} />
          <FormTextareaInput
            name="description"
            rules={{
              required: { value: true, message: ERROR_MESSAGE.REQUIRED_DESCRIPTION },
              minLength: { value: 10, message: ERROR_MESSAGE.DESCRIPTION_MAX_LENGTH },
              maxLength: { value: 500, message: ERROR_MESSAGE.DESCRIPTION_MAX_LENGTH },
            }}
            defaultValue={product.description}
            placeholder="상품 설명을 입력해 주세요."
          />
        </S.Container>
      </Modal>
    </FormProvider>
  );
}

export default ModalEdit;
