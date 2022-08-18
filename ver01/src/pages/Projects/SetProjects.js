import React, { Fragment } from 'react'
import {useMediaQuery} from "react-responsive"

import Projects from './Projects';
import ProjectsPhone from './ProjectsPhone';

const SetProjects = () => {

  const isPhone = useMediaQuery({ query: "(max-width: 1024px)" });
  const isPc = useMediaQuery({ query: "(min-width: 1025px)" });

  return (
    <Fragment>
      {isPc && <Projects></Projects>}
      {isPhone && <ProjectsPhone></ProjectsPhone>}
    </Fragment>
  )
}

export default SetProjects