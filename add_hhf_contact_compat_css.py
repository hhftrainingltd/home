from pathlib import Path
import re


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

COMPAT = """<style id="hhf-contact-compat">
section.neon-contact {
  display: block !important;
  grid-template-columns: none !important;
  gap: 0 !important;
  align-items: initial !important;
  border-radius: 0 !important;
  box-shadow: none !important;
  color: #ffffff !important;
}

section.neon-contact a {
  text-decoration: none;
}
</style>
"""


for page in PAGES:
    path = ROOT / page
    if not path.exists():
        continue
    html = path.read_text(encoding="utf-8")
    html = re.sub(r'\n?<style id="hhf-contact-compat">.*?</style>\s*', "\n", html, flags=re.S)
    if "</head>" not in html:
        raise ValueError(f"Missing </head> in {page}")
    html = html.replace("</head>", COMPAT + "\n</head>", 1)
    path.write_text(html, encoding="utf-8")
    print(page)
