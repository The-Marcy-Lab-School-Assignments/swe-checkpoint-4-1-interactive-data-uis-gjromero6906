# Short Response Questions

Answer each of these questions completely but concisely. Use the proper technical terminology. You may refer to the [Marcy Lab School Docs](https://marcylabschool.gitbook.io/marcy-lab-school-docs) or Google but do NOT copy and paste definitions or explanations verbatim.

You can earn up to 6 points for each response (3 points for writing quality, 3 points for technical content).

Before submitting your responses, use a spell checker / AI to ensure that you have no grammar or spelling mistakes.

## Question 1: Asynchronous Code

Functions like `fetch()` are "asynchronous". Explain what that means and why it is so important to be able to execute code asynchronously?

**Your Answer:**
Async (asynchronous) tells the program that a block of code will take time to complete and allows other code to continue running alongside it. The fetch() function specifically sends a request to a given destination (such as an API), typically using one of the CRUD methods, usually GET or POST. These methods are optional, as GET is the default. The fetch() function returns a Promise.

Asynchronous behavior can be compared to waiting for dough to rise in a bakery. You could sit and stare at the dough while it rises, which would be time-consuming and inefficient. Instead, you let the dough rest on the counter, set a timer, and continue doing other tasks such as cleaning the kitchen, preparing the next step, or helping customers. When the timer rings, you return to the dough.

## Question 2: GET vs. POST

What is the difference between a `GET` request and a `POST` request? Provide examples in real world applications where each might be used under the hood?

**Your Answer:**
GET and POST are part of the CRUD principles. The difference is that GET represents the R (Read) operation in CRUD, while POST represents the C (Create) operation. For example, in bakery terms, a customer might request to see pastries that are already on display (the bakery already has the items in stock). Another customer might request a custom cake (the bakery would need to create a new item). In the tech space, GET would be requesting to view someone’s profile when searching for them, while POST would be when a user uploads a picture.

## Question 3: What is Vite and Why Use It?

What is Vite? What problem does it solve? And are there alternatives?

**Your Answer:**
Vite is a build tool that provides a development server, a project starter template, and a build command that bundles your code. This means you are able to access resources outside of what is locally available to you. In contrast, using file:// can only access local files on your machine and will often result in CORS (Cross-Origin Resource Sharing) errors.
