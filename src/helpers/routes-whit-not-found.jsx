/* eslint-disable react/prop-types */
import { PageNotFound } from '@pages/index'
import { Route, Routes } from 'react-router-dom'

const RoutesWhitNotFound = ({ children }) => {
  return (
    <Routes>
      {children}
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  )
}

export default RoutesWhitNotFound

