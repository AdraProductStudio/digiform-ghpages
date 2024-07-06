import React, { useState } from 'react'
import Cropper from 'react-easy-crop';
// import CommonContext from '../CommonContext';

const ImageCropper = ({ image, onCropCancel, onCropDone }) => {

    // const {uploadFileType, setUploadFileType} = useContext(CommonContext);

    const [crop, setCrop] = useState({ x: 0, y: 0 });
    const [zoom, setZoom] = useState(1);

    const [croppedArea, setCroppedArea] = useState(null);
    const [aspectRatio, setAspectRatio] = useState(4 / 3);

    const [rotationDegree, setRotationDegree] = useState()

    // Callback when cropping is completed
    const onCropComplete = (croppedAreaPercentage, croppedAreaPixels) => {
        // Store the cropped area in pixels
        setCroppedArea(croppedAreaPixels);
    };

    // Callback when the user changes the aspect ratio
    const onAspectRatioChange = (event) => {
        setAspectRatio(event.target.value);
        // console.log(aspectRatio)
    };

    const onDegreeChange = (e) => {
        setRotationDegree(e.target.value)
        // console.log(e.target.value)
    }

    return (
        <div className="cropper">
            <div>
                {/* Image Cropper component */}
                <Cropper
                    image={image}
                    aspect={aspectRatio}
                    crop={crop}
                    zoom={zoom}
                    onCropChange={setCrop}
                    onZoomChange={setZoom}
                    onCropComplete={onCropComplete}
                    style={{
                        containerStyle: {
                            width: "100%",
                            height: "70%",
                            backgroundColor: "#fff",
                        },
                    }}
                    rotation={rotationDegree}
                />
            </div>
            <hr />
            <div className="mb-5 container mx-auto">
                {/* Aspect ratio selection */}
                {/* <div className=" mb-4 text-center" onChange={onAspectRatioChange}>
                    <input className='form-check-input' id='1:1' type="radio" value={1 / 1} name="ratio" /> <label className='cursorPointer form-check-label' htmlFor="1:1"> 1:1 </label>
                    <input className='form-check-input' id='5:4' type="radio" value={5 / 4} name="ratio" /> <label className='cursorPointer form-check-label' htmlFor="5:4"> 5:4 </label>
                    <input className='form-check-input' id='4:3' type="radio" value={4 / 3} name="ratio" /> <label className='cursorPointer form-check-label' htmlFor="4:3"> 4:3 </label>
                    <input className='form-check-input' id='3:2' type="radio" value={3 / 2} name="ratio" /> <label className='cursorPointer form-check-label' htmlFor="3:2"> 3:2 </label>
                    <input className='form-check-input' id='5:3' type="radio" value={5 / 3} name="ratio" /> <label className='cursorPointer form-check-label' htmlFor="5:3"> 5:3 </label>
                    <input className='form-check-input' id='16:9' type="radio" value={16 / 9} name="ratio" /><label className='cursorPointer form-check-label' htmlFor="16:9"> 16:9 </label>
                    <input className='form-check-input' id='3:1' type="radio" value={3 / 1} name="ratio" /><label className='cursorPointer form-check-label' htmlFor="3:1">  3:1 </label>
                    <input className='form-check-input' id='7:1' type="radio" value={7 / 1} name="ratio" /> <label className='cursorPointer form-check-label' htmlFor="7:1"> 7:1 </label>
                </div> */}
                <h6>To rotate the image select below : </h6>
                <div className=" mb-4 col-7 mx-auto" onChange={onDegreeChange}>
                    <input className='form-check-input' id='0degree' type="radio" value={0} name="degree" /> <label className='cursorPointer form-check-label' htmlFor="0degree"> 0&deg; </label>
                    <input className='form-check-input' id='90degree' type="radio" value={90} name="degree" /> <label className='cursorPointer form-check-label' htmlFor="90degree"> 90&deg; </label>
                    <input className='form-check-input' id='180degree' type="radio" value={180} name="degree" /> <label className='cursorPointer form-check-label' htmlFor="180degree"> 180&deg; </label>
                    <input className='form-check-input' id='360degree' type="radio" value={360} name="degree" /> <label className='cursorPointer form-check-label' htmlFor="360degree"> 360&deg; </label>
                </div>
                {/* Buttons for canceling or applying the crop */}
                <div className="d-flex align-items-center justify-content-between">
                    <button className="btn btn-outline-dark" onClick={onCropCancel}>
                        Cancel
                    </button>

                    <button
                        className="btn btn-success"
                        onClick={() => {
                            onCropDone(croppedArea);
                        }}
                    >
                        Crop & Upload
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ImageCropper