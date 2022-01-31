import React from 'react'

import './InformationDisclosureTab.css'

import TabPanel from '../TabPanel/TabPanel.js'
import Accordion from '../Accordion/Accordion.js'
import ChapterEditor from '../ChapterEditor/ChapterEditor.js'
import AddFileButton from '../AddFileButton/AddFileButton.js'
import FileForm from '../FileForm/FileForm.js'
// import PopupContainer from '../PopupContainer'
// import FileMove from '../FileMove'

const chaptersVar = ['Информация о компании', 'Расчёт собственных средств', 'Финансовая отчётность']
const subChaptersVar = [
  ['Структура', 'Вакансии'],
  ['Доходы', 'Расходы'],
  ['2021', '2020', '2019'],
]
const files = {
  'Информация о компании': {
    Структура: [
      {
        fileName: 'Приказ о структуре компании',
        placementDate: '2021-12-12',
        relevancePeriod: 'Период актуальности: с 29 января 2021 по настоящее время',
      },
      {
        fileName: 'Приказ о переименовании компании',
        placementDate: '2021-12-10',
        relevancePeriod: 'Период актуальности: с 29 января 2021 по настоящее время',
      },
    ],
    Вакансии: [
      {
        fileName: 'Приказ о штатном расписании',
        placementDate: '2021-12-09',
        relevancePeriod: 'Период актуальности: с 29 января 2021 по настоящее время',
      },
      {
        fileName: 'Приказ о должностных инструкциях',
        placementDate: '2021-12-08',
        relevancePeriod: 'Период актуальности: с 29 января 2021 по настоящее время',
      },
    ],
  },
  'Расчёт собственных средств': {
    Доходы: [
      {
        fileName: 'Приказ о собственных средствах',
        placementDate: '2021-12-07',
        relevancePeriod: 'Период актуальности: с 29 января 2021 по настоящее время',
      },
    ],
    Расходы: [
      {
        fileName: 'Приказ о собственных средствах',
        placementDate: '2021-12-06',
        relevancePeriod: 'Период актуальности: с 29 января 2021 по настоящее время',
      },
    ],
  },
  'Финансовая отчётность': {
    '2021': [
      {
        fileName: 'Приказ об отчетности 2021',
        placementDate: '2021-12-05',
        relevancePeriod: 'Период актуальности: с 29 января 2021 по настоящее время',
      },
    ],
    '2020': [
      {
        fileName: 'Приказ об отчетности 2020',
        placementDate: '2021-12-04',
        relevancePeriod: 'Период актуальности: с 29 января 2021 по настоящее время',
      },
    ],
    '2019': [
      {
        fileName: 'Приказ об отчетности 2019',
        placementDate: '2021-12-03',
        relevancePeriod: 'Период актуальности: с 29 января 2021 по настоящее время',
      },
    ],
  },
}

