import { motion, AnimatePresence } from 'framer-motion';
import { useSnapshot } from 'valtio';
import state from '../store';
import { headContainerAnimation, headContentAnimation, headTextAnimation, slideAnimation } from '../config/motion';
import { CustomButton } from '../components';

const Home = () => {
  const snap = useSnapshot(state);

  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.div className='home' {...slideAnimation('left')}>
          <motion.header {...slideAnimation("down")}>
            <img 
              src='https://imgtr.ee/images/2023/08/09/12d0b1d8ad778479c52415497f96db73.png'
              alt='logo'
              className='w-8 h-8 object-contain rounded-full'
            />
          </motion.header>
          <motion.div className='home-content' {...headContainerAnimation}>
            <motion.div {...headContainerAnimation}>
              <h1 className='head-text'>
                LET'S <br className='xl:block hidden' />DO IT.
              </h1>
            </motion.div>
            <motion.div {...AnimatePresence.headContentAnimation} className='flex flex-col gap-5'>
              <p className='max-w-md font-normal text-neutral-100 text-base'>
              create your unique and exclusive shirt with our brand-new 3D customization tool. <strong>Unleash your imagination</strong>{" "} and define your own style.
                </p>

                <CustomButton 
                  type="filled"
                  title="Customize It"
                  handleClick={() => state.intro = false}
                  customStyles="w-fit px-4 py-2.5 font-bold text-sm"
                />
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Home