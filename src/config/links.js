/**
 * IBVAP HUB — Centralized Configuration File
 * 
 * Update any external URL here without touching UI components.
 * When real URLs become available, replace the placeholder strings below.
 */

export const PROJECT_LINKS = {
  // Prototype & Demonstration URLs (Update when hosted)
  prototype: "PROTOTYPE_URL", // Placeholder for interactive live prototype
  demo: "DEMO_VIDEO_URL",       // Placeholder for recorded video demonstration
  ppt: "PPT_URL",               // Placeholder for SIH Presentation Deck

  // Technical Documentation
  techDocs: "https://docs.google.com/document/d/1IRosXTXcHtz3RtRidRpmti8PR-W_lJ7Y/edit?rtpof=true&sd=true",

  // Source Code Repository
  github: "https://github.com/akashkumar-1808/IBVAP_SIH_2026",

  // Problem Research Sources
  research: {
    mha2016_17: "https://www.mha.gov.in/sites/default/files/AnnualReport_16_17.pdf",
    mha2023: "https://www.mha.gov.in/sites/default/files/AnnualreportEnglish_04102023_0.pdf",
    mha2024_25: "https://www.mha.gov.in/sites/default/files/AnnualReport_27122024.pdf",
    bprd: "https://bprd.nic.in/uploads/pdf/Integrated%20Border%20Management%20and%20National%20Security.pdf",
    mhaDivision1: "https://www.mha.gov.in/en/divisionofmha/border-management-i-division",
    lokSabha: "https://www.mha.gov.in/MHA1/Par2017/pdfs/par2015-pdfs/ls-240215/4.pdf",
    idsaCibms: "https://idsa.in/publisher/issuebrief/comprehensive-integrated-border-management-system-issues-and-challenges",
    cenjows: "https://cenjows.in/wp-content/uploads/2026/01/6.-Challenges-to-Indias-Land-Border-Management-A-Call-for-an-all-of-Government-Approach-By-Maj-Gen-Alok-Deb-Retd.pdf",
    boldQit: "https://www.pib.gov.in/Pressreleaseshare.aspx?PRID=1567263&reg=3&lang=23",
  },

  // Technical Foundation Papers
  technical: {
    yolov7Paper: "https://www.researchgate.net/publication/378537783_Digital_Border_Surveillance_System_Towards_Illegal_Migration_and_Trafficking_Free_Borders/references",
    falseAlarmPaper: "https://radsecurity.com/articles/addressing-false-alarm-fatigue-in-modern-security-operations"
  },

  // Ideation & Background Sources
  ideation: {
    smartFence: "https://modeldiplomat.com/learn/glossary/smart-fence-project",
    myanmarBorder: "https://www.ijltemas.in/submission/online/article/view/1991/1482"
  }
};

/**
 * Helper to determine if a given URL is a placeholder or an active web link
 */
export const isPlaceholderUrl = (url) => {
  if (!url) return true;
  return url.toUpperCase().includes("_URL") || !url.startsWith("http");
};
