PRODUCT REQUIREMENTS DOCUMENT
Personal Developer Portfolio
Next.js • TypeScript • Modern Web • Dark Elegant Developer

1. Product Overview
   Website portfolio personal untuk memperkenalkan pemilik portfolio sebagai developer/IT professional, menampilkan kemampuan teknis, project, pengalaman, dan informasi kontak. Website harus terasa elegan, modern, profesional, dan memiliki karakter developer tanpa terlihat seperti template portfolio generik.
2. Product Vision
   “A modern personal developer portfolio that communicates technical capability, personality, and credibility.”
   Kesan utama yang ingin dibangun: seorang developer yang serius dengan pekerjaannya, modern, technically capable, tetapi tetap memiliki personality.
3. Target Users
   • Recruiter / HR — mencari identitas, skill, pengalaman/project, dan kontak.
   • Client — menilai kemampuan membuat website/software dan profesionalitas.
   • Developer / IT Community — melihat tech stack, GitHub, project, dan technical interests.
4. Design Direction
   • Tema utama: Dark Elegant Developer.
   • Warna dasar: deep black/charcoal, off-white, gray.
   • Accent: purple, cyan, atau blue secara terbatas.
   • Gunakan whitespace, typography besar, border tipis, grid, blur secukupnya, dan micro-interaction.
   • Hindari neon berlebihan, gradient berlebihan, skill bar 90–100%, dan animasi yang mengganggu.
   Contoh palette:
   • Background: #09090B
   • Surface: #111113
   • Border: #27272A
   • Primary text: #FAFAFA
   • Secondary text: #A1A1AA
   • Accent: #7C3AED
5. Information Architecture
   • / — Hero, About, Skills, Projects, Experience, Services, Contact, Footer
   • /projects — daftar semua project
   • /projects/[slug] — detail/case study project
   • /blog — opsional tahap lanjutan
   • /blog/[slug] — opsional tahap lanjutan
6. Page & Section Requirements
   6.1 Navbar
   • Sticky navigation.
   • Logo/wordmark, misalnya AJP., < AJP />, atau ajie.dev.
   • Menu: About, Projects, Experience, Contact.
   • CTA: “Let’s Talk”.
   • Background blur muncul saat scroll.
   • Mobile menggunakan hamburger menu.
   6.2 Hero
   • Menjelaskan siapa pemilik website dan fokus profesinya dalam beberapa detik.
   • Headline contoh: “Software Developer building digital experiences with code & creativity.”
   • CTA: View My Work dan Download CV.
   • Status: Available for opportunities.
   • Visual tambahan berupa terminal/developer card untuk memperkuat identitas IT.
   6.3 About
   • Profil singkat dan personal.
   • Fokus/ketertarikan di bidang teknologi.
   • Foto/profile bila tersedia.
   • Headline yang kuat, misalnya “Turning ideas into digital products.”
   6.4 Tech Stack
   • Tidak menggunakan progress bar.
   • Kelompok: Frontend, Backend, Database, Tools.
   • Contoh: Next.js, React, TypeScript, Tailwind CSS, Laravel, Node.js, MySQL, PostgreSQL, Git, GitHub, Docker, Figma, VS Code, Linux.
   6.5 Projects
   • Menampilkan 3–4 project terbaik di homepage.
   • Setiap project berisi nama, deskripsi, tech stack, screenshot/preview, Live Demo, dan GitHub.
   • Tersedia halaman detail project untuk case study.
   • Project detail mencakup problem, solution, features, technology, challenges, result, dan links.
   6.6 Experience
   • Timeline pengalaman kerja, freelance, internship, organisasi, atau project penting.
   • Jika belum memiliki pengalaman formal, section dapat diberi nama Journey / Education & Experience.
   6.7 Services
   • Opsional untuk menarik client.
   • Web Development, Backend Development, System Development, dan UI Implementation.
   6.8 GitHub / Developer Activity
   • Menampilkan GitHub profile atau kontribusi secara sederhana.
   • Fokus pada credibility, bukan memenuhi halaman dengan statistik.
   6.9 Contact
   • Headline: “Have an idea? Let’s build it.”
   • Email, GitHub, LinkedIn, dan CTA menghubungi.
   • Form kontak dapat menjadi tahap lanjutan.
   6.10 Footer
   • Logo/wordmark.
   • Social links.
   • Copyright.
   • Technology credit: Designed & built with Next.js.
7. Project Detail Page
   Route: /projects/[slug]
   • Project title & short description
   • Hero/project preview
   • Overview
   • The problem
   • The solution
   • Key features
   • Technology
   • Challenges
   • Result
   • Live Demo & GitHub
8. Recommended Tech Stack
   • Framework: Next.js
   • Language: TypeScript
   • UI: React
   • Styling: Tailwind CSS
   • Animation: Motion / Framer Motion
   • Icons: Lucide React
   • Fonts: Geist + JetBrains Mono
