import React, { Fragment } from 'react'
import {useMediaQuery} from "react-responsive"

import Navbar from './Navbar';
import NavbarPhone from './NavbarPhone';

const SetNav = () => {

  const isPhone = useMediaQuery({ query: "(max-width: 1024px)" });
  const isPc = useMediaQuery({ query: "(min-width: 1025px)" });

  return (
    <Fragment>
      {isPc && <Navbar></Navbar>}
      {isPhone && <NavbarPhone></NavbarPhone>}
    </Fragment>
  )
}

export default SetNav