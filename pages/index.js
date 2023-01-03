import Head from 'next/head';
import Image from 'next/image';
import buildspaceLogo from '../assets/buildspace-logo.png';
import metaverseProfessionalLogo from '../assets/metaverse_professional_logo.png';


const Home = () => {
  return (
    <div className="root">
      <Head>
        <title>Automatic NFT trait generator</title>
        <script src="https://connect.manifoldxyz.dev/latest/connect.umd.js"></script>
        <link rel="stylesheet" href="https://connect.manifoldxyz.dev/latest/connect.css"></link>
      </Head>
      <div className="container">
        <div className="header">
          <div className="header-title">
            <h1>Automatic NFT trait generator</h1>
          </div>
          <div className="header-subtitle">
            <h2>Instructions: Connect your wallet (⬇️) and select the asset that you want to get traits of</h2>
          </div>
          
        </div>
      </div>
      <div className="badge-container grow">
        <a
          href="https://metaverseprofessional.tech/"
          target="_blank"
          rel="noreferrer"
        >
          <div className="badge">
            <Image src={buildspaceLogo} alt="buildspace logo" />
            <p>Buildspace N&W2</p>
          </div>
          <div className="badge">
            <Image src={metaverseProfessionalLogo} alt="buildspace logo" />
            <p>Metaverse Professional</p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Home;
