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
                    < div >
                </div>
            )}
                
             </Dropzone>
        </div>
    )
}

export default FileUpload