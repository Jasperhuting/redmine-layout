function setRestyle() {
  const tickets = document.querySelectorAll(".name a");

  for (i = 0; i < tickets.length; i++) {
    const labels = document.createElement("span");
    const textPointsContainer = document.createElement("span");
    const activeUser =
      tickets[i].parentElement.parentElement.querySelector(".user.active");
    if (activeUser) {
      activeUser.textContent =
        tickets[i].parentElement.parentElement.querySelector(
          ".user a"
        ).textContent;
    }
    textPointsContainer.classList.add("textPointsContainer");
    labels.classList.add("labels-container");
    const ticketNumberSpan = document.createElement("span");
    ticketNumberSpan.classList.add("ticket-number");
    ticketNumberSpan.textContent =
      "#" + tickets[i].href.split("/")[tickets[i].href.split("/").length - 1];
    const points =
      tickets[i].parentElement.parentElement.querySelector(".hours");
    let textpoints = "-";
    if (points) {
      textpoints = points.textContent.replace("sp)", "").replace("(", "");
    }
    if (textPointsContainer) {
      textPointsContainer.textContent = textpoints;
    }

    if (tickets[i].text.includes("[FRONTEND]")) {
      const label = document.createElement("span");
      label.classList.add("label");
      label.classList.add("FE");
      const text = tickets[i].text.replace("[FRONTEND]", "");
      tickets[i].text = text;
      label.textContent = "FE";
      tickets[i].appendChild(label);
      labels.appendChild(label);
    }
    if (tickets[i].text.includes("[REVIEW]")) {
      const label = document.createElement("span");
      label.classList.add("label");
      label.classList.add("RE");
      const text = tickets[i].text.replace("[REVIEW]", "");
      tickets[i].text = text;
      label.textContent = "RE";
      tickets[i].appendChild(label);
      labels.appendChild(label);
    }
    if (tickets[i].text.includes("[TEST]")) {
      const label = document.createElement("span");
      label.classList.add("label");
      label.classList.add("TEST");
      const text = tickets[i].text.replace("[TEST]", "");
      tickets[i].text = text;
      label.textContent = "TEST";
      tickets[i].appendChild(label);
      labels.appendChild(label);
    }
    if (tickets[i].text.includes("[ACC]")) {
      const label = document.createElement("span");
      label.classList.add("label");
      label.classList.add("ACC");
      const text = tickets[i].text.replace("[ACC]", "");
      tickets[i].text = text;
      label.textContent = "ACC";
      tickets[i].appendChild(label);
      labels.appendChild(label);
    }
    if (tickets[i].text.includes("[SPIKE]")) {
      const label = document.createElement("span");
      label.classList.add("label");
      label.classList.add("SP");
      const text = tickets[i].text.replace("[SPIKE]", "");
      tickets[i].text = text;
      label.textContent = "SP";
      tickets[i].appendChild(label);
      labels.appendChild(label);
    }
    if (tickets[i].text.includes("Just Brands Events")) {
      const label = document.createElement("span");
      label.classList.add("label");
      label.classList.add("JBE");
      const text = tickets[i].text.replace("Just Brands Events", "");
      tickets[i].text = text;
      label.textContent = "JBE";
      tickets[i].appendChild(label);
      labels.appendChild(label);
    }
    if (tickets[i].text.includes("[BACKEND]")) {
      const label = document.createElement("span");
      label.classList.add("label");
      label.classList.add("BE");
      const text = tickets[i].text.replace("[BACKEND]", "");
      tickets[i].text = text;
      label.textContent = "BE";
      tickets[i].appendChild(label);
      labels.appendChild(label);
    }
    tickets[i].parentElement.classList.add("has-label");
    tickets[i].appendChild(labels);
    labels.appendChild(ticketNumberSpan);
    labels.appendChild(textPointsContainer);
  }

  // document.querySelectorAll('.name a')[0].text
  function singleSelect(e) {
    if (e.target.classList.value !== "name has-label") {
      return;
    }
    const ticketNumberText = e.target.querySelector("a").href.split("/")[
      e.target.querySelector("a").href.split("/").length - 1
    ];
    const tempTextarea = document.createElement("textarea");
    document.body.appendChild(tempTextarea);
    tempTextarea.value = ticketNumberText;
    tempTextarea.select();
    document.execCommand("copy");
    document.body.removeChild(tempTextarea);
    return;
  }

  document.addEventListener("click", singleSelect);

  const backend = ["1191", "920"];
  const frontend = ["1253", "355"];
  const project = ["1244"];
  const justbrands = ["326", "1080", "1238"];
  const rest = ["530", "5", "421"];

  const teamMembers = [].concat.apply(
    [],
    [backend, frontend, project, justbrands, rest]
  );

  document
    .querySelector(".project-members")
    .querySelectorAll("span[data-id]")
    .forEach(function (member) {
      if (!teamMembers.includes(member.dataset.id)) {
        member.remove();
      } else {
        member.querySelector("img").remove();
      }
      if (backend.includes(member.dataset.id)) {
        member.setAttribute("data-role", "backend");
      }
      if (frontend.includes(member.dataset.id)) {
        member.setAttribute("data-role", "frontend");
      }
      if (project.includes(member.dataset.id)) {
        member.setAttribute("data-role", "project");
      }
      if (justbrands.includes(member.dataset.id)) {
        member.setAttribute("data-role", "justbrands");
      }
      if (rest.includes(member.dataset.id)) {
        member.setAttribute("data-role", "rest");
      }
    });

  const userSelector = document.querySelector("#values_assigned_to_id_1");
  if (userSelector) {
    userSelector.querySelectorAll("option").forEach(function (item) {
      if (!teamMembers.includes(item.value)) {
        console.log(item);
        item.remove();
      }
    });
  }

  const members = document
    .querySelector(".project-members")
    .querySelectorAll("span[data-id]");
  var membersArr = [].slice.call(members).sort(function (a, b) {
    return a.dataset.role > b.dataset.role ? 1 : -1;
  });
  const roleArray = [];
  membersArr.forEach(function (member) {
    if (!roleArray.includes(member.dataset.role)) {
      const span = document.createElement("span");
      span.classList.add("role");
      span.innerText = member.dataset.role;
      document.querySelector(".project-members").appendChild(span);
    }
    document.querySelector(".project-members").appendChild(member);
    roleArray.push(member.dataset.role);
  });

  // document
  //   .querySelector(
  //     'div.container-fixed > table:nth-child(2) th[data-column-id="8"]'
  //   )
  //   .remove();
  // document.querySelector('.issues-board [data-id="8"]').remove();

  document
    .querySelector(
      'div.container-fixed > table:nth-child(2) th[data-column-id="5"]'
    )
    .remove();
  document.querySelector('.issues-board [data-id="5"]').remove();
}

if (window.localStorage.getItem("RESTYLE") === "1") {
  document.body.classList.add("restyle");
  setRestyle();
}
