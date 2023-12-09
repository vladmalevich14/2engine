import React, {ChangeEvent} from 'react';
import {ReactComponent as Staple} from 'assets/svg-icons/staple.svg'
import {ReactComponent as PDF} from 'assets/svg-icons/pdf.svg'
import {ReactComponent as DOC} from 'assets/svg-icons/doc.svg'
import {ReactComponent as Remove} from 'assets/svg-icons/remove.svg'
import s from './input-file.module.scss';

type PropsType = {
    files: File[]
    setFiles: any
}

export const InputFile = ({files, setFiles}: PropsType) => {

    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        const selectedFiles = event.target.files
        if (selectedFiles) {
            const newFiles: File[] = Array.from(selectedFiles);
            setFiles((prevFiles: File[]) => [...prevFiles, ...newFiles]);
        }
    }

    const handleRemove = (indexToRemove: number) => {
        setFiles((prevFiles: File[]) => prevFiles.filter((file, index) => index !== indexToRemove));
    }

    return (
        <div>
            <div className={s.fileInputContainer}>
                <label htmlFor="file-input" className={s.fileInputLabel}>
                    <span className={s.fileInputText}><Staple/>Прикрепить файлы</span>
                    <input
                        type="file"
                        id="file-input"
                        className={s.fileInput}
                        accept={".jpg, .jpeg, .png, .pdf, .doc"}
                        multiple
                        onChange={handleFileChange}
                        name={'files'}
                    />
                </label>
            </div>
            <div className={s.thumbnailsContainer}>
                {files &&
                    files.map((file, index) => (
                        <div key={index} className={s.thumbnail}>
                            <Remove onClick={() => handleRemove(index)} className={s.removeButtonIcon}/>
                            {file.type.startsWith('image/') ? (
                                <img src={URL.createObjectURL(file)} alt={file.name}/>
                            ) : (
                                <div className={s.defaultIcon}>
                                    <div className={s.fileName}>{file.name}</div>
                                    {file.type.endsWith('pdf') ? <PDF className={s.fileIcon}/> :
                                        <DOC className={s.fileIcon}/>}
                                </div>
                            )}

                        </div>
                    ))}
            </div>
        </div>
    );
};
