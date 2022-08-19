import React from 'react'
import { useParams } from 'react-router-dom'

import ProjectsData from '../../ProjectsData';
import styles from "./SingleProject.module.css"

const SingleProject = () => {

  const {id} = useParams();
  const projects = ProjectsData.find((project) => (
    project.id === id
  ))
  
  const {image, name, desc, tool} = projects;

  return (
    <div className={styles.container}>
      <div className={styles.img}>
        <img src={image}></img>
      </div>
      <div className={styles.text}>
        <h2><span>project name: </span>{name}</h2>
        <p><span>project desc: </span>{desc}</p>
        <h4><span>used tool: </span>{tool}</h4>
      </div>
    </div>
  )
}

export default SingleProject