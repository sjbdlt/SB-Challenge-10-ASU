const inquirer = require('inquirer')
const fs = require('fs');
const shapes = require('./lib/shapes')

inquirer
    .prompt([
        {
            type: 'input',
            name: 'logoName',
            message: 'What three letters do you want on your logo?'
        },
        {
            type: 'input',
            name: 'logofontColor',
            message: 'What color do you want for the lettering on your logo?'
        },
        {
            type: 'checkbox',
            name: 'logoShape',
            message: 'What shape do you want for your logo?',
            choices: ['Circle','Triangle','Square']
        },
        {
            type: 'input',
            name: 'logobgrdColor',
            message: 'What background color do you want for your logo?'
        }
    ])  
    .then((answers) => {

        ckshape = new shapes(answers.logoShape);

        const iwidth = 300
        const iheight = 200

        let imgshape = ""

        if (answers.logoShape == "Circle"){
            imgshape = `<circle cx="100" cy="100" r="100" fill="${answers.logobgrdColor}"/>`
        }else if (answers.logoShape == "Triangle"){
            imgshape = `<polygon points="100 1, 200 200, 0 100" fill="${answers.logobgrdColor}"/>`
        }else {
            imgshape = `<rect x="40" y="40" width="100" height="100" fill="${answers.logobgrdColor}"/>`
        }
        
        let imgname = ""

        imgname = `<svg version="1.1" width="${iwidth}" height="${iheight}" xmlns="http://www.w3.org/2000/svg">
        <g> 
        ${answers.logoShape}
        ${imgshape}
        <text x="90" y="100" text-anchor="middle" font-size="60" fill="${answers.logofontColor}">${answers.logoName}</text>
        </g>
        </svg>
        `

        fs.writeFile('logo.svg', imgname, (err) =>
        err ? console.log(err) : console.log('Generated logo.svg'));
     }) 
    .catch((err) => console.log(err));  