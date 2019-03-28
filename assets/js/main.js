let comments = [
  {
    text: "I've done this and it's amazing! I'll never forget it.",
    user: "Tom Jenkinson",
    created: "Today"
  },
  {
    text: "When do you think that you'll get a chance to do this? Have you already planned it?",
    user: "Emily Walker",
    created: "Yesterday"
  },
  {
    text: "I'm thinking about this as well.",
    user: "Emily Walker",
    created: "Yesterday"
  }
];

let idea = {
  title: "Swim with a sea turtle",
  description: "We can put a description about our Idea here!",
  photoUrl: "turtle-big.jpg",
  createdOn: "27/08/2017",
  createdBy: "Frederick Rose",
  doingThis: 1184,
  comments: comments
};

const commentsText = ["I've done this and it's amazing! I'll never forget it",
                      "When do you think that you'll get a chance to do this? Have you already planned it?",
                      "I'm thinking about this as well."]; // contain the idea.comments.text array
const commentsUser = ["Tom Jenkinson", // [0]
                      "Emily Walker", //  [1]
                      "Emily Walker"]; // [2] contain the idea.comments.user array

// for (let counter = 0; counter < commentsText.length; counter ++) {
//   console.log(commentsText[counter]); // logs a text
// }

for (let i = 0; i < commentsText.length; i ++) {
  console.log(commentsText[i] + " - " + commentsUser[i]); // logs a text + user
}                                                         // I've done this and it's amazing! I'll never forget it - Tom Jenkinson
                                                          // When do you think that you'll get a chance to do this? Have you already planned it? - Emily Walker
                                                          // I'm thinking about this as well. - Emily Walker


for (let key in idea) {
  console.log(key); // logs the key
};                  // title
                    // description
                    // photoUrl
                    // createdOn
                    // createdBy
                    // doingThis
                    // comments

for (let key in idea) {
  console.log(idea[key]); // logs the key value
};                        // Swim with a sea turtle
                          // We can put a description about our Idea here!
                          // turtle-big.jpg
                          // 27/08/2017
                          // Frederick Rose
                          // 1184
                          // (3) [{…}, {…}, {…}] Array

for (let i in idea) {
       if (Array.isArray(idea[i])) {
         idea[i].forEach(comment => {
           console.log(comment.text); // this [logs the key value] + [logs a text + user]
         });
       }
     }




//Excercise 22
//========================
const commentAuthor = ["Claire Price"];
const commentText = [" -- I'm thinking about this as well. | "];
const commentDate = ['10. June 2016 - '];
const commentTime = ['23:11'];

// 1) A simple function
//------------------------

function combineTwoStrings() {
  return console.log(commentAuthor + commentText);
}
combineTwoStrings(); // returns  Claire Price -- I'm thinking about this as well. |

// 2) A more complex function
// Version 1
//------------------------

function combineTwoStrings(author, text) {
  TwoStrings = author + text;
  console.log(TwoStrings);
}

combineTwoStrings(commentAuthor, commentText); // returns  Claire Price -- I'm thinking about this as well. |

// Version 2
//------------------------

function combineTwoStrings(author, text) {
  return console.log(author + text);
}

combineTwoStrings(commentAuthor, commentText); // returns  Claire Price -- I'm thinking about this as well. |


// 3) A reuseable function
//------------------------

function combineTwoStrings(author, text) {
  TwoStrings = author + text;
  return TwoStrings;
}

const firstHalf = combineTwoStrings(commentAuthor, commentText);
const secondHalf = combineTwoStrings(commentDate, commentTime);
const commentBlock = firstHalf + secondHalf;
console.log(commentBlock);

// porfesor answer in bookmarks

// Third answer
     function combineTwoStrings(str1, str2) {
       return str1 + str2;
     }

     const HalfOne = combineTwoStrings(
       "Claire Price",
       " -- I'm thinking about this as well. | "
     );

     const HalfTwo = combineTwoStrings("10. June 2016 - ", "23:11");

     const Block = firstHalf + secondHalf;
     console.log(Block);
