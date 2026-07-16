// ===============================
// Emergency Alerts Module
// ===============================

let alerts = JSON.parse(localStorage.getItem("alerts")) || [];

const publishAlert = document.getElementById("publishAlert");
const alertList = document.getElementById("alertList");

function displayAlerts() {

    alertList.innerHTML = "";
    document.getElementById("alertCount").textContent =
        `Total Alerts: ${alerts.length}`;

    alerts.forEach(function (alert, index) {

        const card = document.createElement("div");
        card.className = "item-card";

        card.innerHTML = `
            <h3>${alert.title}</h3>

            <p><strong>Location:</strong> ${alert.location}</p>

            <p>
                <strong>Priority:</strong>
                <span class="priority ${alert.priority.toLowerCase()}">
                    ${alert.priority}
                </span>
            </p>

            <p>${alert.description}</p>

            <button class="deleteBtn" data-index="${index}">
                Delete
            </button>
        `;

        alertList.appendChild(card);
    });

    document.querySelectorAll(".deleteBtn").forEach(function (button) {

        button.addEventListener("click", function () {

            const index = this.dataset.index;

            if (confirm("Are you sure you want to delete this alert?")) {

                alerts.splice(index, 1);
                localStorage.setItem("alerts", JSON.stringify(alerts));
                displayAlerts();

            }

        });

    });

}

publishAlert.addEventListener("click", function () {

    const title = document.getElementById("alertTitle").value.trim();
    const location = document.getElementById("alertLocation").value.trim();
    const priority = document.getElementById("alertPriority").value;
    const description = document.getElementById("alertDescription").value.trim();

    if (title === "" || location === "" || description === "") {

        alert("Please fill all fields.");
        return;

    }

    alerts.push({
        title,
        location,
        priority,
        description
    });

    localStorage.setItem("alerts", JSON.stringify(alerts));

    displayAlerts();

    document.getElementById("alertTitle").value = "";
    document.getElementById("alertLocation").value = "";
    document.getElementById("alertPriority").value = "High";
    document.getElementById("alertDescription").value = "";

});

displayAlerts();


// ===============================
// Help Requests Module
// ===============================

let helpRequests = JSON.parse(localStorage.getItem("helpRequests")) || [];

const publishHelp = document.getElementById("publishHelp");
const helpList = document.getElementById("helpList");

function displayHelpRequests() {

    helpList.innerHTML = "";
    document.getElementById("helpCount").textContent =
        `Total Requests: ${helpRequests.length}`;

    helpRequests.forEach(function (request, index) {

        const card = document.createElement("div");
        card.className = "item-card";

        card.innerHTML = `
            <h3>${request.name}</h3>

            <p><strong>Location:</strong> ${request.location}</p>

            <p><strong>Need:</strong> ${request.type}</p>

            <p>${request.description}</p>

            <button class="deleteHelpBtn" data-index="${index}">
                Delete
            </button>
        `;

        helpList.appendChild(card);

    });

    document.querySelectorAll(".deleteHelpBtn").forEach(function (button) {

        button.addEventListener("click", function () {

            const index = this.dataset.index;

            if (confirm("Are you sure you want to delete this request?")) {

                helpRequests.splice(index, 1);
                localStorage.setItem("helpRequests", JSON.stringify(helpRequests));
                displayHelpRequests();

            }

        });

    });

}

publishHelp.addEventListener("click", function () {

    const name = document.getElementById("helpName").value.trim();
    const location = document.getElementById("helpLocation").value.trim();
    const type = document.getElementById("helpType").value;
    const description = document.getElementById("helpDescription").value.trim();

    if (name === "" || location === "" || description === "") {

        alert("Please fill all fields.");
        return;

    }

    helpRequests.push({
        name,
        location,
        type,
        description
    });

    localStorage.setItem("helpRequests", JSON.stringify(helpRequests));

    displayHelpRequests();

    document.getElementById("helpName").value = "";
    document.getElementById("helpLocation").value = "";
    document.getElementById("helpType").value = "Food";
    document.getElementById("helpDescription").value = "";

});

displayHelpRequests();


