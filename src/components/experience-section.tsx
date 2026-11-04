'use client';

import { Reveal } from '@/components/reveal';
import { useLanguage } from '@/context/language-context';
import { experienceData } from '@/data/experience';
import { type TLanguage } from '@/types/portfolio';

const EN_MONTHS = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

function parse(value: string) {
  const [year, month] = value.split('-').map(Number);
  return { year, month };
}

function formatMonth(value: string, language: TLanguage) {
  const { year, month } = parse(value);
  return language === 'vi'
    ? `${String(month).padStart(2, '0')}/${year}`
    : `${EN_MONTHS[month - 1]} ${year}`;
}

/** Inclusive month count, e.g. 2022-07 to 2023-01 is 7 months. */
function formatDuration(start: string, end: string | undefined, language: TLanguage) {
  const from = parse(start);
  const to = end
    ? parse(end)
    : { year: new Date().getFullYear(), month: new Date().getMonth() + 1 };
  const total = (to.year - from.year) * 12 + (to.month - from.month) + 1;
  const years = Math.floor(total / 12);
  const months = total % 12;
  const parts: string[] = [];
  if (language === 'vi') {
    if (years) {
      parts.push(`${years} năm`);
    }
    if (months) {
      parts.push(`${months} tháng`);
    }
  } else {
    if (years) {
      parts.push(`${years} ${years > 1 ? 'yrs' : 'yr'}`);
    }
    if (months) {
      parts.push(`${months} ${months > 1 ? 'mos' : 'mo'}`);
    }
  }
  return parts.join(' ');
}

export function ExperienceSection() {
  const { t, language } = useLanguage();

  return (
    <section id="experience" aria-labelledby="experience-title" className="page section-y">
      <div className="grid-page gap-y-8 lg:gap-y-0">
        <Reveal as="h2" id="experience-title" className="text-title col-span-full lg:col-span-4">
          {t('Kinh nghiệm', 'Experience')}
        </Reveal>

        <ol className="col-span-full grid gap-12 lg:col-span-8 lg:col-start-5 lg:gap-16">
          {experienceData.map((item, index) => (
            <Reveal as="li" key={item.id} delay={index * 80}>
              <p className="text-data text-muted-foreground">
                {formatMonth(item.start, language)} –{' '}
                {item.end ? formatMonth(item.end, language) : t('Hiện tại', 'Present')} ·{' '}
                {formatDuration(item.start, item.end, language)}
              </p>
              <h3 className="text-lead mt-2 font-semibold">
                {item.role[language]}, {item.company}
              </h3>
              <p className="text-data text-muted-foreground mt-1">
                {item.employmentType[language]} · {item.workplaceType[language]}
              </p>
              <p className="text-body mt-4 max-w-[62ch]">{item.description[language]}</p>
              <p className="text-data mt-4">{item.skills.join(', ')}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
