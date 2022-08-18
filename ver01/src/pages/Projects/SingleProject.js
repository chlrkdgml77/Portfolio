import React from 'react'
import { useParams } from 'react-router-dom'

import ProjectsData from '../../ProjectsData';
import styles from "./SingleProject.module.css"

const SingleProject = () => {

  const {id} = useParams();
  const projects = ProjectsData.find((project) => (
    project.id === id
  ))

  return (
    <div className={styles.container}>
      <div className={styles.img}>
        <img src={projects.image}></img>
      </div>
      <div className={styles.text}>
        <h2>{projects.name}</h2>
      </div>
    </div>
  )
}

export default SingleProject