import { SITE } from '../../lib/site';

const description = `Get in touch with ${SITE.name} for support, feedback or business questions.`;

export const metadata = {
  title: 'Contact Us',
  description,
  alternates: { canonical: '/contact' },
  openGraph: {
    type: 'website',
    siteName: SITE.name,
    title: `Contact ${SITE.name}`,
    description,
    url: '/contact',
  },
  twitter: {
    card: 'summary_large_image',
    title: `Contact ${SITE.name}`,
    description,
  },
};

export default function Contact() {
  return (
    <>
      <h1>Contact Us</h1>
      <p>
        Have a question, suggestion or problem? I would love to hear from you.
      </p>
      <div className="card">
        <p>
          Email: <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
        </p>
        <p className="small">I usually reply within 2 to 3 business days.</p>
      </div>
      <p>
        To report a harmful or abusive link, please use the{' '}
        <a href="/report-abuse">Report Abuse</a> page.
      </p>
    </>
  );
  }
