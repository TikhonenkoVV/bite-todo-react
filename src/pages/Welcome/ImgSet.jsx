import MobHeroImg from '../../img/Mobil/welcome-img.png';
import MobHeroImg2x from '../../img/Mobil/welcome-img@2x.png';
import TabHeroImg from '../../img/Tablet/welcome-img.png';
import TabHeroImg2x  from '../../img/Tablet/welcome-img@2x.png';
import DeskHeroImg from '../../img/Desktop/welcome-img.png';
import DeskHeroImg2x  from '../../img/Desktop/welcome-img@2x.png';

export const ImgSet = () => {
  return (
    <picture>
      <source 
      media="(min-width: 1440px)" 
      srcSet={DeskHeroImg}
      sizes='162px' />
      <source 
      media="(min-width: 1440px)" 
      srcSet={DeskHeroImg2x}
      sizes='162px' />
      <img src={DeskHeroImg}/>
    </picture>
  );
};
