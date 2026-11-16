'use client';

import React from 'react';

import { Item, Stagger } from '@/components/motion/motion';
import { Section } from '@/components/section';
import { LazyMount } from '@/components/three/lazy-mount';
import { SkillsScene } from '@/components/three/lazy-scenes';
import { useLanguage } from '@/context/language-context';
import { stackIntro, toolchainGroups } from '@/data/portfolioData';

// Same order and colours as the orbits in the 3D scene.
const GROUP_SWATCH = ['bg-brand-9', 'bg-neutral-12', 'bg-brand-7', 'bg-neutral-9'];

export function StackSection() {
  const { t, language } = useLanguage();
  const [isSkillsHidden, setSkillsHidden] = React.useState(false);
  const skillGroups = React.useMemo(
    () => toolchainGroups.map((group) => ({ name: group.category[language], items: group.items })),
    [language],
  );

  return (
    <Section id="stack" reveal={false} title={t('Công nghệ', 'Stack')}>
      <Stagger gap={0.07}>
        <Item as="p" className="prose-serif text-neutral-12">
          {stackIntro[language]}
        </Item>

        {!isSkillsHidden && (
          <Item className="mt-10">
            <LazyMount when="view" className="min-h-[320px] md:min-h-[400px]">
              <SkillsScene
                className="h-[320px] w-full md:h-[400px]"
                groups={skillGroups}
                onUnavailable={() => setSkillsHidden(true)}
              />
            </LazyMount>
            <p className="text-neutral-11 mt-3 text-sm">
              {t(
                'Mỗi hình là một công nghệ, mỗi quỹ đạo là một nhóm. Rê chuột hoặc chạm để xem tên.',
                'Each shape is a technology and each orbit a group. Hover or tap to see the name.',
              )}
            </p>
            <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm">
              {toolchainGroups.map((group, i) => (
                <li key={group.category.en} className="text-neutral-11 flex items-center gap-2">
                  <span aria-hidden className={`${GROUP_SWATCH[i % 4]} h-2.5 w-2.5 rounded-sm`} />
                  {group.category[language]}
                </li>
              ))}
            </ul>
          </Item>
        )}

        <div className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2">
          {toolchainGroups.map((group) => (
            <Item key={group.category.en}>
              <h3 className="text-neutral-12 border-neutral-4 border-b pb-3 text-base font-semibold">
                {group.category[language]}
              </h3>
              <ul className="text-neutral-11 mt-3 space-y-1.5 text-[15px]">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="hover:text-neutral-12 transition-[transform,color] duration-200 hover:translate-x-1">
                    {item}
                  </li>
                ))}
              </ul>
            </Item>
          ))}
        </div>
      </Stagger>
    </Section>
  );
}
