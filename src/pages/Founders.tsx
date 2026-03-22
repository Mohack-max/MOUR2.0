import { Mail, Linkedin, Twitter } from "lucide-react";
import { useTranslation } from 'react-i18next';
import { useAuth } from "@/contexts/AuthContext";
import { useState } from "react";
import { AuthModal } from "@/components/AuthModal";

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
  from { opacity:0; transform:translateY(24px); }
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
@keyframes pulse-ring {
  0%   { transform:scale(1);    opacity:.5; }
  70%  { transform:scale(1.55); opacity:0;  }
  100% { transform:scale(1);    opacity:0;  }
}
@keyframes geo-drift {
  0%,100% { transform:translateX(0) translateY(0); }
  33%     { transform:translateX(9px) translateY(-7px); }
  66%     { transform:translateX(-6px) translateY(5px); }
}
@keyframes sway {
  0%,100% { transform:rotate(-1.5deg); }
  50%     { transform:rotate(1.5deg); }
}
@keyframes bob {
  0%,100% { transform:translateY(0); }
  50%     { transform:translateY(-7px); }
}
@keyframes card-hover-glow {
  0%,100% { box-shadow:0 4px 24px rgba(168,224,99,.08); }
  50%     { box-shadow:0 4px 32px rgba(168,224,99,.18); }
}
@keyframes photo-ring {
  0%,100% { transform:rotate(0deg); }
  100%    { transform:rotate(360deg); }
}
@keyframes line-grow {
  from { transform:scaleX(0); }
  to   { transform:scaleX(1); }
}

