

function cardTemplate(input) {
    let template = 
    `
    <div class="card">
        <div class="card-body">
            <h4 class="card-title">Name: ${input.name} </h4>
            <h5 class="card-subtitle mb-2 text-muted"> ${input.icon}     Title: ${input.role} </h5>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Employee Id: ${input.id} </li>
                <li class="list-group-item">Email: ${input.email}</li>
                <li class="list-group-item"> ${input.special} </li>
            </ul>
        </div>
    </div>
    `

    return template;
};

module.exports = cardTemplate;