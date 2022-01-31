import React from 'react'

import './ChapterEditor.css'
import ResizeableTextArea from '../ResizeableTextArea/ResizeableTextArea.js'

const ChapterEditor = ({
  title = '',
  titleValue = '',
  description = '',
  descriptionValue = '',
  setTitleValue = (a) => {},
  setDescriptionValue = (a) => {},
  handleSaveButton = () => {},
}) => {
  return (
    <div className='chapterEditor'>
      <span className='chapterEditor__inputHeader'>{title}</span>
      <ResizeableTextArea placeholder={titleValue} value={titleValue} handleSetValue={setTitleValue} />
      <span className='chapterEditor__inputHeader'>{description}</span>
      <ResizeableTextArea
        placeholder={descriptionValue}
        value={descriptionValue}
        handleSetValue={setDescriptionValue}
      />
      <button className='chapterEditor__button' onClick={handleSaveButton}>
        Сохранить изменения
      </button>
    </div>
  )
}

export default ChapterEditor
