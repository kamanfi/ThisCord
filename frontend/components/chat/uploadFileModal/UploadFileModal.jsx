import React from 'react';
import {closeModal} from '../../../actions/modal_actions';
import Dropzone from 'react-dropzone';


const UploadFileModal = (props) => {

    return (
        <Dropzone  noClick={true}>
            {({ getRootProps, getInputProps }) => (
                <span className='add_file_modal' {...getRootProps()}>
                {/* <input {...getInputProps()} /> */}
                    <p>DRAG AND DROP FILES</p>
                    <span className='spanclass'>Drop file here to share with server</span>
                    <input type="text" name="" id="" value={'TESTING'} />
                </span>
            )}
        </Dropzone>
    )

}


export default UploadFileModal;

