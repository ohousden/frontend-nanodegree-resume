'Use strict';

var data = ('%data%');

var bio = {
    "name": "Owen Housden",
    "role": "Web Developer",
    "image": "https://placeimg.com/300/300/people",
    "welcomeMessage": "Hello, here is my welcome message",
    "contacts": {
        "mobileNumber": "804-694-9856",
        "email": "ohousden@gmail.com",
        "githubUsername": "ohousden",
        "location": "Richmond, Va"
    },
    "skills": [
        "Angular JS",
        "Ruby",
        "Javascript",
        "HTML", "CSS",
        "Jquery"
    ]
};

bio.display = function () {
    var $header = $('#header');
    $header.append(HTMLheaderName.replace(data, bio.name));
    $header.append(HTMLheaderRole.replace(data, bio.role));
    $header.append(HTMLcontactStart);
    $header.append(HTMLbioPic.replace(data, bio.image));

    var $contacts = $('#contacts');
    var contacts = bio.contacts;
    $contacts.append(HTMLmobile.replace(data, contacts.mobileNumber));
    $contacts.append(HTMLemail.replace(data, contacts.email));
    $contacts.append(HTMLgithub.replace(data, contacts.githubUsername));
    $contacts.append(HTMLlocation.replace(data, contacts.location));
    $header.append(HTMLwelcomeMsg.replace(data, bio.welcomeMessage));
    $header.append(HTMLskillsStart);

    var $footerContacts = $('#footerContacts');
    $footerContacts.append(HTMLmobile.replace(data, contacts.mobileNumber));
    $footerContacts.append(HTMLemail.replace(data, contacts.email));
    $footerContacts.append(HTMLgithub.replace(data, contacts.githubUsername));
    $footerContacts.append(HTMLlocation.replace(data, contacts.location));

    for (skill in bio.skills) {
        var formattedSkill = HTMLskills.replace(data, bio.skills[skill]);
        $('#skills').append(formattedSkill);
    }
};

var work = {
    "jobs": [
        {
            "employer": "Capital One",
            "title": "QA Analyst",
            "location": "15020 Capital One Drive, Henrico VA",
            "dates": "2014-Present",
            "description": "Sed vel justo eu sem euismod vulputate. Suspendisse dapibus vitae nibh nec lobortis. Quisque mattis lacus turpis, vel sagittis tortor tempus sit amet. Aliquam erat."
        },
        {
            "employer": "ICONMA, LLC",
            "title": "Quality Assurance Analyst",
            "location": "15020 Capital One Drive, Henrico VA",
            "dates": "2013-2014",
            "description": "Regression testing of Capital One's online servicing web application, Logged and maintained defects found during testing, Maintain test data to meet testing requirements, Work on Agile teams to more effectively complete work, Write Ruby automation test scripts for new functionality testing"
        },
        {
            "employer": "G4S",
            "title": "Critical Facility Officer",
            "location": "8097 Villa Park Drive, Richmond, VA",
            "dates": "2008-2013",
            "description": "Monitor access control, guard docks and patrol a high-rise facility in a highly secured environment., Protect highly sensitive data banks by utilizing foot patrols and strict access control., Monitor cameras and alarms in a control room., Maintaining daily activity logs on the computer."
        }

    ]
};

