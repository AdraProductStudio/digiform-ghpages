import axios from 'axios';
import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import extractedFields from './extractedJson.js'
import CommonContext from './CommonContext.jsx';

const CardComponent = () => {

    const {
        extractedJSONFields,
        setExtractedJSONFields,
        pdfFilePath,
        setPdfFilePath
    } = useContext(CommonContext)


    const [filePath, setFilePath] = useState('test.txt');
    const [fileContent, setFileContent] = useState('');





    const getFile = async (cardTitle) => {
        try {
            const response = await axios.get(`test.txt`, {
                params: { path: filePath },
                responseType: 'blob',
            });

            let onClickParams1;
            let onClickParams2;

            if (cardTitle === "KYC Form for Individuals") {
                onClickParams1 = [
                    {
                        "type": "PDFTextField",
                        "name": "ApplicantName"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "FatherName"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "Dob"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "Nationality"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "Pan"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "Aadhar"
                    },
                    {
                        "type": "PDFRadioGroup",
                        "name": "Gender"
                    },
                    {
                        "type": "PDFRadioGroup",
                        "name": "MaritalStatus"
                    },

                    {
                        "type": "PDFTextField",
                        "name": "ProofOfIdentity"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "ResidenceAddress"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "ResidentCity"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "ResidentPincode"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "ResidentState"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "ResidentCountry"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "TelOffice"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "TelResidence"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "MobileNum"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "Fax"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "Email"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "ProofOfAddress"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "NonResident"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "PermanentCity"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "PermanentPinCode"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "PermanentState"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "PermanentCountry"
                    },
                    {
                        "type": "PDFSignature",
                        "name": "DeclarationSign",
                        "value": "Unsupported field type"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "DeclarationDate"
                    },
                    {
                        "type": "PDFCheckBox",
                        "name": "OfficeUseCheckBox",
                        "value": false
                    },
                    {
                        "type": "PDFSignature",
                        "name": "OfficeUseSign",
                        "value": "Unsupported field type"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "OfficeUseDate"
                    },
                    {
                        "type": "PDFRadioGroup",
                        "name": "Status"
                    }
                ]
                onClickParams2 = "KYC_ApplForm_fillable_final-1.pdf"
                setExtractedJSONFields([
                    {
                        "type": "PDFTextField",
                        "name": "ApplicantName"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "FatherName"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "Email"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "Dob"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "Nationality"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "Pan"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "Aadhar"
                    },
                    {
                    "type": "PDFRadioGroup",
                    "name": "Gender"
                    },
                    {
                    "type": "PDFRadioGroup",
                    "name": "MaritalStatus"
                    },

                    {
                        "type": "PDFTextField",
                        "name": "ProofOfIdentity"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "ResidenceAddress"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "ResidentCity"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "ResidentPincode"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "ResidentState"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "ResidentCountry"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "TelOffice"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "TelResidence"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "MobileNum"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "Fax"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "ProofOfAddress"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "NonResident"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "PermanentCity"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "PermanentPinCode"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "PermanentState"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "PermanentCountry"
                    },
                    {
                        "type": "PDFSignature",
                        "name": "DeclarationSign",
                        "value": "Unsupported field type"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "DeclarationDate"
                    },
                    {
                        "type": "PDFCheckBox",
                        "name": "OfficeUseCheckBox",
                        "value": false
                    },
                    {
                        "type": "PDFSignature",
                        "name": "OfficeUseSign",
                        "value": "Unsupported field type"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "OfficeUseDate"
                    },
                    {
                        "type": "PDFRadioGroup",
                        "name": "Status"
                    }
                ])
                postTextFile(response.data, cardTitle, onClickParams1, onClickParams2)
                setPdfFilePath("https://digiformcdn.adraproductstudio.com/KYC_ApplForm_fillable_final-1.pdf")
                localStorage.setItem("currentPdf", "https://digiformcdn.adraproductstudio.com/KYC_ApplForm_fillable_final-1.pdf")
            } else if (cardTitle === "KYC Form for Non-Individuals") {
                onClickParams1 = [
                    {
                        "type": "PDFTextField",
                        "name": "ApplicantName"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "DOI"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "PlaceOfInCorporation"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "DateCommencement"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "BusinessPan"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "RegistrationNum"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "BusinessStatusSpecify"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "CorresAddress"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "CorresCity"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "CorresPincode"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "CorresState"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "CorresCountry"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "CorresTelOffice"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "CorresTelRes"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "CorresMobile"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "CorresFax"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "CorresEmail"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "BusinessProofAddress"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "RegisteredAddress"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "RegisteredCity"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "RegisteredPincode"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "RegisteredState"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "RegisteredCountry"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "NamePanAddressPhoto"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "DIN"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "AdharNumPromoter"
                    },
                    {
                        "type": "PDFSignature",
                        "name": "BusinessDecSign",
                        "value": "Unsupported field type"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "BusinessDecDate"
                    },
                    {
                        "type": "PDFCheckBox",
                        "name": "BusinessOfficeCheckBox",
                        "value": false
                    },
                    {
                        "type": "PDFSignature",
                        "name": "BusinessOfficeSign",
                        "value": "Unsupported field type"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "BusinessOfficeDate"
                    },
                    {
                        "type": "PDFRadioGroup",
                        "name": "BusinessStatus"
                    }
                ]
                onClickParams2 = "KYC_ApplForm_fillable_final-2.pdf"
                setExtractedJSONFields([
                    {
                        "type": "PDFTextField",
                        "name": "ApplicantName"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "DOI"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "PlaceOfInCorporation"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "DateCommencement"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "BusinessPan"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "RegistrationNum"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "BusinessStatusSpecify"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "CorresAddress"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "CorresCity"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "CorresPincode"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "CorresState"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "CorresCountry"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "CorresTelOffice"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "CorresTelRes"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "CorresMobile"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "CorresFax"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "CorresEmail"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "BusinessProofAddress"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "RegisteredAddress"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "RegisteredCity"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "RegisteredPincode"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "RegisteredState"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "RegisteredCountry"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "NamePanAddressPhoto"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "DIN"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "AdharNumPromoter"
                    },
                    {
                        "type": "PDFSignature",
                        "name": "BusinessDecSign",
                        "value": "Unsupported field type"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "BusinessDecDate"
                    },
                    {
                        "type": "PDFCheckBox",
                        "name": "BusinessOfficeCheckBox",
                        "value": false
                    },
                    {
                        "type": "PDFSignature",
                        "name": "BusinessOfficeSign",
                        "value": "Unsupported field type"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "BusinessOfficeDate"
                    },
                    {
                        "type": "PDFRadioGroup",
                        "name": "BusinessStatus"
                    }
                ])
                postTextFile(response.data, cardTitle, onClickParams1, onClickParams2)
                setPdfFilePath("https://digiformcdn.adraproductstudio.com/KYC_ApplForm_fillable_final-2.pdf")
                localStorage.setItem("currentPdf", "https://digiformcdn.adraproductstudio.com/KYC_ApplForm_fillable_final-2.pdf")

            } else {
                onClickParams1 = [
                    {
                        "type": "PDFTextField",
                        "name": "Date"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "BranchName"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "CustomerId"
                    },
                    {
                        "type": "PDFRadioGroup",
                        "name": "ApplicationType"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "BranchCode"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "CkycNO"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "PfNO"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "Name"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "FatherName"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "PlaceOfPosting"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "DateOfBirth"
                    },
                    {
                        "type": "PDFRadioGroup",
                        "name": "Gender"
                    },
                    {
                        "type": "PDFRadioGroup",
                        "name": "MaritalStatus"
                    },
                    {
                        "type": "PDFRadioGroup",
                        "name": "NameOf"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "NoOfDependers"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "NameOfGuardian"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "RelationShipWithGuardian"
                    },
                    {
                        "type": "PDFRadioGroup",
                        "name": "Nationality"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "CountryName"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "Citizenship"
                    },
                    {
                        "type": "PDFRadioGroup",
                        "name": "OccupationType"
                    },
                    {
                        "type": "PDFRadioGroup",
                        "name": "Business"
                    },
                    {
                        "type": "PDFRadioGroup",
                        "name": "Others"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "NotCategorised"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "EmployeeId"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "OrganizationName"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "DesignationOrProfession"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "NatureOfBusiness"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "AnnualIncome"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "EmailId"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "NetWorth"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "ReligionOthers"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "Pan"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "StdTelOff"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "TelRes"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "MobileNo"
                    },
                    {
                        "type": "PDFRadioGroup",
                        "name": "SourceOfFunds"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "SourceOfFundOthers"
                    },
                    {
                        "type": "PDFRadioGroup",
                        "name": "Religion"
                    },
                    {
                        "type": "PDFRadioGroup",
                        "name": "Category"
                    },
                    {
                        "type": "PDFRadioGroup",
                        "name": "PersonWithDisability"
                    },
                    {
                        "type": "PDFRadioGroup",
                        "name": "PersonWithDisablitiyIfYes"
                    },
                    {
                        "type": "PDFRadioGroup",
                        "name": "EducationalQualification"
                    },
                    {
                        "type": "PDFRadioGroup",
                        "name": "ApplicableBox"
                    },
                    {
                        "type": "PDFRadioGroup",
                        "name": "CountryOfTaxResidence"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "NameContinue"
                    },
                    {
                        "type": "PDFRadioGroup",
                        "name": "AccountType"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "DAddress"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "DAddressContinue"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "EAddressContinue"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "DocumentNoOrIdentificationNo"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "VisaDetails"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "Place"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "DDistrict"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "EDistrict"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "DCityOrVillage"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "ECityOrVillage"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "DState"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "DCountryName"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "ECountryName"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "EState"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "OvdDocumentNo"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "ProofOfIdentityIssuedBy"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "OnlyForForeignIssuedBy"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "DPin"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "EPin"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "ProofOfIdentityIssueDate"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "ProofOfIdentityExpiryDate"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "OnlyForForeignNationalsIssueDate"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "OnlyForForeignNationalsExpiryDate"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "OvdDate"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "DeclarationDate"
                    },
                    {
                        "type": "PDFRadioGroup",
                        "name": "ProofOfIdentityOrAddress"
                    },
                    {
                        "type": "PDFRadioGroup",
                        "name": "WhetherSubmittedDocument"
                    },
                    {
                        "type": "PDFRadioGroup",
                        "name": "DAddressDetails"
                    },
                    {
                        "type": "PDFRadioGroup",
                        "name": "EAddressDetails"
                    },
                    {
                        "type": "PDFRadioGroup",
                        "name": "DAddressType"
                    },
                    {
                        "type": "PDFRadioGroup",
                        "name": "EAddressType"
                    },
                    {
                        "type": "PDFRadioGroup",
                        "name": "Ovd"
                    },
                    {
                        "type": "PDFCheckBox",
                        "name": "LetterOfAllotmentOfAccomodation",
                        "value": false
                    },
                    {
                        "type": "PDFCheckBox",
                        "name": "SelfDeclarationIfAadhar",
                        "value": false
                    },
                    {
                        "type": "PDFRadioGroup",
                        "name": "DeclarationCumUndertaking"
                    }
                ]
                onClickParams2 = "SBI_form.pdf"
                setExtractedJSONFields([
                    {
                        "type": "PDFTextField",
                        "name": "BranchName"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "CustomerId"
                    },
                    {
                        "type": "PDFRadioGroup",
                        "name": "ApplicationType"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "BranchCode"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "CkycNO"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "PfNO"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "Name"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "FatherName"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "PlaceOfPosting"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "DateOfBirth"
                    },
                    {
                        "type": "PDFRadioGroup",
                        "name": "Gender"
                    },
                    {
                        "type": "PDFRadioGroup",
                        "name": "MaritalStatus"
                    },
                    {
                        "type": "PDFRadioGroup",
                        "name": "NameOf"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "NoOfDependers"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "NameOfGuardian"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "RelationShipWithGuardian"
                    },
                    {
                        "type": "PDFRadioGroup",
                        "name": "Nationality"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "CountryName"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "Citizenship"
                    },
                    {
                        "type": "PDFRadioGroup",
                        "name": "OccupationType"
                    },
                    {
                        "type": "PDFRadioGroup",
                        "name": "Business"
                    },
                    {
                        "type": "PDFRadioGroup",
                        "name": "Others"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "NotCategorised"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "EmployeeId"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "OrganizationName"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "DesignationOrProfession"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "NatureOfBusiness"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "AnnualIncome"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "EmailId"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "NetWorth"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "ReligionOthers"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "Pan"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "StdTelOff"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "TelRes"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "MobileNo"
                    },
                    {
                        "type": "PDFRadioGroup",
                        "name": "SourceOfFunds"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "SourceOfFundOthers"
                    },
                    {
                        "type": "PDFRadioGroup",
                        "name": "Religion"
                    },
                    {
                        "type": "PDFRadioGroup",
                        "name": "Category"
                    },
                    {
                        "type": "PDFRadioGroup",
                        "name": "PersonWithDisability"
                    },
                    {
                        "type": "PDFRadioGroup",
                        "name": "PersonWithDisablitiyIfYes"
                    },
                    {
                        "type": "PDFRadioGroup",
                        "name": "EducationalQualification"
                    },
                    {
                        "type": "PDFRadioGroup",
                        "name": "ApplicableBox"
                    },
                    {
                        "type": "PDFRadioGroup",
                        "name": "CountryOfTaxResidence"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "NameContinue"
                    },
                    {
                        "type": "PDFRadioGroup",
                        "name": "AccountType"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "DAddress"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "DAddressContinue"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "EAddressContinue"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "DocumentNoOrIdentificationNo"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "VisaDetails"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "Place"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "DDistrict"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "EDistrict"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "DCityOrVillage"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "ECityOrVillage"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "DState"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "DCountryName"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "ECountryName"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "EState"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "OvdDocumentNo"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "ProofOfIdentityIssuedBy"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "OnlyForForeignIssuedBy"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "DPin"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "EPin"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "ProofOfIdentityIssueDate"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "ProofOfIdentityExpiryDate"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "OnlyForForeignNationalsIssueDate"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "OnlyForForeignNationalsExpiryDate"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "OvdDate"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "DeclarationDate"
                    },
                    {
                        "type": "PDFRadioGroup",
                        "name": "ProofOfIdentityOrAddress"
                    },
                    {
                        "type": "PDFRadioGroup",
                        "name": "WhetherSubmittedDocument"
                    },
                    {
                        "type": "PDFRadioGroup",
                        "name": "DAddressDetails"
                    },
                    {
                        "type": "PDFRadioGroup",
                        "name": "EAddressDetails"
                    },
                    {
                        "type": "PDFRadioGroup",
                        "name": "DAddressType"
                    },
                    {
                        "type": "PDFRadioGroup",
                        "name": "EAddressType"
                    },
                    {
                        "type": "PDFRadioGroup",
                        "name": "Ovd"
                    },
                    {
                        "type": "PDFCheckBox",
                        "name": "LetterOfAllotmentOfAccomodation",
                        "value": false
                    },
                    {
                        "type": "PDFCheckBox",
                        "name": "SelfDeclarationIfAadhar",
                        "value": false
                    },
                    {
                        "type": "PDFRadioGroup",
                        "name": "DeclarationCumUndertaking"
                    }
                ])
                postTextFile(response.data, cardTitle, onClickParams1, onClickParams2)
                setPdfFilePath("https://digiformcdn.adraproductstudio.com/SBI_form.pdf")
                localStorage.setItem("currentPdf", "https://digiformcdn.adraproductstudio.com/SBI_form.pdf")

            }



            const reader = new FileReader();
            reader.onload = (event) => {
                setFileContent(event.target.result);
            };
            reader.readAsText(response.data); // Adjust according to the file type
        } catch (error) {
            console.error('Error fetching the file:', error);
        }
    };



    const postTextFile = async (response, cardTitle, onClickParams1, onClickParams2) => {


        const params = {
            file: JSON.stringify(onClickParams1),
            filename: onClickParams2
        }
        try {

            const result = await axios.post('https://digiformapi.adraproductstudio.com:5000/select_file', params, {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            })

        } catch (err) {
            console.log(err)
        }
    }



    const cardsArray = [
        {
            id: 1,
            imgSrc: "https://img.yumpu.com/44915880/1/500x640/please-affix-your-recent-passport-size-photo-application-form-.jpg",
            title: "KYC Form for Individuals",
            button: "Use",
            onClickParams1:
                [
                    {
                        "type": "PDFTextField",
                        "name": "ApplicantName",
                        "value": "123456789123",
                    },
                    {
                        "type": "PDFTextField",
                        "name": "FatherName"
                    },
                    {
                        "type": "PDFRadioGroup",
                        "name": "Gender"
                    },
                    {
                        "type": "PDFRadioGroup",
                        "name": "MaritalStatus"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "Dob"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "Nationality"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "Pan"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "Aadhar",

                    },
                    {
                        "type": "PDFTextField",
                        "name": "ProofOfIdentity"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "ResidenceAddress"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "ResidentCity"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "ResidentPincode"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "ResidentState"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "ResidentCountry"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "TelOffice"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "TelResidence"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "MobileNum"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "Fax"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "Email"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "ProofOfAddress"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "NonResident"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "PermanentCity"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "PermanentPinCode"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "PermanentState"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "PermanentCountry"
                    },
                    {
                        "type": "PDFSignature",
                        "name": "DeclarationSign",
                        "value": "Unsupported field type"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "DeclarationDate"
                    },
                    {
                        "type": "PDFCheckBox",
                        "name": "OfficeUseCheckBox",
                        "value": false
                    },
                    {
                        "type": "PDFSignature",
                        "name": "OfficeUseSign",
                        "value": "Unsupported field type"
                    },
                    {
                        "type": "PDFTextField",
                        "name": "OfficeUseDate"
                    },
                    {
                        "type": "PDFRadioGroup",
                        "name": "Status"
                    }
                ],
            onClickParams2: "https://digiformcdn.adraproductstudio.com/KYC_ApplForm_fillable_final-1.pdf",
        },
        {
            id: 2,
            imgSrc: "https://img.yumpu.com/44915880/1/500x640/please-affix-your-recent-passport-size-photo-application-form-.jpg",
            title: "KYC Form for Non-Individuals",
            button: "Use",
            onClickParams1: [
                {
                    "type": "PDFTextField",
                    "name": "BusinessApplicant"
                },
                {
                    "type": "PDFTextField",
                    "name": "DOI"
                },
                {
                    "type": "PDFTextField",
                    "name": "PlaceOfInCorporation"
                },
                {
                    "type": "PDFTextField",
                    "name": "DateCommencement"
                },
                {
                    "type": "PDFTextField",
                    "name": "BusinessPan"
                },
                {
                    "type": "PDFTextField",
                    "name": "RegistrationNum"
                },
                {
                    "type": "PDFTextField",
                    "name": "BusinessStatusSpecify"
                },
                {
                    "type": "PDFTextField",
                    "name": "CorresAddress"
                },
                {
                    "type": "PDFTextField",
                    "name": "CorresCity"
                },
                {
                    "type": "PDFTextField",
                    "name": "CorresPincode"
                },
                {
                    "type": "PDFTextField",
                    "name": "CorresState"
                },
                {
                    "type": "PDFTextField",
                    "name": "CorresCountry"
                },
                {
                    "type": "PDFTextField",
                    "name": "CorresTelOffice"
                },
                {
                    "type": "PDFTextField",
                    "name": "CorresTelRes"
                },
                {
                    "type": "PDFTextField",
                    "name": "CorresMobile"
                },
                {
                    "type": "PDFTextField",
                    "name": "CorresFax"
                },
                {
                    "type": "PDFTextField",
                    "name": "CorresEmail"
                },
                {
                    "type": "PDFTextField",
                    "name": "BusinessProofAddress"
                },
                {
                    "type": "PDFTextField",
                    "name": "RegisteredAddress"
                },
                {
                    "type": "PDFTextField",
                    "name": "RegisteredCity"
                },
                {
                    "type": "PDFTextField",
                    "name": "RegisteredPincode"
                },
                {
                    "type": "PDFTextField",
                    "name": "RegisteredState"
                },
                {
                    "type": "PDFTextField",
                    "name": "RegisteredCountry"
                },
                {
                    "type": "PDFTextField",
                    "name": "NamePanAddressPhoto"
                },
                {
                    "type": "PDFTextField",
                    "name": "DIN"
                },
                {
                    "type": "PDFTextField",
                    "name": "AdharNumPromoter"
                },
                {
                    "type": "PDFSignature",
                    "name": "BusinessDecSign",
                    "value": "Unsupported field type"
                },
                {
                    "type": "PDFTextField",
                    "name": "BusinessDecDate"
                },
                {
                    "type": "PDFCheckBox",
                    "name": "BusinessOfficeCheckBox",
                    "value": false
                },
                {
                    "type": "PDFSignature",
                    "name": "BusinessOfficeSign",
                    "value": "Unsupported field type"
                },
                {
                    "type": "PDFTextField",
                    "name": "BusinessOfficeDate"
                },
                {
                    "type": "PDFRadioGroup",
                    "name": "BusinessStatus"
                }
            ],
            onClickParams2: "https://digiformcdn.adraproductstudio.com/KYC_ApplForm_fillable_final-2.pdf",
        },
        {
            id: 3,
            imgSrc: "https://www.pdffiller.com/preview/14/246/14246420/large.png",
            title: "SBI Form",
            button: "Use",
            onClickParams1: [
                {
                    "type": "PDFTextField",
                    "name": "Date"
                },
                {
                    "type": "PDFTextField",
                    "name": "BranchName"
                },
                {
                    "type": "PDFTextField",
                    "name": "CustomerId"
                },
                {
                    "type": "PDFRadioGroup",
                    "name": "ApplicationType"
                },
                {
                    "type": "PDFTextField",
                    "name": "BranchCode"
                },
                {
                    "type": "PDFTextField",
                    "name": "CkycNO"
                },
                {
                    "type": "PDFTextField",
                    "name": "PfNO"
                },
                {
                    "type": "PDFTextField",
                    "name": "Name"
                },
                {
                    "type": "PDFTextField",
                    "name": "FatherName"
                },
                {
                    "type": "PDFTextField",
                    "name": "PlaceOfPosting"
                },
                {
                    "type": "PDFTextField",
                    "name": "DateOfBirth"
                },
                {
                    "type": "PDFRadioGroup",
                    "name": "Gender"
                },
                {
                    "type": "PDFRadioGroup",
                    "name": "MaritalStatus"
                },
                {
                    "type": "PDFRadioGroup",
                    "name": "NameOf"
                },
                {
                    "type": "PDFTextField",
                    "name": "NoOfDependers"
                },
                {
                    "type": "PDFTextField",
                    "name": "NameOfGuardian"
                },
                {
                    "type": "PDFTextField",
                    "name": "RelationShipWithGuardian"
                },
                {
                    "type": "PDFRadioGroup",
                    "name": "Nationality"
                },
                {
                    "type": "PDFTextField",
                    "name": "CountryName"
                },
                {
                    "type": "PDFTextField",
                    "name": "Citizenship"
                },
                {
                    "type": "PDFRadioGroup",
                    "name": "OccupationType"
                },
                {
                    "type": "PDFRadioGroup",
                    "name": "Business"
                },
                {
                    "type": "PDFRadioGroup",
                    "name": "Others"
                },
                {
                    "type": "PDFTextField",
                    "name": "NotCategorised"
                },
                {
                    "type": "PDFTextField",
                    "name": "EmployeeId"
                },
                {
                    "type": "PDFTextField",
                    "name": "OrganizationName"
                },
                {
                    "type": "PDFTextField",
                    "name": "DesignationOrProfession"
                },
                {
                    "type": "PDFTextField",
                    "name": "NatureOfBusiness"
                },
                {
                    "type": "PDFTextField",
                    "name": "AnnualIncome"
                },
                {
                    "type": "PDFTextField",
                    "name": "EmailId"
                },
                {
                    "type": "PDFTextField",
                    "name": "NetWorth"
                },
                {
                    "type": "PDFTextField",
                    "name": "ReligionOthers"
                },
                {
                    "type": "PDFTextField",
                    "name": "Pan"
                },
                {
                    "type": "PDFTextField",
                    "name": "StdTelOff"
                },
                {
                    "type": "PDFTextField",
                    "name": "TelRes"
                },
                {
                    "type": "PDFTextField",
                    "name": "MobileNo"
                },
                {
                    "type": "PDFRadioGroup",
                    "name": "SourceOfFunds"
                },
                {
                    "type": "PDFTextField",
                    "name": "SourceOfFundOthers"
                },
                {
                    "type": "PDFRadioGroup",
                    "name": "Religion"
                },
                {
                    "type": "PDFRadioGroup",
                    "name": "Category"
                },
                {
                    "type": "PDFRadioGroup",
                    "name": "PersonWithDisability"
                },
                {
                    "type": "PDFRadioGroup",
                    "name": "PersonWithDisablitiyIfYes"
                },
                {
                    "type": "PDFRadioGroup",
                    "name": "EducationalQualification"
                },
                {
                    "type": "PDFRadioGroup",
                    "name": "ApplicableBox"
                },
                {
                    "type": "PDFRadioGroup",
                    "name": "CountryOfTaxResidence"
                },
                {
                    "type": "PDFTextField",
                    "name": "NameContinue"
                },
                {
                    "type": "PDFRadioGroup",
                    "name": "AccountType"
                },
                {
                    "type": "PDFTextField",
                    "name": "DAddress"
                },
                {
                    "type": "PDFTextField",
                    "name": "DAddressContinue"
                },
                {
                    "type": "PDFTextField",
                    "name": "EAddressContinue"
                },
                {
                    "type": "PDFTextField",
                    "name": "DocumentNoOrIdentificationNo"
                },
                {
                    "type": "PDFTextField",
                    "name": "VisaDetails"
                },
                {
                    "type": "PDFTextField",
                    "name": "Place"
                },
                {
                    "type": "PDFTextField",
                    "name": "DDistrict"
                },
                {
                    "type": "PDFTextField",
                    "name": "EDistrict"
                },
                {
                    "type": "PDFTextField",
                    "name": "DCityOrVillage"
                },
                {
                    "type": "PDFTextField",
                    "name": "ECityOrVillage"
                },
                {
                    "type": "PDFTextField",
                    "name": "DState"
                },
                {
                    "type": "PDFTextField",
                    "name": "DCountryName"
                },
                {
                    "type": "PDFTextField",
                    "name": "ECountryName"
                },
                {
                    "type": "PDFTextField",
                    "name": "EState"
                },
                {
                    "type": "PDFTextField",
                    "name": "OvdDocumentNo"
                },
                {
                    "type": "PDFTextField",
                    "name": "ProofOfIdentityIssuedBy"
                },
                {
                    "type": "PDFTextField",
                    "name": "OnlyForForeignIssuedBy"
                },
                {
                    "type": "PDFTextField",
                    "name": "DPin"
                },
                {
                    "type": "PDFTextField",
                    "name": "EPin"
                },
                {
                    "type": "PDFTextField",
                    "name": "ProofOfIdentityIssueDate"
                },
                {
                    "type": "PDFTextField",
                    "name": "ProofOfIdentityExpiryDate"
                },
                {
                    "type": "PDFTextField",
                    "name": "OnlyForForeignNationalsIssueDate"
                },
                {
                    "type": "PDFTextField",
                    "name": "OnlyForForeignNationalsExpiryDate"
                },
                {
                    "type": "PDFTextField",
                    "name": "OvdDate"
                },
                {
                    "type": "PDFTextField",
                    "name": "DeclarationDate"
                },
                {
                    "type": "PDFRadioGroup",
                    "name": "ProofOfIdentityOrAddress"
                },
                {
                    "type": "PDFRadioGroup",
                    "name": "WhetherSubmittedDocument"
                },
                {
                    "type": "PDFRadioGroup",
                    "name": "DAddressDetails"
                },
                {
                    "type": "PDFRadioGroup",
                    "name": "EAddressDetails"
                },
                {
                    "type": "PDFRadioGroup",
                    "name": "DAddressType"
                },
                {
                    "type": "PDFRadioGroup",
                    "name": "EAddressType"
                },
                {
                    "type": "PDFRadioGroup",
                    "name": "Ovd"
                },
                {
                    "type": "PDFCheckBox",
                    "name": "LetterOfAllotmentOfAccomodation",
                    "value": false
                },
                {
                    "type": "PDFCheckBox",
                    "name": "SelfDeclarationIfAadhar",
                    "value": false
                },
                {
                    "type": "PDFRadioGroup",
                    "name": "DeclarationCumUndertaking"
                }
            ],
            onClickParams2: "https://digiformcdn.adraproductstudio.com/SBI_form.pdf"
        },
    ]


    return (
        <>
            <div className="card-component">
                <div className="container my-5 mt-2 px-5">
                    <div className="row row-cols-lg-4 row-cols-md-3  gap-5">
                        {
                            cardsArray.map((card) => {
                                return (
                                    <React.Fragment key={card.id}>
                                        <div className="card py-2 border-0 rounded-4" style={{ width: "18rem" }}>
                                            <img src={card.imgSrc} className="card-img-top" alt="..." height="300" />
                                            <div className="card-body px-0 py-0">
                                                <h6 className="card-title mb-4 mx-3">{card.title}</h6>
                                                <Link to="/multistep-form">
                                                    <div className="px-3">
                                                        <button className="btn brand-color w-100 mb-3" onClick={() => getFile(card.title)}>{card.button}</button>
                                                    </div>
                                                    <pre>{fileContent}</pre>

                                                </Link>
                                            </div>
                                        </div>
                                    </React.Fragment>
                                )
                            })
                        }

                    </div>
                </div>

            </div>
        </>
    )
}

export default CardComponent
