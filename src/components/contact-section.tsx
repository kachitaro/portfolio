'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/language-context';
import { personalInfo } from '@/data/portfolioData';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { TiltCard } from '@/components/ui/tilt-card';
import confetti from 'canvas-confetti';
import {
  Mail,
  Send,
  Copy,
  Check,
  MapPin,
  Sparkles,
  MessageSquare,
  Clock,
  Code2,
  Layers,
  Zap,
  Globe,
  AlertCircle,
  Loader2,
} from 'lucide-react';
import { GithubIcon } from '@/components/icons/github-icon';

export function ContactSection() {
  const { language, t } = useLanguage();
  const [isCopied, setCopied] = useState(false);
  const [isFormSubmitted, setFormSubmitted] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const services = personalInfo.services[language];
  const serviceIcons = [
    <Code2 key="0" className="h-5 w-5 text-sky-400" />,
    <Layers key="1" className="h-5 w-5 text-indigo-400" />,
    <Zap key="2" className="h-5 w-5 text-amber-400" />,
    <Globe key="3" className="h-5 w-5 text-emerald-400" />,
  ];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleEmailFallback = () => {
    const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
      formData.subject || 'Portfolio Contact from ' + formData.name,
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`,
    )}`;
    window.location.href = mailtoUrl;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      return;
    }

    setLoading(true);
    setErrorMessage('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || 'Có lỗi xảy ra khi gửi tin nhắn.');
      }

      setLoading(false);
      setFormSubmitted(true);

      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 },
      });
    } catch (err: unknown) {
      setLoading(false);
      const message = err instanceof Error ? err.message : 'Không thể kết nối đến máy chủ.';
      setErrorMessage(message);
    }
  };

  return (
    <section id="contact" className="relative py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <Badge
            variant="outline"
            className="border-primary/30 text-primary mb-3 px-3.5 py-1 text-xs tracking-wider uppercase">
            {t('Liên hệ & Hợp tác', 'Get In Touch')}
          </Badge>
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            {t('Hãy cùng bắt đầu một dự án mới!', "Let's Build Something Awesome Together!")}
          </h2>
          <p className="text-muted-foreground mt-3 text-sm sm:text-base">
            {t(
              'Bạn đang cần phát triển website, xây dựng ứng dụng hoặc trao đổi giải pháp công nghệ? Đừng ngần ngại nhắn tin cho mình nhé.',
              'Looking for a dedicated software engineer or discussing modern web architectures? Reach out anytime!',
            )}
          </p>
        </div>

        {/* Top Badges (Location, Timezone, Availability) */}
        <div className="mb-12 flex flex-wrap items-center justify-center gap-3">
          <div className="bg-background/80 glass-panel border-border/60 flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-medium">
            <MapPin className="text-primary h-3.5 w-3.5" />
            <span>{personalInfo.location[language]}</span>
          </div>
          <div className="bg-background/80 glass-panel border-border/60 flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-medium">
            <Clock className="h-3.5 w-3.5 text-sky-400" />
            <span>UTC+7 (ICT Timezone)</span>
          </div>
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-xs font-semibold text-emerald-500">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
            </span>
            <span>
              {t('AVAILABLE FOR FREELANCE & PROJECTS', 'AVAILABLE FOR FREELANCE & PROJECTS')}
            </span>
          </div>
        </div>

        <div className="mb-16 grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
          {/* Contact Details & Direct Channels */}
          <div className="flex flex-col gap-4 lg:col-span-5">
            {/* Direct Email Card */}
            <div className="glass-panel border-border/60 rounded-3xl p-6 shadow-xs">
              <div className="mb-4 flex items-center gap-3">
                <div className="bg-primary/10 text-primary rounded-2xl p-2.5">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-foreground text-sm font-bold">
                    {t('Địa chỉ Email trực tiếp', 'Direct Email')}
                  </h4>
                  <p className="text-muted-foreground text-xs">
                    {t('Phản hồi nhanh trong 24 giờ', 'Quick response within 24h')}
                  </p>
                </div>
              </div>

              <div className="bg-muted/60 border-border/40 flex items-center justify-between rounded-2xl border p-3 font-mono text-xs sm:text-sm">
                <span className="text-foreground mr-2 truncate select-all">
                  {personalInfo.email}
                </span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleCopyEmail}
                  className="hover:bg-background h-8 shrink-0 cursor-pointer gap-1.5 rounded-xl px-2.5 text-xs">
                  {isCopied ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-emerald-500" />
                      <span className="font-semibold text-emerald-500">
                        {t('Đã chép!', 'Copied!')}
                      </span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5" />
                      <span>{t('Sao chép', 'Copy')}</span>
                    </>
                  )}
                </Button>
              </div>
            </div>

            {/* GitHub Card */}
            <a
              href="https://github.com/kachitaro"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-panel border-border/60 hover:border-primary/40 group flex items-center justify-between rounded-3xl p-5 transition-all duration-300 hover:shadow-md">
              <div className="flex items-center gap-3">
                <div className="bg-background border-border/50 text-foreground group-hover:text-primary rounded-2xl border p-2.5 transition-colors">
                  <GithubIcon className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-foreground group-hover:text-primary text-sm font-bold transition-colors">
                    GitHub Profile
                  </h4>
                  <p className="text-muted-foreground font-mono text-xs">@kachitaro</p>
                </div>
              </div>
              <Badge variant="outline" className="border-border/60 text-xs">
                {t('Xem hồ sơ', 'Visit')} ↗
              </Badge>
            </a>

            {/* Telegram Notification Badge */}
            <div className="glass-panel flex items-center gap-3 rounded-3xl border-sky-500/30 bg-sky-500/5 p-5">
              <div className="rounded-2xl bg-sky-500/15 p-2.5 text-sky-400">
                <Zap className="h-5 w-5" />
              </div>
              <div>
                <h4 className="text-foreground flex items-center gap-1.5 text-sm font-bold">
                  <span>Telegram Notification Bot</span>
                  <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </h4>
                <p className="text-muted-foreground text-xs">
                  {t(
                    'Tin nhắn gửi từ form sẽ thông báo ngay tới điện thoại của mình.',
                    'Form messages trigger instant notification via Telegram.',
                  )}
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7">
            <Card className="glass-panel border-border/60 rounded-3xl shadow-lg">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-2 text-xl font-bold">
                  <MessageSquare className="text-primary h-5 w-5" />
                  <span>
                    {t(
                      'Gửi tin nhắn nhanh (Tự động qua Telegram)',
                      'Send Quick Message (via Telegram)',
                    )}
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                {isFormSubmitted ? (
                  <div className="animate-in fade-in zoom-in-95 space-y-4 py-8 text-center duration-300">
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-500 shadow-md">
                      <Check className="h-7 w-7" />
                    </div>
                    <h3 className="text-foreground text-xl font-bold">
                      {t('Tin nhắn đã được gửi thành công! 🎉', 'Message sent successfully! 🎉')}
                    </h3>
                    <p className="text-muted-foreground mx-auto max-w-md text-sm leading-relaxed">
                      {t(
                        'Thông báo đã được chuyển tức thì tới Telegram của mình. Mình sẽ phản hồi lại cho bạn qua Email sớm nhất!',
                        'Your message was sent instantly to my Telegram. I will get back to you via your email shortly!',
                      )}
                    </p>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        setFormSubmitted(false);
                        setFormData({ name: '', email: '', subject: '', message: '' });
                      }}
                      className="mt-2 rounded-full px-6">
                      {t('Gửi tin nhắn khác', 'Send another message')}
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Error Banner */}
                    {errorMessage && (
                      <div className="bg-destructive/10 border-destructive/30 text-destructive animate-in fade-in flex flex-col gap-2 rounded-2xl border p-3.5 text-xs duration-200">
                        <div className="flex items-center gap-2 font-semibold">
                          <AlertCircle className="h-4 w-4 shrink-0" />
                          <span>{errorMessage}</span>
                        </div>
                        <div className="border-destructive/20 text-foreground flex items-center gap-2 border-t pt-1">
                          <span>
                            {t(
                              'Hoặc bạn có thể gửi trực tiếp qua Email:',
                              'Or you can send directly via Email:',
                            )}
                          </span>
                          <button
                            type="button"
                            onClick={handleEmailFallback}
                            className="text-primary cursor-pointer font-semibold underline hover:opacity-80">
                            {t('Gửi qua Email ngay', 'Send via Email')}
                          </button>
                        </div>
                      </div>
                    )}

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div className="space-y-1.5">
                        <label
                          htmlFor="contact-name"
                          className="text-foreground/80 text-xs font-semibold">
                          {t('Họ và tên *', 'Your Name *')}
                        </label>
                        <Input
                          id="contact-name"
                          name="name"
                          required
                          placeholder={t('Nguyễn Văn A', 'John Doe')}
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="bg-background/60 rounded-xl"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label
                          htmlFor="contact-email"
                          className="text-foreground/80 text-xs font-semibold">
                          {t('Địa chỉ Email *', 'Your Email *')}
                        </label>
                        <Input
                          id="contact-email"
                          name="email"
                          required
                          type="email"
                          placeholder="example@gmail.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="bg-background/60 rounded-xl"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label
                        htmlFor="contact-subject"
                        className="text-foreground/80 text-xs font-semibold">
                        {t('Chủ đề', 'Subject')}
                      </label>
                      <Input
                        id="contact-subject"
                        name="subject"
                        placeholder={t(
                          'Dự án Website / Hợp tác phát triển...',
                          'Website Project / Collaboration inquiry...',
                        )}
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="bg-background/60 rounded-xl"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label
                        htmlFor="contact-message"
                        className="text-foreground/80 text-xs font-semibold">
                        {t('Nội dung tin nhắn *', 'Message *')}
                      </label>
                      <Textarea
                        id="contact-message"
                        name="message"
                        required
                        rows={4}
                        placeholder={t(
                          'Chia sẻ về ý tưởng dự án hoặc câu hỏi của bạn...',
                          'Tell me about your project requirements or thoughts...',
                        )}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="bg-background/60 resize-none rounded-xl"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isLoading}
                      className="w-full cursor-pointer gap-2 rounded-xl py-2.5 text-sm font-medium shadow-md">
                      {isLoading ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" />
                          <span>{t('Đang gửi tới Telegram...', 'Sending to Telegram...')}</span>
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4" />
                          <span>{t('Gửi tin nhắn ngay', 'Send Message')}</span>
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Services Grid (What I can help with) */}
        <div>
          <div className="mx-auto mb-8 max-w-xl text-center">
            <h3 className="text-foreground flex items-center justify-center gap-2 font-mono text-xl font-bold">
              <Sparkles className="h-5 w-5 text-amber-400" />
              <span>{t('Dịch vụ & Lĩnh vực có thể hỗ trợ', 'What I Can Help With')}</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, idx) => (
              <TiltCard key={idx} className="rounded-2xl">
                <div className="glass-panel border-border/60 hover:border-primary/40 flex h-full flex-col justify-between rounded-2xl p-5 transition-all hover:shadow-md">
                  <div>
                    <div className="bg-background/80 border-border/50 mb-3 w-fit rounded-xl border p-2.5">
                      {serviceIcons[idx % serviceIcons.length]}
                    </div>
                    <h4 className="text-foreground mb-1.5 text-sm font-bold">{service.title}</h4>
                    <p className="text-muted-foreground text-xs leading-relaxed">{service.desc}</p>
                  </div>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
