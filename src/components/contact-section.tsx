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
  Globe
} from 'lucide-react';
import { GithubIcon } from '@/components/icons/github-icon';

export function ContactSection() {
  const { language, t } = useLanguage();
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const services = personalInfo.services[language];
  const serviceIcons = [
    <Code2 key="0" className="w-5 h-5 text-sky-400" />,
    <Layers key="1" className="w-5 h-5 text-indigo-400" />,
    <Zap key="2" className="w-5 h-5 text-amber-400" />,
    <Globe key="3" className="w-5 h-5 text-emerald-400" />
  ];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setFormSubmitted(true);

      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 }
      });

      const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
        formData.subject || 'Portfolio Contact from ' + formData.name
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;

      setTimeout(() => {
        window.location.href = mailtoUrl;
      }, 800);
    }, 600);
  };

  return (
    <section id="contact" className="py-12 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <Badge variant="outline" className="mb-3 px-3.5 py-1 text-xs uppercase tracking-wider border-primary/30 text-primary">
            {t('Liên hệ & Hợp tác', 'Get In Touch')}
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            {t('Hãy cùng bắt đầu một dự án mới!', "Let's Build Something Awesome Together!")}
          </h2>
          <p className="mt-3 text-muted-foreground text-sm sm:text-base">
            {t(
              'Bạn đang cần phát triển website, xây dựng ứng dụng hoặc trao đổi giải pháp công nghệ? Đừng ngần ngại nhắn tin cho mình nhé.',
              'Looking for a dedicated software engineer or discussing modern web architectures? Reach out anytime!'
            )}
          </p>
        </div>

        {/* Top Badges (Location, Timezone, Availability) */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          <div className="flex items-center gap-2 px-4 py-2 bg-background/80 glass-panel rounded-full border border-border/60 text-xs font-medium">
            <MapPin className="w-3.5 h-3.5 text-primary" />
            <span>{personalInfo.location[language]}</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-background/80 glass-panel rounded-full border border-border/60 text-xs font-medium">
            <Clock className="w-3.5 h-3.5 text-sky-400" />
            <span>UTC+7 (ICT Timezone)</span>
          </div>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 rounded-full border border-emerald-500/20 text-xs font-semibold text-emerald-500">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>{t('AVAILABLE FOR FREELANCE & PROJECTS', 'AVAILABLE FOR FREELANCE & PROJECTS')}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Contact Details & Direct Channels */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            
            {/* Direct Email Card */}
            <div className="glass-panel p-6 rounded-3xl border-border/60 shadow-xs">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-2xl bg-primary/10 text-primary">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-foreground">
                    {t('Địa chỉ Email trực tiếp', 'Direct Email')}
                  </h4>
                  <p className="text-xs text-muted-foreground">
                    {t('Phản hồi nhanh trong 24 giờ', 'Quick response within 24h')}
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between p-3 rounded-2xl bg-muted/60 border border-border/40 font-mono text-xs sm:text-sm">
                <span className="text-foreground select-all truncate mr-2">
                  {personalInfo.email}
                </span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleCopyEmail}
                  className="h-8 px-2.5 gap-1.5 rounded-xl text-xs cursor-pointer hover:bg-background shrink-0"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-500" />
                      <span className="text-emerald-500 font-semibold">{t('Đã chép!', 'Copied!')}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>{t('Sao chép', 'Copy')}</span>
                    </>
                  )}
                </Button>
              </div>
            </div>

            {/* GitHub Card */}
            <a
              href="https://github.com/Kachitaro"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-panel p-5 rounded-3xl border-border/60 hover:border-primary/40 transition-all duration-300 hover:shadow-md flex items-center justify-between group"
            >
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-2xl bg-background border border-border/50 text-foreground group-hover:text-primary transition-colors">
                  <GithubIcon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">
                    GitHub Profile
                  </h4>
                  <p className="text-xs text-muted-foreground font-mono">
                    @Kachitaro
                  </p>
                </div>
              </div>
              <Badge variant="outline" className="text-xs border-border/60">
                {t('Xem hồ sơ', 'Visit')} ↗
              </Badge>
            </a>

            {/* Role & Company Card */}
            <div className="glass-panel p-5 rounded-3xl border-border/60 flex items-center gap-3">
              <div className="p-2.5 rounded-2xl bg-sky-500/10 text-sky-400">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-foreground">
                  Software Engineer @ Nexpando
                </h4>
                <p className="text-xs text-muted-foreground">
                  {t('Sẵn sàng trao đổi cơ hội hợp tác mới', 'Open to exciting software engineering projects')}
                </p>
              </div>
            </div>

          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7">
            <Card className="glass-panel border-border/60 shadow-lg rounded-3xl">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-bold flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-primary" />
                  <span>{t('Gửi tin nhắn nhanh', 'Send a Quick Message')}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                {formSubmitted ? (
                  <div className="py-8 text-center space-y-3 animate-in fade-in zoom-in-95 duration-300">
                    <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-500 flex items-center justify-center mx-auto">
                      <Check className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold">
                      {t('Cảm ơn bạn đã gửi tin nhắn! 🎉', 'Thank you for reaching out! 🎉')}
                    </h3>
                    <p className="text-sm text-muted-foreground max-w-md mx-auto">
                      {t(
                        'Ứng dụng email của bạn sẽ mở để xác nhận gửi, hoặc bạn có thể liên hệ trực tiếp qua anhtai.dev@gmail.com.',
                        'Your mail client is preparing the draft, or feel free to message directly at anhtai.dev@gmail.com.'
                      )}
                    </p>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setFormSubmitted(false)}
                      className="mt-4 rounded-full"
                    >
                      {t('Gửi tin nhắn khác', 'Send another message')}
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-foreground/80">
                          {t('Họ và tên *', 'Your Name *')}
                        </label>
                        <Input
                          required
                          placeholder={t('Nguyễn Văn A', 'John Doe')}
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="rounded-xl bg-background/60"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-foreground/80">
                          {t('Địa chỉ Email *', 'Your Email *')}
                        </label>
                        <Input
                          required
                          type="email"
                          placeholder="example@gmail.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="rounded-xl bg-background/60"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-foreground/80">
                        {t('Chủ đề', 'Subject')}
                      </label>
                      <Input
                        placeholder={t('Dự án Website / Hợp tác phát triển...', 'Website Project / Collaboration inquiry...')}
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="rounded-xl bg-background/60"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-foreground/80">
                        {t('Nội dung tin nhắn *', 'Message *')}
                      </label>
                      <Textarea
                        required
                        rows={4}
                        placeholder={t('Chia sẻ về ý tưởng dự án hoặc câu hỏi của bạn...', 'Tell me about your project requirements or thoughts...')}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="rounded-xl bg-background/60 resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={loading}
                      className="w-full rounded-xl py-2.5 gap-2 font-medium shadow-md cursor-pointer text-sm"
                    >
                      {loading ? (
                        <span>{t('Đang gửi...', 'Sending...')}</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
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
          <div className="text-center max-w-xl mx-auto mb-8">
            <h3 className="text-xl font-bold font-mono text-foreground flex items-center justify-center gap-2">
              <Sparkles className="w-5 h-5 text-amber-400" />
              <span>{t('Dịch vụ & Lĩnh vực có thể hỗ trợ', 'What I Can Help With')}</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((service, idx) => (
              <TiltCard key={idx} className="rounded-2xl">
                <div className="glass-panel p-5 rounded-2xl border-border/60 hover:border-primary/40 transition-all hover:shadow-md flex flex-col justify-between h-full">
                  <div>
                    <div className="p-2.5 rounded-xl bg-background/80 border border-border/50 w-fit mb-3">
                      {serviceIcons[idx % serviceIcons.length]}
                    </div>
                    <h4 className="text-sm font-bold text-foreground mb-1.5">
                      {service.title}
                    </h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {service.desc}
                    </p>
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
