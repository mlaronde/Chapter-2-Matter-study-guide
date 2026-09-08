const flashcards = [
["What is matter?","Anything that takes up space and has mass."],
["What is mass?","A measure of the amount of matter an object contains."],
["How is mass different from weight?","Mass is constant; weight depends on gravity."],
["Name three extensive properties.","Mass, length, and volume."],
["Name three intensive properties.","Hardness, odor, and density."],
["What is a pure substance?","Matter with a uniform and definite composition."],
["What are the two types of pure substances?","Elements and compounds."],
["What is an element?","The simplest form of matter; it cannot be broken down."],
["How are element symbols written?","1–2 letters; only the first letter is capitalized."],
["What is a compound?","Two or more different elements chemically combined."],
["What do subscripts in a formula show?","The ratio/number of each element in the compound."],
["How many carbon atoms are in C6H12O6?","6 carbon atoms."],
["Can compounds be separated physically?","No. They must be broken down chemically."],
["What is a physical property?","A property observed/measured without changing composition."],
["List examples of physical properties.","Hardness, color, conductivity, malleability, boiling point."],
["Does changing state change a substance's identity?","No. A state change is a physical change."],
["Solid: shape and volume?","Definite shape and definite volume."],
["Liquid: shape and volume?","Indefinite shape and definite volume."],
["Gas: shape and volume?","Indefinite shape and indefinite volume."],
["How do particles move in a solid?","They vibrate in fixed positions."],
["How are particles arranged in a gas?","Far apart and moving quickly."],
["What is vapor?","Gas form of a substance usually liquid/solid at room temperature."],
["What is a gas?","A substance normally gaseous at room temperature."],
["What is a physical change?","A change that does not change the substance's identity."],
["Give examples of physical changes.","Grinding, cutting, melting, and boiling."],
["What is a chemical property?","Describes how a substance reacts to form new substances."],
["What is a chemical change?","A change that forms one or more new substances."],
["State the law of conservation of mass.","Mass is not created or destroyed."],
["What is a mixture?","A physical blend of two or more substances."],
["What is a heterogeneous mixture?","A mixture that is not uniform throughout."],
["What is a homogeneous mixture?","A mixture that is uniform throughout; a solution."],
["How many phases does a homogeneous mixture have?","One phase."],
["How many phases does a heterogeneous mixture have?","Two or more phases."],
["What is decanting?","Pouring off one layer from another."],
["What property does filtration use?","Particle size."],
["What property does distillation use?","Different boiling points."],
["What does crystallization/evaporation do?","Evaporates liquid and leaves the solid behind."],
["What is chromatography used for?","Separating substances that move at different speeds."],
["What can paper chromatography separate?","Marker ink into individual pigments."]
];

const sortItems = [
 {t:"Gold (Au)",a:"element"},{t:"Copper (Cu)",a:"element"},{t:"Water (H₂O)",a:"compound"},
 {t:"Glucose (C₆H₁₂O₆)",a:"compound"},{t:"Vinegar",a:"homogeneous"},{t:"Air",a:"homogeneous"},
 {t:"Chicken noodle soup",a:"heterogeneous"},{t:"Blood",a:"heterogeneous"}
];

const stateQs = [
 {q:"Which state has definite shape and definite volume?",a:"Solid",c:["Solid","Liquid","Gas"]},
 {q:"Which state has definite volume but takes the shape of its container?",a:"Liquid",c:["Solid","Liquid","Gas"]},
 {q:"Which state has indefinite shape and indefinite volume?",a:"Gas",c:["Solid","Liquid","Gas"]},
 {q:"In which state are particles far apart and moving quickly?",a:"Gas",c:["Solid","Liquid","Gas"]},
 {q:"In which state do particles mainly vibrate in fixed positions?",a:"Solid",c:["Solid","Liquid","Gas"]}
];

