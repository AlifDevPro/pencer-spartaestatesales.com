import Image from 'next/image';
import styles from './searchPreview.module.scss';

export default function SearchPreview({ suggestions }: { suggestions?: any }) {
  return (
    <div className={styles.searchPreview} id="searchPreview">
      <div className={styles.searchPreviewWrapper}>
        {suggestions.map((service: any, index: any) => (
          <a href={service.link} key={index} className={styles.service} style={{fill: service.color}}>
            {service.icon}
            <span className={styles.title}>
              {service.title}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
