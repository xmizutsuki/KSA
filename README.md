# KSA Nurse CAT

Aplicativo web simples para revisão intensiva antes de entrevista para **Staff Nurse I — Surgery Unit**, com foco no contexto do **King Faisal Specialist Hospital & Research Centre (KFSHRC), Jeddah**.

## Recursos

- **CAT adaptativo (estudo):** começa em dificuldade média e ajusta o nível conforme acertos e erros.
- CAT com **20, 30, 40, 50 ou 80 questões**.
- **Casos clínicos:** priorização, deterioração pós-operatória, hemorragia, sepse, PE/DVT, transfusão, feridas e segurança.
- **Revisão rápida:** 10 questões aleatórias.
- **Revisão de erros:** questões erradas ficam salvas no navegador e podem ser refeitas.
- **5 alternativas em todas as questões.**
- **Explicação imediata** após cada resposta.
- **Fonte/referência** disponível no feedback quando aplicável.
- **Histórico local:** desempenho é salvo apenas no `localStorage` do navegador.
- Responsivo para celular e computador.

> O modo CAT é **CAT-style para estudo** e não implementa um modelo psicométrico IRT validado. A estimativa de nível serve apenas para orientar a revisão.

## Banco de questões

**230 questões originais/parafraseadas**, com maior peso para os conteúdos mais relevantes para uma entrevista de enfermagem cirúrgica e para reconhecimento de deterioração clínica.

Áreas cobertas:

- KFSHRC, valores institucionais e entrevista
- Avaliação pré-operatória e WHO Surgical Safety Checklist
- Pós-operatório e ABCDE
- Reconhecimento de deterioração / Rapid Response
- Hemorragia e choque
- Complicações respiratórias
- DVT / pulmonary embolism
- Sepse e choque séptico
- Feridas, deiscência e evisceração
- Drenos, NG tube, Foley e chest tube
- Transfusão e reações transfusionais
- Anticoagulantes, opioides, sedativos, insulina e antídotos/reversores
- Farmacologia perioperatória: naloxona, flumazenil, protamina, vitamina K/PCC, idarucizumabe, andexanet alfa, acetilcisteína, digoxin immune Fab, sugamadex, dantroleno e emulsão lipídica
- Segurança com medicamentos comuns da Surgery Unit, incluindo cefazolina, vancomicina, ketorolaco, ondansetrona, metoclopramida e potássio IV
- Eletrólitos e fluid balance
- Cálculos de medicamentos e infusões
- Infection control, HAI e CAUTI
- Segurança do paciente
- Priorização, delegação, SBAR e documentação
- Alta, educação do paciente e perguntas comportamentais

## Referências principais

As perguntas não foram copiadas de bancos comerciais. Elas foram criadas/parafraseadas para estudo a partir de conteúdo clínico público e diretrizes, principalmente:

- KFSHRC — Vision, Mission and Values: https://services.kfshrc.edu.sa/external/en/home/about/visionmissionvalues
- KFSHRC — Surgery, Jeddah: https://services.kfshrc.edu.sa/en/home/hospitals/jeddah/surgeryj
- KFSHRC — Staff Nurse I responsibilities: https://services.kfshrc.edu.sa/en/home/careers/vacancies/158582
- WHO Surgical Safety Checklist: https://www.who.int/teams/integrated-health-services/quality-of-care-and-patient-safety/patient-safety-guidance-and-tools/safe-surgery/tool-and-resources
- Surviving Sepsis Campaign / SCCM: https://sccm.org/survivingsepsiscampaign/guidelines-and-resources/surviving-sepsis-campaign-adult-guidelines
- CDC Standard Precautions: https://www.cdc.gov/infection-control/hcp/basics/standard-precautions.html
- CDC CAUTI recommendations: https://www.cdc.gov/infection-control/hcp/cauti/summary-of-recommendations.html
- CDC Healthcare-Associated Infections: https://www.cdc.gov/healthcare-associated-infections/about/index.html
- CDC DVT/PE: https://www.cdc.gov/blood-clots/about/
- AHRQ PSNet — Rapid Response Systems: https://psnet.ahrq.gov/primer/rapid-response-systems
- NCBI Bookshelf — Perioperative Care: https://www.ncbi.nlm.nih.gov/books/NBK613066/
- NCBI Bookshelf — Wound Dehiscence: https://www.ncbi.nlm.nih.gov/books/NBK551712/
- NHS — Transfusion reaction management: https://www.rightdecisions.scot.nhs.uk/nhs-borders-clinical-guidelines/acute-services/blood-transfusion/transfusion-policy/
- DailyMed/FDA labels for naloxone, flumazenil, protamine, enoxaparin, warfarin, idarucizumab, andexanet alfa, acetylcysteine, digoxin immune Fab and sugammadex
- ACC — Management of anticoagulant-related bleeding
- MHAUS — Malignant hyperthermia / dantrolene
- ASRA — Local Anesthetic Systemic Toxicity / lipid emulsion

## Rodar localmente

Não há build nem dependências. Basta abrir `index.html` no navegador ou servir a pasta com qualquer servidor HTTP estático.

Exemplo:

```bash
python -m http.server 8080
```

Depois acesse `http://localhost:8080`.

## GitHub Pages

O repositório inclui um workflow em `.github/workflows/pages.yml` para publicação via GitHub Pages. Se Pages ainda não estiver habilitado no repositório, abra **Settings → Pages** e escolha **GitHub Actions** como source.

## Aviso

Ferramenta pessoal e educacional. Condutas clínicas devem seguir avaliação individual, prescrição, escopo profissional e protocolos institucionais atualizados.
