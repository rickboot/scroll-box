import Image from 'next/image';
import ScrollBoxes from './ScrollBox';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center p-24'>
      <ScrollBoxes />
    </main>
  );
}
