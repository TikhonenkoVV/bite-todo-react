import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
  StyledDiv,
  StyledInput,
  StyledP,
  StyledTextArea,
} from './FormNeedHelp.styled';
import { sendNeedHelp } from 'store/boards/operations';
import { useDispatch, useSelector } from 'react-redux';
import { Notify } from 'notiflix';
import { selectUser } from 'store/auth/selectors';
import { ButtonCloseModal } from 'components/miniComponents/ButtonCloseModal/ButtonCloseModal';
import { PrimaryButton } from 'components/PrimaryButton/PrimaryButton';

export const FormNeedHelp = ({ closeModal }) => {
  const dispatch = useDispatch();

  const { name, email } = useSelector(selectUser);

  const formik = useFormik({
    initialValues: {
      name,
      email,
      message: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Required'),
      message: Yup.string()
        .min(8, 'Must be not less than 8 characters')
        .max(2000, 'Must be 2000 characters or less')
        .required('Required'),
    }),
    onSubmit: values => {
      Notify.info(
        'Your email has been sent to support. Expect a response to your email within a day.',
        {
          timeout: 4000,
        }
      );
      dispatch(sendNeedHelp(values));
      closeModal();
    },
  });

  return (
    <StyledDiv>
      <ButtonCloseModal onClose={closeModal} size={18} icon={'x-close'}/>
      <StyledP>Need help</StyledP>
      <form onSubmit={formik.handleSubmit}>
        <StyledInput
          name="email"
          type="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="Email address"
        />
        <StyledTextArea
          type="text"
          name="message"
          placeholder="comment"
          value={formik.values.message}
          onChange={formik.handleChange}
        />
        <PrimaryButton type="submit" title="Send" />
      </form>
    </StyledDiv>
  );
};
