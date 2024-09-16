import styles from "./sectionThree.module.scss";

export default function SectionThree() {
  return (
    <div className={styles.sectionThree}>
      <div className={styles.services}>
        <h1 className={styles.footerHeading}>Quick Links</h1>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/#services">Services</a></li>
          <li><a href="/#contact">Contact</a></li>
          <li><a href="/#faq"></a></li>
          <li><a href="/rates-areas">Our Rates & Areas</a></li>
          <li><a href="/after-the-sale"></a></li>
          <li><a href="/#why-us">Why Us</a></li>
          <li><a href="/#mission">Our Misson</a></li>
        </ul>
      </div>
    </div>
  );
}
