import React from 'react';
import Link from 'next/link';

// Internal Import
import Style from './Discover.module.css';

// Discover Navigation Menu
const Discover = () => {

  const discover = [
    {
      name: "Author Profile",
      link: "author-profile",
    },
    {
      name: "Account Setting",
      link: "account-setting",
    },
    {
      name: "Collection",
      link: "collection",
    },
    {
      name: "Search",
      link: "search",
    },
    {
      name: "Upload NFT",
      link: "upload-NFT",
    },
    {
      name: "NFT Details",
      link: "NFT-details",
    },
    {
      name: "Connect Wallet",
      link: "connect-wallet",
    },
    // {
    //   name: "Blog",
    //   link: "blog",
    // },
   
  ];
  return (
    <div>
      {discover.map((el, i) => (
        <div key={i + 1} className={Style.discover}>
          <Link href={{ pathname: `${el.link}` }}>{el.name}</Link>
        </div>
      ))}
    </div>
  );
};

export default Discover;