// ===============================
// Resource Sharing Module
// ===============================

let resources = JSON.parse(localStorage.getItem("resources")) || [];

const publishResource = document.getElementById("publishResource");
const resourceList = document.getElementById("resourceList");

function displayResources() {

    resourceList.innerHTML = "";
    document.getElementById("resourceCount").textContent =
        `Total Resources: ${resources.length}`;

    resources.forEach(function (resource, index) {

        const card = document.createElement("div");
        card.className = "item-card";

        card.innerHTML = `
            <h3>${resource.name}</h3>

            <p><strong>Location:</strong> ${resource.location}</p>

            <p><strong>Contact:</strong> ${resource.contact}</p>

            <p>${resource.description}</p>

            <button class="deleteResourceBtn" data-index="${index}">
                Delete
            </button>
        `;

        resourceList.appendChild(card);

    });

    document.querySelectorAll(".deleteResourceBtn").forEach(function (button) {

        button.addEventListener("click", function () {

            const index = this.dataset.index;

            if (confirm("Are you sure you want to delete this resource?")) {

                resources.splice(index, 1);
                localStorage.setItem("resources", JSON.stringify(resources));
                displayResources();

            }

        });

    });

}

publishResource.addEventListener("click", function () {

    const name = document.getElementById("resourceName").value.trim();
    const location = document.getElementById("resourceLocation").value.trim();
    const contact = document.getElementById("resourceContact").value.trim();
    const description = document.getElementById("resourceDescription").value.trim();

    if (
        name === "" ||
        location === "" ||
        contact === "" ||
        description === ""
    ) {

        alert("Please fill all fields.");
        return;

    }

    resources.push({
        name,
        location,
        contact,
        description
    });

    localStorage.setItem("resources", JSON.stringify(resources));

    displayResources();

    document.getElementById("resourceName").value = "";
    document.getElementById("resourceLocation").value = "";
    document.getElementById("resourceContact").value = "";
    document.getElementById("resourceDescription").value = "";

});

displayResources();


// ===============================
// Missing Persons Module
// ===============================

let missingPersons = JSON.parse(localStorage.getItem("missingPersons")) || [];

const publishMissing = document.getElementById("publishMissing");
const missingList = document.getElementById("missingList");

function displayMissingPersons() {

    missingList.innerHTML = "";
    document.getElementById("missingCount").textContent =
        `Total Reports: ${missingPersons.length}`;

    missingPersons.forEach(function (person, index) {

        const card = document.createElement("div");
        card.className = "item-card";

        card.innerHTML = `
            <h3>${person.name}</h3>

            <p><strong>Age:</strong> ${person.age}</p>

            <p><strong>Last Seen:</strong> ${person.location}</p>

            <p>${person.description}</p>

            <button class="deleteMissingBtn" data-index="${index}">
                Delete
            </button>
        `;

        missingList.appendChild(card);

    });

    document.querySelectorAll(".deleteMissingBtn").forEach(function (button) {

        button.addEventListener("click", function () {

            const index = this.dataset.index;

            if (confirm("Are you sure you want to delete this report?")) {

                missingPersons.splice(index, 1);
                localStorage.setItem("missingPersons", JSON.stringify(missingPersons));
                displayMissingPersons();

            }

        });

    });

}

publishMissing.addEventListener("click", function () {

    const name = document.getElementById("missingName").value.trim();
    const age = document.getElementById("missingAge").value.trim();
    const location = document.getElementById("missingLocation").value.trim();
    const description = document.getElementById("missingDescription").value.trim();

    if (
        name === "" ||
        age === "" ||
        location === "" ||
        description === ""
    ) {

        alert("Please fill all fields.");
        return;

    }

    missingPersons.push({
        name,
        age,
        location,
        description
    });

    localStorage.setItem("missingPersons", JSON.stringify(missingPersons));

    displayMissingPersons();

    document.getElementById("missingName").value = "";
    document.getElementById("missingAge").value = "";
    document.getElementById("missingLocation").value = "";
    document.getElementById("missingDescription").value = "";

});

displayMissingPersons();