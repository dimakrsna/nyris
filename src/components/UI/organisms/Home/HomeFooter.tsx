import { useState, ChangeEvent } from "react"
import { ReactSVG } from 'react-svg'
import styles from "./HomeFooter.module.scss"
import Dropzone from 'react-dropzone'
import iconUpload from '../../../../assets/svg/icon-upload.svg'

export const HomeFooter = () => {
  const [file, setFile] = useState<File | null>(null)

  const onFileDrop = async (data: File[]) => {
    if (data && data[0]) {
      setFile(data[0])
    }
  };

  const onFileUpload = async (event: ChangeEvent<HTMLInputElement>) => {
    const uploadedFile = event.target.files;
    if (uploadedFile && uploadedFile[0]) {
      setFile(uploadedFile[0])
    }
  };

  return (
    <footer className={styles.footer}>
      <Dropzone onDrop={acceptedFiles => onFileDrop(acceptedFiles)}>
        {({ getRootProps, getInputProps }) => (
          <div className={styles.uploadFileWrapper} {...getRootProps()}>
            <div className={styles.iconWrapper}>
              <ReactSVG src={iconUpload} className={styles.icon} />
            </div>
            <div className={styles.buttonWrapper}>
              <span className={styles.button}>
                Choose photo
              </span>
              or drag & drop it here
            </div>
            <input
              {...getInputProps()}
              className={styles.uploadInput}
              type='file'
              name='file'
              onChange={onFileUpload}
              accept="image/x-png,image/jpeg"
            />
          </div>
        )}
      </Dropzone>
    </footer>
  )
}