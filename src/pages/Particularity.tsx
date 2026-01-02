import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

const workImages = [
  '/images/WorkDone/1.jpeg',
  '/images/WorkDone/2.jpeg',
  '/images/WorkDone/3.jpeg',
  '/images/WorkDone/4.jpeg',
  '/images/WorkDone/5.jpeg',
  '/images/WorkDone/6.jpeg',
  '/images/WorkDone/7.jpeg',
  '/images/WorkDone/8.jpeg',
  '/images/WorkDone/9.jpeg',
];

const Particularity: React.FC = () => {
  const { t } = useTranslation();
  const [index, setIndex] = useState(0);
  const length = workImages.length;

  // Preload images so they are ready for the slideshow and easier to debug
  useEffect(() => {
    const preloaded: HTMLImageElement[] = workImages.map(src => {
      const im = new Image();
      im.src = src;
      return im;
    });

    const id = setInterval(() => {
      setIndex(i => (i + 1) % length);
    }, 1600);

    return () => {
      clearInterval(id);
      // no-op for preloaded images (browser handles cache)
      preloaded.length = 0;
    };
  }, [length]);

  const goPrev = () => setIndex(i => (i - 1 + length) % length);
  const goNext = () => setIndex(i => (i + 1) % length);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="font-montserrat font-bold text-3xl lg:text-4xl text-gray-900 mb-2">{t('particularityPage.title')}</h1>
          <p className="text-gray-600 max-w-3xl mx-auto">{t('particularityPage.subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Slideshow (left) */}
          <div className="relative rounded-xl overflow-hidden shadow-2xl bg-black h-[75vh]">
            {/* Single-image approach bound directly to index for reliable updates */}
            <div className="absolute inset-0">
              <img src={workImages[index]} alt={`work-${index+1}`} className="slide-main w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent pointer-events-none animate-gradient" />
            </div>

            {/* Controls: dots + arrows */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
              {workImages.map((_, i) => (
                <button key={i} aria-label={`Slide ${i+1}`} onClick={() => setIndex(i)} className={`slide-dot ${i === index ? 'active' : ''}`} />
              ))}
            </div>

            <button aria-label="Previous" onClick={goPrev} className="absolute left-3 top-1/2 -translate-y-1/2 z-20 slide-arrow">‹</button>
            <button aria-label="Next" onClick={goNext} className="absolute right-3 top-1/2 -translate-y-1/2 z-20 slide-arrow">›</button>

            {/* Playful floating icons */}
            <div className="absolute -top-8 -left-6 opacity-70 animate-emoji">❤️</div>
            <div className="absolute -bottom-10 -right-6 opacity-60 animate-emoji delay-1">✨</div>
          </div>

          {/* Text about the NGO (right) */}
          <div className="flex flex-col justify-center">
            <h2 className="font-montserrat font-semibold text-3xl text-gray-900 mb-4">{t('particularityPage.heading')}</h2>
            <p className="text-gray-700 mb-6">{t('particularityPage.desc')}</p>
            <ul className="list-inside list-disc space-y-3 text-gray-700 text-lg">
              <li>{t('particularityPage.point1')}</li>
              <li>{t('particularityPage.point2')}</li>
              <li>{t('particularityPage.point3')}</li>
              <li>{t('particularityPage.point4')}</li>
            </ul>
          </div>
        </div>


      </div>
    </div>
  );
};

export default Particularity;
