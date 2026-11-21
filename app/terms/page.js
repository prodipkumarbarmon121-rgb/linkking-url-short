import { SITE } from '../../lib/site';

export const metadata = {
  title: 'Terms of Service',
  description: `Terms of Service for using ${SITE.name}.`,
  alternates: { canonical: '/terms' },
};

export default function Terms() {
  return (
    <>
      <h1>Terms of Service</h1>
      <p className="small">Last updated: WRITE DATE HERE</p>
      <p>
        By using {SITE.name}, you agree to these terms. If you do not agree,
        please do not use the service.
      </p>

      <h2>Use of the Service</h2>
      <p>
        {SITE.name} lets you create short links that redirect to other
        websites. You may use the service only for lawful purposes and in line
        with these terms.
      </p>

      <h2>Prohibited Content</h2>
      <p>You must not use {SITE.name} to shorten or share links that:</p>
      <ul>
        <li>contain malware, viruses or harmful code</li>
        <li>are used for phishing, scams or fraud</li>
        <li>lead to adult, sexually explicit or illegal content</li>
        <li>promote violence, hate or harassment</li>
        <li>infringe copyright or other rights</li>
        <li>are used for spam or deceptive redirects</li>
      </ul>

      <h2>Link Removal</h2>
      <p>
        We may disable or delete any link at any time, without notice, if we
        believe it breaks these terms or the law.
      </p>

      <h2>No Warranty</h2>
      <p>
        The service is provided &quot;as is&quot; without any guarantee that it
        will always be available, error-free or that links will last forever.
      </p>

      <h2>Limitation of Liability</h2>
      <p>
        To the extent allowed by law, {SITE.name} is not liable for any loss or
        damage arising from use of the service or from content on websites that
        short links lead to.
      </p>

      <h2>Changes to These Terms</h2>
      <p>
        We may update these terms at any time. Continued use of the service
        means you accept the updated terms.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about these terms? Email{' '}
        <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.
      </p>
    </>
  );
    }
