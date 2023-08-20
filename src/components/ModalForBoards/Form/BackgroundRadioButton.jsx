import React from 'react';
import PropTypes from 'prop-types';
import { RadioButton, RadioImg } from './FormForBoards.styled';

import defaultImage from '../../../img/modal/default.png';
import flowersImage from '../../../img/modal/flowers.png';
import starsImage from '../../../img/modal/stars.png';
import sakuraImage from '../../../img/modal/sakura.png';
import nightImage from '../../../img/modal/night.png';
import fernImage from '../../../img/modal/fern.png';
import cloudsImage from '../../../img/modal/clouds.png';
import rockImage from '../../../img/modal/rock.png';
import circleImage from '../../../img/modal/circle.png';
import moonImage from '../../../img/modal/moon.png';
import yachtImage from '../../../img/modal/yacht.png';
import balloonImage from '../../../img/modal/balloon.png';
import canyonImage from '../../../img/modal/canyon.png';
import coastImage from '../../../img/modal/coast.png';
import balloonsImage from '../../../img/modal/balloons.png';
import auroraImage from '../../../img/modal/aurora.png';

const backgroundImages = [
  { value: 'default', image: defaultImage },
  { value: 'flowers', image: flowersImage },
  { value: 'stars', image: starsImage },
  { value: 'sakura', image: sakuraImage },
  { value: 'night', image: nightImage },
  { value: 'fern', image: fernImage },
  { value: 'clouds', image: cloudsImage },
  { value: 'rock', image: rockImage },
  { value: 'circle', image: circleImage },
  { value: 'moon', image: moonImage },
  { value: 'yacht', image: yachtImage },
  { value: 'balloon', image: balloonImage },
  { value: 'canyon', image: canyonImage },
  { value: 'coast', image: coastImage },
  { value: 'balloons', image: balloonsImage },
  { value: 'aurora', image: auroraImage },
];

const BackgroundRadioButton = ({ value, checked }) => {
  const selectedImage = backgroundImages.find(
    imageObj => imageObj.value === value
  );

  return (
    <label>
      <RadioButton type="radio" name="background" value={value} />
      <RadioImg
        src={selectedImage.image}
        alt={value}
        checked={checked}
              />
    </label>
  );
};

BackgroundRadioButton.propTypes = {
  value: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  theme: PropTypes.string,
};

export default BackgroundRadioButton;