const InformationDisclosureTab = () => {
  const [chapters, setChapters] = React.useState(chaptersVar || [])
  const [subChapters, setSubChapters] = React.useState(subChaptersVar || [[]])
  const [isChapterSelected, setIsChapterSelected] = React.useState(false)
  const [isSubchapterSelected, setIsSubchapterSelected] = React.useState(false)
  const [selectedChapter, setSelectedChapter] = React.useState(0)
  const [selectedSubchapter, setSelectedSubchapter] = React.useState(0)
  const filesArr = files?.[chapters[selectedChapter]]?.[subChapters[selectedChapter][selectedSubchapter]]

  const [isFileMovePopupOpen, setIsFileMovePopupOpen] = React.useState(false)

  const [isNewChapterGenReq, setIsNewChapterGenReq] = React.useState(false)
  const [isNewSubChapterGenReq, setIsNewSubChapterGenReq] = React.useState(false)
  const [selectedItemTitleValue, setSelectedItemTitleValue] = React.useState('')
  const [selectedItemDescriptionValue, setSelectedItemDescriptionValue] = React.useState('')

  React.useEffect(() => {
    let SIT = ''
    if (isChapterSelected && !isSubchapterSelected) {
      SIT = chapters[selectedChapter]
    } else if (!isChapterSelected && isSubchapterSelected) {
      SIT = subChapters[selectedChapter][selectedSubchapter]
    }
    setSelectedItemTitleValue(SIT)
  }, [isChapterSelected, isSubchapterSelected, selectedChapter, selectedSubchapter])

  const handleCreateChapterButtonClick = () => {
    setIsNewChapterGenReq(true)
    setIsChapterSelected(false)
    setIsSubchapterSelected(false)
    setSelectedChapter(0)
    setSelectedSubchapter(0)
    setSelectedItemTitleValue('')
    setSelectedItemDescriptionValue('')
  }

  const handleCreateSubChapterButtonClick = () => {
    setIsNewChapterGenReq(true)
    setIsNewSubChapterGenReq(true)
    // setIsChapterSelected(false)    // -вызывает проблемы
    setIsSubchapterSelected(false)
    setSelectedSubchapter(0)
    setSelectedItemTitleValue('')
    setSelectedItemDescriptionValue('')
  }

  const newChapterAndSubChapterGenStateFalser = () => {
    setIsNewChapterGenReq(false)
    setIsNewSubChapterGenReq(false)
  }

  const handleNewChapterSaveButtonClick = () => {
    const arr = chapters.map((i) => i)
    arr.push(selectedItemTitleValue)
    setChapters(arr)
    // console.log(arr)
    setSelectedItemTitleValue('')
    setSelectedItemDescriptionValue('')
    setIsNewChapterGenReq(false)
  }

  const handleNewSubchapterSaveButtonClick = () => {
    const arr = subChapters.map((i) => i)
    if (!arr[selectedChapter]) {
      arr[selectedChapter] = []
    }
    arr[selectedChapter].push(selectedItemTitleValue)
    setSubChapters(arr)
    // console.log(arr[selectedChapter])
    setSelectedItemTitleValue('')
    setSelectedItemDescriptionValue('')
    setIsNewChapterGenReq(false)
    setIsNewSubChapterGenReq(false)
    setIsChapterSelected(false)
    setIsSubchapterSelected(false)
  }

  const handleChapterEdit = () => {
    const arr = chapters.map((i) => i)
    arr.splice(selectedChapter, 1, selectedItemTitleValue)
    setChapters(arr)
    // console.log(arr)
    setSelectedItemTitleValue('')
    setSelectedItemDescriptionValue('')
    // setIsNewChapterGenReq(false)
  }

  const handleSubchapterEdit = () => {
    const arr = subChapters.map((i) => i)
    arr[selectedChapter][selectedSubchapter] = selectedItemTitleValue
    setSubChapters(arr)
    // console.log(arr[selectedChapter])
    setSelectedItemTitleValue('')
    setSelectedItemDescriptionValue('')
    // setIsNewChapterGenReq(false)
    // setIsNewSubChapterGenReq(false)
  }

  return (
    <TabPanel>
      <div className='disclosureTab'>
        <div className='disclosureTab__accordions'>
          {chapters.map((el, i) => {
            return (
              <Accordion
                key={i}
                accordionIndex={i}
                name={el}
                addBtnText='Добавить подраздел'
                subChaptersNamesArray={subChapters[i] ? subChapters[i] : undefined}
                setIsChapterSelected={setIsChapterSelected}
                setIsSubchapterSelected={setIsSubchapterSelected}
                setSelectedChapter={setSelectedChapter}
                setSelectedSubchapter={setSelectedSubchapter}
                handleCreateSubChapterButtonClick={handleCreateSubChapterButtonClick}
                onChapterAndSubChapterClickHandler={newChapterAndSubChapterGenStateFalser}
              />
            )
          })}
          <button className='disclosureTab__chapterAddButton' onClick={handleCreateChapterButtonClick}>
            Добавить раздел
          </button>
        </div>
        <div className='disclosureTab__filesEditors'>
          <div className='disclosureTab__filesEditorsSubblock'>
            {isNewChapterGenReq ? (
              <ChapterEditor
                title={isNewSubChapterGenReq ? 'Заголовок нового подраздела' : 'Заголовок нового раздела'}
                titleValue={selectedItemTitleValue}
                description={isNewSubChapterGenReq ? 'Описание нового подраздела' : 'Описание нового раздела'}
                descriptionValue={selectedItemDescriptionValue}
                setTitleValue={setSelectedItemTitleValue}
                setDescriptionValue={setSelectedItemDescriptionValue}
                handleSaveButton={
                  isNewSubChapterGenReq ? handleNewSubchapterSaveButtonClick : handleNewChapterSaveButtonClick
                }
              />
            ) : isSubchapterSelected ? (
              <ChapterEditor
                title='Заголовок подраздела'
                titleValue={selectedItemTitleValue}
                description='Описание подраздела'
                descriptionValue={selectedItemDescriptionValue}
                setTitleValue={setSelectedItemTitleValue}
                setDescriptionValue={setSelectedItemDescriptionValue}
                handleSaveButton={handleSubchapterEdit}
              />
            ) : (
              isChapterSelected && (
                <ChapterEditor
                  title='Заголовок раздела'
                  titleValue={selectedItemTitleValue}
                  description='Описание раздела'
                  descriptionValue={selectedItemDescriptionValue}
                  setTitleValue={setSelectedItemTitleValue}
                  setDescriptionValue={setSelectedItemDescriptionValue}
                  handleSaveButton={handleChapterEdit}
                />
              )
            )}
          </div>
          <div className='disclosureTab__filesEditorsSubblock'>
            {(isChapterSelected || isSubchapterSelected) && <AddFileButton />}
          </div>
          {isSubchapterSelected && filesArr && filesArr.length > 0 && (
            <div className='disclosureTab__filesEditorsSubblock'>
              {filesArr.map((file, index) => {
                return (
                  <FileForm
                    key={index}
                    fileName={file.fileName}
                    placementDate={file.placementDate}
                    relevancePeriod={file.relevancePeriod}
                    setIsFileMovePopupOpen={setIsFileMovePopupOpen}
                  />
                )
              })}
            </div>
          )}
        </div>
        {/* {isFileMovePopupOpen && (
          <PopupContainer>
            <FileMove
              setIsFileMovePopupOpen={setIsFileMovePopupOpen}
              chaptersArray={chapters}
              subChaptersArray={subChapters}
            />
          </PopupContainer>
        )} */}
      </div>
    </TabPanel>
  )
}

export default InformationDisclosureTab
