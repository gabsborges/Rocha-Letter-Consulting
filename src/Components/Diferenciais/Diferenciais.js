import {useState, useEffect, useRef} from 'react'
import './Diferenciais.css'     
import React from 'react';
import { motion } from 'framer-motion'
import Cards from './Cards'



function Diferenciais() {


    const carousel = useRef();
    const [width, setWidth] = useState(0);

    useEffect(() => {
        console.log(carousel.current?.scrollWidth, carousel.current?.offsetWidth)
        
    }, [])



    return (
        <div className='diferenciais'>
            <h1 id='diferenciais'>Diferenciais</h1>
            <p>Conheça os diferenciais da Letter Consulting.</p>
            <div className='cardsMotion'>

                <motion.div className='carousel' whileTap={{ cursor: 'grabbing' }}>
                    <motion.div className='inner'
                        drag='x'
                        dragConstraints={{ right: 0, left: -850 }}
                        initial={{ x: 100 }}
                        animate={{ x: 0 }}
                        transition={{ duration: 0.8 }}
                    >


                            <motion.div className='item'>
                                <Cards/>
                            </motion.div>


                    </motion.div>
                </motion.div>





            </div>
        </div>
    )
}

export default Diferenciais