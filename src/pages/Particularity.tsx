import React, { useEffect, useState, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronLeft, ChevronRight } from 'lucide-react';

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

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   STYLES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
const STYLES = `
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,600;0,700;1,600;1,700&family=Syne:wght@400;500;600;700;800&display=swap');

:root {
  --em:   #0D6E4E;
  --eml:  #12A674;
  --emd:  #054030;
  --vi:   #4B1D7A;
  --vil:  #7C3FBA;
  --vid:  #2A0D45;
  --lime: #A8E063;
  --gold: #D4A843;
  --obs:  #060B09;
  --chalk:#F4F1E8;
  --sand: #F9F5EC;
}

@keyframes reveal-up {
  from { opacity:0; transform:translateY(38px); }
  to   { opacity:1; transform:translateY(0); }
}
@keyframes shimmer-txt {
  0%   { background-position:-300% center; }
  100% { background-position: 300% center; }
}
@keyframes kente-drift {
  from { background-position:0 0; }
  to   { background-position:96px 96px; }
}
@keyframes stripe-slide {
  from { background-position:0 0; }
  to   { background-position:144px 0; }
}
@keyframes fadeUp {
  from { opacity:0; transform:translateY(22px); }
  to   { opacity:1; transform:translateY(0); }
}
@keyframes float-y {
  0%,100% { transform:translateY(0); }
  50%     { transform:translateY(-10px); }
}
@keyframes pulse-dot {
  0%,100% { box-shadow:0 0 0 0 rgba(168,224,99,.55); }
  50%     { box-shadow:0 0 0 14px rgba(168,224,99,0); }
}
@keyframes geo-drift {
  0%,100% { transform:translateX(0) translateY(0); }
  33%     { transform:translateX(9px) translateY(-7px); }
  66%     { transform:translateX(-6px) translateY(5px); }
}
@keyframes line-grow {
  from { transform:scaleX(0); }
  to   { transform:scaleX(1); }
}
@keyframes slide-fade-in {
  from { opacity:0; transform:scale(1.06); }
  to   { opacity:1; transform:scale(1); }
}
@keyframes slide-fade-out {
  from { opacity:1; transform:scale(1); }
  to   { opacity:0; transform:scale(.96); }
}
@keyframes counter-in {
  from { opacity:0; transform:translateY(8px); }
  to   { opacity:1; transform:translateY(0); }
}
@keyframes progress-grow {
  from { transform:scaleX(0); }
  to   { transform:scaleX(1); }
}
@keyframes grain {
  0%,100%{transform:translate(0,0)}10%{transform:translate(-2%,-3%)}
  20%{transform:translate(3%,2%)}30%{transform:translate(-1%,4%)}
  40%{transform:translate(4%,-1%)}50%{transform:translate(-3%,3%)}
  60%{transform:translate(2%,-4%)}70%{transform:translate(-4%,1%)}
  80%{transform:translate(3%,-2%)}90%{transform:translate(-2%,4%)}
}
@keyframes sway {
  0%,100% { transform:rotate(-1.5deg); }
  50%     { transform:rotate(1.5deg); }
}

/* ━━ PAGE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
.pa-page { font-family:'Syne',sans-serif; background:var(--obs); min-height:100vh; }

.pa-divider {
  height:7px;
  background:repeating-linear-gradient(
    90deg,
    var(--emd) 0,var(--emd) 24px,var(--em)  24px,var(--em)  48px,
    var(--vi)  48px,var(--vi)  72px,var(--vil) 72px,var(--vil) 96px,
    var(--lime)96px,var(--lime)120px,var(--eml)120px,var(--eml)144px
  );
}
.pa-sec-label {
  display:block; font-family:'Syne',sans-serif;
  font-size:.66rem; font-weight:800; letter-spacing:.24em; text-transform:uppercase;
  color:var(--lime); margin-bottom:.7rem;
}
.tc  { text-align:center; }
.rel { position:relative; z-index:1; }

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   HERO — cinematic full-bleed slideshow
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
.pa-hero {
  position:relative;
  width:100%; height:100svh; min-height:600px;
  overflow:hidden; background:var(--obs);
}

/* Image layers */
.pa-slide {
  position:absolute; inset:0;
  width:100%; height:100%;
  object-fit:cover; object-position:center;
  transition:opacity .9s cubic-bezier(.4,0,.2,1), transform 1.2s cubic-bezier(.4,0,.2,1);
  will-change:opacity,transform;
}
.pa-slide.active  { opacity:1;  transform:scale(1.04); z-index:1; animation:slide-fade-in .9s ease both; }
.pa-slide.exiting { opacity:0;  transform:scale(1);    z-index:0; }
.pa-slide.hidden  { opacity:0;  transform:scale(1.04); z-index:0; }

/* Overlays */
.pa-hero__vig {
  position:absolute; inset:0; z-index:2;
  background:
    linear-gradient(180deg,
      rgba(6,11,9,.55)  0%,
      rgba(6,11,9,.15)  30%,
      rgba(6,11,9,.15)  60%,
      rgba(6,11,9,.88)  100%
    ),
    radial-gradient(ellipse 90% 60% at 50% 50%, transparent 40%, rgba(6,11,9,.5) 100%);
}
.pa-hero__kente {
  position:absolute; inset:0; z-index:3; pointer-events:none;
  background-image:
    repeating-linear-gradient(90deg,  rgba(168,224,99,.04) 0,rgba(168,224,99,.04) 1px,transparent 1px,transparent 32px),
    repeating-linear-gradient(0deg,   rgba(124,63,186,.04) 0,rgba(124,63,186,.04) 1px,transparent 1px,transparent 32px);
  animation:kente-drift 22s linear infinite;
}
.pa-hero__grain {
  position:absolute; inset:-50%; z-index:4; pointer-events:none;
  width:200%; height:200%;
  background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.07'/%3E%3C/svg%3E");
  opacity:.3; animation:grain 1s steps(1) infinite;
}

/* Bottom HUD — counter + progress + arrows + dots */
.pa-hero__hud {
  position:absolute; bottom:0; left:0; right:0; z-index:6;
  padding:2rem 2.5rem 2.5rem;
  display:flex; align-items:flex-end; justify-content:space-between; gap:1.5rem;
  background:linear-gradient(to top, rgba(6,11,9,.9) 0%, transparent 100%);
}

/* Counter */
.pa-counter {
  font-family:'Cormorant Garamond',serif;
  display:flex; align-items:baseline; gap:.35rem;
  animation:counter-in .4s ease both;
}
.pa-counter__cur {
  font-size:3.2rem; font-weight:700; line-height:1;
  color:#fff; min-width:2ch; text-align:right;
}
.pa-counter__sep {
  font-size:1.2rem; color:rgba(255,255,255,.3); font-weight:400;
}
.pa-counter__total {
  font-size:1.2rem; color:rgba(255,255,255,.35); font-weight:600;
}

/* Progress + dots */
.pa-progress-col {
  flex:1; display:flex; flex-direction:column; gap:.75rem; max-width:420px;
}
.pa-progress-track {
  height:2px; background:rgba(255,255,255,.12); border-radius:999px; overflow:hidden;
}
.pa-progress-bar {
  height:100%; background:linear-gradient(90deg, var(--lime), var(--eml));
  border-radius:999px; transform-origin:left;
  animation:progress-grow var(--dur,1.6s) linear both;
}
.pa-dots {
  display:flex; gap:.5rem; flex-wrap:wrap;
}
.pa-dot {
  width:8px; height:8px; border-radius:50%;
  background:rgba(255,255,255,.22); border:none; cursor:pointer;
  padding:0; transition:background .25s, transform .25s;
}
.pa-dot.active { background:var(--lime); transform:scale(1.35); }
.pa-dot:hover  { background:rgba(168,224,99,.6); }

/* Arrows */
.pa-arrows { display:flex; gap:.6rem; }
.pa-arrow {
  width:46px; height:46px; border-radius:50%;
  background:rgba(255,255,255,.08); border:1px solid rgba(255,255,255,.15);
  backdrop-filter:blur(8px);
  display:flex; align-items:center; justify-content:center;
  cursor:pointer; color:#fff;
  transition:background .2s, border-color .2s, transform .15s;
}
.pa-arrow:hover {
  background:rgba(168,224,99,.15); border-color:rgba(168,224,99,.4);
  transform:scale(1.08);
}

/* Top-left badge */
.pa-hero__badge {
  position:absolute; top:2rem; left:2.5rem; z-index:6;
  display:inline-flex; align-items:center; gap:9px;
  font-family:'Syne',sans-serif;
  font-size:.68rem; font-weight:800; letter-spacing:.2em; text-transform:uppercase;
  color:var(--lime);
  border:1px solid rgba(168,224,99,.3); border-radius:999px;
  padding:7px 20px; background:rgba(13,110,78,.25); backdrop-filter:blur(12px);
  animation:reveal-up .8s .1s ease both;
}
.pa-hero__badge-dot {
  width:7px; height:7px; border-radius:50%;
  background:var(--lime); animation:pulse-dot 2.2s ease-in-out infinite; flex-shrink:0;
}

/* Adinkra floaters */
.pa-hero__adinkra {
  position:absolute; pointer-events:none; z-index:5;
  animation:geo-drift var(--dur2,14s) ease-in-out infinite;
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   CONTENT SECTION — text + bullet points
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
.pa-content {
  background:#0C1410;
  padding:6rem 1.5rem; position:relative; overflow:hidden;
}
.pa-content__bg {
  position:absolute; inset:0; pointer-events:none;
  background:
    radial-gradient(ellipse 65% 55% at 5%  40%, rgba(13,110,78,.2) 0%,transparent 60%),
    radial-gradient(ellipse 50% 45% at 95% 60%, rgba(75,29,122,.24) 0%,transparent 60%);
}
.pa-content__kente {
  position:absolute; inset:0; pointer-events:none;
  background-image:
    repeating-linear-gradient(90deg,  rgba(168,224,99,.03) 0,rgba(168,224,99,.03) 1px,transparent 1px,transparent 32px),
    repeating-linear-gradient(0deg,   rgba(124,63,186,.03) 0,rgba(124,63,186,.03) 1px,transparent 1px,transparent 32px);
  animation:kente-drift 28s linear infinite;
}

.pa-content__inner {
  position:relative; z-index:1;
  max-width:960px; margin:0 auto;
  display:grid; grid-template-columns:1fr 1fr; gap:5rem; align-items:start;
}
@media(max-width:720px){
  .pa-content__inner { grid-template-columns:1fr; gap:2.5rem; }
}

/* Left — heading block */
.pa-content__heading {
  animation:fadeUp .8s ease both;
}
.pa-content__title {
  font-family:'Cormorant Garamond',serif;
  font-size:clamp(2rem,4.5vw,3rem); font-weight:700; line-height:1.12;
  color:#fff; margin-bottom:1rem;
}
.pa-content__title em {
  font-style:italic;
  background:linear-gradient(90deg,var(--lime) 0%,#5DCAA5 35%,var(--vil) 65%,var(--lime) 100%);
  background-size:300% auto;
  -webkit-background-clip:text; -webkit-text-fill-color:transparent;
  background-clip:text; animation:shimmer-txt 4s linear infinite; display:inline-block;
}
.pa-content__line {
  width:48px; height:2px; background:var(--lime);
  margin-bottom:1.4rem; transform-origin:left;
  animation:line-grow .6s .3s ease both;
}
.pa-content__desc {
  font-family:'Syne',sans-serif; font-size:.93rem;
  color:rgba(200,240,220,.65); line-height:1.85;
}

/* Right — bullet points */
.pa-content__points {
  display:flex; flex-direction:column; gap:1rem;
  animation:fadeUp .8s .15s ease both;
}
.pa-point {
  display:flex; align-items:flex-start; gap:1rem;
  background:rgba(255,255,255,.03);
  border:1px solid rgba(168,224,99,.1);
  border-radius:8px; padding:1.25rem 1.4rem;
  transition:background .25s, border-color .25s, transform .25s;
  position:relative; overflow:hidden;
}
.pa-point::before {
  content:''; position:absolute; left:0; top:0; bottom:0; width:3px;
  background:linear-gradient(to bottom, var(--lime), var(--eml));
  border-radius:0; opacity:0; transition:opacity .25s;
}
.pa-point:hover {
  background:rgba(168,224,99,.05);
  border-color:rgba(168,224,99,.28);
  transform:translateX(5px);
}
.pa-point:hover::before { opacity:1; }

.pa-point__num {
  font-family:'Cormorant Garamond',serif;
  font-size:1.6rem; font-weight:700; line-height:1;
  color:rgba(168,224,99,.35); flex-shrink:0; width:2ch; text-align:right;
  transition:color .25s;
}
.pa-point:hover .pa-point__num { color:var(--lime); }

.pa-point__text {
  font-family:'Syne',sans-serif; font-size:.88rem;
  color:rgba(220,240,230,.7); line-height:1.7; padding-top:.15rem;
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   THUMBNAIL STRIP — all 9 images as quick-nav
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
.pa-strip {
  background:var(--obs);
  padding:3rem 1.5rem 4rem; position:relative; overflow:hidden;
}
.pa-strip__bg {
  position:absolute; inset:0; pointer-events:none;
  background:
    radial-gradient(ellipse 70% 50% at 50% 100%, rgba(13,110,78,.14) 0%,transparent 70%),
    radial-gradient(ellipse 50% 40% at 10% 0%,   rgba(75,29,122,.16) 0%,transparent 60%);
}
.pa-strip__stripe {
  position:absolute; left:0; right:0; height:2px; opacity:.45;
  background:repeating-linear-gradient(
    90deg,var(--em) 0,var(--em) 20px,var(--vi) 20px,var(--vi) 40px,
    var(--lime) 40px,var(--lime) 60px,var(--vil) 60px,var(--vil) 80px
  );
  animation:stripe-slide 6s linear infinite;
}
.pa-strip__stripe.t { top:0; }

.pa-strip__grid {
  position:relative; z-index:1;
  display:grid;
  grid-template-columns:repeat(auto-fill,minmax(140px,1fr));
  gap:.75rem; max-width:1080px; margin:1.5rem auto 0;
}
.pa-thumb {
  aspect-ratio:4/3; border-radius:6px; overflow:hidden;
  cursor:pointer; position:relative;
  border:2px solid transparent;
  transition:border-color .25s, transform .25s, box-shadow .25s;
}
.pa-thumb.active {
  border-color:var(--lime);
  box-shadow:0 0 0 2px rgba(168,224,99,.3);
}
.pa-thumb:hover { transform:translateY(-4px) scale(1.03); }
.pa-thumb img {
  width:100%; height:100%; object-fit:cover;
  transition:transform .4s; display:block;
}
.pa-thumb:hover img { transform:scale(1.08); }
.pa-thumb__overlay {
  position:absolute; inset:0;
  background:linear-gradient(to top, rgba(6,11,9,.7) 0%, transparent 60%);
  opacity:0; transition:opacity .25s;
}
.pa-thumb:hover .pa-thumb__overlay { opacity:1; }
.pa-thumb__num {
  position:absolute; bottom:.5rem; right:.6rem;
  font-family:'Cormorant Garamond',serif;
  font-size:1rem; font-weight:700; color:var(--lime);
  opacity:0; transition:opacity .25s;
}
.pa-thumb:hover .pa-thumb__num,
.pa-thumb.active .pa-thumb__num { opacity:1; }

.pa-adinkra-wm {
  position:absolute; top:50%; left:50%;
  transform:translate(-50%,-50%);
  z-index:0; pointer-events:none; opacity:.025;
}
`;

