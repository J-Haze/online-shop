import React from "react";
import Dropzone from 'react-dropzone'

function FileUpload() {
    return (
        <div id="upload-component">
            <Dropzone
                onDrop
                multiple
                maxSize
            >
                {({ getRootProps, getInputProps })
                    < div id="dropzone-inner" {...getRootProps()}>
                
                <input {...getInputProps()} />
                <Icon type="plus" id="dropzone-icon"></Icon>
                </div>
            )}
                
             </Dropzone>
        </div>
    )
}

export default FileUpload