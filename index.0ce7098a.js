class e{constructor(e,n,t,s){this.name=e,this.snatchPR=n,this.cleanPR=t,this.daysDone=s}}function n(n){{n.preventDefault();let s=document.getElementById("userName").value,r=document.getElementById("snatchRepMaxValue").value,o=parseInt(r),c=document.getElementById("cleanRepMaxValue").value;!function(n,t,s,r,o){let c=function(n,t,s,r,o){if(n.length>2||0==Number.isNaN(t)||0==Number.isNaN(s)){let c=new e(n,t,s,r);return o.unshift(c),{success:!0,error:""}}return{success:!1,error:"Fyll i rätt info!"}}(n,t,s,r,o);c.success?(console.log(c),console.log(o[0].name),m(),u(n,t,s)):function(e,n){let t=document.getElementById("error");t.innerHTML=e,n?t.classList.add("show"):t.classList.remove("show")}(c.error,!0)}(s,o,parseInt(c),[!1,!1,!1,!1],t),g(),localStorage.setItem("userData",JSON.stringify(t))}}let t=JSON.parse(localStorage.getItem("userData")||"[]"),s=[[{name:"Tall clean",percent:[22,27,27,30,33],reps:[3,3,3,3,3],setsDone:[!1,!1,!1,!1,!1],description:"Primer: Tall cleans med häl i marken: 5x3reps max 40%",done:!1,TypeOfPr:"clean"},{name:"Styrkevändning",percent:[53,58,63,68,72,72,75,78],reps:[3,3,3,3,3,3,3,3],setsDone:[!1,!1,!1,!1,!1,!1],description:"",done:!1,TypeOfPr:"clean"},{name:"Stöt",percent:[49,54,59,64,67,67,70,73],reps:[3,3,3,3,3,3,3,3],setsDone:[!1,!1,!1,!1,!1,!1],description:"",done:!1,TypeOfPr:"clean"},{name:"Stötdrag",percent:[87,92,97,102,107,112,115,118],reps:[5,5,5,5,5,5,5,5],setsDone:[!1,!1,!1,!1,!1,!1],description:"bockar ovan knät",done:!1,TypeOfPr:"clean"},{name:"Push press",percent:[52,57,62,67,67,67,70,73],reps:[3,3,3,3,3,3,3,3],setsDone:[!1,!1,!1,!1,!1,!1],description:"",done:!1,TypeOfPr:"clean"},{name:"Bakböj",percent:[83,88,92,97,97,97,100,103],reps:[5,5,5,5,5,5,5,5],setsDone:[!1,!1,!1,!1,!1,!1],description:"",done:!1,TypeOfPr:"clean"}],[{name:"Tall clean",percent:[25,30,35,38,38,38,38],reps:[3,3,3,3,3,3,3],setsDone:[!1,!1,!1,!1,!1],description:"Primer: Tall cleans med häl i marken: 5-7x3reps max 40%",done:!1,TypeOfPr:"clean"},{name:"Vändning",percent:[57,62,67,72,77,77,80,83],reps:[3,3,3,3,3,3,3,3],setsDone:[!1,!1,!1,!1,!1,!1],description:"",done:!1,TypeOfPr:"clean"},{name:"Överstöt",percent:[33,33,33,33],reps:[3,3,3,3],setsDone:[!1,!1,!1,!1,!1,!1],description:"Överstöt utan bendriv 4x3reps max 33%",done:!1,TypeOfPr:"clean"},{name:"Ryckböj",percent:[62,65,68,72,72,72,75,78],reps:[3,3,3,3,3,3,3,3],setsDone:[!1,!1,!1,!1,!1,!1],description:"Ryckböj med stötfattning till parallell till låda/stol",done:!1,TypeOfPr:"snatch"},{name:"Frontböj",percent:[63,66,69,73,77,77,80,83],reps:[3,3,3,3,3,3,3,3],setsDone:[!1,!1,!1,!1,!1,!1],description:"",done:!1,TypeOfPr:"clean"},{name:"Sittande press",percent:[32,33,35,37,40,43],reps:[3,3,3,3,3,3],setsDone:[!1,!1,!1,!1,!1,!1],description:"",done:!1,TypeOfPr:"clean"}],[{name:"Ryck nacke",percent:[33,33,33,33],reps:[3,3,3,3],setsDone:[!1,!1,!1,!1,!1],description:"Primer: Rycknacke utan bendriv 4x3 reps på max 33%",done:!1,TypeOfPr:"snatch"},{name:"Ryck nacke",percent:[47,52,57,62,67,67,70,73],reps:[2,2,2,2,2,2,2,2],setsDone:[!1,!1,!1,!1,!1,!1],description:"Ryck nacke med bendriv",done:!1,TypeOfPr:"snatch"},{name:"Stöt",percent:[59,62,65,68,72,72,75,78],reps:[2,2,2,2,2,2,2,2],setsDone:[!1,!1,!1,!1,!1,!1],description:"",done:!1,TypeOfPr:"clean"},{name:"Vändning + paus + frontböj",percent:[57,62,67,72,77,77,80,83],reps:[2,2,2,2,2,2,2,2],setsDone:[!1,!1,!1,!1,!1,!1],description:"Frivändning med 3 sek paus i fångläget + frontböj: 1+1=1 rep.",done:!1,TypeOfPr:"clean"},{name:"Stötdrag",percent:[77,82,87,92,97,97,100,103],reps:[3,3,3,3,3,3,3,3],setsDone:[!1,!1,!1,!1,!1,!1],description:"Stötdrag med långsamt drag tom mitten lår, sen full fart",done:!1,TypeOfPr:"clean"},{name:"Hantelpress",percent:[24,26,27,30,33],reps:[5,5,5,5,5],setsDone:[!1,!1,!1,!1,!1,!1],description:"Sittande hantelpress, utan ryggstöd",done:!1,TypeOfPr:"clean"}],[{name:"Ryck nacke",percent:[36,38,40,42,45,47,50,53],reps:[3,3,3,3,3,3,3,3],setsDone:[!1,!1,!1,!1,!1],description:"Primer: Rycknacke utan bendriv 5-8x3 reps på max 53%",done:!1,TypeOfPr:"snatch"},{name:"Ryck häng",percent:[56,59,62,65,68,72,75,78],reps:[2,2,2,2,2,2,2,2],setsDone:[!1,!1,!1,!1,!1,!1],description:"Hängande vid mitten av knät",done:!1,TypeOfPr:"snatch"},{name:"Styrkevändning",percent:[52,57,62,67,72,72,75,78],reps:[3,3,3,3,3,3,3,3],setsDone:[!1,!1,!1,!1,!1,!1],description:"",done:!1,TypeOfPr:"clean"},{name:"Hopp med stång",percent:[37,37,40,43],reps:[3,3,3,3],setsDone:[!1,!1,!1,!1,!1,!1],description:"Hopp med stång, hängande från mitten låret, ryckfattning",done:!1,TypeOfPr:"snatch"},{name:"Stöt från rack",percent:[47,52,57,62,67,67,70,73],reps:[3,3,3,3,3,3,3,3],setsDone:[!1,!1,!1,!1,!1,!1],description:"Stöt från rack",done:!1,TypeOfPr:"clean"},{name:"Frontböj",percent:[79,83,87,92,97,97,100,103],reps:[2,2,2,2,2,2,2,2],setsDone:[!1,!1,!1,!1,!1,!1],description:"",done:!1,TypeOfPr:"clean"}]],r=0,o=0,c=0,a=["Tisdag","Torsdag","Pass Tre","Pass Fyra"],d=["TIS","TOR","TRE","FYRA"];function l(e){document.getElementById("currentProg").innerHTML=`${a[e]} >`,o=e,console.log(o)}function i(e){console.log("createProgram");let n=document.getElementById("repsAndSets");n&&(n.innerHTML="");let s=document.getElementById("selectedOvningInfo");if(s&&(s.innerHTML=""),c>e.length-1)console.log("hej");else for(let r=0;r<e[c].percent.length;r++){let o=document.createElement("li"),a="clean"==e[c].TypeOfPr?t[0].cleanPR:t[0].snatchPR;o.classList.add("repsAndSets__text"),o.innerHTML=`\n    ${e[c].reps[r]} \n    reps @\n    ${Math.round(a*(e[c].percent[r]/100))}\n    kg \n    (${e[c].percent[r]}%)\n    `,o.addEventListener("click",(n=>{n.currentTarget.classList.contains("repsAndSets__text--done")?n.currentTarget.classList.remove("repsAndSets__text--done"):(n.currentTarget.classList.add("repsAndSets__text--done"),y(e[c]))})),s.innerHTML=e[c].description,n.appendChild(o)}}function p(e){console.log("showCorrectOvning");let n=document.getElementById("selectedOvning");n&&(n.innerHTML=""),i(e);for(let t=0;t<e.length;t++){let r=document.createElement("span");1==e[t].done?(r.classList.add("currentSelectedOvningDone"),r.innerHTML=`${e[t].name} >`,r.addEventListener("click",(()=>{c=t,i(e),p(s[o])}))):(r.innerHTML=`${e[t].name} >`,t==c&&r.classList.add("currentSelectedOvning"),r.addEventListener("click",(()=>{c=t,r.classList.add("currentSelectedOvning"),i(e),p(s[o])}))),n.appendChild(r)}}function m(){console.log("showWeeklyProg");let e=document.getElementById("weeklyProgram");e&&(e.innerHTML="");for(let n=0;n<s.length;n++){let r=document.createElement("button");r.innerHTML=`${d[n]}`,1==t[0].daysDone[n]&&r.classList.add("doneWeek"),r.addEventListener("click",(()=>{c=0,l(n),p(s[n]),document.getElementById("currentProg").scrollIntoView()})),e.appendChild(r)}}function g(){let e=document.getElementById("setUser");"flex"==e.style.display?e.style.display="none":e.style.display="flex"}function u(e,n,t){document.getElementById("showUserName").innerHTML=`Hej ${e} `,document.getElementById("showSnatchPB").innerHTML=`${n}`,document.getElementById("showCleanPB").innerHTML=`${t}`}function y(e){let n=document.querySelectorAll(".repsAndSets__text"),a=Array.from(n),d=document.querySelectorAll(".repsAndSets__text--done"),i=Array.from(d);a.length==i.length&&(e.done=!0,console.log(e),console.log(c),c++,console.log(c),m(),p(s[o]),function(e){document.querySelector('[data-id="0"]');let n=["Kör passet igen","High Five!","Nästa pass"],a=document.getElementById("passCount"),d=document.getElementById("repsAndSets");if(1==e[0].done&&1==e[1].done&&1==e[2].done&&1==e[3].done&&1==e[4].done&&1==e[5].done){d&&(d.innerHTML=""),t[0].daysDone[o]=!0,r=0;for(let e=0;e<t[0].daysDone.length;e++)1==t[0].daysDone[e]&&r++;localStorage.setItem("userData",JSON.stringify(t)),console.log("DAY IS DONE!!"),console.log("btn.classList.add("),m(),a.innerHTML=r.toString();for(let t=0;t<n.length;t++){let r=document.createElement("li");r.classList.add("repsAndSets__text"),r.innerHTML=`${n[t]}`,r.addEventListener("click",(t=>{t.currentTarget.innerHTML==n[0]?(e[0].done=!1,e[1].done=!1,e[2].done=!1,e[3].done=!1,e[4].done=!1,e[5].done=!1,c=0,l(o),p(s[o]),console.log(s[o])):(o++,c=0,l(o),p(s[o]),console.log(s[o]))})),d.appendChild(r)}}}(s[o]))}document.getElementById("oneRepMax")?.addEventListener("submit",(e=>{n(e)})),document.getElementById("showSettings")?.addEventListener("click",g),null==t[0]?g():(u(t[0].name,t[0].snatchPR,t[0].cleanPR),m());
//# sourceMappingURL=index.0ce7098a.js.map