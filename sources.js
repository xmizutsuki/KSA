window.KSA_SOURCES={
KFSHRC_VALUES:{label:"KFSHRC — Vision, Mission and Values",url:"https://services.kfshrc.edu.sa/external/en/home/about/visionmissionvalues"},
KFSHRC_NURSING:{label:"KFSHRC Jeddah — Nursing Services",url:"https://services.kfshrc.edu.sa/en/home/hospitals/jeddah/nursingservicesj"},
KFSHRC_SURGERY:{label:"KFSHRC Jeddah — Surgery Department",url:"https://services.kfshrc.edu.sa/en/home/hospitals/jeddah/surgeryj"},
WHO_SURGICAL:{label:"WHO — Surgical Safety Checklist",url:"https://www.who.int/teams/integrated-health-services/quality-of-care-and-patient-safety/patient-safety-guidance-and-tools/safe-surgery/tool-and-resources"},
SCCM_SEPSIS:{label:"Surviving Sepsis Campaign — Adult Guidelines 2026",url:"https://www.sccm.org/survivingsepsiscampaign/guidelines-and-resources/surviving-sepsis-campaign-adult-guidelines"},
CDC_STANDARD:{label:"CDC — Standard Precautions / Infection Control",url:"https://www.cdc.gov/infection-control/hcp/basics/standard-precautions.html"},
CDC_CAUTI:{label:"CDC — CAUTI Prevention Recommendations",url:"https://www.cdc.gov/infection-control/hcp/cauti/summary-of-recommendations.html"},
CDC_SSI:{label:"CDC — Surgical Site Infection Prevention",url:"https://www.cdc.gov/infection-control/hcp/surgical-site-infection/"},
CDC_VTE:{label:"CDC — Venous Thromboembolism (DVT/PE)",url:"https://www.cdc.gov/blood-clots/about/"},
AHRQ_RRT:{label:"AHRQ PSNet — Rapid Response Systems",url:"https://psnet.ahrq.gov/primer/rapid-response-systems"},
NCBI_PERIOP:{label:"NCBI Bookshelf — Perioperative Care & Postoperative Complications",url:"https://www.ncbi.nlm.nih.gov/books/NBK613066/"},
NCBI_WOUND:{label:"NCBI Bookshelf — Wound Dehiscence",url:"https://www.ncbi.nlm.nih.gov/books/NBK551712/"},
ACC_BLEEDING:{label:"ACC — Management of Anticoagulant-Related Bleeding",url:"https://www.acc.org/latest-in-cardiology/ten-points-to-remember/2020/07/10/11/26/2020-acc-expert-consensus-decision-pathway-on-bleeding"},
ASRA_LAST:{label:"ASRA — Local Anesthetic Systemic Toxicity (LAST) Checklist",url:"https://asra.com/news-publications/asra-updates/blog-landing/guidelines/2020/11/01/checklist-for-treatment-of-local-anesthetic-systemic-toxicity"},
ASRA_ANTITHROMBOTIC:{label:"ASRA — Regional Anesthesia in Patients Receiving Antithrombotic or Thrombolytic Therapy, Fifth Edition",url:"https://rapm.bmj.com/content/50/1/7"},
APSF_OIVI:{label:"APSF — Monitoring for Opioid-Induced Respiratory Depression",url:"https://www.apsf.org/article/monitoring-for-opioid-induced-respiratory-depression/"},
MHAUS_MH:{label:"MHAUS — Managing an Acute Malignant Hyperthermia Crisis",url:"https://www.mhaus.org/healthcare-professionals/managing-a-crisis/"},
AABB_TRANSFUSION:{label:"AABB — Transfusion Reaction Evaluation",url:"https://www.aabb.org/aabb-store/product/guidelines-for-the-laboratory-evaluation-of-transfusion-reactions-1744"},
STANDARD_PHARM:{label:"Core pharmacology review — verify with institutional policy",url:"https://www.ncbi.nlm.nih.gov/books/"},
STANDARD_CLINICAL:{label:"Core adult surgical-nursing review — verify with institutional protocol",url:"https://www.ncbi.nlm.nih.gov/books/"},
STANDARD_NURSING:{label:"Core nursing prioritization/delegation review",url:"https://www.ncbi.nlm.nih.gov/books/"},
CALC:{label:"Medication calculation practice — generated for study",url:""},
LEWIS_STUDY:{label:"Lewis's Medical-Surgical Nursing — postoperative, chest-tube, PE and VTE review",url:""}
};
window.KSA_QUESTIONS=[];
window.KSA_CASES=window.KSA_CASES||{};
window.addKsa=rows=>window.KSA_QUESTIONS.push(...rows.map(r=>({id:r[0],caseId:r[1],category:r[2],difficulty:5,cognitive:'Third-order clinical reasoning',q:r[3],options:r[4],answer:r[5],rationale:r[6],source:r[7]})));
