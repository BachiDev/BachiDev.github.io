"""Generate public/Fabian-Bachmayer-CV.pdf (Jake's-resume-style, 2 pages, A4).

Run from the repo root:  python scripts/generate-cv.py

All CV content lives in the CONTENT dict below — edit text here, re-run,
and the PDF (selectable text + clickable links) is regenerated.
Requires: pip install reportlab
"""

from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.units import mm
from reportlab.platypus import (
    HRFlowable,
    ListFlowable,
    ListItem,
    Paragraph,
    SimpleDocTemplate,
    Spacer,
    Table,
    TableStyle,
)

OUTPUT = "public/Fabian-Bachmayer-CV.pdf"

LINK_COLOR = "#1155cc"

# ----------------------------------------------------------------------------
# CV content — edit here.
# Inline markup: <b>bold</b>, <i>italic</i>, <a href="...">link</a>.
# ----------------------------------------------------------------------------
CONTENT = {
    "name": "FABIAN BACHMAYER",
    "contact": [
        ("Vienna, Austria", None),
        ("bachi.dev", "https://bachi.dev"),
        ("github.com/BachiDev", "https://github.com/BachiDev"),
        ("+43 699 17134810", "tel:+4369917134810"),
        ("fabian@bachi.dev", "mailto:fabian@bachi.dev"),
    ],
    "summary": (
        "Full-Stack Developer with several years of experience across telecommunications, "
        "freelance client work, and AI training. I contribute to all phases of the software "
        "development lifecycle, from requirements and design to deployment and maintenance."
    ),
    "experience": [
        {
            "role": "Freelance Developer",
            "org": "Remote",
            "dates": "2023 – Present",
            "items": [
                {
                    "text": "Developed a full-stack <b>authentication system</b> and integrated the "
                    "<b>Viva Payments API</b> for secure transactions.",
                    "stack": "Google Cloud, Firebase, Next.js, React, TypeScript, Node.js, Firestore, "
                    "Cloud Functions, Tailwind CSS",
                },
                {
                    "text": "Developed an interactive <b>PDF editor</b> for contract generation within an "
                    "energy-sector SaaS platform, featuring drag-and-drop element placement and "
                    "<b>automatic field population</b> via multi-tenant databases.",
                    "stack": "Laravel, PHP, Livewire, Alpine.js, Tailwind CSS, FPDI, TCPDF, DOMPDF, MySQL",
                },
            ],
        },
        {
            "role": "AI Tutor – LLM Training (RLHF)",
            "org": "Remote",
            "dates": "2023 – Present",
            "items": [
                {
                    "text": "Contributed to the training of <b>large language models</b> on multiple platforms, "
                    "refining model performance through reinforcement learning from human feedback.",
                    "stack": "Python, JavaScript, TypeScript, SQL",
                },
            ],
        },
        {
            "role": "Full-Stack Developer",
            "org": "spusu / Mass Response Service GmbH, Vienna",
            "dates": "2021 – 2022",
            "items": [
                {
                    "text": "Developed and maintained core telecom <b>billing system</b> functionality, handling "
                    "large-scale data and complex business logic.",
                    "stack": None,
                },
                {
                    "text": "Integrated the <b>cashpresso</b> installment payment method into the online shop, "
                    "giving customers flexible payment options.",
                    "stack": None,
                },
                {
                    "text": "Built a B2B <b>invoice mailing system</b> that automated invoice generation and delivery.",
                    "stack": None,
                },
                {
                    "text": "Integrated an <b>exchange-rates</b> management API connected to the ECB Statistical "
                    "Data Warehouse.",
                    "stack": None,
                },
            ],
            "stack": "Java EE, MySQL, Gradle, Jenkins, Swagger, JavaScript, HTML, CSS, GitLab",
        },
    ],
    "projects_note": 'Live demos and source code at <a href="https://bachi.dev/work">bachi.dev/work</a>',
    "projects": [
        {
            "name": "Firebase Webstore",
            "text": "Full-stack e-commerce platform with user authentication and secure "
            "<b>Stripe payments</b> (one-time and subscriptions) via Cloud Functions webhooks "
            "and Firestore real-time sync.",
            "stack": "Next.js, React, TypeScript, Firebase, Firestore, Cloud Functions, Stripe, Tailwind CSS",
        },
        {
            "name": "CRM Demo",
            "text": "Full-stack CRM application with a <b>RESTful API</b> and PostgreSQL database, "
            "built with clean architecture and containerized deployment.",
            "stack": "Angular, Spring Boot, Java, PostgreSQL, Docker, Gradle, Swagger",
        },
        {
            "name": "Hand Gesture Control",
            "text": "Touchless UI navigation via real-time webcam capture — computer vision translates "
            "hand landmarks into scroll and toggle commands.",
            "stack": "TensorFlow.js, MediaPipe, Next.js, React, TypeScript, Tailwind CSS",
        },
    ],
    "skills": [
        ("Languages & Runtimes", "TypeScript, JavaScript, Node.js, Python, Java, PHP, SQL, HTML/CSS"),
        ("Frameworks", "React, Next.js, Angular, Spring Boot, Hibernate, Laravel, Tailwind CSS"),
        ("AI & ML", "LLM Training (RLHF), TensorFlow.js, MediaPipe, Ollama, Hugging Face"),
        ("Databases", "PostgreSQL, MySQL, Firestore"),
        ("Cloud & DevOps", "Google Cloud, Firebase, Supabase, Vercel, Docker, CI/CD, Git, Gradle, Maven"),
        ("Testing & Methods", "JUnit, Mockito, Agile, Scrum, BPMN"),
        ("Spoken Languages", "German (Native), English (Professional Working Proficiency), Spanish (Basic)"),
    ],
    "education": [
        (
            "Technikum Vienna",
            "Business Informatics, 2018 – 2022",
            "Completed all coursework, gaining extensive knowledge in software development and system architecture.",
        ),
        (
            "TU Wien",
            "Technical Mathematics, 2017 – 2018",
            "C and C++ programming within the curriculum.",
        ),
        (
            "Business Academy Donaustadt (HAK)",
            "Graduated 2016",
            "Focus on Information and Communication Technology.",
        ),
        (
            "Federal Civil Service",
            "2016 – 2017",
            "",
        ),
    ],
}

