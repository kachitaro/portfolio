import React from 'react';

import { type TInquiryTopic } from '@/types/portfolio';

/** The enquiry a visitor chose, shared between service/case-study CTAs and the contact form. */
let current: TInquiryTopic | null = null;
const listeners = new Set<() => void>();

export function setInquiryTopic(topic: TInquiryTopic | null) {
  current = topic;
  listeners.forEach((listener) => listener());
}

const subscribe = (listener: () => void) => {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
};

export function useInquiryTopic() {
  return React.useSyncExternalStore(
    subscribe,
    () => current,
    () => null,
  );
}
