'use client';

import React from 'react';

import { AvailabilityBadge } from '@/components/availability-badge';
import { GithubIcon } from '@/components/icons/github-icon';
import { LinkedinIcon } from '@/components/icons/linkedin-icon';
import { Section } from '@/components/section';
import { useLanguage } from '@/context/language-context';
import { inquiryTopics, personalInfo } from '@/data/portfolioData';
import { setInquiryTopic, useInquiryTopic } from '@/lib/inquiry';
import { cn } from '@/lib/utils';

const EMPTY_FORM = { name: '', email: '', subject: '', message: '' };

const fieldClass =
  'border-neutral-7 bg-neutral-1 text-neutral-12 placeholder:text-neutral-9 hover:border-neutral-8 focus-visible:border-brand-8 mt-2 block w-full rounded-lg border min-h-11 px-3.5 py-2.5 text-base md:text-[15px] outline-none transition-colors focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-brand-8';

export function ContactSection() {
  const { t, language } = useLanguage();
  const topic = useInquiryTopic();
  const [form, setForm] = React.useState(EMPTY_FORM);
  const [status, setStatus] = React.useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = React.useState('');

  const update =
    (key: keyof typeof EMPTY_FORM) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((prev) => ({ ...prev, [key]: e.target.value }));

  const topicLabel = inquiryTopics.find((item) => item.id === topic)?.label[language] ?? '';
  const subjectLine = [topicLabel, form.subject.trim()].filter(Boolean).join(' – ');

  const mailtoFallback = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
    subjectLine || `Portfolio: ${form.name}`,
  )}&body=${encodeURIComponent(`${form.message}\n\n${form.name} <${form.email}>`)}`;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMessage('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, subject: subjectLine }),
      });
      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error || t('Chưa gửi được tin nhắn.', 'The message was not sent.'));
      }
      setStatus('sent');
      setForm(EMPTY_FORM);
    } catch (err: unknown) {
      setStatus('error');
      setErrorMessage(
        err instanceof Error
          ? err.message
          : t('Không kết nối được máy chủ.', 'Could not reach the server.'),
      );
    }
  };

  return (
    <Section
      id="contact"
      title={t('Bắt đầu dự án', 'Start a project')}
      note={t('Thường trả lời trong 24 giờ', 'Usually replies within 24 hours')}>
      <div className="grid gap-14 lg:grid-cols-9 lg:gap-10">
        <div className="lg:col-span-4">
          <AvailabilityBadge />
          <p className="prose-serif text-neutral-12 mt-4">
            {t(
              'Bạn có một ý tưởng, một website cần làm, hay một giao diện cần sửa? Kể mình nghe ngắn gọn, mình sẽ trả lời và nói thẳng liệu mình có phù hợp không.',
              'Got an idea, a site to build or an interface to fix? Tell me briefly and I will reply and say honestly whether I am a good fit.',
            )}
          </p>
          <a
            href={`mailto:${personalInfo.email}`}
            className="tap-target display-section text-neutral-12 decoration-brand-8 hover:text-brand-11 mt-8 block text-2xl font-semibold break-all underline underline-offset-[6px] sm:text-[1.75rem]">
            {personalInfo.email}
          </a>
          <a
            href={personalInfo.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer me"
            className="tap-target text-neutral-12 hover:text-brand-11 mt-4 inline-flex items-center gap-2 text-[15px] font-medium underline underline-offset-4">
            <LinkedinIcon className="h-4 w-4" />
            {t('Hoặc nhắn qua LinkedIn', 'Or message me on LinkedIn')}
          </a>
          <div className="mt-5 flex flex-wrap gap-5 text-sm font-medium">
            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="tap-target text-neutral-11 hover:text-neutral-12 inline-flex items-center gap-1.5">
              <GithubIcon className="h-4 w-4" />
              GitHub
            </a>
          </div>
        </div>

        <div className="lg:col-span-5">
          {status === 'sent' ? (
            <div className="bg-brand-2 border-brand-6 rounded-xl border p-6" role="status">
              <p className="text-neutral-12 text-lg font-semibold">
                {t('Đã gửi tin nhắn.', 'Message sent.')}
              </p>
              <p className="text-neutral-11 mt-1 text-[15px]">
                {t(
                  'Mình sẽ trả lời qua email bạn vừa nhập.',
                  "I'll reply to the email you entered.",
                )}
              </p>
              <button
                type="button"
                onClick={() => setStatus('idle')}
                className="text-brand-11 mt-4 text-sm font-medium underline underline-offset-4">
                {t('Gửi tin nhắn khác', 'Send another message')}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <fieldset>
                <legend className="text-neutral-12 text-sm font-medium">
                  {t('Bạn đang cần gì?', 'What do you need?')}{' '}
                  <span className="text-neutral-11 font-normal">
                    ({t('không bắt buộc', 'optional')})
                  </span>
                </legend>
                <div className="mt-2 flex flex-wrap gap-2">
                  {inquiryTopics.map((item) => (
                    <label
                      key={item.id}
                      className={cn(
                        'has-focus-visible:outline-brand-8 inline-flex min-h-11 cursor-pointer items-center rounded-full border px-4 text-sm transition-colors has-focus-visible:outline-2 has-focus-visible:outline-offset-2',
                        topic === item.id
                          ? 'border-neutral-12 bg-neutral-12 text-neutral-1'
                          : 'border-neutral-6 text-neutral-11 hover:border-neutral-8 hover:text-neutral-12',
                      )}>
                      <input
                        type="radio"
                        name="topic"
                        value={item.id}
                        checked={topic === item.id}
                        onChange={() => setInquiryTopic(item.id)}
                        className="sr-only"
                      />
                      {item.label[language]}
                    </label>
                  ))}
                </div>
              </fieldset>
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="text-neutral-12 block text-sm font-medium">
                  {t('Tên', 'Name')}
                  <input
                    required
                    maxLength={100}
                    name="name"
                    autoComplete="name"
                    value={form.name}
                    onChange={update('name')}
                    className={fieldClass}
                  />
                </label>
                <label className="text-neutral-12 block text-sm font-medium">
                  Email
                  <input
                    required
                    type="email"
                    name="email"
                    autoComplete="email"
                    value={form.email}
                    onChange={update('email')}
                    className={fieldClass}
                  />
                </label>
              </div>
              <label className="text-neutral-12 block text-sm font-medium">
                {t('Chủ đề', 'Subject')}{' '}
                <span className="text-neutral-11 font-normal">
                  ({t('không bắt buộc', 'optional')})
                </span>
                <input
                  name="subject"
                  value={form.subject}
                  onChange={update('subject')}
                  className={fieldClass}
                />
              </label>
              <label className="text-neutral-12 block text-sm font-medium">
                {t('Nội dung', 'Message')}
                <textarea
                  required
                  name="message"
                  maxLength={3000}
                  rows={6}
                  placeholder={t(
                    'Dự án là gì, ai sẽ dùng nó, và bạn cần xong vào lúc nào?',
                    'What is the project, who will use it, and when do you need it?',
                  )}
                  value={form.message}
                  onChange={update('message')}
                  className={`${fieldClass} resize-y`}
                />
              </label>

              {status === 'error' && (
                <p
                  className="rounded-lg border border-(--red-6) bg-(--red-2) px-4 py-3 text-sm text-(--red-11)"
                  role="alert">
                  {errorMessage}{' '}
                  <a
                    href={mailtoFallback}
                    className="text-neutral-12 font-medium underline underline-offset-4">
                    {t('Gửi bằng ứng dụng email', 'Send with your email app')}
                  </a>
                </p>
              )}

              <button
                type="submit"
                disabled={status === 'sending'}
                className="bg-brand-9 text-brand-contrast hover:bg-brand-10 inline-flex h-11 items-center rounded-lg px-6 text-[15px] font-medium transition-colors disabled:opacity-60">
                {status === 'sending'
                  ? t('Đang gửi…', 'Sending…')
                  : t('Gửi tin nhắn', 'Send message')}
              </button>
            </form>
          )}
        </div>
      </div>
    </Section>
  );
}
