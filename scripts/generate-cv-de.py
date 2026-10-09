"""Generate public/Fabian-Bachmayer-CV-DE.pdf (German CV, A4).

Run from the repo root:  python scripts/generate-cv-de.py

German counterpart to scripts/generate-cv.py — same layout, translated
CONTENT. The DE site links this file; the EN site links the EN file.
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

OUTPUT = "public/Fabian-Bachmayer-CV-DE.pdf"

LINK_COLOR = "#1155cc"

# ----------------------------------------------------------------------------
# CV content (German) — edit here.
# Inline markup: <b>bold</b>, <i>italic</i>, <a href="...">link</a>.
# ----------------------------------------------------------------------------
CONTENT = {
    "name": "FABIAN BACHMAYER",
    "contact": [
        ("Wien, Österreich", None),
        ("bachi.dev", "https://bachi.dev/de"),
        ("github.com/BachiDev", "https://github.com/BachiDev"),
        ("+43 699 17134810", "tel:+4369917134810"),
        ("fabian@bachi.dev", "mailto:fabian@bachi.dev"),
    ],
    "summary": (
        "Full-Stack-Entwickler mit mehrjähriger Erfahrung in Telekommunikation, "
        "freiberuflicher Kundenarbeit und KI-Training. Ich begleite alle Phasen des "
        "Softwareentwicklungszyklus, von Anforderungen und Design bis zu Deployment und Wartung."
    ),
    "experience": [
        {
            "role": "Freiberuflicher Entwickler",
            "org": "Remote",
            "dates": "2023 – heute",
            "items": [
                {
                    "text": "Full-Stack-<b>Authentifizierungssystem</b> entwickelt und die "
                    "<b>Viva-Payments-API</b> für sichere Transaktionen integriert.",
                    "stack": "Google Cloud, Firebase, Next.js, React, TypeScript, Node.js, Firestore, "
                    "Cloud Functions, Tailwind CSS",
                },
                {
                    "text": "Interaktiven <b>PDF-Editor</b> zur Vertragserstellung in einer Energie-SaaS-Plattform "
                    "entwickelt, mit Drag-and-Drop-Platzierung und <b>automatischer Feldbefüllung</b> "
                    "via mandantenfähiger Datenbanken.",
                    "stack": "Laravel, PHP, Livewire, Alpine.js, Tailwind CSS, FPDI, TCPDF, DOMPDF, MySQL",
                },
            ],
        },
        {
            "role": "KI-Tutor – LLM-Training (RLHF)",
            "org": "Remote",
            "dates": "2023 – heute",
            "items": [
                {
                    "text": "Am Training <b>großer Sprachmodelle</b> auf mehreren Plattformen mitgewirkt, "
                    "Modellperformance via Reinforcement Learning from Human Feedback verbessert.",
                    "stack": "Python, JavaScript, TypeScript, SQL",
                },
            ],
        },
        {
            "role": "Full-Stack-Entwickler",
            "org": "spusu / Mass Response Service GmbH, Wien",
            "dates": "2021 – 2022",
            "items": [
                {
                    "text": "Kernfunktionen des Telekom-<b>Abrechnungssystems</b> entwickelt und gewartet — "
                    "große Datenmengen und komplexe Geschäftslogik.",
                    "stack": None,
                },
                {
                    "text": "Die Zahlungsart <b>cashpresso</b> (Ratenzahlung) in den Online-Shop integriert.",
                    "stack": None,
                },
                {
                    "text": "B2B-<b>Rechnungsversandssystem</b> gebaut, das Rechnungserstellung und -versand automatisiert.",
                    "stack": None,
                },
                {
                    "text": "<b>Wechselkurs</b>verwaltungs-API integriert, angebunden an das ECB Statistical "
                    "Data Warehouse.",
                    "stack": None,
                },
            ],
            "stack": "Java EE, MySQL, Gradle, Jenkins, Swagger, JavaScript, HTML, CSS, GitLab",
        },
    ],
    "projects_note": 'Live-Demos und Quellcode unter <a href="https://bachi.dev/de/work">bachi.dev/de/work</a>',
    "projects": [
        {
            "name": "Firebase Webstore",
            "text": "Full-Stack-E-Commerce-Plattform mit Benutzerauthentifizierung und sicheren "
            "<b>Stripe-Zahlungen</b> (einmalig und Abos) via Cloud-Functions-Webhooks "
            "und Firestore-Echtzeitsync.",
            "stack": "Next.js, React, TypeScript, Firebase, Firestore, Cloud Functions, Stripe, Tailwind CSS",
        },
        {
            "name": "CRM Demo",
            "text": "Full-Stack-CRM-Anwendung mit einer <b>RESTful API</b> und PostgreSQL-Datenbank, "
            "mit sauberer Architektur und containerisiertem Deployment.",
            "stack": "Angular, Spring Boot, Java, PostgreSQL, Docker, Gradle, Swagger",
        },
        {
            "name": "Hand Gesture Control",
            "text": "Berührungslose UI-Steuerung via Echtzeit-Webcam-Erfassung — Computer Vision übersetzt "
            "Handlandmarken in Scroll- und Toggle-Befehle.",
            "stack": "TensorFlow.js, MediaPipe, Next.js, React, TypeScript, Tailwind CSS",
        },
    ],
    "skills": [
        ("Sprachen & Laufzeitumgebungen", "TypeScript, JavaScript, Node.js, Python, Java, PHP, SQL, HTML/CSS"),
        ("Frameworks", "React, Next.js, Angular, Spring Boot, Hibernate, Laravel, Tailwind CSS"),
        ("KI & ML", "LLM-Training (RLHF), TensorFlow.js, MediaPipe, Ollama, Hugging Face"),
        ("Datenbanken", "PostgreSQL, MySQL, Firestore"),
        ("Cloud & DevOps", "Google Cloud, Firebase, Supabase, Vercel, Docker, CI/CD, Git, Gradle, Maven"),
        ("Testing & Methoden", "JUnit, Mockito, Agile, Scrum, BPMN"),
        ("Gesprochene Sprachen", "Deutsch (Muttersprache), Englisch (berufliche Arbeitssprache), Spanisch (Grundlagen)"),
    ],
    "education": [
        (
            "FH Technikum Wien",
            "Wirtschaftsinformatik, 2018 – 2022",
            "Alle Lehrveranstaltungen abgeschlossen, fundierte Kenntnisse in Softwareentwicklung und Systemarchitektur.",
        ),
        (
            "TU Wien",
            "Technische Mathematik, 2017 – 2018",
            "C- und C++-Programmierung im Rahmen des Studiums.",
        ),
        (
            "Handelsakademie Donaustadt (HAK)",
            "Matura 2016",
            "Schwerpunkt Informations- und Kommunikationstechnologie.",
        ),
        (
            "Zivildienst",
            "2016 – 2017",
            "",
        ),
    ],
}

# ----------------------------------------------------------------------------
# Layout (same as generate-cv.py).
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

    story.append(Paragraph("<b>Profil</b>", s_section))
    story.append(HRFlowable(width="100%", thickness=0.75, color="black", spaceBefore=2, spaceAfter=5))
    story.append(Paragraph(CONTENT["summary"], s_body))

    story.extend(section("Berufserfahrung"))
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
                story.append(Paragraph(f"<b>Tech-Stack:</b> {item['stack']}", s_stack))
        if job.get("stack"):
            story.append(Paragraph(f"<b>Tech-Stack:</b> {job['stack']}", s_stack))

    story.extend(section("Portfolio-Projekte"))
    story.append(Paragraph(f"<i>{CONTENT['projects_note']}</i>", s_body))
    for project in CONTENT["projects"]:
        story.append(Spacer(1, 3))
        story.append(Paragraph(f"<b>{project['name']}</b> — {project['text']}", s_body))
        story.append(Paragraph(f"<b>Tech-Stack:</b> {project['stack']}", s_stack))

    story.extend(section("Kenntnisse"))
    for label, items in CONTENT["skills"]:
        story.append(Paragraph(f"<b>{label}:</b> {items}", s_skill))

    story.extend(section("Ausbildung"))
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
        title="Fabian Bachmayer – Lebenslauf",
        author="Fabian Bachmayer",
    )
    doc.build(story)
    print(f"Wrote {OUTPUT}")


if __name__ == "__main__":
    build()
