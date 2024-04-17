import { useEffect, useRef } from 'react';



type Props = {
  callback: Function;
  children: any;
  isLoading: Boolean;
  hideSentinal: Boolean
}
const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.9,
};

function InfiniteScroller({ callback, isLoading, children, hideSentinal }: Props) {
  const observer = useRef<IntersectionObserver>();
  const ref = useRef(null);
  useEffect(() => {
    observer.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !isLoading) {
          callback();
        }
      });
    }, options);

    if (observer.current && ref.current) {
      observer.current.observe(ref.current);
    }

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };

  }, [callback, isLoading]);

  return (
    <div>
      {children}
      {hideSentinal && < div ref={ref} id="sentinel" style={{ height: "10px" }}> </div>}
      {isLoading && <div>loading...</div>}
    </div>
  )

}

export default InfiniteScroller;