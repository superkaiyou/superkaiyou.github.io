---
name: Libbot
tools: [UX Design, UX Research, Visual Design]
image: https://user-images.githubusercontent.com/48978683/76275821-a13e1300-625a-11ea-8a27-650758406cc4.png
description: Libbot is a library assistant for helping people use public library resources
---
# Libbot 
![pagebanner1](https://user-images.githubusercontent.com/48978683/76275780-89ff2580-625a-11ea-8e38-f308d39dc883.png)

**Project Info:**    Individual Project

**Role:**    UX Designer, User Researcher, Visual Designer

**Duration:**    10/2018 - 12/2018

### Problem Statement

I have been used to borrowing books from public libraries in my hometown since I was a kid. However, I am frustrated that everytime I need to be back and forth between different libraries to borrow the book I want. It wastes time and sometimes make me annoyed. Therefore, I began to ask the question:

>##### How might we create a borrowing experience for public library users to check the availabilty of books and borrow books easily?

### Design Outcome
![libbot](https://user-images.githubusercontent.com/48978683/76278640-72c43600-6262-11ea-8eea-7b680d393293.gif)


### Understand


#### Public Library Web Heuristic Evaluation
Public library in my hometown have its web-based system for users to use the library resources. So I do a Heuristic Evaluation for the website to know the problems.
![heuristic evaluation](https://user-images.githubusercontent.com/48978683/75280559-ab343080-57db-11ea-9d33-04a0fddaf53f.png "H E")


#### Interview & Contextual Observation

In order to explore the problem space and study for specific pain points from my users. I observe people coming to borrow book in public libraries. Then I interviewed 6 of them to know about their own diverse experiences. Based on the 1 on 1 interview, I make a empathy map to understand them. Then I specifically divide them into two groups: Borrow Planner and Borrow Adventurer

#### Empathy Map
![empathy map](https://user-images.githubusercontent.com/48978683/75614725-a76d1a80-5b09-11ea-8ad5-19aea19172ca.jpg)

#### Persona
![persona new](https://user-images.githubusercontent.com/48978683/75616010-43eae900-5b19-11ea-881e-2eabe63f185c.png)

###  User Journey Map
After building the persona, I depict user's experience map in order to get into their mindset and understand pain points, which help me identify the opportunities.
![Emma](https://user-images.githubusercontent.com/48978683/75709523-d2ce4180-5c90-11ea-87fb-6628a638055e.png)
![Cola](https://user-images.githubusercontent.com/48978683/75709691-2b9dda00-5c91-11ea-8f34-3b6d2fea2ead.png)

### Define
#### Insight & Design Principle
Based on the research I have above, I find those insights:

- Current public library system requires a high time cost to use and misses flexible reservation function
- Saving time and improving efficiency are important for library users during the borrowing process
- Being back and forth between different library and submiting repeated information make users annoyed
- Users easily forget to return books on time

I also establish the design principles that will drive my design decisions:

- Effortless: The easy thing will be easier and the hard things will be possible.
- Insightful: Multiple sources and methods will be used to satisfy user's needs.
- Attentive: The design will be all age users friendly.
- Accessible: The design will be inclusive and accessible to all type of users.

### Sketch
#### Crazy 8's
Then, based on the insights I have,I begin to brainstorm ideas for helping library users borrow books. I conduct a crazy 8's exercises to brainstorm ideas.
![crazy8](https://user-images.githubusercontent.com/48978683/75837746-cb439100-5d93-11ea-8e8a-dba955273a29.png)
Then I pre-test my initial 8 ideas with people who coming to library to borrow books. I ask them to vote for the ideas which they think are helpful and explain why they prefer those ideas. 
![Crazy 8 voting](https://user-images.githubusercontent.com/48978683/75837749-ce3e8180-5d93-11ea-8c38-8f7156bf4783.png)
Then I find:

- Most of library users hope that the library can deliver the books to them, or at least they can pick up those books at one selected place. Rest of them feel they'd like to go to the library and enjoy the process of using the physical space.
- Most of library users think a smart chatbot is more friendly than a simple Application. Because it makes them feel like a friendly librarian.
- Library users expect the graphic information as well, because it is easy and efficient to understand the information and specify whether it is the book they want.

### Decide
#### All In One
The feedaback and insights I find from my pre-test help me move forward. So I sketch my solution which combines three impactful parts: graphic information display, chatbot assistant and a delivery system to help public library users borrow books effortlessly.
![all in one](https://user-images.githubusercontent.com/48978683/75845181-57f74a80-5da6-11ea-9705-b6fc96feb59c.png)

### Prototype
#### Storyboard
I dive into the prototype stage to illustrate my concept --Libbot. I start from drawing the storyboard mapping out the experience I want to create. The Libbot will include these function units:
- Searching 
- Reservation and Reservation Cancel 
- Pick-up Location Choices 
- Navigation Map 
- Sending Remind 

![libbotstoryboard](https://user-images.githubusercontent.com/48978683/75923689-9c7cf780-5e33-11ea-8612-a3e58646d451.png)

#### User Flow

![libbotflow](https://user-images.githubusercontent.com/48978683/76276603-a0a67c00-625c-11ea-9f48-fbab85730e62.png)

#### Create Chatbot Pesona
At beginning, I used one of public library building image as my Libbot persona avatar. I tested it with 4 people, they all said it can hardly build emotion connection with the chatbot if it uses a concrete building to represent itself. Then I changed it to a librarian photo and tested with people. The feedback is that the human photo makes people feel the Libbot is a friendly librarian which can help you borrow books, however, the Libbot is not a real human and using a human avatar makes them feel weird. **Based upon the feedback I have, I began to focus on creating a persona who can make people feel friendly, knowledgeable and helpful rather than tricking them into thinking they're talking to a human being.**  Then I chose to design a panda avatar, because people think panda is their cute and friendly friend in their mindset. To make it feel knowledgeable, it will handle a book in its paw. 
![Avatar](https://user-images.githubusercontent.com/48978683/76251985-6322fe00-621e-11ea-9fb4-236933956e13.png)

#### Wireframe
I draw the wireframe to show how users can borrow a book by using Libbot
![libbotflow](https://user-images.githubusercontent.com/48978683/76265351-ae4b0a00-623a-11ea-8e2e-e68a593a91c6.png)

### Validate
#### User Test
I conduct usability tests with 3 people in library. And their feedback help me find insights which can help me polish the design in the future

- Users speak some sentences that are not included in the existing design. When this occasion happens, the chatbot can't offer suitable response to users, which lead to a unexpected situation. So users can't finish their current tasks when things go wrong. **So I should design not only for the desired situation but also the wrong situation.**
- When deal with borrow time, it eaisy makes missleading meaning. Users think the chatbot doesn't ask clear question about the time. I need to be careful dealing with the questions and responses related to time.

### Reflection

- Accessbility is important: no matter what your idea is and what your target users are, it is neccessary to include all types of potential users into your design. The human centered design has called for designing for people. But the inclusive design shoule be implemented as well. In my future design, I will incorperate voice into my chatbot in order to improve the accessibility.
- Design chatbot persona and refine prompts: creating a suitable persona for communication asstant is a huge chanllenge. A good persona can show its personality and help users learn and know best from the conversation. Meanwhile, the prompts should be simple and clear. When I write the promps, I should keep ask what would this persona say or do in this situation.
- Voice interface prototype: there are few tools for quickly prototyping the interactive voice experience. During my design phase, I have tried Adobe XD, Botsociety, Principle and Dialogflow. For designers, these digital tools are not efficient enough for prototyping the interactive voice experience. The time cost is too high. So conducting mutilple pre-tests using doodling and wizard of oz is super helpful when I was prototyping the interactive voice experience. 
