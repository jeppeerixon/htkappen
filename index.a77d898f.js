class e{constructor(e,n,t,s){this.name=e,this.snatchPR=n,this.cleanPR=t,this.daysDone=s}}function n(n){{n.preventDefault();let s=document.getElementById("userName").value,r=document.getElementById("snatchRepMaxValue").value,o=parseInt(r),c=document.getElementById("cleanRepMaxValue").value;!function(n,t,s,r,o){let c=function(n,t,s,r,o){if(n.length>2||0==Number.isNaN(t)||0==Number.isNaN(s)){let c=new e(n,t,s,r);return o.unshift(c),{success:!0,error:""}}return{success:!1,error:"Fyll i rätt info!"}}(n,t,s,r,o);c.success?(console.log(c),console.log(o[0].name),m(),y(n,t,s)):function(e,n){let t=document.getElementById("error");t.innerHTML=e,n?t.classList.add("show"):t.classList.remove("show")}(c.error,!0)}(s,o,parseInt(c),[!1,!1,!1,!1],t),u(),localStorage.setItem("userData",JSON.stringify(t))}}let t=JSON.parse(localStorage.getItem("userData")||"[]"),s=[[{name:"Ryck nacke",percent:[23,28,30,35,37,40,43],reps:[3,3,3,3,3,3,3],setsDone:[!1,!1,!1,!1,!1],description:"utan bendriv 6x3 på 40%",done:!1,TypeOfPr:"snatch"},{name:"Styrkeryck",percent:[52,55,57,60,64,67,70,73],reps:[3,3,3,3,3,3,3,3],setsDone:[!1,!1,!1,!1,!1,!1],description:"",done:!1,TypeOfPr:"snatch"},{name:"Stöt",percent:[52,55,57,60,64,67,70,73],reps:[3,3,3,3,3,3,3,3],setsDone:[!1,!1,!1,!1,!1,!1],description:"",done:!1,TypeOfPr:"clean"},{name:"Stötdrag",percent:[83,87,92,97,102,107,110,113],reps:[5,5,5,5,5,5,5,5],setsDone:[!1,!1,!1,!1,!1,!1],description:"ovan knät",done:!1,TypeOfPr:"clean"},{name:"Bakböj",percent:[63,67,70,74,78,82,85,88],reps:[3,3,3,3,3,3,3,3],setsDone:[!1,!1,!1,!1,!1,!1],description:"",done:!1,TypeOfPr:"clean"},{name:"Press bakom nacke",percent:[51,53,55,57,60,62,65,68],reps:[3,3,3,3,3,3,3,3],setsDone:[!1,!1,!1,!1,!1,!1],description:"",done:!1,TypeOfPr:"snatch"}],[{name:"Ryck nacke",percent:[23,28,30,35,37,40,43],reps:[3,3,3,3,3,3,3],setsDone:[!1,!1,!1,!1,!1],description:"utan bendriv 5-7 sets x3 på 40%",done:!1,TypeOfPr:"snatch"},{name:"Ryckböj",percent:[48,53,58,63,68,72,75,78],reps:[3,3,3,3,3,3,3,3],setsDone:[!1,!1,!1,!1,!1,!1],description:"",done:!1,TypeOfPr:"snatch"},{name:"Vändning",percent:[56,59,62,65,68,72,75,78],reps:[3,3,3,3,3,3,3,3],setsDone:[!1,!1,!1,!1,!1,!1],description:"",done:!1,TypeOfPr:"clean"},{name:"Kickstöt",percent:[52,55,57,60,64,67,70,73],reps:[3,3,3,3,3,3,3,3],setsDone:[!1,!1,!1,!1,!1,!1],description:"ovan knät",done:!1,TypeOfPr:"clean"},{name:"Frontböj",percent:[63,67,70,74,78,82,85,88],reps:[3,3,3,3,3,3,3,3],setsDone:[!1,!1,!1,!1,!1,!1],description:"",done:!1,TypeOfPr:"clean"},{name:"Sittande press",percent:[29,30,32,33,35,37,40,43],reps:[5,5,5,5,5,5,5,5],setsDone:[!1,!1,!1,!1,!1,!1],description:"",done:!1,TypeOfPr:"clean"}],[{name:"Ryck nacke",percent:[23,28,30,35,37,40,43],reps:[3,3,3,3,3,3,3],setsDone:[!1,!1,!1,!1,!1],description:"utan bendriv 5-7 sets x3 på 40%",done:!1,TypeOfPr:"snatch"},{name:"Ryck nacke",percent:[52,55,57,60,64,67,70,73],reps:[3,3,3,3,3,3,3,3],setsDone:[!1,!1,!1,!1,!1,!1],description:"snatch balance",done:!1,TypeOfPr:"snatch"},{name:"Stöt",percent:[52,55,57,60,64,67,70,73],reps:[2,2,2,2,2,2,2,2],setsDone:[!1,!1,!1,!1,!1,!1],description:"",done:!1,TypeOfPr:"clean"},{name:"Stötdrag",percent:[79,83,87,92,97,102,105,108],reps:[3,3,3,3,3,3,3,3],setsDone:[!1,!1,!1,!1,!1,!1],description:"",done:!1,TypeOfPr:"clean"},{name:"Bakböj",percent:[67,71,75,79,83,87,90,93],reps:[3,3,3,3,3,3,3,3],setsDone:[!1,!1,!1,!1,!1,!1],description:"",done:!1,TypeOfPr:"clean"},{name:"Press",percent:[40,42,45,47,49,52,55,58],reps:[5,5,5,5,5,5,5,5],setsDone:[!1,!1,!1,!1,!1,!1],description:"",done:!1,TypeOfPr:"clean"}],[{name:"Ryckmark",percent:[36,38,40,42,45,47,50,53],reps:[5,5,5,5,5,5,5,5],setsDone:[!1,!1,!1,!1,!1],description:"från ovan till under knät",done:!1,TypeOfPr:"snatch"},{name:"Ryck häng",percent:[52,55,57,60,64,67,70,73],reps:[5,5,5,5,5,5,5,5],setsDone:[!1,!1,!1,!1,!1,!1],description:"Hängande vid knät",done:!1,TypeOfPr:"snatch"},{name:"Styrkevändning",percent:[52,55,57,60,64,67,70,73],reps:[5,5,5,5,5,5,5,5],setsDone:[!1,!1,!1,!1,!1,!1],description:"",done:!1,TypeOfPr:"clean"},{name:"Stötdrag",percent:[63,67,70,74,78,82,85,88],reps:[5,5,5,5,5,5,5,5],setsDone:[!1,!1,!1,!1,!1,!1],description:"",done:!1,TypeOfPr:"clean"},{name:"Empty",percent:[1,2,3,4,5,6,7,8],reps:[3,3,3,3,3,3,3,3],setsDone:[!1,!1,!1,!1,!1,!1],description:"",done:!1,TypeOfPr:"clean"},{name:"Empty",percent:[1,2,3,4,5,6,7,8],reps:[5,5,5,5,5,5,5,5],setsDone:[!1,!1,!1,!1,!1,!1],description:"",done:!1,TypeOfPr:"snatch"}]],r=0,o=0,c=0,d=["Tisdag","Torsdag","Pass Tre","Pass Fyra"],a=["TIS","TOR","TRE","FYRA"];function l(e){document.getElementById("currentProg").innerHTML=`${d[e]} >`,o=e,console.log(o)}function i(e){console.log("createProgram");let n=document.getElementById("repsAndSets");n&&(n.innerHTML="");let s=document.getElementById("selectedOvningInfo");if(s&&(s.innerHTML=""),c>e.length-1)console.log("hej");else for(let r=0;r<e[c].percent.length;r++){let o=document.createElement("li"),d="clean"==e[c].TypeOfPr?t[0].cleanPR:t[0].snatchPR;o.classList.add("repsAndSets__text"),o.innerHTML=`\n    ${e[c].reps[r]} \n    reps @\n    ${Math.round(d*(e[c].percent[r]/100))}\n    kg \n    (${e[c].percent[r]}%)\n    `,o.addEventListener("click",(n=>{n.currentTarget.classList.contains("repsAndSets__text--done")?n.currentTarget.classList.remove("repsAndSets__text--done"):(n.currentTarget.classList.add("repsAndSets__text--done"),g(e[c]))})),s.innerHTML=e[c].description,n.appendChild(o)}}function p(e){console.log("showCorrectOvning");let n=document.getElementById("selectedOvning");n&&(n.innerHTML=""),i(e);for(let t=0;t<e.length;t++){let r=document.createElement("span");1==e[t].done?(r.classList.add("currentSelectedOvningDone"),r.innerHTML=`${e[t].name} >`,r.addEventListener("click",(()=>{c=t,i(e),p(s[o])}))):(r.innerHTML=`${e[t].name} >`,t==c&&r.classList.add("currentSelectedOvning"),r.addEventListener("click",(()=>{c=t,r.classList.add("currentSelectedOvning"),i(e),p(s[o])}))),n.appendChild(r)}}function m(){console.log("showWeeklyProg");let e=document.getElementById("weeklyProgram");e&&(e.innerHTML="");for(let n=0;n<s.length;n++){let r=document.createElement("button");r.innerHTML=`${a[n]}`,1==t[0].daysDone[n]&&r.classList.add("doneWeek"),r.addEventListener("click",(()=>{c=0,l(n),p(s[n]),document.getElementById("currentProg").scrollIntoView()})),e.appendChild(r)}}function u(){let e=document.getElementById("setUser");"flex"==e.style.display?e.style.display="none":e.style.display="flex"}function y(e,n,t){document.getElementById("showUserName").innerHTML=`Hej ${e} `,document.getElementById("showSnatchPB").innerHTML=`${n}`,document.getElementById("showCleanPB").innerHTML=`${t}`}function g(e){let n=document.querySelectorAll(".repsAndSets__text"),d=Array.from(n),a=document.querySelectorAll(".repsAndSets__text--done"),i=Array.from(a);d.length==i.length&&(e.done=!0,console.log(e),console.log(c),c++,console.log(c),m(),p(s[o]),function(e){document.querySelector('[data-id="0"]');let n=["Kör passet igen","High Five!","Nästa pass"],d=document.getElementById("passCount"),a=document.getElementById("repsAndSets");if(1==e[0].done&&1==e[1].done&&1==e[2].done&&1==e[3].done&&1==e[4].done&&1==e[5].done){a&&(a.innerHTML=""),t[0].daysDone[o]=!0,r=0;for(let e=0;e<t[0].daysDone.length;e++)1==t[0].daysDone[e]&&r++;localStorage.setItem("userData",JSON.stringify(t)),console.log("DAY IS DONE!!"),console.log("btn.classList.add("),m(),d.innerHTML=r.toString();for(let t=0;t<n.length;t++){let r=document.createElement("li");r.classList.add("repsAndSets__text"),r.innerHTML=`${n[t]}`,r.addEventListener("click",(t=>{t.currentTarget.innerHTML==n[0]?(e[0].done=!1,e[1].done=!1,e[2].done=!1,e[3].done=!1,e[4].done=!1,e[5].done=!1,c=0,l(o),p(s[o]),console.log(s[o])):(o++,c=0,l(o),p(s[o]),console.log(s[o]))})),a.appendChild(r)}}}(s[o]))}document.getElementById("oneRepMax")?.addEventListener("submit",(e=>{n(e)})),document.getElementById("showSettings")?.addEventListener("click",u),null==t[0]?u():(y(t[0].name,t[0].snatchPR,t[0].cleanPR),m());
//# sourceMappingURL=index.a77d898f.js.map
