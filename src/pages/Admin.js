import React, { useEffect } from 'react'

function Admin() {
  useEffect(()=>{
    window.scroll({top: 0, left: 0, behavior: 'smooth' })
  },[])
  return (
    <div>Admin</div>
  )
}

export default Admin