import React from 'react';
import {closeModal} from '../../../actions/modal_actions';
import Dropzone from 'react-dropzone';


class UploadFileModal extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            img: null
        };
    }

    handleOnDrop(file){
        console.log(file);
        console.log(file[0]);
        console.log(file[0].path);
        const currentFile = file[0];
        const reader = new FileReader();
        reader.addEventListener("load", () => {
            console.log(reader.result);
        }, false);
        this.setState({imgSrc: reader.result});
        reader.readAsDataURL(currentFile);
    }

    render(){
            const {imgSrc} = this.state;
        return (
            <Dropzone  noClick={true} onDrop={this.handleOnDrop}>
                {({ getRootProps, getInputProps }) => (
                    <span className='add_file_modal' {...getRootProps()}>
                    {/* <input {...getInputProps()} /> */}
                        <p>DRAG AND DROP FILES</p>
                        <span className='spanclass'>Drop file here to share with server</span>
                        {imgSrc !== null ? <img src={imgSrc} /> : ''}
                    </span>
                )}
            </Dropzone>
        )
    }
}

export default UploadFileModal;

