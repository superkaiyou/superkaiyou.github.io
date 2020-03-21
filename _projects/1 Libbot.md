---
name: Libbot
tools: [UX Design, UX Research, Visual Design]
image: https://user-images.githubusercontent.com/48978683/77219922-a465b880-6b10-11ea-9a2b-3d0397809103.png
description: Libbot is a library assistant for helping people use public library resources
---
# Libbot 
![banner](https://user-images.githubusercontent.com/48978683/77219823-c3b01600-6b0f-11ea-811b-edee15beaaf8.png)


**Project Info:**    Individual Project

**Role:**    UX Designer, User Researcher, Visual Designer

**Duration:**    10/2018 - 12/2018

### Problem Statement

I have been used to borrowing books from public libraries in my hometown since I was a kid. However, I am frustrated that every time I need to be back and forth between different libraries to borrow the book I want. It wastes time and sometimes makes me annoyed. Therefore, I began to ask the question:

>##### How might we create a borrowing experience for public library users to check the availability of books and borrow books easily?

### Understand


#### Public Library Web Heuristic Evaluation
The public library in my hometown has its web-based system for users to use the library resources. So I do a Heuristic Evaluation for the website to know the problems.
![heuristic evaluation](https://user-images.githubusercontent.com/48978683/75280559-ab343080-57db-11ea-9d33-04a0fddaf53f.png "H E")


#### Interview & Contextual Observation

To explore the problem space and study for specific pain points from my users. I observe people coming to borrow book in public libraries. Then I interviewed 6 of them to know about their own diverse experiences. Based on the 1 on 1 interview, I make a empathy map to understand them. Then I specifically divide them into two groups: Borrow Planner and Borrow Adventurer

#### Empathy Map
![empathy map](https://user-images.githubusercontent.com/48978683/75614725-a76d1a80-5b09-11ea-8ad5-19aea19172ca.jpg)

#### Persona
![persona new](https://user-images.githubusercontent.com/48978683/75616010-43eae900-5b19-11ea-881e-2eabe63f185c.png)

###  User Journey Map
After building the persona, I depict user's experience map to get into their mindset and understand pain points, which help me identify the opportunities.
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
- Flexible: The design will offer flexible options.
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
- Library users expect clear visualization as well, because it is easy and efficient to understand the information. 

### Decide
#### All In One
The feedaback and insights I find from my pre-test help me move forward. So I sketch my solution which combines three impactful parts: graphic information display, chatbot assistant and a delivery system to help public library users borrow books effortlessly.
![all in one](https://user-images.githubusercontent.com/48978683/75845181-57f74a80-5da6-11ea-9705-b6fc96feb59c.png)

### Prototype
#### Moodboard
Before I began making my design prototype, I collected ideas and got inspiration from them. It's better than starting from nowhere.
![moodboard](https://user-images.githubusercontent.com/48978683/77210904-8aa87f00-6ad8-11ea-97ad-13cf38e9dda7.png)

#### Storyboard
I dive into the prototype stage to illustrate my concept --Libbot. I start from drawing the storyboard mapping out the experience I want to create. The Libbot will include these function units:
- Searching 
- Reservation and Reservation Cancel 
- Borrow Status Check
- Pick-up Location Choices 
- Navigation Map 
- Sending Remind 

![libbotstoryboard](https://user-images.githubusercontent.com/48978683/75923689-9c7cf780-5e33-11ea-8612-a3e58646d451.png)

#### Create Chatbot Pesona
In the beginning, I used one of the public library building images as my Libbot persona avatar. I tested it with 4 people, they all said it can hardly build an emotional connection with the chatbot if it uses a concrete building to represent itself. Then I changed it to a librarian photo and tested it with people. The feedback is that the human photo makes people feel the Libbot is a friendly librarian which can help you borrow books, however, the Libbot is not a real human and using a human avatar makes them feel weird. **Based upon the feedback I have, I began to focus on creating a persona who can make people feel friendly, knowledgeable and helpful rather than tricking them into thinking they're talking to a human being.** Then I chose to use an emoji style avatar because  in their mindset people think an emoji is cute and friendly. And they are used to sned emoji to express their emotion.  

![avatar board](https://user-images.githubusercontent.com/48978683/77210231-dce8a080-6ad6-11ea-86f5-72ee60f32b68.png)


#### Lo-Fi Sketch
Then I started to sketch my design. Based on the insights and my design principles of **effortlessness, flexiblity and accessible**, I focus on parts:

- Make an experience building emotional connection with users.
- Offer guideline for new users.
- Make an effoertless borrowing experience.
- Offer friendly conservation experience.
- Offer clear information visualization.

{% capture carousel_images %}
https://user-images.githubusercontent.com/48978683/77209179-f6d4b400-6ad3-11ea-8841-5ce823346a7c.png
https://user-images.githubusercontent.com/48978683/77209178-f6d4b400-6ad3-11ea-821a-9021f42ff7e2.png
{% endcapture %}
{% include elements/carousel.html %}
#### Conversation Flow

![Libbot user flow](https://user-images.githubusercontent.com/48978683/76050174-873bc200-5f34-11ea-85e6-28d40080251d.png)

#### Final Design
##### Begin using
To create an experience building emotional connection, I designed a conversation way to help user login.
![login](https://user-images.githubusercontent.com/48978683/77219816-b09d4600-6b0f-11ea-8976-f4185392e109.png)

##### Features guideline
To help user know what they can do with Libbot, I designed a quick guide for them.
![Guide](https://user-images.githubusercontent.com/48978683/77219958-1a6a1f80-6b11-11ea-806d-8e758629b2a1.png)


##### Borrow process
User can chat with Libbot to search and borrow books effortlessly.
![conversation borrowing](https://user-images.githubusercontent.com/48978683/77220735-63be6d00-6b19-11ea-9fb3-9cbd2e095dab.png)



##### Pickup
User can easily check when and where they can pickup the books.
![pickup](https://user-images.githubusercontent.com/48978683/77219987-80ef3d80-6b11-11ea-9a96-3d0f674fd5c3.png)

##### Remind
Libbot wil send remind to user before the return deadline. And with good data visualization, user can easily know how long they can keep books.
![remind](https://user-images.githubusercontent.com/48978683/77220006-cd3a7d80-6b11-11ea-83d0-bde3594b7a6a.png)

##### Check borrowing history
User can review their borrowing history.
![Me](https://user-images.githubusercontent.com/48978683/77220030-1c80ae00-6b12-11ea-8b3a-1c5c243a354a.png)

##### Whole Wireframe

![whole wireframe](https://user-images.githubusercontent.com/48978683/77220751-76d13d00-6b19-11ea-81fd-58c36846c908.png)

##### Interactive Prototype
Play my [Interactive Prototype](https://kaiyou96235.invisionapp.com/public/share/JS12BGJZV9#screens/476875549)



### Validate
#### User Test
I conduct usability tests with 3 people in the library. And their feedback helps me find insights which can help me polish the design in the future

- Users speak some sentences that are not included in the existing design. When this occasion happens, the chatbot can't offer a suitable response to users, which leads to an unexpected situation. So users can't finish their current tasks when things go wrong. **So I should design not only for the desired situation but also the wrong situation.**
- When dealing with borrow time, it easily makes misleading meaning. Users think the chatbot doesn't ask a clear question about the time. I need to be careful in dealing with the questions and responses related to time.

### Reflection

- Accessibility is important: no matter what your idea is and what your target users are, it is necessary to include all types of potential users into your design. The human-centered design has called for designing for people. But the inclusive design should be implemented as well. In my future design, I will incorporate voice into my chatbot in order to improve the accessibility.
- Design chatbot persona and refine prompts: creating a suitable persona for a communication assistant is a huge challenge. A good persona can show its personality and help users learn and know best from the conversation. Meanwhile, the prompts should be simple and clear. When I write the prompts, I should keep asking what would this persona say or do in this situation.
- Voice interface prototype: there are few tools for quickly prototyping the interactive voice experience. During my design phase, I have tried Adobe XD, Botsociety, Principle and Dialogflow. For designers, these digital tools are not efficient enough for prototyping the interactive voice experience. The time cost is too high. So conducting multiple pre-tests using doodling and wizard of oz is super helpful when I was prototyping the interactive voice experience. 

