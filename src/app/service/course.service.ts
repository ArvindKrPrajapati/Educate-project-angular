import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CourseService {
 course:any[]=[
   {
    id:4,
    name:"Angular",
    intro:"Angular is a JavaScript Framework Developed at Google and written in typescript language (typescript is superset of JavaScript we will come to typescript later) AngularJs was the first version written in JavaScript  after that we call only angular from its 2nd version which was re-written in typescript. There is no such a full video on angular in youtube according to me that will teach you the whole concept in one single video or playlist so i brought you a full free Angular course from beginning to advance with clear concept but it will take time upto 20-24 hour of long video which depends on you that how much time will it take for you to learn from 24 hour long video",
    pre:["Html","css","JavaScript(ES6)","typescript(optional)"],
    link:[{
        name:"Angular",
        link:"https://youtu.be/C8JcGqQdcPI"
    },{
      name:"Angular CLI",
      link:"https://youtube.com/playlist?list=PL6n9fhu94yhWUcq5Pc16uf8YKXoZ87Vh_"
    },{
      name:"Angular CRUD",
      link:"https://youtube.com/playlist?list=PL6n9fhu94yhXwcl3a6rIfAI7QmGYIkfK5"
    },{
      name:"Angular continue",
      link:"https://youtube.com/playlist?list=PL6n9fhu94yhWNJaDgh0mfae_9xoQ4E_Zj"
    }
    ]
   },
   
   {
    id:5,
    name:"ReactJs",
    intro:"ReactJs is a JavaScript library Developed at Facebook used for making frotend web apps. ReactJs is very fast and easy to learn .ReactJs is getting more and more popular then angular and there are a lots of internship and job opportunity presents in the world. Leaening React is fun when you do coding along with videos and make projects along with the tutorial there is a video for 10 behiner to advance label project by the same teacher/youtuber .Go watch and start learning",
    pre:["Html","css","JavaScript(ES6)"],
    link:[{
        name:"React Js full course",
        link:"https://youtu.be/iZhV0bILFb0"
    },{
      name:"Projects on ReactJs",
      link:"https://youtu.be/ly3m6mv5qvg"
    }
    ]
   },
   {
    id:6,
    name:"VueJs",
    intro:"Vue.js is an open-source model–view–viewmodel front end JavaScript framework for building user interfaces and single-page applications. It was created by Evan You, and is maintained by him and the rest of the active core team members",
    pre:["Html","css","JavaScript(ES6)"],
    link:[{
        name:"Vue js",
        link:"https://youtu.be/4deVCNJq3qc"
    }
   ]
   },
   {
    id:7,
    name:"Angular Material",
    intro:"Angular Material is a UI component library for Angular  developers. Angular Material components help in constructing attractive, consistent, and functional web pages and web applications while adhering to modern web design principles like browser portability, device independence, and graceful degradation.",
    pre:["Html","css","JavaScript(ES6)","Angular"],
    link:[{
        name:"Angular Material",
        link:"https://youtu.be/jUfEn032IL8"
    }]
   },
   {
    id:8,
    name:"Php",
    intro:"PHP (recursive acronym for PHP: Hypertext Preprocessor) is a widely-used open source general-purpose scripting language that is especially suited for web development and can be embedded into HTML.What distinguishes PHP from something like client-side JavaScript is that the code is executed on the server, generating HTML which is then sent to the client. The client would receive the results of running that script, but would not know what the underlying code was. You can even configure your web server to process all your HTML files with PHP, and then there's really no way that users can tell what you have up your sleeve..",
    pre:["Html","css","JavaScript"],
    link:[{
        name:"Php",
        link:"https://youtube.com/playlist?list=PL0b6OzIxLPbyrzCMJOFzLnf_-_5E_dkzs"
     },{
       name:"Php OOPs",
       link:"https://youtube.com/playlist?list=PL0b6OzIxLPbwoi6Urr4LZTz2AMMCtzqDt"
     }]
   },
   {
    id:9,
    name:"NodeJs",
    intro:"According yo Wikipedia Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser. Node.js lets developers use JavaScript to write command line tools and for server-side scripting—running scripts server-side to produce dynamic web page content before the page is sent to the user's web browser. Consequently, Node.js represents a JavaScript everywhere paradigm,[6] unifying web-application development around a single programming language, rather than different languages for server-side and client-side scripts.",
    pre:["JavaScript(ES6)"],
    link:[{
        name:"NodeJs ( part 1 of complete)",
        link:"https://youtu.be/TNV0_7QRDwY"
    },{
      name:"Nodejs(comprehensive 3 hour course)",
      link:"https://youtu.be/RLtyhwFtXQA"
    }]
   },
   {
    id:10,
    name:"Python",
    intro:"According to Wikipedia Python is an interpreted, high-level and general-purpose programming language. Python's design philosophy emphasizes code readability with its notable use of significant indentation. Python is dynamically-typed and garbage-collected. It supports multiple programming paradigms, including structured (particularly, procedural), object-oriented and functional programming. Python is often described as a batteries included language due to its comprehensive standard library.Guido van Rossum began working on Python in the late 1980s, as a successor to the ABC programming language, and first released it in 1991 as Python 0.9.0.[32] Python 2.0 was released in 2000 and introduced new features, such as list comprehensions and a garbage collection system using reference counting and was discontinued with version 2.7.18 in 2020.[33] Python 3.0 was released in 2008 and was a major revision of the language that is not completely backward-compatible and much Python 2 code does not run unmodified on Python 3. Python consistently ranks as one of the most popular programming languages. ",
    pre:["No Pre-requisite"],
    link:[{
        name:"Python",
        link:"https://youtu.be/_uQrJ0TkZlc"
    }]
   },
   {
    id:1,
    name:"Html",
    intro:"Hyper Text Markup Language (html) is a mark-up Language use to build the skeleton of web page html is the first thing you should learn if you are thinking to learn web dev.Watch videos and start learning",
    pre:["No Pre-requisite Required"],
    link:[{
        name:"Html",
        link:"https://youtube.com/playlist?list=PL0b6OzIxLPbxStBQ21C2toa5uQMqHEoRT"
    }]
   },
   {
    id:2,
    name:"Css",
    intro:"cascading style sheet (css) is a very powerful styling sheet used to make web pages colorful and design amd look better this is the second thing you should learn at first you dont have to become expert but learn basics watch approx 50-60 vidoes of the playlist to move further to learn to JavaScript .css is a bridge between html and JavaScript you have to learn html to learn css and you should be knowning css to learn JavaScript.",
    pre:["Html"],
    link:[{
        name:"css",
        link:"https://youtube.com/playlist?list=PL0b6OzIxLPbzDsI5YXUa01QzxOWyqmrWw"
    }]
   },
   {
    id:3,
    name:"JavaScript",
    intro:"JavaScript is a very powerful and popular language owned by according to Wikipedia Alongside HTML and CSS, JavaScript is one of the core technologies of the World Wide Web.[10] Over 97% of websites use it client-side for web page behavior,[11] often incorporating third-party libraries.[12] All major web browsers have a dedicated JavaScript engine to execute the code on the user's device.As a multi-paradigm language, JavaScript supports event-driven, functional, and imperative programming styles. It has application programming interfaces (APIs) for working with text, dates, regular expressions, standard data structures, and the Document Object Model (DOM).",
    pre:["Html","css"],
    link:[{
        name:"JavaScript basic",
        link:"https://youtube.com/playlist?list=PL0b6OzIxLPbx-BZTaWu_AF7hsKo_Fvsnf"
    },{
      name:"JavaScript Advance (ES6)",
      link:"https://youtube.com/playlist?list=PL0b6OzIxLPbzvz4j1N4J8zCY8mu3l29MG"
    }]
   }
   ,
   {
    id:11,
    name:"Ruby",
    intro:"Ruby is an interpreted, high-level, general-purpose programming language. It was designed and developed in the mid-1990s by Yukihiro  Matsumoto in Japan. Ruby is dynamically typed and uses garbage collection. It supports multiple programming paradigms, including procedural, object-oriented, and functional programming. According to the creator, Ruby was influenced by Perl, Smalltalk, Eiffel, Ada, BASIC, and Lisp ",
    pre:['Basic Programming knowledge (optional)','concept of OOP(optional)'],
    link:[{
        name:"Ruby",
        link:"https://youtu.be/t_ispmWmdjY"
    }
    ]
   }
 ];
  constructor() { }
  
  getCourse(id){
    return this.course.find((data)=> {
      return data.id===id;
    });
  }
}
