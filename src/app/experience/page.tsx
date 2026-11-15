import { permanentRedirect } from 'next/navigation';

// Merged into the home page in the one-page redesign.
export default function Page() {
  permanentRedirect('/#experience');
}
