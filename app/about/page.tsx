import style from './about.module.css';
import Image from 'next/image';

import { aboutWording } from './about.wording';

import { fetchApi } from '@nhr/services';

import { ICertification, ICustomResponse, IFormation } from '@nhr/utils';

import { CertificationList, FormationList } from '@nhr/components';
import { appConfig } from '@nhr/config';

export default async function AboutPage() {
  const { data: formations } = await fetchApi<ICustomResponse<IFormation[]>>({
    url: `${appConfig.apiEndpoint}/api/formations`,
    nextOptions: { revalidate: 1000 * 60 * 60 * 5 },
  });

  const { data: certifications } = await fetchApi<
    ICustomResponse<ICertification[]>
  >({
    url: `${appConfig.apiEndpoint}/api/certifications`,
    nextOptions: { revalidate: 1000 * 60 * 60 * 5 },
  });

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

      <div className="my-8">
        <h1>University course and training</h1>

        <FormationList className="mt-4" data={formations} />
      </div>

      <div className="my-8">
        <h1>Certitifications</h1>

        <CertificationList className="mt-4" data={certifications} />
      </div>
    </section>
  );
}