const changeQs = [
 {q:"Ice melting",a:"Physical",c:["Physical","Chemical"]},
 {q:"Gasoline burning to form CO₂ and H₂O",a:"Chemical",c:["Physical","Chemical"]},
 {q:"Gasoline evaporating in the sun",a:"Physical",c:["Physical","Chemical"]},
 {q:"Cutting a piece of metal",a:"Physical",c:["Physical","Chemical"]},
 {q:"Heating iron and sulfur so FeS forms",a:"Chemical",c:["Physical","Chemical"]},
 {q:"Boiling water",a:"Physical",c:["Physical","Chemical"]}
];

const sepQs = [
 {q:"Separate gravel from water using pore size.",a:"Filtration",c:["Filtration","Distillation","Chromatography","Crystallization"]},
 {q:"Separate two liquids using different boiling points.",a:"Distillation",c:["Filtration","Distillation","Decanting","Chromatography"]},
 {q:"Separate marker ink into pigments.",a:"Chromatography",c:["Filtration","Distillation","Chromatography","Decanting"]},
 {q:"Recover solid crystals by letting the liquid evaporate.",a:"Crystallization / evaporation",c:["Filtration","Distillation","Chromatography","Crystallization / evaporation"]},
 {q:"Separate oil from vinegar by carefully pouring off the oil layer.",a:"Decanting",c:["Filtration","Distillation","Decanting","Chromatography"]}
];

const quizBank = [
 {q:"Matter is defined as anything that…",c:["has color","takes up space and has mass","can be seen","is solid"],a:1},
 {q:"Which stays constant regardless of location?",c:["Weight","Mass","Gravity","Force"],a:1},
 {q:"Which is an extensive property?",c:["Density","Odor","Volume","Hardness"],a:2},
 {q:"Which is an intensive property?",c:["Mass","Length","Volume","Density"],a:3},
 {q:"A pure substance has…",c:["variable composition","uniform definite composition","only one phase always","no physical properties"],a:1},
 {q:"The two types of pure substances are…",c:["solids and liquids","elements and compounds","mixtures and solutions","atoms and phases"],a:1},
 {q:"An element…",c:["can be separated physically","is the simplest form of matter","always has two atoms","is a mixture"],a:1},
 {q:"A compound contains…",c:["one element only","different elements chemically combined","elements physically mixed","only gases"],a:1},
 {q:"In H₂O, the subscript 2 tells you there are…",c:["2 oxygen atoms","2 hydrogen atoms","2 molecules","2 compounds"],a:1},
 {q:"Which is a physical property?",c:["Flammability","Reactivity","Boiling point","Ability to rust"],a:2},
 {q:"A liquid has…",c:["definite shape and volume","definite volume, indefinite shape","indefinite volume, definite shape","indefinite shape and volume"],a:1},
 {q:"Gas particles are generally…",c:["fixed in place","far apart and moving quickly","packed tightly","unable to move"],a:1},
 {q:"A vapor is…",c:["always oxygen","gaseous form of a substance usually liquid/solid at room temperature","a solid at room temp","the same as any gas"],a:1},
 {q:"Which is a physical change?",c:["Burning gasoline","Forming FeS","Melting ice","Rusting iron"],a:2},
 {q:"The law of conservation of mass says…",c:["mass can disappear","products always weigh less","mass is not created or destroyed","reactants have no mass"],a:2},
 {q:"A mixture is…",c:["chemically bonded atoms only","a physical blend of substances","always homogeneous","always a compound"],a:1},
 {q:"Chicken noodle soup is usually…",c:["homogeneous","heterogeneous","an element","a compound"],a:1},
 {q:"A homogeneous mixture is also called a…",c:["solution","compound","element","phase change"],a:0},
 {q:"Filtration separates based mainly on…",c:["boiling point","particle size","color","magnetism only"],a:1},
 {q:"Distillation separates based mainly on…",c:["particle size","boiling points","density only","chemical reaction"],a:1},
 {q:"Chromatography can separate…",c:["marker pigments","iron by magnet","oil by freezing","water by filtering only"],a:0},
 {q:"A heterogeneous mixture has…",c:["one phase","two or more phases","no phases","only one substance"],a:1},
 {q:"A homogeneous mixture has…",c:["uniform composition","visible separate parts","always solids","new substances formed"],a:0},
 {q:"Which can break down a compound?",c:["Filtering","Melting","Chemical reaction","Cutting"],a:2}
];


