import React from 'react'

function UploadProductPage() {
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
                    onChange
                    value
                />
                <br />
                <br />
                <label>Description</label>
                <textarea 
                    onChangevalue
                />
                <br />
                <br />
                <label>Price($)</label>
                <input
                    onChange
                    value
                    type="number"
                />
                <br />
                <br />
                <select>
                    <option key value>

                    </option>
                </select>

                                <br />
                <br />

                <button onClick>
                    Submit
                </button>



            </form>




        </div>
    )
}

export default UploadProductPage
