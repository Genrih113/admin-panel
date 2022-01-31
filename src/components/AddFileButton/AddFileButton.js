import React from 'react'

import './AddFileButton.css'
import AddFileIcon from '../../images/Admin/AddFileIcon'
import FileForm from '../FileForm/FileForm.js'

const AddFileButton = () => {
  const [fileName, setFileName] = React.useState('')
  const [placementDate, setPlacementDate] = React.useState('')
  const [relevancePeriod, setRelevancePeriod] = React.useState('')
  return (
    <>
      <div className='addFile'>
        <input
          className='addFile__input'
          onInput={(e) => {
            setFileName(e.currentTarget.value)
            setPlacementDate(() => {
              const currentDate = new Date()
              const year = currentDate.getFullYear()
              const month = currentDate.getMonth() + 1
              let monthString = month.toString()
              if (month < 10) {
                monthString = '0' + monthString
              }
              const day = currentDate.getDate()
              let dayString = day.toString()
              if (day < 10) {
                dayString = '0' + dayString
              }
              return year + '-' + monthString + '-' + dayString
            })
          }}
          type='file'
          id='addedFile'
          name='file'
        />
        <label className='addFile__label' htmlFor='addedFile'>
          <AddFileIcon ccn='addFile__icon' />
          Перетащите в это поле файл или нажмите, чтобы загрузить
        </label>
      </div>
      {fileName && (
        <FileForm
          fileName={fileName}
          placementDate={placementDate}
          relevancePeriod={relevancePeriod}
          setIsFileMovePopupOpen
        />
      )}
    </>
  )
}

export default AddFileButton
