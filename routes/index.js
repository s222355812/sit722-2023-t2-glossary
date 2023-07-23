const express = require('express');
const app = express();

const itemList =[
  {
    'id':1,'Term':'Waterfall', 'Description': 'Waterfall is a project delivery mechanism where tasks are completed in a sequential order to achieve a specific goal. It can also be used to explain a method of software development.','Referance':'M. COUPLAND, DEVOPS Adoption Strategies: Principles, Processes,Tools, and Trends. S.l.: PACKT PUBLISHING LIMITED, 2021.'
  },
  {
    'id':2,'Term':'Continuous integration', 'Description': 'Continuous integration (CI) is the practice of quickly integrating newly developed code with the rest of the application code to be released. This saves time when the application is ready to be released. This process is usually automated and produces a build artifact at the end of the process.','Referance':'M. COUPLAND, DEVOPS Adoption Strategies: Principles, Processes,Tools, and Trends. S.l.: PACKT PUBLISHING LIMITED, 2021.'
  },
  {
    'id':3,'Term':'Continuous delivery', 'Description': 'Continuous delivery (CD) is an approach where teams release products frequently and with high quality, and with a level of predictability from source code repositories through to a production environment using automation.','Referance':'M. COUPLAND, DEVOPS Adoption Strategies: Principles, Processes,Tools, and Trends. S.l.: PACKT PUBLISHING LIMITED, 2021.'
  },
  {
    'id':4,'Term':'Continuous deployment', 'Description': 'Continuous deployment is one step beyond continuous delivery. Every change that passes through all the stages of your production pipeline is released to your customers. There is no human intervention – a failed test, at this stage, will prevent new releases to production.','Referance':'M. COUPLAND, DEVOPS Adoption Strategies: Principles, Processes,Tools, and Trends. S.l.: PACKT PUBLISHING LIMITED, 2021.'
  },
  {
    'id':5,'Term':'DevOps', 'Description': 'The practice of bringing together development and operations teams.','Referance':'M. COUPLAND, DEVOPS Adoption Strategies: Principles, Processes,Tools, and Trends. S.l.: PACKT PUBLISHING LIMITED, 2021.'
  },
  {
    'id':6,'Term':'Agile', 'Description': 'Agile is an iterative approach that focuses on collaboration, feedback, and small rapid releases.','Referance':'M. COUPLAND, DEVOPS Adoption Strategies: Principles, Processes,Tools, and Trends. S.l.: PACKT PUBLISHING LIMITED, 2021.'
  },
  {
    'id':7,'Term':'Kanban', 'Description': 'Kanban is a well-known structure used to execute Agile and DevOps programming advancement. It requires continuous communication of work limits and provides a clear view of work which is planned, in progress, and completed.','Referance':'M. COUPLAND, DEVOPS Adoption Strategies: Principles, Processes,Tools, and Trends. S.l.: PACKT PUBLISHING LIMITED, 2021.'
  },
  {
    'id':8,'Term':'Deploying', 'Description': 'The act of deployment is where you can take your built and tested application artifact and deploy it to where it needs to go. This could be to a cloud platform such as Microsoft Azure, Amazon Web Services, or Google Cloud. It could also be a mobile app store or even an on-premises data center.','Referance':'M. COUPLAND, DEVOPS Adoption Strategies: Principles, Processes,Tools, and Trends. S.l.: PACKT PUBLISHING LIMITED, 2021.'
  },
  {
    'id':9,'Term':'Testing', 'Description': 'Testing is one of the broadest terms when it comes to DevOps tooling. Here you will find tools to perform testing for a wide range of requirements. The process of testing could be anything from the unit testing of code by developers all the way through to user acceptance testing and tools that automate browser testing for web applications.','Referance':'M. COUPLAND, DEVOPS Adoption Strategies: Principles, Processes,Tools, and Trends. S.l.: PACKT PUBLISHING LIMITED, 2021.'
  },
  {
    'id':10,'Term':'Building', 'Description': 'Build tools are what enable you to take what you have developed and turn it into something that you can later deploy somewhere else. This starts with source control tooling. By far the most common such tool today is Git.','Referance':'M. COUPLAND, DEVOPS Adoption Strategies: Principles, Processes,Tools, and Trends. S.l.: PACKT PUBLISHING LIMITED, 2021.'
  }
];

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index', { title: 'SIT722', sub:'DevOps Glossary', items:itemList });
});

module.exports = app;