# ----------------------------------------------------------------------------
# Layout.
# ----------------------------------------------------------------------------
PAGE_W, PAGE_H = A4
MARGIN = 15 * mm

s_name = ParagraphStyle("name", fontName="Helvetica-Bold", fontSize=17, leading=20, alignment=1)
s_contact = ParagraphStyle("contact", fontName="Helvetica", fontSize=9, leading=11, alignment=1)
s_section = ParagraphStyle("section", fontName="Helvetica-Bold", fontSize=11.5, leading=14)
s_body = ParagraphStyle("body", fontName="Helvetica", fontSize=10, leading=12)
s_bullet = ParagraphStyle("bullet", parent=s_body, leftIndent=14, bulletIndent=4, spaceBefore=0)
s_stack = ParagraphStyle("stack", parent=s_body, leftIndent=14, spaceBefore=0)
s_entry = ParagraphStyle("entry", parent=s_body, spaceBefore=2)
s_skill = ParagraphStyle("skill", parent=s_body, spaceBefore=0)


def contact_line(parts):
    rendered = []
    for text, href in parts:
        if href:
            rendered.append(f'<a href="{href}" color="{LINK_COLOR}"><u>{text}</u></a>')
        else:
            rendered.append(text)
    return Paragraph(" &nbsp;|&nbsp; ".join(rendered), s_contact)


def section(title):
    return [
        Spacer(1, 5),
        Paragraph(title, s_section),
        HRFlowable(width="100%", thickness=0.75, color="black", spaceBefore=2, spaceAfter=3),
    ]


def role_row(role, org, dates):
    heading = f"<b>{role}</b> &nbsp;|&nbsp; {org}" if org else f"<b>{role}</b>"
    left = Paragraph(heading, s_entry)
    right = Paragraph(f"<i>{dates}</i>", ParagraphStyle("dates", parent=s_body, alignment=2))
    table = Table([[left, right]], colWidths=[380, PAGE_W - 2 * MARGIN - 380])
    table.setStyle(TableStyle([("VALIGN", (0, 0), (-1, -1), "TOP")]))
    return table


def build():
    story = []
    story.append(Paragraph(CONTENT["name"], s_name))
    story.append(Spacer(1, 2))
    story.append(contact_line(CONTENT["contact"]))

    story.append(Paragraph("<b>Summary</b>", s_section))
    story.append(HRFlowable(width="100%", thickness=0.75, color="black", spaceBefore=2, spaceAfter=5))
    story.append(Paragraph(CONTENT["summary"], s_body))

    story.extend(section("Professional Experience"))
    for job in CONTENT["experience"]:
        story.append(role_row(job["role"], job["org"], job["dates"]))
        for item in job["items"]:
            story.append(
                ListFlowable(
                    [ListItem(Paragraph(item["text"], s_bullet), bulletColor="black")],
                    bulletType="bullet",
                    bulletChar="•",
                    start="\u2022",
                )
            )
            if item["stack"]:
                story.append(Paragraph(f"<b>Tech Stack:</b> {item['stack']}", s_stack))
        if job.get("stack"):
            story.append(Paragraph(f"<b>Tech Stack:</b> {job['stack']}", s_stack))

    story.extend(section("Portfolio Projects"))
    story.append(Paragraph(f"<i>{CONTENT['projects_note']}</i>", s_body))
    for project in CONTENT["projects"]:
        story.append(Spacer(1, 3))
        story.append(Paragraph(f"<b>{project['name']}</b> — {project['text']}", s_body))
        story.append(Paragraph(f"<b>Tech Stack:</b> {project['stack']}", s_stack))

    story.extend(section("Skills"))
    for label, items in CONTENT["skills"]:
        story.append(Paragraph(f"<b>{label}:</b> {items}", s_skill))

    story.extend(section("Education"))
    for school, program, detail in CONTENT["education"]:
        story.append(Paragraph(f"<b>{school}</b> &nbsp;|&nbsp; <i>{program}</i>", s_entry))
        if detail:
            story.append(Paragraph(detail, s_body))

    doc = SimpleDocTemplate(
        OUTPUT,
        pagesize=A4,
        leftMargin=MARGIN,
        rightMargin=MARGIN,
        topMargin=12 * mm,
        bottomMargin=12 * mm,
        title="Fabian Bachmayer – CV",
        author="Fabian Bachmayer",
    )
    doc.build(story)
    print(f"Wrote {OUTPUT}")


if __name__ == "__main__":
    build()
