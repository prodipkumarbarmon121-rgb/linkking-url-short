import { SITE } from '../../lib/site';

export const metadata = {
  title: 'About Us',
  description: `Learn about ${SITE.name}, a free URL shortener, and why we built it.`,
  alternates: { canonical: '/about' },
};

export default function About() {
  return (
    <>
      <h1>About {SITE.name}</h1>
      <p>
        {SITE.name} is a free online tool that turns long, complicated web
        addresses into short and clean links. Our goal is to make sharing links
        simple, fast and safe for everyone.
      </p>
      <h2>Our Mission</h2>
      <p>
        We believe sharing a link should be easy. Long URLs are hard to read,
        break in messages and look untidy on social media. {SITE.name} solves
        this with a simple tool that works instantly, with no signup required.
      </p>
      <h2>What We Offer</h2>
      <p>
        Fast link shortening, a clean and simple interface, and links that
        redirect quickly. We also work to keep the service safe by blocking
        harmful, illegal and abusive links.
      </p>
      <h2>Keeping the Service Safe</h2>
      <p>
        We do not allow malware, phishing, adult or illegal content. If you
        find a harmful link, please report it on our{' '}
        <a href="/report-abuse">Report Abuse</a> page.
      </p>
      <h2>Contact</h2>
      <p>
        Questions or feedback? Email us at{' '}
        <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.
      </p>
    </>
  );
    }
