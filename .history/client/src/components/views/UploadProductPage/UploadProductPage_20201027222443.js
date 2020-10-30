import React, {useState} from 'react'

function UploadProductPage() {

    const [titleValue, setTitleValue] = useState("")
    const [description, setDescriptionValue] = useState("")

    const onTitleChange = (event) => {
    setTitleValue(event.currentTarget.value)
    }

    const onDescriptionChange = (event) => {
        setDescritiop(event.currentTarget.value)
    }

    return (
        <div id="upload-cont">
            <div id="upload-inner-cont">
                <h2> Upload Travel Product</h2>
            </div>
            UploadProductPage

            <form onSubmit>
                
                {/*DropZone */}

                <br />
                <br />
                <label>Title</label>
                <input
                    onChange={onTitleChange}
                    value={titleValue}
                />
                <br />
                <br />
                <label>Description</label>
                <textarea 
                    onChange={onDescriptionChange}
                    value={descriptionValue}
                />
                <br />
                <br />
                <label>Price($)</label>
                <input
                    onChange
                    value
                    type="number"
                />
                <select>
                    <option key value>

                    </option>
                </select>
                <br />
                <br />
                <button
                    onClick
                >
                    Submit
                </button>



            </form>




        </div>
    )
}

export default UploadProductPage
