// yahn pr he references form or display kay 
var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-display');
// handle form submission aria
form.addEventListener('submit', function (event) {
    event.preventDefault(); // prevent page reload
    // user ka input value collect hoga
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experiance = document.getElementById('experiance').value;
    var skills = document.getElementById('skills').value;
    // resume ka content dynamically banega
    var resumeHTML = "\n    <h2><b>Editable Resume</b></h2>\n    <h3>Personal Information</h3>\n    <p><b>Name:</b><span contenteditable=\"ture\">".concat(name, "</span></p>\n    <p><b>Email:</b><span contenteditable=\"ture\">").concat(email, "</span></p>\n    <p><b>Phone:</b><span contenteditable=\"ture\">").concat(phone, "</span></p>\n\n    <h3>Education</h3>\n    <p contenteditable=\"ture\">").concat(education, "</p>\n\n    <h3>Experiance</h3>\n    <p contenteditable=\"ture\">").concat(experiance, "</p>\n\n    <h3>Skills</h3>\n    <p contenteditable=\"ture\">").concat(skills, "</p>\n    ");
    // display the generated resume
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error('The resume display element is missing.');
    }
});
