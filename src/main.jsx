import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowRight,
  Baby,
  BadgeCheck,
  CalendarCheck,
  Check,
  ClipboardList,
  HeartHandshake,
  Mail,
  MapPin,
  Menu,
  MonitorSmartphone,
  Phone,
  ShieldCheck,
  Sparkles,
  X,
} from 'lucide-react';
import './styles.css';

const phoneDisplay = '+1 (864) 783-5747';
const phoneHref = '+18647835747';
const email = 'vheallpt@gmail.com';
const web3FormsAccessKey = 'YOUR_WEB3FORMS_ACCESS_KEY'; // Get a free key at https://web3forms.com/ and paste it here

const services = [
  {
    icon: HeartHandshake,
    title: 'Orthopedic Physical Therapy',
    image: '/service_ortho_new_1782884116411.png',
    text:
      "Chronic pain, post-surgical recovery, sports injuries, joint dysfunction - Nilaxi's COMT certification means you receive the gold standard in manual orthopedic care.",
  },
  {
    icon: Baby,
    title: 'Pediatric Physical Therapy',
    image: '/service_pediatric_new_1782884130163.png',
    text:
      "From delayed motor milestones to sensory processing challenges, Ms. Nixi works with infants, toddlers, and children using NDT and Sensory Integration.",
  },
  {
    icon: MonitorSmartphone,
    title: 'Virtual Sessions',
    image: '/service_virtual_new_1782884147019.png',
    text:
      "Many aspects of evaluation, exercise instruction, and caregiver coaching translate beautifully to telehealth. Ask about virtual availability.",
  },
];

const specialties = [
  'Orthopedic manual therapy',
  'Mulligan Technique',
  'Kinesio and rigid taping',
  'Neurodevelopmental Techniques',
  'Sensory Integration',
  'Pediatric motor development',
];

const comparisonRows = [
  ['Session length', '30-60 min, one-on-one', 'Often shared with an aide, shorter 1:1 time'],
  ['Who decides your plan', 'You and your PT', 'Visit caps set by insurer'],
  ['Visit limits', 'None - based on progress', 'Capped by authorization'],
  ['Paperwork', 'Minimal', 'Referrals, prior auth, denials'],
  ['Cost transparency', 'Flat, known rate upfront', 'Co-pay plus deductible, often unclear until billed'],
];

const insuranceQuestions = [
  'Do I have out-of-network physical therapy benefits?',
  'What percentage is reimbursed after my deductible?',
  'Have I met my deductible this year?',
  'Is there a session or dollar cap per year?',
  'Where do I submit a superbill - mail, portal, or app?',
];

const encodeForm = (data) =>
  new URLSearchParams({
    'form-name': 'contact',
    ...data,
  }).toString();

