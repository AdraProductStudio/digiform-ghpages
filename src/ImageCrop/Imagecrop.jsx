// import React, { useContext, useRef } from 'react'
// import { useState } from 'react'
// import { jsPDF } from "jspdf";
// import CommonContext from '../CommonContext';
// import ImageCropper from './ImageCropper';
// import FileInput from './FileInput';




// const Imagecrop = ({userImage}) => {


//   const {uploadFileType,setUploadFileType} = useContext(CommonContext);

//     const [image, setImage] = useState(""); 
//     const [currentPage, setCurrentPage] = useState("choose-img"); 
//     const [imgAfterCrop, setImgAfterCrop] = useState(""); 
    
//     const [blobUrl,setBlobUrl] = useState('')

//     // console.log(imgAfterCrop)

//     // Callback function when an image is selected
//     const onImageSelected = (selectedImg) => {
//       setImage(selectedImg);
//       setCurrentPage("crop-img"); 
//     };
  
//     // Callback function when cropping is done
//     const onCropDone = (imgCroppedArea) => {
//       console.log(imgCroppedArea)
//       // Create a canvas element to crop the image
//       const canvasEle = document.createElement("canvas");
//       canvasEle.width = imgCroppedArea.width;
//       canvasEle.height = imgCroppedArea.height;
  
//       const context = canvasEle.getContext("2d");
  
//       // Load the selected image
//       let imageObj1 = new Image();
//       imageObj1.src = image;
//       imageObj1.onload = function () {
//         // Draw the cropped portion of the image onto the canvas
//         context.drawImage(
//           imageObj1,
//           imgCroppedArea.x,
//           imgCroppedArea.y,
//           imgCroppedArea.width,
//           imgCroppedArea.height,
//           0,
//           0,
//           imgCroppedArea.width,
//           imgCroppedArea.height
//         );
  
//         // Convert the canvas content to a data URL (JPEG format)
//         const dataURL = canvasEle.toDataURL("image/jpeg");
//         const pdfURL =  canvasEle.toDataURL("application/pdf")

//         console.log(pdfURL)

//         const base64Data = pdfURL.split(',')[1]
//         console.log(base64Data)
//         const binaryString = window.atob(base64Data)
//         console.log(binaryString)

//         const len = binaryString.length
//         const bytes = new Uint8Array(len)

//         for(let i=0; i< len ; i++){
//           bytes[i] = binaryString.charCodeAt(i)
//         }

//         const blob = new Blob([bytes], {type : 'image/png'})

//         const url = URL.createObjectURL(blob)
//         // console.log(blob, url)

//         convertToPdf(url)
        
//         // setBlobUrl(url)
//         setImgAfterCrop(dataURL);
//         setCurrentPage("img-cropped");
//       };
//     };

//     const convertToPdf = async (url) => {
//       // const imageUrl = await fetchImage(blobUrl);
//       const img = new Image();
//       img.src = url;
  
//       img.onload = () => {
//         const pdf = new jsPDF();
//         const width = pdf.internal.pageSize.getWidth();
//         const height = pdf.internal.pageSize.getHeight();
//         const aspectRatio = img.width / img.height;
  
//         let imgWidth, imgHeight;
//         if (aspectRatio > 1) {
//           imgWidth = width;
//           imgHeight = width / aspectRatio;
//         } else {
//           imgHeight = height;
//           imgWidth = height * aspectRatio;
//         }
  
//         pdf.addImage(img, 'JPEG', 0, 0, imgWidth, imgHeight);
//         // setBlobUrl(pdf)
        
//         // console.log(pdf.output('datauristring'))
//         // const len = pdf.output('datauristring').length
//         // const bytes = new Uint8Array(len)

//         // for(let i=0; i< len ; i++){
//         //   bytes[i] = pdf.output('datauristring').charCodeAt(i)
//         // }

//         // const blob = new Blob([bytes], {type : 'application/pdf'})

//         // const pdfUrl = URL.createObjectURL(blob)
//         // setBlobUrl(pdfUrl)
//         console.log(pdf.save('image.pdf'))
//         pdf.save('image.pdf');
//       };
  
//       img.onerror = () => {
//         alert('Invalid image blob URL');
//       };
//     };
  
//     // Callback function when cropping is canceled
//     const onCropCancel = () => {
//       setCurrentPage("choose-img");
//       setImage(""); 
//     };


//      const inputRef = useRef();

//     // Handle the change event when a file is selected
//     const handleOnChange = (event) => {
//       if (event.target.files && event.target.files.length > 0) {
//         const reader = new FileReader();
//         reader.readAsDataURL(event.target.files[0]);
//         reader.onload = function (e) {
//           onImageSelected(reader.result);
//         };
//       }
//     };
  
//     return (
//       <div className="container d-flex align-items-center justify-content-center vh-100">
//         {currentPage === "choose-img" ? (
//           <input
//           type="file"
//           accept="image/*"
//           ref={inputRef}
//           onChange={handleOnChange}
//           style={{ display: "none" }}
//         />
//           // <FileInput onImageSelected={onImageSelected} />
//         ) : currentPage === "crop-img" ? (
//           <ImageCropper
//             image={image}
//             onCropDone={onCropDone}
//             onCropCancel={onCropCancel}
//           />
//         ) : (
//           // Display the cropped image and options to crop a new image or start over
//           <div>
//             <div>
//               <img src={imgAfterCrop} className="cropped-img" />
//             </div>
  
//             <button
//               onClick={() => {
//                 // Allow cropping the current image again
//                 setCurrentPage("crop-img"); 
//               }}
//               className="btn btn-primary me-5"
//             >
//               Crop
//             </button>
  
//             <button
//               onClick={() => {
//                 // Start over by choosing a new image
//                 setCurrentPage("choose-img"); 
//                 setImage("");
//               }}
//               className="btn btn-primary"
//             >
//               New Image
//             </button>

//             {/* <a className='btn btn-primary' href={blobUrl} download type='button'>Download</a> */}
//           </div>
//         )}
//       </div>
//     );
//   }

// export default Imagecrop
