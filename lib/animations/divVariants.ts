type AnimationVariant = {
  hidden: {
    opacity: number;
    y: number;
  };
  visible: {
    opacity: number;
    y: number;
    transition: { duration: number };
  };
  exit: {
    opacity: number;
    y: number;
    transition: { delay: number };
  };
};

export const secondDivVariants: AnimationVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
  exit: {
    opacity: 0,
    y: 20,
    transition: { delay: 0 },
  },
};

export const thirdDivVariants: AnimationVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1 },
  },
  exit: {
    opacity: 0,
    y: 20,
    transition: { delay: 0 },
  },
};

export const fourthDivVariants: AnimationVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.5 },
  },
  exit: {
    opacity: 0,
    y: 20,
    transition: { delay: 0 },
  },
};

export const fifthDivVariants: AnimationVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 2 },
  },
  exit: {
    opacity: 0,
    y: 20,
    transition: { delay: 0 },
  },
};

export const sixthDivVariants: AnimationVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 2.5 },
  },
  exit: {
    opacity: 0,
    y: 20,
    transition: { delay: 0 },
  },
};
