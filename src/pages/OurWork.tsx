import { Target, TrendingUp, Globe } from "lucide-react";
import { useTranslation } from 'react-i18next';
import { useRef, useEffect } from 'react';

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   STYLES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
const STYLES = `
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Syne:wght@400;500;600;700;800&display=swap');

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
}

/* ── Animations ── */
@keyframes kb {
  0%   { transform: scale(1.08) translate(0%,    0%);    }
  35%  { transform: scale(1.14) translate(-1.2%, -.8%);  }
  70%  { transform: scale(1.17) translate(1%,    -1.5%); }
  100% { transform: scale(1.08) translate(0%,    0%);    }
}
@keyframes fade-up   { from{opacity:0;transform:translateY(28px)} to{opacity:1;transform:translateY(0)} }
@keyframes fade-in   { from{opacity:0} to{opacity:1} }
@keyframes shimmer   { 0%{background-position:-300% center} 100%{background-position:300% center} }
@keyframes line-grow { from{transform:scaleX(0)} to{transform:scaleX(1)} }
@keyframes float-img { 0%,100%{transform:translateY(0) scale(1)} 50%{transform:translateY(-12px) scale(1.03)} }
@keyframes card-up   { from{opacity:0;transform:translateY(32px)} to{opacity:1;transform:translateY(0)} }
@keyframes stripe    { from{background-position:0 0} to{background-position:144px 0} }
@keyframes pulse     { 0%,100%{box-shadow:0 0 0 0 rgba(168,224,99,.5)} 50%{box-shadow:0 0 0 12px rgba(168,224,99,0)} }
@keyframes count-in  { from{opacity:0;transform:scale(.6)} to{opacity:1;transform:scale(1)} }

/* ━━ BASE ━━ */
.ow { font-family:'Syne',sans-serif; background:var(--dark); color:#fff; }
.ow *, .ow *::before, .ow *::after { box-sizing:border-box; }
.ow-w { width:100%; max-width:1140px; margin:0 auto; padding:0 2rem; }
@media(max-width:600px){ .ow-w{ padding:0 1.1rem; } }

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   HERO — full viewport, image fills completely
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
.ow-hero {
  position: relative;
  width: 100%;
  height: 100svh;
  min-height: 600px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #000;
}

/* The image itself — covers every pixel, animates */
.ow-hero__img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center;
  z-index: 0;
  animation: kb 26s ease-in-out infinite;
  will-change: transform;
  transform-origin: center center;
}

/* Single clean overlay — dark top-left + dark bottom, clear middle */
.ow-hero__overlay {
  position: absolute;
  inset: 0;
  z-index: 1;
  background: linear-gradient(
    180deg,
    rgba(0,0,0,.45) 0%,
    rgba(0,0,0,.05) 25%,
    rgba(0,0,0,.05) 55%,
    rgba(0,0,0,.60) 78%,
    rgba(0,0,0,.90) 100%
  );
}

/* Content sits in the lower-centre of the hero */
.ow-hero__content {
  position: relative;
  z-index: 2;
  text-align: center;
  width: 100%;
  max-width: 820px;
  padding: 0 1.5rem;
  /* push toward bottom third */
  margin-top: 18vh;
}

/* Eyebrow pill */
.ow-eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 9px;
  font-size: .65rem;
  font-weight: 800;
  letter-spacing: .24em;
  text-transform: uppercase;
  color: var(--lime);
  border: 1px solid rgba(168,224,99,.32);
  border-radius: 999px;
  padding: 7px 20px;
  background: rgba(13,110,78,.28);
  backdrop-filter: blur(12px);
  margin-bottom: 1.4rem;
  animation: fade-up .7s .1s ease both;
}
.ow-eyebrow__dot {
  width: 7px; height: 7px;
  border-radius: 50%;
  background: var(--lime);
  animation: pulse 2.4s ease-in-out infinite;
  flex-shrink: 0;
}

/* Title */
.ow-hero__title {
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(2.8rem, 6vw, 5.5rem);
  font-weight: 700;
  line-height: 1.06;
  color: #fff;
  text-shadow: 0 2px 28px rgba(0,0,0,.8);
  margin: 0 0 1rem;
  animation: fade-up .8s .2s ease both;
}
.ow-hero__title em {
  font-style: italic;
  font-weight: 400;
  background: linear-gradient(90deg, var(--lime), #7FD6A2, var(--vl), var(--lime));
  background-size: 300% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: shimmer 5s linear infinite;
  display: inline-block;
}

/* Subtitle */
.ow-hero__sub {
  font-size: clamp(.92rem, 1.8vw, 1.1rem);
  color: rgba(255,255,255,.78);
  line-height: 1.82;
  max-width: 560px;
  margin: 0 auto 3rem;
  text-shadow: 0 1px 8px rgba(0,0,0,.7);
  animation: fade-up .8s .32s ease both;
}

/* Metric cards row */
.ow-metrics {
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
  animation: fade-up .8s .44s ease both;
}
.ow-metric {
  background: rgba(255,255,255,.09);
  border: 1px solid rgba(168,224,99,.2);
  border-radius: 10px;
  padding: 1.25rem 1.75rem;
  backdrop-filter: blur(14px);
  text-align: center;
  min-width: 150px;
  flex: 1;
  max-width: 200px;
  transition: border-color .25s, background .25s, transform .25s;
}
.ow-metric:hover {
  border-color: rgba(168,224,99,.45);
  background: rgba(168,224,99,.08);
  transform: translateY(-3px);
}
.ow-metric__icon {
  width: 38px; height: 38px;
  border-radius: 8px;
  background: rgba(13,110,78,.22);
  color: var(--lime);
  display: flex; align-items: center; justify-content: center;
  margin: 0 auto .7rem;
}
.ow-metric__val {
  font-family: 'Cormorant Garamond', serif;
  font-size: 2rem; font-weight: 700;
  color: #fff; display: block; line-height: 1;
  animation: count-in .6s ease both;
}
.ow-metric__lbl {
  font-size: .65rem; font-weight: 700;
  letter-spacing: .14em; text-transform: uppercase;
  color: rgba(168,224,99,.72);
  margin-top: .3rem; display: block;
}

/* ━━ KENTE DIVIDER ━━ */
.ow-kente {
  height: 6px;
  background: repeating-linear-gradient(
    90deg,
    var(--gd) 0,var(--gd) 24px, var(--g) 24px,var(--g) 48px,
    var(--v)  48px,var(--v) 72px, var(--vl) 72px,var(--vl) 96px,
    var(--lime) 96px,var(--lime) 120px, var(--gl) 120px,var(--gl) 144px
  );
  flex-shrink: 0;
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   PLAN SECTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
.ow-plan {
  background: var(--mid);
  padding: 6rem 0;
  position: relative;
  overflow: hidden;
}
.ow-plan::before {
  content: '';
  position: absolute; inset: 0;
  background:
    radial-gradient(ellipse 60% 50% at 5%  40%, rgba(13,110,78,.15) 0%,transparent 65%),
    radial-gradient(ellipse 50% 45% at 95% 60%, rgba(75,29,122,.18) 0%,transparent 65%);
  pointer-events: none;
}

/* Section header */
.ow-sh { text-align: center; margin-bottom: 3.5rem; position: relative; z-index: 1; }
.ow-badge {
  display: inline-block;
  font-size: .65rem; font-weight: 800; letter-spacing: .22em; text-transform: uppercase;
  color: var(--dark); background: var(--lime);
  border-radius: 3px; padding: 5px 14px; margin-bottom: 1.1rem;
}
.ow-sh h2 {
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(1.9rem, 4vw, 3.2rem);
  font-weight: 700; line-height: 1.1; color: #fff;
  max-width: 600px; margin: 0 auto .75rem;
}
.ow-sh p {
  font-size: clamp(.9rem, 1.6vw, 1.02rem);
  color: rgba(200,240,220,.6);
  max-width: 560px; margin: 0 auto; line-height: 1.82;
}
.ow-rule {
  width: 44px; height: 2px; background: var(--lime);
  margin: .9rem auto 0; transform-origin: center;
  animation: line-grow .6s .15s ease both;
}

/* Strategy cards */
.ow-areas {
  display: flex; flex-direction: column; gap: 1.75rem;
  position: relative; z-index: 1;
}
.ow-card {
  display: grid;
  grid-template-columns: 260px 1fr;
  border-radius: 10px; overflow: hidden;
  border: 1px solid rgba(255,255,255,.07);
  background: rgba(255,255,255,.025);
  transition: transform .32s, box-shadow .32s;
  animation: card-up .8s ease both;
}
.ow-card:nth-child(2){ animation-delay:.1s; }
.ow-card:nth-child(3){ animation-delay:.2s; }
.ow-card:nth-child(4){ animation-delay:.3s; }
.ow-card:hover        { transform: translateY(-5px); }
/* Alternate layout */
.ow-card:nth-child(even){ direction: rtl; }
.ow-card:nth-child(even) > * { direction: ltr; }

/* Panel — left coloured side */
.ow-card__panel {
  position: relative; overflow: hidden;
  display: flex; flex-direction: column;
  align-items: center; justify-content: center;
  padding: 2.5rem 1.5rem; text-align: center;
  min-height: 220px;
}
/* sun-glow overlay */
.ow-card__panel::before {
  content: '';
  position: absolute; inset: 0;
  background:
    radial-gradient(circle 70px at 75% 15%, rgba(255,220,80,.5) 0%, rgba(255,160,30,.15) 45%, transparent 70%),
    radial-gradient(ellipse 110% 38% at 50% 100%, rgba(0,0,0,.36) 0%, transparent 70%);
  animation: pulse 4s ease-in-out infinite;
  transform-origin: 75% 15%;
}
/* thin accent bar top */
.ow-card__panel::after {
  content: ''; position: absolute;
  top: 0; left: 0; right: 0; height: 3px;
}
/* Per-area colours */
.ow-card.health    .ow-card__panel { background: linear-gradient(155deg,#1A0A00,#7B2D00,#C45000,#E8720C); }
.ow-card.health    .ow-card__panel::after { background: linear-gradient(90deg,#EF4444,#B91C1C); }
.ow-card.health:hover   { box-shadow: 0 18px 48px rgba(185,28,28,.2); }

.ow-card.nutrition .ow-card__panel { background: linear-gradient(155deg,#1A1000,#7A4A00,#C98600,#E8B84B); }
.ow-card.nutrition .ow-card__panel::after { background: linear-gradient(90deg,var(--gl),var(--g)); }
.ow-card.nutrition:hover{ box-shadow: 0 18px 48px rgba(18,166,116,.2); }

.ow-card.education .ow-card__panel { background: linear-gradient(155deg,#1A0A10,#7A2040,#C25070,#E8905A); }
.ow-card.education .ow-card__panel::after { background: linear-gradient(90deg,#F59E0B,#D97706); }
.ow-card.education:hover{ box-shadow: 0 18px 48px rgba(217,119,6,.2); }

.ow-card.wash      .ow-card__panel { background: linear-gradient(155deg,#0D0520,#3D1555,#7B3090,#C46A2A); }
.ow-card.wash      .ow-card__panel::after { background: linear-gradient(90deg,var(--vl),var(--v)); }
.ow-card.wash:hover     { box-shadow: 0 18px 48px rgba(75,29,122,.24); }

/* Floating icon inside panel */
.ow-card__icon {
  width: 92px; height: 92px; border-radius: 50%;
  background: rgba(255,255,255,.1);
  border: 2px solid rgba(255,255,255,.2);
  display: flex; align-items: center; justify-content: center;
  margin-bottom: 1.1rem;
  position: relative; z-index: 1;
  animation: float-img 5s ease-in-out infinite;
}
.ow-card:nth-child(2) .ow-card__icon { animation-delay: 1.3s; }
.ow-card:nth-child(3) .ow-card__icon { animation-delay: 2.6s; }
.ow-card:nth-child(4) .ow-card__icon { animation-delay: 3.9s; }
.ow-card__icon img {
  width: 58px; height: 58px; object-fit: contain;
  filter: brightness(0) invert(1);
  transition: transform .4s;
}
.ow-card:hover .ow-card__icon img { transform: scale(1.1); }
.ow-card__panel-title {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.4rem; font-weight: 700;
  color: #FFF3E0; line-height: 1.2;
  text-shadow: 0 1px 6px rgba(0,0,0,.5);
  position: relative; z-index: 1;
}

/* Right content side */
.ow-card__body {
  padding: 2.25rem 2rem;
  border-left: 1px solid rgba(255,255,255,.06);
}
.ow-card:nth-child(even) .ow-card__body {
  border-left: none;
  border-right: 1px solid rgba(255,255,255,.06);
}
.ow-card__desc {
  font-size: .97rem; color: rgba(220,240,230,.68);
  line-height: 1.82; margin-bottom: 1.5rem;
}
.ow-card__obj-label {
  font-size: .66rem; font-weight: 800;
  letter-spacing: .2em; text-transform: uppercase;
  margin-bottom: 1rem; display: block;
}
.health    .ow-card__obj-label { color: #FCA5A5; }
.nutrition .ow-card__obj-label { color: var(--lime); }
.education .ow-card__obj-label { color: #FCD34D; }
.wash      .ow-card__obj-label { color: #C4B5FD; }

.ow-card__objs {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: .65rem;
}
.ow-obj {
  display: flex; align-items: flex-start; gap: .6rem;
  background: rgba(255,255,255,.04);
  border: 1px solid rgba(255,255,255,.06);
  border-radius: 5px; padding: .65rem .85rem;
  transition: background .2s, transform .2s;
}
.ow-obj:hover { background: rgba(255,255,255,.08); transform: translateX(3px); }
.ow-obj__dot {
  width: 6px; height: 6px; border-radius: 50%;
  flex-shrink: 0; margin-top: .35rem;
}
.health    .ow-obj__dot { background: #F87171; }
.nutrition .ow-obj__dot { background: var(--gl); }
.education .ow-obj__dot { background: #F59E0B; }
.wash      .ow-obj__dot { background: var(--vl); }
.ow-obj__text {
  font-size: .88rem;
  color: rgba(230,245,235,.72); line-height: 1.6;
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   IMPACT SECTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
.ow-impact {
  background: var(--dark);
  padding: 6rem 0;
  position: relative; overflow: hidden;
}
.ow-impact::before {
  content: '';
  position: absolute; inset: 0;
  background:
    radial-gradient(ellipse 65% 55% at 50%  0%,  rgba(13,110,78,.22) 0%,transparent 60%),
    radial-gradient(ellipse 50% 45% at 10% 100%,  rgba(75,29,122,.25) 0%,transparent 60%);
  pointer-events: none;
}
.ow-stripe {
  position: absolute; left: 0; right: 0; height: 2px; opacity: .5;
  background: repeating-linear-gradient(90deg,
    var(--g) 0,var(--g) 20px, var(--v) 20px,var(--v) 40px,
    var(--lime) 40px,var(--lime) 60px, var(--vl) 60px,var(--vl) 80px
  );
  animation: stripe 5s linear infinite;
}
.ow-stripe.t { top: 0; } .ow-stripe.b { bottom: 0; }

.ow-impact__cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.5rem; margin-top: 3rem;
  position: relative; z-index: 1;
}
.ow-ic {
  border-radius: 10px; padding: 2.25rem 2rem;
  position: relative; overflow: hidden;
  transition: transform .3s, box-shadow .3s;
  animation: card-up .8s ease both;
}
.ow-ic:nth-child(2){ animation-delay:.12s; }
.ow-ic:nth-child(3){ animation-delay:.24s; }
.ow-ic:hover { transform: translateY(-6px); }
.ow-ic::after {
  content: ''; position: absolute;
  top: 0; right: 0;
  width: 80px; height: 80px;
  border-radius: 0 10px 0 80px; opacity: .1;
}
.ow-ic.a { background: linear-gradient(148deg,rgba(13,110,78,.26),rgba(13,110,78,.08)); border: 1px solid rgba(18,166,116,.24); }
.ow-ic.a:hover { box-shadow: 0 12px 40px rgba(18,166,116,.2); }
.ow-ic.a::after { background: var(--gl); }
.ow-ic.b { background: linear-gradient(148deg,rgba(75,29,122,.3),rgba(75,29,122,.08)); border: 1px solid rgba(124,63,186,.26); }
.ow-ic.b:hover { box-shadow: 0 12px 40px rgba(124,63,186,.22); }
.ow-ic.b::after { background: var(--vl); }
.ow-ic.c { background: linear-gradient(148deg,rgba(18,166,116,.14),rgba(75,29,122,.22)); border: 1px solid rgba(212,168,67,.2); }
.ow-ic.c:hover { box-shadow: 0 12px 40px rgba(212,168,67,.18); }
.ow-ic.c::after { background: var(--gold); }

.ow-ic__icon {
  width: 48px; height: 48px; border-radius: 10px;
  display: flex; align-items: center; justify-content: center;
  margin-bottom: 1.2rem;
}
.ow-ic.a .ow-ic__icon { background: rgba(168,224,99,.12); color: #6EE7B7; }
.ow-ic.b .ow-ic__icon { background: rgba(196,181,253,.12); color: #C4B5FD; }
.ow-ic.c .ow-ic__icon { background: rgba(212,168,67,.14);  color: #FCD34D; }

.ow-ic h3 {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.45rem; font-weight: 700; margin-bottom: .65rem;
}
.ow-ic.a h3 { color: #6EE7B7; }
.ow-ic.b h3 { color: #C4B5FD; }
.ow-ic.c h3 { color: #FCD34D; }
.ow-ic p { font-size: .92rem; line-height: 1.78; }
.ow-ic.a p { color: rgba(210,255,240,.62); }
.ow-ic.b p { color: rgba(225,215,255,.62); }
.ow-ic.c p { color: rgba(255,245,210,.62); }
.ow-ic__bar {
  width: 32px; height: 2px; margin-top: 1rem;
  transform-origin: left; animation: line-grow .6s .5s ease both;
}
.ow-ic.a .ow-ic__bar { background: var(--gl); }
.ow-ic.b .ow-ic__bar { background: var(--vl); }
.ow-ic.c .ow-ic__bar { background: var(--gold); }

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   RESPONSIVE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
@media(max-width:900px){
  .ow-card { grid-template-columns:220px 1fr; }
}
@media(max-width:700px){
  /* Hero */
  .ow-hero__title { font-size:clamp(2rem,8vw,3.2rem) !important; }
  .ow-hero__sub   { font-size:.9rem !important; margin-bottom:1.75rem !important; }
  .ow-metrics     { gap:.65rem; }
  .ow-metric      { min-width:120px; padding:1rem 1.1rem; }
  .ow-metric__val { font-size:1.6rem; }
  /* Plan */
  .ow-plan  { padding:4rem 0; }
  .ow-card  {
    grid-template-columns:1fr !important;
    direction:ltr !important;
  }
  .ow-card:nth-child(even){ direction:ltr !important; }
  .ow-card__panel  { min-height:170px; }
  .ow-card__body   { border-left:none !important; border-right:none !important; border-top:1px solid rgba(255,255,255,.06); padding:1.5rem 1.25rem; }
  .ow-card__objs   { grid-template-columns:1fr; }
  .ow-card__desc   { font-size:.9rem; }
  /* Impact */
  .ow-impact { padding:4rem 0; }
  .ow-impact__cards{ gap:1rem; }
  .ow-ic    { padding:1.75rem 1.5rem; }
}
@media(max-width:480px){
  .ow-hero { min-height:520px; }
  .ow-hero__content { margin-top:12vh; }
  .ow-hero__title { font-size:clamp(1.8rem,9vw,2.8rem) !important; }
  .ow-eyebrow { font-size:.6rem; padding:6px 14px; }
  .ow-metrics { flex-direction:column; align-items:center; }
  .ow-metric  { width:100%; max-width:240px; }
  .ow-plan,.ow-impact { padding:3rem 0; }
  .ow-sh      { margin-bottom:2.25rem; }
  .ow-ic h3   { font-size:1.2rem; }
  .ow-ic p    { font-size:.86rem; }
}
`;

