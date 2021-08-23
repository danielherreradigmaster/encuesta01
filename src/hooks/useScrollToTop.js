import { useEffect } from 'react';

export default function ScrollToTop(formStep) {
  useEffect(() => {
    console.log('estoy entrando scrolltop')
    window.scrollTo(0, 0);
  }, [formStep]);
};