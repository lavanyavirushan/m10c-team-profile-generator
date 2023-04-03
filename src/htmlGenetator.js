const fs = require('fs');

function buildHTMLCard(userDetail){
    let role = "";
    if(userDetail.role === "Manager"){
        role = `<div class="card-text">office: ${userDetail.officeNumber}</div>`;
    }else if(userDetail.role === "Engineer"){
        role = `<div class="card-text">Github: ${userDetail.github}</div>`;
    }else if(userDetail.role === "Intern"){
        role = `<div class="card-text">School: ${userDetail.school}</div>`;
    }
    return `<div class="col-sm-4 mb-3">
                <div class="card">
                    <div class="card-body">
                        <h6 class="card-title mb-1">${userDetail.role}</h6>
                        <p class="card-title">${userDetail.email}</p>
                        <hr />
                        <div class="card-text">id: ${userDetail.id}</div>
                        <div class="card-text">Email: ${userDetail.email}</div>
                        ${role}
                    </div>
                </div>
            </div>`;
}

function htmlWrapper(cards){
    return `<!DOCTYPE html>
    <html>
      <head>
        <title>Bootstrap Cards Example</title>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
        />
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
      </head>
      <body>
        <div class="container">
          <div class="jumbotron">
            <h1 class="text-center mb-2">My Team</h1>
          </div>
          <div class="row">
                ${cards}        
          </div>
        </div>
      </body>
    </html>
    `
}

function generateHTML(users){
    let cards = ""
    users.forEach(element => {
        cards += buildHTMLCard(element);
    });
    let fullhtml = htmlWrapper(cards)
    fs.writeFile("./dist/index.html", fullhtml, function(err) {
        if(err) {
            return console.log(err);
        }
        console.log("The file was saved!");
    }); 

}

module.exports = generateHTML