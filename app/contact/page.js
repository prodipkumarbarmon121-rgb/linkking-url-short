import { SITE } from '../../lib/site';

export const metadata = {
  title: 'Contact Us',
  description: `Contact the ${SITE.name} team for support, feedback or business questions.`,
  alternates: { canonical: '/contact' },
};

export default function Contact() {
  return (
    <>
      <h1>Contact Us</h1>
      <p>
        Have a question, suggestion or problem? We would love to hear from you.
      </p>
      <div className="card">
        <p>
          Email: <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
        </p>
        <p className="small">We usually reply within 2 to 3 business days.</p>
      </div>
      <p>
        To report a harmful or abusive link, please use our{' '}
        <a href="/report-abuse">Report Abuse</a> page.
      </p>
    </>
  );
}
