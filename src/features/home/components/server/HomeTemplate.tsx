import { AboutComponent } from '../client/AboutComponent';
import { ContactComponent } from '../client/ContactComponent';
import { ExperienceComponent } from '../client/ExperienceComponent';
import { HeroComponent } from '../client/HeroComponent';
import { SkillComponent } from '../client/SkillComponent';
import { WorkComponent } from '../client/WorkComponent';

import { getPortfolioAction } from '@/features/home/actions';

export const HomeTemplate = async () => {
  const { about, works, skills, experiences } = await getPortfolioAction();

  return (
    <>
      <HeroComponent />
      <AboutComponent about={about} />
      <WorkComponent works={works} />
      <SkillComponent skills={skills} />
      <ExperienceComponent experiences={experiences} />
      <ContactComponent />
    </>
  );
};
