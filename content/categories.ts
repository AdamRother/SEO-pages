export interface CategoryPage {
  slug: string
  label: string
  h1: string
  metaDescription: string
  prose: string
  relatedFeatures: { title: string; description: string }[]
  faqs: { question: string; answer: string }[]
}

export const categories: CategoryPage[] = [
  {
    slug: 'intelligence-as-a-service',
    label: 'What is Intelligence as a Service',
    h1: 'Intelligence as a Service (IaaS): The New Model for Service Businesses',
    metaDescription: 'Intelligence as a Service is the emerging model replacing time-based consulting. Learn what IaaS means, how it works, and why it\'s the future of professional services.',
    prose: `<p>For over a century, service businesses have operated on a single economic model: sell access to expert time. A consultant charges by the hour. An agency charges by the retainer. A coach charges by the session. The unit of exchange has always been the hour  -  and that has always been the ceiling.</p>

<p>Intelligence as a Service (IaaS) is a fundamentally different model. Instead of selling time, IaaS businesses sell the systematic application of their expertise. The expert's methodology, frameworks, and accumulated knowledge are encoded into AI systems that apply them consistently, at scale, across every client engagement. Time is no longer the bottleneck. Methodology is the product.</p>

<h3>What Makes IaaS Different</h3>

<p>The distinction between traditional services and IaaS isn't about using AI. Many service businesses use AI as a productivity tool  -  drafting content faster, summarizing documents, generating first drafts. That's using AI to work faster within the same model.</p>

<p>IaaS is a different architecture entirely. In an IaaS business, the expert's frameworks are permanently encoded in AI systems. Each client gets an isolated AI environment that knows their specific context. The AI applies the expert's methodology to the client's situation  -  consistently, completely, and without requiring the expert's direct time for each application.</p>

<p>The economic implications are significant. In a time-based model, revenue scales linearly with hours. More clients means more hours or more staff. In an IaaS model, once methodology is encoded, it applies to additional clients without proportional time investment. Revenue scales faster than headcount. The ceiling lifts.</p>

<h3>The Three Pillars of IaaS</h3>

<p><strong>Encoded Methodology</strong>  -  The first pillar is systematic capture of the expert's frameworks. Not documentation for documentation's sake, but AI-ready methodology that an intelligent system can apply to real client situations. This is the expert's methodology encoded in a form that can work at scale.</p>

<p><strong>Per-Client Intelligence</strong>  -  The second pillar is isolated, persistent AI memory for each client. An IaaS system doesn't just have your methodology  -  it also has full context for every client it serves. That client's goals, history, past decisions, and current state are always in scope when generating outputs for them. The result is advice and deliverables that feel deeply personalized, because they are: they're your methodology applied to their specific context.</p>

<p><strong>Scalable Delivery</strong>  -  The third pillar is the execution layer that applies methodology and client context to produce actual deliverables. Frameworks don't add value in isolation  -  they add value when applied. The IaaS delivery layer takes your encoded methodology, combines it with client-specific context, and produces outputs that match the quality you deliver manually  -  at a fraction of the time.</p>

<h3>Who Is Building IaaS Businesses</h3>

<p>The businesses most naturally positioned for IaaS are those with strong, proprietary methodology that currently limits their scale. Fractional executives who can only serve a limited number of companies simultaneously. Consultants who've built frameworks that could apply to ten times as many clients if application weren't the bottleneck. Agencies whose quality depends on a few senior individuals who can't clone themselves.</p>

<p>Common examples include: management consultants encoding their strategic diagnostic frameworks; revenue operations advisors building their optimization playbooks into executable AI systems; executive coaches embedding their leadership development methodology so it applies across a larger client base; marketing agencies whose creative strategy approach becomes the structural foundation for every account's work.</p>

<p>The common thread isn't industry  -  it's that these businesses have methodology worth systematizing, and clients worth serving better.</p>

<h3>IaaS and Client Confidentiality</h3>

<p>A significant concern for any multi-client service business moving toward IaaS is data handling. Using shared AI infrastructure for client-specific work creates real confidentiality risks: one client's data potentially accessible in another's context, no structural information barrier for competing clients, and inability to satisfy contractual data handling requirements.</p>

<p>IaaS architecture addresses this through per-client isolation. In a properly structured IaaS system, each client operates in a completely separate AI environment. Their data, history, and strategic context never intersect with another client's workspace. The methodology (the expert's frameworks) is shared infrastructure  -  because it's the expert's IP, not the client's. But client-specific information is isolated by design.</p>

<p>This architecture makes IaaS viable for professional services businesses serving competing clients in the same market  -  a situation that would be impossible under a shared AI tool model.</p>

<h3>The Business Case for IaaS</h3>

<p>The business case for moving to an IaaS model is compelling on multiple dimensions. Revenue capacity increases without proportional headcount increases. Quality becomes more consistent because methodology is applied systematically rather than variably by individuals. Client depth improves because AI maintains full context across all sessions without the cognitive limits of human memory.</p>

<p>Perhaps most significantly, IaaS changes what the business is worth. Time-dependent service businesses are typically valued at 1–2x revenue, because the revenue disappears when the owner does. IaaS businesses with encoded, transferable methodology and systematized delivery are increasingly valued at higher multiples  -  because the IP is organizational, not individual.</p>

<p>Intelligence as a Service isn't just a productivity improvement. It's a business model evolution  -  from selling time to selling intelligence at scale.</p>`,
    relatedFeatures: [
      { title: 'Account Brain', description: 'The central repository where your methodology is encoded  -  the foundation of your IaaS business.' },
      { title: 'Isolated Client Workspaces', description: 'Per-client AI environments that ensure your IaaS delivery is both scalable and confidential.' },
      { title: 'Blueprint Execution Layer', description: 'The delivery system that turns encoded methodology into systematized client deliverables at scale.' },
      { title: 'Brain Dump Mode', description: 'The mechanism for capturing and encoding your expertise without requiring formal documentation.' },
    ],
    faqs: [
      { question: 'How is IaaS different from just using AI tools in my consulting practice?', answer: 'Using AI tools makes you faster within the same time-based model. IaaS changes the model: your methodology is encoded once and applies across multiple clients without proportional time. The result is that revenue can grow faster than your personal hours  -  that\'s the structural difference.' },
      { question: 'Is IaaS realistic for a solo consultant or only for firms?', answer: 'IaaS is especially powerful for solo operators. Without a team to absorb capacity, every hour matters more. Encoding your methodology and building per-client AI delivery lets you serve significantly more clients than you could in a purely time-based model  -  without hiring.' },
      { question: 'What kinds of expertise are most IaaS-ready?', answer: 'Any expertise that involves repeatable frameworks applied to client-specific situations. Consulting methodologies, coaching frameworks, diagnostic approaches, optimization playbooks, and strategic analytical frameworks are all highly IaaS-ready. Truly bespoke, intuition-only work is harder to systematize.' },
      { question: 'Does IaaS commoditize my expertise?', answer: 'The opposite. IaaS makes your methodology the explicit, differentiated product. Commoditized services apply generic methods. IaaS services apply your specific frameworks  -  making your unique methodology more visible, not less.' },
    ],
  },
  {
    slug: 'per-client-ai-memory-explained',
    label: 'What is Per-Client AI Memory',
    h1: 'Per-Client AI Memory: What It Is, Why It Matters, How It Works',
    metaDescription: 'Per-client AI memory means your AI remembers every client separately  -  permanently. This guide explains the architecture, benefits, and practical applications for service businesses.',
    prose: `<p>Every general-purpose AI tool has the same limitation for professional services work: it has no memory of your clients. You start every session explaining who the client is, what you're working on, and what your approach is. The AI is capable  -  but it has no persistent knowledge of the relationship you've built or the work you've done together.</p>

<p>Per-client AI memory is the architectural solution to this limitation. It means that each client you serve has their own persistent AI memory  -  a growing, searchable repository of everything relevant to that relationship. When you open a client's context, the AI already knows who they are, their full history with you, your past recommendations, their goals, their challenges, and the decisions you've made together.</p>

<h3>How Per-Client Memory Works</h3>

<p>Per-client memory is structured around isolated environments  -  workspaces  -  that function as the AI's memory for each client relationship. When you create a workspace for a new client, you seed it with their initial context: their goals, their business overview, their challenges, and any relevant history. From that point forward, every document you upload, every transcript you add, every decision you log becomes part of the AI's permanent memory for that client.</p>

<p>The memory persists across all sessions. Whether you last worked with a client yesterday or six months ago, the full context of your relationship is available the moment you open their workspace. Unlike conversation-based AI tools where each session starts fresh, per-client memory is cumulative  -  it grows richer every time you add to it.</p>

<p>Memory in this context isn't a simple document retrieval system. It's active context that an AI assistant uses when generating outputs within the workspace. Ask Intelligence to draft a strategic recommendation, and it reasons from both your methodology and this client's specific history  -  not from generic frameworks or a blank slate.</p>

<h3>The Difference Between Memory and Storage</h3>

<p>There's an important distinction between storing documents about a client and having per-client AI memory. A shared drive or CRM stores documents  -  you still have to find, open, read, and synthesize them manually. Per-client AI memory is different: the stored information is active context that the AI uses directly when generating outputs.</p>

<p>The practical implication is significant. In a storage system, you retrieve information and then apply it yourself. In a per-client memory system, the AI applies the stored information in every output it generates within that client's context. The knowledge compounds automatically, rather than requiring constant manual retrieval.</p>

<h3>Per-Client Isolation: Why Each Client's Memory Must Be Separate</h3>

<p>The "per-client" part of per-client AI memory is as important as the memory itself. When multiple clients' contexts exist in the same AI environment  -  as they do in shared AI tools  -  there's genuine risk of cross-contamination. A prompt that asks for strategic recommendations might surface information from a different client's context. Competitive intelligence from one engagement might influence outputs for a competing client.</p>

<p>Per-client memory architecture prevents this through structural isolation. Each client's workspace is a completely separate data environment. The AI in Client A's workspace has access to Client A's data and your methodology  -  and nothing else. Client B's data is architecturally inaccessible from Client A's workspace, and vice versa.</p>

<p>This isolation matters not just for data integrity but for professional obligations. Many service businesses operate under NDAs that require information barriers between competing clients. Structural isolation  -  not just policy  -  is what satisfies those requirements. And it's what allows you to honestly tell clients that their data is protected from other engagements.</p>

<h3>Building and Maintaining Client Memory Over Time</h3>

<p>Per-client memory compounds in value over time. In the first weeks of an engagement, a workspace contains onboarding information and initial strategy. After six months, it contains the full decision history, refined strategy, performance data, team context, and relationship nuance accumulated over dozens of sessions. After two years, it's a complete institutional record of the relationship that no human memory could replicate.</p>

<p>The practice of maintaining per-client memory doesn't require significant overhead. Adding context after key interactions  -  uploading a transcript, logging a decision, noting a strategic shift  -  takes minutes and compounds into an enormously valuable asset over the life of an engagement.</p>

<p>Long-term clients often remark on how prepared their advisors are, how well they remember past decisions, and how specifically their recommendations address the client's situation. That depth of contextual knowledge comes from per-client memory systems, not superhuman recall.</p>

<h3>Practical Applications in Service Businesses</h3>

<p>Per-client memory changes how several common service delivery scenarios work. Pre-session preparation, which typically requires 30–60 minutes of manual review, drops to 5 minutes when Intelligence can surface the most relevant context from the workspace. Handoffs between team members, which typically require days of catch-up, become seamless when the new team member can access full context immediately. Long-term client renewals, where history matters enormously, become more compelling when the advisor can reference a complete record of every recommendation and outcome.</p>

<p>For service businesses serving many clients simultaneously, per-client memory is infrastructure. It's the difference between being able to maintain depth across a large book of business and having quality erode as client volume grows.</p>`,
    relatedFeatures: [
      { title: 'Isolated Client Workspaces', description: 'The per-client environments where AI memory is stored, structured, and isolated from other clients.' },
      { title: 'Client Context Memory', description: 'The AI layer that actively uses stored client information when generating outputs within the workspace.' },
      { title: 'Document and Transcript Storage', description: 'How client documents and recordings are stored, transcribed, and made AI-searchable within workspaces.' },
      { title: 'Brain Dump Mode', description: 'The mechanism for capturing and uploading client context quickly without formal documentation.' },
    ],
    faqs: [
      { question: 'How is per-client AI memory different from keeping good notes?', answer: 'Notes require you to find, read, and manually apply them. Per-client AI memory is actively referenced by Intelligence when generating outputs  -  the AI uses the stored information in everything it creates within that client\'s workspace. It\'s the difference between passive storage and active context.' },
      { question: 'How much information do I need to add to make per-client memory useful?', answer: 'A single detailed onboarding session creates a useful starting point. Memory compounds over time  -  the more you add, the richer and more accurate the AI assistance becomes. Even brief session summaries added consistently create substantial value within a few months.' },
      { question: 'What happens to a client\'s memory if I stop working with them?', answer: 'It persists in their workspace until you delete it. You can archive workspaces for potential future reference, export the full context as a handoff document, or delete it entirely. The choice is yours.' },
      { question: 'Can per-client memory be used to improve my proposals for new similar clients?', answer: 'You can draw on your Account Brain (your methodology, learnings, and case studies in anonymized form) for new proposals. Client-specific memory is isolated to that client\'s workspace and shouldn\'t be repurposed for other clients without appropriate consideration.' },
    ],
  },
  {
    slug: 'ai-workspace-for-service-businesses',
    label: 'AI Workspace for Service Businesses',
    h1: 'What is an AI Workspace for Service Businesses?',
    metaDescription: 'An AI workspace for service businesses is more than a chat interface. Learn what a purpose-built AI workspace includes, how it differs from general AI tools, and who needs one.',
    prose: `<p>When most people think of an AI workspace, they think of a chat interface with a capable AI on the other end. They think of ChatGPT, Claude, or similar tools  -  and for individual productivity tasks, those tools are genuinely useful. But for professional service businesses serving multiple clients, a general-purpose chat interface is the wrong tool entirely.</p>

<p>An AI workspace for service businesses is a purpose-built environment that combines three things general AI tools lack: persistent client memory, encoded practitioner methodology, and structural data isolation between clients. These three elements are what transform AI from a productivity tool into genuine service delivery infrastructure.</p>

<h3>What Makes an AI Workspace Purpose-Built</h3>

<p>The first differentiating element is context architecture. In a general AI chat tool, every conversation starts fresh. In a purpose-built AI workspace, context is persistent and layered: the practitioner's methodology is always in scope (from the Account Brain), and the current client's full history is always in scope (from their workspace). This dual context produces outputs that are simultaneously methodology-consistent and client-specific  -  something no general AI tool can achieve.</p>

<p>The second element is isolation. Professional service businesses have confidentiality obligations. A single shared AI environment for multiple clients creates data mixing risk  -  one client's information potentially accessible in another client's context. A purpose-built AI workspace isolates each client in their own structural environment. Data mixing becomes architecturally impossible, not just policy-controlled.</p>

<p>The third element is organizational IP infrastructure. General AI tools consume your knowledge but don't retain it. A purpose-built AI workspace provides permanent organizational storage for your methodology, frameworks, and institutional knowledge  -  accessible to all your team members and applicable to all your clients automatically.</p>

<h3>The Components of an AI Workspace</h3>

<p><strong>The Account Brain</strong> is the organizational layer  -  your methodology, frameworks, quality standards, and institutional knowledge. It lives at the account level, accessible to all team members, applied to all client engagements. The Account Brain is what makes the AI sound like your organization rather than a generic AI assistant.</p>

<p><strong>Client Workspaces</strong> are the per-client environments where client-specific work happens. Each workspace is isolated from every other. Within a workspace, the AI has access to that client's full history  -  documents, transcripts, decisions, goals, and context accumulated over the entire engagement. The workspace is where methodology meets client specifics.</p>

<p><strong>The Intelligence Assistant</strong> operates within workspaces, with access to both the Account Brain and the current client's context simultaneously. This is the interface through which the practitioner directs the AI  -  generating deliverables, preparing for sessions, synthesizing documents, drafting communications. Intelligence's outputs are grounded in methodology and client context by default.</p>

<p><strong>The Blueprint Execution Layer</strong> turns methodologies into executable workflows. Instead of just having access to your frameworks, you can build Blueprints that automate the application of frameworks across defined delivery steps. Run a Blueprint in a client workspace and Intelligence executes the full workflow with that client's context in scope.</p>

<h3>Who Needs a Purpose-Built AI Workspace</h3>

<p>Not every professional needs a purpose-built AI workspace. Someone who uses AI only for personal productivity tasks  -  drafting emails, summarizing documents, brainstorming  -  gets most of what they need from a general AI tool.</p>

<p>The need for a purpose-built workspace emerges when: you serve multiple clients with distinct, sensitive contexts that must not mix; you have proprietary methodology that should be applied consistently across all your work; you want your AI assistance to improve over time as you add to both your methodology and your client contexts; and your team needs to work from the same methodology foundation.</p>

<p>For fractional executives, consultants, coaches, agencies, and any other multi-client professional service business, the gap between a general AI tool and a purpose-built AI workspace is substantial  -  in quality of outputs, in confidentiality assurance, and in the compounding value of organized organizational knowledge.</p>

<h3>The Workspace as Service Infrastructure</h3>

<p>The most useful way to think about an AI workspace for service businesses is as infrastructure  -  the same way you think about your CRM, your project management tool, or your document storage. These are not tools you use for individual tasks; they're the platform on which your service delivery operates.</p>

<p>A purpose-built AI workspace is the intelligence layer of that infrastructure. It's where your methodology lives, where client relationships are managed, and where AI-assisted delivery happens. Like good infrastructure, its value is most visible not in any single use, but in the accumulated system it becomes over time: a rich, organized, AI-applicable record of your expertise and your client relationships.</p>`,
    relatedFeatures: [
      { title: 'Account Brain', description: 'The organizational methodology layer of the workspace  -  your IP encoded and applied across all client engagements.' },
      { title: 'Intelligence Assistant', description: 'The AI interface within each workspace that generates outputs grounded in your methodology and client context.' },
      { title: 'Blueprint Execution Layer', description: 'The workflow engine that turns methodology into executable, repeatable delivery processes.' },
      { title: 'Skills and Agents', description: 'Specialized AI capabilities that attach to specific workspace tasks and automate multi-step workflows.' },
    ],
    faqs: [
      { question: 'How is an AI workspace different from Microsoft Copilot or Google Gemini for Work?', answer: 'Enterprise AI tools improve productivity within their respective ecosystems. A purpose-built AI workspace for service businesses adds per-client isolation, practitioner methodology encoding, and service delivery architecture that general enterprise AI tools don\'t provide.' },
      { question: 'Can I use Client Intelligence alongside other AI tools?', answer: 'Yes. Client Intelligence is your service delivery AI infrastructure. You can still use general AI tools for tasks that don\'t require client context or methodology encoding. The workspace handles the work that requires those elements.' },
      { question: 'Is an AI workspace useful for small practices or only for larger agencies?', answer: 'It\'s especially valuable for small practices. Solo consultants and small agencies have the most to gain from per-client AI memory and methodology encoding  -  they\'re doing all the work that larger firms distribute across teams.' },
      { question: 'How long does it take to set up an AI workspace?', answer: 'Basic setup  -  Account Brain seeding and first client workspace  -  takes 2–4 hours. Most practices are fully operational within a week. The value compounds over time as the workspace becomes richer.' },
    ],
  },
  {
    slug: 'centralized-ip-per-client-isolation',
    label: 'Centralized IP with Per-Client Isolation',
    h1: 'Centralized IP, Per-Client Isolation: The Architecture of Scale',
    metaDescription: 'The architecture that enables scaling service businesses combines centralized IP (your methodology) with per-client isolation (their data). Learn why both are essential and how they work together.',
    prose: `<p>Scaling a service business has historically required a choice: either you maintain high quality by staying small (limiting what you can systematize), or you grow by hiring more people and accepting quality variation. This isn't because scale is inherently incompatible with quality  -  it's because the architecture for combining both has been missing.</p>

<p>The combination of centralized IP and per-client isolation is that architecture. It solves both sides of the scaling problem simultaneously: centralized IP ensures your methodology is applied consistently regardless of which team member or client is involved, and per-client isolation ensures each client receives service that feels deeply personalized to their specific context. Together, they make consistent, high-quality delivery at scale possible in a way that wasn't before.</p>

<h3>Centralized IP: The Methodology Layer</h3>

<p>Centralized IP refers to storing your intellectual property  -  your frameworks, methodologies, quality standards, and accumulated expertise  -  in one organizational system accessible to everyone on your team and applicable to every client engagement.</p>

<p>The problem it solves is fundamental: in most service businesses, IP is distributed. Senior practitioners carry it in their heads. Documents are scattered across drives, email threads, and old presentations. Different team members have internalized different pieces of the overall methodology. When you need to apply your methodology to a client situation, you're dependent on whoever has the most relevant knowledge being available and applying it correctly.</p>

<p>Centralized IP changes the architecture. Your methodology exists in one place, organized in AI-readable form, accessible to every team member, applied consistently to every client. When you add a new client, they don't get whatever version of your methodology the assigned consultant happens to have internalized. They get the full, current methodology  -  systematically applied by AI that has it permanently in context.</p>

<p>The organizational implications of centralized IP extend beyond consistency. When IP is organizational rather than individual, it survives team changes. When it's versioned and maintained, methodology improvement applies everywhere at once. When it's AI-readable rather than human-referenced, it's actively used rather than passively stored.</p>

<h3>Per-Client Isolation: The Context Layer</h3>

<p>Per-client isolation refers to ensuring that each client's data, history, and context exists in a completely separate environment from every other client's information. It's the structural implementation of confidentiality  -  not as policy, but as architecture.</p>

<p>The problem it solves is the data mixing risk inherent in shared AI environments. When multiple clients' information exists in the same AI system, there's genuine risk that details from one client's context influence outputs for another. For service businesses with NDA obligations, serving competing clients, or operating in regulated industries, this risk isn't theoretical  -  it's a real professional and contractual concern.</p>

<p>Per-client isolation makes cross-contamination architecturally impossible. Each client workspace is a separate data environment. The AI in one workspace has no access to any other workspace's data. This isolation extends to all content in the workspace: documents, transcripts, conversation history, and analytical outputs.</p>

<p>The result is twofold. First, confidentiality is structural  -  you can honestly represent to clients that their data is isolated, because it is. Second, AI outputs are more accurate and relevant, because the AI has access only to contextually appropriate information rather than a pool of data from multiple clients that it must navigate.</p>

<h3>How They Work Together</h3>

<p>The power of combining centralized IP with per-client isolation is that they address opposite dimensions of the same problem: scale and personalization. Centralized IP solves the consistency dimension  -  your methodology applies to every client the same way regardless of who handles the account. Per-client isolation solves the personalization dimension  -  each client's outputs are grounded in their specific context, history, and situation.</p>

<p>The practical experience from the client's perspective is that they receive deeply personalized service that also reflects consistent, high-quality methodology. They don't see the system behind this  -  they just notice that their advisor always knows their full history, applies rigorous frameworks to their specific situation, and maintains quality that doesn't seem to vary with who's working on their account or how busy the firm is.</p>

<p>From the practitioner's perspective, this architecture means that adding clients doesn't add proportionally to cognitive overhead. The methodology is systematic, so it doesn't require manual application for each new client. The context is isolated, so managing multiple clients doesn't create confusion between them. Scale becomes possible without the quality trade-offs that normally accompany it.</p>

<h3>The Strategic Advantage of the Architecture</h3>

<p>Service businesses that implement centralized IP with per-client isolation develop competitive advantages that compound over time. Methodology improves continuously as the central IP system is updated  -  and every improvement applies everywhere at once. Client relationships deepen as context accumulates in workspaces  -  and the depth of knowledge becomes a retention driver. Team capability scales more quickly as new members work from the encoded methodology rather than requiring long mentorship periods.</p>

<p>The architecture also creates transferable business value. When methodology is organizational rather than individual, and when client relationships are captured in structured workspaces rather than individual memories, the business has assets that can survive team changes and that a potential acquirer can inherit. Businesses with this architecture are more valuable  -  and more defensible  -  than those dependent on specific individuals.</p>`,
    relatedFeatures: [
      { title: 'Account Brain', description: 'The centralized IP layer  -  where your methodology lives and is applied across all client engagements.' },
      { title: 'Isolated Client Workspaces', description: 'The per-client layer  -  structurally isolated environments for each client\'s data and context.' },
      { title: 'AI Trained on Your Frameworks', description: 'How centralized IP translates into AI that reasons from your methodology rather than generic training.' },
      { title: 'Data Never Mixes', description: 'The architectural guarantee that per-client isolation provides.' },
    ],
    faqs: [
      { question: 'Can the centralized IP layer and per-client isolation coexist without conflict?', answer: 'They\'re designed to work together. Your methodology (Account Brain) is your IP  -  shared across all workspaces by design. Client data is isolated per workspace by design. The two layers serve different purposes and don\'t conflict.' },
      { question: 'What if different clients need different methodology applications?', answer: 'Your Account Brain can hold multiple methodology variants. You direct Intelligence to apply the relevant variant for each engagement type. Centralized IP doesn\'t mean identical methodology for all clients  -  it means consistent, organized access to the right methodology for each context.' },
      { question: 'How does per-client isolation hold up when clients are in the same industry?', answer: 'Isolation is structural and applies regardless of industry. Two clients in the same industry have completely separate workspaces. Competitive intelligence, strategy documents, and analytics for each stay within their workspace  -  unable to cross to the other.' },
      { question: 'What happens to per-client isolation if my team grows?', answer: 'Team growth doesn\'t affect client isolation. New team members access the Account Brain and client workspaces through the same system. The isolation between client workspaces remains regardless of how many team members are using the platform.' },
    ],
  },
  {
    slug: 'why-info-products-are-dying',
    label: 'Why Info Products Are Dying',
    h1: 'Why Info Products Are Dying  -  And What Replaces Them',
    metaDescription: 'Info products promised scalable income from expertise. AI has fundamentally undermined that model. Learn why info products are declining and what the smarter alternative looks like.',
    prose: `<p>For twenty years, the business model promised to experts was simple and compelling: package your expertise into a course or ebook, sell it at scale, earn while you sleep. Information was scarce, and experts who could make it accessible could build substantial income without trading time for money. Info products were the answer to the expert's scaling problem.</p>

<p>That model is breaking down. Not slowly, but quickly  -  and for structural reasons that aren't going away.</p>

<h3>The AI Disruption of Information Scarcity</h3>

<p>The foundational assumption of the info product model was information scarcity. If someone wanted to learn how to run Facebook ads, grow a SaaS business, or master copywriting, their options were limited: hire an expensive expert, find a good book, or pay for a course from someone who'd figured it out.</p>

<p>AI eliminated information scarcity almost overnight. Anyone can now access detailed, accurate, contextually appropriate information on virtually any topic through a free or low-cost AI tool. The question "how do I improve my email open rates?" now gets an excellent answer from ChatGPT in seconds  -  without purchasing a $500 email marketing course. The information moat that info products depended on has been drained.</p>

<p>This doesn't mean expertise is worthless  -  quite the opposite. But it means the part of expertise that info products were actually selling (access to information) is now widely available for free. The part of expertise that AI cannot replicate (applied judgment, personalized analysis, strategic decision-making in specific situations) remains scarce and valuable. The problem is that info products sold the former, not the latter.</p>

<h3>The Completion and Application Gap</h3>

<p>Even before AI, info products faced a structural problem that most creators quietly acknowledged: the completion rates were terrible. Udemy reports average completion rates under 30% for its courses. Most ebooks are read partially. The information was purchased, but it was rarely fully consumed  -  and even more rarely applied.</p>

<p>The mechanism for value delivery in info products  -  "here is the information, now apply it yourself"  -  has always produced a large gap between purchase and outcome. Buyers aspired to apply the knowledge; in practice, implementation was hard, uncertain, and easy to deprioritize. The info product model transferred knowledge but rarely transferred outcomes.</p>

<p>AI has made this gap more visible. Why struggle to implement a 10-module course when you can ask an AI to help you apply the principle directly to your situation right now? The question is no longer "where do I find the information?" but "how do I apply it to my specific problem?" And that's exactly the question info products are worst at answering  -  because they're pre-recorded, static, and generic.</p>

<h3>What Replaces Info Products</h3>

<p>The decline of info products doesn't mean the decline of monetizable expertise. Expertise remains enormously valuable  -  it's just that the valuable part is now different from what info products sold. The new question is: how do you monetize applied expertise rather than packaged information?</p>

<p>The emerging answer is service models augmented by Intelligence as a Service  -  expert advice, analysis, and judgment delivered directly to clients, with AI systematizing the consistent application of frameworks so delivery can scale without proportionally scaling the expert's time. Instead of selling information that clients struggle to implement, experts sell outcomes: systematic application of their specific methodology to each client's situation.</p>

<p>This model is better for clients. They receive personalized, contextually appropriate expertise rather than generic information. They get judgment and strategy rather than knowledge they have to implement alone. And because AI handles systematic delivery, they receive consistent quality at scale.</p>

<p>It's also better for experts. Rather than the treadmill of creating and marketing new info products to replace declining sales, they build a client base that pays recurring fees for ongoing expert intelligence. The revenue is more predictable, the relationships are deeper, and the value delivered is more genuine.</p>

<h3>The IaaS Alternative to Info Products</h3>

<p>For experts who built info product businesses, the transition path isn't from courses to individual consulting  -  that trade is time for money and doesn't scale any better than courses sell. The path is to Intelligence as a Service: encoding your methodology in AI systems that apply it to clients systematically.</p>

<p>Instead of teaching your framework in a course, you apply your framework to each client's specific situation through an AI-powered delivery system. Instead of hoping clients implement your teachings, you produce the implementation for them  -  grounded in their context and your methodology. The expert's IP creates value directly, not through the intermediate step of a student attempting to apply it.</p>

<p>This model scales differently than info products but more sustainably. Info products scale through marketing  -  more buyers for the same content. IaaS scales through methodology systematization  -  more clients served without proportional time increase. The ceiling is higher because the value delivered is more real.</p>`,
    relatedFeatures: [
      { title: 'Intelligence as a Service Model', description: 'The emerging service model that replaces info products with systematized expert delivery.' },
      { title: 'Blueprint Execution Layer', description: 'How expert methodology becomes executable delivery at scale  -  without courses or passive content.' },
      { title: 'AI Trained on Your Frameworks', description: 'The mechanism that lets your expertise apply to clients without requiring you to teach it.' },
      { title: 'Account Brain', description: 'Where your methodology lives so it can scale beyond your personal delivery capacity.' },
    ],
    faqs: [
      { question: 'Are info products really dying or just declining?', answer: 'The decline is structural, not cyclical. The information scarcity that info products depended on has been permanently disrupted by AI. Some markets will take longer to feel the full impact than others, but the underlying economics have fundamentally shifted.' },
      { question: 'Should I abandon my existing info product business immediately?', answer: 'Not necessarily  -  but you should actively develop service-based revenue streams that don\'t depend on information scarcity. The transition can be gradual; what\'s unwise is continuing to invest heavily in a model with declining structural economics.' },
      { question: 'Can I use Client Intelligence to deliver info products better?', answer: 'Client Intelligence is designed for service delivery, not course delivery. But many users transition from info products to IaaS service models using Client Intelligence  -  applying their framework to clients directly rather than teaching it through courses.' },
      { question: 'What kinds of expertise still command premium prices in the AI era?', answer: 'Applied judgment in specific client situations, strategic decision-making under uncertainty, relationship-based executive advisory, and any expertise that requires years of pattern recognition that AI hasn\'t fully internalized. The information layer is commoditized; the application layer remains premium.' },
    ],
  },
  {
    slug: 'services-vs-courses-ai-age',
    label: 'Services vs Courses in the AI Age',
    h1: 'Services vs Courses: Which Model Wins in the AI Age?',
    metaDescription: 'The AI era has changed the economics of courses vs services. Learn which model wins in the new landscape and how to position your expertise for maximum long-term value.',
    prose: `<p>The debate between services and courses as business models has been ongoing in the expert economy for years. Courses promised passive income and scale; services offered depth and relationships but required your time. Both models had clear trade-offs, and many experts tried to do both  -  with mixed results.</p>

<p>The AI era has dramatically shifted the economics of this debate. The result isn't that one model wins absolutely, but that the trade-offs have fundamentally changed  -  and for most experts, the calculus now favors services, particularly when those services are built on AI-powered delivery infrastructure.</p>

<h3>What Changed for Courses</h3>

<p>Courses depend on information having monetary value. When someone needs to learn how to build a marketing funnel, write a sales email, or structure a consulting engagement, and the only way to access that knowledge is to pay an expert who knows it, courses make perfect sense. The information has clear value and a clear buyer.</p>

<p>The problem is that AI has made information available at near-zero cost. Any expertise that primarily consists of frameworks, principles, tactics, and best practices can now be substantially accessed through AI tools without purchasing a course. The course buyer's calculation has changed: "Do I pay $500 for this course, or do I ask ChatGPT for the same information and implement it myself?"</p>

<p>For most course topics, the answer is increasingly "ask ChatGPT." Not because the AI answer is as good as the expert's course, but because it's close enough that the perceived value gap no longer justifies the price. Course conversion rates are declining, completion rates remain abysmal, and the content treadmill of creating new modules to compete with free AI alternatives is exhausting.</p>

<h3>What Changed for Services</h3>

<p>Services face a different dynamic. The part of expert value that AI cannot replicate  -  applied judgment, personalized analysis, strategic decision-making in specific situations, accountability, relationships  -  is exactly what high-value services deliver. The gap between AI-generated generic advice and expert-delivered personalized strategy has not narrowed; it may have widened, because AI makes the generic baseline available for free and makes the personalized expertise layer comparatively more valuable.</p>

<p>The challenge for services has always been scale. Time-based service delivery hits a ceiling defined by the expert's available hours. This is where the AI era creates opportunity rather than threat: AI can systematize the application of expert frameworks, making service delivery scale beyond the individual's time constraints.</p>

<p>The services model that wins in the AI age isn't "trade time for money as a consultant." It's "encode your methodology and deliver it at scale as intelligence"  -  the IaaS model. Services that would previously have required proportional time to scale can now grow faster than the expert's personal capacity, because AI handles the systematic application of frameworks while the expert focuses on strategy, relationships, and judgment calls.</p>

<h3>The Hybrid Trap</h3>

<p>Many experts have tried to solve the courses-vs-services debate by doing both simultaneously. This has rarely worked well. The operational demands of maintaining content (courses need updating, marketing, and student support) conflict with the relationship demands of service delivery. Attention is divided. Neither model gets the focus it needs to excel.</p>

<p>The hybrid that actually works in the AI age isn't courses plus services  -  it's services powered by AI infrastructure. The "passive" element isn't a course that sells while you sleep; it's systematized service delivery that AI can execute with your methodology, for multiple clients, without proportionally consuming your time. The scale comes from systematized delivery, not from selling information.</p>

<h3>Which Model Should You Choose</h3>

<p>For most experts who currently operate courses or are considering building them, the honest answer in the AI era is: build services first, build AI infrastructure to scale them, and use your expertise as the methodology that the AI applies  -  not as content that students struggle to implement.</p>

<p>The course model required you to make your expertise teachable. The IaaS service model requires you to make your expertise deployable. Teachable means students can understand and apply it. Deployable means AI can apply it to client situations directly. The latter is more valuable to clients, more durable economically, and more aligned with where the expert economy is heading.</p>

<p>Courses may still make sense in narrow circumstances: building an audience before launching services, serving a market segment too small to justify full service delivery, or creating training programs for team members. But as a primary revenue model for expert-based businesses, the economics in the AI era strongly favor service delivery  -  especially when built on AI-powered delivery infrastructure.</p>`,
    relatedFeatures: [
      { title: 'Intelligence as a Service Model', description: 'The service model that scales like a product  -  by systematizing expert methodology, not by selling information.' },
      { title: 'Blueprint Execution Layer', description: 'How service delivery becomes systematized and scalable without requiring proportional time investment.' },
      { title: 'Account Brain', description: 'Where your methodology lives so it can be applied to clients  -  not just taught to students.' },
      { title: 'Per-Client AI Memory', description: 'The deep personalization that makes AI-powered services more valuable than generic courses.' },
    ],
    faqs: [
      { question: 'Should I shut down my existing courses?', answer: 'Not necessarily. If they\'re generating revenue with minimal maintenance, they can coexist with a service business. The question is where to invest new energy: doubling down on a declining model or building toward a more durable one.' },
      { question: 'Can I use my course content to seed my Client Intelligence Account Brain?', answer: 'Yes  -  course content often represents crystallized methodology that\'s highly appropriate for the Account Brain. It\'s already structured for teaching your framework, which means it\'s well-suited for encoding your methodology for AI application.' },
      { question: 'Will services remain more valuable than courses long-term?', answer: 'The trend favors services, and specifically IaaS services. As AI continues to commoditize information, the premium is increasingly on personalized judgment and applied strategy  -  which services deliver and courses cannot.' },
      { question: 'Is there any type of course that still makes sense in the AI era?', answer: 'Courses teaching skills that require human practice and coaching (communication, leadership, creative skills) hold more value than courses teaching frameworks that AI can apply. Skill development requires human feedback loops that pure information delivery can\'t provide.' },
    ],
  },
  {
    slug: 'future-of-service-businesses-ai',
    label: 'Future of Service Businesses with AI',
    h1: 'The Future of Service Businesses in the Age of AI',
    metaDescription: 'AI will transform service businesses over the next decade. Learn what changes, what stays the same, and how service businesses should position now to thrive in the AI era.',
    prose: `<p>The transformation of service businesses by AI is not a hypothetical future  -  it's underway now. The decisions that service businesses make in the next two to three years about how they incorporate AI into their model will determine their competitive position for the decade that follows. Understanding what's actually changing is essential to navigating this correctly.</p>

<h3>What Is Changing</h3>

<p>The most fundamental change is to the economics of information and knowledge work. Historically, service businesses were valuable partly because they possessed knowledge that clients didn't. The consultant knew things the client didn't; the agency had skills the client lacked. That information asymmetry justified substantial fees and created durable competitive moats.</p>

<p>AI is dramatically compressing this asymmetry. Information that previously required years of expertise to develop and thousands of dollars to access is now available to anyone with an AI subscription. Generic frameworks, best practices, tactical recommendations, and structured analysis are no longer proprietary. They're commodities.</p>

<p>What isn't changing is the value of applied judgment  -  of someone who can take general knowledge and apply it correctly to a specific situation with full understanding of the context, constraints, and relationships involved. This kind of expertise doesn't commoditize. If anything, the commoditization of generic knowledge makes applied expert judgment more valuable, not less, because it clarifies what remains scarce.</p>

<p>Delivery efficiency is also changing dramatically. Tasks that previously required hours of professional time  -  research, document creation, analysis synthesis, reporting  -  can now be done with AI assistance in a fraction of the time. This creates pressure to reduce fees in some market segments while creating opportunity for service businesses to absorb more clients at higher margins in others.</p>

<h3>The Service Businesses That Will Thrive</h3>

<p>Service businesses that will thrive in the AI era share several characteristics. First, they have proprietary methodology  -  frameworks that go beyond generic best practices and reflect the specific wisdom and pattern recognition developed over years of expert work. This methodology can be encoded in AI systems, making it more scalable without becoming any less distinctive.</p>

<p>Second, they're investing in AI as delivery infrastructure rather than just productivity tools. The difference is significant: using AI to work faster is a marginal improvement; using AI to systematize delivery and scale methodology is a model transformation. The businesses that treat AI as infrastructure will outcompete those that treat it as a typing assistant.</p>

<p>Third, they're building deeper client relationships rather than transactional ones. As generic knowledge commoditizes, the value of ongoing, contextual, relationship-based expertise increases. Service businesses that maintain deep client context  -  knowing the full history of each relationship, understanding the client's specific situation and constraints  -  will command premiums that transactional service providers cannot.</p>

<p>Fourth, they're demonstrating data handling maturity. As AI becomes central to service delivery, clients increasingly ask how their data is handled. Service businesses that can demonstrate structural client data isolation  -  not just privacy policies  -  will have a significant advantage in enterprise and professional markets where this matters.</p>

<h3>The Service Businesses That Will Struggle</h3>

<p>Service businesses that will struggle are those whose value proposition is primarily in information access or generic best practice delivery. These are the businesses most disrupted by AI's commoditization of knowledge. If clients can get 80% of your value from ChatGPT, the premium you charge for the remaining 20% compresses significantly over time.</p>

<p>Also at risk are service businesses that fail to systematize delivery. In a market where AI-powered competitors can serve more clients at lower cost, purely manual service delivery becomes increasingly uncompetitive on price. The service businesses that maintain manual processes will face margin pressure from competitors who've built AI infrastructure.</p>

<h3>The Near-Term Transition</h3>

<p>For most service businesses, the AI transition happens in phases. The first phase  -  already underway for many  -  is using AI as a productivity tool: writing faster, researching faster, summarizing faster. This is valuable but not transformative. It's participating in productivity gains that your competitors are also capturing.</p>

<p>The second phase is systematizing delivery: encoding your methodology in AI systems, building per-client AI memory, and creating delivery workflows that don't require proportional time investment. This is where genuine competitive advantage develops  -  businesses that do this in the next two years will have substantially more organizational AI maturity than competitors who do it in four or five years.</p>

<p>The third phase  -  still emerging  -  is building service categories that are definitionally AI-powered: Intelligence as a Service businesses that deliver systematized expert methodology at a scale and consistency that pure human delivery cannot match. These businesses will define the competitive standard that others scramble to meet in the years ahead.</p>

<p>The service businesses that thrive in the AI era won't be those that resist AI or those that adopt it superficially. They'll be those that build genuine AI delivery infrastructure around their proprietary expertise  -  and use it to serve more clients better than they ever could before.</p>`,
    relatedFeatures: [
      { title: 'Intelligence as a Service Model', description: 'The service model architecture designed to win in the AI era  -  systematized expert delivery at scale.' },
      { title: 'Isolated Client Workspaces', description: 'The data handling infrastructure that enterprise clients increasingly require as AI becomes central to delivery.' },
      { title: 'Account Brain', description: 'How proprietary methodology becomes organizational infrastructure rather than individual knowledge.' },
      { title: 'Blueprint Execution Layer', description: 'The AI-powered delivery infrastructure that transforms service capacity economics.' },
    ],
    faqs: [
      { question: 'How urgent is the AI transition for service businesses?', answer: 'Urgent enough to begin now, manageable if started now. The businesses that build AI delivery infrastructure in the next 12–24 months will have compounding advantages over those that start 3–5 years later. The transition takes time to mature.' },
      { question: 'Will AI replace service businesses entirely?', answer: 'No. AI will replace the information-delivery and generic-knowledge components of service businesses. Applied judgment, complex relationship management, and genuinely novel strategic problem-solving will remain human-driven for the foreseeable future.' },
      { question: 'How should service businesses price in the AI era?', answer: 'Move away from hourly pricing, which ties revenue to a resource AI can increasingly replicate. Toward outcome-based or retainer pricing that reflects the value of your methodology and relationships  -  not the hours required to deliver them.' },
      { question: 'What\'s the biggest mistake service businesses make in their AI transition?', answer: 'Using AI as a productivity tool only  -  working faster on the same model. The transformation opportunity is in using AI to systematize delivery and scale methodology. Faster delivery of the same service is a minor improvement; systematized delivery at scale is a model change.' },
    ],
  },
  {
    slug: 'scale-services-not-education',
    label: 'Why Services Scale Better Than Education',
    h1: 'Why It\'s Now Easier to Scale Services Than to Scale Education',
    metaDescription: 'For years, experts believed scaling required turning expertise into education products. AI has reversed this. Learn why services now scale better than courses  -  and what that means for your business.',
    prose: `<p>The conventional wisdom in the expert economy has been: to scale your expertise, you must productize it. Turn your knowledge into a course, a book, a template library, a membership community. The logic was clear  -  human delivery time is finite, but information can be replicated infinitely. The course scales; the service doesn't.</p>

<p>This logic made sense when information was scarce and hard to apply. It no longer does. AI has fundamentally changed the economics of both information and service delivery in ways that reverse the conventional wisdom entirely.</p>

<h3>Why Education Scaling Is Harder Now</h3>

<p>Educational products  -  courses, books, content programs  -  scale by reaching more buyers with the same content. For decades, this model worked because good information commanded a price premium and reaching buyers was the primary challenge. Build an audience, create a course, and information scarcity did the rest.</p>

<p>Two things have broken this model. First, AI has eliminated information scarcity for most practical purposes. A buyer who would have paid $500 for a framework course can now access equivalent information through an AI tool at no additional cost. The perception of uniqueness that justified course prices has eroded rapidly across most categories.</p>

<p>Second, the implementation gap  -  always the Achilles heel of educational products  -  has become more visible. Buyers increasingly recognize that buying information doesn't produce outcomes. The completion rates are low; the application rates are lower. And as AI makes better information freely available, the perceived value of purchasing it decreases while the implementation difficulty remains the same.</p>

<p>Scaling educational products now requires solving both problems: competing with free AI information and somehow closing the implementation gap. Neither is getting easier. Marketing costs for courses are rising while conversion rates fall. Communities and cohorts add overhead without reliably solving application.</p>

<h3>Why Services Scale Better Now</h3>

<p>Services, historically, didn't scale  -  they were bounded by expert time. One consultant, fifteen clients maximum. One coach, twenty clients maximum. The time constraint was real and immovable.</p>

<p>AI has changed this constraint fundamentally. The time-intensive components of service delivery  -  research, deliverable creation, documentation, analysis synthesis, reporting  -  can now be handled by AI with expert methodology in context. What previously required 8 hours of expert time can be done in 2. What required a full team can be done by a smaller team with AI support.</p>

<p>More importantly, the quality of AI-assisted service delivery, when the AI has access to the expert's actual methodology and the client's specific context, is often better than manual delivery under time pressure. AI never forgets to apply the full framework. It never cuts corners when it's 5pm on a Friday. It doesn't have bad days. The consistency that's hard to maintain in manual delivery is structurally built into AI-assisted delivery.</p>

<p>The result is that service businesses can now serve significantly more clients  -  some practitioners report 50–100% capacity increases  -  without proportionally increasing time or headcount. The scaling constraint that made courses attractive is loosening. Meanwhile, the value of what services deliver  -  personalized, context-specific, outcome-oriented expertise  -  is increasing relative to generic information.</p>

<h3>The Service Scaling Stack</h3>

<p>Scaling services in the AI era requires a specific infrastructure stack. This isn't just "use AI tools"  -  it's building organizational AI architecture around your expertise.</p>

<p>The first layer is encoded methodology: your frameworks and knowledge in AI-readable form that Intelligence can apply to any client situation without requiring your personal involvement in each application. This is your intellectual property encoded as scalable infrastructure rather than human-held knowledge.</p>

<p>The second layer is per-client AI memory: persistent, isolated context for every client relationship you serve. This is what enables personalization at scale  -  the AI knows each client's full history, goals, and context, producing outputs that feel deeply tailored even as you serve more clients.</p>

<p>The third layer is systematized delivery: AI-powered workflows that execute your methodology consistently for every client without requiring manual step-by-step application. Blueprints and automated processes handle the systematic work; your judgment handles the exceptions.</p>

<p>These three layers together create service delivery that scales differently than traditional services  -  not by working more hours, but by systematizing the application of your expertise so it works for more clients simultaneously.</p>

<h3>The Expert's New Competitive Advantage</h3>

<p>Experts who understand this shift have a significant opportunity. The experts who spent years building proprietary methodology  -  deep, specific, tested frameworks that go beyond generic best practices  -  now have something more valuable than ever. Their methodology can be encoded in AI systems that apply it at scale, creating service businesses that outperform both traditional service delivery (too slow, too expensive to scale) and educational products (declining value, implementation gap).</p>

<p>The expert's competitive advantage in the AI era isn't information access  -  that advantage has collapsed. It's methodology: the specific, tested, deeply developed way they approach problems that AI can apply consistently but that took years of expertise to develop. Services built on encoded methodology are now the most durable and scalable expert business model available.</p>`,
    relatedFeatures: [
      { title: 'Intelligence as a Service Model', description: 'The service scaling model that works in the AI era  -  methodology encoded and delivered systematically.' },
      { title: 'Account Brain', description: 'The encoded methodology layer that makes services scalable beyond individual expert time.' },
      { title: 'Blueprint Execution Layer', description: 'The delivery automation that converts encoded methodology into scalable service capacity.' },
      { title: 'Per-Client AI Memory', description: 'The personalization layer that maintains service quality as client volume scales.' },
    ],
    faqs: [
      { question: 'Should I abandon my course business to build services?', answer: 'Not necessarily immediately, but direction matters. If you have the choice of where to invest new effort, service infrastructure built on AI delivery will compound more reliably than course creation in the current environment.' },
      { question: 'How much can I realistically scale services with AI assistance?', answer: 'Most practitioners see 30–80% capacity increase within 60 days of implementing AI delivery infrastructure. The ceiling depends on how much of your delivery is systematizable  -  framework-heavy, repeatable methodologies scale further and faster.' },
      { question: 'Won\'t clients just use AI directly instead of paying for my services?', answer: 'For generic advice, yes. For methodology applied to their specific situation  -  with full context of their business, decisions, and history  -  the AI needs your encoded frameworks and client context to produce valuable outputs. That\'s what services built on Client Intelligence provide.' },
      { question: 'What types of service businesses are most positioned to scale with AI?', answer: 'Consulting practices with proprietary methodology, coaching businesses with defined frameworks, agencies with systematic delivery processes, and fractional executive services are all highly positioned. The common factor is having IP worth encoding that can be systematically applied.' },
    ],
  },
]
