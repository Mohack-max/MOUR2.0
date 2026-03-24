import { Mail, Linkedin, Twitter, X } from "lucide-react";
import { useTranslation } from 'react-i18next';
import { useAuth } from "@/contexts/AuthContext";
import { useState } from "react";
import { AuthModal } from "@/components/AuthModal";

const STYLES = `
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;0,700;0,900;1,500;1,700&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600;9..40,700&family=DM+Mono:wght@400;500&display=swap');

:root {
  --green-deep: #0A5C4A;
  --green-forest: #1E6B5E;
  --green-mint: #2E8B75;
  --green-soft: #4CAF92;
  --green-light: #E8F5F0;
  --white-pure: #FFFFFF;
  --white-off: #F8F9FC;
  --violet-deep: #5E2A8C;
  --violet-rich: #7B3F9E;
  --violet-soft: #9B6BB3;
  --violet-light: #F3EEF8;
  --lavender: #E9E2F5;
  --gray-light: #F5F5F7;
  --card-radius: 14px;
}

.fo-page * { box-sizing: border-box; }
.fo-page {
  font-family: 'DM Sans', sans-serif;
  background: var(--white-off);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
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
@keyframes pulse-dot {
  0%,100% { box-shadow:0 0 0 0 rgba(76,175,146,.55); }
  50%     { box-shadow:0 0 0 14px rgba(76,175,146,0); }
}
@keyframes geo-drift {
  0%,100% { transform:translateX(0) translateY(0); }
  33%     { transform:translateX(9px) translateY(-7px); }
  66%     { transform:translateX(-6px) translateY(5px); }
}
@keyframes card-lift {
  from { opacity:0; transform:translateY(28px) scale(.97); }
  to   { opacity:1; transform:translateY(0) scale(1); }
}
@keyframes modal-fade-in {
  from { opacity:0; backdrop-filter:blur(0px); }
  to   { opacity:1; backdrop-filter:blur(8px); }
}
@keyframes modal-slide-up {
  from { opacity:0; transform:translateY(40px) scale(0.96); }
  to   { opacity:1; transform:translateY(0) scale(1); }
}

.fo-divider {
  height:4px;
  background: linear-gradient(90deg, var(--green-deep) 0%, var(--violet-rich) 50%, var(--green-forest) 100%);
}
.fo-sec-label {
  display:inline-block;
  font-family:'DM Mono',monospace;
  font-size:.68rem; font-weight:500;
  letter-spacing:.22em; text-transform:uppercase;
  color: var(--green-forest); margin-bottom:.85rem; opacity:.85;
}
.fo-sec-title {
  font-family:'Playfair Display',serif;
  font-size:clamp(2rem,4.5vw,3.4rem); font-weight:700; line-height:1.1;
  color: var(--green-deep);
}
.tc  { text-align:center; }
.rel { position:relative; z-index:1; }
.fo-adinkra-wm {
  position:absolute; top:50%; left:50%;
  transform:translate(-50%,-50%);
  z-index:0; pointer-events:none; opacity:.025;
}

/* HERO */
.fo-hero {
  position:relative; overflow:hidden;
  background: linear-gradient(135deg, var(--green-deep) 0%, var(--green-forest) 45%, var(--violet-deep) 100%);
  padding:8rem 1.5rem 5.5rem;
  display:flex; align-items:center; justify-content:center;
}
.fo-hero__kente {
  position:absolute; inset:0; pointer-events:none; z-index:0;
  background-image:
    repeating-linear-gradient(90deg, rgba(76,175,146,.06) 0, rgba(76,175,146,.06) 1px, transparent 1px, transparent 32px),
    repeating-linear-gradient(0deg, rgba(94,42,140,.06) 0, rgba(94,42,140,.06) 1px, transparent 1px, transparent 32px),
    repeating-linear-gradient(45deg, rgba(123,63,158,.04) 0, rgba(123,63,158,.04) 1px, transparent 1px, transparent 64px);
  animation:kente-drift 22s linear infinite;
}
.fo-hero__mesh {
  position:absolute; inset:0; pointer-events:none; z-index:0;
  background:
    radial-gradient(ellipse 65% 55% at 15% 30%, rgba(76,175,146,.12) 0%, transparent 60%),
    radial-gradient(ellipse 55% 50% at 85% 70%, rgba(123,63,158,.15) 0%, transparent 60%);
}
.fo-hero__adinkra {
  position:absolute; pointer-events:none; z-index:1;
  animation:geo-drift var(--dur,14s) ease-in-out infinite;
}
.fo-hero__body { position:relative; z-index:2; text-align:center; max-width:740px; }
.fo-hero__eyebrow {
  display:inline-flex; align-items:center; gap:10px;
  font-family:'DM Mono',monospace;
  font-size:.7rem; font-weight:500; letter-spacing:.18em; text-transform:uppercase;
  color: var(--green-soft);
  border:1px solid rgba(76,175,146,.35); border-radius:999px;
  padding:8px 22px; background:rgba(10,92,74,.35); backdrop-filter:blur(12px);
  margin-bottom:1.6rem; animation:reveal-up .8s .1s ease both;
}
.fo-hero__eyebrow-dot {
  width:7px; height:7px; border-radius:50%;
  background: var(--green-soft); animation:pulse-dot 2.2s ease-in-out infinite; flex-shrink:0;
}
.fo-hero__title {
  font-family:'Playfair Display',serif;
  font-size:clamp(2.9rem,7.5vw,5.6rem); font-weight:900; line-height:1.04;
  color: #fff; text-shadow:0 2px 32px rgba(0,0,0,.25);
  margin:0 auto 1rem; animation:reveal-up .9s .22s ease both;
}
.fo-hero__title em {
  font-style:italic;
  background:linear-gradient(90deg, var(--green-soft) 0%, var(--violet-soft) 30%, var(--green-mint) 60%, var(--violet-rich) 100%);
  background-size:300% auto;
  -webkit-background-clip:text; -webkit-text-fill-color:transparent;
  background-clip:text; animation:shimmer-txt 4s linear infinite; display:inline-block;
}
.fo-hero__sub {
  font-family:'DM Sans',sans-serif;
  font-size:clamp(.95rem,2vw,1.12rem); font-weight:300;
  color: rgba(255,255,255,.85); text-shadow:0 1px 10px rgba(0,0,0,.2);
  max-width:520px; margin:0 auto; line-height:1.85;
  animation:reveal-up .9s .35s ease both; letter-spacing:.01em;
}

/* TEAM */
.fo-collab {
  background: var(--white-off);
  padding:6.5rem 1.5rem 7rem; position:relative; overflow:hidden;
}
.fo-collab__mesh {
  position:absolute; inset:0; pointer-events:none;
  background:
    radial-gradient(ellipse 70% 50% at 50% 0%, rgba(46,139,117,.08) 0%, transparent 60%),
    radial-gradient(ellipse 50% 40% at 10% 100%, rgba(94,42,140,.1) 0%, transparent 60%),
    radial-gradient(ellipse 40% 35% at 90% 80%, rgba(76,175,146,.06) 0%, transparent 60%);
}
.fo-collab__kente {
  position:absolute; inset:0; pointer-events:none;
  background-image:
    repeating-linear-gradient(90deg, rgba(46,139,117,.03) 0, rgba(46,139,117,.03) 1px, transparent 1px, transparent 32px),
    repeating-linear-gradient(0deg, rgba(123,63,158,.03) 0, rgba(123,63,158,.03) 1px, transparent 1px, transparent 32px);
  animation:kente-drift 28s linear infinite;
}
.fo-collab__header {
  text-align:center; max-width:1120px; margin:0 auto 3.5rem;
  position:relative; z-index:1;
}
.fo-collab__header p {
  font-family:'DM Sans',sans-serif;
  font-size:1.02rem; font-weight:300;
  color: var(--green-forest); max-width:460px; margin:.5rem auto 0;
  line-height:1.82; letter-spacing:.01em;
}

/* GRID */
.fo-collab__grid {
  display:grid;
  grid-template-columns:repeat(auto-fill,minmax(230px,1fr));
  gap:1.4rem; max-width:1120px; margin:0 auto;
  position:relative; z-index:1;
}
@media(max-width:600px){
  .fo-collab__grid{grid-template-columns:repeat(auto-fill,minmax(160px,1fr));gap:1rem;}
}

/* CARD */
.fo-collab-card {
  background: var(--white-pure);
  border:1px solid rgba(46,139,117,.15);
  border-radius:var(--card-radius);
  padding:2.2rem 1.6rem 2rem;
  text-align:center; position:relative; overflow:hidden;
  transition:transform .32s cubic-bezier(.22,.68,0,1.2),border-color .28s,background .28s,box-shadow .28s;
  cursor:pointer;
  animation:card-lift .6s ease both;
  backdrop-filter:blur(4px);
}
.fo-collab-card::after {
  content:'';
  position:absolute; top:0; left:14%; right:14%; height:1.5px;
  background:linear-gradient(90deg,transparent, var(--green-soft), var(--violet-soft), transparent);
  opacity:0; transition:opacity .3s;
}
.fo-collab-card::before {
  content:'';
  position:absolute; bottom:0; left:0; right:0; height:2.5px;
  background:linear-gradient(90deg, var(--green-deep), var(--violet-rich), var(--green-mint));
  transform:scaleX(0); transform-origin:left; transition:transform .38s ease;
  border-radius:0 0 var(--card-radius) var(--card-radius);
}
.fo-collab-card:hover {
  transform:translateY(-9px) scale(1.015);
  border-color:rgba(76,175,146,.3);
  background: var(--green-light);
  box-shadow:0 22px 52px rgba(0,0,0,.08),0 0 0 1px rgba(76,175,146,.1);
}
.fo-collab-card:hover::before{transform:scaleX(1);}
.fo-collab-card:hover::after{opacity:1;}

.fo-collab-card__avatar-wrap {
  position:relative; width:90px; height:90px; margin:0 auto 1.25rem;
}
.fo-collab-card__avatar-glow {
  position:absolute; inset:-6px; border-radius:50%;
  background:radial-gradient(circle, rgba(76,175,146,.3) 0%, transparent 70%);
  opacity:0; transition:opacity .3s;
}
.fo-collab-card:hover .fo-collab-card__avatar-glow{opacity:1;}
.fo-collab-card__avatar {
  width:90px; height:90px; border-radius:50%;
  object-fit:cover; object-position:center;
  border:2.5px solid rgba(46,139,117,.25);
  transition:border-color .3s;
  position:relative; z-index:1;
}
.fo-collab-card:hover .fo-collab-card__avatar{border-color: var(--green-soft);}
.fo-collab-card__initial {
  width:90px; height:90px; border-radius:50%;
  background: linear-gradient(135deg, rgba(46,139,117,.15), rgba(94,42,140,.15));
  border:2.5px solid rgba(46,139,117,.2);
  display:flex; align-items:center; justify-content:center;
  font-family:'Playfair Display',serif;
  font-size:2.1rem; font-weight:700; color: var(--green-forest);
  transition:border-color .3s,background .3s;
  position:relative; z-index:1;
}
.fo-collab-card:hover .fo-collab-card__initial {
  border-color: var(--green-soft);
  background: linear-gradient(135deg, rgba(46,139,117,.25), rgba(94,42,140,.2));
  color: var(--green-deep);
}

.fo-collab-card__name {
  font-family:'Playfair Display',serif;
  font-size:1.06rem; font-weight:700;
  color: var(--green-deep); margin-bottom:.42rem;
  line-height:1.28; letter-spacing:-.01em;
}
.fo-collab-card__role {
  font-family:'DM Mono',monospace;
  font-size:.68rem; font-weight:500;
  color: var(--violet-rich); margin-bottom:.42rem;
  text-transform:uppercase; letter-spacing:.1em; opacity:.85;
}
.fo-collab-card__loc {
  font-family:'DM Sans',sans-serif;
  font-size:.8rem; font-weight:300;
  color: var(--green-mint); letter-spacing:.01em;
}

.fo-collab-card__founder-badge {
  position:absolute; top:.9rem; right:.9rem;
  font-family:'DM Mono',monospace;
  font-size:.58rem; font-weight:500;
  letter-spacing:.14em; text-transform:uppercase;
  background: rgba(76,175,146,.12); color: var(--green-forest);
  border:1px solid rgba(94,42,140,.2);
  border-radius:4px; padding:4px 9px;
}

/* FULLSCREEN MODAL */
.fo-modal-overlay {
  position:fixed;
  top:0;
  left:0;
  right:0;
  bottom:0;
  background: rgba(10,92,74,0.85);
  backdrop-filter:blur(12px);
  z-index:9999;
  display:flex;
  align-items:center;
  justify-content:center;
  animation:modal-fade-in 0.3s ease;
  cursor:pointer;
}

.fo-modal-content {
  background: linear-gradient(135deg, var(--white-pure) 0%, var(--violet-light) 100%);
  border-radius:32px;
  max-width:90%;
  width:600px;
  max-height:85vh;
  overflow-y:auto;
  padding:2.5rem;
  position:relative;
  animation:modal-slide-up 0.4s cubic-bezier(0.22,0.68,0,1.2);
  cursor:default;
  box-shadow:0 40px 80px rgba(0,0,0,0.3),0 0 0 1px rgba(76,175,146,0.2);
}

.fo-modal-content::-webkit-scrollbar {
  width:8px;
}
.fo-modal-content::-webkit-scrollbar-track {
  background:var(--violet-light);
  border-radius:10px;
}
.fo-modal-content::-webkit-scrollbar-thumb {
  background:var(--green-soft);
  border-radius:10px;
}

.fo-modal-close {
  position:absolute;
  top:1.5rem;
  right:1.5rem;
  background:var(--violet-light);
  border:none;
  border-radius:50%;
  width:44px;
  height:44px;
  display:flex;
  align-items:center;
  justify-content:center;
  cursor:pointer;
  transition:all 0.2s ease;
  color:var(--violet-deep);
  z-index:10;
}
.fo-modal-close:hover {
  background:var(--green-soft);
  transform:rotate(90deg) scale(1.05);
  color:white;
}

.fo-modal-avatar {
  width:120px;
  height:120px;
  border-radius:50%;
  margin:0 auto 1.5rem;
  border:4px solid var(--green-soft);
  object-fit:cover;
  box-shadow:0 12px 24px rgba(0,0,0,0.15);
}
.fo-modal-avatar-placeholder {
  width:120px;
  height:120px;
  border-radius:50%;
  margin:0 auto 1.5rem;
  background:linear-gradient(135deg, var(--green-soft), var(--violet-soft));
  border:4px solid var(--white-pure);
  display:flex;
  align-items:center;
  justify-content:center;
  font-family:'Playfair Display',serif;
  font-size:3rem;
  font-weight:700;
  color:white;
  box-shadow:0 12px 24px rgba(0,0,0,0.15);
}

.fo-modal-name {
  font-family:'Playfair Display',serif;
  font-size:2rem;
  font-weight:900;
  color:var(--green-deep);
  text-align:center;
  margin-bottom:0.5rem;
}

.fo-modal-role {
  font-family:'DM Mono',monospace;
  font-size:0.85rem;
  font-weight:500;
  color:var(--violet-rich);
  text-align:center;
  text-transform:uppercase;
  letter-spacing:0.15em;
  margin-bottom:0.75rem;
}

.fo-modal-loc {
  font-family:'DM Sans',sans-serif;
  font-size:0.9rem;
  color:var(--green-mint);
  text-align:center;
  margin-bottom:2rem;
  display:flex;
  align-items:center;
  justify-content:center;
  gap:0.5rem;
}

.fo-modal-speciality {
  font-family:'DM Sans',sans-serif;
  font-size:1rem;
  line-height:1.7;
  color:var(--green-deep);
  background:rgba(76,175,146,0.1);
  padding:1.5rem;
  border-radius:20px;
  margin-top:1rem;
  border-left:4px solid var(--green-soft);
}

/* JOIN */
.fo-join {
  background: linear-gradient(135deg, var(--green-deep) 0%, var(--violet-deep) 100%);
  padding:6.5rem 1.5rem; position:relative; overflow:hidden; text-align:center;
}
.fo-join__mesh {
  position:absolute; inset:0; pointer-events:none;
  background:
    radial-gradient(ellipse 75% 55% at 50% 0%, rgba(76,175,146,.15) 0%, transparent 60%),
    radial-gradient(ellipse 55% 50% at 15% 100%, rgba(155,107,179,.18) 0%, transparent 60%);
}
.fo-join__stripe {
  position:absolute; left:0; right:0; height:2px; opacity:.4;
  background: repeating-linear-gradient(
    90deg, var(--green-mint) 0, var(--green-mint) 20px, var(--violet-soft) 20px, var(--violet-soft) 40px,
    var(--green-soft) 40px, var(--green-soft) 60px, var(--violet-rich) 60px, var(--violet-rich) 80px
  );
  animation:stripe-slide 6s linear infinite;
}
.fo-join__stripe.t{top:0;} .fo-join__stripe.b{bottom:0;}
.fo-join h2 {
  font-family:'Playfair Display',serif;
  font-size:clamp(2.1rem,5vw,3.8rem); font-weight:900;
  color:#fff; text-shadow:0 2px 20px rgba(0,0,0,.2);
  max-width:640px; margin:0 auto .85rem; line-height:1.08;
}
.fo-join h2 em {
  font-style:italic;
  background:linear-gradient(90deg, var(--green-soft), var(--violet-soft), var(--green-light), var(--violet-light));
  background-size:300% auto;
  -webkit-background-clip:text; -webkit-text-fill-color:transparent;
  background-clip:text; animation:shimmer-txt 4s linear infinite; display:inline-block;
}
.fo-join p {
  font-family:'DM Sans',sans-serif;
  font-size:1rem; font-weight:300;
  color: rgba(255,255,255,.78); max-width:440px; margin:0 auto 2.75rem;
  line-height:1.85; letter-spacing:.01em;
}
.btn-lime {
  display:inline-flex; align-items:center; gap:9px;
  font-family:'DM Sans',sans-serif;
  font-size:.95rem; font-weight:600; letter-spacing:.04em;
  padding:16px 38px; border-radius:4px; border:none; cursor:pointer;
  background: var(--green-soft); color: var(--white-pure);
  box-shadow:0 4px 28px rgba(76,175,146,.35);
  transition:transform .2s,box-shadow .2s,background .2s; text-decoration:none;
}
.btn-lime:hover{background: var(--violet-soft);transform:translateY(-3px);box-shadow:0 12px 36px rgba(123,63,158,.45);}
`;

