// src/app/components/Hero.tsx
const Hero: React.FC = () => {
  return (
    <section className="relative bg-cover bg-center h-[80vh] flex items-center justify-center mt-[-70px] md:mt-0 mb-8" 
    style={{ backgroundImage: 'url(/images/main_1.webp)' }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black opacity-50"></div>
      <div className="container relative z-10 text-center text-white py-24 ">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 animate__animated animate__fadeIn ">
          Welcome to Nourain
        </h1>
        <p className="text-lg md:text-2xl mb-6 animate__animated animate__fadeIn animate__delay-1s">
          We provide innovative solutions for signage, HVAC, and more.
        </p>
        <a href="#services" className="bg-primary text-white px-6 py-3 rounded-full text-lg hover:bg-primary-dark transition">
          Explore Our Services
        </a>
      </div>
    </section>
  );
};

export default Hero;
