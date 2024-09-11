import React, { useState, useEffect } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import ExpertiesHome from '../components/expertiesHome';
import Nav from '../components/nav';
import Footer from '../components/footer';
import '../css/Home.css'; 

const images = [
  './img/HTML5_BHISHAN_SAH_21SOECE11636_page-0001.jpg',
  './img/html bhishan sololearn_page-0001.jpg',
  './img/CSS3_BHISHAN_SAH_21SOECE11636_page-0001.jpg',
  './img/sololearm bhishan css_page-0001.jpg',
  './img/JAVA_BHISHAN_SAH_21SOECE11636_page-0001.jpg',
  './img/Java_language.jpg',
  './img/java_funtamental.jpg',
  './img/se8_java.jpg',
  './img/python.jpg',
  './img/python-core.jpg',
  './img/language-c.jpg',
  './img/spark-ar.jpg',
  './img/mahendra-exp.jpg',
  './img/hackithon.jpg',
  './img/hackithon-2.jpg',
];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [downloading, setDownloading] = useState(false);
  const itemsToShow = 3;

  const handlePrevClick = () => {
    setCurrentIndex(prevIndex => Math.max(prevIndex - 1, 0));
  };

  const handleNextClick = () => {
    setCurrentIndex(prevIndex => {
      if (prevIndex >= images.length - itemsToShow) {
        return 0; // Loop back to the beginning
      }
      return prevIndex + 1;
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => {
        if (prevIndex >= images.length - itemsToShow) {
          return 0; // Loop back to the beginning
        }
        return prevIndex + 1;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const isFirstImage = currentIndex === 0;
  const isLastImage = currentIndex >= images.length - itemsToShow;

  const handleDownloadCv = () => {
    setDownloading(true);

    setTimeout(() => {
      const link = document.createElement('a');
      link.href = './My_resume/Bhishan-sah_Resume_CV.pdf'; 
      link.download = 'Bhishan-sah_Resume_CV.pdf'; 
      link.click();
      setDownloading(false);
    }, 1000); // 1 second delay
  };

  return (
    <div>
      <Nav />
      <div
        className="relative w-full h-auto mt-[55px] py-12 px-6 md:p-12 flex flex-wrap bg-cover bg-center text-white"
        style={{ backgroundImage: 'url(/img/bg-image2.jpg)' }}
      >
        <div className="absolute z-0 inset-0 bg-black opacity-35"></div>
        <div className="w-full md:w-1/2 relative z-10 py-8">
          <h2 className="md:text-5xl text-2xl font-bold uppercase tracking-[3px] -mb-[9px]">
            Bhishan Sah
          </h2>
          <span className="text-[12px] font-semibold">Computer Engineer</span>
          <h1 className="flex items-center gap-4 py-2 font-semibold">
            <span className="text-lime-400 text-xl ">I'M</span>
            <span className="text-lime-400 text-xl ">
              <Typewriter
                words={[
                  'Web Developer',
                  'Photographer',
                  'UI/UX Designer',
                  'Videographer',
                ]}
                loop={true}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h1>
          <p className="text-lg font-light text-justify md:w-3[80%]">
            I'm a web developer who is passionate about building beautiful and functional websites. and passionate about learning new technologies and ways of doing things.
          </p>
          <button
            onClick={handleDownloadCv}
            className={`mt-4 px-4 py-2 flex gap-2 items-center bg-blue-700 text-white rounded font-bold ${downloading ? 'cursor-not-allowed' : ''}`}
            disabled={downloading}
          >
            <i className={`fa-solid fa-cloud-arrow-down ${downloading ? '' : ''}`}></i>
            {downloading ? 'Downloading...' : 'Download CV'}
          </button>
        </div>
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <div className="relative">
            <img
              src="/img/myimage1.jpg"
              alt="Bhishan Sah"
              className="w-[350px] h-[350px] object-cover object-top  rounded-lg opacity-90"
            />
            <div className="absolute inset-0 bg-black opacity-25 rounded-lg"></div>
          </div>
        </div>
      </div>

      <div className="w-full">
        <ExpertiesHome />
      </div>

      {/* Certificate section */}
      <div className="w-full h-auto flex flex-col items-center py-6 relative overflow-hidden">
        <div className="carousel-container md:h-[300px]">
          <div
            className="carousel-slide"
            style={{ transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)` }}
          >
            {images.map((src, index) => (
              <div className="carousel-item" key={index}>
                <img className="border-2 md:w-full md:h-[300px] border-black rounded-lg" src={src} alt={`certificate ${index}`} />
              </div>
            ))}
          </div>
          <button
            className={`carousel-control left md:block hidden ${isFirstImage ? 'disabled' : ''}`}
            onClick={handlePrevClick}
            disabled={isFirstImage}
          >
            <i className="fa-solid fa-caret-left"></i>
          </button>
          <button
            className={`carousel-control right md:block hidden ${isLastImage ? 'disabled' : ''}`}
            onClick={handleNextClick}
            disabled={isLastImage}
          >
            <i className="fa-solid fa-caret-right"></i>
          </button>
        </div>

        {/* Dot indicators */}
        <div className="carousel-dots  space-x-2 mt-4 md:block hidden ">
          {images.map((_, index) => (
            <button
              key={index}
              className={`dot bg-gray-600 w-3 h-3 rounded-full ${index === currentIndex ? 'active bg-primary-darkBlue ' : ''}`}
              onClick={() => setCurrentIndex(index)}
            ></button>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
