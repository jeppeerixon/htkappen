import { getUserInput, addUserID, createNewUser, displayError} from "./userfunctions";
import { userID } from "./models/Userid";
import { tisdag, torsdag, passtre, passfyra } from "./data";

//let bajskorv = JSON.parse(localStorage.getItem("tisdag") || "[]");



export let userIDlist: userID[] = JSON.parse(localStorage.getItem("userData") || "[]"); ;

let weeklyProgList = [tisdag, torsdag, passtre, passfyra];

let daysDoneCount: number = 0;
let currentDayCount: number = 0;
let currentLiftCount: number = 0;
let dayName: [string, string, string, string] = ["Tisdag", "Torsdag", "Pass Tre", "Pass Fyra"];
let dayNameShort: [string, string, string, string] = ["TIS", "TOR", "TRE", "FYRA"];

(document.getElementById("oneRepMax") as HTMLFormElement)?.addEventListener(
  "submit",
  (e: SubmitEvent) => {getUserInput(e)}
);

(document.getElementById("showSettings") as HTMLLinkElement)?.addEventListener('click', openUserInput);

function showCorrectDay(text: any) {
  let dayContainer: HTMLHeadingElement = document.getElementById(
    "currentProg"
  ) as HTMLHeadingElement;

  dayContainer.innerHTML = `${dayName[text]} >`;
  currentDayCount = text;
  console.log(currentDayCount)

};


function createProgram(workouts: any) {
  //localStorage.setItem("workouts", JSON.stringify(workouts));

  console.log("createProgram");

  let setContainer: HTMLUListElement = document.getElementById(
    "repsAndSets"
  ) as HTMLUListElement;
  
  if (setContainer) {
    setContainer.innerHTML = "";
  }

  let ovningContainerInfo: HTMLParagraphElement = document.getElementById(
    "selectedOvningInfo"
  ) as HTMLParagraphElement;

  if (ovningContainerInfo) {
    ovningContainerInfo.innerHTML = "";
  }

  if (currentLiftCount > workouts.length-1) {
    console.log("hej")
    return
  }

  for (let i = 0; i < workouts[currentLiftCount].percent.length ; i++) {
    let li: HTMLLIElement = document.createElement("li");
    let whatPR = workouts[currentLiftCount].TypeOfPr == "clean" ? userIDlist[0].cleanPR : userIDlist[0].snatchPR;
    // jo den funkar!
    li.classList.add("repsAndSets__text");
    li.innerHTML = `
    ${workouts[currentLiftCount].reps[i]} 
    reps @
    ${Math.round(whatPR * (workouts[currentLiftCount].percent[i]/100))}
    kg 
    (${workouts[currentLiftCount].percent[i]}%)
    `;
    li.addEventListener("click", (e) => {
      if ((e.currentTarget as HTMLLIElement).classList.contains("repsAndSets__text--done")) {
        (e.currentTarget as HTMLLIElement).classList.remove("repsAndSets__text--done");
      } else {
        (e.currentTarget as HTMLLIElement).classList.add("repsAndSets__text--done");
        checkIfOvningDone(workouts[currentLiftCount]);
      }
      
    });
    ovningContainerInfo.innerHTML = workouts[currentLiftCount].description;
    setContainer.appendChild(li);
  }
}

function showCorrectOvning(workouts: any) {
  console.log("showCorrectOvning")
  
  let ovningContainer: HTMLParagraphElement = document.getElementById(
    "selectedOvning"
  ) as HTMLParagraphElement;

  if (ovningContainer) {
    ovningContainer.innerHTML = "";
  }
  
  createProgram(workouts);  

  for (let i = 0; i < workouts.length; i++) {
    let spam: HTMLSpanElement = document.createElement("span");
    if (workouts[i].done == true) {
      spam.classList.add("currentSelectedOvningDone");
      spam.innerHTML = `${workouts[i].name} >`;

      spam.addEventListener("click", () => {
      currentLiftCount = i;
      createProgram(workouts);
      showCorrectOvning(weeklyProgList[currentDayCount]);
      //checkIfDayIsDone(workouts)
      //lägg i "active" button grej kanske
    });
      

    } else {
      // funkar ej ??? why ??? spam.classList.remove("currentSelectedOvning");
      spam.innerHTML = `${workouts[i].name} >`;
      if (i == currentLiftCount) {
        spam.classList.add("currentSelectedOvning");
      }
      spam.addEventListener("click", () => {
      currentLiftCount = i;
      spam.classList.add("currentSelectedOvning");
      createProgram(workouts);
      showCorrectOvning(weeklyProgList[currentDayCount]);
      //lägg i "active" button grej kanske
    });

    }    

    ovningContainer.appendChild(spam);

  };

}

