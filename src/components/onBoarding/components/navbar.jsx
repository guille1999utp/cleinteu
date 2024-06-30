import styles from "../styles/nav.module.css";
import Link from 'next/link'
import Image from 'next/image';
import benkyLogo from '../../../assets/logos/logo-benky-letter-blue.png';
import iconFacebook from '../../../assets/icons/icon-facebook-original.svg';
import iconLinkedin from '../../../assets/icons/icon-linkedin-original.svg';
import iconInstagram from '../../../assets/icons/icon-instagram-original.svg';

export default function Nabvar() {
  return (
    <nav className={styles.TopNav}>
      <div className={styles.TopNav_nav}>
        <div className={styles.TopNav_left}>
          <Link href="/">
          <Image src={benkyLogo} alt='benky logo' width={150} height={80} />
          </Link>
        </div>
        <div className={styles.TopNav_right}>
          <div className="flex">
            <Link href="https://www.facebook.com/Benky-Env%C3%ADos-de-dinero-100305172113627" target="_blank" rel="noopener noreferrer" style={{marginRight:"20px"}}>
              <Image src={iconFacebook} alt='icon facebook' width={50} height={50} />
            </Link>
            <Link href='https://www.linkedin.com/company/somosbenky/about/' target='_blank' rel='noopener noreferrer' style={{marginRight:"20px"}}>
              <Image src={iconLinkedin} alt='icon linkedin' width={50} height={50} />
            </Link>
            <Link href='https://www.instagram.com/benky__/' target='_blank' rel='noopener noreferrer' >
              <Image src={iconInstagram} alt='icon instagram' width={50} height={50} />
            </Link>
          </div>
        </div>
      </div> 
    </nav>
  );
}