let state = JSON.parse(localStorage.getItem("matterStudyState")||"{}");
state.known = state.known || [];
state.games = state.games || {};
state.bestQuiz = state.bestQuiz || 0;
let flashIndex=0, currentState=0, selectedState=null, currentChange=0, selectedChange=null, currentSep=0, selectedSep=null;

function save(){localStorage.setItem("matterStudyState",JSON.stringify(state));updateProgress();}
function updateProgress(){
  const known=state.known.length, games=Object.values(state.games).filter(Boolean).length;
  const total = flashcards.length + 5 + 1;
  const done = known + games + (state.bestQuiz>0?1:0);
  const pct = Math.min(100,Math.round(done/total*100));
  document.getElementById("progressBar").style.width=pct+"%";
  document.getElementById("progressLabel").textContent="Progress: "+pct+"%";
  document.getElementById("flashKnown").textContent=known;
  document.getElementById("gamesDone").textContent=games;
  document.getElementById("bestQuiz").textContent=state.bestQuiz+"%";
}
function switchTab(id){
  document.querySelectorAll(".panel").forEach(p=>p.classList.remove("active"));
  document.querySelectorAll("[data-tab]").forEach(b=>b.classList.toggle("active",b.dataset.tab===id));
  document.getElementById(id).classList.add("active");
  window.scrollTo({top:0,behavior:"smooth"});
}
document.querySelectorAll("[data-tab]").forEach(b=>b.addEventListener("click",()=>switchTab(b.dataset.tab)));

function renderFlash(){
  const [q,a]=flashcards[flashIndex], el=document.getElementById("flashcard");
  el.classList.remove("flipped");
  el.querySelector(".question").textContent=q;
  el.querySelector(".answer").textContent=a;
  document.getElementById("flashCount").textContent=`Card ${flashIndex+1} of ${flashcards.length}`;
}
function flipCard(){document.getElementById("flashcard").classList.toggle("flipped")}
function nextCard(){flashIndex=(flashIndex+1)%flashcards.length;renderFlash()}
function prevCard(){flashIndex=(flashIndex-1+flashcards.length)%flashcards.length;renderFlash()}
function markCard(known){
  const idx=state.known.indexOf(flashIndex);
  if(known && idx<0) state.known.push(flashIndex);
  if(!known && idx>=0) state.known.splice(idx,1);
  save(); nextCard();
}

let dragged=null;
function setupDnD(el){
  el.draggable=true;
  el.addEventListener("dragstart",()=>dragged=el);
  el.addEventListener("click",()=>{
    if(window.innerWidth<700){ dragged=el; el.style.outline="2px solid var(--accent)"; }
  });
}
document.querySelectorAll(".drop-zone").forEach(z=>{
  z.addEventListener("dragover",e=>e.preventDefault());
  z.addEventListener("drop",e=>{e.preventDefault();if(dragged)z.appendChild(dragged)});
  z.addEventListener("click",()=>{if(dragged && window.innerWidth<700 && dragged.parentElement!==z){z.appendChild(dragged);dragged.style.outline="";dragged=null;}});
});
function resetSort(){
  document.querySelectorAll(".draggable").forEach(d=>d.remove());
  const bank=document.getElementById("sortBank");
  sortItems.sort(()=>Math.random()-.5).forEach((it,i)=>{
    const d=document.createElement("div");
    d.className="draggable";
    d.textContent=it.t;
    d.dataset.answer=it.a;
    setupDnD(d);
    bank.appendChild(d);
  });
  dragged=null;
  document.getElementById("sortResult").textContent="";
}
function checkSort(){
  let correct=0;
  document.querySelectorAll(".draggable").forEach(d=>{
    const zone=d.parentElement.dataset.zone;
    d.classList.remove("correct","incorrect");
    if(zone===d.dataset.answer){d.classList.add("correct");correct++} else d.classList.add("incorrect");
  });
  document.getElementById("sortResult").textContent=`${correct} / ${sortItems.length} correct`;
  if(correct===sortItems.length){state.games.sort=true;save();}
}

