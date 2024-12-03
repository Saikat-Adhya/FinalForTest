import HeroContent from './HeroContent';
import ProfileImage from './ProfileImage';

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex flex-col-reverse lg:flex-row items-center justify-center h-full gap-8">
        <HeroContent />
        <ProfileImage />
      </div>
    </section>
  );
};

export default Hero;