/* ━━ PAGE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
.fo-page { font-family:'Syne',sans-serif; background:var(--obs); }

.fo-divider {
  height:7px;
  background:repeating-linear-gradient(
    90deg,
    var(--emd) 0,var(--emd) 24px,var(--em)  24px,var(--em)  48px,
    var(--vi)  48px,var(--vi)  72px,var(--vil) 72px,var(--vil) 96px,
    var(--lime)96px,var(--lime)120px,var(--eml)120px,var(--eml)144px
  );
}
.fo-sec-label {
  display:block; font-family:'Syne',sans-serif;
  font-size:.66rem; font-weight:800; letter-spacing:.24em; text-transform:uppercase;
  color:var(--lime); margin-bottom:.7rem;
}
.fo-sec-title {
  font-family:'Cormorant Garamond',serif;
  font-size:clamp(1.9rem,4.5vw,3.2rem); font-weight:700; line-height:1.12;
}
.tc  { text-align:center; }
.rel { position:relative; z-index:1; }

/* ━━ HERO ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
.fo-hero {
  position:relative; overflow:hidden;
  background:linear-gradient(160deg, #060B09 0%, #0A1F14 45%, #0D0A1A 100%);
  padding:8rem 1.5rem 5rem;
  display:flex; align-items:center; justify-content:center;
}
.fo-hero__kente {
  position:absolute; inset:0; pointer-events:none; z-index:0;
  background-image:
    repeating-linear-gradient(90deg,  rgba(168,224,99,.05) 0,rgba(168,224,99,.05) 1px,transparent 1px,transparent 32px),
    repeating-linear-gradient(0deg,   rgba(124,63,186,.05) 0,rgba(124,63,186,.05) 1px,transparent 1px,transparent 32px),
    repeating-linear-gradient(45deg,  rgba(212,168,67,.03) 0,rgba(212,168,67,.03) 1px,transparent 1px,transparent 64px);
  animation:kente-drift 22s linear infinite;
}
.fo-hero__mesh {
  position:absolute; inset:0; pointer-events:none; z-index:0;
  background:
    radial-gradient(ellipse 65% 55% at 15% 30%, rgba(13,110,78,.22) 0%,transparent 60%),
    radial-gradient(ellipse 55% 50% at 85% 70%, rgba(75,29,122,.28) 0%,transparent 60%);
}
.fo-hero__adinkra {
  position:absolute; pointer-events:none; z-index:1;
  animation:geo-drift var(--dur,14s) ease-in-out infinite;
}
.fo-hero__body {
  position:relative; z-index:2; text-align:center; max-width:720px;
}
.fo-hero__eyebrow {
  display:inline-flex; align-items:center; gap:10px;
  font-family:'Syne',sans-serif;
  font-size:.68rem; font-weight:800; letter-spacing:.2em; text-transform:uppercase;
  color:var(--lime);
  border:1px solid rgba(168,224,99,.3); border-radius:999px;
  padding:7px 20px; background:rgba(13,110,78,.25); backdrop-filter:blur(10px);
  margin-bottom:1.5rem; animation:reveal-up .8s .1s ease both;
}
.fo-hero__eyebrow-dot {
  width:7px; height:7px; border-radius:50%;
  background:var(--lime); animation:pulse-dot 2.2s ease-in-out infinite; flex-shrink:0;
}
.fo-hero__title {
  font-family:'Cormorant Garamond',serif;
  font-size:clamp(2.8rem,7vw,5.2rem); font-weight:700; line-height:1.06;
  color:#fff; text-shadow:0 2px 28px rgba(0,0,0,.7);
  margin:0 auto .9rem; animation:reveal-up .9s .22s ease both;
}
.fo-hero__title em {
  font-style:italic;
  background:linear-gradient(90deg,var(--lime) 0%,#5DCAA5 30%,var(--vil) 60%,var(--lime) 100%);
  background-size:300% auto;
  -webkit-background-clip:text; -webkit-text-fill-color:transparent;
  background-clip:text; animation:shimmer-txt 4s linear infinite; display:inline-block;
}
.fo-hero__sub {
  font-family:'Syne',sans-serif;
  font-size:clamp(.9rem,2vw,1.08rem); color:rgba(255,255,255,.78);
  text-shadow:0 1px 10px rgba(0,0,0,.6);
  max-width:540px; margin:0 auto; line-height:1.8;
  animation:reveal-up .9s .35s ease both;
}

/* ━━ FOUNDER SPOTLIGHT ━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
.fo-founder {
  background:#0C1410;
  padding:6rem 1.5rem; position:relative; overflow:hidden;
}
.fo-founder__bg {
  position:absolute; inset:0; pointer-events:none;
  background:
    radial-gradient(ellipse 60% 50% at 0% 50%,  rgba(13,110,78,.2) 0%,transparent 60%),
    radial-gradient(ellipse 55% 45% at 100% 50%, rgba(75,29,122,.24) 0%,transparent 60%);
}

.fo-founder__inner {
  position:relative; z-index:1;
  max-width:900px; margin:0 auto;
  display:grid; grid-template-columns:1fr 1.6fr; gap:4rem; align-items:center;
}
@media(max-width:700px){
  .fo-founder__inner { grid-template-columns:1fr; gap:2.5rem; }
}

/* Photo side */
.fo-founder__photo-col { display:flex; flex-direction:column; align-items:center; }

