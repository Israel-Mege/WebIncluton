import Layout from '@/components/shared/Layout';
import ChallengesClient from '@/components/challenges/ChallengesClient';

export default function ChallengesPage() {
  return (
    <Layout>
      <div className="py-24">
        <ChallengesClient />
      </div>
    </Layout>
  );
}