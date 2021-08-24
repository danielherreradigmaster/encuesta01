import { useEffect } from 'react';

export default function ScrollToTop(formStep) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [formStep]);
};