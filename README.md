# **Mobile Flashcards**
**Mobile Flashcards** is the third and last project from the **Udacity's React Developer Nanodegree** program.We should build a mobile application (Android or iOS - or both) that allows users to study collections of flashcards. The app will allow users to create different categories of flashcards called "decks", add flashcards to those decks, then take quizzes on those decks.The project emphasizes the use of **REACT NATIVE** bulding a mobile APP and **REDUX** to manage the application state.

## **Table of contents**
- [**Flashcards**](#mobile-flashcards)
  - [**Table of contents**](#table-of-contents)
  - [**How to install**](#how-to-install-using-ubuntu)
  - [**How to run**](#how-to-run)
    - [**Start the Client**](#start-the-client)
  - [**How it works**](#how-it-works)
    - [**Main Page**](#main-page)
    - [**Pre Quiz**](#pre-quiz)
    - [**Quiz Page**](#quiz-page)
    - [**New Deck**](#new-deck)
    - [**New Card**](#new-card)
  - [**Features**](#features)
  - [**Built with**](#built-with)
  - [**Contributing**](#contributing)
  - [**Authors**](#authors)
  - [**License**](#license)
  - [**Contact me**](#contact-me)
 

## **How to install using Ubuntu**
To clone and run this application, you'll need [Git](https://git-scm.com/) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com/)) installed on your computer. You should install as well, [expo](https://docs.expo.io/versions/latest/introduction/installation/) or [yarn](https://yarnpkg.com/lang/en/docs/install/#debian-stable). After have them installed, from your terminal run:

```bash
# Clone this repository
$ git clone https://github.com/dwolopes/mobile-flashcards

# Go into the repository and install the application dependencies
$ cd mobile-flashcards
$ yarn install
```

> [Dowload Node.Js and NPM](https://nodejs.org/en/download/).

[(Back to top)](#mobile-flashcards)

## **How to run**
After install all dependencies, follow the steps bellow to run the application(App) in  **Development mode**:

### **Start the Client**

* In this mode, hot loader is configured to be triggered on files changes.

```bash
# Clone this repository
$ cd mobile-flashcards

# Start the client
$ yarn start
```

## **How it works**

### **Main Page**
This page is the root of the APP. At this page the user can see all the created decks in a list and create a deck as well. If user does not want to create a deck, they can tap a deck to start anwser a Quiz within the deck chosen.

### **Pre Quiz**
At the main page, The user will be informed of how to start a Quiz, how to create a card and more instructions about that deck that was tapped and selected by the user. 

This Pre Quiz includes:

* The deck title
* Number of cards in the deck
* Option to start a quiz for that deck
* Option to add a new question to the deck

### **Quiz Page**

* The Quiz view starts with a question from the selected deck.
* The question is displayed, along with a button to show the answer.
* Pressing the 'Show Answer' button displays the answer.
* Buttons are included to allow the student to mark their guess as 'Correct' or 'Incorrect'
* The view displays the number of questions remaining.
* When the last question is answered, a score is displayed. This can be displayed as a percentage of correct answers or just the number of questions answered correctly.
* When the score is displayed, buttons are displayed to either start the quiz over or go back to the Individual Deck view.
* Both the 'Restart Quiz' and 'Back to Deck' buttons route correctly to their respective views.

### **New Deck**

The view includes a form for creating a new deck;

### **New Card**

The view includes a form for creating a new card within that deck;

[(Back to top)](#mobile-flashcards)

## **Features**
As the project has a lot of potencial to grow in features, I decided to add some new features beyond the default features that are demanded by the project specification.
- **Improved sort**: At the project specification it says to be able to sort posts by date or votes count, but I decided to improve the options and added Title, Comments Count together with sort order (crescent or decrescent);
- **Search bar**: Users can search for posts using key words. The words searched must be present in the posts' body, this way  the post will be returned.

[(Back to top)](#mobile-flashcards)

## **Built with**
- [REACT](https://reactjs.org/) - A JavaScript library for building user interfaces
- [Redux](https://github.com/reduxjs/redux/) - Predictable state container for JavaScript apps.
- [Redux Thunk](https://github.com/reduxjs/redux-thunk) - Thunk middleware for Redux.
- [React Router Dom](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom) - Responsible for managing routes in tge App.
- [Material-UI](https://material-ui.com/) - React components that implement Google's Material Design to style the App.

You can check the other dependencies on _package.json_ file.

[(Back to top)](#mobile-flashcards)


## **Contributing**

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## **Authors**

* **Douglas Lopes** - *Initial work* - [readable-post-react-redux](https://github.com/dwolopes/mobile-flashcards)

See also the list of [contributors](https://github.com/dwolopes/mobile-flashcards/graphs/contributors who participated in this project.

## **License**

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## **Contact me**

- [LinkedIn](https://www.linkedin.com/in/dwolopes/)

[(Back to top)](#mobile-flashcards)