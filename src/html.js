const cardTemplate = require('./cardTemplate');



function htmlTemplate(teamMembers) {
    let template = `
    <!DOCTYPE html>

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Team Profile Generator</title>

    <meta name="viewport" content="width=device-width, initial-scale=1">

    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
        integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">


    <script src="https://kit.fontawesome.com/5f4b0fb1a5.js" crossorigin="anonymous" defer></script>

    <script src="../index.js" crossorigin="anonymous" defer></script>

</head>

<body>
    <style>
        .nav {
            height: 200px;
            background-color: rgb(221, 73, 73);
            color: black;
            display: flex;
            align-items: center;
            border-radius: 10px ;
            margin-bottom: 50px;
            margin-top: 2rem;
        }

        .row {
            display: flex;
            justify-content: space-around;

        }

        .card {
            width: 18rem;
            display: flex;
            justify-content: space-around;
            margin-bottom: 60px;
            background-color: rgb(161, 206, 255);
            box-shadow: 2.5px 4px rgb(138, 137, 137);
        }

        .list-group-item {
            background-color: rgba(240, 240, 240, 0.913);
        }

        footer {
            position: absolute;
            width: 100%;
            bottom: 0;
            text-align: center;
        }
    </style>

    <div class="container">
        <header>
            <ul class="nav justify-content-center">
                <li class="nav-item">
                    <h1>My Team</h1>
                </li>
            </ul>
        </header>
        <div class="row">
            ${teamMembers.map(member => cardTemplate(member))}
        </div>
    </div>


</body>

</html>
`;

    return template;
};

module.exports = htmlTemplate;