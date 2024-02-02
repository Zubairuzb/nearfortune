"use client"
import dynamic from 'next/dynamic';

import styles from '@/app/app.module.css';
import { NetworkId, ComponentMap } from '@/config';
import { Navigation } from '@/components/navigation';

const Component = dynamic(() => import('@/components/vm-component'), { ssr: false });

const socialComponents = ComponentMap[NetworkId];

export default function HelloComponents() {

  return (
    <>
      <main class="container-fluid">
          
            <Component src={socialComponents.nearFortune} />
           
      </main>
    </>
  );
}