const Adinkra = ({ size = 80, opacity = 0.15 }: { size?: number; opacity?: number }) => (
  <svg width={size} height={size} viewBox="0 0 80 80" fill="none" style={{ opacity }}>
    <circle cx="40" cy="40" r="34" stroke="#4CAF92" strokeWidth="1.5" />
    <circle cx="40" cy="40" r="20" stroke="#4CAF92" strokeWidth="1.5" />
    <circle cx="40" cy="40" r="7" fill="#4CAF92" fillOpacity=".35" />
    <line x1="40" y1="6" x2="40" y2="74" stroke="#4CAF92" strokeWidth="1" />
    <line x1="6" y1="40" x2="74" y2="40" stroke="#4CAF92" strokeWidth="1" />
    <line x1="16" y1="16" x2="64" y2="64" stroke="#7B3F9E" strokeWidth=".8" strokeDasharray="3 4" />
    <line x1="64" y1="16" x2="16" y2="64" stroke="#7B3F9E" strokeWidth=".8" strokeDasharray="3 4" />
    <polygon points="40,12 46,27 40,22 34,27" fill="#4CAF92" fillOpacity=".3" />
    <polygon points="40,68 46,53 40,58 34,53" fill="#4CAF92" fillOpacity=".3" />
  </svg>
);

