(()=>{
const $=id=>document.getElementById(id);
const views={home:$('homeView'),quiz:$('quizView'),result:$('resultView')};
const state={mode:'elite',length:20,index:0,session:[],current:null,answered:false,used:new Set(),usedCases:new Set(),categoryCounts:{},lastMode:'elite'};
const STORAGE='ksaSurgicalEliteStatsV4';
const letters=['A','B','C','D','E'];
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function loadStats(){try{return JSON.parse(localStorage.getItem(STORAGE))||{answered:0,correct:0,wrongIds:[]}}catch{return{answered:0,correct:0,wrongIds:[]}}}
function saveStats(s){localStorage.setItem(STORAGE,JSON.stringify(s));}
function showView(name){Object.values(views).forEach(v=>v.classList.remove('active'));views[name].classList.add('active');window.scrollTo({top:0,behavior:'smooth'});}
function shuffle(arr){return [...arr].sort(()=>Math.random()-.5);}
function updateHome(){
 const s=loadStats();
 $('bankCount').textContent=window.KSA_QUESTIONS.length;
 const cases=new Set(window.KSA_QUESTIONS.map(q=>q.caseId).filter(Boolean));
 $('caseCount').textContent=cases.size;
 $('statAnswered').textContent=s.answered||0;
 $('statAccuracy').textContent=s.answered?Math.round((s.correct/s.answered)*100)+'%':'—';
 $('statErrors').textContent=(s.wrongIds||[]).length;
}
function poolForMode(mode=state.mode){
 const s=loadStats();
 if(mode==='critical')return window.KSA_QUESTIONS.filter(q=>/Shock|Sepsis|Respiratory|Chest|Spine|Compartment|Malignant|Regional|Transfusion|Hyperkalemia|Thyroid|Hemorrhage|Neurologic/i.test(q.category));
 if(mode==='pharm')return window.KSA_QUESTIONS.filter(q=>/Anticoag|Warfarin|Factor Xa|Heparin|HIT|Insulin|Medication|Opioid|Antibiotic|NSAID|QT|Regional Anesthesia|Malignant Hyperthermia/i.test(q.category));
 if(mode==='errors'){const ids=new Set(s.wrongIds||[]);return window.KSA_QUESTIONS.filter(q=>ids.has(q.id));}
 return window.KSA_QUESTIONS;
}
function start(mode){
 state.mode=mode;state.lastMode=mode;state.index=0;state.session=[];state.used=new Set();state.usedCases=new Set();state.categoryCounts={};state.answered=false;
 let pool=poolForMode(mode);
 if(mode==='errors'&&!pool.length){alert('Você ainda não possui questões erradas salvas. Faça o Blind Elite Exam primeiro.');return;}
 const selectedLength=Number($('examLength').value);
 state.length=mode==='quick'?Math.min(10,pool.length):Math.min(selectedLength,pool.length);
 showView('quiz');nextQuestion();
}
function pickQuestion(){
 let pool=poolForMode().filter(q=>!state.used.has(q.id));
 if(!pool.length)return null;
 const freshCases=pool.filter(q=>!q.caseId||!state.usedCases.has(q.caseId));
 if(freshCases.length)pool=freshCases;
 const minCount=Math.min(...pool.map(q=>state.categoryCounts[q.category]||0));
 const balanced=pool.filter(q=>(state.categoryCounts[q.category]||0)<=minCount+1);
 return shuffle(balanced.length?balanced:pool)[0];
}
function nextQuestion(){
 if(state.index>=state.length){finish();return;}
 const q=pickQuestion();if(!q){finish();return;}
 state.current=q;state.used.add(q.id);if(q.caseId)state.usedCases.add(q.caseId);state.categoryCounts[q.category]=(state.categoryCounts[q.category]||0)+1;state.answered=false;renderQuestion(q);
}
function renderQuestion(q){
 $('modeLabel').textContent=state.mode==='critical'?'CRITICAL CASES':state.mode==='pharm'?'PHARM / ANTICOAG':state.mode==='errors'?'REVISÃO DE ERROS':state.mode==='quick'?'ELITE SPRINT':'BLIND ELITE EXAM';
 $('categoryLabel').textContent=state.mode==='errors'?q.category:'Categoria oculta';
 $('progressText').textContent=`${state.index+1} / ${state.length}`;
 $('difficultyText').textContent='Elite • 3rd-order';
 $('progressBar').style.width=`${(state.index/state.length)*100}%`;
 $('questionText').textContent=q.q;
 const caseText=q.case||(window.KSA_CASES&&window.KSA_CASES[q.caseId])||'';
 const caseBox=$('caseBox');if(caseText){caseBox.textContent=caseText;caseBox.classList.remove('hidden')}else caseBox.classList.add('hidden');
 const options=$('options');options.innerHTML='';
 q.options.forEach((opt,i)=>{const b=document.createElement('button');b.className='option';b.type='button';b.innerHTML=`<span class="letter">${letters[i]}</span><span>${esc(opt)}</span>`;b.addEventListener('click',()=>answer(i,b));options.appendChild(b)});
 $('feedback').className='feedback hidden';$('feedback').innerHTML='';$('nextBtn').classList.add('hidden');
}
function answer(choice,button){
 if(state.answered)return;state.answered=true;
 const q=state.current;const correct=choice===q.answer;const buttons=[...document.querySelectorAll('.option')];buttons.forEach(b=>b.disabled=true);button.classList.add('selected');
 state.session.push({q,choice,correct});
 const s=loadStats();s.answered=(s.answered||0)+1;if(correct)s.correct=(s.correct||0)+1;let wrong=new Set(s.wrongIds||[]);if(correct)wrong.delete(q.id);else wrong.add(q.id);s.wrongIds=[...wrong];saveStats(s);
 const feedback=$('feedback');
 if(state.mode==='errors'){
   buttons.forEach((b,i)=>{if(i===q.answer)b.classList.add('correct')});if(!correct)button.classList.add('wrong');
   const source=window.KSA_SOURCES[q.source]||null;const sourceHtml=source?(source.url?`<a href="${source.url}" target="_blank" rel="noopener">Fonte: ${esc(source.label)} ↗</a>`:`<span class="muted">Fonte: ${esc(source.label)}</span>`):'';
   feedback.className='feedback '+(correct?'correct':'wrong');feedback.innerHTML=`<h4>${correct?'✓ Correto':'✕ Incorreto — resposta: '+letters[q.answer]}</h4><p>${esc(q.rationale)}</p>${sourceHtml}`;
 }else{
   feedback.className='feedback';feedback.innerHTML='<strong>Resposta registrada.</strong> O gabarito, a categoria e a justificativa ficam ocultos até o final da sessão.';
 }
 $('nextBtn').classList.remove('hidden');$('nextBtn').textContent=state.index+1>=state.length?'Finalizar e ver análise':'Próxima questão';
}
function finish(){
 if(!state.session.length){showView('home');return;}
 const total=state.session.length,correct=state.session.filter(x=>x.correct).length,pct=Math.round(correct/total*100);
 $('resultAccuracy').textContent=pct+'%';$('resultDetail').textContent=`${correct} de ${total} corretas`;
 $('resultTitle').textContent=pct>=85?'Elite — excelente discriminação clínica':pct>=70?'Elite — desempenho forte':'Elite — revisar raciocínio de alto risco';
 const by={};state.session.forEach(({q,correct})=>{by[q.category]??={n:0,c:0};by[q.category].n++;if(correct)by[q.category].c++;});
 $('resultBreakdown').innerHTML=Object.entries(by).sort((a,b)=>a[0].localeCompare(b[0])).map(([cat,v])=>`<div><span>${esc(cat)}</span><strong>${Math.round(v.c/v.n*100)}%</strong></div>`).join('');
 const review=$('resultReview');
 if(review){review.innerHTML=state.session.map(({q,choice,correct},idx)=>{const source=window.KSA_SOURCES[q.source]||null;const sourceHtml=source?(source.url?`<a class="review-source" href="${source.url}" target="_blank" rel="noopener">${esc(source.label)} ↗</a>`:`<span class="review-source">${esc(source.label)}</span>`):'';return `<article class="review-item ${correct?'correct-review':'wrong-review'}"><div class="review-kicker">Questão ${idx+1} • ${correct?'CORRETA':'INCORRETA'}</div><h4>${esc(q.q)}</h4><div class="review-answer"><div><strong>Sua resposta:</strong> ${letters[choice]}. ${esc(q.options[choice])}</div><div><strong>Melhor resposta:</strong> ${letters[q.answer]}. ${esc(q.options[q.answer])}</div></div><span class="category-after">${esc(q.category)}</span><p class="review-rationale">${esc(q.rationale)}</p>${sourceHtml}</article>`}).join('');}
 $('progressBar').style.width='100%';updateHome();showView('result');
}
$('nextBtn').addEventListener('click',()=>{state.index++;nextQuestion()});
$('quitBtn').addEventListener('click',finish);
$('homeBtn').addEventListener('click',()=>{updateHome();showView('home')});
$('resultHomeBtn').addEventListener('click',()=>{updateHome();showView('home')});
$('restartBtn').addEventListener('click',()=>start(state.lastMode));
document.querySelectorAll('.mode-card').forEach(b=>b.addEventListener('click',()=>start(b.dataset.mode)));
$('resetStats').addEventListener('click',()=>{if(confirm('Apagar todo o histórico de desempenho e erros deste navegador?')){localStorage.removeItem(STORAGE);updateHome();}});
updateHome();
})();
