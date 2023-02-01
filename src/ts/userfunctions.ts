import { IAddResponse } from "./models/IAddResult";
import { userID } from "./models/Userid";
import { openUserInput, userIDlist, displayUserInfo, showWeeklyProg } from "./script"

export function getUserInput(e: SubmitEvent) {
  {
    e.preventDefault();

    let userInput: string = (
      document.getElementById("userName") as HTMLInputElement
    ).value;

    let prSnatchInput: string = (
      document.getElementById("snatchRepMaxValue") as HTMLInputElement
    ).value;
    let prSnatchNumber: number = parseInt(prSnatchInput);

    let prCleanInput: string = (
      document.getElementById("cleanRepMaxValue") as HTMLInputElement
    ).value;
    let prCleanNumber: number = parseInt(prCleanInput);

    let doneDays: [boolean, boolean, boolean, boolean] = [false, false, false, false];
    
    createNewUser(userInput, prSnatchNumber, prCleanNumber, doneDays, userIDlist);

    openUserInput();

    localStorage.setItem("userData", JSON.stringify(userIDlist));

  };
}

export function addUserID(nameText: string, snatchMax: number, cleanMax: number, doneDays: [boolean, boolean, boolean, boolean], newUserInfo: userID[]): IAddResponse {
  if (nameText.length > 2 || Number.isNaN(snatchMax) == false || Number.isNaN(cleanMax) == false) {
    let newUser = new userID(nameText, snatchMax, cleanMax, doneDays);
    newUserInfo.unshift(newUser); 
    console.log(newUser);
    return { success: true, error: "" };
  } else {
    return { success: false, error: "Fyll i rätt info!" };
  }
}

export function createNewUser(nameText: string, snatchMax: number, cleanMax: number, doneDays: [boolean, boolean, boolean, boolean], newUserInfo: userID[]) {
  let result = addUserID(nameText, snatchMax, cleanMax, doneDays,newUserInfo);

  if (result.success) {
    console.log(result);
    console.log(newUserInfo[0].name);
    showWeeklyProg();
    displayUserInfo(nameText, snatchMax, cleanMax )
  } else {
    displayError(result.error, true);
  }
}

export function displayError(error: string, show: boolean) {
  let errorContainer: HTMLDivElement = document.getElementById(
    "error"
  ) as HTMLDivElement;

  errorContainer.innerHTML = error;

  if (show) {
    errorContainer.classList.add("show");
  } else {
    errorContainer.classList.remove("show");
  }
}

// export function changeTodo(todo: Todo) {
//   todo.done = !todo.done;
// }

// export function removeAllTodos(todos: Todo[]) {
//   todos.splice(0, todos.length);
// }
