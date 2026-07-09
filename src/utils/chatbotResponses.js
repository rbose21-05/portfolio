import config from "../config";

const PROJECT_KEYWORDS = [
    { keys: ["asl", "gesture", "hand sign"], id: "01" },
    { keys: ["bugme", "bug me", "hackmit", "study companion"], id: "02" },
    { keys: ["face-bell", "facebell", "doorbell", "deepface"], id: "03" },
    { keys: ["ecoforecast", "eco forecast", "sustainability"], id: "04" },
    { keys: ["er room", "emergency", "wait time", "ai4all", "17e"], id: "05" },
    { keys: ["followandavoid", "follow and avoid", "robot", "legged"], id: "06" },
];

const EXPERIENCE_KEYWORDS = [
    { keys: ["tangoeye", "tango eye", "retail", "shoe"], text: "At TangoEye I built YOLOv8 models for retail analytics — 89.1% top-1 accuracy on shoe try-on detection and 90.0% mAP50 on cash counting pipelines across 4 stores." },
    { keys: ["kyrotics"], text: "At Kyrotics I developed YOLOv8 and CNN models hitting 95.4% mAP50 and 94.4% F1-score, plus end-to-end ML pipelines with Python and OpenCV." },
    { keys: ["daros", "robotics lab"], text: "At DARoS Lab I'm researching human-following and obstacle-avoidance for legged robots, building SURREAL/Blender synthetic data pipelines and reviewing 20+ embodied AI papers." },
    { keys: ["pit", "public interest", "database", "assistant"], text: "At PIT@UMass I'm an Undergraduate Assistant — I design and maintain a database tracking PIT students and fellows, and built Python pipelines to analyze 30,000+ academic records." },
    { keys: ["independent study", "math pathway", "computational thinking", "ct"], text: "At PIT@UMass I also do independent study research — analyzing registration data to study math & quantitative reasoning pathways among English and History majors, and how mathematical thinking relates to computational thinking." },
    { keys: ["si leader", "physics", "phy 151"], text: "I'm an SI Leader for PHY 151 at UMass, teaching 200+ students and preparing exam review materials." },
];

export function getBotResponse(input) {
    const q = input.toLowerCase().trim();

    if (!q) return null;

    if (q.includes("tour") || q === "give me a tour!")
        return "__TOUR__";

    if (q.includes("resume") || q.includes("cv"))
        return "Download my resume from the home page — hit the Resume button next to Let's Connect!";

    if (q.includes("contact") || q.includes("email") || q.includes("reach"))
        return `Reach me at ${config.contact.email}, ${config.contact.phone}, or via LinkedIn/GitHub in the Contact section!`;

    if (q.includes("skill") || q.includes("tech stack") || q.includes("python") || q.includes("yolo"))
        return "My stack includes Python, YOLOv8, OpenCV, MediaPipe, React, Flask, scikit-learn, and more — check the Skills section for the full list!";

    if (q.includes("umass") || q.includes("gpa") || q.includes("honors"))
        return `I'm at UMass Amherst Commonwealth Honors College — B.S. in CS & Math, GPA 4.0, graduating May 2028.`;

    if (q.includes("interest") || q.includes("about you") || q.includes("who are you"))
        return config.home.whoIAm.paragraphs.join(" ");

    if (q.includes("project") || q.includes("built") || q.includes("github"))
        return "I have 6 projects: ASL Gesture Recognition, BugME (HackMIT), FACE-BELL, EcoForecast, ER Room Predictor, and FollowAndAvoid. Ask me about any one!";

    if (q.includes("experience") || q.includes("intern") || q.includes("work"))
        return "I've interned at TangoEye and Kyrotics (computer vision), research at DARoS Lab, and at PIT@UMass I'm an undergraduate assistant (databases & data pipelines) plus independent study researcher. I'm also an SI Leader for physics. Ask about any role!";

    for (const { keys, id } of PROJECT_KEYWORDS) {
        if (keys.some((k) => q.includes(k))) {
            const project = config.projects.find((p) => p.number === id);
            if (project?.chatbotSummary) return project.chatbotSummary;
        }
    }

    for (const { keys, text } of EXPERIENCE_KEYWORDS) {
        if (keys.some((k) => q.includes(k))) return text;
    }

    if (RESPONSES_EXACT[q]) return RESPONSES_EXACT[q];

    return null;
}

const RESPONSES_EXACT = {
    "give me a tour!": "__TOUR__",
    "what are your interests?":
        "I build perception systems for robots and retail — computer vision, ML pipelines, and full-stack apps. From YOLOv8 at TangoEye to embodied AI research at DARoS Lab!",
    "show me your projects.":
        "6 projects on GitHub — ask me about ASL, BugME, FACE-BELL, EcoForecast, ER Room Predictor, or FollowAndAvoid for details!",
    "tell me about umass.":
        "UMass Amherst · Commonwealth Honors College · CS & Mathematics · GPA 4.0 · Class of 2028. Go Minutemen!",
};
