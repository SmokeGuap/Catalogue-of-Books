import { motion } from 'framer-motion';

const ContainerVariants = {
  initial: {
    transition: {
      staggerChildren: 0.2,
    },
  },
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const DotVariants = {
  initial: {
    y: '0%',
  },
  animate: {
    y: '100%',
  },
};

const DotTransition = {
  duration: 0.5,
  yoyo: Infinity,
  ease: 'easeInOut',
};

const Loading = () => {
  return (
    <div className='mt-10 w-full flex justify-center items-center'>
      <motion.div
        className='w-10 h-5 flex justify-around'
        variants={ContainerVariants}
        initial='initial'
        animate='animate'
      >
        <motion.span
          className='block w-2 h-2 bg-brown rounded'
          variants={DotVariants}
          transition={DotTransition}
        />
        <motion.span
          className='block w-2 h-2 bg-brown rounded'
          variants={DotVariants}
          transition={DotTransition}
        />
        <motion.span
          className='block w-2 h-2 bg-brown rounded'
          variants={DotVariants}
          transition={DotTransition}
        />
      </motion.div>
    </div>
  );
};
export default Loading;
