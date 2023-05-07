---
title: Plugins - The Future of ChatGPT
date: "7 May 2023"
category: [ "Showcase" ]
thumbnail: "/chatgpt.png"
description: "Enhancing Workflows with OAuth-Integrated Plugins"
---

# The Future of ChatGPT: Enhancing Workflows with OAuth-Integrated Plugins

## Introduction

The emergence of ChatGPT has revolutionized conversational AI applications, and a new feature called plugins will be releasing soon. These plugins will unlock new possibilities for workers, allowing them to seamlessly extend ChatGPT's capabilities and integrate it into their office. They will allow chatGPT to have access to the internet, albiet through very specific endpoints. In this article, we'll explore the potential of these plugins using a simple demonstration.

To illustrate these concepts, we'll walk through an example API in Python, complete with OAuth integration and dummy data for projects and users routes.

> Please note that ChatGPT plugins are still under development and not yet ready for production use. The example provided here is for demonstration purposes only. Also, whether this is a morally good idea or not is left up to the reader.

This post isn't a how to guide, as the API is not yet live. I may update this in the future once I've had a chance to properly use it. If you'd like some examples of what a live site would look like, the [docs are public at the moment](https://platform.openai.com/docs/plugins/introduction).

## Understanding OAuth and Gaining Access to Internal Resources:

OAuth, a widely adopted authorization protocol, plays a crucial role in facilitating secure access to internal company resources. By incorporating OAuth into ChatGPT plugins, companies can ensure that users can only access protected resources once they have successfully authenticated themselves.

## A scenario

In this example, our mock API will only give us some simple user data and some fake projects with details. I mainly want to show how this can be adapted to use any data, and I'd like for you to think how this could be used in your workplace. 

I'll be asking chatgpt to send an email to a potential client in our client database about an upcoming project, 'project 3'.

### The data

In a live situation, this would probably come from another api used for managing projects, such as Jira. For our demo, this is good enough.

```json
projects_data = [
    {
        "id": 1,
        "name": "Fusion Reactor Development",
        "description": "This project aims to research and develop a prototype fusion reactor for clean and sustainable energy generation.",
        "deadline": "2023-06-30",
        "details": "The Fusion Reactor Development project requires a multidisciplinary team of scientists, engineers, and experts in nuclear physics. The team will focus on designing advanced plasma confinement systems, developing high-temperature superconductors, and optimizing energy extraction processes. The project will also involve extensive simulations and experiments to achieve controlled nuclear fusion and harness its immense potential as an efficient and carbon-neutral energy source.",
    },
    {
        "id": 2,
        "name": "Deep Space Exploration",
        "description": "Embark on an exciting journey to explore the uncharted territories of deep space and uncover the secrets of the universe.",
        "deadline": "2023-07-15",
        "details": "The Deep Space Exploration project aims to push the boundaries of human knowledge by conducting ambitious space missions to distant galaxies, nebulae, and exoplanets. The team will develop advanced propulsion systems capable of achieving near-light speeds, design autonomous spacecraft for long-duration interstellar travel, and employ state-of-the-art telescopes and spectroscopy instruments for celestial observations. The project will also involve collaboration with international space agencies and astrophysics research institutions to exchange data and findings, fostering global scientific cooperation.",
    },
    {
        "id": 3,
        "name": "Virtual Eco-City Simulation",
        "description": "Experience a sustainable future in the virtual world with the Virtual Eco-City Simulation.",
        "deadline": "2023-08-01",
        "details": "The Virtual Eco-City Simulation is an innovative project that aims to create a realistic and interactive virtual environment to promote sustainability and educate individuals about eco-friendly practices. It simulates an entire city, complete with residential areas, commercial districts, transportation systems, and natural landscapes. Users can explore the city, learn about sustainable urban planning, monitor resource consumption, and experiment with green technologies. The project aims to inspire individuals to adopt eco-conscious behaviors in their real lives and contribute to building a greener and more environmentally friendly future.",
    }
]

users_data = [
    {"id": 1, "name": "John Smith", "email": "user1@example.com", company: "N/A"},
    {"id": 2, "name": "Emily Johnson", "email": "user2@example.com", company: "Example Client"},
    {"id": 3, "name": "Alec Parkes", "email": "user3@example.com", company: "Example Company"}
]

my_data = {
  userID: 3
}
```

