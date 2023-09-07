import Image from 'next/image';

import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Image src="dogs-footer.svg" width={27} height={22} alt="" />
      <p>Dogs. Alguns direitos reservados.</p>
    </footer>
  );
};

export default Footer;
