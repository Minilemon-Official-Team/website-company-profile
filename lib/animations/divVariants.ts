export const secondDivVariants: {
  hidden: { opacity: number; y: number };
  visible: {
    opacity: number;
    y: number;
    transition: number | { delay: number };
  };
  exit: { opacity: number; y: number; transition: { delay: number } };
} = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: 0.5,
  },
  exit: {
    opacity: 0,
    y: 20,
    transition: { delay: 0 },
  },
};

export const thirdDivVariants: {
  hidden: { opacity: number; y: number };
  visible: {
    opacity: number;
    y: number;
    transition: number | { delay: number };
  };
  exit: { opacity: number; y: number; transition: { delay: number } };
} = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: 1,
  },
  exit: {
    opacity: 0,
    y: 20,
    transition: { delay: 0 },
  },
};

export const fourthDivVariants: {
  hidden: { opacity: number; y: number };
  visible: {
    opacity: number;
    y: number;
    transition: number | { delay: number };
  };
  exit: { opacity: number; y: number; transition: { delay: number } };
} = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: 1.5,
  },
  exit: {
    opacity: 0,
    y: 20,
    transition: { delay: 0 },
  },
};

export const fifthDivVariants: {
  hidden: { opacity: number; y: number };
  visible: {
    opacity: number;
    y: number;
    transition: number | { delay: number };
  };
  exit: { opacity: number; y: number; transition: { delay: number } };
} = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: 2,
  },
  exit: {
    opacity: 0,
    y: 20,
    transition: { delay: 0 },
  },
};

export const sixthDivVariants: {
  hidden: { opacity: number; y: number };
  visible: {
    opacity: number;
    y: number;
    transition: number | { delay: number };
  };
  exit: { opacity: number; y: number; transition: { delay: number } };
} = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: 2.5,
  },
  exit: {
    opacity: 0,
    y: 20,
    transition: { delay: 0 },
  },
};
