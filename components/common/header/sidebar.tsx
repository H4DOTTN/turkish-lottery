import Link from 'next/link';
import { FC } from 'react';
import NavItem from './nav-item';
import SolanaConnectButton from '../solana/connect-button';

type Props = {
  menuOpen: boolean;
  closeMenu: () => void;
};
const Sidebar: FC<Props> = ({ menuOpen, closeMenu }) => {
  return (
    <div
      className={`fixed bottom-auto right-0 top-0 z-30 flex h-screen w-screen justify-end  text-white transition-transform duration-500 ease-in-out  will-change-transform  ${
        menuOpen ? 'translate-x-0' : 'translate-x-full delay-500'
      }`}
    >
      <div
        onClick={closeMenu}
        className={`absolute bottom-0 left-0 right-0  top-0 z-0 h-full w-full cursor-pointer  backdrop-blur-sm transition-opacity duration-500 will-change-auto   ${
          menuOpen ? 'opacity-100 delay-500' : 'opacity-0 '
        }`}
      />

      <div className="bg-primary relative z-10 flex h-full w-full  flex-col  px-10  pt-20  sm:w-3/4">
        <div>
          <ul className={'flex flex-col gap-y-4 text-2xl font-semibold'}>
            <NavItem title="Feed" path="/" />
            <NavItem title="Create" path="/create" />
            <NavItem title="Tags" path="/tags" />
            <NavItem title="About" path="/about" />
            <SolanaConnectButton />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
