---
title: Queensland Fire and Emergency Services Asset Management System
date: "28 April 2023"
category: [ "Showcase" ]
thumbnail: "/login.png"
description: "An overview of my capstone project for QFES."
---

# Queensland Fire and Emergency Services Asset Management System

## Introduction

Every year, QUT offers final year IT students the opportunity to work with a real world client on a year long capstone project. I was fortunate enough to be selected to work with Queensland Fire and Emergency Services (QFES) on an asset management system for their training assets alongside a team of talented individuals.

## The Problem

QFES has a large number of training assets, ranging from oxygen equipment to VR kits. They required a way to index and log these assets, as well as track their location and status. They were essentially after a check-in/check-out system, and needed to be able to do it on the go while moving around their large training facility in Brisbane.

## The Solution

Our solution was a hybrid web, mobile and desktop app built using Ionic, Capacitor and React. The app was built on an AWS backend, and utilised a number of AWS services, including Cognito, DynamoDB and lambda. These services were facilitated by the Amplify framework, however we did have to configure some services manually. Below is a visual of the entire stack.

![Structure](/capstonestructure.jpg)

## Modularity

One of the key requirements for this project was the request to be able to add many different types of assets. Asset types needed to be able to be defined, and assets needed to be able to contain other assets. This meant that we needed to build a system that was modular, and could be easily extended to add new asset types.

We did this using a combination of a DynamoDB table and a JSON schema. The DynamoDB table contained all of the assets, and the schema defined the structure of the assets. This meant that we could add new asset types by simply adding a new schema, and the app would automatically be able to handle it.

## Final Artefact

Below are some screenshots of the final product. The app is fully responsive and works on mobile, tablet and desktop. If you'd like to explore the app yourself, you can find the source code [here](https://github.com/IFB-JAKI/QFES-Assets-Public). All Aws services have been removed, so you will need to configure your own if you'd like to run it locally. This app is not licensed for commercial use or distribution.

### Login page
![Login](/login.png)

### Home page and Asset Search
![Home](/home.png)

### Asset Details
![Asset](/asset.png)

### Modular Group System
![Group](/group.png)

### Type System
![Type](/type.png)

### Type from users POV
![Type2](/typeresult.png)

### Signature Field
![Signature](/signature.png)

### Reports Export
![Reports](/reports.png)