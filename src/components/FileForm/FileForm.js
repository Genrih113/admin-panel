import React from 'react'

import './FileForm.css'

const FileForm = ({ fileName, placementDate, relevancePeriod, setIsFileMovePopupOpen }) => {
  const [fileNameState, setFileNameState] = React.useState('')
  const [placementDateState, setPlacementDateState] = React.useState('')
  const [relevancePeriodState, setRelevancePeriodState] = React.useState('')

  function handleNameChange(e) {
    setFileNameState(e.target.value)
  }
  function handlePlacementDateChange(e) {
    setPlacementDateState(e.target.value)
  }
  function handleRelevancePeriodChange(e) {
    setRelevancePeriodState(e.target.value)
  }

  React.useEffect(() => {
    setFileNameState(fileName)
    setPlacementDateState(placementDate)
    setRelevancePeriodState(relevancePeriod)
  }, [fileName, placementDate, relevancePeriod])

  return (
    <form className='fileForm' name='fileForm'>
      <div className='fileForm__divLine'>
        <div className='fileForm__inputItem'>
          <label className='fileForm__label'>Название файла</label>
          <input
            className='fileForm__input'
            value={fileNameState}
            name='fileName'
            onChange={(e) => {
              handleNameChange(e)
            }}
          />
        </div>
      </div>
      <div className='fileForm__divLine'>
        <div className='fileForm__inputItem'>
          <label className='fileForm__label'>Дата размещения</label>
          <input
            className='fileForm__input'
            type='date'
            value={placementDateState}
            name='placementDate'
            onChange={(e) => {
              handlePlacementDateChange(e)
            }}
          />
        </div>
        <div className='fileForm__inputItem'>
          <label className='fileForm__label'>Период актуальности</label>
          <input
            className='fileForm__input'
            value={relevancePeriodState}
            name='relevancePeriod'
            onChange={(e) => {
              handleRelevancePeriodChange(e)
            }}
          />
        </div>
      </div>
      <div className='fileForm__divLine'>
        <button className='fileForm__button' type='button'>
          Опубликовать файл
        </button>
        <button className='fileForm__button' type='button'>
          Удалить файл
        </button>
        <button className='fileForm__button' type='button' onClick={() => setIsFileMovePopupOpen(true)}>
          Переместить в...
        </button>
      </div>
    </form>
  )
}

export default FileForm
