from pathlib import Path
import re
import shutil


ROOT = Path(r"D:\DOCUMENTS\New project")
SOURCE = Path(r"C:\Users\PC\Desktop\hhffinal0.html")

SERVICE_PAGES = [
    "ai-training-education.html",
    "ai-training-business.html",
    "cyber-safety-training.html",
    "cpd-professional-development.html",
    "assessment-design-resources.html",
    "quality-assurance-consultancy.html",
    "ai-readiness-digital-transformation.html",
]

GUIDE_PAGES = [
    "ai-guide-for-teachers.html",
    "ai-guide-for-businesses.html",
    "cyber-safety-guide.html",
    "assessment-design-guide.html",
    "ai-readiness-checklist.html",
]


def extract_between(text, start_marker, end_marker, start_offset=0):
    start = text.index(start_marker, start_offset)
    end = text.index(end_marker, start)
    return text[start:end]


def extract_contact_assets():
    src = SOURCE.read_text(encoding="utf-8")

    contact_css = extract_between(
        src,
        "/* Neon contact redesign based on uploaded reference image */",
        "</style>",
    ).strip()

    balance_block = re.search(
        r'<style id="contact-balance-adjustments">(.*?)</style>',
        src,
        flags=re.S,
    ).group(1).strip()

    final_block = re.search(
        r'<style id="contact-final-size-refinement">(.*?)</style>',
        src,
        flags=re.S,
    ).group(1).strip()

    css = (
        '<style id="hhf-final-contact-style">\n'
        + contact_css
        + "\n\n"
        + balance_block
        + "\n\n"
        + final_block
        + "\n</style>\n"
    )

    contact_html = extract_between(
        src,
        '<section class="cta neon-contact" id="contact">',
        "\n</section>",
    ).strip()
    contact_html += "\n</section>"

    return css, contact_html


def remove_existing_final_contact_css(html):
    return re.sub(
        r'\n?<style id="hhf-final-contact-style">.*?</style>\s*',
        "\n",
        html,
        flags=re.S,
    )


def ensure_css(html, css):
    html = remove_existing_final_contact_css(html)
    if "</head>" not in html:
        raise ValueError("Missing </head>")
    return html.replace("</head>", css + "\n</head>", 1)


def replace_or_insert_contact(html, contact_html, insert_only=False):
    old_contact = re.compile(
        r'\s*<section class="cta" id="contact">.*?</section>\s*',
        flags=re.S,
    )
    old_neon = re.compile(
        r'\s*<section class="cta neon-contact" id="contact">.*?</section>\s*',
        flags=re.S,
    )

    if old_neon.search(html):
        return old_neon.sub("\n" + contact_html + "\n", html, count=1)

    if old_contact.search(html):
        return old_contact.sub("\n" + contact_html + "\n", html, count=1)

    if insert_only or "</main>" in html:
        return html.replace("</main>", contact_html + "\n</main>", 1)

    raise ValueError("Could not replace or insert contact section")


def patch_page(path, css, contact_html):
    html = path.read_text(encoding="utf-8")
    html = ensure_css(html, css)
    html = replace_or_insert_contact(html, contact_html)
    path.write_text(html, encoding="utf-8")


def main():
    css, contact_html = extract_contact_assets()

    # The uploaded desktop file is the user's newest approved main page.
    shutil.copyfile(SOURCE, ROOT / "hhftraining_premium_v3.html")
    shutil.copyfile(SOURCE, ROOT / "hhfai.html")

    patched = []
    for page in SERVICE_PAGES + GUIDE_PAGES:
        path = ROOT / page
        if path.exists():
            patch_page(path, css, contact_html)
            patched.append(page)

    for page in ["hhftraining_premium_v3.html", "hhfai.html"] + patched:
        html = (ROOT / page).read_text(encoding="utf-8")
        print(
            f"{page}\tneon={html.count('neon-contact')}\t"
            f"contact_sections={html.count('id=\"contact\"')}\t"
            f"style={html.count('hhf-final-contact-style')}"
        )


if __name__ == "__main__":
    main()