## Creating an Example API with some simple routes:

Now, let's dive into a (very) simplified example of an API. I've set up 3 routes behind an Oauth login. I'm not comfortable posting a full project without the ability to actually test the project, as plugins are still a closed beta product.

```python
@app.route('/projects')
@oauth.require_oauth('projects')
def get_projects():
    return dummydata

@app.route('/users')
@oauth.require_oauth('users')
def get_users():
  return dummydata

@app.route('/me')
@oauth.require_oauth('me')
def get_me():
  return 
```

## Creating a plugin file

ChatGPT requires that an `ai-plugin.json` file is available at `./well-known/ai-plugin.json`.

It takes the format of:

```json
{
    "schema_version": "v1",
    "name_for_human": "MyOfficeProjects Plugin",
    "name_for_model": "projects",
    "description_for_human": "Plugin for managing users and projects. You can read users and project data",
    "description_for_model": "Plugin for managing users and projects. You can read users and project data",
    "auth": {
        "type": "oauth",
        "client_url": "https://www.example.com/oauth",
        "scope": "",
        "authorization_url": "https://www.example.com/auth/oauth_exchange",
        "authorization_content_type": "application/json",
        "verification_tokens": {
            "openai": "Replace_this_string_with_the_verification_token_generated_in_the_ChatGPT_UI"
        }
    },
    "api": {
        "type": "openapi",
        "url": "https://www.example.com/openapi.yaml",
        "is_user_authenticated": false
    },
    "logo_url": "https://www.example.com/logo.png",
    "contact_email": "support@example.com",
    "legal_info_url": "https://www.example.com/legal"
}
```

Finally, we need to define the endpoints of our API in yaml format:

```yaml
openapi: 3.0.1
info:
    title: MyOfficeProjects Plugin
    description: A plugin that allows the user to fetch details about current projects for xy company, and users related to those projects.
    version: "v1"
servers:
    - url: https://www.example.com
paths:
    /projects:
        get:
            operationId: getProjects
            summary: Get the list of projects
            responses:
                "200":
                    description: OK

    /users:
        get:
            operationID: getUsers
            summary: Get the list of users
            responses:
              "200":
                  description: OK
    
    /me:
        get:
            operationID: getMe
            summary: Get the userID of the person accessing the model
            responses:
              "200":
                  description: ok
```

Thats the bare minimum required for creating an api that can interface with chatGPT and allow your session access to internal resources. A more fleshed out example would include the ability to pull information about the company, and would include a fully working example of a Oauth flask API. Perhaps that would be an exercise for when I can properly use plugins.

## Back to our scenario

ChatGPT can now access our project data when specified. If you've used chatGPT before, you'd know it wouldn't be much effort to ask for an email written to a potential client. The model also knows which user is making the call using the /me endpoint.

### The prompt:

```
Emily Johnson is a prospective client, could you write an email from myself reaching out about our virtual city project.
```

### The result (shortened):

```
Dear Emily Johnson,

I hope this email finds you well. My name is Alec Parkes, and I represent Example Company. 
I recently came across your work and expertise in the field of sustainable urban planning, 
and I was truly impressed by your insights and dedication to creating environmentally conscious cities.

I wanted to take this opportunity to introduce you to an innovative project we are currently working on, 
called the Virtual Eco-City Simulation. Our team has been developing ...
```

## Going forward

Whether this is a good idea or not is left up to the reader. At the end of the day, you're sending your information into a black box and getting useful results back. As AI becomes more commonplace, we may see companies run their own models to keep all data in house. 

I hope the simplicity of my example didn't get in the way of the possibilities this could hold. For example, an internal database of real estate properties could have descriptions and advertisements written about them in minutes. A travel agency could generate a limitless amount of potential holidays (and advertisements for them) based off of nothing more than hotel and flight data. 