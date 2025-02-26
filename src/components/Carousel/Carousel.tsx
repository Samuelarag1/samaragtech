import React, { useEffect, useRef, useState } from "react";
import "./Carousel.css";

interface CarouselItemProps {
  children: React.ReactNode;
  width: string;
}

export const CarouselItem: React.FC<CarouselItemProps> = ({
  children,
  width,
}) => {
  return (
    <div className="carousel-item" style={{ width: width }}>
      {children}
    </div>
  );
};

interface CarouselProps {
  children: React.ReactNode;
}

const Carousel: React.FC<CarouselProps> = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swipe = useRef<{ x: number; swiping?: boolean }>({ x: 0 });

  const updateIndex = (newIndex: number) => {
    if (newIndex >= React.Children.count(children) || newIndex < 0) {
      newIndex = 0;
    }
    setActiveIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      updateIndex(activeIndex + 1);
    }, 2000);
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [activeIndex]);

  const onTouchStart = (e: React.TouchEvent) => {
    const touch = e.touches[0];
    swipe.current = { x: touch.clientX };
    console.log("TOUCH >>>> START");
  };

  const onTouchMove = (e: React.TouchEvent) => {
    if (e.changedTouches && e.changedTouches.length) {
      swipe.current.swiping = true;
    }
    console.log("TOUCH >>>> MOVE");
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    const touch = e.changedTouches[0];
    const swipedLeft = touch.clientX - swipe.current.x > 0 ? true : false;
    const swipedRight = touch.clientX - swipe.current.x > 0 ? false : true;
    const absX = Math.abs(touch.clientX - swipe.current.x);
    if (swipe.current.swiping && absX > 50) {
      if (swipedLeft) {
        updateIndex(activeIndex - 1);
      } else if (swipedRight) {
        updateIndex(activeIndex + 1);
      }
    }
    swipe.current = { x: 0 };
  };

  return (
    <div
      className="carousel flex flex-col items-center justify-center"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <div
        className="inner"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {React.Children.map(children, (child) => {
          if (React.isValidElement<CarouselItemProps>(child)) {
            return React.cloneElement<CarouselItemProps>(child, {
              width: "100%",
            });
          }
          return child;
        })}
      </div>
    </div>
  );
};

export default Carousel;