9. Recommended Project Architecture
   • src/app/page.tsx
   • src/app/layout.tsx
   • src/app/projects/page.tsx
   • src/app/projects/[slug]/page.tsx
   • src/components/layout/Navbar.tsx
   • src/components/layout/Footer.tsx
   • src/components/sections/Hero.tsx
   • src/components/sections/About.tsx
   • src/components/sections/Skills.tsx
   • src/components/sections/Projects.tsx
   • src/components/sections/Experience.tsx
   • src/components/sections/Services.tsx
   • src/components/sections/Contact.tsx
   • src/components/ui/
   • src/data/projects.ts
   • src/data/skills.ts
   • src/data/experience.ts
   • src/lib/
10. Responsive Requirements
    • Desktop: 1440px+
    • Laptop: 1024–1439px
    • Tablet: 768–1023px
    • Mobile: 320–767px
    • Mobile layout harus didesain ulang secara responsif, bukan sekadar mengecilkan desktop.
11. Animation & Interaction
    • Fade-in dan slide-up saat section masuk viewport.
    • Stagger animation untuk list/card.
    • Hover project: image scale ringan, border/accent berubah, arrow bergerak.
    • Smooth scrolling.
    • Hormati prefers-reduced-motion.
    • Hindari animasi berlebihan.
12. Signature Feature
    Fitur pembeda yang direkomendasikan adalah Command Palette dengan shortcut Ctrl + K.
    • Navigasi cepat ke About, Projects, Experience, GitHub, LinkedIn, dan Contact.
    • Alternatif: terminal Easter egg seperti “npm run about”.
13. Performance Requirements
    • Lighthouse Performance ≥ 90
    • SEO ≥ 90
    • Accessibility ≥ 90
    • Best Practices ≥ 90
    • Gunakan next/image dan optimasi font.
    • Gunakan Server Components jika memungkinkan.
    • Dynamic import untuk komponen berat.
    • Minimalkan client-side JavaScript.
14. SEO Requirements
    • Title: Afillah Ajie Pratama — Software Developer
    • Meta description yang menjelaskan profesi dan fokus.
    • Open Graph metadata.
    • Twitter/X card metadata.
    • Favicon.
    • Sitemap dan robots.txt.
    • Structured data jika relevan.
15. Accessibility
    • Semantic HTML.
    • Heading hierarchy yang benar.
    • Keyboard navigation.
    • Visible focus state.
    • Alt text untuk gambar.
    • Kontras warna yang memadai.
    • prefers-reduced-motion.
16. Functional Requirements
    Feature Requirement
    Navbar Navigation section, sticky, mobile menu, smooth scroll
    Hero Intro, CTA project, CV, availability status
    About Profile, description, personal information
    Skills Tech stack dan kategorisasi
    Projects Featured projects, detail project, GitHub, live demo
    Experience Timeline dan deskripsi
    Contact Email, social media, contact CTA
17. MVP Scope
    Versi pertama wajib berisi:
    • Navbar
    • Hero
    • About
    • Skills
    • Projects
    • Experience
    • Contact
    • Footer
    • Dark theme
    • Responsive design
    • Subtle animation
    • Project detail
    • GitHub links
    • CV download
    • SEO dasar
    Fitur tahap lanjutan:
    • Blog
    • GitHub API integration
    • CMS
    • Analytics
    • Command Palette
    • Easter eggs
    • Contact form backend
18. User Experience Flow
19. User masuk ke website.
20. Hero menjawab: siapa Anda dan apa yang Anda kerjakan.
21. Skills menjawab: apa yang Anda kuasai.
22. Projects menjawab: apa yang sudah Anda buat.
23. Experience/GitHub membangun credibility.
24. Contact memberikan jalur komunikasi.
25. Content Requirements
    • Nama lengkap: Afillah Ajie Pratama (dapat disesuaikan).
    • Professional title harus dipilih, misalnya Software Developer, Full-Stack Developer, atau Web Developer.
    • Bio singkat 2–4 kalimat.
    • Daftar skill/tech stack.
    • 3–5 project utama.
    • Pengalaman/education/journey.
    • Email dan social links.
    • CV terbaru dalam format PDF.
26. Acceptance Criteria
    • Website dapat dibuka dan digunakan dengan baik pada desktop dan mobile.
    • Visitor dapat memahami profesi dan fokus pemilik dalam 10–15 detik.
    • Semua CTA utama berfungsi.
    • Project dapat dibuka ke detail dan/atau demo/GitHub.
    • Navigation bekerja di desktop dan mobile.
    • Tidak ada layout overflow pada mobile.
    • Metadata SEO tersedia.
    • Animasi tidak mengganggu usability.
    • Performance dan accessibility memenuhi target MVP.
27. Visual Direction Summary
    Arah visual final: Dark / Minimal / Editorial / Developer. Fokus pada typography besar, whitespace, dark charcoal, accent purple/cyan secara terbatas, terminal element, clean project showcase, subtle micro-interactions, dan developer personality.
28. Next Phase
    Setelah PRD disetujui, tahap berikutnya adalah membuat sitemap/wireframe detail setiap section, menentukan design tokens (warna, typography, spacing, radius, shadow), kemudian melakukan setup project Next.js dan implementasi komponen secara bertahap.
