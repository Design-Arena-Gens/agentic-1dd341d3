"use client";

import { useEffect, useMemo, useState } from "react";

type FAQ = {
  question: string;
  answer: string;
};

const faqItems: FAQ[] = [
  {
    question: "How long does it take?",
    answer:
      "Most participants finish the survey and required offers within 20-30 minutes. Rewards are processed shortly after completion."
  },
  {
    question: "What kind of offers are required?",
    answer:
      "Offers include quick actions like downloading apps, joining newsletters, or answering mini-surveys. You choose the ones you're comfortable completing."
  },
  {
    question: "How will I get the gift card?",
    answer:
      "Once your survey and offer completions are verified, we send a digital $100 Crumbl gift card straight to your email."
  },
  {
    question: "Is this really free?",
    answer:
      "Yes! Participation is free. Simply complete the required steps and offers—no hidden fees or purchases necessary."
  },
  {
    question: "Can I do this more than once?",
    answer:
      "Each person can claim one $100 Crumbl gift card per 12-month period to keep rewards fair and available for new fans."
  }
];

const socialProofMessages = [
  "✅ Marcus from Austin, TX just claimed her $100 reward",
  "👥 850 users browsing now"
];

export default function HomePage() {
  const [activeFaqIndex, setActiveFaqIndex] = useState<number | null>(0);
  const [socialIndex, setSocialIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSocialIndex((prev) => (prev + 1) % socialProofMessages.length);
    }, 5500);
    return () => clearInterval(interval);
  }, []);

  const selectedSocialMessage = useMemo(
    () => socialProofMessages[socialIndex],
    [socialIndex]
  );

  return (
    <main className="page">
      <header className="page__header">
        <span className="page__logo" aria-label="Crumbl">Crumbl</span>
      </header>

      <section className="hero" aria-labelledby="hero-heading">
        <div className="hero__copy">
          <h1 id="hero-heading">Get a $100 Crumbl Gift Card</h1>
          <p className="hero__subhead">
            Review your favorite cookie flavors and earn a $100 gift card as a
            thank you for your feedback.
          </p>
          <button className="cta">START NOW</button>
          <div className="hero__social" aria-live="polite">
            {selectedSocialMessage}
          </div>
        </div>
        <div className="hero__visual" role="presentation">
          <div className="gift-card">
            <span className="gift-card__logo">Crumbl</span>
            <span className="gift-card__value">$100</span>
            <span className="gift-card__tag">Sweet Rewards</span>
          </div>
          <div className="hero__badge">✔️ Verified by TikTok</div>
          <div className="hero__skate"></div>
        </div>
      </section>

      <section className="how-it-works" aria-labelledby="process-heading">
        <header className="section-header">
          <h2 id="process-heading">How It Works</h2>
          <p>Five simple steps to earn your Crumbl gift card</p>
        </header>
        <ol className="steps">
          <li className="step">
            <span className="step__icon" aria-hidden>✨</span>
            <div>
              <h3>Click &ldquo;START NOW&rdquo;</h3>
              <p>Begin your journey to earning a $100 Crumbl gift card</p>
            </div>
          </li>
          <li className="step">
            <span className="step__icon" aria-hidden>📧</span>
            <div>
              <h3>Enter your email and cookie preferences</h3>
              <p>Tell us about your favorite Crumbl flavors</p>
            </div>
          </li>
          <li className="step">
            <span className="step__icon" aria-hidden>📝</span>
            <div>
              <h3>Complete the Crumbl flavor survey</h3>
              <p>Share your honest feedback about cookie experiences</p>
            </div>
          </li>
          <li className="step">
            <span className="step__icon" aria-hidden>🎁</span>
            <div>
              <h3>Finish 5+ simple offers</h3>
              <p>Complete quick tasks like app downloads or surveys</p>
            </div>
          </li>
          <li className="step">
            <span className="step__icon" aria-hidden>💳</span>
            <div>
              <h3>Receive your $100 Crumbl gift card</h3>
              <p>Get your reward delivered via email within 24-48 hours</p>
            </div>
          </li>
        </ol>
        <button className="cta">START NOW</button>
      </section>

      <section className="testimonial" aria-labelledby="testimonial-heading">
        <div className="section-header">
          <div className="testimonial__stars" aria-hidden>
            {Array.from({ length: 5 }).map((_, idx) => (
              <span key={idx}>★</span>
            ))}
          </div>
          <span className="testimonial__quote-mark" aria-hidden>❝</span>
          <h2 id="testimonial-heading" className="sr-only">
            Participant testimonial
          </h2>
        </div>
        <blockquote>
          <p>
            “Reviewed a few cookies, got my gift card two days later. I bought six
            boxes. No regrets.”
          </p>
          <footer>— Tyler S., Scottsdale, AZ</footer>
        </blockquote>
      </section>

      <section className="faq" aria-labelledby="faq-heading">
        <header className="section-header">
          <h2 id="faq-heading">Frequently Asked Questions</h2>
          <p>Everything you need to know about earning your reward</p>
        </header>
        <div className="faq__list">
          {faqItems.map((item, index) => {
            const isOpen = activeFaqIndex === index;
            return (
              <div key={item.question} className={`faq__item ${isOpen ? "faq__item--open" : ""}`}>
                <button
                  className="faq__question"
                  onClick={() =>
                    setActiveFaqIndex((prev) => (prev === index ? null : index))
                  }
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${index}`}
                >
                  {item.question}
                  <span aria-hidden>{isOpen ? "−" : "+"}</span>
                </button>
                <div
                  id={`faq-panel-${index}`}
                  role="region"
                  aria-live="polite"
                  className="faq__answer"
                  hidden={!isOpen}
                >
                  <p>{item.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="final-cta" aria-label="Final call to action">
        <button className="cta">START NOW</button>
      </section>
    </main>
  );
}
