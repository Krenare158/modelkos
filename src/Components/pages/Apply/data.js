
export const contactInformationFields = [
    { label: "Full Name", type: "text", placeholder: "Write full name here" },
    { label: "Address", type: "text", placeholder: "Write address here" },
    { label: "Email", type: "email", placeholder: "Write email here" },
    { label: "Contact Number", type: "tel", placeholder: "Type contact number here" },
    { label: "Message", type: "textarea", placeholder: "Write messages, comments you have here..." },
  ];
  
  export const measurementsFields = [
    { label: "Gender", type: "select", options: ["Choose gender", "Male", "Female", "Other"] },
    { label: "Date of Birth", type: "date", placeholder: "MM/DD/YY" }
  ];

   export const measurement = [
    { label: "Height", type: "measurement", placeholder: "eg.(180)", unit: "CM" },
    { label: "Bust", type: "measurement", placeholder: "eg.(20)", unit: "CM" },
    { label: "Cup", type: "measurement", placeholder: "eg.(35)", unit: "CM" },
    { label: "Hips", type: "measurement", placeholder: "eg.(180)", unit: "CM" },
    { label: "Waist", type: "measurement", placeholder: "eg.(20)", unit: "CM" },
    { label: "Shoe", type: "measurement", placeholder: "eg.(35)", unit: "CM" },
    { label: "Upload Image (Full body)", type: "file" },
   ]
  