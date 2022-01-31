import React from 'react'

import './AdminPage.css'
import CustomTabs from '../CustomTabs/CustomTabs.js'

const AdminPage = () => {
  return (
    <main className='adminPage'>
      <div className='adminPage__container'>
        <h1 className='adminPage__title'>Админ-панель</h1>
        <CustomTabs />
      </div>
    </main>
  )
}

export default AdminPage
