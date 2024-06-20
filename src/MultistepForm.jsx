import React, { useContext, useEffect, useState } from 'react'
import Header from './Header';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/TextLayer.css';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import { FiUpload } from "react-icons/fi";
import { GrLinkPrevious, GrLinkNext } from "react-icons/gr";
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { BsFiletypePdf } from "react-icons/bs";
import { PDFDocument } from 'pdf-lib';
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css'
import CommonContext from './CommonContext';
import { useNavigate } from 'react-router-dom';






pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.mjs`;



const MultistepForm = () => {

    const {
        extractedJSONFields,
        setExtractedJSONFields,
        pdfFilePath,
        setPdfFilePath,
        outputPdf,
        setOutputPdf
            }  = useContext(CommonContext)

    const pdfUrl = pdfFilePath; 

    const [showFieldOne, setShowFieldOne] = useState(false)
    const [showFieldTwo, setShowFieldTwo] = useState(false)
    const [showFieldThree, setShowFieldThree] = useState(false)


    const [numPages, setNumPages] = useState(Number);
    const [pageNumber, setPageNumber] = useState(1);
    const [documentAadhar, setDocumentAadhar] = useState(null)
    const [documentPan, setDocumentPan] = useState(null)
    const [documentsUploaded, setDocumentsUploaded] = useState(false)
    const [uploading, setUploading] = useState(false)
    const [countryCode, setCountryCode] = useState(null)
    const [dialCode, setDialCode] = useState("")
    const [inputField, setInputField] = useState({
        empId: "",
        firstName: "",
        lastName: "",
        designation: "",
        countryCode: null,
        contactNumber: "",
    });
    const [previousNextButtonDisabled, setPreviousNextButtonDisabled] = useState(false)
    const [clickHereOnceLoading, setClickHereOnceLoading] = useState(false)
    const [responseData, setResponseData] = useState([])
    const [callNowClicked,setCallNowClicked ] = useState(false)
    const [clickHereOnceEnabled,setClickHereOnceEnabled] = useState(false)
    const [isCallDisconnected, setIsCallDisconnected] = useState(false)
    const [afterCallConnectionResponseData, setAfterCallConnectionResponseData] = useState([])
    const pageRender = useNavigate();
    
    useEffect(() => {
        setShowFieldOne(true)
    }, [])

    var currentStep = 1;
    var updateProgressBar;

    function displayStep(stepNumber) {
        if (stepNumber === 1) {
            setShowFieldOne(true)
            setShowFieldTwo(false)
            setShowFieldThree(false)
        } else if (stepNumber === 2) {
            setShowFieldOne(false)
            setShowFieldTwo(true)
            setShowFieldThree(false)
        } else if (stepNumber === 3) {
            setShowFieldOne(false)
            setShowFieldTwo(false)
            setShowFieldThree(true)
        }

        if (stepNumber >= 1 && stepNumber <= 3) {
            document.querySelector(".step-" + currentStep).style.display = "none";
            document.querySelector(".step-" + stepNumber).style.display = "block";
            currentStep = stepNumber;
            updateProgressBar();
        }
    }

    updateProgressBar = function () {
        var progressPercentage = ((currentStep - 1) / 2) * 100;
        document.querySelector(".progress-bar").style.width = progressPercentage + "%";
    }
    document.addEventListener("DOMContentLoaded", function () {
        var multiStepForm = document.getElementById("multi-step-form");
        var steps = multiStepForm.querySelectorAll(".step");
        for (var i = 1; i < steps.length; i++) {
            steps[i].style.display = "none";
        }

        var nextButtons = document.querySelectorAll(".next-step");
        nextButtons.forEach(function (button) {


            button.addEventListener("click", function () {
                if (currentStep < 3) {
                    document.querySelector(".step-" + currentStep).classList.add("animate__animated", "animate__fadeOutLeft");
                    currentStep++;
                    setTimeout(function () {
                        var steps = document.querySelectorAll(".step");
                        steps.forEach(function (step) {
                            step.classList.remove("animate__animated", "animate__fadeOutLeft");
                            step.style.display = "none";
                        });
                        document.querySelector(".step-" + currentStep).style.display = "block";
                        document.querySelector(".step-" + currentStep).classList.add("animate__animated", "animate__fadeInRight");
                        updateProgressBar();
                    }, 500);
                }
            });
        });

        var prevButtons = document.querySelectorAll(".prev-step");
        prevButtons.forEach(function (button) {
            button.addEventListener("click", function () {
                if (currentStep > 1) {
                    document.querySelector(".step-" + currentStep).classList.add("animate__animated", "animate__fadeOutRight");
                    currentStep--;
                    setTimeout(function () {
                        var steps = document.querySelectorAll(".step");
                        steps.forEach(function (step) {
                            step.classList.remove("animate__animated", "animate__fadeOutRight");
                            step.style.display = "none";
                        });
                        document.querySelector(".step-" + currentStep).style.display = "block";
                        document.querySelector(".step-" + currentStep).classList.add("animate__animated", "animate__fadeInLeft");
                        updateProgressBar();
                    }, 500);
                }
            });
        });


    });



    function onDocumentLoadSuccess(pdf) {
        setNumPages(pdf?.numPages);
    }

    const handleCardClick = (e, value) => {
        if (value === "aadhaarCard") {
            document.getElementById("aadhaarCard").click()
        }
        else if (value === "panCard") {
            document.getElementById("panCard").click()
        }
    }



    const handleAadhaarCardUpload = (e) => {
        const file = e.target.files[0]
        setDocumentAadhar(e.target.files[0]);
    }
    const handlePanCardUpload = (e) => {
        const file = e.target.files[0];
        setDocumentPan(e.target.files[0])
    }




    const handlePhoneInput = (e, phone, contactno) => {
        setInputField((prevState) => ({
            ...prevState,
            contactNumber: e.slice(phone.dialCode.length),
            countryCode: phone.dialCode,
        }));
        setCountryCode(phone.dialCode)
        setDialCode(phone.dialCode)

    };


    // Aadhaar PAN documents upload
    const handleDocumentsUpload = async (e) => {
        setUploading(true)
        if (documentAadhar !== null && documentPan !== null) {
            const formData = new FormData()
            formData.append("aadhar", documentAadhar);
            formData.append("pan", documentPan)
            formData.append("filename", "KYC_ApplForm_p.pdf")
            try {
                console.log(documentAadhar,documentPan,"KYC_ApplForm_p.pdf")
                await axios.post('https://digiform.adraproductstudio.com/update_pdf', formData)
                    .then((response) => {
                        if (response.data.error_code === 0) {
                            console.log(response)
                            setUploading(false)
                            setDocumentsUploaded(true)
                            setResponseData(response.data.data.combined_json)
                            toast.success(response.data.message)

                            

                        } else {
                            setUploading(false)
                            toast.error(response.data.message)
                        }
                    }).catch((err) => {
                        setUploading(false)
                        console.log(err)
                    })
            } catch (err) {
                setUploading(false)
                console.log(err)
            }

        }
    }



    // Previous button click api
    // Mapping area
    const handlePreviewClick = async () => {
        if (isCallDisconnected === true) {
            const inputPdfPath = pdfFilePath; 
            const response = await fetch(inputPdfPath);
            const pdfBytes = await response.arrayBuffer();
            const fieldData = extractedJSONFields.map(field => {
                const value = afterCallConnectionResponseData.find(obj => obj.hasOwnProperty(field.name));
                return {
                    ...field,
                    value: value ? value[field.name] : ""
                };
            });

            try {
                console.log(afterCallConnectionResponseData,"after Call response")
                const filledPdfBytes = await fillPdfFields(pdfBytes, fieldData);
                const blob = new Blob([filledPdfBytes], { type: "application/pdf" });
                setOutputPdf(URL.createObjectURL(blob));
            } catch (error) {
                console.error("Error filling PDF fields:", error);
            }
        } else {

            const inputPdfPath = pdfFilePath; 
            console.log(inputPdfPath,"input pdf")
            console.log(responseData,"response data")
            const response = await fetch(inputPdfPath);
            const pdfBytes = await response.arrayBuffer();
            const fieldData = extractedJSONFields.map(field => {
                const value = responseData.find(obj => obj.hasOwnProperty(field.name));
                return {
                    ...field,
                    value: value ? value[field.name] : ""
                };
            });

            // const fieldData = [
            //     { name: 'ApplicantName', value: 'John Doe' },
            //     { name: 'FatherName', value: 'Robert Doe' },
            // ]

            try {
                const filledPdfBytes = await fillPdfFields(pdfBytes, fieldData);
                const blob = new Blob([filledPdfBytes], { type: "application/pdf" });
                setOutputPdf(URL.createObjectURL(blob));
                // window.open(URL.createObjectURL(blob))
                console.log('try part')
            } catch (error) {
                console.error("Error filling PDF fields:", error);
            }
        }
    };




    // Fill now function
    const fillPdfFields = async (pdfBytes, fieldData) => {
        const pdfDoc = await PDFDocument.load(pdfBytes);
        const form = pdfDoc.getForm();

        fieldData.forEach((data) => {
            const field = form.getField(data.name);
            if (field) {
                try {
                    switch (field.constructor.name) {
                        case "PDFTextField":
                            field.setText("Test");
                            break;
                        case "PDFCheckBox":
                            if (data.value === true) {
                                field.check();
                            } else {
                                field.uncheck();
                            }
                            break;
                        case "PDFDropdown":
                            field.select(data.value);
                            break;
                        case "PDFRadioGroup":
                            field.select(data.value);
                            break;
                        default:
                            console.log(`Unsupported field type: ${field.constructor.name}`);
                            console.log(field,"field")
                            break;
                    }
                } catch (error) {
                    console.error(
                        `Error setting field ${data.name} with value ${data.value}: ${error.message}`
                    );
                }
            }
        });

        return pdfDoc.save();
    };



    // Call now button click api
    const handleCallNowClick = async (e) => {
        setCallNowClicked(true)
        setPreviousNextButtonDisabled(true)

        const requiredParams = {
            to_phone: `+${dialCode}${inputField.contactNumber}`,
            final_json: JSON.stringify(responseData)
        }

        try {
            console.log(requiredParams)
            await axios.post('https://digiformapi.adraproductstudio.com:3000/outbound_call', requiredParams)
                .then((response) => {
                    if (response.data.error_code === 0) {
                        console.log(response,"call response")
                        toast.success(response.data.message)
                        setCallNowClicked(false)
                        setClickHereOnceLoading(false)
                        setClickHereOnceEnabled(true)
                    } else {

                        toast.error(response.data.message)
                    }
                }).catch((err) => {
                    console.log(err)
                })
        } catch (err) {
            console.log(err)
        }
    }



    // After call disconnected api
    const afterCallConnectionResponse = async () => {
        setClickHereOnceLoading(true)
        const requiredParams = {
            to_phone: `+${dialCode}${inputField.contactNumber}`,
            final_json: JSON.stringify(responseData)
        }

        try {
            await axios.post('https://digiformapi.adraproductstudio.com:3000/complete_application', requiredParams)
                .then((response) => {
                    if (response.data.error_code === 0) {
                        console.log(response,"call disconnected")
                        setAfterCallConnectionResponseData(response.data.data)
                        setIsCallDisconnected(true)
                        toast.success(response.data.message)
                        setPreviousNextButtonDisabled(false)
                        setClickHereOnceLoading(false)
                    } else if (response.data.error_code === 1) {
                        setClickHereOnceLoading(false)
                    }
                    else {
                        toast.error(response.data.message)
                        setClickHereOnceLoading(false)
                    }
                }).catch((err) => {
                    console.log(err)
                    setClickHereOnceLoading(false)

                })
        } catch (err) {
            console.log(err)
            setClickHereOnceLoading(false)

        }
    }
    


    return (
        <>
            <section className="multistep-form-component">
                <Header />
                <div className="multistep-form-container rounded-5">
                    <div className="container  p-0 ">
                        <div className="card border-0 rounded-5">
                            <div className="row px-3">
                                <div className="col-lg-6 multistep-left-container py-5 px-3">
                                    <div className='position-relative'>
                                        <div className='preview-container pb-3'>
                                            <p className="ms-3">
                                                Page {pageNumber} of {numPages}
                                            </p>
                                            {
                                                numPages >= 1  ?
                                                    <div className="d-flex justify-content-between mx-3">
                                                        <div className='d-flex'>

                                                        </div>
                                                        <div>
                                                            <button type="button" disabled={responseData.length === 0 ? "disabled" : ""} className="btn border border-brand-color btn-primary" data-bs-toggle="modal" data-bs-target="#pdfModal" onClick={handlePreviewClick} >
                                                                Preview
                                                            </button>
                                                        </div>
                                                    </div>
                                                    :
                                                    null
                                            }
                                        </div>



                                        <div className='multistep-form-bottom-container'>
                                            <Document file={outputPdf !==null ? outputPdf : pdfFilePath} onLoadSuccess={onDocumentLoadSuccess} onLoadError={console.error}>
                                                <Page
                                                    pageNumber={pageNumber}
                                                    renderTextLayer={false}
                                                    renderAnnotationLayer={false}
                                                />
                                            </Document>
                                        </div>

                                        <div className='pages-container pt-3'>
                                            {
                                                numPages > 1 ?
                                                    <div className="d-flex justify-content-between mx-3">
                                                        <div className='d-flex'>
                                                            <div>
                                                                <button type='button' className={pageNumber === 1 ? 'btn btn-secondary border border-brand-color candidate-right-side-btn pe-none  me-3' : 'btn btn-transparent border border-brand-color candidate-right-side-btn me-3'} onClick={() => setPageNumber(pageNumber > 1 ? pageNumber - 1 : pageNumber)}><GrLinkPrevious /></button>
                                                            </div>
                                                            <div >
                                                                <button type='button' className={pageNumber === numPages ? 'btn btn-secondary border border-brand-color candidate-right-side-btn pe-none ' : 'btn btn-transparent border border-brand-color candidate-right-side-btn'} onClick={() => setPageNumber(pageNumber < numPages ? pageNumber + 1 : pageNumber)}><GrLinkNext /></button>
                                                            </div>
                                                        </div>
                                                        <div>

                                                        </div>
                                                    </div>
                                                    :
                                                    null
                                            }
                                        </div>
                                    </div>


                                    {/* <!-- Modal --> */}
                                    <div className="modal fade vh-100" id="pdfModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                        <div className="modal-dialog  modal-xl ">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <h1 className="modal-title fs-5" id="staticBackdropLabel">PDF Preview</h1>
                                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                </div>
                                                <div className="modal-body pdf-iframe-container">
                                                    <iframe
                                                        title="PDF Viewer"
                                                        src={outputPdf}
                                                        width="100%"
                                                        height=""
                                                        className="h-100 "
                                                        frameBorder="0"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div className="col-lg-6 my-5  multistep-right-container position-relative start-25 ">
                                    <div className=' w-100 mt-5 px-5'>
                                        <div className="progress px-1 " style={{ height: '5px' }} >
                                            <div className="progress-bar" role="progressbar" style={{ width: "0%" }} aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <div className="step-container d-flex justify-content-between ">
                                            <div className="step-circle" onClick={() => displayStep(1)}>1</div>
                                            <div className="step-circle" onClick={() => displayStep(2)}>2</div>
                                            <div className="step-circle" onClick={() => displayStep(3)}>3</div>
                                        </div>
                                        <hr />
                                    </div>

                                    <div className='w-100 px-5'>
                                        <form id="multi-step-form ">
                                            <div className={`step step-1 ${showFieldOne === true ? "d-block mt-5" : "d-none"}`}>
                                                <h4>Document checklist</h4>
                                                <div className="mb-3">
                                                    <label htmlFor="field1" className="form-label text-grey">Please upload the following documents</label>
                                                    <div>
                                                        <div className="container-fluid mt-4 mx-auto">
                                                            <div className="row mb-2">
                                                                <div className="col-lg-6 my-3">
                                                                    <div className={`card h-100 border-0 shadow rounded-3 py-3 cup ${documentsUploaded === true ? `pe-none disabled opacity-50` : ``}`} onClick={(e) => handleCardClick(e, "aadhaarCard")}>
                                                                        {
                                                                            documentAadhar === null ?
                                                                                <div className="card-body d-flex align-items-center"  >
                                                                                    <p className='mb-0 mx-3'><FiUpload className='fs-3' /></p>
                                                                                    <p className='mb-0' >Aadhaard card</p>
                                                                                    <input type="file" hidden id='aadhaarCard' name='aadhaarCard' onChange={(e) => handleAadhaarCardUpload(e)} />
                                                                                </div>
                                                                                :
                                                                                <div className="card-body d-flex align-items-center "  >

                                                                                    {
                                                                                        uploading ?
                                                                                            <div className="d-flex justify-content-center">
                                                                                                <div className="spinner-border text-warning me-4" role="status">
                                                                                                    <span className="visually-hidden">Loading...</span>
                                                                                                </div>
                                                                                            </div>
                                                                                            :
                                                                                            <p className='mb-0 mx-3'><BsFiletypePdf className='fs-3 text-danger' /></p>
                                                                                    }
                                                                                    <p className='mb-0' >Aadhaar card</p>
                                                                                </div>
                                                                        }
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-6 my-3">
                                                                    <div className={`card h-100 border-0 shadow rounded-3 py-3 cup ${documentsUploaded ? `pe-none disabled opacity-50` : ``}`} onClick={(e) => handleCardClick(e, "panCard")}>
                                                                        {
                                                                            documentPan === null ?
                                                                                <div className="card-body d-flex align-items-center"  >
                                                                                    <p className='mb-0 mx-3'><FiUpload className='fs-3' /></p>
                                                                                    <p className='mb-0'>PAN card</p>
                                                                                    <input type="file" hidden id='panCard' onChange={(e) => handlePanCardUpload(e)} />
                                                                                </div>
                                                                                :
                                                                                <div className="card-body d-flex align-items-center"  >

                                                                                    {
                                                                                        uploading ?
                                                                                            <div className="d-flex justify-content-center">
                                                                                                <div className="spinner-border text-warning me-4 " role="status">
                                                                                                    <span className="visually-hidden">Loading...</span>
                                                                                                </div>
                                                                                            </div>
                                                                                            :
                                                                                            <p className='mb-0 mx-3'><BsFiletypePdf className='fs-3 text-danger' /></p>

                                                                                    }
                                                                                    <p className='mb-0'>PAN card</p>
                                                                                </div>
                                                                        }
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="row mb-3">
                                                                <div className="col-lg-6 my-3">
                                                                
                                                                </div>
                                                                <div className="col-lg-6 my-3">
                                                                   
                                                                </div>
                                                            </div>


                                                        </div>
                                                    </div>


                                                </div>
                                                <div className='mt-5 text-end '>
                                                    {
                                                        documentAadhar === null || documentPan === null || documentsUploaded === false ?
                                                            <button type="button" disabled={documentAadhar === null || documentPan === null || uploading === true ? "disabled" : ""} className="btn btn-success next-step w-25" onClick={(e) => handleDocumentsUpload(e)}>{uploading === true ? "Please wait" : "Upload"}</button>
                                                            :
                                                            <button type="button" className="btn btn-primary next-step w-25" onClick={() => displayStep(2)}>Next</button>
                                                    }
                                                </div>

                                            </div>



                                            <div className={`step step-2 ${showFieldTwo === true ? "d-block" : "d-none"}`}>
                                                <div>
                                                    <label htmlFor="field1" className="form-label text-grey mt-5">There are a few additional questions that need to be answered to complete your application. Please enter your phone number so we can call you to get that information.</label>
                                                    <div>


                                                        <div className="container-fluid mt-4 mx-auto">
                                                            <div className="row mb-2">

                                                                <div className="mb-3">
                                                                    <PhoneInput
                                                                        id="floatingInput"
                                                                        specialLabel=""
                                                                        country={dialCode === "" ? "in" : dialCode}
                                                                        dataTestid="mobileNumber"
                                                                        countryCodeEditable={false}
                                                                        enableSearch
                                                                        onChange={(e, phone) =>
                                                                            handlePhoneInput(e, phone, "contactno")
                                                                        }
                                                                        value={`${countryCode}${inputField.contactNumber}`}

                                                                        inputProps={{
                                                                            alt: "mobileNumber",
                                                                            type: "tel",
                                                                            placeholder: "Mobile Number",
                                                                            required: true,
                                                                        }}
                                                                    />
                                                                </div>


                                                                <button type="button" className="btn btn-success w-25 mx-3" disabled={callNowClicked ? "disabled" : ""} onClick={handleCallNowClick}>Call now</button>
                                                                <div className='d-flex align-items-center justify-content-between mt-3'>
                                                                    <div className='mb-0 pb-0'>
                                                                        <a href='#' className={`me-4 ${clickHereOnceLoading || callNowClicked ? "opacity-50 pe-none" : clickHereOnceEnabled ? "" : "d-none"}`} onClick={afterCallConnectionResponse}>Click here once you disconnect the call to update information</a>
                                                                        </div>
                                                                    {
                                                                        clickHereOnceLoading ?
                                                                            <div className="d-flex justify-content-center align-items-center">
                                                                                <div className="spinner-border text-warning" role="status">
                                                                                    <span className="visually-hidden">Loading...</span>
                                                                                </div>
                                                                            </div> : null
                                                                    }
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className='mt-5 text-end '>
                                                    <button type="button" disabled={previousNextButtonDisabled ? "disabled" : ""} className="btn btn-primary prev-step" onClick={() => displayStep(1)}>Previous</button>
                                                    <button type="button" disabled={previousNextButtonDisabled ? "disabled" : ""} className="btn btn-primary next-step ms-3" onClick={() => displayStep(3)}>Next</button>
                                                </div>
                                            </div>



                                            <div className={`step step-3 ${showFieldThree === true ? "d-block" : "d-none"}`}>
                                                <label htmlFor="field1" className="form-label text-grey mt-5">Please click on preview to review and download the form. Thank you for using Digiform!</label>
                                                <div>
                                                    <div className="container-fluid mt-4 mx-auto">
                                                        <div className="row mb-2">

                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='mt-5 text-end'>

                                                    <button type="button" className="btn btn-primary prev-step" onClick={() => displayStep(2)}>Previous</button>
                                                    <button type="button" className="btn btn-success ms-3" onClick={()=>pageRender("/")}>Finish</button>


                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Toaster />

            </section>
        </>
    )
}

export default MultistepForm
