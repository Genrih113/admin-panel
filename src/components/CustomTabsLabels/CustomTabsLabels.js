import React from 'react'

import './CustomTabsLabels.css'

import TabLabel from '../TabLabel/TabLabel'

const tabs = [
  'Раскрытие информации',
  'Документы',
  'Дистрибутив',
  'Ответы на частые вопросы',
  'Вакансии',
  'Партнеры',
  'Новости',
  'Профили',
]

const CustomTabLabels = ({ selectedTabNumber, setSelectedTabNumber }) => {
  return (
    <div className='labelsContainer'>
      {tabs.map((tab, index) => {
        return (
          <TabLabel
            key={index}
            selectedTabNumber={selectedTabNumber}
            setSelectedTabNumber={setSelectedTabNumber}
            tabNumber={index}
            title={tab}
          />
        )
      })}
    </div>
  )
}

export default CustomTabLabels
