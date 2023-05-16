import React from 'react';
import { FileUploader } from "react-drag-drop-files";
import ReactPlayer from 'react-player';
import ModalImage from 'react-modal-image'
import { Viewer, Worker } from '@react-pdf-viewer/core';
// import { Button } from 'reactstrap';
// const fileTypes = ["XLSX", "DOC", "CSV", "DOCX"];//

const Home = () => {


    return (
        <div>


            {/* {preview && <div className='py-4'>
                <img className='img-preview' src={preview} alt="pict-img" />
            </div>} */}

            <div className='py-4'>
                <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />
            </div>

            <div className='py-4'>
                <ModalImage
                    alt="Hello World"
                />
            </div>

            <div className='py-4'>
                <Worker workerUrl='https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.13.216/pdf.worker.min.js'>
                    <Viewer fileUrl="https://media.neliti.com/media/publications/195611-none-05b1535d.pdf" />
                </Worker>
            </div>
        </div>

    )
}

export default Home