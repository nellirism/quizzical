


# Quizzical Master

1. [ Description. ](#desc)
2. [ Follow the Link. ](#urlz)
3. [ Quizzical Demo. ](#demo)
4. [ User Story. ](#story)
5. [ Acceptance Criteria. ](#ac)
6. [ Pseudo Code. ](#sc)

<a name="desc"></a>
## Description

The Quizzical Quiz Master application is designed to validate your fundamental knowledge of JavaScript. It is a timer-based quiz application that contains five (5) questions presented in no particular order and stores high scores at the client-side. Each question provides multiple choice of answers. When you choose to begin the quiz, a timer will display as questions are asked with multiple choice of answers. 

If the user answers correctly, the user will gain point and the next question will be asked. If the user chose the wrong answer, an n amount of time is subtracted from the timer. Once the quiz finishes, a score will be displayed and the user will be prompted to enter his initials. The user will be given an option to play again or end the game completely. He will also be given an option to view High Scores.  



<a name="urlz"></a>
## Follow The Link:

https://nellirism.github.io/quizzical/

****************************************

<a name="demo"></a>
## Quizzical Demo

https://user-images.githubusercontent.com/71202250/115158565-a667b700-a043-11eb-9db2-a03aa8e9d25f.mp4

****************************************

<a name="story"></a>
## User Story

AS A coding enthusiast

I WANT to take a timed quiz on JavaScript fundamentals that stores high scores

SO THAT I can gauge my progress compared to my peers


<a name="ac"></a>
## Acceptance Criteria

* GIVEN I am taking a code quiz
* WHEN I click the start button
* THEN a timer starts and I am presented with a question
* WHEN I answer a question
* THEN I am presented with another question
* WHEN I answer a question incorrectly
* THEN time is subtracted from the clock
* WHEN all questions are answered or the timer reaches 0
* THEN the game is over
* WHEN the game is over
* THEN I can save my initials and score

<a name="sc"></a>
## Pseudo Code

* Create a timer attached to a button with a starting value of 0
* When timer is pressed, start a reverse countdown 
* When countdown starts, start the quiz
* The quiz questions will be on an appended page
* Append the question's multiple choice answers
* When user selects the right answer, textcontent "Correct!"
* When user selects the right answer, textcontent "Wrong!"
* Final score will keep track of how many the user got right
* Left over time will be deducted from final score 
* Final Score page will be appended onto the page
* Local Storage will store ending scores
* Retrieve another HTML page for the High Scores
* Retrieved High Scores with the player's initials and display on the page




