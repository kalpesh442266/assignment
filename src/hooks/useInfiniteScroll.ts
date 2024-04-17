import { FC, useEffect, useRef } from 'react';



type Props = {
  callback: Function;
}
function useInfiniteScroll({ callback }: Props) {
  const loadMoreRef = useRef<HTMLDivElement | null>(null);
  const option = {
    root: null,
    rootMargin: '40px',
    threshold: 0.5,
  };
  const observer = new IntersectionObserver(handleObserver, option);

  function handleObserver(entries: IntersectionObserverEntry[]) {
    const entry = entries[0];

    if (entry.isIntersecting) {
      callback();
    }
  };

  useEffect(() => {
    
    if (loadMoreRef.current) observer.observe(loadMoreRef.current);
  }, []);

  return { loadMoreRef };
}

export default useInfiniteScroll;