function Header() {
  const [open, setOpen] = useState(false);
  const links = [
    ['About', '#about'],
    ['Services', '#services'],
    ['Cash-Pay', '#cash-pay'],
    ['Contact', '#contact'],
  ];

  return (
    <header className="site-header">
      <a className="brand" href="#home" aria-label="V Heal home">
        <img src="/logo-vheal.png" alt="V Heal Physical Therapy Services logo" />
      </a>
      <button
        className="icon-button mobile-only"
        type="button"
        aria-label={open ? 'Close menu' : 'Open menu'}
        onClick={() => setOpen((value) => !value)}
      >
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>
      <nav className={open ? 'nav-links is-open' : 'nav-links'} aria-label="Primary navigation">
        {links.map(([label, href]) => (
          <a href={href} key={href} onClick={() => setOpen(false)}>
            {label}
          </a>
        ))}
        <a className="button small" href="#contact" onClick={() => setOpen(false)}>
          <CalendarCheck size={17} />
          Book Call
        </a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero section" id="home">
      <div className="hero-copy">
        <p className="eyebrow">Orthopedic & pediatric physical therapy</p>
        <h1>Heal Deeper. Move Freer. Live Fuller.</h1>
        <p className="lead">
          Expert orthopedic and pediatric physical therapy - evidence-based, one-on-one, and built
          around you.
        </p>
        <p>
          At V Heal, you are never a number on a caseload. Certified orthopedic manual therapist
          Dr. Nilaxi Tailor, MS, PT, COMT, brings over 15 years of clinical experience to every
          visit.
        </p>
        <div className="hero-actions">
          <a className="button" href="#contact">
            Book a Free Discovery Call
            <ArrowRight size={18} />
          </a>
          <a className="text-link" href={`tel:${phoneHref}`}>
            <Phone size={17} />
            {phoneDisplay}
          </a>
        </div>
      </div>
      <div className="hero-identity" aria-label="V Heal care highlights">
        <div className="hero-image-wrapper">
          <img src="/hero_session_1782816435129.png" alt="V Heal Physical Therapy Services" className="hero-image" />
        </div>
        <blockquote>
          "Healing happens one-on-one - never on a clock set by someone who's never met you."
        </blockquote>
        <div className="quick-facts">
          <span>In-person sessions</span>
          <span>Virtual care</span>
          <span>Superbills available</span>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="section about-section-new" id="about">
      <div className="about-top-grid">
        <div className="about-left-col">
          <div className="about-image-card">
            <div className="about-image-bg">
              <img src="/nixi.jpeg" alt="Ms. Nilaxi Tailor, MS, PT, COMT" className="about-portrait" />
            </div>
          </div>
          <div className="availability-card">
            <MapPin size={20} />
            <span>In-person and virtual sessions available.</span>
          </div>
        </div>
        <div className="about-right-col">
          <p className="eyebrow">Meet Ms. Nixi</p>
          <h2>Personal warmth, clinical depth, and care that listens.</h2>
          <p className="lead-text">
            Nilaxi Tailor, MS, PT, COMT is the founder of V Heal Physical Therapy Services. With a Master of Science in Kinesiology from CUNY and certification as an Orthopedic Manual Therapist, she brings both the clinical depth and the personal warmth that make lasting recovery possible.
          </p>
          <p>
            With over 15 years of experience in orthopedic and pediatric physical therapy, Nilaxi has a gift for meeting each patient exactly where they are - whether that's a toddler working through developmental delays or an adult navigating post-surgical rehab.
          </p>
        </div>
      </div>
      
      <div className="specializations-container">
        <h3>Clinical Specializations</h3>
        <ul className="specialties-grid">
          {specialties.map((item) => (
            <li key={item} className="specialty-badge">
              <Check size={16} />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="section band" id="services">
      <div className="section-heading">
        <p className="eyebrow">Services</p>
        <h2>Personalized Care, From Evaluation to Independence</h2>
      </div>
      <div className="service-grid">
        {services.map(({ icon: Icon, title, image, text }) => (
          <article className="service-card" key={title}>
            <div className="service-image-wrapper">
              <img src={image} alt={title} className="service-image" />
              <div className="service-icon">
                <Icon size={22} />
              </div>
            </div>
            <div className="service-card-content">
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function CashPay() {
  return (
    <section className="section cash-pay" id="cash-pay">
      <div className="section-heading narrow">
        <p className="eyebrow">Why Cash-Pay?</p>
        <h2>Your Care, Undivided</h2>
        <p>
          Both cash-based and insurance-based PT can lead to good outcomes. The difference is who
          controls your treatment plan. At V Heal, that decision belongs to you and your therapist.
        </p>
      </div>

      <div className="cash-layout">
        <article className="info-block">
          <BadgeCheck size={24} />
          <h3>Is cash-pay more expensive?</h3>
          <p>
            Often it's the opposite. Without authorization limits, you typically need fewer, longer,
            one-on-one sessions, which can cost less overall than co-pays stretched across months.
          </p>
        </article>
        <article className="info-block teal">
          <ShieldCheck size={24} />
          <h3>Can I still use my insurance?</h3>
          <p>
            Yes. Many PPO plans reimburse out-of-network care. V Heal provides a superbill with CPT
            and ICD-10 codes, dates, and provider NPI for possible reimbursement.
          </p>
        </article>
      </div>

      <div className="comparison-wrap">
        <div className="comparison-title">
          <ClipboardList size={24} />
          <h3>Cash-pay vs. insurance-based PT at a glance</h3>
        </div>
        <div className="comparison-table" role="table" aria-label="Cash-pay versus insurance PT">
          <div className="table-row table-head" role="row">
            <span role="columnheader"></span>
            <span role="columnheader">V Heal</span>
            <span role="columnheader">Insurance-Based</span>
          </div>
          {comparisonRows.map(([label, vheal, insurance]) => (
            <div className="table-row" role="row" key={label}>
              <strong role="cell">{label}</strong>
              <span role="cell">{vheal}</span>
              <span role="cell">{insurance}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="steps-and-questions">
        <article className="steps">
          <p className="eyebrow">Reimbursement</p>
          <h3>How the superbill path works</h3>
          {[
            'You pay V Heal directly at time of service, at the transparent session rate.',
            'V Heal provides your superbill with all required billing codes.',
            'You submit it to your insurer by mail, fax, or their online portal.',
            'If you have out-of-network PPO benefits, your insurer reimburses you per your plan.',
          ].map((step, index) => (
            <div className="step" key={step}>
              <span>{index + 1}</span>
              <p>{step}</p>
            </div>
          ))}
        </article>
        <article className="questions">
          <p className="eyebrow orange">Before you book</p>
          <h3>Questions to ask your insurance plan</h3>
          <ul className="check-list">
            {insuranceQuestions.map((question) => (
              <li key={question}>
                <Check size={18} />
                {question}
              </li>
            ))}
          </ul>
          <p className="note">
            We accept Medicare (enrollment in progress), Medicaid, and BabyNet. Superbills are
            available for out-of-network reimbursement from private insurance.
          </p>
        </article>
      </div>
    </section>
  );
}

function Contact() {
  const [status, setStatus] = useState('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    careType: 'Orthopedic Physical Therapy',
    message: '',
  });

  const updateField = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const submitForm = async (event) => {
    event.preventDefault();
    setStatus('sending');
    try {
      if (
        window.location.hostname === 'localhost' ||
        window.location.hostname === '127.0.0.1'
      ) {
        // Mock successful form submission in local development
        await new Promise((resolve) => setTimeout(resolve, 800));
        setStatus('sent');
        setFormData({
          name: '',
          email: '',
          phone: '',
          careType: 'Orthopedic Physical Therapy',
          message: '',
        });
        return;
      }

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: web3FormsAccessKey,
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: `New Discovery Call Request: ${formData.careType}`,
          from_name: 'V Heal Website',
          message: `Care Interest: ${formData.careType}\n\nMessage:\n${formData.message}`,
        }),
      });
      const result = await response.json();
      if (!response.ok || !result.success) throw new Error('Form submission failed');
      setStatus('sent');
      setFormData({
        name: '',
        email: '',
        phone: '',
        careType: 'Orthopedic Physical Therapy',
        message: '',
      });
    } catch {
      setStatus('error');
    }
  };

  return (
    <section className="section contact-section" id="contact">
      <div className="contact-copy">
        <p className="eyebrow">Contact / Booking</p>
        <h2>Ready to Start?</h2>
        <p>
          Whether you have a referral or you're not sure where to begin, reach out. A free
          15-minute discovery call is the easiest first step - no pressure, just a conversation.
        </p>
        <div className="contact-methods">
          <a href={`tel:${phoneHref}`}>
            <Phone size={20} />
            {phoneDisplay}
          </a>
          <a href={`mailto:${email}`}>
            <Mail size={20} />
            {email}
          </a>
          <a href="https://www.vhealpt.com">
            <Sparkles size={20} />
            www.vhealpt.com
          </a>
        </div>
      </div>

      <form className="contact-form" name="contact" method="POST" onSubmit={submitForm}>
        <input type="hidden" name="form-name" value="contact" />
        <label>
          Name
          <input
            type="text"
            name="name"
            autoComplete="name"
            value={formData.name}
            onChange={updateField}
            required
          />
        </label>
        <label>
          Email
          <input
            type="email"
            name="email"
            autoComplete="email"
            value={formData.email}
            onChange={updateField}
            required
          />
        </label>
        <label>
          Phone
          <input
            type="tel"
            name="phone"
            autoComplete="tel"
            value={formData.phone}
            onChange={updateField}
          />
        </label>
        <label>
          Care interest
          <select name="careType" value={formData.careType} onChange={updateField}>
            <option>Orthopedic Physical Therapy</option>
            <option>Pediatric Physical Therapy</option>
            <option>Virtual Session</option>
            <option>Insurance / Superbill Question</option>
          </select>
        </label>
        <label className="full">
          Message
          <textarea
            name="message"
            rows="5"
            value={formData.message}
            onChange={updateField}
            required
          ></textarea>
        </label>
        <button className="button full" type="submit" disabled={status === 'sending'}>
          {status === 'sending' ? 'Sending...' : 'Schedule Your Discovery Call'}
          <ArrowRight size={18} />
        </button>
        {status === 'sent' && (
          <p className="form-status success">Thank you. Your message has been sent.</p>
        )}
        {status === 'error' && (
          <p className="form-status error">
            The form could not send here. Please email {email} or call {phoneDisplay}.
          </p>
        )}
      </form>
    </section>
  );
}

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <CashPay />
        <Contact />
      </main>
      <footer className="site-footer">
        <img src="/logo-vheal.png" alt="" />
        <p>V Heal Physical Therapy Services</p>
        <p>Cash-based care, by appointment.</p>
      </footer>
    </>
  );
}

createRoot(document.getElementById('root')).render(<App />);
