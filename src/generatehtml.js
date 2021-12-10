const Engineer = require("../lib/Engineer");

function generateHTML(team){
   let html = `
   <!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <meta http-equiv="X-UA-Compatible" content="IE=edge">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <title>Team</title>
       <style>
        body{margin: 0;background: honeydew; text-align: center;}
        header {background: darkgreen;color: white;box-shadow: 0 0 5px black;margin-bottom: 25px; padding: 5px;}
        section {display: inline-block;margin: 10px;width: 200px;vertical-align: top;padding: 5px;border-radius: 10px;box-shadow: 0 0 5px black;}
        .Manager{background: lightgreen;}
        .Engineer{background: darkseagreen;}
        .Intern{background: darkkhaki;}
       </style>
   </head>
   <body>
   <header>
    <h1>the team</h1>
   </header>
   `;
for(let emp of team){
    const role = emp.getRole();
    html+=`
    <section class="${role}">
    <h3>${role}</h3>
    <h2>${emp.getName()}</h2>
    <p>id: ${emp.getId()}</p>
    <p>email: ${emp.getEmail()}</p>
    `;
    switch (role){
        case 'Manager':html+=`<p>office number: ${emp.getOfficeNumber()}</p>`;break;
        case "Engineer":html+=`<p>github: ${emp.getGithub()}</p>`;break;
        case "Intern":html+=`<p>school: ${emp.getSchool()}</p>`;break;
    }
    html+="</section>";
}
   html+=`
   </body>
</html>
   `;
   return html;
}

module.exports = generateHTML;