function renderMC(containerId, choices, setFn){
 const box=document.getElementById(containerId); box.innerHTML="";
 choices.forEach(c=>{const b=document.createElement("button");b.className="choice";b.textContent=c;b.onclick=()=>{box.querySelectorAll(".choice").forEach(x=>x.classList.remove("selected"));b.classList.add("selected");setFn(c)};box.appendChild(b)});
}
function renderState(){selectedState=null;document.getElementById("stateFeedback").textContent="";document.getElementById("stateQuestion").innerHTML="<h3>"+stateQs[currentState].q+"</h3>";renderMC("stateChoices",stateQs[currentState].c,v=>selectedState=v)}
function checkState(){if(!selectedState)return;const ok=selectedState===stateQs[currentState].a;document.getElementById("stateFeedback").textContent=ok?"Correct!":"Try again."; if(ok){state.games.states=true;save()}}
function nextState(){currentState=(currentState+1)%stateQs.length;renderState()}

function renderChange(){selectedChange=null;document.getElementById("changeFeedback").textContent="";document.getElementById("changeQuestion").innerHTML="<h3>"+changeQs[currentChange].q+"</h3>";renderMC("changeChoices",changeQs[currentChange].c,v=>selectedChange=v)}
function checkChange(){if(!selectedChange)return;const ok=selectedChange===changeQs[currentChange].a;document.getElementById("changeFeedback").textContent=ok?"Correct!":"Try again."; if(ok){state.games.changes=true;save()}}
function nextChange(){currentChange=(currentChange+1)%changeQs.length;renderChange()}

function renderSep(){selectedSep=null;document.getElementById("sepFeedback").textContent="";document.getElementById("sepQuestion").innerHTML="<h3>"+sepQs[currentSep].q+"</h3>";renderMC("sepChoices",sepQs[currentSep].c,v=>selectedSep=v)}
function checkSep(){if(!selectedSep)return;const ok=selectedSep===sepQs[currentSep].a;document.getElementById("sepFeedback").textContent=ok?"Correct!":"Try again."; if(ok){state.games.separation=true;save()}}
function nextSep(){currentSep=(currentSep+1)%sepQs.length;renderSep()}

function buildQuiz(){
  const picked=[...quizBank].sort(()=>Math.random()-.5).slice(0,20);
  const box=document.getElementById("quizBox"); box.innerHTML=""; box.dataset.keys=JSON.stringify(picked.map(q=>q.a));
  picked.forEach((q,i)=>{
    const wrap=document.createElement("div"); wrap.className="card"; wrap.style.margin="12px 0";
    wrap.innerHTML=`<b>${i+1}. ${q.q}</b>`;
    q.c.forEach((c,j)=>{
      const label=document.createElement("label"); label.className="choice";
      label.innerHTML=`<input type="radio" name="q${i}" value="${j}" style="margin-right:8px"> ${c}`; wrap.appendChild(label);
    });
    box.appendChild(wrap);
  });
  document.getElementById("quizScore").textContent="";
}
function gradeQuiz(){
  const keys=JSON.parse(document.getElementById("quizBox").dataset.keys||"[]");let correct=0;
  keys.forEach((a,i)=>{const picked=document.querySelector(`input[name="q${i}"]:checked`); if(picked && +picked.value===a)correct++;});
  const pct=Math.round(correct/keys.length*100); document.getElementById("quizScore").textContent=`Score: ${correct}/${keys.length} (${pct}%)`;
  state.bestQuiz=Math.max(state.bestQuiz,pct); if(pct>=80) state.games.quiz=true; save();
}

resetSort(); renderFlash(); renderState(); renderChange(); renderSep(); buildQuiz(); updateProgress();
