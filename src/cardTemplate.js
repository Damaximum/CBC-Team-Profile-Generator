

function cardTemplate(input) {
    let template = 
    `
    <div class="card">
        <div class="card-body">
            <h5 class="card-title">Name: ${input.name} </h5>
            <h6 class="card-subtitle mb-2 text-muted">Icon: Title: ${input.role} </h6>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Employee Id: ${input.id} </li>
                <li class="list-group-item">Email: ${input.email}</li>
                <li class="list-group-item"></li>
            </ul>
        </div>
    </div>
    `

    return template;
};

module.exports = cardTemplate;