work.display = function () {
    for (job in work.jobs) {
        $('#workExperience').append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace(data, work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace(data, work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $('.work-entry:last').append(formattedEmployerTitle);
        var formattedDates = HTMLworkDates.replace(data, work.jobs[job].dates);
        $('.work-entry:last').append(formattedDates);
        var formattedLocation = HTMLworkLocation.replace(data, work.jobs[job].location);
        $('.work-entry:last').append(formattedLocation);
        var formattedDescription = HTMLworkDescription.replace(data, work.jobs[job].description);
        $('.work-entry:last').append(formattedDescription);
    }
};

var projects = {
    "projects": [
        {
            "title": "Project Title 1",
            "dates": "01/15/2014 - 01/25/2014",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget sodales arcu, at porta lectus. Vestibulum in purus tellus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras eleifend ex at arcu maximus gravida. Sed pellentesque auctor ligula, vitae volutpat lectus rhoncus quis. Suspendisse vehicula nibh lectus, at aliquet risus ultrices at. Mauris at condimentum magna. Nulla sed aliquet nunc, at aliquet enim. Vivamus non justo ut sem varius scelerisque. Donec dictum ligula at ante tincidunt, ac commodo est fringilla. Nulla vel nisi a erat porta fringilla. Nullam nec leo sed leo tristique ornare ac ac tortor. Mauris dignissim nunc in libero accumsan, et dictum neque rutrum. Phasellus et odio malesuada, tempor neque eu, porta orci. Etiam ullamcorper viverra nibh, et efficitur metus efficitur eu. Quisque risus eros, tincidunt vel libero sed, congue hendrerit lacus.",
            "images": [
                "https://placeimg.com/300/250/animals",
                "https://placeimg.com/300/250/arch"
            ]
        },
        {
            "title": "Project Title 2",
            "dates": "01/15/2014 - 01/25/2014",
            "description": "Duis nec imperdiet nulla, ac tristique quam. Sed porta magna ligula. Aenean at ipsum eget ligula bibendum facilisis. Aliquam sed mauris nec ligula fermentum condimentum. Phasellus nunc velit, iaculis sed est vitae, vestibulum hendrerit sapien. Sed enim enim, tincidunt a accumsan sit amet, pellentesque nec neque. Etiam sed felis id dui fringilla mattis non vitae enim. Suspendisse accumsan urna nec odio ornare, in tincidunt purus vestibulum. Vestibulum ullamcorper, justo a convallis suscipit, justo magna condimentum arcu, fermentum fermentum enim arcu sit amet nisl. Morbi non rutrum ante, vel commodo nibh.",
            "images": [
                "https://placeimg.com/300/250/nature",
                "https://placeimg.com/300/250/tech"
            ]
        }
    ]

};

projects.display = function () {
    for (project in projects.projects) {
        $('#projects').append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace(data, projects.projects[project].title);
        $('.project-entry:last').append(formattedTitle);

        var formattedDates = HTMLprojectDates.replace(data, projects.projects[project].dates);
        $('.project-entry:last').append(formattedDates);

        var formattedDescription = HTMLprojectDescription.replace(data, projects.projects[project].description);
        $('.project-entry:last').append(formattedDescription);

        if (projects.projects[project].images.length > 0) {
            for (image in projects.projects[project].images) {
                var formattedImage = HTMLprojectImage.replace(data, projects.projects[project].images[image]);
                $('.project-entry:last').append(formattedImage);
            }
        }
    }

};

var education = {
    "schools": [
        {
            "name": "Manchester High School",
            "location": "Chesterfield, Va",
            "degree": "Diploma",
            "majors": ["n/a"],
            "datesAttended": "2003-2007",
            "url": "http://www.manchesterhs.mychesterfieldschools.com/"
        }
    ],
    "onlineCourses": [
        {
            "title": "Front-End Developer NanoDegree",
            "school": "Udacity",
            "dates": "May 2015 - November 2015",
            "url": "www.udacity.com"
        },
        {
            "title": "Javascript Fundamentals",
            "school": "Codecademy",
            "dates": "May 2015",
            "url": "www.codecademy.com"
        },
        {
            "title": "online course 3 title",
            "school": "school for online course 3",
            "dates": "dates for course 3",
            "url": "www.google.com"
        }
    ]
};

education.display = function () {
    $('#education').append(HTMLschoolStart);
    for (school in education.schools) {
        var schoolName = HTMLschoolName.replace(data, education.schools[school].name);
        $('.education-entry').append(schoolName);

        var schoolDegree = HTMLschoolDegree.replace(data, education.schools[school].degree);
        $('.education-entry').append(schoolDegree);

        var schoolDates = HTMLschoolDates.replace(data, education.schools[school].datesAttended);
        $('.education-entry').append(schoolDates);

        var schoolLocation = HTMLschoolLocation.replace(data, education.schools[school].location);
        $('.education-entry').append(schoolLocation);

        var schoolMajors = HTMLschoolMajor.replace(data, education.schools[school].majors);
        $('.education-entry').append(schoolMajors);

        var schoolURL = HTMLonlineURL.replace(data, "link").replace("#", education.schools[school].url);
        $('.education-entry').append(schoolURL);
    }
    $('#education').append(HTMLonlineClasses);
    $('#education').append(HTMLschoolStart);
    for (course in education.onlineCourses) {
        var courseTitle = HTMLonlineTitle.replace(data, education.onlineCourses[course].title);
        $('.education-entry:last').append(courseTitle);

        var courseSchool = HTMLonlineSchool.replace(data, education.onlineCourses[course].school);
        $('.education-entry:last').append(courseSchool);

        var courseDates = HTMLonlineDates.replace(data, education.onlineCourses[course].dates);
        $('.education-entry:last').append(courseDates);

        var courseURL = HTMLonlineURL.replace(data, education.onlineCourses[course].url);
        $('.education-entry:last').append(courseURL);
    }
};

function displayUtilities() {
    $('#mapDiv').append(googleMap);
}