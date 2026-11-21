import { SITE } from '../../lib/site';

export const metadata = {
  title: 'Report Abuse',
  description: `Report a harmful, illegal or abusive link created with ${SITE.name}.`,
  alternates: { canonical: '/report-abuse' },
};

export default function ReportAbuse() {
  return (
    <>
      <h1>Report Abuse</h1>
      <p>
        We take abuse seriously. If you find a short link that leads to
        harmful, illegal or deceptive content, please tell us so we can review
        and remove it.
      </p>

      <h2>How to Report</h2>
      <p>
        Email <a href={`mailto:${SITE.email}`}>{SITE.email}</a> with:
      </p>
      <ul>
        <li>the full short link</li>
        <li>
          the reason (phishing, malware, adult content, copyright, spam or
          other)
        </li>
        <li>any extra details that help us check it</li>
      </ul>

      <h2>What Happens Next</h2>
      <p>
        We review every report and disable links that break our{' '}
        <a href="/terms">Terms of Service</a>.
      </p>
    </>
  );
    }
