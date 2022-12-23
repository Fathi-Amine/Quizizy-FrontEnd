const questions = [
    {
        id:0,
        question: "Why is AWS more economical than traditional data centers for applications with varying compute workloads?",
        choices: [{answer:"Amazon EC2 costs are billed on a monthly basis",value:1},
        {answer:"Amazon EC2 costs are billed on a monthly basis",value:2},
        {answer:"Amazon EC2 instances can be launched on demand when needed.", value:3},
        {answer:"Users can permanently run enough instances to handle peak workloads.", value:4}],
        correctValue : 3,
        description: "The ability to launch instances on demand when needed allows users to launch and terminate instances in response to a varying workload.This is a more economical practice than purchasing enough on-premises servers to handle the peak load."
    },
    {
        id:1,
        question: "Which AWS service would simplify the migration of a database to AWS?",
        choices:[{answer: "AWS Storage Gateway", value: 1},
        {answer:"AWS Database Migration Service (AWS DMS)", value: 2},
        {answer:"Amazon EC2", value: 3},
        {answer:"Amazon AppStream 2.0", value: 4}],
        correctValue : 2,
        description : "AWS DMS helps users migrate databases to AWS quickly and securely. The source database remainsfully operational during the migration, minimizing downtime to applications that rely on the database. AWS DMS can migrate data to and from most widely used commercial and open-source databases."
    },
    {
        id:2,
        question:"Which AWS offering enables users to find, buy, and immediately start using software solutions in their AWS environment?",
        choices: [{answer:"AWS Config", value: 1}, {answer:"AWS OpsWorks", value:2}, {answer:"AWS SDK",value:3}, {answer:"AWS Marketplace", value: 4}],
        correctValue:4,
        description: "AWS Marketplace is a digital catalog with thousands of software listings from independent software vendors that makes it easy to find, test, buy, and deploy software that runs on AWS."
    },
    {
        id:3,
        question:"Which AWS networking service enables a company to create a virtual network within AWS?",
        choices: [{answer:"AWS Config", value: 1}, {answer:"Amazon Route 53", value:2},
        {answer:"AWS Direct Connect",value:3},
        {answer:"Amazon Virtual Private Cloud (Amazon VPC)", value:4}],
        correctValue : 4,
        description: "Amazon VPC lets users provision a logically isolated section of the AWS Cloud where users can launch AWS resources in a virtual network that they define."
    },
    {
        id:4,
        question : "Which of the following is an AWS responsibility under the AWS shared responsibility model?",
        choices : [{answer:"Configuring third-party applications", value: 1},
        {answer:"Maintaining physical hardware", value:2},
        {answer:"Securing application access and data", value: 3},
        {answer:"Managing guest operating systems", value:4}],
        correctValue: 2,
        description: "Maintaining physical hardware is an AWS responsibility under the AWS shared responsibility model."
    },
    {
        id:5,
        question: "Which component of the AWS global infrastructure does Amazon CloudFront use to ensure low-latency delivery?",
        choices : [{answer:"AWS Regions", value:1}, {answer:"Edge locations", value:2}, {answer:"Availability Zones", value:3}, {answer:"Virtual Private Cloud (VPC)", value:4}],
        correctValue: 2,
        description: "To deliver content to users with lower latency, Amazon CloudFront uses a global network of points of presence (edge locations and regional edge caches) worldwide. "
    },
    {
        id:6,
        question : "How would a system administrator add an additional layer of login security to a user's AWS Management Console?",
        choices: [{answer:"Use Amazon Cloud Directory", value:1}, {answer:"Audit AWS Identity and Access Management (IAM) roles", value:2}, {answer:"Enable multi-factor authentication", value:3}, {answer:"Enable AWS CloudTrail", value:4}],
        correctValue: 3,
        description: "Multi-factor authentication (MFA) is a simple best practice that adds an extra layer of protection on top of a username and password. With MFA enabled, when a user signs in to an AWS Management Console, they will be prompted for their username and password (the first factor—what they know), as well as for an authentication code from their MFA device (the second factor—what they have). Taken together, these multiple factors provide increased security for AWS account settings and resources."
    },
    {
        id:7,
        question: "Which service can identify the user that made the API call when an Amazon EC2 instance is terminated?",
        choices: [{answer:"AWS Trusted Advisor", value:1}, {answer:"AWS CloudTrail", value:2}, {answer:"AWS X-Ray",value:3}, {answer:"AWS Identity and Access Management (AWS IAM)", value:4}],
        correctValue: 2,
        description: "AWS CloudTrail helps users enable governance, compliance, and operational and risk auditing of their AWS accounts. Actions taken by a user, role, or an AWS service are recorded as events in CloudTrail. Events include actions taken in the AWS Management Console, AWS Command Line Interface (CLI), and AWS SDKs and APIs.",
    },
    {
        id:8,
        question: "Which service would be used to send alerts based on Amazon CloudWatch alarms?",
        choices: [{answer:"Amazon Simple Notification Service (Amazon SNS)", value:1},{answer:"AWS CloudTrail", value:2},{answer:"AWS Trusted Advisor", value:3},{answer:"Amazon Route 53",value:4}],
        correctValue: 1,
        description: "Amazon SNS and Amazon CloudWatch are integrated so users can collect, view, and analyze metrics for every active SNS. Once users have configured CloudWatch for Amazon SNS, they can gain better insight into the performance of their Amazon SNS topics, push notifications, and SMS deliveries."
    },
    {
        id:9,
        question: "Where can a user find information about prohibited actions on the AWS infrastructure?",
        choices:[{answer:"AWS Trusted Advisor",value:1}, {answer:"AWS Identity and Access Management (IAM)", value:2}, {answer:"AWS Billing Console", value: 3}, {answer:"AWS Acceptable Use Policy",value:4}],
        correctValue: 4,
        description: "The AWS Acceptable Use Policy provides information regarding prohibited actions on the AWS infrastructure"
    }
]