export function showWeeklyProg() {

  console.log("showWeeklyProg");

  let progContainer: HTMLDivElement = document.getElementById(
    "weeklyProgram"
  ) as HTMLDivElement;
  
  if (progContainer) {
    progContainer.innerHTML = "";
  }

  for (let i = 0; i < weeklyProgList.length; i++) {
    let btn: HTMLButtonElement = document.createElement("button");
    
    btn.innerHTML = `${dayNameShort[i]}`;
    if (userIDlist[0].daysDone[i] == true) {
      btn.classList.add("doneWeek");
    }
    btn.addEventListener("click", () => {
      currentLiftCount = 0;
      showCorrectDay(i);
      showCorrectOvning(weeklyProgList[i]);
      let progStart: HTMLHeadingElement = document.getElementById("currentProg") as HTMLHeadingElement;

      progStart.scrollIntoView()
      
    })
    progContainer.appendChild(btn);
  }
  

}

export function openUserInput() {
  let inputContainer: HTMLDivElement = document.getElementById(
    "setUser"
  ) as HTMLDivElement;

  if (inputContainer.style.display == "flex") {
    inputContainer.style.display = "none";
  } else {
    inputContainer.style.display = "flex";
  }
}

export function displayUserInfo(text: string, snatchNr: number, cleanNr: number ) {
  let nameContainer: HTMLHeadingElement = document.getElementById(
    "showUserName"
  ) as HTMLHeadingElement;
  nameContainer.innerHTML = `Hej ${text} `

  let snatchPBContainer: HTMLHeadingElement = document.getElementById(
    "showSnatchPB"
  ) as HTMLHeadingElement;
  snatchPBContainer.innerHTML = `${snatchNr}`

  let cleanPBContainer: HTMLHeadingElement = document.getElementById(
    "showCleanPB"
  ) as HTMLHeadingElement;
  cleanPBContainer.innerHTML = `${cleanNr}`

};

function checkIfDayIsDone(workouts: any) {

  // används ej ??? 
  let btn: HTMLButtonElement = document.querySelector('[data-id="0"]') as HTMLButtonElement;

  let list: [string, string, string] = ["Kör passet igen", "High Five!", "Nästa pass"];

  let spanCount: HTMLSpanElement = document.getElementById("passCount") as HTMLSpanElement;

  let setContainer: HTMLUListElement = document.getElementById(
    "repsAndSets"
  ) as HTMLUListElement;

  // denna ifsats måste lösas på ett bättre sätt...
  if (workouts[0].done == true && workouts[1].done == true  && workouts[2].done == true && workouts[3].done == true && workouts[4].done == true ) {
    if (setContainer) {
      setContainer.innerHTML = "";
    }

    userIDlist[0].daysDone[currentDayCount] = true;

    daysDoneCount = 0;

    for (let i = 0; i < userIDlist[0].daysDone.length; i++) {
      if ( userIDlist[0].daysDone[i] == true) {
        daysDoneCount++
      }
    }
    
    localStorage.setItem("userData", JSON.stringify(userIDlist));

    console.log("DAY IS DONE!!")
    console.log("btn.classList.add(");
    showWeeklyProg();
    spanCount.innerHTML = daysDoneCount.toString();

    for (let i = 0; i < list.length; i++) {
      let li: HTMLLIElement = document.createElement("li");
      li.classList.add("repsAndSets__text");
      li.innerHTML = `${list[i]}`;
      li.addEventListener("click", (e) => {
        let option = (e.currentTarget as HTMLLIElement).innerHTML;
        if (option == list[0]) {
          //skriv om till en forloop när du orkar
          workouts[0].done = false; workouts[1].done = false; workouts[2].done = false; workouts[3].done = false; workouts[4].done = false;
          currentLiftCount = 0;
          showCorrectDay(currentDayCount)
          showCorrectOvning(weeklyProgList[currentDayCount])
          console.log(weeklyProgList[currentDayCount]);
        } else {
          currentDayCount++
          currentLiftCount = 0;
          showCorrectDay(currentDayCount)
          showCorrectOvning(weeklyProgList[currentDayCount])
          console.log(weeklyProgList[currentDayCount]);
          
        
        }
        
      });
  
      setContainer.appendChild(li);
    }
  }
  

}


// funkar MEN borde bytas och jämföras med "setsDone" i datan!
function checkIfOvningDone(workoutOvning: any) {

  let liList: NodeListOf<HTMLLIElement> = document.querySelectorAll(".repsAndSets__text") as NodeListOf<HTMLLIElement>;
  let liArray = Array.from(liList);
  let doneList: NodeListOf<HTMLLIElement> = document.querySelectorAll(".repsAndSets__text--done") as NodeListOf<HTMLLIElement>;
  let doneArray = Array.from(doneList);

  if (liArray.length == doneArray.length) {
    workoutOvning.done = true;
    console.log(workoutOvning);
    console.log(currentLiftCount)
    currentLiftCount++;
    console.log(currentLiftCount)
    showWeeklyProg()
    showCorrectOvning(weeklyProgList[currentDayCount]);
    checkIfDayIsDone(weeklyProgList[currentDayCount]);

  }

}

if (userIDlist[0] == null) {
  openUserInput();
} else {
  displayUserInfo(userIDlist[0].name, userIDlist[0].snatchPR, userIDlist[0].cleanPR);
  showWeeklyProg();
}

//1. get user info on load (local storage)
//2. load/publish weekly program
//3. on click display selected workout
//3.1 update correct info
//4. workout finish = update weekly program inf