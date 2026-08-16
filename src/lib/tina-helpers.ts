import {
  personalInfo as defaultPersonalInfo,
  skillsData as defaultSkillsData,
  toolchainGroups as defaultToolchains,
  projectsData as defaultProjectsData,
  experienceData as defaultExperienceData,
} from "@/data/portfolioData";
import { Project, SkillItem, ExperienceItem } from "@/types/portfolio";

/**
 * Helper to fetch Personal Info with fallback to static portfolioData
 */
export async function getPersonalInfo() {
  try {
    const client = (await import("../../tina/__generated__/client")).default;
    const res = await client.queries.personal({ relativePath: "personal.json" });
    if (res?.data?.personal) {
      return res.data.personal as typeof defaultPersonalInfo;
    }
  } catch {
    // Tina offline or fallback
  }
  return defaultPersonalInfo;
}

/**
 * Helper to fetch Skills & Toolchains with fallback
 */
export async function getSkillsData(): Promise<{
  skills: SkillItem[];
  toolchains: typeof defaultToolchains;
}> {
  try {
    const client = (await import("../../tina/__generated__/client")).default;
    const res = await client.queries.skills({ relativePath: "skills.json" });
    if (res?.data?.skills) {
      const skills = (res.data.skills.skills || []) as SkillItem[];
      const toolchains = (res.data.skills.toolchains || []) as typeof defaultToolchains;
      return {
        skills: skills.length ? skills : defaultSkillsData,
        toolchains: toolchains.length ? toolchains : defaultToolchains,
      };
    }
  } catch {
    // Tina offline or fallback
  }
  return { skills: defaultSkillsData, toolchains: defaultToolchains };
}

/**
 * Helper to fetch Projects with fallback to static portfolioData
 */
export async function getProjects(): Promise<Project[]> {
  try {
    const client = (await import("../../tina/__generated__/client")).default;
    const res = await client.queries.projectConnection();
    
    if (res?.data?.projectConnection?.edges?.length) {
      return res.data.projectConnection.edges.map((edge: any) => {
        const node = edge.node;
        return {
          id: node._sys?.filename || "project",
          title: {
            vi: node.title?.vi || "",
            en: node.title?.en || "",
          },
          description: {
            vi: node.description?.vi || "",
            en: node.description?.en || "",
          },
          category: node.category || "enterprise",
          projectType: node.projectType || "enterprise",
          status: node.status ? { vi: node.status.vi || "", en: node.status.en || "" } : undefined,
          company: node.company || "",
          image: node.image || "",
          tags: node.tags || [],
          githubUrl: node.githubUrl || undefined,
          demoUrl: node.demoUrl || undefined,
          featured: Boolean(node.featured),
          highlights: {
            vi: node.highlights?.vi || [],
            en: node.highlights?.en || [],
          },
        };
      });
    }
  } catch {
    // Fallback
  }

  return defaultProjectsData;
}

/**
 * Helper to fetch Experiences with fallback to static portfolioData
 */
export async function getExperiences(): Promise<ExperienceItem[]> {
  try {
    const client = (await import("../../tina/__generated__/client")).default;
    const res = await client.queries.experienceConnection();

    if (res?.data?.experienceConnection?.edges?.length) {
      return res.data.experienceConnection.edges.map((edge: any) => {
        const node = edge.node;
        return {
          id: node._sys?.filename || "exp",
          company: node.company || "",
          role: {
            vi: node.role?.vi || "",
            en: node.role?.en || "",
          },
          period: {
            vi: node.period?.vi || "",
            en: node.period?.en || "",
          },
          duration: {
            vi: node.duration?.vi || "",
            en: node.duration?.en || "",
          },
          employmentType: {
            vi: node.employmentType?.vi || "",
            en: node.employmentType?.en || "",
          },
          workplaceType: {
            vi: node.workplaceType?.vi || "",
            en: node.workplaceType?.en || "",
          },
          description: {
            vi: node.description?.vi || "",
            en: node.description?.en || "",
          },
          skills: node.skills || [],
        };
      });
    }
  } catch {
    // Fallback
  }

  return defaultExperienceData;
}
