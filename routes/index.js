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
  },
  {
    'id':21,'Term':'Docker container', 'Description': ' A container is a way of virtualizing a server. More formally, a container provides a way of virtualizing both the operating system and the hardware. This allows us to abstract (or virtualize) the resources required by our microservice. ','Referance':'M. COUPLAND, DEVOPS Adoption Strategies: Principles, Processes,Tools, and Trends. S.l.: PACKT PUBLISHING LIMITED, 2021.'
  },
  {
    'id':22,'Term':'Docker image', 'Description': 'An image is a bootable snapshot of a server (in our case, a microservice) including all the code, dependencies, and assets that it needs to run.','Referance':'M. COUPLAND, DEVOPS Adoption Strategies: Principles, Processes,Tools, and Trends. S.l.: PACKT PUBLISHING LIMITED, 2021.'
  },
  {
    'id':23,'Term':'Dockerfile', 'Description': 'The Dockerfile is a specification for an image created by Docker. Dockerfile is like a script file with instructions on how to construct the image.','Referance':'M. COUPLAND, DEVOPS Adoption Strategies: Principles, Processes,Tools, and Trends. S.l.: PACKT PUBLISHING LIMITED, 2021.'
  },
  {
    'id':24,'Term':'Docker Compose', 'Description': 'The Docker Compose file is a script that specifies how to compose an application from multiple Docker containers.','Referance':'M. COUPLAND, DEVOPS Adoption Strategies: Principles, Processes,Tools, and Trends. S.l.: PACKT PUBLISHING LIMITED, 2021.'
  },
  {
    'id':25,'Term':'Azure Storage', 'Description': 'Azure Storage is a service to store files in the cloud. We can manage the assets through the Azure Portal, through the APIs, or from the command line.','Referance':'M. COUPLAND, DEVOPS Adoption Strategies: Principles, Processes,Tools, and Trends. S.l.: PACKT PUBLISHING LIMITED, 2021.'
  },
  {
    'id':26,'Term':'MongoDB', 'Description': 'MongoDB is a popular NoSQL type of database. Its lightweight, easy to setup and use, and its convenient for microservices.','Referance':'S. Madamanchi, “Google cloud for devops engineers,” O Reilly Online Learning, https://learning.oreilly.com/library/view/google-cloud-for/9781839218019/B15587_01_Final_ASB_ePub.xhtml#_idParaDest-26 (accessed Aug. 6, 2023). '
  },
  {
    'id':27,'Term':'Cluster Storage', 'Description': 'Cluster storage refers to a storage solution that utilizes a cluster of interconnected servers or nodes to provide a unified and highly available storage infrastructure. In a cluster storage system, multiple servers work together to manage and store data. ','Referance':'M. COUPLAND, DEVOPS Adoption Strategies: Principles, Processes,Tools, and Trends. S.l.: PACKT PUBLISHING LIMITED, 2021.'
  },
  {
    'id':28,'Term':'Cloud Storage', 'Description': 'Cloud storage is a service offered by cloud providers that allows individuals and organizations to store and manage their data over the internet. Instead of relying on on-premises hardware, users can leverage the cloud providers infrastructure to store, access, and manage their data.','Referance':'M. COUPLAND, DEVOPS Adoption Strategies: Principles, Processes,Tools, and Trends. S.l.: PACKT PUBLISHING LIMITED, 2021.'
  },
  {
    'id':29,'Term':'Docker registry', 'Description': 'A Docker registry is a central repository for storing and distributing Docker container images. It serves as a key component in the Docker ecosystem, allowing developers to share and distribute container images, which are lightweight, portable, and self-contained software packages that include everything needed to run an application, including the code, runtime, libraries, and dependencies.','Referance':'S. Madamanchi, “Google cloud for devops engineers,” O Reilly Online Learning, https://learning.oreilly.com/library/view/google-cloud-for/9781839218019/B15587_01_Final_ASB_ePub.xhtml#_idParaDest-26 (accessed Aug. 6, 2023).'
  },
  {
    'id':30,'Term':'Azure Container Registry (ACR)', 'Description': 'Azure Container Registry (ACR) is a managed container registry service provided by Microsoft Azure. It is designed to store, manage, and secure container images for applications that use containerization technology, such as Docker. ','Referance':'M. COUPLAND, DEVOPS Adoption Strategies: Principles, Processes,Tools, and Trends. S.l.: PACKT PUBLISHING LIMITED, 2021.'
  },
  {
    'id':31,'Term':'RabbitMQ', 'Description': 'RabbitMQ is the message queuing software that we will use to send indirect (or asynchronous) messages from one microservice to another','Referance':'M. COUPLAND, DEVOPS Adoption Strategies: Principles, Processes,Tools, and Trends. S.l.: PACKT PUBLISHING LIMITED, 2021.'
  },
  {
    'id':32,'Term':'amqplib', 'Description': 'This npm package allows us to configure RabbitMQ and to send and receive messages from JavaScript.','Referance':'M. COUPLAND, DEVOPS Adoption Strategies: Principles, Processes,Tools, and Trends. S.l.: PACKT PUBLISHING LIMITED, 2021.'
  },
  {
    'id':33,'Term':'viewed message', 'Description': 'The message we will transmit between microservices is the viewed message. This is how the video-streaming microservice informs the history microservice that the user has watched a video.','Referance':'M. COUPLAND, DEVOPS Adoption Strategies: Principles, Processes,Tools, and Trends. S.l.: PACKT PUBLISHING LIMITED, 2021.'
  },
  {
    'id':34,'Term':'nodemon', 'Description': 'Nodemon is a utility tool used in web development for automatically restarting the server or application whenever changes are detected in the source code. ','Referance':'M. COUPLAND, DEVOPS Adoption Strategies: Principles, Processes,Tools, and Trends. S.l.: PACKT PUBLISHING LIMITED, 2021.'
  },
  {
    'id':35,'Term':'Direct messaging', 'Description': 'Direct messaging simply means that one microservice directly sends a message to another microservice and then receives an immediate and direct response.','Referance':'M. COUPLAND, DEVOPS Adoption Strategies: Principles, Processes,Tools, and Trends. S.l.: PACKT PUBLISHING LIMITED, 2021.'
  },
  {
    'id':36,'Term':'Indirect messaging', 'Description': 'Indirect messaging introduces an intermediary between the endpoints in the communication process. We add a middleman to sit between our microservices. For that reason, the two parties of the communication dont actually have to know about each other. ','Referance':'S. Madamanchi, “Google cloud for devops engineers,” O Reilly Online Learning, https://learning.oreilly.com/library/view/google-cloud-for/9781839218019/B15587_01_Final_ASB_ePub.xhtml#_idParaDest-26 (accessed Aug. 6, 2023). '
  },
  {
    'id':37,'Term':'Terraform', 'Description': 'Terraform allows us to script the creation of cloud resources and application infrastructure.','Referance':'M. COUPLAND, DEVOPS Adoption Strategies: Principles, Processes,Tools, and Trends. S.l.: PACKT PUBLISHING LIMITED, 2021.'
  },
  {
    'id':38,'Term':'Kubernetes', 'Description': 'Kubernetes is the computing platform that we use to host our microservices in production.','Referance':'M. COUPLAND, DEVOPS Adoption Strategies: Principles, Processes,Tools, and Trends. S.l.: PACKT PUBLISHING LIMITED, 2021.'
  },
  {
    'id':39,'Term':'Kubectl', 'Description': 'Kubectl is the command-line tool for interacting with a Kubernetes cluster.','Referance':'S. Madamanchi, “Google cloud for devops engineers,” O Reilly Online Learning, https://learning.oreilly.com/library/view/google-cloud-for/9781839218019/B15587_01_Final_ASB_ePub.xhtml#_idParaDest-26 (accessed Aug. 6, 2023).'
  },
  {
    'id':40,'Term':'Azure CLI', 'Description': 'We will use the Azure command-line tool to authenticate with Azure and give Terraform access to our Azure account. This tool is generally useful for managing Azure accounts and cloud resources.','Referance':'M. COUPLAND, DEVOPS Adoption Strategies: Principles, Processes,Tools, and Trends. S.l.: PACKT PUBLISHING LIMITED, 2021.'
  },
  {
    'id':41,'Term':'Hashicorp Configuration Language (HCL)', 'Description': 'HCL is the declarative configuration language in which we will define our infrastructure. Executing this code with Terraform actually creates our infrastructure in the cloud','Referance':'M. COUPLAND, DEVOPS Adoption Strategies: Principles, Processes,Tools, and Trends. S.l.: PACKT PUBLISHING LIMITED, 2021.'
  },
  {
    'id':42,'Term':'Azure Resource Groups', 'Description': 'Resource Groups are a fundamental concept in Azures resource management model and play a crucial role in simplifying resource management, deployment, and maintenance in the Azure cloud environment.','Referance':'M. COUPLAND, DEVOPS Adoption Strategies: Principles, Processes,Tools, and Trends. S.l.: PACKT PUBLISHING LIMITED, 2021.'
  },
  {
    'id':43,'Term':'Azure Container Registry', 'Description': 'Azure Container Registry (ACR) is a cloud-based container registry service provided by Microsoft Azure. ACR enables developers and organizations to store, manage, and distribute container images securely and efficiently, making it a crucial component of modern container-based application development and deployment workflows.','Referance':'M. COUPLAND, DEVOPS Adoption Strategies: Principles, Processes,Tools, and Trends. S.l.: PACKT PUBLISHING LIMITED, 2021.'
  },
  {
    'id':44,'Term':'Azure Kubernetes Service (AKS)', 'Description': 'An Azure Kubernetes Service (AKS) cluster is a managed container orchestration platform provided by Microsoft Azure. It simplifies the deployment, management, and scaling of containerized applications using Kubernetes, an open-source container orchestration tool. ','Referance':'M. COUPLAND, DEVOPS Adoption Strategies: Principles, Processes,Tools, and Trends. S.l.: PACKT PUBLISHING LIMITED, 2021.'
  },
  {
    'id':45,'Term':'Pods', 'Description': 'Pods are the smallest deployable units in Kubernetes and can contain one or more containers that share the same network namespace. Containers within a Pod can communicate with each other using localhost and share storage volumes.','Referance':'M. COUPLAND, DEVOPS Adoption Strategies: Principles, Processes,Tools, and Trends. S.l.: PACKT PUBLISHING LIMITED, 2021.'
  },
  {
    'id':46,'Term':'Bitbucket Pipelines', 'Description': 'The hosted service from Atlassian that we will use for CD to automate the deployment of our application.','Referance':'S. Madamanchi, “Google cloud for devops engineers,” O Reilly Online Learning, https://learning.oreilly.com/library/view/google-cloud-for/9781839218019/B15587_01_Final_ASB_ePub.xhtml#_idParaDest-26 (accessed Aug. 6, 2023). '
  },
  {
    'id':47,'Term':'Azure Load Balancer', 'Description': 'Azure Load Balancer is a cloud-based, fully managed networking service whose primary purpose is to distribute incoming network traffic (such as web requests or application data) across multiple virtual machines (VMs) or instances within a virtual network to ensure high availability, improved performance, and fault tolerance for applications hosted in Azure.','Referance':'M. COUPLAND, DEVOPS Adoption Strategies: Principles, Processes,Tools, and Trends. S.l.: PACKT PUBLISHING LIMITED, 2021.'
  },
  {
    'id':48,'Term':'Kubernetes cluster', 'Description':  'Kubernetes cluster is a group of interconnected computers, often referred to as nodes or instances, that work together to manage and orchestrate containerized applications. ','Referance':'M. COUPLAND, DEVOPS Adoption Strategies: Principles, Processes,Tools, and Trends. S.l.: PACKT PUBLISHING LIMITED, 2021.'
  },
  {
    'id':49,'Term':'Kubelet', 'Description': ' The kubelet is an agent that runs on each worker node and is responsible for ensuring that containers are running in a pod. It communicates with the master node to receive instructions about pod deployments and monitors the containers health.','Referance':'S. Madamanchi, “Google cloud for devops engineers,” O Reilly Online Learning, https://learning.oreilly.com/library/view/google-cloud-for/9781839218019/B15587_01_Final_ASB_ePub.xhtml#_idParaDest-26 (accessed Aug. 6, 2023).'
  },
  {
    'id':50,'Term':'Deployment Shell Script', 'Description': 'A deployment shell script is a script written in a shell scripting language, such as Bash, that automates the process of deploying software or applications to a target environment. These scripts are used by developers and system administrators to streamline and simplify the deployment process, ensuring that software is correctly and consistently installed, configured, and updated on servers or other computing resources.','Referance':'M. COUPLAND, DEVOPS Adoption Strategies: Principles, Processes,Tools, and Trends. S.l.: PACKT PUBLISHING LIMITED, 2021.'
  }
];

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index', { title: 'SIT722', sub:'DevOps Glossary', items:itemList });
});

module.exports = app;