/* ── Inline Adinkra SVG ── */
const Adinkra = ({ size = 80, opacity = 0.15 }: { size?: number; opacity?: number }) => (
  <svg width={size} height={size} viewBox="0 0 80 80" fill="none" style={{ opacity }}>
    <circle cx="40" cy="40" r="34" stroke="#A8E063" strokeWidth="1.5" />
    <circle cx="40" cy="40" r="20" stroke="#A8E063" strokeWidth="1.5" />
    <circle cx="40" cy="40" r="7"  fill="#A8E063" fillOpacity=".35" />
    <line x1="40" y1="6"  x2="40" y2="74" stroke="#A8E063" strokeWidth="1" />
    <line x1="6"  y1="40" x2="74" y2="40" stroke="#A8E063" strokeWidth="1" />
    <line x1="16" y1="16" x2="64" y2="64" stroke="#7C3FBA" strokeWidth=".8" strokeDasharray="3 4" />
    <line x1="64" y1="16" x2="16" y2="64" stroke="#7C3FBA" strokeWidth=".8" strokeDasharray="3 4" />
    <polygon points="40,12 46,27 40,22 34,27" fill="#A8E063" fillOpacity=".3" />
    <polygon points="40,68 46,53 40,58 34,53" fill="#A8E063" fillOpacity=".3" />
  </svg>
);

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   COMPONENT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
const INTERVAL_MS = 4000;

