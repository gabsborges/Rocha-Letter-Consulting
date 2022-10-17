import './Confia.css'
import { motion } from 'framer-motion'
import image1 from './band.png'
import image2 from './besni.png'
import image3 from './engevix.png'
import image4 from './ericsson.png'
import image5 from './fast.png'
import image6 from './fiat.png'
import image7 from './iss.png'
import image8 from './johnson.png'
import image9 from './massey.png'
import image10 from './multilaser.png'
import image11 from './tp.png'


const images = [image1, image2, image3, image4, image5,image6, image7, image8, image9, image10, image11]


function Confia() {
    return (
        <div className='confia'>
            <h1>Quem confia na Letter Consulting</h1>
            <div className='confia-marcas'>
            <motion.div className='carousel-marcas' whileTap={{ cursor: 'grabbing' }}>
                    <motion.div className='inner-marcas'
                        drag='x'
                        dragConstraints={{ right: 0, left: -1170 }}
                        initial={{ x: 100 }}
                        animate={{ x: 0 }}
                        transition={{ duration: 0.8 }}
                    >

                        {images.map(image => (
                            <motion.div className='item-marcas' key={image}>
                                <img src={image} alt='Texto alt' />
                            </motion.div>
                        ))}

                    </motion.div>
                </motion.div>
            </div>
        </div>
    )
}

export default Confia