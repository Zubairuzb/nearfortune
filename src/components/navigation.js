import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import NearLogo from 'public/near-logo.svg';
import { useWallet } from '@/wallets/wallet-selector';

export const Navigation = () => {

  const logo =
  "https://res.cloudinary.com/zbsoft/image/upload/v1700148751/raffle/logo.svg";

  const { signedAccountId, logOut, logIn } = useWallet();
  const [action, setAction] = useState(() => { });
  const [label, setLabel] = useState('Loading...');

  useEffect(() => {
    if (signedAccountId) {
      setAction(() => logOut);
      setLabel(`Logout ${signedAccountId}`);
    } else {
      setAction(() => logIn);
      setLabel('Login');
    }
  }, [signedAccountId, logOut, logIn, setAction, setLabel]);

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <Link href="/" passHref legacyBehavior>
          <Image priority src={logo} alt="NEAR Fortune logo" width="80" height="74" className="d-inline-block align-text-top" />
        </Link>
        <div className='navbar-nav pt-1'>
          <button className="btn btn-secondary" onClick={action} > {label} </button>
        </div>
      </div>
    </nav>
  );
};