const Particularity: React.FC = () => {
  const { t } = useTranslation();
  const [index, setIndex] = useState(0);
  const [exiting, setExiting] = useState<number | null>(null);
  const [progressKey, setProgressKey] = useState(0);
  const len = workImages.length;

  const goTo = useCallback((next: number) => {
    setExiting(index);
    setTimeout(() => setExiting(null), 900);
    setIndex(next);
    setProgressKey(k => k + 1);
  }, [index]);

  const goPrev = () => goTo((index - 1 + len) % len);
  const goNext = useCallback(() => goTo((index + 1) % len), [goTo, index, len]);

  // Auto-advance
  useEffect(() => {
    const id = setInterval(goNext, INTERVAL_MS);
    return () => clearInterval(id);
  }, [goNext]);

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft')  goPrev();
      if (e.key === 'ArrowRight') goNext();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [index]);

  const points = [
    t('particularityPage.point1'),
    t('particularityPage.point2'),
    t('particularityPage.point3'),
    t('particularityPage.point4'),
  ];

  return (
    <>
      <style>{STYLES}</style>
      <div className="pa-page">

        {/* ═══════════════ CINEMATIC HERO SLIDESHOW ════ */}
        <section className="pa-hero">

          {/* Image layers */}
          {workImages.map((src, i) => (
            <img
              key={src}
              src={src}
              alt={`HealthMOUR field work ${i + 1}`}
              className={`pa-slide ${
                i === index   ? 'active'  :
                i === exiting ? 'exiting' : 'hidden'
              }`}
            />
          ))}

          {/* Overlays */}
          <div className="pa-hero__vig" />
          <div className="pa-hero__kente" />
          <div className="pa-hero__grain" />

          {/* Top badge */}
          <div className="pa-hero__badge">
            <div className="pa-hero__badge-dot" />
            {t('particularityPage.title') || 'Notre Particularité'}
          </div>

          {/* Adinkra floaters */}
          <div className="pa-hero__adinkra" style={{ top:'15%', right:'5%', '--dur2':'16s' } as React.CSSProperties}>
            <Adinkra size={130} opacity={.18} />
          </div>
          <div className="pa-hero__adinkra" style={{ top:'20%', left:'4%', '--dur2':'11s', animationDelay:'4s' } as React.CSSProperties}>
            <Adinkra size={80} opacity={.13} />
          </div>

          {/* HUD — bottom bar */}
          <div className="pa-hero__hud">
            {/* Large slide counter */}
            <div className="pa-counter" key={index}>
              <span className="pa-counter__cur">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span className="pa-counter__sep">/</span>
              <span className="pa-counter__total">
                {String(len).padStart(2, '0')}
              </span>
            </div>

            {/* Progress bar + dots */}
            <div className="pa-progress-col">
              <div className="pa-progress-track">
                <div
                  key={progressKey}
                  className="pa-progress-bar"
                  style={{ '--dur': `${INTERVAL_MS}ms` } as React.CSSProperties}
                />
              </div>
              <div className="pa-dots">
                {workImages.map((_, i) => (
                  <button
                    key={i}
                    className={`pa-dot${i === index ? ' active' : ''}`}
                    onClick={() => goTo(i)}
                    aria-label={`Slide ${i + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Arrow buttons */}
            <div className="pa-arrows">
              <button className="pa-arrow" onClick={goPrev} aria-label="Previous">
                <ChevronLeft size={20} />
              </button>
              <button className="pa-arrow" onClick={goNext} aria-label="Next">
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </section>

        {/* Kente divider */}
        <div className="pa-divider" />

        {/* ═══════════════ CONTENT ════════════════════ */}
        <section className="pa-content">
          <div className="pa-content__bg" />
          <div className="pa-content__kente" />
          <div className="pa-adinkra-wm"><Adinkra size={460} opacity={1} /></div>

          <div className="pa-content__inner">
            {/* Left — heading */}
            <div className="pa-content__heading">
              <span className="pa-sec-label">
                {t('particularityPage.title') || 'Notre Particularité'}
              </span>
              <h2 className="pa-content__title">
                {t('particularityPage.heading') ? (
                  t('particularityPage.heading')
                ) : (
                  <>Ce qui nous rend <em>différents</em></>
                )}
              </h2>
              <div className="pa-content__line" />
              <p className="pa-content__desc">
                {t('particularityPage.desc') ||
                  "HealthMOUR se distingue par une approche communautaire profonde, un ancrage local et une vision globale de la santé pour toutes les générations."}
              </p>
            </div>

            {/* Right — bullet points */}
            <div className="pa-content__points">
              {points.map((pt, i) => (
                <div key={i} className="pa-point" style={{ animationDelay:`${i*.1}s` }}>
                  <span className="pa-point__num">{String(i + 1).padStart(2,'0')}</span>
                  <span className="pa-point__text">{pt}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Kente divider */}
        <div className="pa-divider" />

        {/* ═══════════════ THUMBNAIL STRIP ════════════ */}
        <section className="pa-strip">
          <div className="pa-strip__bg" />
          <div className="pa-strip__stripe t" />
          <div className="pa-adinkra-wm"><Adinkra size={380} opacity={1} /></div>

          <div className="rel tc">
            <span className="pa-sec-label">
              {t('particularityPage.subtitle') || 'Nos Actions sur le Terrain'}
            </span>
            <h3 style={{
              fontFamily:"'Cormorant Garamond',serif",
              fontSize:'clamp(1.6rem,3.5vw,2.4rem)', fontWeight:700,
              color:'#fff', maxWidth:500, margin:'0 auto .5rem', lineHeight:1.15,
            }}>
              {t('particularityPage.subtitle') || 'Chaque image raconte une histoire'}
            </h3>
          </div>

          <div className="pa-strip__grid">
            {workImages.map((src, i) => (
              <div
                key={src}
                className={`pa-thumb${i === index ? ' active' : ''}`}
                onClick={() => goTo(i)}
                style={{ animationDelay:`${i*.04}s` }}
              >
                <img src={src} alt={`Terrain ${i + 1}`} loading="lazy" />
                <div className="pa-thumb__overlay" />
                <span className="pa-thumb__num">{String(i + 1).padStart(2,'0')}</span>
              </div>
            ))}
          </div>
        </section>

      </div>
    </>
  );
};

export default Particularity;