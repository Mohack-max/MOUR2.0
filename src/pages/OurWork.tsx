import { Target, TrendingUp, Globe } from "lucide-react";
import { useTranslation } from 'react-i18next';
import { useRef, useEffect } from 'react';

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   STYLES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
const STYLES = `
@import url('https://fonts.googleapis.com/css2?family=Inter:opsz,wght@14..32,300;14..32,400;14..32,500;14..32,600;14..32,700&display=swap');

:root {
  --g:    #0D6E4E;
  --gl:   #12A674;
  --gd:   #054030;
  --v:    #4B1D7A;
  --vl:   #7C3FBA;
  --lime: #A8E063;
  --gold: #D4A843;
  --dark: #060B09;
  --mid:  #0D1612;
  --water-light: #4AB5E0;
  --water-mid: #2E86C1;
  --water-deep: #1C6EA4;
  --water-teal: #3FA7B0;
}

/* ── Animations ── */
@keyframes kb {
  0%   { transform: scale(1.00) translate(0%, 0%); }
  50%  { transform: scale(1.08) translate(-1%, -2%); }
  100% { transform: scale(1.00) translate(0%, 0%); }
}
@keyframes fade-up { 
  from { opacity: 0; transform: translateY(30px); } 
  to { opacity: 1; transform: translateY(0); } 
}
@keyframes line-grow { 
  from { transform: scaleX(0); } 
  to { transform: scaleX(1); } 
}
@keyframes card-up { 
  from { opacity: 0; transform: translateY(40px); } 
  to { opacity: 1; transform: translateY(0); } 
}
@keyframes stripe { 
  from { background-position: 0 0; } 
  to { background-position: 144px 0; } 
}

/* ── Water Flow Animation ── */
@keyframes flow {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 2000px 0;
  }
}

@keyframes waveFlow {
  0% {
    transform: translateX(0) translateY(0);
  }
  25% {
    transform: translateX(-8px) translateY(3px);
  }
  75% {
    transform: translateX(8px) translateY(-3px);
  }
  100% {
    transform: translateX(0) translateY(0);
  }
}

@keyframes rippleFlow {
  0% {
    d: path("M0,60 L60,60 C80,60 80,90 100,90 L120,90 C140,90 140,60 160,60 L180,60 C200,60 200,90 220,90 L240,90 C260,90 260,60 280,60 L300,60 L300,150 L0,150 Z");
  }
  25% {
    d: path("M0,65 L60,65 C80,65 80,95 100,95 L120,95 C140,95 140,65 160,65 L180,65 C200,65 200,95 220,95 L240,95 C260,95 260,65 280,65 L300,65 L300,150 L0,150 Z");
  }
  50% {
    d: path("M0,55 L60,55 C80,55 80,85 100,85 L120,85 C140,85 140,55 160,55 L180,55 C200,55 200,85 220,85 L240,85 C260,85 260,55 280,55 L300,55 L300,150 L0,150 Z");
  }
  75% {
    d: path("M0,70 L60,70 C80,70 80,100 100,100 L120,100 C140,100 140,70 160,70 L180,70 C200,70 200,100 220,100 L240,100 C260,100 260,70 280,70 L300,70 L300,150 L0,150 Z");
  }
  100% {
    d: path("M0,60 L60,60 C80,60 80,90 100,90 L120,90 C140,90 140,60 160,60 L180,60 C200,60 200,90 220,90 L240,90 C260,90 260,60 280,60 L300,60 L300,150 L0,150 Z");
  }
}

/* Water Flow Container - MUCH LARGER */
.ow-water-flow {
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
  z-index: 2;
  pointer-events: none;
}

.ow-water-wave {
  position: relative;
  width: 100%;
  height: 150px;
}

@media (max-width: 1024px) {
  .ow-water-wave {
    height: 120px;
  }
}

@media (max-width: 768px) {
  .ow-water-wave {
    height: 90px;
  }
}

@media (max-width: 480px) {
  .ow-water-wave {
    height: 70px;
  }
}

.ow-water-svg {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100%;
}

.ow-water-svg svg {
  width: 100%;
  height: 100%;
  display: block;
}

/* Wave layers with different speeds and colors */
.ow-wave-layer-1 {
  opacity: 0.9;
  animation: flow 20s linear infinite;
}

.ow-wave-layer-2 {
  opacity: 0.7;
  animation: flow 25s linear infinite reverse;
}

.ow-wave-layer-3 {
  opacity: 0.5;
  animation: flow 30s linear infinite;
}

.ow-wave-layer-4 {
  opacity: 0.3;
  animation: flow 35s linear infinite reverse;
}

/* Water bubble particles */
@keyframes bubbleRise {
  0% {
    transform: translateY(0) scale(1);
    opacity: 0.8;
  }
  100% {
    transform: translateY(-100px) scale(1.5);
    opacity: 0;
  }
}

.ow-water-bubbles {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 3;
}

.bubble {
  position: absolute;
  background: radial-gradient(circle, rgba(74,181,224,0.8) 0%, rgba(46,134,193,0.4) 100%);
  border-radius: 50%;
  animation: bubbleRise 4s ease-in-out infinite;
  pointer-events: none;
}

/* Water overlay for smooth transition */
.ow-water-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 60%;
  background: linear-gradient(
    to top,
    rgba(6, 11, 9, 0.95) 0%,
    rgba(6, 11, 9, 0.6) 30%,
    transparent 100%
  );
  pointer-events: none;
  z-index: 1;
}

/* Water reflection effect */
.ow-water-reflection {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to bottom,
    transparent 0%,
    rgba(74,181,224,0.1) 50%,
    rgba(74,181,224,0.2) 100%
  );
  pointer-events: none;
  z-index: 1;
}

/* ━━ BASE ━━ */
.ow { 
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; 
  background: var(--dark); 
  color: #fff;
  width: 100%;
  overflow-x: hidden;
}
.ow *, .ow *::before, .ow *::after { 
  box-sizing: border-box; 
}
.ow-w { 
  width: 100%; 
  max-width: 1280px; 
  margin: 0 auto; 
  padding: 0 2rem; 
  position: relative;
  z-index: 2;
}
@media (max-width: 768px) { 
  .ow-w { padding: 0 1.5rem; } 
}
@media (max-width: 640px) { 
  .ow-w { padding: 0 1.25rem; } 
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   HERO — Pure image with prominent river water flow
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
.ow-hero {
  position: relative;
  width: 100%;
  height: 85vh;
  min-height: 500px;
  overflow: hidden;
  background: #000;
}

@media (max-width: 768px) {
  .ow-hero {
    height: 70vh;
    min-height: 400px;
  }
}

@media (max-width: 640px) {
  .ow-hero {
    height: 60vh;
    min-height: 350px;
  }
}

.ow-hero__img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center;
  z-index: 0;
  animation: kb 20s ease-in-out infinite;
  will-change: transform;
  transform-origin: center center;
}

.ow-hero__overlay {
  position: absolute;
  inset: 0;
  z-index: 1;
  background: linear-gradient(
    to bottom,
    rgba(0,0,0,0.3) 0%,
    rgba(0,0,0,0.2) 40%,
    rgba(0,0,0,0.4) 70%,
    rgba(6,11,9,0.7) 85%,
    rgba(6,11,9,0.9) 100%
  );
}

/* ━━ KENTE DIVIDER ━━ */
.ow-kente {
  height: 4px;
  background: linear-gradient(90deg, var(--g), var(--gl), var(--v), var(--vl), var(--lime));
  flex-shrink: 0;
  width: 100%;
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   PLAN SECTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
.ow-plan {
  background: var(--mid);
  padding: 5rem 0;
  position: relative;
  overflow: hidden;
}

@media (max-width: 768px) {
  .ow-plan {
    padding: 3.5rem 0;
  }
}

@media (max-width: 640px) {
  .ow-plan {
    padding: 2.5rem 0;
  }
}

/* Section header */
.ow-sh { 
  text-align: center; 
  margin-bottom: 3rem; 
  position: relative; 
  z-index: 1; 
}

@media (max-width: 768px) {
  .ow-sh {
    margin-bottom: 2rem;
  }
}

.ow-badge {
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--dark);
  background: var(--lime);
  border-radius: 100px;
  padding: 0.3rem 1rem;
  margin-bottom: 1rem;
}

.ow-sh h2 {
  font-size: clamp(1.8rem, 4vw, 2.8rem);
  font-weight: 600;
  line-height: 1.3;
  color: #fff;
  max-width: 700px;
  margin: 0 auto 0.75rem;
  letter-spacing: -0.01em;
}

.ow-sh p {
  font-size: clamp(0.95rem, 1.6vw, 1.05rem);
  color: rgba(255,255,255,0.65);
  max-width: 650px;
  margin: 0 auto;
  line-height: 1.6;
}

.ow-rule {
  width: 50px;
  height: 2px;
  background: var(--lime);
  margin: 1rem auto 0;
  transform-origin: center;
  animation: line-grow 0.6s 0.15s ease both;
}

/* Strategy cards */
.ow-areas {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  position: relative;
  z-index: 1;
}

.ow-card {
  display: grid;
  grid-template-columns: 280px 1fr;
  border-radius: 12px;
  overflow: hidden;
  background: rgba(255,255,255,0.03);
  border: 1px solid rgba(255,255,255,0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  animation: card-up 0.6s ease both;
}

@media (max-width: 900px) {
  .ow-card {
    grid-template-columns: 240px 1fr;
  }
}

@media (max-width: 768px) {
  .ow-card {
    grid-template-columns: 1fr;
  }
}

.ow-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 40px rgba(0,0,0,0.3);
  border-color: rgba(168,224,99,0.2);
}

/* Panel — left side */
.ow-card__panel {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  text-align: center;
  min-height: 240px;
  overflow: hidden;
}

@media (max-width: 768px) {
  .ow-card__panel {
    min-height: 180px;
    padding: 1.5rem;
  }
}

/* Gradient backgrounds for each area */
.ow-card.health .ow-card__panel {
  background: linear-gradient(135deg, #C94B1F, #E8720C);
}
.ow-card.nutrition .ow-card__panel {
  background: linear-gradient(135deg, #7A4A00, #E8B84B);
}
.ow-card.education .ow-card__panel {
  background: linear-gradient(135deg, #7A2040, #E8905A);
}
.ow-card.wash .ow-card__panel {
  background: linear-gradient(135deg, #3D1555, #C46A2A);
}

.ow-card__icon {
  width: 72px;
  height: 72px;
  border-radius: 50%;
  background: rgba(255,255,255,0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  position: relative;
  z-index: 1;
}

@media (max-width: 768px) {
  .ow-card__icon {
    width: 64px;
    height: 64px;
  }
}

.ow-card__icon img {
  width: 44px;
  height: 44px;
  object-fit: contain;
  filter: brightness(0) invert(1);
}

@media (max-width: 768px) {
  .ow-card__icon img {
    width: 38px;
    height: 38px;
  }
}

.ow-card__panel-title {
  font-size: 1.3rem;
  font-weight: 600;
  color: #fff;
  position: relative;
  z-index: 1;
}

@media (max-width: 768px) {
  .ow-card__panel-title {
    font-size: 1.2rem;
  }
}

/* Right content side */
.ow-card__body {
  padding: 2rem;
  background: rgba(0,0,0,0.3);
}

@media (max-width: 768px) {
  .ow-card__body {
    padding: 1.5rem;
  }
}

.ow-card__desc {
  font-size: 0.95rem;
  color: rgba(255,255,255,0.7);
  line-height: 1.6;
  margin-bottom: 1.25rem;
}

@media (max-width: 768px) {
  .ow-card__desc {
    font-size: 0.9rem;
  }
}

.ow-card__obj-label {
  font-size: 0.7rem;
  font-weight: 500;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  margin-bottom: 0.75rem;
  display: block;
}

.health .ow-card__obj-label { color: #FCA5A5; }
.nutrition .ow-card__obj-label { color: var(--lime); }
.education .ow-card__obj-label { color: #FCD34D; }
.wash .ow-card__obj-label { color: #C4B5FD; }

.ow-card__objs {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.6rem;
}

@media (max-width: 768px) {
  .ow-card__objs {
    grid-template-columns: 1fr;
  }
}

.ow-obj {
  display: flex;
  align-items: flex-start;
  gap: 0.6rem;
  padding: 0.6rem 0.8rem;
  background: rgba(255,255,255,0.03);
  border-radius: 8px;
  transition: background 0.2s ease;
}

.ow-obj:hover {
  background: rgba(255,255,255,0.08);
}

.ow-obj__dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  flex-shrink: 0;
  margin-top: 0.5rem;
}

.health .ow-obj__dot { background: #F87171; }
.nutrition .ow-obj__dot { background: var(--gl); }
.education .ow-obj__dot { background: #F59E0B; }
.wash .ow-obj__dot { background: var(--vl); }

.ow-obj__text {
  font-size: 0.85rem;
  color: rgba(255,255,255,0.7);
  line-height: 1.5;
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   IMPACT SECTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
.ow-impact {
  background: var(--dark);
  padding: 5rem 0;
  position: relative;
  overflow: hidden;
}

@media (max-width: 768px) {
  .ow-impact {
    padding: 3.5rem 0;
  }
}

@media (max-width: 640px) {
  .ow-impact {
    padding: 2.5rem 0;
  }
}

.ow-stripe {
  position: absolute;
  left: 0;
  right: 0;
  height: 2px;
  opacity: 0.3;
  background: repeating-linear-gradient(90deg,
    var(--g) 0, var(--g) 20px,
    var(--v) 20px, var(--v) 40px,
    var(--lime) 40px, var(--lime) 60px,
    var(--vl) 60px, var(--vl) 80px
  );
  animation: stripe 5s linear infinite;
}

.ow-stripe.t { top: 0; }
.ow-stripe.b { bottom: 0; }

.ow-impact__cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-top: 2.5rem;
  position: relative;
  z-index: 1;
}

@media (max-width: 768px) {
  .ow-impact__cards {
    gap: 1rem;
    margin-top: 2rem;
  }
}

@media (max-width: 640px) {
  .ow-impact__cards {
    grid-template-columns: 1fr;
  }
}

.ow-ic {
  border-radius: 12px;
  padding: 2rem;
  position: relative;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  animation: card-up 0.6s ease both;
  background: rgba(255,255,255,0.03);
  border: 1px solid rgba(255,255,255,0.08);
}

.ow-ic:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 40px rgba(0,0,0,0.3);
  border-color: rgba(168,224,99,0.2);
}

@media (max-width: 768px) {
  .ow-ic {
    padding: 1.5rem;
  }
}

.ow-ic__icon {
  width: 48px;
  height: 48px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.25rem;
}

@media (max-width: 768px) {
  .ow-ic__icon {
    width: 44px;
    height: 44px;
    margin-bottom: 1rem;
  }
}

.ow-ic.a .ow-ic__icon { background: rgba(18,166,116,0.15); color: #6EE7B7; }
.ow-ic.b .ow-ic__icon { background: rgba(124,63,186,0.15); color: #C4B5FD; }
.ow-ic.c .ow-ic__icon { background: rgba(212,168,67,0.15); color: #FCD34D; }

.ow-ic h3 {
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
}

@media (max-width: 768px) {
  .ow-ic h3 {
    font-size: 1.2rem;
  }
}

.ow-ic.a h3 { color: #6EE7B7; }
.ow-ic.b h3 { color: #C4B5FD; }
.ow-ic.c h3 { color: #FCD34D; }

.ow-ic p {
  font-size: 0.9rem;
  line-height: 1.6;
  color: rgba(255,255,255,0.6);
}

@media (max-width: 768px) {
  .ow-ic p {
    font-size: 0.85rem;
  }
}

.ow-ic__bar {
  width: 40px;
  height: 2px;
  margin-top: 1rem;
  transform-origin: left;
  animation: line-grow 0.6s 0.5s ease both;
}

.ow-ic.a .ow-ic__bar { background: var(--gl); }
.ow-ic.b .ow-ic__bar { background: var(--vl); }
.ow-ic.c .ow-ic__bar { background: var(--gold); }
`;

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   COMPONENT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
const OurWork = () => {
  const { t } = useTranslation();
  const heroRef = useRef<HTMLElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  /* Mouse parallax for hero image */
  useEffect(() => {
    const hero = heroRef.current;
    const img = imgRef.current;
    if (!hero || !img) return;

    let raf = 0;
    const move = (e: MouseEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const { width, height, left, top } = hero.getBoundingClientRect();
        const dx = ((e.clientX - left) / width - 0.5) * 12;
        const dy = ((e.clientY - top) / height - 0.5) * 8;
        img.style.animation = 'none';
        img.style.transform = `scale(1.08) translate(${dx}px, ${dy}px)`;
        img.style.transition = 'transform 0.1s linear';
      });
    };

    const leave = () => {
      cancelAnimationFrame(raf);
      img.style.animation = 'kb 20s ease-in-out infinite';
      img.style.transform = '';
      img.style.transition = '';
    };

    hero.addEventListener('mousemove', move);
    hero.addEventListener('mouseleave', leave);

    return () => {
      hero.removeEventListener('mousemove', move);
      hero.removeEventListener('mouseleave', leave);
    };
  }, []);

  // Generate random bubbles
  const generateBubbles = () => {
    const bubbles = [];
    for (let i = 0; i < 30; i++) {
      const left = Math.random() * 100;
      const size = Math.random() * 8 + 4;
      const duration = Math.random() * 3 + 2;
      const delay = Math.random() * 5;
      bubbles.push(
        <div
          key={i}
          className="bubble"
          style={{
            left: `${left}%`,
            width: `${size}px`,
            height: `${size}px`,
            animationDuration: `${duration}s`,
            animationDelay: `${delay}s`,
            bottom: '0',
          }}
        />
      );
    }
    return bubbles;
  };

  const areas = [
    {
      cls: 'health',
      img: '/images/hospital.png',
      tk: 'ourWork.areas.communityHealth',
      dk: 'ourWork.areas.communityHealthDesc',
      ok: [1, 2, 3, 4].map(n => `ourWork.areas.communityHealthObj${n}`)
    },
    {
      cls: 'nutrition',
      img: '/images/nutrition.png',
      tk: 'ourWork.areas.nutrition',
      dk: 'ourWork.areas.nutritionDesc',
      ok: [1, 2, 3, 4].map(n => `ourWork.areas.nutritionObj${n}`)
    },
    {
      cls: 'education',
      img: '/images/education.jpeg',
      tk: 'ourWork.areas.education',
      dk: 'ourWork.areas.educationDesc',
      ok: [1, 2, 3, 4].map(n => `ourWork.areas.educationObj${n}`)
    },
    {
      cls: 'wash',
      img: '/images/wash1.jpeg',
      tk: 'ourWork.areas.wash',
      dk: 'ourWork.areas.washDesc',
      ok: [1, 2, 3, 4].map(n => `ourWork.areas.washObj${n}`)
    }
  ];

  const impacts = [
    {
      cls: 'a',
      icon: <Target size={22} />,
      tk: 'ourWork.impactDurability',
      dk: 'ourWork.impactDurabilityDesc'
    },
    {
      cls: 'b',
      icon: <TrendingUp size={22} />,
      tk: 'ourWork.impactEmpowerment',
      dk: 'ourWork.impactEmpowermentDesc'
    },
    {
      cls: 'c',
      icon: <Globe size={22} />,
      tk: 'ourWork.impactInnovation',
      dk: 'ourWork.impactInnovationDesc'
    }
  ];

  const planLines = (t('ourWork.planDesc') || '').split('\n').filter(Boolean);

  return (
    <>
      <style>{STYLES}</style>
      <div className="ow">
        {/* Hero Section - Pure Image Only with Prominent River Water Flow */}
        <section className="ow-hero" ref={heroRef}>
          <img
            ref={imgRef}
            src="/images/healthm3.png"
            alt="HealthMOUR field operations"
            className="ow-hero__img"
          />
          <div className="ow-hero__overlay" />
          
          {/* Prominent River Water Flow Effect - Much Larger */}
          <div className="ow-water-flow">
            <div className="ow-water-wave">
              {/* Multiple wave layers with realistic water colors */}
              <div className="ow-water-svg ow-wave-layer-1">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 150" preserveAspectRatio="none">
                  <path fill="rgba(74,181,224,0.85)" d="M0,70 L60,70 C80,70 80,100 100,100 L120,100 C140,100 140,70 160,70 L180,70 C200,70 200,100 220,100 L240,100 C260,100 260,70 280,70 L300,70 L300,150 L0,150 Z"></path>
                  <path fill="rgba(46,134,193,0.7)" d="M0,80 L60,80 C80,80 80,110 100,110 L120,110 C140,110 140,80 160,80 L180,80 C200,80 200,110 220,110 L240,110 C260,110 260,80 280,80 L300,80 L300,150 L0,150 Z"></path>
                </svg>
              </div>
              <div className="ow-water-svg ow-wave-layer-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 150" preserveAspectRatio="none">
                  <path fill="rgba(28,110,164,0.65)" d="M0,60 L60,60 C80,60 80,90 100,90 L120,90 C140,90 140,60 160,60 L180,60 C200,60 200,90 220,90 L240,90 C260,90 260,60 280,60 L300,60 L300,150 L0,150 Z"></path>
                  <path fill="rgba(63,167,176,0.55)" d="M0,90 L60,90 C80,90 80,120 100,120 L120,120 C140,120 140,90 160,90 L180,90 C200,90 200,120 220,120 L240,120 C260,120 260,90 280,90 L300,90 L300,150 L0,150 Z"></path>
                </svg>
              </div>
              <div className="ow-water-svg ow-wave-layer-3">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 150" preserveAspectRatio="none">
                  <path fill="rgba(74,181,224,0.5)" d="M0,100 L60,100 C80,100 80,130 100,130 L120,130 C140,130 140,100 160,100 L180,100 C200,100 200,130 220,130 L240,130 C260,130 260,100 280,100 L300,100 L300,150 L0,150 Z"></path>
                </svg>
              </div>
              <div className="ow-water-svg ow-wave-layer-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 150" preserveAspectRatio="none">
                  <path fill="rgba(46,134,193,0.4)" d="M0,110 L60,110 C80,110 80,140 100,140 L120,140 C140,140 140,110 160,110 L180,110 C200,110 200,140 220,140 L240,140 C260,140 260,110 280,110 L300,110 L300,150 L0,150 Z"></path>
                </svg>
              </div>
            </div>
            
            {/* Water bubbles for realistic river effect */}
            <div className="ow-water-bubbles">
              {generateBubbles()}
            </div>
            
            {/* Water reflection and overlay */}
            <div className="ow-water-reflection" />
            <div className="ow-water-overlay" />
          </div>
        </section>

        <div className="ow-kente" />

        {/* Strategic Plan Section */}
        <section className="ow-plan">
          <div className="ow-w">
            <div className="ow-sh">
              <span className="ow-badge">{t('ourWork.planBadge') || 'Plan Stratégique'}</span>
              <h2>{t('ourWork.planTitle') || 'Nos Axes Stratégiques'}</h2>
              <div className="ow-rule" />
              {planLines.length > 0 && (
                <p>{planLines.filter(l => !/^—/.test(l.trim()))[0]}</p>
              )}
            </div>

            <div className="ow-areas">
              {areas.map((a, i) => (
                <div key={a.cls} className={`ow-card ${a.cls}`} style={{ animationDelay: `${i * 0.1}s` }}>
                  <div className="ow-card__panel">
                    <div className="ow-card__icon">
                      <img src={a.img} alt={t(a.tk)} />
                    </div>
                    <h3 className="ow-card__panel-title">{t(a.tk)}</h3>
                  </div>
                  <div className="ow-card__body">
                    <p className="ow-card__desc">{t(a.dk)}</p>
                    <span className="ow-card__obj-label">
                      {t('ourWork.objectivesTitle') || 'Objectifs'}
                    </span>
                    <div className="ow-card__objs">
                      {a.ok.map((key, oi) => (
                        <div key={oi} className="ow-obj">
                          <div className="ow-obj__dot" />
                          <span className="ow-obj__text">{t(key)}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="ow-kente" />

        {/* Impact Section */}
        <section className="ow-impact">
          <div className="ow-stripe t" />
          <div className="ow-stripe b" />
          <div className="ow-w">
            <div className="ow-sh">
              <span className="ow-badge">{t('ourWork.impactTitle') || 'Notre Impact'}</span>
              <h2>{t('ourWork.impactSubtitle') || 'Durabilité · Autonomisation · Innovation'}</h2>
              <div className="ow-rule" />
              <p>{t('ourWork.impactDesc')}</p>
            </div>

            <div className="ow-impact__cards">
              {impacts.map(({ cls, icon, tk, dk }) => (
                <div key={cls} className={`ow-ic ${cls}`}>
                  <div className="ow-ic__icon">{icon}</div>
                  <h3>{t(tk)}</h3>
                  <p>{t(dk)}</p>
                  <div className="ow-ic__bar" />
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default OurWork;