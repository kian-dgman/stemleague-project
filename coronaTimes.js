let eventOrder = 0;

function createArrowChange() {
    let arrows = document.querySelectorAll("span");
    arrows.forEach(arrow => {
        arrow.addEventListener("click", () => {
            changeText(arrow);
        });
        arrow.addEventListener('mousedown', function(e) { e.preventDefault(); }, false);
    });
};

function changeText(arrow) {
    let date = document.querySelector("#date");
    let event = document.querySelector("#event");
    let cases = document.querySelector("#cases");
    let deaths = document.querySelector("#deaths");
    let hiddenSection = document.querySelector("#hidden-section");

    if (arrow.classList.value == "arrow right" && eventOrder < 26) {
        eventOrder++;
    } else if (arrow.classList.value == "arrow left" && eventOrder >= 1) {
        eventOrder--;
    }

    switch (eventOrder) {
        case 0:
            date.textContent = "January 3, 2020";
            event.textContent = "A mysterious new type of pneumonia appears in China, which is traced back to a seafood market in Wuhan. There are 44 cases.";
            break;
        case 1:
            date.textContent = "January 9, 2020";
            event.textContent = "China reports that after investigation of the new type of pneumonia, it has been identified as a new type of coronavirus. The number of cases rises to 59.";
            break;
        case 2:
            date.textContent = "January 11, 2020";
            event.textContent = "China reports the first death from the coronavirus.";
            break;
        case 3:
            date.textContent = "January 20, 2020";
            event.textContent = "China reports that the coronavirus is capable of spreading from human-to-human, which makes it even more contagious.";
            break;
        case 4:
            date.textContent = "January 21, 2020";
            event.textContent = "As China tries to contain the spread of the virus, the United States reports their first case of the coronavirus: a man in Washington who came back from Wuhan, China.";
            break;
        case 5:
            date.textContent = "January 22, 2020";
            event.textContent = "China shuts down flights and trains trasporting people outside of the country as the number of cases go up.";
            hiddenSection.removeAttribute("id");
            cases.textContent = "580";
            deaths.textContent = "17";
            break;
        case 6:
            date.textContent = "January 26, 2020";
            event.textContent = "The United States reports 5 cases of the coronavirus from people who recently returned from Wuhan, China.";
            cases.textContent = "2,800";
            deaths.textContent = "80";
            break;
        case 7:
            date.textContent = "January 30, 2020";
            event.textContent = "After the number of cases spikes dramatically, the World Health Organization (WHO) declares a global emergency.";
            cases.textContent = "9,823";
            deaths.textContent = "213";
            break;
        case 8:
            date.textContent = "January 31, 2020";
            event.textContent = "Various airlines in the United States suspend any flights to and from China, while the United States declares a public health emergency and starts making restrictions.";
            cases.textContent = "11,958";
            deaths.textContent = "259";
            break;
        case 9:
            date.textContent = "February 4, 2020";
            event.textContent = "A report from the New England Journal of Medicine suggests that the virus may be able to spread to other humans before the host gets any symptoms."
            cases.textContent = "24,618";
            deaths.textContent = "492";
            break;
        case 10:
            date.textContent = "February 11, 2020";
            event.textContent = "The World Health Organization gives the virus an official name: COVID-19 (Coronavirus disease 2019).";
            cases.textContent = "45,299";
            deaths.textContent = "1,115";
            break;
        case 11:
            date.textContent = "February 21, 2020";
            event.textContent = "The few number of cases in Italy quadruple and the first death in the country is reported.";
            cases.textContent = "78,185";
            deaths.textContent = "2,360";
            break;
        case 12:
            date.textContent = "February 24, 2020";
            event.textContent = "The Dow Jones Industrial Average plummets down 1,000 points as people begin to fear of the virus's effects. As a result, the Stock Market begins to suffer.";
            cases.textContent = "80,848";
            deaths.textContent = "2,699";
            break;
        case 13:
            date.textContent = "February 28, 2020";
            event.textContent = "The first case of the coronavirus appears in sub-Saharan Africa, Nigerian officials report.";
            cases.textContent = "86,185";
            deaths.textContent = "2,923";
            break;
        case 14:
            date.textContent = "February 29, 2020";
            event.textContent = "The Chinese government orders the lockdown of 60 million people to prevent further spread of the virus. Meanwhile, the United States reports the first death in the country.";
            cases.textContent = "88,403";
            deaths.textContent = "2,977";
            break;
        case 15:
            date.textContent = "March 8, 2020";
            event.textContent = "Italy declares a quarantine on its country, which would restrict one quarter of its population in an effort to stop the spread."
            cases.textContent = "121,476";
            deaths.textContent = "3,827";
            break;
        case 16:
            date.textContent = "March 14, 2020";
            event.textContent = "Spain locks down and France closes down public places (e.g. the Eiffel Tower) as cases go up.";
            cases.textContent = "196,593";
            deaths.textContent = "5,848";
            break;
        case 17:
            date.textContent = "March 19, 2020";
            event.textContent = "Italy now has the most deaths from the coronavirus (3,405 dead), which surpasses China's numbers.";
            cases.textContent = "318,063";
            deaths.textContent = "10,095";
            break;
        case 18:
            date.textContent = "March 24, 2020";
            event.textContent = "The 2020 Summer Olympics is postponed until next year.";
            cases.textContent = "513,094";
            deaths.textContent = "19,193";
            break;
        case 19:
            date.textContent = "April 1, 2020";
            event.textContent = "1 million global cases.";
            cases.textContent = "1,013,907";
            deaths.textContent = "49,520";
            break;
        case 20:
            date.textContent = "May 17, 2020";
            event.textContent = "The WHO reports 100,000 cases in a single day.";
            cases.textContent = "4,746,786";
            deaths.textContent = "321,851";
            break;
        case 21:
            date.textContent = "May 20, 2020";
            event.textContent = "5 million global cases.";
            cases.textContent = "5,036,091";
            deaths.textContent = "334,766";
            break;
        case 22:
            date.textContent = "June 8, 2020";
            event.textContent = "New Zealand declares that it is coronavirus-free."
            cases.textContent = "7,181,950";
            deaths.textContent = "416,610";
            break;
        case 23:
            date.textContent = "June 27, 2020";
            event.textContent = "10 million global cases.";
            cases.textContent = "10,047,770";
            deaths.textContent = "507,023";
            break;
        case 24:
            date.textContent = "July 2, 2020";
            event.textContent = "Florida breaks a record with 10,000 new cases in a single day.";
            cases.textContent = "10,960,435";
            deaths.textContent = "529,332";
            break;
        case 25:
            date.textContent = "July 21, 2020";
            event.textContent = "15 million global cases.";
            cases.textContent = "15,072,261";
            deaths.textContent = "623,090";
            break;
        case 26:
            date.textContent = "August 9, 2020";
            event.textContent = "20 million global cases.";
            cases.textContent = "20,015,121";
            deaths.textContent = "732,596";
            break;
    };
}

createArrowChange();