export interface IndustryPage {
  slug: string
  label: string
  h1: string
  metaDescription: string
  pain: string
  scenarios: { title: string; story: string; result: string }[]
  forYou: string[]
  notForYou: string[]
  faqs: { question: string; answer: string }[]
}

export const industries: IndustryPage[] = [
  {
    slug: 'marketing-agencies',
    label: 'Marketing Agencies',
    h1: 'Client Intelligence for Marketing Agencies',
    metaDescription: 'Marketing agencies serving multiple clients need isolated workspaces, consistent frameworks, and scalable delivery. Client Intelligence is built for multi-client marketing work.',
    pain: 'Marketing agencies face a constant tension: clients demand personalized, brand-specific work, but internal delivery must be efficient enough to be profitable. Generic AI tools produce generic outputs. Manual work doesn\'t scale. And when client data isn\'t isolated, the risk of mixing brand voice, strategy, and confidential information across accounts grows with every new client you take on.',
    scenarios: [
      { title: 'The Brand Voice Consistency Problem', story: 'A 12-client marketing agency was struggling with brand voice consistency across their team. Different writers applied different interpretations of each client\'s guidelines. Client complaints were increasing.', result: 'After encoding each client\'s brand guidelines in isolated workspaces and the agency\'s content methodology in the Account Brain, all writers produced on-brand content from the first draft. Client complaints stopped.' },
      { title: 'The Capacity Ceiling Hit', story: 'A boutique marketing agency maxed at eight clients because every campaign required senior strategist time. They couldn\'t take on the ninth client without compromising quality on the existing eight.', result: 'After systematizing their campaign strategy framework in Client Intelligence, junior team members ran initial campaign development within each client workspace. Senior strategists reviewed rather than built. They took on four new clients in three months.' },
      { title: 'The Data Risk Incident', story: 'Two competing brands were both clients of the same agency. A team member accidentally included competitive intelligence from one client in a briefing for the other. The fallout cost the agency both clients.', result: 'After switching to Client Intelligence with isolated workspaces, competitive intelligence from Client A can never appear in Client B\'s workspace. The agency now actively markets their data isolation as a competitive clients-in-same-industry feature.' },
    ],
    forYou: [
      'You serve multiple clients across different brands and need consistent, isolated delivery',
      'Your agency has a defined methodology you want applied consistently across all accounts',
      'You want to scale client capacity without proportionally increasing headcount',
      'You need to guarantee data isolation between clients  -  especially competing brands',
    ],
    notForYou: [
      'You work exclusively with one client or brand on a long-term retainer',
      'Your work is purely creative with no repeatable strategy methodology',
      'Data isolation between clients is not a concern in your client mix',
    ],
    faqs: [
      { question: 'How does Client Intelligence handle brand-specific guidelines per client?', answer: 'Each client workspace holds their specific brand guidelines, tone of voice documents, and campaign history. When Intelligence works in that workspace, it applies that client\'s guidelines automatically  -  not generic brand best practices.' },
      { question: 'Can my entire team access Workspaces?', answer: 'Yes. All account users can access workspaces assigned to them. Workspace isolation is between clients, not between team members within your account.' },
      { question: 'How do I handle clients who are direct competitors?', answer: 'Isolated workspaces provide structural data separation. Competitive intelligence, campaign strategies, and brand information for each client stay within their workspace  -  architecturally unable to cross to a competitor\'s workspace.' },
      { question: 'Is this useful for performance marketing agencies specifically?', answer: 'Yes. Campaign frameworks, optimization playbooks, and performance benchmarks can all be encoded. Client-specific performance data and campaign history lives in each client workspace  -  informing AI analysis within that account only.' },
    ],
  },
  {
    slug: 'consulting-firms',
    label: 'Consulting Firms',
    h1: 'Client Intelligence for Consulting Firms',
    metaDescription: 'Consulting firms need consistent methodology, institutional knowledge retention, and scalable delivery. Client Intelligence provides the AI infrastructure for multi-client consulting practices.',
    pain: 'Consulting firms are built on methodology  -  but methodology is only valuable if it\'s applied consistently. When methodology lives in individuals\' heads rather than organizational systems, quality varies by consultant, knowledge walks out with departing employees, and new hires take 12+ months to perform at standard. The intellectual capital that defines a firm\'s reputation is also its most fragile asset.',
    scenarios: [
      { title: 'The Methodology Inconsistency Problem', story: 'A 15-person consulting firm noticed that their deliverables varied significantly in quality and approach depending on which consultant led the engagement. Client feedback was inconsistent. The firm\'s brand reputation was at risk.', result: 'After encoding their core methodology in Client Intelligence, all 15 consultants produced from the same framework foundation. Deliverable consistency increased and client satisfaction scores improved across the board.' },
      { title: 'The Senior Partner Departure', story: 'When a founding partner retired, 30% of the firm\'s practical methodology walked out with her. The remaining partners spent 18 months trying to reconstruct it from client deliverables and memory.', result: 'A similar firm, after experiencing a different partner departure, proactively encoded all senior partner knowledge in Client Intelligence. When the second partner later retired, knowledge transfer took three weeks, not 18 months.' },
      { title: 'The Junior Consultant Ramp Time', story: 'New consultants at a mid-sized strategy firm required 9–12 months of supervised work before they could lead client engagements independently. The cost of this ramp was significant.', result: 'With the firm\'s methodology in Client Intelligence, new consultants produced on-framework deliverables within their first month. Ramp time to independent engagement leadership dropped to 10 weeks.' },
    ],
    forYou: [
      'You have a defined consulting methodology that should be applied consistently across all engagements',
      'You serve multiple clients and want per-client context isolation',
      'You want to preserve institutional knowledge even as team members change',
      'You want junior consultants to perform at senior-level methodology within weeks',
    ],
    notForYou: [
      'Your firm deliberately operates with no shared methodology  -  all engagements are bespoke',
      'You serve one long-term client and multi-client isolation isn\'t relevant',
      'You prefer methodology to live with individual consultants rather than organizational systems',
    ],
    faqs: [
      { question: 'How do we handle client confidentiality across engagements?', answer: 'Each client gets an isolated workspace. Data from one engagement cannot appear in another  -  architecturally. This satisfies the information barriers required by most professional services NDAs.' },
      { question: 'Can we build firm-wide methodology while preserving practice area specialization?', answer: 'Yes. Your Account Brain can hold both shared firm-wide methodology and practice-area-specific frameworks. Intelligence applies the relevant layer based on the engagement type.' },
      { question: 'How do we prevent the Account Brain from becoming outdated?', answer: 'Assign ownership of Account Brain maintenance to a practice lead or knowledge management role. Quarterly reviews to update, refine, and archive outdated content keep it current.' },
      { question: 'Can Client Intelligence handle complex, multi-team engagements?', answer: 'Yes. Large engagement workspaces can hold the full project context, methodology, documents, and project management for all teams involved in the engagement  -  unified in one workspace.' },
    ],
  },
  {
    slug: 'coaching-businesses',
    label: 'Coaching Businesses',
    h1: 'Client Intelligence for Coaching Businesses',
    metaDescription: 'Coaches who serve multiple clients need per-client memory, consistent framework application, and scalable delivery. Client Intelligence gives coaching businesses the AI infrastructure they need.',
    pain: 'Coaching is deeply personal  -  each client deserves your full attention and memory of their journey. But the mechanics of coaching  -  session prep, note-taking, progress tracking, homework follow-up  -  consume enormous time that could go into the coaching itself. And when you serve 15 clients, maintaining that depth of attention for each one manually becomes impossible.',
    scenarios: [
      { title: 'The Memory Failure Moment', story: 'A business coach was mortified when she forgot a major breakthrough her client had shared in session three. The client noticed and the trust eroded. It was a relationship she never fully recovered.', result: 'After logging all sessions in Client Intelligence workspaces, the coach now reviews a brief Intelligence summary before each session. She references the client\'s full journey accurately in every conversation.' },
      { title: 'The Group Program Scale', story: 'A leadership coach launched a group program with 25 participants. Maintaining individual context for each person while running group sessions was cognitively impossible.', result: 'Each participant got a workspace. The coach maintains individual context without the overhead. She\'s running two cohorts simultaneously  -  50 individual clients managed with the same attention as 12.' },
      { title: 'The Preparation Time Problem', story: 'A high-performance coach spent 45 minutes preparing for each client session  -  reviewing past notes and designing the session structure. With 18 clients, that was 13+ hours of prep per week.', result: 'After logging all sessions in Client Intelligence, pre-session prep dropped to 10 minutes. Intelligence surfaces what matters most about each client. The coach reclaimed 10 hours per week.' },
    ],
    forYou: [
      'You serve multiple coaching clients simultaneously and want to maintain depth with each one',
      'Your coaching methodology is defined enough to encode and apply consistently',
      'You want to scale your coaching practice without burning out on prep and administration',
      'You want per-client memory that grows throughout the coaching relationship',
    ],
    notForYou: [
      'You serve one or two clients and manual context management is practical',
      'Your coaching is purely intuitive with no repeatable framework to encode',
      'You prefer not to use AI in any part of your coaching practice',
    ],
    faqs: [
      { question: 'Can I use Client Intelligence for executive coaching?', answer: 'Yes. The platform handles any coaching methodology  -  executive, business, life, or health coaching. Each client\'s workspace holds their specific goals, history, and progress entirely separate from other clients.' },
      { question: 'How do I handle session note privacy for coaching clients?', answer: 'You control what goes in each workspace. For sensitive clients, you can limit uploads to goal tracking and framework application without detailed session notes. The workspace is your internal tool  -  not shared with clients.' },
      { question: 'Is this appropriate for trauma-informed or mental health coaching?', answer: 'Client Intelligence is an AI tool for service businesses. For mental health-adjacent coaching, consult your professional guidelines about AI tools for clinical work. The platform is designed for business and professional coaching contexts.' },
      { question: 'Can I track homework and commitments per client?', answer: 'Yes. Use the workspace to log homework assigned, commitments made, and completion status. Intelligence can surface outstanding commitments before each session automatically.' },
    ],
  },
  {
    slug: 'sales-consulting',
    label: 'Sales Consulting',
    h1: 'Client Intelligence for Sales Consulting Practices',
    metaDescription: 'Sales consultants need per-client context, consistent frameworks, and scalable delivery across their book of business. Client Intelligence provides the infrastructure for multi-client sales consulting.',
    pain: 'Sales consulting is deeply contextual  -  every client has different sales processes, team dynamics, market conditions, and buying patterns. Generic advice doesn\'t work. But delivering deeply contextual advice to ten clients simultaneously, while maintaining the depth that makes sales consulting valuable, requires infrastructure most consultants don\'t have.',
    scenarios: [
      { title: 'The Context Depth Problem', story: 'A sales consultant serving eight clients found that her advice was becoming more generic as she scaled. Each client felt she didn\'t understand their specific sales context deeply enough. Two didn\'t renew.', result: 'After encoding her sales frameworks in the Account Brain and building deep context for each client in isolated workspaces, her advice became more contextual, not less. No renewals were lost in the following year.' },
      { title: 'The Playbook Inconsistency', story: 'A sales training firm had developed a proven sales playbook. When delivered by different consultants, the results varied dramatically. Some clients succeeded; others didn\'t.', result: 'After encoding the playbook in Client Intelligence and using it as the foundation for every client engagement, outcomes became more consistent. The firm\'s case study data strengthened significantly.' },
      { title: 'The Competitive Win/Loss Analysis Scale', story: 'A sales consultant analyzed win/loss patterns for clients. Each analysis was thorough but took two days per client. At six clients, twelve days per quarter went to analysis.', result: 'After building a win/loss analysis framework in Client Intelligence and applying it within each client workspace, analysis time dropped to half a day per client. Quality improved because the framework was applied completely every time.' },
    ],
    forYou: [
      'You serve multiple sales consulting clients with distinct sales contexts',
      'You have a sales methodology or playbook worth encoding and applying consistently',
      'You want to scale your client base without losing the contextual depth clients value',
      'You need per-client data isolation for companies that may be competitors',
    ],
    notForYou: [
      'You serve one company exclusively on a retained basis',
      'Your sales consulting is entirely intuitive with no repeatable framework',
      'Your clients are in unrelated industries where cross-client data sharing is not a concern',
    ],
    faqs: [
      { question: 'Can I encode different sales methodologies for different client types?', answer: 'Yes. Your Account Brain can hold multiple sales frameworks  -  MEDDIC, Challenger, Sandler, or your proprietary playbook. Direct Intelligence to apply the relevant methodology for each client engagement.' },
      { question: 'How do I use Client Intelligence for client-specific CRM analysis?', answer: 'Export CRM data or relevant pipeline snapshots and upload to the client workspace. Intelligence can analyze pipeline health, opportunity patterns, and sales performance against your frameworks within that client\'s isolated context.' },
      { question: 'Can I serve competing companies as sales consulting clients?', answer: 'Yes. Isolated workspaces ensure competitive intelligence, sales strategies, and win/loss data for each company never crosses to a competitor\'s workspace. Many sales consultants use this feature to serve competing companies ethically.' },
      { question: 'Is this useful for building sales training content per client?', answer: 'Yes. Within each client workspace, you can develop training content, role-play scenarios, and coaching frameworks tailored to their specific sales context  -  grounded in your methodology and their data.' },
    ],
  },
  {
    slug: 'revenue-operations',
    label: 'Revenue Operations',
    h1: 'Client Intelligence for Revenue Operations Consultants',
    metaDescription: 'RevOps consultants manage complex multi-client environments. Client Intelligence provides per-client isolation, framework consistency, and scalable delivery for revenue operations practices.',
    pain: 'Revenue operations consulting is among the most context-dependent forms of consulting work. Each client has a different tech stack, different team structure, different sales process, and different set of data problems. Keeping all of this context straight across multiple clients while applying consistent RevOps frameworks is cognitively demanding and prone to error.',
    scenarios: [
      { title: 'The Multi-CRM Complexity', story: 'A RevOps consultant served eight clients across HubSpot, Salesforce, and Pipedrive implementations. Each system had different data models, configurations, and reporting logic. Context mixing was a constant risk.', result: 'Each client\'s CRM documentation, process maps, and data models live in their isolated workspace. The consultant switches between client contexts cleanly  -  no risk of applying Client A\'s CRM logic to Client B\'s implementation.' },
      { title: 'The Audit Framework Application', story: 'A RevOps auditor had a 40-point audit framework she applied to every new client. Running each audit manually took three days. At four new clients per quarter, audit season consumed most of her time.', result: 'After building her audit framework as a Blueprint in Client Intelligence, running the initial audit in each client workspace took half a day. She reviewed and refined rather than building from scratch each time.' },
      { title: 'The Team Alignment Problem', story: 'Two consultants at a RevOps firm served the same clients differently. Their individual interpretations of the firm\'s methodology produced conflicting recommendations to clients.', result: 'With the firm\'s RevOps methodology encoded in Client Intelligence and all consultants using the same Account Brain, recommendations aligned with a consistent analytical framework. Client confusion stopped.' },
    ],
    forYou: [
      'You serve multiple RevOps clients with distinct tech stacks, data environments, and process configurations',
      'You have a RevOps audit or optimization methodology worth encoding',
      'You want to scale your client base without the cognitive overhead of managing isolated contexts manually',
      'You need guaranteed data isolation between clients who may be competitors',
    ],
    notForYou: [
      'You work exclusively with one company on a long-term embedded basis',
      'Your RevOps work is purely implementation with no advisory or analytical component',
      'All your clients are in completely different verticals with no competitive overlap',
    ],
    faqs: [
      { question: 'Can I use Client Intelligence alongside my CRM and analytics tools?', answer: 'Yes. Export data from your clients\' CRM and analytics tools and upload to their workspace. Intelligence analyzes the data within that client\'s isolated context against your RevOps frameworks.' },
      { question: 'How do I handle clients who are competitors in the same market?', answer: 'Isolated workspaces provide structural data separation. Revenue data, pipeline analytics, and process documentation for each company stays within their workspace  -  architecturally separated from competitors.' },
      { question: 'Can I build reporting templates for client use within workspaces?', answer: 'Yes. Build reporting frameworks, dashboard specifications, and analysis templates within each client workspace. Export or share these deliverables as client-facing documents.' },
      { question: 'How does Client Intelligence handle the documentation-heavy nature of RevOps consulting?', answer: 'Upload all process documentation, CRM configuration specs, and data dictionaries to the client workspace. Intelligence can search and reference this documentation when generating analysis and recommendations.' },
    ],
  },
  {
    slug: 'growth-agencies',
    label: 'Growth Agencies',
    h1: 'Client Intelligence for Growth Agencies',
    metaDescription: 'Growth agencies need frameworks that apply across clients, isolated client contexts, and scalable delivery. Client Intelligence provides the infrastructure for multi-client growth work.',
    pain: 'Growth agencies live and die by repeatable, proven frameworks  -  but every client demands personalization. The tension between systematized growth methodology and client-specific application is where most growth agencies lose efficiency and quality. Generic frameworks produce generic results; manual customization for every client doesn\'t scale.',
    scenarios: [
      { title: 'The Growth Framework Drift', story: 'A growth agency had developed a proven 90-day growth sprint framework. As they scaled to 12 clients, each account manager adapted the framework differently. Results became unpredictable.', result: 'After encoding the 90-day growth sprint in Client Intelligence as their foundational Blueprint, all account managers ran the same framework. Results became more predictable and their case study data strengthened.' },
      { title: 'The Client Context Depth at Scale', story: 'A growth agency\'s biggest competitive differentiator was how deeply they understood each client\'s business. As they scaled, depth suffered. Clients noticed.', result: 'Per-Workspaces allowed the agency to maintain deep context for each client without the time overhead. Intelligence surfaces client-specific context for every growth decision. Depth increased as they scaled.' },
      { title: 'The Competitive Intelligence Problem', story: 'Two competing SaaS companies were both growth agency clients. A junior team member accidentally referenced competitive insights from one company in a meeting with the other.', result: 'With isolated workspaces, competitive intelligence from each client stays within their workspace. Cross-client contamination is architecturally impossible. The agency now serves five pairs of competitors without incident.' },
    ],
    forYou: [
      'You have proven growth frameworks you want applied consistently across all client engagements',
      'You serve multiple clients and need both deep per-client context and consistent methodology',
      'You want to scale your agency without the quality dilution that usually accompanies growth',
      'You serve clients in competitive industries who need guaranteed data isolation',
    ],
    notForYou: [
      'Your growth work is entirely bespoke with no repeatable methodology',
      'You serve only one or two clients on long-term retainers',
      'You don\'t have concerns about cross-client data isolation',
    ],
    faqs: [
      { question: 'Can I encode growth experiments and results per client?', answer: 'Yes. Log experiments, outcomes, and learnings in each client workspace. Intelligence can reference this history when designing new experiments  -  applying the client\'s accumulated learning rather than starting from generic best practices.' },
      { question: 'How does this handle multi-channel growth strategies?', answer: 'All channel-specific frameworks, performance data, and optimization playbooks can be organized within Workspaces. Intelligence applies the relevant channel frameworks to each client\'s specific context and performance history.' },
      { question: 'Is this useful for growth analytics work?', answer: 'Yes. Upload analytics exports, funnel data, and conversion reports to Workspaces. Intelligence analyzes the data against your growth frameworks to generate insight and recommendations specific to each client\'s situation.' },
      { question: 'Can I run the same growth experiment across multiple clients simultaneously?', answer: 'Yes, but per-client data stays isolated. You can apply the same experimental framework in multiple workspaces simultaneously  -  each client\'s results are separate and won\'t influence the analysis for other clients.' },
    ],
  },
  {
    slug: 'performance-marketing',
    label: 'Performance Marketing',
    h1: 'Client Intelligence for Performance Marketing Businesses',
    metaDescription: 'Performance marketing requires client-specific context, proven frameworks, and fast iteration. Client Intelligence provides isolated workspaces and systematic frameworks for performance marketers.',
    pain: 'Performance marketing is data-intensive and highly client-specific  -  different audiences, different creative angles, different conversion benchmarks, and different attribution models for every client. Managing this complexity across multiple accounts while maintaining optimized performance requires infrastructure that most agencies run through a combination of spreadsheets, memory, and luck.',
    scenarios: [
      { title: 'The Account Context Mix-Up', story: 'A performance marketing agency\'s team managed 15 accounts. During a busy campaign season, targeting parameters and creative directions were mixed between two similar e-commerce clients. One campaign launched with the wrong audience.', result: 'After isolating each account in a Client Intelligence workspace, account context never mixes. Creative direction, audience segments, and performance benchmarks for each account are structurally separated.' },
      { title: 'The Framework Application Efficiency', story: 'The agency\'s testing methodology required a 12-step process for every new campaign. Running it manually for 15 accounts was taking 3 weeks per testing cycle.', result: 'After building their testing methodology as a Blueprint, the 12-step process runs within each client workspace. A testing cycle that took 3 weeks now runs in 4 days  -  with more consistent methodology application.' },
      { title: 'The Performance Narrative Generation', story: 'Monthly performance reporting for each client required synthesizing platform data, interpreting trends, and writing contextual narratives. 15 reports took 3 full days every month.', result: 'After uploading performance data to each client workspace, Intelligence generates contextual narrative reports grounded in the client\'s history and benchmarks. 15 reports now take half a day.' },
    ],
    forYou: [
      'You manage performance marketing for multiple clients and need isolated account contexts',
      'You have optimization frameworks and testing methodologies worth systematizing',
      'You want to scale your client base without proportionally increasing manual reporting time',
      'You serve clients in competitive verticals who need data isolation guarantees',
    ],
    notForYou: [
      'You manage only one brand\'s performance marketing on an in-house basis',
      'Your optimization is entirely reactive with no systematic framework',
      'You don\'t have concerns about client data isolation',
    ],
    faqs: [
      { question: 'How do I work with platform data (Google Ads, Meta, etc.) in Client Intelligence?', answer: 'Export platform reports and upload to the client workspace. Intelligence analyzes the data against your optimization frameworks within that client\'s isolated context. Native platform integrations are on the roadmap.' },
      { question: 'Can I store creative libraries per client?', answer: 'Yes. Upload creative assets, copy variations, and performance notes for each client\'s workspace. Intelligence can reference past creative performance when informing new campaign recommendations.' },
      { question: 'How does this handle competitor conquesting campaigns where client data overlaps?', answer: 'Competitive intelligence for each client stays in their workspace. When clients target the same competitors, their strategies are developed in isolated contexts  -  no cross-contamination of competitive approach.' },
      { question: 'Is this useful for media planning as well as optimization?', answer: 'Yes. Upload media plans, audience segment definitions, and channel allocation frameworks to Workspaces. Intelligence applies your media planning methodology to each client\'s specific budget and objectives.' },
    ],
  },
  {
    slug: 'fractional-executive-services',
    label: 'Fractional Executive Services',
    h1: 'Client Intelligence for Fractional Executives',
    metaDescription: 'Fractional executives serve multiple companies simultaneously. Client Intelligence provides per-company isolation, persistent context, and consistent leadership frameworks across all engagements.',
    pain: 'Fractional executives face a unique challenge: they must be deeply embedded in multiple organizations simultaneously while maintaining strict information separation between them. Board meetings, strategy sessions, team conflicts, financial decisions  -  all happening across 4–8 companies at once, with NDAs and fiduciary obligations requiring those contexts to never mix.',
    scenarios: [
      { title: 'The Context Switch Cognitive Cost', story: 'A fractional CFO serving six companies spent the first 30 minutes of every working session just re-orienting to which company he was working with and where they\'d left off. Mental overhead was consuming hours per week.', result: 'With each company in an isolated workspace, he opens the relevant workspace before each session. Intelligence provides a 5-minute briefing  -  recent decisions, open questions, upcoming obligations. He\'s operational immediately.' },
      { title: 'The Competing Portfolio Companies', story: 'Two of a fractional CMO\'s clients operated in the same market segment. Her NDAs required strict information separation. She was nervous about using any shared AI tool across both engagements.', result: 'Client Intelligence\'s structural isolation satisfied her NDA requirements. Both clients approved the architecture after reviewing the documentation. She now uses AI freely in both engagements without compliance anxiety.' },
      { title: 'The Long-Term Context Value', story: 'A fractional CRO had worked with one portfolio company for two years. The accumulated strategic context was enormous  -  and invaluable for current decisions  -  but existed in scattered notes and his memory.', result: 'After uploading two years of engagement history to the company workspace, Intelligence surfaces any past decision, recommendation, or strategic conversation on demand. The context that existed only in his head became searchable.' },
    ],
    forYou: [
      'You serve 3+ companies simultaneously as a fractional executive',
      'Your engagements require strict information separation due to NDAs or competitive conflicts',
      'You want persistent context management without the cognitive overhead of manual switching',
      'You have executive frameworks and playbooks worth encoding for consistent application',
    ],
    notForYou: [
      'You serve only one company  -  even fractionally  -  and context isolation isn\'t needed',
      'Your fractional role is purely implementation with no strategic or advisory component',
      'You don\'t have concerns about data separation between your portfolio companies',
    ],
    faqs: [
      { question: 'How many company workspaces can I maintain simultaneously?', answer: 'The platform supports unlimited workspaces. Most fractional executives find 6–10 active companies is the practical limit based on engagement depth  -  not tool constraints.' },
      { question: 'Can I use Client Intelligence for board-level strategy documentation?', answer: 'Yes. Board materials, strategic decisions, and governance documentation can all be stored in the company workspace. Sensitive materials remain within the isolated workspace  -  never accessible from other company contexts.' },
      { question: 'How does this help with onboarding into new fractional engagements?', answer: 'Create a workspace immediately upon engagement start. Use Brain Dump Mode to capture your rapid onboarding learnings. Build context from day one so you have a complete picture within weeks rather than months.' },
      { question: 'Can I share workspace context with other fractional executives at the same company?', answer: 'Yes, if they have account access. Multiple fractional executives serving the same company can share a workspace to maintain aligned context. Each company\'s workspace is still isolated from all others.' },
    ],
  },
  {
    slug: 'business-coaching',
    label: 'Business Coaching',
    h1: 'Client Intelligence for Business Coaching Practices',
    metaDescription: 'Business coaches serving multiple clients need per-client memory, consistent frameworks, and scalable delivery. Client Intelligence provides the AI infrastructure for multi-client business coaching.',
    pain: 'Business coaches are asked to hold two things simultaneously: the full context of each client\'s unique business situation and journey, and a consistent coaching methodology that applies across all clients. As client volume grows, the first becomes impossible to maintain manually, and the second begins to drift without systems to enforce it.',
    scenarios: [
      { title: 'The Client History Recall Problem', story: 'A business coach with 22 clients regularly forgot details between sessions. Clients who referenced past conversations found her only partially prepared. Trust eroded gradually across multiple relationships.', result: 'After logging every session in Workspaces, the coach opens each workspace before sessions and asks Intelligence to surface the most relevant recent history. She is always fully prepared. Clients notice and comment.' },
      { title: 'The Methodology Application Consistency', story: 'A business coach had developed a six-phase business growth methodology. Under time pressure, she often skipped phases for certain clients. Some clients hit all six phases; others only four. Outcomes varied.', result: 'With her methodology encoded in Client Intelligence, all six phases are applied to every client engagement. She can\'t accidentally skip steps because the framework is the structural starting point.' },
      { title: 'The Scale Without Burnout Challenge', story: 'A highly sought-after business coach was turning away 8–10 qualified prospects per month because she was at full capacity with 15 clients. The preparation overhead was preventing her from serving more.', result: 'By systematizing session prep with Client Intelligence, the coach reduced prep time per client from 45 minutes to 10 minutes. She added five clients to her practice  -  without extending her working hours.' },
    ],
    forYou: [
      'You serve multiple business coaching clients and want to maintain depth with each one',
      'You have a coaching methodology or framework worth encoding and applying consistently',
      'You want to scale your coaching practice without burning out on preparation and administration',
      'You want to remember every client\'s full journey without relying on manual notes',
    ],
    notForYou: [
      'You only serve 2–3 clients in deep long-term relationships where manual context management is practical',
      'Your coaching is purely conversational with no framework to encode',
      'You\'re opposed to using AI in any aspect of your coaching practice',
    ],
    faqs: [
      { question: 'What kinds of business coaching content works well in Client Intelligence?', answer: 'Session transcripts, business metrics and financials, goal tracking, strategy decisions, action items and homework, and progress notes. Anything relevant to the coaching relationship that you\'d reference in future sessions.' },
      { question: 'Can I use this for group business coaching as well?', answer: 'Yes. Create a workspace for the group program itself (group dynamics, session plans, cohort context) and individual workspaces for each participant who has individual coaching alongside the group.' },
      { question: 'How do I handle clients who don\'t want their sessions recorded?', answer: 'Recording isn\'t required. Manual session summaries  -  even 5-minute written summaries of key points  -  are highly effective when added to the client workspace. Full transcription is one option, not the only one.' },
      { question: 'Can I build business diagnostic frameworks specific to certain client types?', answer: 'Yes. Encode separate diagnostic frameworks for different client categories (e.g., service businesses, product companies, early-stage founders) in your Account Brain. Apply the relevant framework to each client\'s workspace.' },
    ],
  },
  {
    slug: 'digital-agencies',
    label: 'Digital Agencies',
    h1: 'Client Intelligence for Digital Agencies',
    metaDescription: 'Digital agencies managing multiple client accounts need isolated contexts, consistent methodology, and scalable delivery. Client Intelligence provides the infrastructure for multi-client digital work.',
    pain: 'Digital agencies face constant tension between scale and quality. Every client deserves focused attention, deep context, and consistent methodology  -  but the economics of agency work require serving many clients simultaneously. Generic AI tools help with individual tasks but don\'t solve the core challenge: maintaining depth across a large book of business.',
    scenarios: [
      { title: 'The Account Context Problem at Scale', story: 'A 20-client digital agency found their account managers were producing generic strategies because they couldn\'t maintain deep context for every account. Strategy briefs were increasingly templated.', result: 'Per-Workspaces let account managers maintain deep context without the overhead of manual review. Strategies became more specific and client-contextual. Three long-term clients extended their retainers immediately after the quality shift.' },
      { title: 'The Methodology Consistency Across Team', story: 'A digital agency\'s delivery quality varied significantly by team member. Some clients got exceptional strategic thinking; others got process-driven execution. Client feedback reflected the inconsistency.', result: 'After encoding their digital strategy methodology in Client Intelligence and having all team members use the same Account Brain, delivery consistency improved system-wide. Client satisfaction became consistently positive.' },
      { title: 'The New Client Onboarding Compression', story: 'Onboarding new digital clients at a full-service agency took 3–4 weeks of context gathering, briefings, and strategy development before meaningful work could begin. New clients were frustrated by the wait.', result: 'Client Intelligence workspaces and Brain Dump Mode compressed onboarding to one intensive session. Meaningful strategic work began in week one. New clients now receive their first substantive strategy brief within 10 days of signing.' },
    ],
    forYou: [
      'You serve multiple digital clients and need consistent, deep context management per account',
      'Your agency has a methodology for digital strategy, web, SEO, or content that should be applied consistently',
      'You want to scale your book of business without proportionally increasing your team size',
      'You need data isolation between clients who may be competing brands',
    ],
    notForYou: [
      'You work exclusively with one client in an embedded or long-term retainer arrangement',
      'Your digital work is entirely execution-based with no strategic methodology',
      'Cross-client data isolation is not a concern in your client mix',
    ],
    faqs: [
      { question: 'How does Client Intelligence handle digital strategy work specifically?', answer: 'Your digital strategy frameworks, competitive analysis templates, and channel-specific playbooks live in your Account Brain. Each client workspace holds their specific digital context  -  audit history, strategy decisions, and performance data  -  for AI-informed deliverables.' },
      { question: 'Can I upload website audits and SEO analysis to Workspaces?', answer: 'Yes. Technical audits, content analysis, SEO reports, and analytics exports can all be uploaded to the relevant client workspace. Intelligence references this analysis when generating recommendations.' },
      { question: 'Is this useful for creative agencies as well as performance-focused agencies?', answer: 'Yes. Creative briefs, brand guidelines, campaign history, and client feedback can all be stored in isolated Workspaces. Account teams maintain deep creative context for each brand without manual review.' },
      { question: 'How do we handle clients who have internal digital teams we need to align with?', answer: 'Document the client\'s internal team structure, preferences, and working agreements in their workspace. Intelligence can reference these alignment constraints when generating strategy recommendations.' },
    ],
  },
  {
    slug: 'freelance-consultants',
    label: 'Freelance Consultants',
    h1: 'Client Intelligence for Independent Consultants and Freelancers',
    metaDescription: 'Independent consultants serve multiple clients with limited time and no team. Client Intelligence gives freelancers the per-client memory, framework encoding, and delivery apply they need to scale.',
    pain: 'Freelance consultants are the ultimate one-person shop: they do everything  -  strategy, delivery, account management, and sales  -  without team support. Every hour spent on delivery mechanics is an hour not spent on business development or relationship building. And every new client is another context to manage manually.',
    scenarios: [
      { title: 'The Freelancer\'s Capacity Ceiling', story: 'A freelance strategy consultant was maxed at five clients. Every additional client would require working evenings and weekends. She was turning away referrals she couldn\'t afford to.', result: 'After systematizing her strategy framework in Client Intelligence, she served eight clients with the same working hours. Three additional clients\' revenue with no additional hours or stress.' },
      { title: 'The Proposal-to-Execution Gap', story: 'A freelance consultant\'s proposals were detailed and impressive. But once a client signed, there was a quality gap between the proposed approach and actual delivery because execution was manual.', result: 'By encoding her methodology in Client Intelligence, delivery now matches the sophistication of her proposals. Clients comment that they got exactly what they were promised. Referral rates improved.' },
      { title: 'The Annual Client Context Refresh', story: 'A freelance consultant served 12 annual retainer clients. At the start of each year, reviewing 12 months of history per client to re-orient for the new year took two weeks.', result: 'With all client history in Client Intelligence workspaces, year-end review took one day total. She enters each year\'s conversations more prepared and with more specific strategic continuity.' },
    ],
    forYou: [
      'You are a solo consultant or freelancer serving multiple clients simultaneously',
      'You have a methodology worth encoding  -  not just raw expertise',
      'You want to scale your client volume without working more hours',
      'You need per-client isolation to maintain professional standards and NDA compliance',
    ],
    notForYou: [
      'You serve one client at a time on dedicated long-term projects',
      'Your freelance work is purely execution-based with no repeatable strategy component',
      'You\'re content with your current capacity and not looking to scale',
    ],
    faqs: [
      { question: 'Is Client Intelligence worth it for a solo freelancer?', answer: 'Especially for solo freelancers. You have no team to absorb capacity, no support staff, and every hour matters. The per-client memory, framework encoding, and delivery efficiency are most impactful when you\'re the only person.' },
      { question: 'How does Client Intelligence help with new client proposals?', answer: 'Your methodology in the Account Brain informs proposal generation. Pull from your encoded frameworks when outlining your approach. For long-term clients, surface their workspace history to inform renewal proposals with specific, contextual language.' },
      { question: 'Can I use this to help justify my rates as a freelancer?', answer: 'Yes. When you can demonstrate systematic methodology application, per-client data isolation, and consistent delivery quality, the premium positioning of your service is tangible. Many freelancers use Client Intelligence as a sales tool as well as a delivery tool.' },
      { question: 'Is there a steep learning curve for a solo operator?', answer: 'No. The initial setup  -  Account Brain and first client workspace  -  typically takes 2–4 hours. Most freelancers are fully operational within a week. The time investment pays back within the first month.' },
    ],
  },
  {
    slug: 'demand-generation',
    label: 'Demand Generation',
    h1: 'Client Intelligence for Demand Generation Consultants',
    metaDescription: 'Demand generation consultants need client-specific context, consistent frameworks, and scalable delivery. Client Intelligence provides per-client isolation and framework consistency for demand gen practices.',
    pain: 'Demand generation consulting requires deep understanding of each client\'s market, ICP, buyer journey, and existing pipeline state. This context is highly specific and changes frequently. Managing it across multiple clients while applying consistent DG methodology is where most demand generation consultants hit their capacity wall.',
    scenarios: [
      { title: 'The ICP Context Depth Problem', story: 'A demand generation consultant served seven clients with different ICPs, buying journeys, and pipeline stages. Keeping each client\'s prospect context straight while running coordinated campaigns was cognitively taxing.', result: 'Each client\'s ICP documentation, pipeline context, and campaign history lives in their isolated workspace. Intelligence applies the relevant context for each client without the consultant having to manually re-establish it.' },
      { title: 'The Campaign Framework Consistency', story: 'A DG consulting firm applied their demand generation framework inconsistently across clients. Campaign outcomes varied unpredictably. They couldn\'t build reliable case study data.', result: 'After encoding their DG framework in Client Intelligence and applying it consistently across all Workspaces, campaign structure became consistent. Outcome predictability improved and case study data strengthened.' },
      { title: 'The Monthly Reporting Efficiency', story: 'Monthly pipeline and demand generation reports for each client required significant synthesis and narrative development. Six clients meant six days of reporting per month.', result: 'After uploading performance data to each client workspace, Intelligence generates contextual DG reports grounded in that client\'s history and benchmarks. Six reports now take less than a day combined.' },
    ],
    forYou: [
      'You serve multiple demand generation clients with distinct ICPs, markets, and pipeline contexts',
      'You have a DG framework or methodology worth encoding and applying consistently',
      'You want to scale your client base without losing the contextual depth DG work requires',
      'You need per-client data isolation for clients who may compete for the same market',
    ],
    notForYou: [
      'You work exclusively with one company on a long-term embedded basis',
      'Your demand generation work is purely tactical with no strategic framework',
      'Cross-client data isolation is not a concern in your current practice',
    ],
    faqs: [
      { question: 'How do I handle different attribution models across clients?', answer: 'Document each client\'s attribution model and reporting definitions in their workspace. Intelligence applies the client\'s specific model when generating analysis and recommendations  -  not a generic attribution approach.' },
      { question: 'Can I use Client Intelligence for ABM campaign management?', answer: 'Yes. Upload target account lists, buying committee maps, and engagement history to Workspaces. Intelligence can inform account prioritization and message sequencing based on client-specific context.' },
      { question: 'How does this integrate with demand gen tools like 6sense or Bombora?', answer: 'Export intent data and engagement reports from these tools and upload to Workspaces. Intelligence analyzes the data within each client\'s isolated context  -  no native integration currently, but the document workflow is highly effective.' },
      { question: 'Is this useful for DG reporting to client leadership or boards?', answer: 'Yes. Intelligence generates executive-level DG narratives from workspace data. These can be refined and presented directly to client leadership  -  grounded in the client\'s specific metrics and benchmarks.' },
    ],
  },
  {
    slug: 'funnel-building',
    label: 'Funnel Building',
    h1: 'Client Intelligence for Funnel Builders and Funnel Agencies',
    metaDescription: 'Funnel builders need client-specific context, proven frameworks, and efficient delivery. Client Intelligence provides per-client isolation and systematic funnel methodology for multi-client funnel agencies.',
    pain: 'Funnel building requires deep client-specific understanding: their offer, their market, their buyers, their existing funnel data, and their brand voice. Generic funnels don\'t convert. But building deeply customized funnels for every client manually is time-intensive and hard to scale  -  especially when the core strategy and copy frameworks should be consistent.',
    scenarios: [
      { title: 'The Offer Context Confusion', story: 'A funnel agency built funnels for eight clients with different offers. Working across multiple clients in a shared AI environment caused copy angles and offer positioning to bleed between accounts.', result: 'With isolated Workspaces, each client\'s offer specifics, brand voice, avatar research, and funnel history are completely separate. Cross-client copy mixing became impossible.' },
      { title: 'The Conversion Copywriting Framework', story: 'A funnel builder had developed a proprietary conversion copywriting framework that consistently outperformed generic copy. Getting team members to apply it correctly took months of training.', result: 'After encoding the framework in Client Intelligence, team members apply it within every client workspace from day one. Funnel copy consistency and conversion performance improved across all new client builds.' },
      { title: 'The Funnel Audit Efficiency', story: 'Running a comprehensive funnel audit for each new client took 2–3 days of manual review, analytics analysis, and audit report writing.', result: 'After building a funnel audit Blueprint in Client Intelligence, the initial audit generates within a client workspace in one day. The consultant reviews and refines rather than building from scratch.' },
    ],
    forYou: [
      'You build funnels for multiple clients and need isolated contexts for each offer and brand',
      'You have conversion frameworks and copy methodologies worth encoding consistently',
      'You want to scale your funnel delivery capacity without sacrificing customization quality',
      'You serve clients whose funnel data and offer details must be kept strictly separate',
    ],
    notForYou: [
      'You build funnels exclusively for your own offers or one client\'s business',
      'Your funnel work is entirely template-based with no bespoke strategy component',
      'Cross-client data isolation is not a concern in your practice',
    ],
    faqs: [
      { question: 'How do I store funnel assets and copy in Workspaces?', answer: 'Upload copy documents, funnel maps, split test results, and analytics exports to the client workspace. Intelligence references these assets when generating new copy angles and funnel recommendations for that client.' },
      { question: 'Can I encode avatar research and buyer psychology frameworks?', answer: 'Yes. Your buyer psychology frameworks and avatar research methodology live in the Account Brain. Client-specific avatar research and ICP data lives in each client\'s workspace.' },
      { question: 'How does this help with split testing frameworks?', answer: 'Encode your A/B testing framework in the Account Brain. Log each client\'s test history and results in their workspace. Intelligence recommends new test variants based on your framework applied to their specific performance history.' },
      { question: 'Can I manage funnel build projects within Workspaces?', answer: 'Yes. The workflow and project layer within each workspace handles task tracking, milestone management, and build phase documentation  -  keeping the entire funnel build project inside the client\'s isolated context.' },
    ],
  },
  {
    slug: 'seo-agencies-vertical',
    label: 'SEO Agencies',
    h1: 'Client Intelligence for SEO Agencies',
    metaDescription: 'SEO agencies serve multiple clients with different websites, industries, and competitive landscapes. Client Intelligence provides per-client isolation and consistent SEO methodology for multi-client agencies.',
    pain: 'SEO agencies face a specific challenge: every client operates in a different market, with a different site structure, different competitive landscape, and different keyword opportunity set. Generic SEO frameworks apply everywhere but optimize for nothing. Client-specific strategy is essential  -  but maintaining deep strategic context across 15+ clients manually is unsustainable.',
    scenarios: [
      { title: 'The SEO Strategy Context Problem', story: 'An SEO agency serving 18 clients found that account managers were producing generic keyword recommendations because they couldn\'t maintain deep client-specific context. Strategies felt templated.', result: 'Per-Workspaces holding each site\'s audit history, keyword strategy, competitive landscape, and performance data allowed account managers to produce genuinely specific recommendations. Client satisfaction and renewal rates improved.' },
      { title: 'The Technical SEO Audit Efficiency', story: 'Running comprehensive technical SEO audits for each client took 8 hours per client. At 12 clients per quarter, audit season consumed most of the team\'s strategic capacity.', result: 'After building their technical audit Blueprint in Client Intelligence, initial audits generate within 3 hours per client within each workspace. Team time goes to analysis and strategy, not documentation.' },
      { title: 'The Competing Client Problem', story: 'Two competing local businesses were both SEO clients. The agency worried about competitive keyword strategies crossing between accounts.', result: 'With isolated workspaces, each client\'s keyword strategy, competitive intelligence, and local SEO data stays within their workspace. The agency explicitly markets this isolation to clients in competitive verticals.' },
    ],
    forYou: [
      'You serve multiple SEO clients with different industries, sites, and competitive landscapes',
      'You have an SEO audit or strategy methodology worth encoding and applying consistently',
      'You want to scale your client capacity without losing the site-specific depth SEO requires',
      'You serve clients in competitive markets who need guaranteed strategy isolation',
    ],
    notForYou: [
      'You manage SEO exclusively for one website on a long-term basis',
      'Your SEO work is entirely technical implementation with no strategic advisory component',
      'Cross-client competitive intelligence isolation is not a concern',
    ],
    faqs: [
      { question: 'How do I work with site-specific data in Workspaces?', answer: 'Export analytics, Search Console data, and crawl reports and upload to the client workspace. Intelligence analyzes the data against your SEO frameworks within that client\'s isolated context.' },
      { question: 'Can I build SEO content strategies within Workspaces?', answer: 'Yes. Keyword clusters, content gap analyses, and editorial calendars can all be developed and stored within Workspaces  -  grounded in the client\'s specific keyword opportunity and competitive context.' },
      { question: 'How does this help with client SEO reporting?', answer: 'Upload monthly performance data to the workspace and ask Intelligence to generate a contextual SEO performance narrative. It references the client\'s history and targets rather than generic industry benchmarks.' },
      { question: 'Can I encode specific industry SEO knowledge for different client verticals?', answer: 'Yes. Your Account Brain can hold industry-specific SEO frameworks and considerations. Direct Intelligence to apply the relevant industry knowledge alongside your core SEO methodology when working in each client workspace.' },
    ],
  },
  {
    slug: 'content-strategy',
    label: 'Content Strategy',
    h1: 'Client Intelligence for Content Strategy Consultants',
    metaDescription: 'Content strategists need deep client context, consistent strategic frameworks, and scalable delivery. Client Intelligence provides per-client isolation and methodology encoding for content strategy practices.',
    pain: 'Content strategy consulting requires understanding not just content best practices but the specific voice, audience, business context, and existing content ecosystem of each client. Generic content strategy serves no one well. But maintaining that depth of client-specific context across a full book of business while applying consistent strategic frameworks is the central challenge of scaling a content strategy practice.',
    scenarios: [
      { title: 'The Voice and Context Depth Problem', story: 'A content strategy consultant served 10 clients across different industries. Maintaining each client\'s brand voice, audience context, and content history while producing genuinely differentiated strategies was becoming impossible.', result: 'Per-Workspaces holding brand guidelines, audience research, content audit findings, and engagement history let Intelligence generate recommendations that feel specific to each client  -  not generic content strategy advice.' },
      { title: 'The Content Audit Framework Scale', story: 'Comprehensive content audits took 2 weeks per client. Running them for 8 clients per year consumed 4 months of capacity  -  just for initial audits.', result: 'After building a content audit Blueprint in Client Intelligence, initial audit generation dropped to 3 days per client. Quality improved because the framework was applied comprehensively rather than under time pressure.' },
      { title: 'The Editorial Calendar Generation', story: 'Monthly editorial calendar development for each client took 3–4 hours per client. At 10 clients, editorial planning consumed 40 hours per month.', result: 'Intelligence generates initial editorial calendars within each client workspace based on their content strategy, audience context, and past performance. Planning time dropped to 1 hour per client for review and refinement.' },
    ],
    forYou: [
      'You serve multiple content strategy clients with distinct voices, audiences, and business contexts',
      'You have a content strategy framework worth encoding and applying consistently',
      'You want to scale your client capacity without losing the brand-specific depth content strategy requires',
      'You need per-client content and brand data isolation',
    ],
    notForYou: [
      'You work exclusively with one brand on a long-term embedded basis',
      'Your content work is purely execution (writing) with no strategic framework',
      'Brand context isolation between clients is not a concern',
    ],
    faqs: [
      { question: 'How do I store brand guidelines and voice documentation in Workspaces?', answer: 'Upload brand guideline documents, voice and tone guides, example content pieces, and style guides directly to the client workspace. Intelligence references these when generating strategic recommendations and content direction.' },
      { question: 'Can I use Client Intelligence for content performance analysis?', answer: 'Yes. Upload analytics exports and content performance reports to Workspaces. Intelligence analyzes performance against the client\'s strategic objectives and your content framework within their isolated context.' },
      { question: 'How does this help with audience research and persona development?', answer: 'Your audience research framework lives in the Account Brain. Client-specific research, persona documents, and ICP definitions live in each client\'s workspace. Intelligence applies your research framework to each client\'s specific audience context.' },
      { question: 'Can I manage content publishing calendars within workspaces?', answer: 'Yes. Use the project and workflow layer within each client workspace to manage editorial calendars, publication schedules, and content approval workflows  -  all within the client\'s isolated context.' },
    ],
  },
]