const Founders = () => {
  const { t } = useTranslation();
  const { user, isAuthenticated } = useAuth();
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [selectedMember, setSelectedMember] = useState<any>(null);

  const handleVolunteerClick = () => {
    if (isAuthenticated) {
      alert(t('navbar.volunteerSuccess', { name: user?.firstName }));
    } else {
      setIsAuthModalOpen(true);
    }
  };

  const handleCardClick = (member: any) => {
    setSelectedMember(member);
  };

  const closeModal = () => {
    setSelectedMember(null);
  };

  const allMembers = [
    { name:"M. Barke CISSE",               role:t('founders.collaborators.oumar.role'),      image:"",                      speciality:t('founders.collaborators.oumar.speciality'),      location:t('founders.collaborators.oumar.location'),      isFounder:false },
    { name:"Dr. Kancou CISSOKO",            role:t('founders.collaborators.moussa.role'),     image:"",                      speciality:t('founders.collaborators.moussa.speciality'),     location:t('founders.collaborators.moussa.location'),     isFounder:false },
    { name:"Mr. Teilo DIAL",               role:t('founders.collaborators.kadidia.role'),    image:"",                      speciality:t('founders.collaborators.kadidia.speciality'),    location:t('founders.collaborators.kadidia.location'),    isFounder:false },
    { name:"Dr Hamed DIALLO",              role:t('founders.collaborators.mariam.role'),     image:"",                      speciality:t('founders.collaborators.mariam.speciality'),     location:t('founders.collaborators.mariam.location'),     isFounder:false },
    { name:"DR Diallo Kadiatou NDIAYE",    role:t('founders.collaborators.aminata.role'),    image:"",                      speciality:t('founders.collaborators.aminata.speciality'),    location:t('founders.collaborators.aminata.location'),    isFounder:false },
    { name:"Dr Fadjiné DIARRA",            role:t('founders.collaborators.fadjine.role'),    image:"/images/fadjine.jpeg",  speciality:t('founders.collaborators.fadjine.speciality'),    location:t('founders.collaborators.fadjine.location'),    isFounder:false },
    { name:"Dr. Youssouf KEITA",           role:t('founders.founderTitle'),                  image:"/images/youssouf.jpeg", speciality:t('founders.founderBio'),                          location:"",                                              isFounder:true  },
    { name:"Dr. Nene KONIPO",              role:t('founders.collaborators.salif.role'),      image:"",                      speciality:t('founders.collaborators.salif.speciality'),      location:t('founders.collaborators.salif.location'),      isFounder:false },
    { name:"Mr. Ibrahim MANE",             role:t('founders.collaborators.fanta.role'),      image:"",                      speciality:t('founders.collaborators.fanta.speciality'),      location:t('founders.collaborators.fanta.location'),      isFounder:false },
    { name:"Dr Souleymane SAWADOGO",       role:t('founders.collaborators.souleymane.role'), image:"",                      speciality:t('founders.collaborators.souleymane.speciality'), location:t('founders.collaborators.souleymane.location'), isFounder:false },
    { name:"M.Ibrahim TERERA",             role:t('founders.collaborators.ibrahim.role'),    image:"",                      speciality:t('founders.collaborators.ibrahim.speciality'),    location:t('founders.collaborators.ibrahim.location'),    isFounder:false },
    { name:"Dr.Habibatou dite Mah TRAORE", role:t('founders.collaborators.habibatou.role'),  image:"/images/habibatou.jpeg",speciality:t('founders.collaborators.habibatou.speciality'),  location:t('founders.collaborators.habibatou.location'),  isFounder:false },
    { name:"Masseni TRAORE",               role:t('founders.collaborators.awa.role'),        image:"",                      speciality:t('founders.collaborators.awa.speciality'),        location:t('founders.collaborators.awa.location'),        isFounder:false },
    { name:"Mr.Sekouli TRAORE",            role:t('founders.collaborators.mamadou.role'),    image:"",                      speciality:t('founders.collaborators.mamadou.speciality'),    location:t('founders.collaborators.mamadou.location'),    isFounder:false },
    { name:"Mr. Adama TRAORE",             role:t('founders.collaborators.adama.role'),      image:"",                      speciality:t('founders.collaborators.adama.speciality'),      location:t('founders.collaborators.adama.location'),      isFounder:false },
    { name:"Unknown",                      role:t('founders.collaborators.fatoumata.role'),  image:"",                      speciality:t('founders.collaborators.fatoumata.speciality'),  location:t('founders.collaborators.fatoumata.location'),  isFounder:false },
  ].sort((a, b) => {
    const surname = (n: string) => n.trim().split(/\s+/).pop()!.toUpperCase();
    return surname(a.name).localeCompare(surname(b.name));
  });

  return (
    <>
      <style>{STYLES}</style>
      {isAuthModalOpen && (
        <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} />
      )}

      {/* Fullscreen Modal for Member Details */}
      {selectedMember && (
        <div className="fo-modal-overlay" onClick={closeModal}>
          <div className="fo-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="fo-modal-close" onClick={closeModal}>
              <X size={24} />
            </button>
            
            {selectedMember.image ? (
              <img src={selectedMember.image} alt={selectedMember.name} className="fo-modal-avatar" />
            ) : (
              <div className="fo-modal-avatar-placeholder">
                {selectedMember.name.replace(/^(Dr\.?\s*|Mr\.?\s*|M\.?\s*|Mme\.?\s*)/i,'').charAt(0)}
              </div>
            )}
            
            <h2 className="fo-modal-name">{selectedMember.name}</h2>
            <p className="fo-modal-role">{selectedMember.role}</p>
            {selectedMember.location && (
              <p className="fo-modal-loc">
                📍 {selectedMember.location}
              </p>
            )}
            
            <div className="fo-modal-speciality">
              <strong style={{ color: 'var(--violet-rich)', display: 'block', marginBottom: '0.75rem', fontSize: '1.1rem' }}>
                À propos
              </strong>
              {selectedMember.speciality}
            </div>
            
            {selectedMember.isFounder && (
              <div style={{ 
                marginTop: '1rem', 
                padding: '0.75rem', 
                background: 'rgba(76,175,146,0.15)', 
                borderRadius: '12px',
                textAlign: 'center',
                fontSize: '0.85rem',
                color: 'var(--green-deep)',
                fontFamily: 'DM Mono, monospace'
              }}>
                🏆 Fondateur de HealthMOUR
              </div>
            )}
          </div>
        </div>
      )}

      <div className="fo-page">

        {/* HERO */}
        <section className="fo-hero">
          <div className="fo-hero__kente" />
          <div className="fo-hero__mesh" />
          <div className="fo-hero__adinkra" style={{ top:'10%', right:'6%', '--dur':'16s' } as React.CSSProperties}>
            <Adinkra size={155} opacity={.16} />
          </div>
          <div className="fo-hero__adinkra" style={{ bottom:'12%', left:'4%', '--dur':'11s', animationDelay:'3s' } as React.CSSProperties}>
            <Adinkra size={90} opacity={.12} />
          </div>
          <div className="fo-hero__body">
            <div className="fo-hero__eyebrow">
              <div className="fo-hero__eyebrow-dot" />
              {t('founders.heroTitle') || 'Les Visages de HealthMOUR'}
            </div>
            <h1 className="fo-hero__title">
              {t('founders.heroTitle') ? t('founders.heroTitle') : <>Les esprits derrière <em>la mission</em></>}
            </h1>
            <p className="fo-hero__sub">
              {t('founders.heroDesc') || "Une équipe de professionnels engagés, unis par la conviction que la santé est un droit universel."}
            </p>
          </div>
        </section>

        <div className="fo-divider" />

        {/* TEAM GRID */}
        <section className="fo-collab">
          <div className="fo-collab__mesh" />
          <div className="fo-collab__kente" />
          <div className="fo-adinkra-wm"><Adinkra size={500} opacity={1} /></div>

          <div className="fo-collab__header">
            <span className="fo-sec-label">{t('founders.teamTitle') || 'Notre Équipe'}</span>
            <h2 className="fo-sec-title" style={{ maxWidth:520, margin:'0 auto .6rem' }}>
              {t('founders.teamTitle') || 'Les bâtisseurs de la vision'}
            </h2>
            <p>{t('founders.teamDesc')}</p>
          </div>

          <div className="fo-collab__grid">
            {allMembers.map((c, i) => (
              <div 
                key={c.name} 
                className="fo-collab-card" 
                style={{ animationDelay:`${i * .045}s` }}
                onClick={() => handleCardClick(c)}
              >
                {c.isFounder && (
                  <div className="fo-collab-card__founder-badge">
                    {t('founders.behindTitle') || 'Fondateur'}
                  </div>
                )}
                <div className="fo-collab-card__avatar-wrap">
                  <div className="fo-collab-card__avatar-glow" />
                  {c.image ? (
                    <img src={c.image} alt={c.name} className="fo-collab-card__avatar" />
                  ) : (
                    <div className="fo-collab-card__initial">
                      {c.name.replace(/^(Dr\.?\s*|Mr\.?\s*|M\.?\s*|Mme\.?\s*)/i,'').charAt(0)}
                    </div>
                  )}
                </div>
                <p className="fo-collab-card__name">{c.name}</p>
                <p className="fo-collab-card__role">{c.role}</p>
                {c.location && <p className="fo-collab-card__loc">{c.location}</p>}
              </div>
            ))}
          </div>
        </section>

        <div className="fo-divider" />

        {/* JOIN CTA */}
        <section className="fo-join">
          <div className="fo-join__mesh" />
          <div className="fo-join__stripe t" />
          <div className="fo-join__stripe b" />
          <div className="fo-adinkra-wm"><Adinkra size={420} opacity={1} /></div>
          <div style={{ position:'absolute', top:'10%', left:'3%', zIndex:1 }}>
            <Adinkra size={130} opacity={.065} />
          </div>
          <div style={{ position:'absolute', bottom:'8%', right:'3%', zIndex:1 }}>
            <Adinkra size={100} opacity={.055} />
          </div>
          <div className="rel">
            <span className="fo-sec-label">{t('founders.joinTitle') || 'Rejoindre la Mission'}</span>
            <h2>
              {t('founders.joinTitle') ? t('founders.joinTitle') : <>Rejoignez une équipe qui <em>transforme des vies</em></>}
            </h2>
            <p>
              {t('founders.joinDesc') || "Votre expertise et votre passion peuvent faire la différence pour des milliers de personnes à travers l'Afrique de l'Ouest."}
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