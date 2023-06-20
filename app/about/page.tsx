import style from './about.module.css';
import Image from 'next/image';

import { aboutWording } from './about.wording';

export default function AboutPage() {
  return (
    <section className={`${style.about} fit`}>
      <div className={`${style['about__hero']}`}>
        <div className={style['profile']}>
          <Image
            src={aboutWording.profileLink}
            alt={'Nirinasoa Herilanto'}
            width={500}
            height={500}
            sizes="cover"
          />
        </div>

        <div className="about__summary">
          <h1>{aboutWording.greeting}</h1>
          <p className="mt-4 text-justify">{aboutWording.pitch}</p>
          <p className="mt-4 text-justify">{aboutWording.preference}</p>
        </div>
      </div>

      {/* <div className="my-8">
        <h1>University course and training</h1>
      </div>

      <div className="my-8">
        <h1>Certitifications</h1>
      </div> */}
    </section>
  );
}
