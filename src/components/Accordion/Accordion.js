import React from 'react'

import './Accordion.css'
import BurgerIcon from '../../images/Admin/BurgerIcon'
import ArrowIcon from '../../images/Admin/ArrowIcon'
import PlusIcon from '../../images/Admin/PlusIcon'

const Accordion = ({
  name,
  addBtnText,
  subChaptersNamesArray,
  accordionIndex,
  // isChapterSelected = false,
  setSelectedChapter,
  setIsChapterSelected,
  setIsSubchapterSelected,
  setSelectedSubchapter,
  handleCreateSubChapterButtonClick = () => {},
  onChapterAndSubChapterClickHandler = () => {},
}) => {
  const [selected, setSelected] = React.useState(false)
  return (
    <div className={'accordion' + (selected ? ' accordion_selected' : '')}>
      <input
        type='checkbox'
        id={`accordion-${accordionIndex}`}
        className='accordion__input'
        onChange={() => {
          setSelected(!selected)
        }}
      />
      <label
        htmlFor={`accordion-${accordionIndex}`}
        className='accordion__label'
        onClick={() => {
          if (selected) {
            setIsChapterSelected(false)
          } else {
            setIsChapterSelected(true)
          }
          setIsSubchapterSelected(false)
          setSelectedChapter(accordionIndex)
          setSelectedSubchapter(0)
          onChapterAndSubChapterClickHandler()
        }}
      >
        <BurgerIcon ccn='accordion__burgerIcon' />
        <span className='accordion__span'>{name}</span>
        <ArrowIcon ccn='accordion__arrowIcon' />
      </label>
      <div
        className={'accordion__item accordion__addItem'}
        onClick={() => {
          handleCreateSubChapterButtonClick()
          setSelectedChapter(accordionIndex)
          setSelectedSubchapter(0)
        }}
      >
        <PlusIcon />
        <span className='accordion__itemSpan'>{addBtnText}</span>
      </div>
      {subChaptersNamesArray &&
        subChaptersNamesArray.map((name, index) => {
          return (
            <div
              key={index}
              className='accordion__item'
              onClick={() => {
                setIsChapterSelected(false)
                setIsSubchapterSelected(true)
                setSelectedChapter(accordionIndex)
                setSelectedSubchapter(index)
                onChapterAndSubChapterClickHandler()
              }}
            >
              <BurgerIcon />
              <span className='accordion__itemSpan'>{name}</span>
            </div>
          )
        })}
    </div>
  )
}

export default Accordion
