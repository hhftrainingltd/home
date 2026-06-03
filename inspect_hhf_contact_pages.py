from pathlib import Path


ROOT = Path(r"D:\DOCUMENTS\New project")
PAGES = [
    "hhftraining_premium_v3.html",
    "hhfai.html",
    "ai-training-education.html",
    "ai-training-business.html",
    "cyber-safety-training.html",
    "cpd-professional-development.html",
    "assessment-design-resources.html",
    "quality-assurance-consultancy.html",
    "ai-readiness-digital-transformation.html",
    "ai-guide-for-teachers.html",
    "ai-guide-for-businesses.html",
    "cyber-safety-guide.html",
    "assessment-design-guide.html",
    "ai-readiness-checklist.html",
]


for page in PAGES:
    path = ROOT / page
    if not path.exists():
        print(f"{page}\tmissing")
        continue
    html = path.read_text(encoding="utf-8")
    has_contact = any(token in html for token in ['id="contact"', "Ready to", "contact-panel", "neon-contact"])
    neon = "neon-contact" in html
    print(f"{page}\texists\thas_contact={has_contact}\tneon={neon}")
