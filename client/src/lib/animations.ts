export const fadeIn = (direction: string, type: string, delay: number, duration: number) => ({
  hidden: {
    x: direction === "left" ? 80 : direction === "right" ? -80 : 0,
    y: direction === "up" ? 80 : direction === "down" ? -80 : 0,
    opacity: 0
  },
  show: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      type,
      delay,
      duration,
      ease: "easeOut"
    }
  }
});

export const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

export const zoomIn = (delay: number, duration: number) => ({
  hidden: {
    scale: 0,
    opacity: 0
  },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "tween",
      delay,
      duration,
      ease: "easeOut"
    }
  }
});

export const slideIn = (direction: string, type: string, delay: number, duration: number) => ({
  hidden: {
    x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
    y: direction === "up" ? "100%" : direction === "down" ? "-100%" : 0,
  },
  show: {
    x: 0,
    y: 0,
    transition: {
      type,
      delay,
      duration,
      ease: "easeOut"
    }
  }
});

export const textVariant = (delay: number) => ({
  hidden: {
    y: 50,
    opacity: 0
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 1.25,
      delay
    }
  }
});

export const textContainer = {
  hidden: {
    opacity: 0
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

export const textVariant2 = {
  hidden: {
    opacity: 0,
    y: 20
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "tween",
      ease: "easeIn"
    }
  }
};
