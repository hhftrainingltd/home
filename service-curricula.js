(function(){
  var page=(location.pathname.split("/").pop()||"").toLowerCase();
  var configs={
    "ai-training-business.html":{
      label:"Business AI Curriculum",title:"Practical AI capability for modern organisations.",intro:"A complete curriculum for staff, managers and leaders who need measurable productivity gains without weakening confidentiality, quality or accountability.",image:"hhf-ai-business-hero.png",imageAlt:"Business team reviewing responsible AI workflows, productivity and governance",flow:[["Understand","AI, opportunities and limitations"],["Apply","Prompts, communication and workflows"],["Control","Data, checking and staff guidance"],["Improve","Adoption, evidence and measurable value"]],groups:[["staff","Staff","Modules 1–5","Workplace Practice","Foundations, communication and practical departmental workflows.",[1,2,3,4,5]],["managers","Managers","Modules 2–6","Managed Adoption","Risk, workflow improvement and team implementation.",[2,3,4,5,6]],["leaders","Leaders","Module 6","Strategy & Governance","Policy, investment, impact and accountable adoption.",[1,2,6]]],
      modules:[
        ["Business AI Foundations","Beginner","Build shared understanding of generative AI and its appropriate workplace role.",["AI and LLM terminology","Capabilities, limitations and hallucinations","Business use-case identification","Future workforce implications"],["Evaluate common tasks by value and risk","Check a generated business summary against source material"],"A customer-service team separates drafting support from decisions requiring staff authority.",["Staff explain AI accurately","Teams identify controlled use cases"],"Outputs remain drafts until checked by an accountable employee."],
        ["Responsible Use, Data and Risk","Beginner","Protect client, staff, commercial and organisational information.",["UK GDPR and confidentiality","Commercial sensitivity and intellectual property","Bias, fairness and reputational risk","Approved tools and escalation"],["Classify fictional data before tool use","Complete a business AI risk assessment"],"An HR team removes personal information before using an approved drafting workflow.",["Staff recognise prohibited inputs","Managers document controls and approvals"],"Sensitive information is never entered into unapproved services."],
        ["Prompting and Communication","Intermediate","Create consistent prompts for clear, audience-appropriate business communication.",["Role, context and output criteria","Emails, reports and proposals","Customer responses and FAQs","Reusable prompt libraries"],["Improve a weak workplace prompt","Build a department communication template"],"A complaints team drafts a response then checks facts, tone and policy alignment.",["Faster first drafts","More consistent communication"],"Human review confirms accuracy, commitments and organisational tone."],
        ["Productivity and Workflow Improvement","Intermediate","Redesign repetitive work around safe human-AI collaboration.",["Task and process mapping","Meeting notes and summaries","Document and report workflows","Automation opportunity assessment"],["Map one current workflow","Prototype a controlled time-saving process"],"An operations team turns verified meeting notes into an action tracker.",["Reduced avoidable administration","Clear ownership and review points"],"Automation includes named owners, exceptions and manual intervention."],
        ["Department Applications","Intermediate","Apply AI appropriately across business functions.",["Marketing and content","HR and learning","Finance and analysis support","Operations, projects and customer service"],["Develop a role-specific use case","Compare outputs against departmental standards"],"A finance team uses AI to explain variance commentary without uploading confidential figures.",["Relevant departmental templates","Better cross-team practice"],"Professional and regulatory requirements override generated suggestions."],
        ["Leadership, Governance and Impact","Advanced","Move from informal experimentation to governed adoption.",["AI policy and acceptable use","Change management and staff capability","Use-case registers and ownership","Impact, quality and ROI measures"],["Create a prioritised use-case register","Draft a 90-day adoption roadmap"],"A leadership team pilots one low-risk workflow and measures quality as well as time saved.",["Clear governance and roadmap","Evidence-led investment decisions"],"High-risk use cases require formal privacy, legal and leadership review."]
      ],evidence:[["Workflow map","A current process redesigned with controls."],["Prompt library","Reusable prompts with quality notes."],["Risk record","Data, accuracy and accountability checks."],["Business case","Benefits, costs and measures."],["Staff guidance","Clear acceptable-use expectations."],["Action plan","Priorities, owners and review dates."]]
    },
    "ai-public-sector-government.html":{
      label:"Public Sector AI Curriculum",title:"Responsible AI for public services and government.",intro:"A role-specific curriculum for public-service productivity, lawful practice, evidence awareness, transparency and public accountability.",image:"hhf-ai-public-sector-government-hero.png",imageAlt:"Public sector professionals reviewing responsible AI, evidence, policy and service data",flow:[["Understand","Public-sector AI opportunities"],["Protect","Law, data, equality and evidence"],["Apply","Services, policy and administration"],["Govern","Oversight, audit and public trust"]],groups:[["operations","Operational Teams","Modules 1–5","Public Service Practice","Safe research, documents, communication and service workflows.",[1,2,3,4,5]],["policy","Policy & Administration","Modules 2–5","Policy & Service Support","Evidence, policy development and citizen communication.",[2,3,4,5]],["leaders","Leaders & Governance","Module 6","Public Accountability","Governance, audit, implementation and public trust.",[1,2,6]]],
      modules:[
        ["Public Sector AI Foundations","Beginner","Understand generative AI in high-responsibility public-service contexts.",["AI terminology and limitations","Public value and service use cases","Hallucination and source verification","Automation versus accountable decisions"],["Evaluate a public-service output","Classify tasks by sensitivity and impact"],"A council team checks a generated briefing against verified local evidence.",["Shared AI literacy","Clear boundaries for use"],"AI supports work but does not exercise statutory authority."],
        ["Law, Data and Public Trust","Beginner","Apply privacy, confidentiality, equality and transparency principles.",["UK GDPR and sensitive information","Equality, bias and accessibility","Transparency and explainability","Records, retention and information governance"],["Complete a privacy and equality screen","Review a citizen-facing output for exclusion"],"A service team removes identifiable case information before any approved use.",["Safer information handling","Public-trust controls"],"Legal, DPO and safeguarding routes remain authoritative."],
        ["Evidence, Research and Analysis","Intermediate","Use AI cautiously for research, chronology and information synthesis.",["Source provenance","Evidence summaries and timelines","Legal and policy research support","Uncertainty and contradictory information"],["Verify a generated chronology","Audit citations and unsupported claims"],"A legal team uses AI to organise public material while checking every source.",["Improved research preparation","More visible uncertainty"],"Generated analysis is not treated as evidence or legal advice."],
        ["Documents, Policy and Citizen Communication","Intermediate","Improve drafting while preserving accuracy, accessibility and accountability.",["Briefings, reports and correspondence","Policy options and consultation themes","Accessible public information","Translation and plain language"],["Redraft a complex notice","Create a policy options table"],"A housing team prepares a plain-language draft then checks entitlements and local policy.",["Clearer public communication","More efficient drafting"],"Humans approve facts, commitments, legal meaning and publication."],
        ["Operational and Service Applications","Intermediate","Identify responsible applications across departments and frontline services.",["Police and investigation support","Councils and citizen services","Government administration","Social care and high-risk boundaries"],["Develop a departmental use case","Map human oversight and escalation"],"An administrative team summarises non-sensitive workflow themes for service improvement.",["Role-relevant workflows","Reduced unmanaged experimentation"],"High-impact and vulnerable-person contexts receive enhanced review."],
        ["Governance, Audit and Implementation","Advanced","Create an accountable adoption framework.",["Acceptable-use policy","Use-case register and risk tiers","Procurement and supplier questions","Audit trails, impact and review"],["Build a risk-tiered use-case register","Create an implementation and assurance plan"],"A department pilots a low-risk drafting tool with logs, measures and stop criteria.",["Governed adoption","Clear audit and ownership"],"Public accountability cannot be delegated to a vendor or model."]
      ],evidence:[["Use-case register","Value, sensitivity and risk tier."],["Information assessment","Privacy and equality considerations."],["Verified briefing","Sources and professional changes shown."],["Citizen resource","Accessibility and accuracy checked."],["Governance guide","Approvals and escalation routes."],["Implementation plan","Owners, measures and audit points."]]
    },
    "healthcare-ai-training.html":{
      label:"Healthcare AI Curriculum",title:"Safe, governed AI capability for health and care.",intro:"A practical curriculum for healthcare, NHS, mental-health and social-care professionals that protects confidentiality, safety and professional judgement.",image:"hhf-healthcare-ai-training-hero.png",imageAlt:"Healthcare professionals learning responsible AI for documentation, research and care planning",flow:[["Understand","AI capability and limitations"],["Protect","Patient data, safety and ethics"],["Support","Documents, research and communication"],["Govern","Human review and service assurance"]],groups:[["clinical","Clinical & Care","Modules 1–5","Safe Professional Support","Confidentiality, evidence, communication and care-focused use.",[1,2,3,4,5]],["admin","Administration & Research","Modules 1–5","Evidence & Productivity","Documentation, research preparation and service communication.",[1,2,3,4,5]],["leaders","Healthcare Leaders","Module 6","Governance & Improvement","Policy, assurance, pilots and measurable service value.",[1,2,6]]],
      modules:[
        ["Healthcare AI Foundations","Beginner","Build realistic understanding of AI in clinical and care environments.",["Generative AI terminology","Clinical versus administrative support","Hallucinations and evidence limits","Emerging healthcare technologies"],["Evaluate a health information output","Map appropriate and inappropriate tasks"],"A GP checks a generated explanation against trusted clinical guidance.",["Shared AI literacy","Clear role boundaries"],"AI does not diagnose, prescribe or replace clinical judgement."],
        ["Confidentiality, Safety and Ethics","Beginner","Protect patient, service-user and workforce information.",["Special-category data","Confidentiality and information governance","Bias, consent and accessibility","Safeguarding and incident escalation"],["Redact a fictional case","Complete a healthcare AI risk screen"],"A mental-health team avoids entering identifiable notes into a general tool.",["Safer data practice","Recognised escalation points"],"Local policy, Caldicott, DPO and safeguarding requirements take priority."],
        ["Documentation and Administration","Intermediate","Support drafting and organisation without weakening record quality.",["Letters, summaries and reports","Meeting and action records","Care-plan drafting support","Accuracy, provenance and amendments"],["Improve a fictional letter","Create a checked action summary"],"A care-home manager drafts a policy summary then verifies every requirement.",["Reduced administrative burden","Clearer reviewed documents"],"Professionals approve all records before storage or use."],
        ["Research and Evidence Support","Intermediate","Use AI to frame questions and organise evidence responsibly.",["Literature searching","Source and citation verification","Evidence summaries","Research ethics and uncertainty"],["Audit an AI evidence summary","Develop verified search terms"],"A clinician uses AI to refine a question then reads the original evidence.",["Better research preparation","Stronger source checking"],"Generated citations and clinical claims are never assumed correct."],
        ["Communication and Inclusive Resources","Intermediate","Create clear information while respecting needs, consent and health literacy.",["Patient and family information","Plain language and alternative formats","Psychoeducation resources","Translation and cultural fairness"],["Adapt a resource for health literacy","Review tone, bias and accessibility"],"A service creates an appointment guide that staff check against local pathways.",["Clearer communication","More accessible resources"],"Materials are clinically and organisationally approved before use."],
        ["Governance and Service Improvement","Advanced","Plan controlled adoption and measurable service value.",["Approved-use policy","Use-case risk tiers","Supplier and tool assurance","Impact, workflow and workforce planning"],["Create a healthcare use-case register","Design a controlled pilot"],"An NHS team measures documentation time while monitoring accuracy and staff corrections.",["Governed implementation","Balanced benefit and safety evidence"],"Higher-risk uses require formal clinical-safety and information-governance review."]
      ],evidence:[["Risk screen","Data, safety and ethical controls."],["Checked document","Professional amendments shown."],["Evidence review","Sources verified and limitations noted."],["Patient resource","Health literacy and accessibility checked."],["Use-case register","Risk tiers and owners."],["Pilot plan","Measures, review and stop criteria."]]
    },
    "cpd-professional-development.html":{
      label:"Professional Development Curriculum",title:"AI-enabled CPD that changes professional practice.",intro:"A structured curriculum for designing, facilitating, evaluating and improving professional learning with responsible AI support.",image:"hhf-cpd-development-hero.png",imageAlt:"Professionals collaborating on structured continuing professional development",flow:[["Diagnose","Needs, roles and priorities"],["Design","Outcomes, activities and evidence"],["Develop","Resources, reflection and coaching"],["Evaluate","Impact, transfer and improvement"]],groups:[["practitioners","Practitioners","Modules 1–3","Professional Capability","AI literacy, needs analysis and applied professional learning.",[1,2,3]],["facilitators","Facilitators & Coaches","Modules 2–5","Learning Facilitation","Design, resources, coaching and impact evaluation.",[2,3,4,5]],["leaders","Learning Leaders","Module 6","CPD Strategy & Quality","Governance, accreditation and organisational capability.",[1,2,5,6]]],
      modules:[
        ["AI and Modern Professional Learning","Beginner","Understand how AI changes skills, roles and continuing development.",["AI literacy for professionals","Changing capability needs","Limitations and responsible use","Future skills and employability"],["Complete an AI capability self-review","Evaluate a professional learning use case"],"A manager identifies where AI literacy belongs in a team development plan.",["Clear capability priorities","Shared responsible-use language"],"AI supports development but does not replace professional standards."],
        ["Training Needs and Capability Analysis","Beginner–Intermediate","Use evidence to identify genuine development needs.",["Role and task analysis","Skills-gap evidence","Learner starting points","Prioritisation and success measures"],["Create a capability matrix","Draft a training-needs analysis"],"A quality team links recurring audit findings to targeted staff CPD.",["More focused development plans","Evidence-led priorities"],"Personal or performance data is handled through approved processes."],
        ["CPD and Learning Design","Intermediate","Create aligned professional learning with measurable outcomes.",["Learning objectives","Programme and pathway design","Active learning and reflection","Assessment and evidence"],["Design a mapped CPD module","Create a workplace application task"],"A provider designs assessor CPD around evidence quality and standardisation.",["Structured programmes","Clear transfer to practice"],"Subject experts validate accuracy and professional relevance."],
        ["Resources, Facilitation and Coaching","Intermediate","Develop engaging resources and support reflective professional growth.",["Presentations and learning materials","Scenarios and case studies","Coaching and mentoring prompts","Inclusive professional learning"],["Create and critique a CPD resource","Build a coaching question set"],"A leader adapts a generic scenario to match staff roles and organisational policy.",["Better resources","Stronger reflective practice"],"Facilitators retain responsibility for context, sensitivity and group needs."],
        ["Evaluation and Impact","Intermediate–Advanced","Measure whether professional learning changes behaviour and outcomes.",["Reaction, learning and transfer","Workplace evidence","Observation and feedback","Impact reporting and improvement"],["Create an evaluation framework","Analyse fictional feedback themes"],"A team compares confidence data with observed changes in practice.",["Visible CPD impact","Better improvement decisions"],"Claims of impact are supported by evidence, not generated narrative."],
        ["CPD Strategy and Quality","Advanced","Build a coherent organisational approach to professional capability.",["CPD policy and governance","Accreditation and records","Communities of practice","Annual development planning"],["Draft a CPD strategy map","Build a quality and review cycle"],"An organisation aligns CPD priorities with risk, quality and workforce plans.",["Sustainable staff development","Clear records and oversight"],"Current awarding-body and professional requirements are checked at source."]
      ],evidence:[["Capability matrix","Roles, gaps and priorities."],["Mapped module","Outcomes, activities and evidence."],["Learning resource","Reviewed for accuracy and access."],["Coaching toolkit","Questions and reflection prompts."],["Impact framework","Measures and evidence sources."],["CPD strategy","Governance and annual cycle."]]
    },
    "ai-personal-training-professionals.html":{
      label:"Professional AI Coaching Curriculum",title:"Role-specific AI capability for individual professionals.",intro:"A personalised curriculum that turns real professional tasks into safe, repeatable and high-quality AI-supported workflows.",image:"hhf-ai-personal-training-professionals-hero.png",imageAlt:"Professional receiving individual AI coaching for productivity and responsible practice",flow:[["Diagnose","Role, goals and confidence"],["Build","Prompts, tools and checking"],["Apply","Real tasks and workflows"],["Embed","Templates, habits and impact"]],groups:[["foundation","Foundations","Modules 1–2","Personal AI Baseline","Goals, tool selection, safety and professional boundaries.",[1,2]],["workflows","Professional Workflows","Modules 3–5","Applied Productivity","Prompts, research, communication and repeatable workflows.",[3,4,5]],["advanced","Advanced Practice","Module 6","Implementation & Impact","Sustainable habits, measures and continued development.",[1,5,6]]],
      modules:[
        ["Personal AI Baseline","Beginner","Establish current confidence, goals, tasks and risk boundaries.",["AI foundations","Role and task analysis","Current tools and habits","Success measures"],["Complete a confidence and workflow audit","Prioritise three use cases"],"A consultant identifies proposal drafting as useful but excludes confidential client data.",["Personal learning priorities","Clear safe-use boundaries"],"Professional duties and employer policy shape every use case."],
        ["Tools and Responsible Practice","Beginner","Choose tools according to task, privacy and professional standards.",["General and specialist platforms","Accounts and data settings","Confidentiality and intellectual property","Output evaluation"],["Compare two tools on a low-risk task","Create a personal safety checklist"],"A lawyer tests structure generation with fictional rather than client material.",["Better tool choices","Safer working habits"],"Sensitive information stays out of unapproved platforms."],
        ["Professional Prompt Design","Intermediate","Create prompts for specialist documents, research and communication.",["Context and professional role","Criteria and output structures","Reusable templates","Iteration and quality rubrics"],["Build three role-specific prompts","Evaluate and refine one output"],"An academic creates a literature-scoping prompt with explicit source checks.",["Consistent prompt templates","Higher-quality drafts"],"Prompts do not delegate accountable professional decisions."],
        ["Research, Writing and Communication","Intermediate","Improve preparation, clarity and organisation of professional work.",["Research questions and source checks","Reports, proposals and briefings","Emails and stakeholder communication","Presentations and summaries"],["Produce an annotated draft","Verify a generated research summary"],"A doctor drafts a general patient-information outline and checks it against approved guidance.",["Faster preparation","Clearer reviewed communication"],"Facts, citations and professional advice are independently verified."],
        ["Workflow and Productivity Design","Intermediate–Advanced","Turn isolated prompts into repeatable controlled workflows.",["Task decomposition","Templates and checklists","Automation opportunities","Knowledge organisation"],["Map a recurring workflow","Create a reusable professional toolkit"],"A manager converts verified meeting notes into actions with named owners.",["Reduced repetitive work","Repeatable quality controls"],"Every workflow has a human review and exception route."],
        ["Professional Implementation Plan","Advanced","Embed AI use responsibly and measure personal value.",["Habit and capability development","Portfolio of tested use cases","Time and quality measures","Future learning roadmap"],["Create a 30-day plan","Review evidence of benefit and risk"],"A professional tracks time saved alongside corrections required.",["Sustainable personal practice","Evidence-led next steps"],"Use stops where risk, quality or professional rules cannot be controlled."]
      ],evidence:[["Baseline review","Goals, tasks and boundaries."],["Tool scorecard","Purpose, privacy and limitations."],["Prompt toolkit","Reusable role-specific templates."],["Annotated output","Checks and professional changes."],["Workflow map","Steps, controls and exceptions."],["30-day plan","Measures and development actions."]]
    },
    "ai-readiness-digital-transformation.html":{
      label:"AI Readiness Curriculum",title:"From AI ambition to governed digital transformation.",intro:"A strategic curriculum for assessing readiness, selecting priorities and implementing responsible AI through people, process, data, technology and governance.",image:"hhf-ai-readiness-hero.png",imageAlt:"Leadership team reviewing AI readiness, governance and digital transformation",flow:[["Assess","People, process, data and technology"],["Prioritise","Value, feasibility and risk"],["Prepare","Governance, skills and foundations"],["Transform","Pilots, measures and scaling"]],groups:[["people","People & Process","Modules 1–4","Organisational Readiness","Processes, use cases, capability and change.",[1,2,4]],["technology","Data & Technology","Modules 2–3","Digital Foundations","Data, systems, cyber security and supplier assurance.",[2,3]],["leaders","Leaders & Governance","Modules 4–6","Transformation Leadership","Governance, roadmaps, pilots and value realisation.",[1,4,5,6]]],
      modules:[
        ["AI Readiness Foundations","Beginner","Create a shared understanding of readiness and transformation.",["AI opportunity and limitation","Readiness dimensions","Digital maturity","Transformation principles"],["Complete a readiness self-assessment","Identify current strengths and constraints"],"A leadership team separates technology enthusiasm from operational readiness.",["Shared readiness language","Initial maturity baseline"],"Readiness claims are supported by organisational evidence."],
        ["Process and Use-Case Discovery","Intermediate","Find problems worth solving before selecting tools.",["Process mapping","Pain points and demand","Use-case design","Value, feasibility and risk"],["Map a priority process","Score candidate use cases"],"An organisation prioritises document triage over a high-risk automated decision use case.",["Prioritised opportunities","Clear problem statements"],"Use cases begin with service need, not vendor capability."],
        ["Data, Technology and Cyber Readiness","Intermediate","Assess the foundations needed for reliable implementation.",["Data quality and access","Systems and integration","Cybersecurity and identity","Supplier and platform assurance"],["Complete a foundation gap analysis","Draft supplier assurance questions"],"A team delays automation until access controls and data ownership are clear.",["Visible technical dependencies","Reduced implementation risk"],"Security, privacy and architecture specialists approve relevant controls."],
        ["People, Skills and Change","Intermediate","Prepare leaders and staff for new ways of working.",["Capability frameworks","Change impact and communication","Roles and ownership","Training and support"],["Create a stakeholder map","Build a capability development plan"],"A department trains reviewers before introducing AI-supported drafting.",["Stronger adoption readiness","Defined responsibilities"],"Transformation includes workload, equality and employee-impact review."],
        ["Governance, Policy and Risk","Advanced","Build proportionate controls for responsible adoption.",["AI principles and policy","Risk tiers and approvals","Monitoring and incidents","Documentation and audit"],["Design a governance workflow","Create a risk-tiered use-case register"],"A steering group defines who may approve low, medium and high-risk uses.",["Clear governance model","Consistent decision records"],"High-risk systems receive legal, privacy, security and domain review."],
        ["Roadmap, Pilots and Value Realisation","Advanced","Turn readiness findings into phased implementation.",["Roadmap and dependencies","Pilot design","Benefits and quality measures","Scaling and continuous review"],["Create a phased roadmap","Design a measurable pilot"],"A pilot tracks time, quality, error correction and user confidence.",["Actionable transformation roadmap","Evidence for scaling decisions"],"Projects scale only when benefits and controls are demonstrated."]
      ],evidence:[["Readiness assessment","People, process, data and technology."],["Use-case register","Value, feasibility and risk."],["Gap analysis","Foundations and dependencies."],["Capability plan","Roles, learning and change."],["Governance model","Approvals and monitoring."],["Transformation roadmap","Pilots, measures and scaling."]]
    },
    "training-centre-development-approval-support.html":{
      label:"Training Centre Development Curriculum",title:"Build an approval-ready, quality-led training centre.",intro:"A complete development pathway covering strategic intent, curriculum, assessment, staffing, documentation, quality assurance and sustainable centre growth.",image:"hhf-training-centre-development-hero.png",imageAlt:"Training centre leaders reviewing approval documentation, curriculum and quality systems",flow:[["Define","Purpose, market and qualifications"],["Build","Curriculum, people and systems"],["Assure","Assessment, IQA and compliance"],["Approve","Evidence, action and sustainable growth"]],groups:[["setup","Centre Setup","Modules 1–3","Build the Foundations","Strategy, qualifications, curriculum and competent staffing.",[1,2,3]],["quality","Assessment & IQA","Modules 4–5","Quality Systems","Assessment, learner records, IQA and compliance.",[2,3,4,5]],["leaders","Centre Leaders","Modules 1 & 6","Approval & Growth","Readiness, approval evidence, launch and improvement.",[1,5,6]]],
      modules:[
        ["Centre Strategy and Readiness","Beginner","Define a viable centre model and assess organisational readiness.",["Purpose and target learners","Qualification and market analysis","Governance and legal structure","Resources and readiness"],["Complete a readiness review","Draft a centre development brief"],"A provider tests employer demand before selecting qualifications.",["Clear centre proposition","Visible readiness gaps"],"Approval ambitions are matched to resources and competent staff."],
        ["Qualification and Curriculum Design","Intermediate","Select provision and map a coherent learner journey.",["Awarding-organisation research","Qualification specifications","Curriculum mapping","Schemes of work and resources"],["Build a qualification selection matrix","Create a curriculum map"],"A centre maps every learning outcome to teaching and evidence.",["Coherent curriculum architecture","Documented coverage"],"Current specifications and approval criteria are checked directly."],
        ["Staffing and Professional Competence","Intermediate","Establish qualified, competent and supported teams.",["Tutor, assessor and IQA roles","Occupational competence","Recruitment and induction","CPD and standardisation"],["Create a staffing matrix","Draft an induction and CPD plan"],"A centre identifies an IQA capacity gap before learner enrolment.",["Role clarity","Evidence of competence and development"],"Staff are not allocated beyond their competence or approval scope."],
        ["Assessment and Learner Systems","Intermediate","Build fair assessment, support and evidence processes.",["Assessment strategy","Initial assessment and support","Portfolio and tracking systems","Feedback and reasonable adjustment"],["Create an assessment plan","Map the learner journey and records"],"A vocational centre builds observation, discussion and portfolio evidence routes.",["Reliable assessment systems","Traceable learner progress"],"Assessment remains valid, authentic, reliable, current and sufficient."],
        ["IQA, Compliance and Documentation","Advanced","Create approval-ready quality assurance and control systems.",["Risk-based IQA and CAMERA","Policies and document control","Standardisation and actions","Audit and EQA readiness"],["Build an IQA sampling plan","Complete a mock file audit"],"A new centre samples early assessment decisions before claims.",["Visible quality controls","Stronger approval evidence"],"Policies reflect actual practice and current awarding requirements."],
        ["Approval, Launch and Improvement","Advanced","Prepare evidence, respond to findings and sustain quality after approval.",["Application evidence","Site and resource readiness","Action plans and conditions","KPIs, SAR and QIP"],["Create an approval evidence index","Build a first-year quality plan"],"A centre tracks enrolment, progress, assessment and IQA actions from launch.",["Organised approval submission","Sustainable improvement cycle"],"Approval is treated as the start of quality responsibility, not the finish."]
      ],evidence:[["Readiness review","Strategic and resource gaps."],["Qualification matrix","Demand, fit and requirements."],["Curriculum map","Outcomes, learning and evidence."],["Staff matrix","Roles, competence and CPD."],["Quality toolkit","Assessment, IQA and policies."],["Approval index","Evidence, actions and launch plan."]]
    }
  };

  var config=configs[page];
  if(!config)return;

  var css=document.createElement("link");
  css.rel="stylesheet";
  css.href="service-curricula.css";
  document.head.appendChild(css);
  var pathwayCss=document.createElement("link");
  pathwayCss.rel="stylesheet";
  pathwayCss.href="service-curricula-pathways.css";
  document.head.appendChild(pathwayCss);

  function esc(value){
    return String(value).replace(/[&<>"']/g,function(char){
      return {"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"}[char];
    });
  }

  function list(items){
    return "<ul>"+items.map(function(item){return "<li>"+esc(item)+"</li>";}).join("")+"</ul>";
  }

  function renderModule(module,index){
    var moduleNumber=index+1;
    var groupKeys=config.groups.filter(function(group){
      return group[5].indexOf(moduleNumber)!==-1;
    }).map(function(group){return group[0];}).join(" ");
    return '<details class="service-module reveal" data-groups="'+esc(groupKeys)+'">'+
      '<summary><span class="service-module-number">'+String(index+1).padStart(2,"0")+'</span>'+
      '<span class="service-module-heading"><b>'+esc(module[1])+'</b><h3>'+esc(module[0])+'</h3><p>'+esc(module[2])+'</p></span></summary>'+
      '<div class="service-module-body"><p class="service-module-purpose">'+esc(module[2])+'</p>'+
      '<div class="service-module-grid">'+
      '<section class="service-module-block"><h4>Learning objectives and topics</h4>'+list(module[3])+'</section>'+
      '<section class="service-module-block"><h4>Practical activities</h4>'+list(module[4])+'</section>'+
      '<section class="service-module-block"><h4>Real-world example</h4><p>'+esc(module[5])+'</p></section>'+
      '<section class="service-module-block"><h4>Expected outcomes</h4>'+list(module[6])+'</section>'+
      '<section class="service-module-block checkpoint"><h4>Professional checkpoint</h4><p>'+esc(module[7])+'</p></section>'+
      '</div></div></details>';
  }

  var covers=document.getElementById("covers")||document.getElementById("what-the-training-covers");
  if(covers){
    covers.innerHTML='<div class="service-curriculum-shell">'+
      '<div class="service-curriculum-head reveal"><span class="service-curriculum-label">'+esc(config.label)+'</span><h2>'+esc(config.title)+'</h2><p>'+esc(config.intro)+'</p></div>'+
      '<div class="service-pathway reveal"><h3>One curriculum, clear professional pathways</h3><p>Shared knowledge first, role-specific application next, practical evidence throughout.</p>'+
      '<div class="service-pathway-diagram">'+
      '<div class="service-diagram-node"><span class="service-diagram-icon">+</span><strong>'+esc(config.flow[0][0])+'</strong><small>'+esc(config.flow[0][1])+'</small></div>'+
      '<div class="service-diagram-arrow">›</div>'+
      '<div class="service-diagram-pathways"><strong>Role-specific pathways</strong><div class="service-diagram-groups">'+config.groups.map(function(group,index){return '<div class="service-diagram-group"><span>'+String(index+1).padStart(2,"0")+'</span><b>'+esc(group[1])+'</b><small>'+esc(group[3])+'</small></div>';}).join("")+'</div></div>'+
      '<div class="service-diagram-arrow">›</div>'+
      '<div class="service-diagram-node"><span class="service-diagram-icon">=</span><strong>Portfolio Evidence</strong><small>'+esc(config.flow[3][1])+'</small></div>'+
      '</div><p class="service-pathway-message">AI supports the work. Professionals retain control and accountability.</p></div>'+
      '<div class="service-group-cards">'+config.groups.map(function(group){return '<article class="service-group-card reveal"><span>'+esc(group[2])+'</span><h3>'+esc(group[3])+'</h3><p>'+esc(group[4])+'</p></article>';}).join("")+'</div>'+
      '<div class="service-module-controls reveal" role="group" aria-label="Filter curriculum modules by pathway">'+
      '<button class="service-module-filter is-active" type="button" data-filter="all" aria-pressed="true">All Modules</button>'+
      config.groups.map(function(group){return '<button class="service-module-filter" type="button" data-filter="'+esc(group[0])+'" aria-pressed="false">'+esc(group[1])+'</button>';}).join("")+
      '</div><p class="service-module-status" aria-live="polite">Showing all '+config.modules.length+' modules.</p>'+
      '<div class="service-module-list">'+config.modules.map(renderModule).join("")+'</div>'+
      '<div class="service-visual-pair">'+
      '<figure class="service-visual-card reveal"><img src="'+esc(config.image)+'" alt="'+esc(config.imageAlt)+'" loading="lazy"></figure>'+
      '<div class="service-visual-card service-review-loop reveal"><h3>Human review remains central</h3><p>Every AI-supported task follows the same accountable pattern.</p><div class="service-review-steps">'+
      '<div class="service-review-step"><span>1</span><div><strong>Define</strong><small>Set the purpose, evidence and quality criteria.</small></div></div>'+
      '<div class="service-review-step"><span>2</span><div><strong>Protect</strong><small>Use approved tools and safe, minimal information.</small></div></div>'+
      '<div class="service-review-step"><span>3</span><div><strong>Generate</strong><small>Treat output as a draft, not a decision.</small></div></div>'+
      '<div class="service-review-step"><span>4</span><div><strong>Verify and approve</strong><small>Check, adapt, document and retain professional responsibility.</small></div></div>'+
      '</div></div></div>'+
      '<div class="service-portfolio">'+config.evidence.map(function(item){return '<article class="service-evidence reveal"><strong>'+esc(item[0])+'</strong><p>'+esc(item[1])+'</p></article>';}).join("")+'</div>'+
      '</div>';
  }

  var filterButtons=document.querySelectorAll(".service-module-filter");
  var serviceModules=document.querySelectorAll(".service-module");
  var moduleStatus=document.querySelector(".service-module-status");
  filterButtons.forEach(function(button){
    button.addEventListener("click",function(){
      var filter=button.getAttribute("data-filter");
      var visible=0;
      filterButtons.forEach(function(item){
        var active=item===button;
        item.classList.toggle("is-active",active);
        item.setAttribute("aria-pressed",String(active));
      });
      serviceModules.forEach(function(module){
        var groups=(module.getAttribute("data-groups")||"").split(" ");
        var show=filter==="all"||groups.indexOf(filter)!==-1;
        module.hidden=!show;
        if(show){
          visible+=1;
        }else{
          module.open=false;
        }
      });
      if(moduleStatus){
        moduleStatus.textContent=filter==="all"
          ?"Showing all "+visible+" modules."
          :"Showing "+visible+" module"+(visible===1?"":"s")+" for "+button.textContent.trim()+".";
      }
    });
  });

  ["delivery","delivery-options"].forEach(function(id){
    var section=document.getElementById(id);
    if(section)section.remove();
  });

  document.querySelectorAll('a[href="#delivery"],a[href="#delivery-options"]').forEach(function(link){
    link.remove();
  });

  document.querySelectorAll('a[href="#covers"],a[href="#what-the-training-covers"]').forEach(function(link){
    if(link.closest("nav")||link.closest(".footer-links")){
      link.textContent="Curriculum";
    }
  });

  document.querySelectorAll("details").forEach(function(item){
    var text=item.textContent.toLowerCase();
    if(text.indexOf("delivered online")!==-1||text.indexOf("delivery format")!==-1||text.indexOf("in-house")!==-1&&text.indexOf("hybrid")!==-1){
      item.remove();
    }
  });

  var revealItems=document.querySelectorAll(".service-curriculum-shell .reveal");
  if(!("IntersectionObserver" in window)){
    revealItems.forEach(function(item){item.classList.add("show");});
  }else{
    var observer=new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        if(entry.isIntersecting){
          entry.target.classList.add("show");
          observer.unobserve(entry.target);
        }
      });
    },{threshold:.08});
    revealItems.forEach(function(item){observer.observe(item);});
  }
})();
