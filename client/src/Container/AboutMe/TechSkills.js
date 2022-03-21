import './TechSkills.css';
import * as React from "react";
import { useState } from "react";
import {  AnimatePresence, motion} from "framer-motion";

import { techSkills as tech,  HabilidadesTecnicas as habilidades } from "../../data/skills";

export default function TechSkills({language}) {

  const [selectedTab, setSelectedTab] = useState(tech[0]);
  const [selectedTab1, setSelectedTab1] = useState(habilidades[0])


  if(language === 'EN') 
  return (
    <div className='window' >
      <section className='t-nav'>
        <ul className='t-ul'>
          {tech.map((item) => (
            <li
              key={item.label}
              className={item === selectedTab ? "selected" : "li-item"}
              onClick={() => setSelectedTab(item)}
             
            >
              {`${item.icon} ${item.label}`}
              {item === selectedTab ? (
                <motion.div className="underline" layoutId="underline" />
              ) : null}
            </li>
          ))}
        </ul>
      </section>
      <section className='main'>
        <AnimatePresence exitBeforeEnter>
          <motion.div
            key={selectedTab ? selectedTab.label : "empty"}
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.15 }}
            className= 'container-img'
          >
            {selectedTab ? selectedTab.icons.map(elem => (elem.includes('png')  ?<img src={elem} alt='img' className='itemImg'/>:  <span className='name-tech'>{elem}</span>)) : "😋"}
          </motion.div>
        </AnimatePresence>
      </section >
    </div>
  );
  else{
    return(
      <div className='window' >
      <section className='t-nav'>
        <ul className='t-ul'>
          {habilidades.map((item) => (
            <li
              key={item.label}
              className={item === selectedTab1 ? "selected" : "li-item"}
              onClick={() => setSelectedTab1(item)}
             
            >
              {`${item.icon} ${item.label}`}
              {item === selectedTab1 ? (
                <motion.div className="underline" layoutId="underline" />
              ) : null}
            </li>
          ))}
        </ul>
      </section>
      <section className='main'>
        <AnimatePresence exitBeforeEnter>
          <motion.div
            key={selectedTab1 ? selectedTab1.label : "empty"}
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.15 }}
            className= 'container-img'
          >
           {selectedTab1 ? selectedTab1.icons.map(elem => (elem.includes('png')  ?<img src={elem} alt='img' className='itemImg'/>:  <span className='name-tech'>{elem}</span>)) : "😋"}
          </motion.div>
        </AnimatePresence>
      </section >
    </div>
     )
  }             
}
