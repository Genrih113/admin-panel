import React from 'react'

import './CustomTabs.css'

import CustomTabsLabels from '../CustomTabsLabels/CustomTabsLabels.js'
import CustomTabsPanels from '../CustomTabsPanels/CustomTabsPanels.js'

const CustomTabs = () => {
  const [selectedTabNumber, setSelectedTabNumber] = React.useState(0)

  return (
    <div className='tabsContainer'>
      <CustomTabsLabels setSelectedTabNumber={setSelectedTabNumber} selectedTabNumber={selectedTabNumber} />
      <CustomTabsPanels selectedTabNumber={selectedTabNumber} />
    </div>
  )
}

export default CustomTabs
