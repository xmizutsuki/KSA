# KSA Nurse CAT

Aplicativo web simples para revisão intensiva antes de entrevista para **Staff Nurse I — Surgery Unit**, com foco no contexto do **King Faisal Specialist Hospital & Research Centre (KFSHRC), Jeddah**.

## Recursos

- **CAT adaptativo (estudo):** começa em dificuldade média e ajusta o nível conforme acertos e erros.
- **Casos clínicos:** priorização, deterioração pós-operatória, hemorragia, sepse, PE/DVT, transfusão, feridas e segurança.
- **Revisão rápida:** 10 questões aleatórias.
- **Revisão de erros:** questões erradas ficam salvas no navegador e podem ser refeitas.
- **5 alternativas em todas as questões.**
- **Explicação imediata** após cada resposta.
- **Fonte/referência** disponível no feedback quando aplicável.
- **Histórico local:** desempenho é salvo apenas no `localStorage` do navegador.
- Responsivo para celular e computador.

> O modo CAT é **CAT-style para estudo** e não implementa um modelo psicométrico IRT validado. A estimativa de nível serve apenas para orientar a revisão.

## Banco inicial

65 questões originais/parafraseadas cobrindo:

- KFSHRC e entrevista
- Avaliação pré-operatória
- Pós-operatório e ABCDE
- Deterioração clínica
- Hemorragia e choque
- Complicações respiratórias
- DVT / pulmonary embolism
- Sepse
- Feridas, deiscência e evisceração
- Drenos e dispositivos
- Transfusão
- Anticoagulantes, opioides e antídotos
- Eletrólitos e fluid balance
- Cálculos de medicamentos
- Infection control e segurança do paciente
- Priorização, delegação, SBAR e documentação
- Alta e perguntas comportamentais

## Referências principais

As perguntas não foram copiadas de bancos comerciais. Elas foram criadas/parafraseadas para estudo a partir de conteúdo clínico público e diretrizes, principalmente:

- KFSHRC — Vision, Mission and Values: https://services.kfshrc.edu.sa/external/en/home/about/visionmissionvalues
- KFSHRC — Surgery, Jeddah: https://services.kfshrc.edu.sa/en/home/hospitals/jeddah/surgeryj
- KFSHRC — Staff Nurse I responsibilities: https://services.kfshrc.edu.sa/en/home/careers/vacancies/158582
- WHO Surgical Safety Checklist: https://www.who.int/teams/integrated-health-services/quality-of-care-and-patient-safety/patient-safety-guidance-and-tools/safe-surgery/tool-and-resources
- Surviving Sepsis Campaign / SCCM: https://sccm.org/survivingsepsiscampaign/guidelines-and-resources/surviving-sepsis-campaign-adult-guidelines
- CDC Standard Precautions: https://www.cdc.gov/infection-control/hcp/basics/standard-precautions.html
- CDC DVT/PE: https://www.cdc.gov/blood-clots/about/
- NCBI Bookshelf — Perioperative Care: https://www.ncbi.nlm.nih.gov/books/NBK613066/
- NCBI Bookshelf — Wound Dehiscence: https://www.ncbi.nlm.nih.gov/books/NBK551712/
- NHS — Transfusion reaction management: https://www.rightdecisions.scot.nhs.uk/nhs-borders-clinical-guidelines/acute-services/blood-transfusion/transfusion-policy/

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
