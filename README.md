# KSA Surgical Unit Expert Review

Aplicativo web para revisão intensiva antes de entrevista para **Staff Nurse I — Inpatient Surgical Units**, com foco no contexto do **King Faisal Specialist Hospital & Research Centre (KFSHRC), Jeddah**.

## O que mudou

- O **CAT adaptativo foi removido**.
- O banco ativo foi reconstruído com **200 questões novas**.
- Todas as questões são classificadas como **Expert 5/5**.
- Cada questão possui **5 alternativas plausíveis**, evitando distratores óbvios.
- O foco é raciocínio clínico de alto nível: tendências, dados conflitantes, priorização, farmacologia, complicações e decisão de enfermagem.

## Modos

- **Expert Exam:** banco completo, equilibrado entre categorias.
- **Casos Expert:** somente cenários clínicos complexos.
- **Farmacologia Expert:** anticoagulação, reversão, opioides, insulina, toxicidades e segurança medicamentosa.
- **Sprint Expert:** 10 questões difíceis para revisão rápida.
- **Revisar Erros:** refaz as questões erradas salvas no navegador.

O usuário pode selecionar exames de **20, 30, 40, 50 ou 80 questões**. A dificuldade permanece máxima do início ao fim e não se adapta ao desempenho.

## Banco de questões

O banco ativo contém **200 questões Expert**, cobrindo principalmente:

- Deterioração pós-operatória e ABCDE
- Hemorragia oculta, perfusão, choque e lactato
- DVT / pulmonary embolism e estratificação clínica
- Chest tubes e emergências respiratórias
- Depressão respiratória por opioides e capnografia
- Feridas, deiscência, evisceração, drenos e ostomias
- Sepse e choque séptico
- Anticoagulantes, HIT e estratégias de reversão
- Naloxona, flumazenil, protamina, vitamina K/PCC, idarucizumabe, digoxin immune Fab, acetilcisteína e sugammadex
- LAST e emulsão lipídica
- Malignant hyperthermia e dantroleno
- Fluidos, eletrólitos e acid-base
- Cálculos de infusões e medicamentos
- Transfusão e reações transfusionais
- Insulina, hipoglicemia, DKA e HHS
- Priorização, delegação, SBAR, rapid response e chain of command
- Complicações de colorectal, urologia, ortopedia, ENT, vascular, bariátrica, hepatobiliar, pancreática e transplante renal

## Referências principais

O conteúdo é educacional e foi criado/parafraseado a partir de referências clínicas e fontes institucionais, incluindo:

- KFSHRC — Vision, Mission and Values
- KFSHRC Jeddah — Nursing Services e Surgery Department
- Surviving Sepsis Campaign / SCCM — Adult Guidelines 2026
- CDC — Standard Precautions, CAUTI, SSI e VTE
- AHRQ PSNet — Rapid Response Systems
- NCBI Bookshelf — Perioperative Care e Wound Dehiscence
- ACC — Management of Anticoagulant-Related Bleeding
- DailyMed/FDA — medicamentos e agentes de reversão
- ASRA — Local Anesthetic Systemic Toxicity
- MHAUS — Malignant Hyperthermia
- Lewis's Medical-Surgical Nursing — material de estudo utilizado no projeto

## Estrutura ativa

```text
index.html
styles.css
sources.js
expert-01.js
expert-02.js
expert-03.js
expert-04.js
app.js
```

Os arquivos antigos de questões permanecem no histórico do repositório, mas **não são carregados pelo aplicativo atual**.

## Rodar localmente

Não há build nem dependências. Basta abrir `index.html` no navegador ou servir a pasta com qualquer servidor HTTP estático.

```bash
python -m http.server 8080
```

Depois acesse `http://localhost:8080`.

## GitHub Pages

O repositório inclui workflow em `.github/workflows/pages.yml` para publicação via GitHub Pages. Se necessário, em **Settings → Pages**, selecione **GitHub Actions** como source.

## Aviso

Ferramenta pessoal e educacional. Condutas clínicas reais devem seguir avaliação individual, prescrição, escopo profissional e protocolos institucionais atualizados.