/* ── Adinkra watermark ── */
const Adinkra = () => (
  <svg width="420" height="420" viewBox="0 0 80 80" fill="none"
    style={{ position:'absolute', top:'50%', left:'50%', transform:'translate(-50%,-50%)', opacity:.022, pointerEvents:'none', zIndex:0 }}>
    <circle cx="40" cy="40" r="34" stroke="#A8E063" strokeWidth="1.5"/>
    <circle cx="40" cy="40" r="20" stroke="#A8E063" strokeWidth="1.5"/>
    <circle cx="40" cy="40" r="7"  fill="#A8E063" fillOpacity=".35"/>
    <line x1="40" y1="6"  x2="40" y2="74" stroke="#A8E063" strokeWidth="1"/>
    <line x1="6"  y1="40" x2="74" y2="40" stroke="#A8E063" strokeWidth="1"/>
    <line x1="16" y1="16" x2="64" y2="64" stroke="#7C3FBA" strokeWidth=".8" strokeDasharray="3 4"/>
    <line x1="64" y1="16" x2="16" y2="64" stroke="#7C3FBA" strokeWidth=".8" strokeDasharray="3 4"/>
  </svg>
);

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   COMPONENT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
const OurWork = () => {
  const { t } = useTranslation();
  const heroRef = useRef<HTMLElement>(null);
  const imgRef  = useRef<HTMLImageElement>(null);

  /* Mouse parallax */
  useEffect(() => {
    const hero = heroRef.current, img = imgRef.current;
    if (!hero || !img) return;
    let raf = 0;
    const move = (e: MouseEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const { width, height, left, top } = hero.getBoundingClientRect();
        const dx = ((e.clientX - left) / width  - .5) * 14;
        const dy = ((e.clientY - top)  / height - .5) * 9;
        img.style.animation  = 'none';
        img.style.transform  = `scale(1.12) translate(${dx}px,${dy}px)`;
        img.style.transition = 'transform .12s linear';
      });
    };
    const leave = () => {
      cancelAnimationFrame(raf);
      img.style.animation  = 'kb 26s ease-in-out infinite';
      img.style.transform  = '';
      img.style.transition = '';
    };
    hero.addEventListener('mousemove', move);
    hero.addEventListener('mouseleave', leave);
    return () => { hero.removeEventListener('mousemove', move); hero.removeEventListener('mouseleave', leave); };
  }, []);

  const areas = [
    { cls:'health',    img:'/images/hospital.png',   tk:'ourWork.areas.communityHealth', dk:'ourWork.areas.communityHealthDesc', ok:[1,2,3,4].map(n=>`ourWork.areas.communityHealthObj${n}`) },
    { cls:'nutrition', img:'/images/nutrition.png',  tk:'ourWork.areas.nutrition',        dk:'ourWork.areas.nutritionDesc',        ok:[1,2,3,4].map(n=>`ourWork.areas.nutritionObj${n}`) },
    { cls:'education', img:'/images/education.jpeg', tk:'ourWork.areas.education',        dk:'ourWork.areas.educationDesc',        ok:[1,2,3,4].map(n=>`ourWork.areas.educationObj${n}`) },
    { cls:'wash',      img:'/images/wash1.jpeg',     tk:'ourWork.areas.wash',             dk:'ourWork.areas.washDesc',             ok:[1,2,3,4].map(n=>`ourWork.areas.washObj${n}`) },
  ];

  const metrics = [
    { icon:<Target size={20}/>,     val:'2024–2026', lbl:t('ourWork.metrics.strategicPlan')    },
    { icon:<Globe size={20}/>,      val:'4',          lbl:t('ourWork.metrics.priorityAreas')    },
    { icon:<TrendingUp size={20}/>, val:'100%',       lbl:t('ourWork.metrics.communityApproach') },
  ];

  const impacts = [
    { cls:'a', icon:<Target size={21}/>,     tk:'ourWork.impactDurability',  dk:'ourWork.impactDurabilityDesc'  },
    { cls:'b', icon:<TrendingUp size={21}/>, tk:'ourWork.impactEmpowerment', dk:'ourWork.impactEmpowermentDesc' },
    { cls:'c', icon:<Globe size={21}/>,      tk:'ourWork.impactInnovation',  dk:'ourWork.impactInnovationDesc'  },
  ];

  const planLines = (t('ourWork.planDesc') || '').split('\n').filter(Boolean);

  return (
    <>
      <style>{STYLES}</style>
      <div className="ow">

        {/* ═══════════ HERO ═══════════════════════════════ */}
        <section className="ow-hero" ref={heroRef}>
          <img
            ref={imgRef}
            src="/images/healthm3.png"
            alt="HealthMOUR field operations"
            className="ow-hero__img"
          />
          <div className="ow-hero__overlay" />

          <div className="ow-hero__content">
            <div className="ow-eyebrow">
              <span className="ow-eyebrow__dot" />
              {t('ourWork.planBadge') || 'Plan Stratégique 2024–2026'}
            </div>

            <h1 className="ow-hero__title">
              {t('ourWork.hero.title')
                ? t('ourWork.hero.title')
                : <><em>Notre travail</em> sur le terrain</>
              }
            </h1>

            <p className="ow-hero__sub">
              {t('ourWork.hero.desc') ||
                "Quatre domaines d'action prioritaires pour transformer durablement la santé des communautés en Afrique de l'Ouest."}
            </p>

            <div className="ow-metrics">
              {metrics.map((m, i) => (
                <div key={i} className="ow-metric">
                  <div className="ow-metric__icon">{m.icon}</div>
                  <span className="ow-metric__val">{m.val}</span>
                  <span className="ow-metric__lbl">{m.lbl}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════ KENTE DIVIDER ═══════════════════════ */}
        <div className="ow-kente" />

        {/* ═══════════ STRATEGIC PLAN ══════════════════════ */}
        <section className="ow-plan">
          <Adinkra />
          <div className="ow-w">
            <div className="ow-sh">
              <span className="ow-badge">{t('ourWork.planBadge') || 'Plan Stratégique'}</span>
              <h2>{t('ourWork.planTitle') || 'Nos Axes Stratégiques 2024–2026'}</h2>
              <div className="ow-rule" />
              {planLines.length > 0 && (
                <p style={{ marginTop:'.85rem' }}>
                  {planLines.filter(l => !/^—/.test(l.trim()))[0]}
                </p>
              )}
            </div>

            <div className="ow-areas">
              {areas.map((a, i) => (
                <div key={a.cls} className={`ow-card ${a.cls}`} style={{ animationDelay:`${i*.1}s` }}>
                  <div className="ow-card__panel">
                    <div className="ow-card__icon">
                      <img src={a.img} alt={t(a.tk)} />
                    </div>
                    <div className="ow-card__panel-title">{t(a.tk)}</div>
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

        {/* ═══════════ KENTE DIVIDER ═══════════════════════ */}
        <div className="ow-kente" />

        {/* ═══════════ IMPACT ══════════════════════════════ */}
        <section className="ow-impact">
          <div className="ow-stripe t" />
          <div className="ow-stripe b" />
          <Adinkra />
          <div className="ow-w">
            <div className="ow-sh">
              <span className="ow-badge" style={{ background:'rgba(168,224,99,.15)', color:' var(--lime)', border:'1px solid rgba(168,224,99,.25)' }}>
                {t('ourWork.impactTitle') || 'Notre Impact'}
              </span>
              <h2>{t('ourWork.impactTitle') || 'Durabilité · Autonomisation · Innovation'}</h2>
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