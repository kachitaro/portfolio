'use client';

import React from 'react';

import { GithubIcon } from '@/components/icons/github-icon';
import { LinkedinIcon } from '@/components/icons/linkedin-icon';
import { Section } from '@/components/section';
import { useLanguage } from '@/context/language-context';
import { personalInfo } from '@/data/portfolioData';

const EMPTY_FORM = { name: '', email: '', subject: '', message: '' };

const fieldClass =
  'border-neutral-7 bg-neutral-1 text-neutral-12 placeholder:text-neutral-9 hover:border-neutral-8 focus-visible:border-brand-8 mt-2 block w-full rounded-lg border min-h-11 px-3.5 py-2.5 text-base md:text-[15px] outline-none transition-colors focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-brand-8';

export function ContactSection() {
  const { t } = useLanguage();
  const [form, setForm] = React.useState(EMPTY_FORM);
  const [status, setStatus] = React.useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = React.useState('');
  const [isCopied, setCopied] = React.useState(false);

  const update =
    (key: keyof typeof EMPTY_FORM) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((prev) => ({ ...prev, [key]: e.target.value }));

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personalInfo.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${personalInfo.email}`;
    }
  };

  const mailtoFallback = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
    form.subject || `Portfolio: ${form.name}`,
  )}&body=${encodeURIComponent(`${form.message}\n\n${form.name} <${form.email}>`)}`;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMessage('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
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
      title={t('Liên hệ', 'Contact')}
      note={t('Thường trả lời trong 24 giờ', 'Usually replies within 24 hours')}>
      <div className="grid gap-14 lg:grid-cols-9 lg:gap-10">
        <div className="lg:col-span-4">
          <p className="prose-serif text-neutral-12">
            {t(
              'Cần người làm frontend cho một dự án, hay muốn hỏi về bộ màu này? Viết cho mình.',
              'Need someone on the frontend of a project, or want to ask about this color system? Write to me.',
            )}
          </p>
          <a
            href={`mailto:${personalInfo.email}`}
            className="tap-target display-section text-neutral-12 decoration-brand-8 hover:text-brand-11 mt-8 block text-2xl font-semibold break-all underline underline-offset-[6px] sm:text-[1.75rem]">
            {personalInfo.email}
          </a>
          <div className="mt-5 flex flex-wrap gap-5 text-sm font-medium">
            <button
              type="button"
              onClick={copyEmail}
              className="tap-target text-neutral-11 hover:text-neutral-12"
              aria-live="polite">
              {isCopied ? t('Đã chép email', 'Email copied') : t('Chép email', 'Copy email')}
            </button>
            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="tap-target text-neutral-11 hover:text-neutral-12 inline-flex items-center gap-1.5">
              <GithubIcon className="h-4 w-4" />
              GitHub
            </a>
            {personalInfo.socials.linkedin && (
              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer me"
                className="tap-target text-neutral-11 hover:text-neutral-12 inline-flex items-center gap-1.5">
                <LinkedinIcon className="h-4 w-4" />
                LinkedIn
              </a>
            )}
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
