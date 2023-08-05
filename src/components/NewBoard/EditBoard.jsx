import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import IconRadioButton from './IconRadioButton';
import { PrimaryButton } from '../PrimaryButton';
import BackgroundRadioButton from './BackgroundRadioButton';
import {
  Title,
  FormBox,
  FormInput,
  Text,
  RadioIconBox,
  RadioBackgroundBox,
  CloseButton,
  ButtonBox,
  SvgBox,
  ButtonText,
} from './NewBoard.styled';
import icons from '../../img/icons/sprite.svg';
import { Svg } from '../SvgIcon/SvgIcon';

const iconNames = [
  'icon-Project',
  'icon-star',
  'icon-loading',
  'icon-puzzle',
  'icon-container',
  'icon-lightning',
  'icon-colors',
  'icon-hexagon',
];

const backgroundImages = [
  'default',
  'flowers',
  'stars',
  'sakura',
  'night',
  'fern',
  'clouds',
  'rock',
  'circle',
  'moon',
  'yacht',
  'balloon',
  'canyon',
  'coast',
  'balloons',
  'aurora',
];

const EditBoard = ({ onClick, id }) => {
  const scheme = 'dark';
  const buttonStyles = {
    padding: '10px 0px 11px 0px',
    borderRadius: '8px',
    backgroundColor: scheme === 'violet' ? '#5255BC' : '#BEDBB0',
    color: '#161616',
    width: '100%',
  };

  const userObject = {
    icon: 'icon-star',
    title: 'clouds',
    background: 'clouds',
  };

  const validationSchema = Yup.object().shape({
    title: Yup.string().required('Title is required'),
    icon: Yup.string().required('An icon must be selected'),
    background: Yup.string().required('A background must be selected'),
  });

  return (
    <Formik
      initialValues={{
        icon: `${userObject.icon}`,
        title: `${userObject.title}`,
        background: `${userObject.background}`,
      }}
      validationSchema={validationSchema}
      onSubmit={values => {
        console.log(values);
        onClick();
      }}
    >
      {formik => (
        <Form>
          <FormBox scheme={scheme}>
            <CloseButton type="button" onClick={onClick}>
              <Svg w={18} h={18} use={`${icons}#icon-x-close`} />
            </CloseButton>
            <Title scheme={scheme}>Edit board</Title>
            <FormInput
              id="title"
              name="title"
              placeholder="Title"
              scheme={scheme}
              value={formik.values.title}
            />
            <Text scheme={scheme}>Icons</Text>
            <RadioIconBox>
              {iconNames.map(iconName => (
                <IconRadioButton
                  key={iconName}
                  name="icon"
                  value={iconName}
                  checked={formik.values.icon === iconName}
                  scheme={scheme}
                />
              ))}
            </RadioIconBox>
            <Text scheme={scheme}>Background</Text>
            <RadioBackgroundBox>
              {backgroundImages.map(image => (
                <BackgroundRadioButton
                  key={image}
                  name="background"
                  value={image}
                  checked={formik.values.background === image}
                  scheme={scheme}
                />
              ))}
            </RadioBackgroundBox>
            <PrimaryButton
              type="submit"
              styles={buttonStyles}
              onClick={() => {
                if (Object.keys(formik.errors).length > 0) {
                  toast.error('Please fill out all the fields');
                }
              }}
            >
              <ButtonBox>
                <SvgBox scheme={scheme}>
                  <Svg w={14} h={14} use={`${icons}#icon-plus`} />
                </SvgBox>
                <ButtonText scheme={scheme}>Edit</ButtonText>
              </ButtonBox>
            </PrimaryButton>
          </FormBox>
        </Form>
      )}
    </Formik>
  );
};

EditBoard.propTypes = {
  onClick: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};

export default EditBoard;
