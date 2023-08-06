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
  },
  {
    'id':11,'Term':'Deployment time', 'Description': 'The time that elapses between the code being released after the test phase to preproduction and ultimately production, including the ready state of the infrastructure.','Referance':'M. COUPLAND, DEVOPS Adoption Strategies: Principles, Processes,Tools, and Trends. S.l.: PACKT PUBLISHING LIMITED, 2021.'
  },
  {
    'id':12,'Term':'Deployment failure detection time', 'Description': 'This KPI strongly relates to the previous one. Failures will occur, but then the question is, how fast are these detected and when will mitigating actions to resolve these issues be taken? This KPI is often also referred to as Mean Time to Recovery (MTTR). This is the most important KPI in DevOps cycles.','Referance':'M. COUPLAND, DEVOPS Adoption Strategies: Principles, Processes,Tools, and Trends. S.l.: PACKT PUBLISHING LIMITED, 2021.'
  },
  {
    'id':13,'Term':'Deployment failure rate', 'Description': 'This refers to the rate of outages that occur after a deployment. Ideally, this should be zero, but this is not very realistic. Deployments, especially when the change rate is high,  will fail every now and then. Obviously, the number should be as low as possible.','Referance':'M. COUPLAND, DEVOPS Adoption Strategies: Principles, Processes,Tools, and Trends. S.l.: PACKT PUBLISHING LIMITED, 2021.'
  },
  {
    'id':14,'Term':'Change lead time', 'Description': 'This is the time that elapses between the last release and the next change to occur. Subsequently, it is measured in terms of how long the team will need to address the change. Shorter lead times indicate that the team works efficiently.','Referance':'M. COUPLAND, DEVOPS Adoption Strategies: Principles, Processes,Tools, and Trends. S.l.: PACKT PUBLISHING LIMITED, 2021.'
  },
  {
    'id':15,'Term':'Full cycle time', 'Description': 'The total time that elapses for each iteration or each deployment.','Referance':'M. COUPLAND, DEVOPS Adoption Strategies: Principles, Processes,Tools, and Trends. S.l.: PACKT PUBLISHING LIMITED, 2021.'
  },
  {
    'id':16,'Term':'Infrastructure as Code (IaC)', 'Description': 'A software engineering approach that allows infrastructure provisioning, configuration, and management to be defined and managed using code, typically in a high-level domain-specific language','Referance':'S. Madamanchi, “Google cloud for devops engineers,” O Reilly Online Learning, https://learning.oreilly.com/library/view/google-cloud-for/9781839218019/B15587_01_Final_ASB_ePub.xhtml#_idParaDest-26 (accessed Aug. 6, 2023). '
  },
  {
    'id':17,'Term':'Configuration as Code (CaC)', 'Description': 'A software development practice that involves managing and maintaining system configurations and infrastructure settings in the form of version-controlled code. In the context of DevOps, CaC extends the principles of Infrastructure as Code (IaC) to include configurations for various components of an application or system, such as databases, application settings, network configurations, and security policies.','Referance':'M. COUPLAND, DEVOPS Adoption Strategies: Principles, Processes,Tools, and Trends. S.l.: PACKT PUBLISHING LIMITED, 2021.'
  },
  {
    'id':18,'Term':'VOICE model', 'Description': 'VOICE stands for Value, Objectives, Indicators, Confidence, and Experience. The idea behind this model is that any IT delivery should deliver value to someone, typically, the end customer of a business. Value sets the objectives for IT delivery and these objectives are measured using indicators. Indicators also measure whether the pursued value will be achieved.','Referance':'M. COUPLAND, DEVOPS Adoption Strategies: Principles, Processes,Tools, and Trends. S.l.: PACKT PUBLISHING LIMITED, 2021.'
  },
  {
    'id':19,'Term':'Service-Level Agreement (SLA)', 'Description': 'SLA is an explicit or implicit contract with your users that includes consequences of meeting (or missing) the SLOs they contain.They signify the business factor that binds the customer and service provider and represent the consequences of what happens when availability or customer','Referance':'S. Madamanchi, “Google cloud for devops engineers,” O Reilly Online Learning, https://learning.oreilly.com/library/view/google-cloud-for/9781839218019/B15587_01_Final_ASB_ePub.xhtml#_idParaDest-26 (accessed Aug. 6, 2023).'
  },
  {
    'id':20,'Term':'Service-Level Objective (SLO)', 'Description': 'Service level objectives (SLOs) specify a target level for the reliability of your service.Customers have specific expectations from a service and these expectations are characterized by specific indicators or SLIs that are tailored per the user journey. SLOs are a way to measure customer happiness and their expectations by ensuring that the SLIs are consistently met and are potentially reported before the customer notices an issue.','Referance':'M. COUPLAND, DEVOPS Adoption Strategies: Principles, Processes,Tools, and Trends. S.l.: PACKT PUBLISHING LIMITED, 2021.'
  }
];

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index', { title: 'SIT722', sub:'DevOps Glossary', items:itemList });
});

module.exports = app;
