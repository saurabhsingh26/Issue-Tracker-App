
let getIssueForm = document.getElementById('filter-issue-form');

let getIssueJSON = document.getElementById('issue-data').getAttribute('data');

let issues = JSON.parse(getIssueJSON);

let issueList = document.getElementById('issues-list');

getIssueForm.addEventListener('submit', function (e) {
  e.preventDefault();

  
  let filteredIssues = [];

  //get all the form data
  let labelsList = getIssueForm.querySelectorAll('input[type=checkbox]');
  let labelsElements = [...labelsList].filter((Element) => Element.checked);

  let authorVal = getIssueForm.querySelector(
    'input[type=radio][name=author]:checked'
  ).value;

  let [...labelsArr] = labelsElements.map((Element) => Element.value);

  //add issue to filtered issues array
  issues.map((el) => {
    if (el.author == authorVal) {
      if (!filteredIssues.includes(el)) {
        filteredIssues.push(el);
      }
    }
    labelsArr.map((label) => {
      if (el.labels.includes(label)) {
        if (!filteredIssues.includes(el)) {
          filteredIssues.push(el);
        }
      }
    });
  });
  //create a div and add details of the filtered issues
  issueList.innerHTML = '';
  for (let issue of filteredIssues) {
    let Div = document.createElement('div');
    Div.style = 'none';
    Div.innerHTML = `
      <div class="card w-100 mb-2" >
    <div class="card-body" >
      <h4 class="card-title">Title : ${issue.title} </h4>
      <h5 class="card-title">Author : ${issue.author}</h5>
      <h6 class="card-subtitle mb-2 text-muted">
        Description : ${issue.description}
      </h6>
      Labels : ${issue.labels}
    </div>
  </div>
  `;
    issueList.appendChild(Div);
  }
});