.fo-founder__photo-wrap {
  position:relative; width:220px; height:220px; margin-bottom:1.75rem;
}
/* spinning kente ring */
.fo-founder__photo-ring {
  position:absolute; inset:-14px;
  border-radius:50%;
  border:3px solid transparent;
  background:
    linear-gradient(#0C1410,#0C1410) padding-box,
    conic-gradient(var(--lime),var(--em),var(--vi),var(--vil),var(--lime)) border-box;
  animation:photo-ring 12s linear infinite;
}
.fo-founder__photo-ring2 {
  position:absolute; inset:-6px;
  border-radius:50%;
  border:1.5px solid rgba(168,224,99,.18);
}
.fo-founder__img {
  width:220px; height:220px; border-radius:50%;
  object-fit:cover; object-position:center;
  border:3px solid rgba(168,224,99,.2);
  position:relative; z-index:1;
}
.fo-founder__img-placeholder {
  width:220px; height:220px; border-radius:50%;
  background:linear-gradient(135deg,rgba(13,110,78,.3),rgba(75,29,122,.3));
  border:3px solid rgba(168,224,99,.2);
  display:flex; align-items:center; justify-content:center;
  font-family:'Cormorant Garamond',serif; font-size:4rem; font-weight:700;
  color:var(--lime); position:relative; z-index:1;
}

/* pulse ring behind photo */
.fo-founder__pulse {
  position:absolute; inset:-28px; border-radius:50%;
  border:2px solid rgba(168,224,99,.2);
  animation:pulse-ring 3s ease-out infinite;
}

/* social links */
.fo-founder__socials { display:flex; gap:.75rem; flex-wrap:wrap; justify-content:center; }
.fo-social-btn {
  display:inline-flex; align-items:center; gap:7px;
  font-family:'Syne',sans-serif; font-size:.78rem; font-weight:600;
  padding:9px 16px; border-radius:4px;
  border:1px solid rgba(168,224,99,.25); color:rgba(220,255,235,.8);
  background:rgba(13,110,78,.12); cursor:pointer;
  transition:border-color .2s, background .2s, transform .15s;
  text-decoration:none;
}
.fo-social-btn:hover {
  border-color:var(--lime); background:rgba(168,224,99,.1);
  transform:translateY(-2px);
}

/* Info side */
.fo-founder__info { text-align:left; }
@media(max-width:700px){ .fo-founder__info { text-align:center; } }

.fo-founder__name {
  font-family:'Cormorant Garamond',serif;
  font-size:clamp(2rem,4vw,3rem); font-weight:700; color:#fff;
  margin-bottom:.3rem; line-height:1.1;
}
.fo-founder__role {
  font-family:'Syne',sans-serif; font-size:.85rem; font-weight:700;
  letter-spacing:.12em; text-transform:uppercase; color:var(--lime);
  margin-bottom:1.25rem;
}
.fo-founder__tags { display:flex; gap:.6rem; flex-wrap:wrap; margin-bottom:1.4rem; }
@media(max-width:700px){ .fo-founder__tags { justify-content:center; } }
.fo-tag {
  font-family:'Syne',sans-serif; font-size:.75rem; font-weight:600;
  padding:5px 14px; border-radius:3px;
}
.fo-tag.em { background:rgba(13,110,78,.25); color:#6EE7B7; border:1px solid rgba(18,166,116,.25); }
.fo-tag.vi { background:rgba(75,29,122,.28); color:#C4B5FD; border:1px solid rgba(124,63,186,.28); }

.fo-founder__bio {
  font-family:'Syne',sans-serif; font-size:.91rem;
  color:rgba(220,240,230,.68); line-height:1.85; margin-bottom:1.5rem;
}
.fo-founder__line {
  width:48px; height:2px; background:var(--lime);
  margin-bottom:1.5rem; transform-origin:left;
  animation:line-grow .6s .4s ease both;
}
@media(max-width:700px){ .fo-founder__line { margin:0 auto 1.5rem; } }

/* ━━ COLLABORATORS ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
.fo-collab {
  background:var(--obs);
  padding:6rem 1.5rem; position:relative; overflow:hidden;
}
.fo-collab__mesh {
  position:absolute; inset:0; pointer-events:none;
  background:
    radial-gradient(ellipse 70% 50% at 50% 0%,   rgba(13,110,78,.16) 0%,transparent 60%),
    radial-gradient(ellipse 50% 40% at 10% 100%,  rgba(75,29,122,.2) 0%,transparent 60%),
    radial-gradient(ellipse 40% 35% at 90% 80%,   rgba(18,166,116,.1) 0%,transparent 60%);
}
.fo-collab__kente {
  position:absolute; inset:0; pointer-events:none;
  background-image:
    repeating-linear-gradient(90deg,  rgba(168,224,99,.03) 0,rgba(168,224,99,.03) 1px,transparent 1px,transparent 32px),
    repeating-linear-gradient(0deg,   rgba(124,63,186,.03) 0,rgba(124,63,186,.03) 1px,transparent 1px,transparent 32px);
  animation:kente-drift 28s linear infinite;
}

.fo-collab__grid {
  display:grid;
  grid-template-columns:repeat(auto-fill,minmax(170px,1fr));
  gap:1rem; max-width:1080px; margin:3rem auto 0;
  position:relative; z-index:1;
}

.fo-collab-card {
  background:rgba(255,255,255,.03);
  border:1px solid rgba(168,224,99,.1);
  border-radius:8px; padding:1.5rem 1rem 1.25rem;
  text-align:center; position:relative; overflow:hidden;
  transition:transform .3s, border-color .3s, background .3s, box-shadow .3s;
  cursor:default;
  animation:fadeUp .7s ease both;
}
.fo-collab-card::before {
  content:''; position:absolute; bottom:0; left:0; right:0; height:2px;
  background:linear-gradient(90deg,var(--em),var(--vi));
  transform:scaleX(0); transform-origin:left; transition:transform .35s;
}
.fo-collab-card:hover {
  transform:translateY(-6px);
  border-color:rgba(168,224,99,.3);
  background:rgba(168,224,99,.04);
  box-shadow:0 12px 36px rgba(13,110,78,.15);
}
.fo-collab-card:hover::before { transform:scaleX(1); }

/* Hover overlay with speciality */
.fo-collab-card__overlay {
  position:absolute; inset:0; border-radius:8px;
  background:linear-gradient(to top, rgba(4,40,20,.95) 0%, rgba(4,40,20,.8) 60%, transparent 100%);
  display:flex; align-items:flex-end;
  padding:.75rem .85rem;
  opacity:0; transition:opacity .3s;
}
.fo-collab-card:hover .fo-collab-card__overlay { opacity:1; }
.fo-collab-card__speciality {
  font-family:'Syne',sans-serif; font-size:.72rem;
  color:rgba(168,224,99,.9); line-height:1.5; text-align:left;
}

.fo-collab-card__avatar {
  width:64px; height:64px; border-radius:50%; margin:0 auto .85rem;
  object-fit:cover; border:2px solid rgba(168,224,99,.2);
  transition:border-color .3s;
}
.fo-collab-card:hover .fo-collab-card__avatar { border-color:rgba(168,224,99,.5); }

.fo-collab-card__initial {
  width:64px; height:64px; border-radius:50%; margin:0 auto .85rem;
  background:linear-gradient(135deg,rgba(13,110,78,.3),rgba(75,29,122,.3));
  border:2px solid rgba(168,224,99,.15);
  display:flex; align-items:center; justify-content:center;
  font-family:'Cormorant Garamond',serif; font-size:1.6rem; font-weight:700;
  color:var(--lime); transition:border-color .3s;
}
.fo-collab-card:hover .fo-collab-card__initial { border-color:rgba(168,224,99,.45); }

.fo-collab-card__name {
  font-family:'Syne',sans-serif; font-size:.8rem; font-weight:700;
  color:#fff; margin-bottom:.3rem; line-height:1.3;
}
.fo-collab-card__role {
  font-family:'Syne',sans-serif; font-size:.72rem; font-weight:500;
  color:var(--lime); margin-bottom:.25rem;
}
.fo-collab-card__loc {
  font-family:'Syne',sans-serif; font-size:.68rem;
  color:rgba(200,240,220,.45);
}

/* ━━ JOIN SECTION ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
.fo-join {
  background:#0C1410;
  padding:6rem 1.5rem; position:relative; overflow:hidden; text-align:center;
}
.fo-join__mesh {
  position:absolute; inset:0; pointer-events:none;
  background:
    radial-gradient(ellipse 75% 55% at 50% 0%,   rgba(13,110,78,.28) 0%,transparent 60%),
    radial-gradient(ellipse 55% 50% at 15% 100%,  rgba(75,29,122,.32) 0%,transparent 60%);
}
.fo-join__stripe {
  position:absolute; left:0; right:0; height:2px; opacity:.5;
  background:repeating-linear-gradient(
    90deg,var(--em) 0,var(--em) 20px,var(--vi) 20px,var(--vi) 40px,
    var(--lime) 40px,var(--lime) 60px,var(--vil) 60px,var(--vil) 80px
  );
  animation:stripe-slide 6s linear infinite;
}
.fo-join__stripe.t { top:0; } .fo-join__stripe.b { bottom:0; }

.fo-join h2 {
  font-family:'Cormorant Garamond',serif;
  font-size:clamp(2rem,5vw,3.6rem); font-weight:700;
  color:#fff; text-shadow:0 2px 20px rgba(0,0,0,.5);
  max-width:640px; margin:0 auto .9rem; line-height:1.1;
}
.fo-join h2 em {
  font-style:italic;
  background:linear-gradient(90deg,var(--lime),var(--eml),var(--vil),var(--lime));
  background-size:300% auto;
  -webkit-background-clip:text; -webkit-text-fill-color:transparent;
  background-clip:text; animation:shimmer-txt 4s linear infinite; display:inline-block;
}
.fo-join p {
  font-family:'Syne',sans-serif; font-size:.95rem;
  color:rgba(255,255,255,.68); max-width:460px; margin:0 auto 2.75rem; line-height:1.8;
}

.btn-lime {
  display:inline-flex; align-items:center; gap:9px;
  font-family:'Syne',sans-serif; font-size:.9rem; font-weight:700; letter-spacing:.05em;
  padding:15px 34px; border-radius:3px; border:none; cursor:pointer;
  background:var(--lime); color:var(--emd);
  box-shadow:0 4px 24px rgba(168,224,99,.4);
  transition:transform .2s, box-shadow .2s, background .2s; text-decoration:none;
}
.btn-lime:hover { background:#b8f060; transform:translateY(-3px); box-shadow:0 10px 32px rgba(168,224,99,.55); }

.fo-adinkra-wm {
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
const Founders = () => {
  const { t } = useTranslation();
  const { user, isAuthenticated } = useAuth();
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const handleVolunteerClick = () => {
    if (isAuthenticated) {
      alert(t('navbar.volunteerSuccess', { name: user?.firstName }));
    } else {
      setIsAuthModalOpen(true);
    }
  };

  const founder = {
    name: "Dr. Youssouf Keita",
    title: t('founders.founderTitle'),
    image: "/images/youssouf.jpeg",
    bio: t('founders.founderBio'),
    education: t('founders.founderEducation'),
    experience: t('founders.founderExperience'),
    email: "youssnigga@gmail.com",
    linkedin: "https://www.linkedin.com/in/dr-youssouf-keita-baa808124/",
    twitter: "https://x.com/youssniga",
  };

  const collaborators = [
    { name:"Dr.Habibatou dite Mah TRAORE", role:t('founders.collaborators.habibatou.role'), image:"/images/habibatou.jpeg", speciality:t('founders.collaborators.habibatou.speciality'), location:t('founders.collaborators.habibatou.location') },
    { name:"M.Ibrahim TERERA",             role:t('founders.collaborators.ibrahim.role'),   image:"", speciality:t('founders.collaborators.ibrahim.speciality'),   location:t('founders.collaborators.ibrahim.location') },
    { name:"Dr Souleymane SAWADOGO",       role:t('founders.collaborators.souleymane.role'),image:"", speciality:t('founders.collaborators.souleymane.speciality'),location:t('founders.collaborators.souleymane.location') },
    { name:"Dr Fadjiné DIARRA",            role:t('founders.collaborators.fadjine.role'),   image:"/images/fadjine.jpeg", speciality:t('founders.collaborators.fadjine.speciality'), location:t('founders.collaborators.fadjine.location') },
    { name:"M. Modibo KEITA",              role:t('founders.collaborators.modibo.role'),    image:"", speciality:t('founders.collaborators.modibo.speciality'),    location:t('founders.collaborators.modibo.location') },
    { name:"Unknown",                      role:t('founders.collaborators.fatoumata.role'), image:"", speciality:t('founders.collaborators.fatoumata.speciality'), location:t('founders.collaborators.fatoumata.location') },
    { name:"Masseni TRAORE",               role:t('founders.collaborators.awa.role'),       image:"", speciality:t('founders.collaborators.awa.speciality'),       location:t('founders.collaborators.awa.location') },
    { name:"Mr.Sekouli TRAORE",            role:t('founders.collaborators.mamadou.role'),   image:"", speciality:t('founders.collaborators.mamadou.speciality'),   location:t('founders.collaborators.mamadou.location') },
    { name:"DR Diallo Kadiatou NDIAYE",    role:t('founders.collaborators.aminata.role'),   image:"", speciality:t('founders.collaborators.aminata.speciality'),   location:t('founders.collaborators.aminata.location') },
    { name:"Dr. Kancou CISSOKO",           role:t('founders.collaborators.moussa.role'),    image:"", speciality:t('founders.collaborators.moussa.speciality'),    location:t('founders.collaborators.moussa.location') },
    { name:"Dr Hamed DIALLO",              role:t('founders.collaborators.mariam.role'),    image:"", speciality:t('founders.collaborators.mariam.speciality'),    location:t('founders.collaborators.mariam.location') },
    { name:"Mr. Adama TRAORE",             role:t('founders.collaborators.adama.role'),     image:"", speciality:t('founders.collaborators.adama.speciality'),     location:t('founders.collaborators.adama.location') },
    { name:"Dr. Nene KONIPO",              role:t('founders.collaborators.salif.role'),     image:"", speciality:t('founders.collaborators.salif.speciality'),     location:t('founders.collaborators.salif.location') },
    { name:"Mr. Ibrahim MANE",             role:t('founders.collaborators.fanta.role'),     image:"", speciality:t('founders.collaborators.fanta.speciality'),     location:t('founders.collaborators.fanta.location') },
    { name:"M. Barke CISSE",               role:t('founders.collaborators.oumar.role'),     image:"", speciality:t('founders.collaborators.oumar.speciality'),     location:t('founders.collaborators.oumar.location') },
    { name:"Mr. Teilo DIAL",               role:t('founders.collaborators.kadidia.role'),   image:"", speciality:t('founders.collaborators.kadidia.speciality'),   location:t('founders.collaborators.kadidia.location') },
  ];

  return (
    <>
      <style>{STYLES}</style>
      {isAuthModalOpen && (
        <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} />
      )}

      <div className="fo-page">

        {/* ═══════════════ HERO ═══════════════════════ */}
        <section className="fo-hero">
          <div className="fo-hero__kente" />
          <div className="fo-hero__mesh" />

          <div className="fo-hero__adinkra" style={{ top:'10%', right:'6%', '--dur':'16s' } as React.CSSProperties}>
            <Adinkra size={150} opacity={.18} />
          </div>
          <div className="fo-hero__adinkra" style={{ bottom:'12%', left:'4%', '--dur':'11s', animationDelay:'3s' } as React.CSSProperties}>
            <Adinkra size={88} opacity={.13} />
          </div>

          <div className="fo-hero__body">
            <div className="fo-hero__eyebrow">
              <div className="fo-hero__eyebrow-dot" />
              {t('founders.heroTitle') || 'Les Visages de HealthMOUR'}
            </div>
            <h1 className="fo-hero__title">
              {t('founders.heroTitle') ? (
                t('founders.heroTitle')
              ) : (
                <>Les esprits derrière <em>la mission</em></>
              )}
            </h1>
            <p className="fo-hero__sub">
              {t('founders.heroDesc') ||
                "Une équipe de professionnels engagés, unis par la conviction que la santé est un droit universel."}
            </p>
          </div>
        </section>

        {/* Kente divider */}
        <div className="fo-divider" />

        {/* ═══════════════ FOUNDER SPOTLIGHT ══════════ */}
        <section className="fo-founder">
          <div className="fo-founder__bg" />
          <div className="fo-adinkra-wm"><Adinkra size={440} opacity={1} /></div>

          <div className="fo-founder__inner">

            {/* Photo column */}
            <div className="fo-founder__photo-col" style={{ animation:'fadeUp .8s ease both' }}>
              <div className="fo-founder__photo-wrap">
                <div className="fo-founder__pulse" />
                <div className="fo-founder__photo-ring" />
                <div className="fo-founder__photo-ring2" />
                {founder.image ? (
                  <img src={founder.image} alt={founder.name} className="fo-founder__img" />
                ) : (
                  <div className="fo-founder__img-placeholder">
                    {founder.name.charAt(0)}
                  </div>
                )}
              </div>

              <div className="fo-founder__socials">
                <a href={`mailto:${founder.email}`} target="_blank" rel="noopener noreferrer" className="fo-social-btn">
                  <Mail size={14} /> Email
                </a>
                <a href={founder.linkedin} target="_blank" rel="noopener noreferrer" className="fo-social-btn">
                  <Linkedin size={14} /> LinkedIn
                </a>
                <a href={founder.twitter} target="_blank" rel="noopener noreferrer" className="fo-social-btn">
                  <Twitter size={14} /> Twitter
                </a>
              </div>
            </div>

            {/* Info column */}
            <div className="fo-founder__info" style={{ animation:'fadeUp .8s .15s ease both' }}>
              <span className="fo-sec-label">{t('founders.behindTitle') || 'Fondateur'}</span>
              <h2 className="fo-founder__name">{founder.name}</h2>
              <p className="fo-founder__role">{founder.title}</p>

              <div className="fo-founder__tags">
                <span className="fo-tag em">{founder.education}</span>
                <span className="fo-tag vi">{founder.experience}</span>
              </div>

              <div className="fo-founder__line" />
              <p className="fo-founder__bio">{founder.bio}</p>
            </div>
          </div>
        </section>

        {/* Kente divider */}
        <div className="fo-divider" />

        {/* ═══════════════ COLLABORATORS ═══════════════ */}
        <section className="fo-collab">
          <div className="fo-collab__mesh" />
          <div className="fo-collab__kente" />
          <div className="fo-adinkra-wm"><Adinkra size={460} opacity={1} /></div>

          <div className="rel tc" style={{ maxWidth:1080, margin:'0 auto' }}>
            <span className="fo-sec-label">{t('founders.teamTitle') || 'Notre Équipe'}</span>
            <h2 className="fo-sec-title" style={{ color:'#fff', maxWidth:560, margin:'0 auto .75rem' }}>
              {t('founders.teamTitle') ? (
                t('founders.teamTitle')
              ) : (
                'Les bâtisseurs de la vision'
              )}
            </h2>
            <p style={{ fontFamily:"'Syne',sans-serif", fontSize:'.92rem', color:'rgba(200,240,220,.6)', maxWidth:480, margin:'0 auto' }}>
              {t('founders.teamDesc')}
            </p>

            <div className="fo-collab__grid">
              {collaborators.map((c, i) => (
                <div
                  key={c.name}
                  className="fo-collab-card"
                  style={{ animationDelay:`${i * .05}s` }}
                >
                  {/* Hover overlay */}
                  <div className="fo-collab-card__overlay">
                    <span className="fo-collab-card__speciality">{c.speciality}</span>
                  </div>

                  {/* Avatar */}
                  {c.image ? (
                    <img src={c.image} alt={c.name} className="fo-collab-card__avatar" />
                  ) : (
                    <div className="fo-collab-card__initial">
                      {c.name.charAt(0)}
                    </div>
                  )}

                  <p className="fo-collab-card__name">{c.name}</p>
                  <p className="fo-collab-card__role">{c.role}</p>
                  <p className="fo-collab-card__loc">{c.location}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Kente divider */}
        <div className="fo-divider" />

        {/* ═══════════════ JOIN CTA ════════════════════ */}
        <section className="fo-join">
          <div className="fo-join__mesh" />
          <div className="fo-join__stripe t" />
          <div className="fo-join__stripe b" />
          <div className="fo-adinkra-wm"><Adinkra size={400} opacity={1} /></div>

          {/* Floating side adinkras */}
          <div style={{ position:'absolute', top:'10%', left:'3%', zIndex:1 }}>
            <Adinkra size={130} opacity={.07} />
          </div>
          <div style={{ position:'absolute', bottom:'8%', right:'3%', zIndex:1 }}>
            <Adinkra size={100} opacity={.06} />
          </div>

          <div className="rel">
            <span className="fo-sec-label">{t('founders.joinTitle') || 'Rejoindre la Mission'}</span>
            <h2>
              {t('founders.joinTitle') ? (
                t('founders.joinTitle')
              ) : (
                <>Rejoignez une équipe qui <em>transforme des vies</em></>
              )}
            </h2>
            <p>
              {t('founders.joinDesc') ||
                "Votre expertise et votre passion peuvent faire la différence pour des milliers de personnes à travers l'Afrique de l'Ouest."}
            </p>
            <button className="btn-lime" onClick={handleVolunteerClick}>
              {t('navbar.becomeMemberVolunteer') || 'Devenir Bénévole / Membre'}
            </button>
          </div>
        </section>

      </div>
    </>
  );
};

export default Founders;