import React from 'react'

import './FileMove.css'
import ArrowIcon from '../../images/Admin/ArrowIcon'
import PlusIcon from '../../images/Admin/PlusIcon'
import FileMoveOptionIcon from '../../images/Admin/FileMoveOptionIcon'
import FileMoveSelectedOptionIcon from '../../images/Admin/FileMoveSelectedOptionIcon'

const FileMove = ({ setIsFileMovePopupOpen, chaptersArray, subChaptersArray }) => {
  const [selectedChapter, setSelectedChapter] = React.useState('')
  const [selectedSubchapter, setSelectedSubchapter] = React.useState('')

  return (
    <div className='fileMove'>
      <div className='fileMove__header'>
        <p className='fileMove__title'>Переместить файл в</p>
        <button className='fileMove__closeButton' onClick={() => setIsFileMovePopupOpen(false)}>
          <PlusIcon ccn='fileMove__closeButtonSvg' />
        </button>
      </div>
      <p className='fileMove__subtitle'>subtitle</p>
      {chaptersArray.map((chapter, i) => {
        return (
          <div
            key={i}
            className={
              'fileMoveAccordion' + (selectedChapter === chapter ? ' fileMoveAccordion_selected' : '')
            }
          >
            <input
              type='checkbox'
              id={`fileMoveAccordion-${i}`}
              className='fileMoveAccordion__input'
              onChange={(e) => {
                setSelectedChapter(e.currentTarget.querySelector(`#fileMoveAccordion-${i} ~ label`).textContent)
              }}
            />
            <label htmlFor={`fileMoveAccordion-${i}`} className='fileMoveAccordion__label'>
              {!(selectedChapter === chapter) ? (
                <FileMoveOptionIcon ccn='fileMoveAccordion__selectIcon' />
              ) : (
                <FileMoveSelectedOptionIcon ccn='fileMoveAccordion__selectIcon' />
              )}
              <span className='fileMoveAccordion__span'>{chapter}</span>
              <ArrowIcon ccn='fileMoveAccordion__arrowIcon' />
            </label>
            {subChaptersArray[i] &&
              subChaptersArray[i].map((subChapter, j) => {
                return (
                  <div
                    key={j}
                    className='fileMoveAccordion__item'
                    onClick={(e) => {
                      setSelectedSubchapter(e.currentTarget.textContent)
                    }}
                  >
                    {!(selectedSubchapter === subChapter) ? (
                      <FileMoveOptionIcon ccn='fileMoveAccordion__selectIcon' />
                    ) : (
                      <FileMoveSelectedOptionIcon ccn='fileMoveAccordion__selectIcon' />
                    )}
                    <span className='fileMoveAccordion__itemSpan'>{subChapter}</span>
                  </div>
                )
              })}
          </div>
        )
      })}
      <button className='fileMoveAccordion__moveButton'>Переместить</button>
    </div>
  )
}

export default FileMove
