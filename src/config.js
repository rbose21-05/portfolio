export default {
    siteTitle: "Rupsa Bose | Portfolio",
    tagline: "Computer Science & Mathematics · UMass Amherst",
    meta: {
        description:
            "Rupsa Bose — Computer Vision & ML student at UMass Amherst. Building perception systems for robots and retail with YOLOv8, OpenCV, and full-stack apps.",
        author: "Rupsa Bose",
        keywords:
            "Rupsa Bose, computer vision, machine learning, YOLOv8, OpenCV, UMass Amherst, portfolio, python, react",
    },
    social: {
        github: "https://github.com/rbose21-05",
        linkedin: "https://www.linkedin.com/in/rupsa-bose-rb211005/",
        email: "mailto:rupsabose2110@gmail.com",
        abbreviatedName: "RB",
    },
    theme: {
        backgroundLight: "#f2ebe0",
        backgroundDark: "#09090b",
        sectionLight: "#ffffff",
        sectionDark: "#18181b",
        lineColor: "rgba(99, 102, 241, 0.25)",
        particleColor: "rgba(99, 102, 241, 0.6)",
        strokeStyle: `rgba(99, 102, 241, `,
        shadowColor: "rgba(124, 58, 237, 0.5)",
        lineColorDark: "rgba(167, 139, 250, 0.25)",
        particleColorDark: "rgba(167, 139, 250, 0.7)",
        strokeStyleDark: `rgba(167, 139, 250, `,
        shadowColorDark: "rgba(167, 139, 250, 0.6)",
    },
    openGraph: {
        image: "/portfolio/favicon.svg",
        url: "https://rbose21-05.github.io/portfolio/",
    },
    home: {
        firstName: "RUPSA",
        lastName: "BOSE",
        school: "UMass Amherst · Commonwealth Honors College",
        tagline:
            "I build perception systems for robots & retail.",
        currently: [
            "CV Intern · TangoEye",
            "CV Research · DARoS Lab",
            "Undergraduate Assistant · PIT@UMass",
            "Research · PIT@UMass",
            "SI Leader · PHY 151",
        ],
        subHeading:
            "B.S. Computer Science & Mathematics · GPA 4.0 · May 2028",
        whoIAm: {
            paragraphs: [
                "I'm a student and developer passionate about computer vision, AI, and full-stack engineering. I enjoy building intelligent systems that bridge research and real-world applications.",
                "Currently, I'm working on robot perception, computer vision for retail automation, and machine learning research, while constantly exploring new technologies and challenging problems.",
            ],
        },
        buttonLabel: "Let's Connect",
        typewriter: [
            "Computer Vision @ UMass",
            "YOLOv8 & OpenCV Developer",
            "ML for Healthcare & Robotics",
            "Full-Stack Builder",
            "Honors College · GPA 4.0",
        ],
    },
    education: {
        school: "University of Massachusetts Amherst",
        degree: "B.S. in Computer Science and Mathematics",
        honors: "Commonwealth Honors College",
        graduation: "Expected May 2028",
        gpa: "Major GPA: 4.0",
        coursework: [
            "Data Structures and Algorithms",
            "Discrete Mathematics",
            "OOP",
            "Probability & Statistics",
            "Calculus III",
            "Linear Algebra",
        ],
    },
    experiences: [
        {
            title: "Computer Vision Intern",
            company_name: "TangoEye",
            initials: "TE",
            iconBg: "#0f172a",
            date: "June 2026 – August 2026",
            points: [
                "Developed YOLOv8 shoe try-on classifier across 4 retail stores, achieving 89.1% test top-1 accuracy on 4,035 annotated person crops from 19,000+ CCTV frames.",
                "Built cash counting detection pipeline with counter zone segmentation and custom YOLO detectors, reaching 90.0% mAP50 and 99.5% precision on hand-labeled surveillance data.",
                "Curated multi-store retail datasets, designed LabelMe annotation workflows, and deployed end-to-end inference pipelines for real-time store analytics.",
            ],
        },
        {
            title: "Undergraduate Assistant",
            company_name: "PIT@UMass",
            initials: "PIT",
            iconBg: "#312e81",
            date: "Fall 2025 – Present",
            points: [
                "Designing and maintaining a dynamic database to track PIT-affiliated students, fellows, and program participation — structured for querying cohorts and longitudinal research over time.",
                "Built Python data pipelines to ingest, clean, and analyze 30,000+ academic records, surfacing trends in admissions, enrollment, and student pathways through visualizations.",
                "Developed and evaluated LLM-based systems to classify university courses into Public Interest Technology categories using prompt engineering.",
                "Supporting research paper development from course classification and institutional data analysis.",
            ],
        },
        {
            title: "Independent Study Researcher",
            company_name: "PIT@UMass",
            initials: "PIT",
            iconBg: "#312e81",
            date: "Spring 2026 – Present",
            points: [
                "Analyzing UMass Amherst registration datasets to identify mathematics and quantitative reasoning pathways among English and History majors.",
                "Applying computational and statistical analysis methods to study relationships between mathematical thinking and computational thinking (CT).",
            ],
        },
        {
            title: "Undergraduate Research Assistant",
            company_name: "DARoS Lab, UMass Amherst",
            icon: "/icons/umass.jpg",
            iconBg: "#f1f5f9",
            date: "Spring 2026 – Present",
            points: [
                "Researching human-following and obstacle-avoidance systems for legged robots using multimodal perception.",
                "Developing SURREAL-based simulation pipeline using SMPL human meshes and Blender rendering to generate synthetic RGB training data for robotic perception.",
                "Reviewed and synthesized core methodologies from 20+ embodied AI and robotics papers including TrackVLA, CEAR, and MM-Nav.",
            ],
        },
        {
            title: "SI Leader – PHY 151",
            company_name: "University of Massachusetts Amherst",
            icon: "/icons/umass.jpg",
            iconBg: "#f1f5f9",
            date: "August 2025 – Present",
            points: [
                "Led supplemental instruction sessions for PHY 151, teaching core physics concepts to 200+ students.",
                "Prepared worksheets and exam review materials, and helped students prepare for midterms and finals.",
                "Coordinated with professors to align session content with course objectives and student needs.",
            ],
        },
        {
            title: "Computer Vision Intern",
            company_name: "Kyrotics",
            initials: "KY",
            iconBg: "#1e293b",
            date: "Summer 2025",
            points: [
                "Developed YOLOv8 and CNN-based computer vision models for real-time object detection and instance segmentation.",
                "Improved model performance to 95.4% mAP50 and 94.4% F1-score through dataset curation, annotation, and hyperparameter tuning.",
                "Built end-to-end ML pipelines for preprocessing, validation, training, and deployment using Python and OpenCV.",
            ],
        },
    ],
    projects: [
        {
            number: "01",
            title: "ASL Hand Gesture Recognition System",
            icon: "hand",
            color: "#c8ddb8",
            metric: "Real-time inference · Multiple ASL sign classes",
            github: "https://github.com/rbose21-05/ASL-Hand-Gesture-Recognition",
            live: null,
            tags: ["Python", "OpenCV", "MediaPipe", "MobileNetV2"],
            text1:
                "Built a real-time hand gesture recognition system using Python, OpenCV, CNNs, and MediaPipe with transfer learning via MobileNetV2.",
            text2:
                "Trained and evaluated the classifier across multiple ASL sign classes, tuning the pipeline for low-latency, real-time inference from live webcam video.",
            chatbotSummary:
                "ASL Hand Gesture Recognition uses MediaPipe + MobileNetV2 for real-time ASL sign classification from webcam video. GitHub: github.com/rbose21-05/ASL-Hand-Gesture-Recognition",
        },
        {
            number: "02",
            title: "BugME – AI Study Companion",
            icon: "book",
            color: "#e8c547",
            metric: "Built at HackMIT 2025",
            github: "https://github.com/rbose21-05/BugME",
            live: null,
            tags: ["HackMIT", "Python", "OCR", "LLM"],
            text1:
                "Developed an AI-powered study platform with OCR-driven document parsing, conversational AI workflows, and Google Calendar API automation.",
            text2:
                "Built the end-to-end pipeline at HackMIT 2025, integrating document ingestion, LLM-based Q&A, and automated scheduling into a single workflow.",
            chatbotSummary:
                "BugME is an AI study companion from HackMIT 2025 — OCR document parsing, LLM Q&A, and Google Calendar automation. GitHub: github.com/rbose21-05/BugME",
        },
        {
            number: "03",
            title: "FACE-BELL – Smart Doorbell",
            icon: "bell",
            color: "#b8d4e8",
            metric: "Full-stack · DeepFace facial recognition",
            github: "https://github.com/rbose21-05/FACE-BELL",
            live: null,
            tags: ["Flask", "React", "DeepFace", "OpenCV"],
            text1:
                "Engineered a Flask and React-based smart doorbell with DeepFace facial recognition, OpenCV pipelines, and secure visitor logging.",
            text2:
                "Captures visitor faces, recognizes known faces, logs visits with timestamps, and supports new face registration through a full-stack web dashboard.",
            chatbotSummary:
                "FACE-BELL is a smart doorbell with Flask + React, DeepFace recognition, and timestamped visitor logs. GitHub: github.com/rbose21-05/FACE-BELL",
        },
        {
            number: "04",
            title: "EcoForecast",
            icon: "leaf",
            color: "#a8d4b8",
            metric: "SME sustainability ROI modeling",
            github: "https://github.com/rbose21-05/EcoForecast",
            live: null,
            tags: ["TypeScript", "Financial Modeling", "Sustainability"],
            text1:
                "Financial simulation platform for evaluating ROI and risk of sustainability investments for small and medium enterprises.",
            text2:
                "Helps businesses model the financial impact of green initiatives, comparing costs, returns, and risk profiles across sustainability scenarios.",
            chatbotSummary:
                "EcoForecast simulates ROI and risk of sustainability investments for SMEs. Built with TypeScript. GitHub: github.com/rbose21-05/EcoForecast",
        },
        {
            number: "05",
            title: "ER Room Predictor",
            icon: "pulse",
            color: "#d4c4e8",
            metric: "NHAMCS + Yale EMMLC · 3 ML models",
            research: true,
            role: "Team Member",
            github: "https://github.com/Kushagra-Aitha/17E_AI4ALL",
            live: null,
            tags: [
                "Logistic Regression",
                "Linear Regression",
                "Lasso",
                "Healthcare ML",
            ],
            text1:
                "Team research project on emergency department wait times — analyzing whether delays are driven by clinical urgency or demographic factors, using NHAMCS and Yale EMMLC datasets.",
            text2:
                "Applies logistic, linear, and Lasso regression to model admission risk and wait times, with bias mitigation strategies across patient subgroups.",
            chatbotSummary:
                "ER Room Predictor is team ML research on ED wait times using NHAMCS + Yale data. Logistic, linear, and Lasso regression to study clinical vs. demographic drivers. GitHub: github.com/Kushagra-Aitha/17E_AI4ALL",
        },
        {
            number: "06",
            title: "FollowAndAvoid",
            icon: "robot",
            color: "#c4d4e8",
            metric: "Legged robot · Multimodal perception",
            role: "Contributor",
            github: "https://github.com/namerror/FollowAndAvoid",
            live: null,
            tags: ["Robotics", "Computer Vision", "Navigation"],
            text1:
                "Contributor to a human-following and obstacle-avoidance system for legged robots using multimodal perception.",
            text2:
                "Worked on perception and navigation pipelines enabling robots to track humans while safely avoiding obstacles in dynamic environments.",
            chatbotSummary:
                "FollowAndAvoid is a legged-robot human-following & obstacle-avoidance system. I contributed to the perception/navigation pipeline. GitHub: github.com/namerror/FollowAndAvoid",
        },
    ],
    techStackPage: {
        heading: "Tech Stack",
        subtitle:
            "Languages, frameworks, and tools across CV, ML research, and full-stack work.",
        statusLines: [
            "currently: labeling cctv frames",
            "debug tip: check labels before blaming the model",
            "status: waiting on blender render...",
            "pip install confidence",
        ],
        categories: [
            {
                label: "Languages",
                items: [
                    "Python",
                    "Java",
                    "C",
                    "JavaScript",
                    "TypeScript",
                    "SQL",
                ],
            },
            {
                label: "Frameworks & Libraries",
                items: [
                    "React",
                    "Flask",
                    "Tailwind CSS",
                    "Vite",
                    "Pandas",
                    "NumPy",
                    "scikit-learn",
                    "Matplotlib",
                    "TensorFlow",
                    "YOLOv8",
                    "OpenCV",
                    "MediaPipe",
                ],
            },
            {
                label: "Machine Learning & AI",
                items: [
                    "CNN",
                    "MobileNetV2",
                    "Transfer Learning",
                    "LLMs",
                    "Prompt Engineering",
                    "Instance Segmentation",
                ],
            },
            {
                label: "Tools",
                items: [
                    "Git",
                    "GitHub",
                    "Roboflow",
                    "Firebase",
                    "Jupyter Notebook",
                    "DeepFace",
                    "Blender",
                    "LabelMe",
                    "OCR",
                ],
            },
            {
                label: "Databases",
                items: ["PostgreSQL", "MongoDB"],
            },
        ],
    },
    contact: {
        heading: "Let's Connect",
        description:
            "I'm always open to discussing new projects, research opportunities, or collaborations. Feel free to reach out!",
        email: "rupsabose2110@gmail.com",
        phone: "+1 (774) 257-1671",
        linkedin: "https://www.linkedin.com/in/rupsa-bose-rb211005/",
        github: "https://github.com/rbose21-05",
        name: "Rupsa Bose",
    },
};
