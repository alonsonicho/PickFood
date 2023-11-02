import { useEffect, useState } from "react";
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";
import { useLocation } from "react-router-dom";


const useSidebar = () => {
  let isTabletMid = useMediaQuery({ query: '(max-width: 768px)' })
  const [open, setOpen] = useState(isTabletMid ? false : true)
  const sidebarRef = useRef()
  const { pathname } = useLocation()

  useEffect(() => {
    if (isTabletMid) {
      setOpen(false)
    } else {
      setOpen(true)
    }
  }, [isTabletMid])

  useEffect(() => {
    isTabletMid && setOpen(false)
  }, [isTabletMid, pathname])

  const Nav_animation = isTabletMid
    ? {
      open: {
        x: 0,
        width: '16rem',
        transition: {
          damping: 40
        }
      },
      closed: {
        x: -250,
        width: 0,
        transition: {
          damping: 40,
          delay: 0.15
        }
      }
    }
    : {
      open: {
        width: '16rem',
        transition: {
          damping: 40
        }
      },
      closed: {
        width: '4rem',
        transition: {
          damping: 40
        }
      }
    }

  return {
    sidebarRef,
    Nav_animation,
    isTabletMid,
    setOpen,
    open
  }
}

export default useSidebar