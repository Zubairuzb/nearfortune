"use client"
import '../globals.css';
import dynamic from 'next/dynamic';

import styles from '@/app/app.module.css';
import { NetworkId, ComponentMap } from '@/config';

const Component = dynamic(() => import('@/components/vm-component'), { ssr: false });

const socialComponents = ComponentMap[NetworkId];

export default function Raffle() {

  return (
    <>
      <main>
        <Component src={socialComponents.nearFortuneRaffle} />
      </main>
    </>
  );
}