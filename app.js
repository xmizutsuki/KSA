(()=>{
const $=id=>document.getElementById(id);
const views={home:$('homeView'),quiz:$('quizView'),result:$('resultView')};
const state={mode:'cat',length:20,index:0,ability:0.5,session:[],current:null,answered:false,used:new Set(),categoryCounts:{},lastMode:'cat'};
const STORAGE='ksaNurseCatStatsV1';
const letters=['A','B','C','D','E'];
const CATEGORY_PRIORITY={
 'Postoperative & ABCDE':1.8,
 'Bleeding & Shock':1.65,
 'Respiratory / DVT / PE':1.55,
 'Sepsis':1.5,
 'Prioritization & Communication':1.45,
 'Transfusion & Pharmacology':1.4,
 'Fluids / Electrolytes / Calculations':1.3,
 'Infection & Patient Safety':1.25,
 'Wounds & Drains':1.2,
 'Preoperative Care':1.15,
 'KFSHRC & Interview':1.1,
 'Discharge & Behavioral':.95
};

function loadStats(){try{return JSON.parse(localStorage.getItem(STORAGE))||{answered:0,correct:0,wrongIds:[],ability:.5}}catch{return{answered:0,correct:0,wrongIds:[],ability:.5}}}
function saveStats(s){localStorage.setItem(STORAGE,JSON.stringify(s));}
function showView(name){Object.values(views).forEach(v=>v.classList.remove('active'));views[name].classList.add('active');window.scrollTo({top:0,behavior:'smooth'});}
function shuffle(arr){return [...arr].sort(()=>Math.random()-.5);}
function clamp(n,a,b){return Math.max(a,Math.min(b,n));}
function levelFromAbility(a){return Math.round(1+a*4);}
function updateHome(){const s=loadStats();$('bankCount').textContent=window.KSA_QUESTIONS.length;$('statAnswered').textContent=s.answered||0;$('statAccuracy').textContent=s.answered?Math.round((s.correct/s.answered)*100)+'%':'—';$('statErrors').textContent=(s.wrongIds||[]).length;$('statLevel').textContent=s.answered?'Nível '+levelFromAbility(s.ability??.5):'—';}

function start(mode){state.mode=mode;state.lastMode=mode;state.index=0;state.session=[];state.used=new Set();state.categoryCounts={};state.answered=false;const stored=loadStats();state.ability=mode==='cat'?(stored.ability??.5):.5;state.length=mode==='cat'?Number($('catLength').value):(mode==='quick'?10:(mode==='cases'?Math.min(20,window.KSA_QUESTIONS.filter(q=>q.case).length):20));
if(mode==='errors'){
 const ids=new Set(stored.wrongIds||[]);const pool=window.KSA_QUESTIONS.filter(q=>ids.has(q.id));if(!pool.length){alert('Você ainda não possui questões erradas salvas. Faça um CAT ou revisão primeiro.');return;}state.length=Math.min(20,pool.length);
}
showView('quiz');nextQuestion();}

function poolForMode(){const s=loadStats();if(state.mode==='cases')return window.KSA_QUESTIONS.filter(q=>q.case);if(state.mode==='errors'){const ids=new Set(s.wrongIds||[]);return window.KSA_QUESTIONS.filter(q=>ids.has(q.id));}return window.KSA_QUESTIONS;}
function pickQuestion(){let pool=poolForMode().filter(q=>!state.used.has(q.id));if(!pool.length)return null;
if(state.mode==='cat'){
 const target=levelFromAbility(state.ability);
 pool=pool.map(q=>{const weight=CATEGORY_PRIORITY[q.category]||1;const catPenalty=((state.categoryCounts[q.category]||0)*.38)/weight;const relevanceBonus=(weight-1)*.28;const diffPenalty=Math.abs(q.difficulty-target);const jitter=Math.random()*.35;return{q,score:diffPenalty+catPenalty-relevanceBonus+jitter};}).sort((a,b)=>a.score-b.score);return pool[0].q;
}
return shuffle(pool)[0];}

function nextQuestion(){if(state.index>=state.length){finish();return;}const q=pickQuestion();if(!q){finish();return;}state.current=q;state.used.add(q.id);state.categoryCounts[q.category]=(state.categoryCounts[q.category]||0)+1;state.answered=false;renderQuestion(q);}
function renderQuestion(q){$('modeLabel').textContent=state.mode==='cat'?'CAT ADAPTATIVO':state.mode==='cases'?'CASOS CLÍNICOS':state.mode==='errors'?'REVISÃO DE ERROS':'REVISÃO RÁPIDA';$('categoryLabel').textContent=q.category;$('progressText').textContent=`${state.index+1} / ${state.length}`;$('difficultyText').textContent=`Dificuldade ${q.difficulty}/5`;$('progressBar').style.width=`${(state.index/state.length)*100}%`;$('questionText').textContent=q.q;
const caseBox=$('caseBox');if(q.case){caseBox.textContent=q.case;caseBox.classList.remove('hidden')}else caseBox.classList.add('hidden');
const options=$('options');options.innerHTML='';q.options.forEach((opt,i)=>{const b=document.createElement('button');b.className='option';b.type='button';b.innerHTML=`<span class="letter">${letters[i]}</span><span>${opt}</span>`;b.addEventListener('click',()=>answer(i,b));options.appendChild(b)});$('feedback').className='feedback hidden';$('feedback').innerHTML='';$('nextBtn').classList.add('hidden');}

function answer(choice,button){if(state.answered)return;state.answered=true;const q=state.current;const correct=choice===q.answer;const buttons=[...document.querySelectorAll('.option')];buttons.forEach((b,i)=>{b.disabled=true;if(i===q.answer)b.classList.add('correct');});if(!correct)button.classList.add('wrong');
const source=window.KSA_SOURCES[q.source]||null;const sourceHtml=source?(source.url?`<a href="${source.url}" target="_blank" rel="noopener">Fonte: ${source.label} ↗</a>`:`<span class="muted">Fonte: ${source.label}</span>`):'';
const feedback=$('feedback');feedback.className='feedback '+(correct?'correct':'wrong');feedback.innerHTML=`<h4>${correct?'✓ Correto':'✕ Incorreto — resposta: '+letters[q.answer]}</h4><p>${q.rationale}</p>${sourceHtml}`;
const entry={id:q.id,category:q.category,difficulty:q.difficulty,correct};state.session.push(entry);
const s=loadStats();s.answered=(s.answered||0)+1;if(correct)s.correct=(s.correct||0)+1;let wrong=new Set(s.wrongIds||[]);if(correct)wrong.delete(q.id);else wrong.add(q.id);s.wrongIds=[...wrong];
if(state.mode==='cat'){const delta=correct?(.09+.015*q.difficulty):(-.11-.01*q.difficulty);state.ability=clamp(state.ability+delta,0,1);s.ability=state.ability;}saveStats(s);$('nextBtn').classList.remove('hidden');$('nextBtn').textContent=state.index+1>=state.length?'Ver resultado':'Próxima questão';}

function finish(){if(!state.session.length){showView('home');return;}const total=state.session.length;const correct=state.session.filter(x=>x.correct).length;const pct=Math.round(correct/total*100);$('resultAccuracy').textContent=pct+'%';$('resultDetail').textContent=`${correct} de ${total} corretas`;$('resultTitle').textContent=state.mode==='cat'?`Nível estimado: ${levelFromAbility(state.ability)}/5`:'Resultado da revisão';
const by={};state.session.forEach(x=>{by[x.category]??={n:0,c:0};by[x.category].n++;if(x.correct)by[x.category].c++;});$('resultBreakdown').innerHTML=Object.entries(by).sort((a,b)=>a[0].localeCompare(b[0])).map(([cat,v])=>`<div><span>${cat}</span><strong>${Math.round(v.c/v.n*100)}%</strong></div>`).join('');$('progressBar').style.width='100%';updateHome();showView('result');}

$('nextBtn').addEventListener('click',()=>{state.index++;nextQuestion()});$('quitBtn').addEventListener('click',finish);$('homeBtn').addEventListener('click',()=>{updateHome();showView('home')});$('resultHomeBtn').addEventListener('click',()=>{updateHome();showView('home')});$('restartBtn').addEventListener('click',()=>start(state.lastMode));document.querySelectorAll('.mode-card').forEach(b=>b.addEventListener('click',()=>start(b.dataset.mode)));
$('resetStats').addEventListener('click',()=>{if(confirm('Apagar todo o histórico de desempenho e erros deste navegador?')){localStorage.removeItem(STORAGE);updateHome();}});
updateHome();
})();
