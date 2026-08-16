// tina/config.ts
import { defineConfig } from "tinacms";
var branch = process.env.GITHUB_BRANCH || process.env.VERCEL_GIT_COMMIT_REF || process.env.HEAD || "main";
var isLocal = process.env.TINA_PUBLIC_IS_LOCAL === "true" || !process.env.NEXT_PUBLIC_TINA_CLIENT_ID;
var config_default = defineConfig({
  branch,
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID || null,
  token: process.env.TINA_TOKEN || null,
  isLocal,
  build: {
    outputFolder: "admin",
    publicFolder: "public"
  },
  media: {
    tina: {
      mediaRoot: "uploads",
      publicFolder: "public"
    }
  },
  schema: {
    collections: [
      {
        name: "personal",
        label: "Th\xF4ng Tin C\xE1 Nh\xE2n (Personal Info)",
        path: "content/global",
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false
          }
        },
        match: {
          include: "personal"
        },
        fields: [
          { type: "string", name: "name", label: "H\u1ECD v\xE0 T\xEAn (Name)", required: true },
          { type: "string", name: "nickname", label: "Nickname" },
          { type: "string", name: "handle", label: "Handle (@...)" },
          { type: "image", name: "avatar", label: "\u1EA2nh \u0111\u1EA1i di\u1EC7n (Avatar)" },
          { type: "string", name: "email", label: "Email" },
          {
            type: "object",
            name: "location",
            label: "\u0110\u1ECBa \u0111i\u1EC3m (Location)",
            fields: [
              { type: "string", name: "vi", label: "Ti\u1EBFng Vi\u1EC7t" },
              { type: "string", name: "en", label: "English" }
            ]
          },
          {
            type: "object",
            name: "level",
            label: "Tr\xECnh \u0111\u1ED9 / Level",
            fields: [
              { type: "string", name: "vi", label: "Ti\u1EBFng Vi\u1EC7t" },
              { type: "string", name: "en", label: "English" }
            ]
          },
          {
            type: "object",
            name: "roles",
            label: "Danh s\xE1ch Vai tr\xF2 (Roles Carousel)",
            fields: [
              { type: "string", name: "vi", label: "Ti\u1EBFng Vi\u1EC7t", list: true },
              { type: "string", name: "en", label: "English", list: true }
            ]
          },
          {
            type: "object",
            name: "bio",
            label: "Ti\u1EC3u s\u1EED ng\u1EAFn (Bio)",
            fields: [
              { type: "string", name: "vi", label: "Ti\u1EBFng Vi\u1EC7t", ui: { component: "textarea" } },
              { type: "string", name: "en", label: "English", ui: { component: "textarea" } }
            ]
          },
          {
            type: "object",
            name: "aboutDetailed",
            label: "Chi ti\u1EBFt Gi\u1EDBi thi\u1EC7u (About Detailed)",
            fields: [
              {
                type: "object",
                name: "vi",
                label: "N\u1ED9i dung Ti\u1EBFng Vi\u1EC7t",
                fields: [
                  { type: "string", name: "personalities", label: "Hashtags c\xE1 nh\xE2n", list: true },
                  { type: "string", name: "intro", label: "L\u1EDDi gi\u1EDBi thi\u1EC7u", ui: { component: "textarea" } },
                  { type: "string", name: "visionQuote", label: "Ch\xE2m ng\xF4n ngh\u1EC1 nghi\u1EC7p", ui: { component: "textarea" } },
                  {
                    type: "object",
                    name: "funFacts",
                    label: "Th\xF4ng s\u1ED1 / Fun Facts",
                    list: true,
                    fields: [
                      { type: "string", name: "label", label: "Nh\xE3n" },
                      { type: "string", name: "value", label: "Gi\xE1 tr\u1ECB" }
                    ]
                  },
                  {
                    type: "object",
                    name: "highlights",
                    label: "\u0110i\u1EC3m n\u1ED5i b\u1EADt",
                    list: true,
                    fields: [
                      { type: "string", name: "title", label: "Ti\xEAu \u0111\u1EC1" },
                      { type: "string", name: "desc", label: "M\xF4 t\u1EA3", ui: { component: "textarea" } }
                    ]
                  }
                ]
              },
              {
                type: "object",
                name: "en",
                label: "English Content",
                fields: [
                  { type: "string", name: "personalities", label: "Personal Hashtags", list: true },
                  { type: "string", name: "intro", label: "Intro", ui: { component: "textarea" } },
                  { type: "string", name: "visionQuote", label: "Vision Quote", ui: { component: "textarea" } },
                  {
                    type: "object",
                    name: "funFacts",
                    label: "Fun Facts",
                    list: true,
                    fields: [
                      { type: "string", name: "label", label: "Label" },
                      { type: "string", name: "value", label: "Value" }
                    ]
                  },
                  {
                    type: "object",
                    name: "highlights",
                    label: "Highlights",
                    list: true,
                    fields: [
                      { type: "string", name: "title", label: "Title" },
                      { type: "string", name: "desc", label: "Description", ui: { component: "textarea" } }
                    ]
                  }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "services",
            label: "D\u1ECBch v\u1EE5 cung c\u1EA5p (Services)",
            fields: [
              {
                type: "object",
                name: "vi",
                label: "Ti\u1EBFng Vi\u1EC7t",
                list: true,
                fields: [
                  { type: "string", name: "title", label: "Ti\xEAu \u0111\u1EC1 d\u1ECBch v\u1EE5" },
                  { type: "string", name: "desc", label: "M\xF4 t\u1EA3", ui: { component: "textarea" } }
                ]
              },
              {
                type: "object",
                name: "en",
                label: "English",
                list: true,
                fields: [
                  { type: "string", name: "title", label: "Service Title" },
                  { type: "string", name: "desc", label: "Description", ui: { component: "textarea" } }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "socials",
            label: "M\u1EA1ng x\xE3 h\u1ED9i (Social Links)",
            fields: [
              { type: "string", name: "github", label: "GitHub URL" },
              { type: "string", name: "email", label: "Email Link (mailto:...)" }
            ]
          }
        ]
      },
      {
        name: "skills",
        label: "K\u1EF9 N\u0103ng & C\xF4ng C\u1EE5 (Skills & Tools)",
        path: "content/global",
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false
          }
        },
        match: {
          include: "skills"
        },
        fields: [
          {
            type: "object",
            name: "skills",
            label: "Danh s\xE1ch K\u1EF9 n\u0103ng (Skills List)",
            list: true,
            ui: {
              itemProps: (item) => ({ label: `${item?.name || "Skill"} (${item?.level || 0}%)` })
            },
            fields: [
              { type: "string", name: "name", label: "T\xEAn k\u1EF9 n\u0103ng", required: true },
              { type: "number", name: "level", label: "M\u1EE9c \u0111\u1ED9 (%) (0-100)" },
              {
                type: "string",
                name: "category",
                label: "Danh m\u1EE5c",
                options: [
                  { label: "Frontend", value: "frontend" },
                  { label: "Backend", value: "backend" },
                  { label: "Database", value: "database" },
                  { label: "Tools & DevOps", value: "tools" }
                ]
              },
              { type: "string", name: "icon", label: "Icon identifier" }
            ]
          },
          {
            type: "object",
            name: "toolchains",
            label: "Nh\xF3m C\xF4ng c\u1EE5 (Toolchain Groups)",
            list: true,
            fields: [
              {
                type: "object",
                name: "category",
                label: "T\xEAn nh\xF3m",
                fields: [
                  { type: "string", name: "vi", label: "Ti\u1EBFng Vi\u1EC7t" },
                  { type: "string", name: "en", label: "English" }
                ]
              },
              { type: "string", name: "items", label: "C\xE1c c\xF4ng c\u1EE5", list: true }
            ]
          }
        ]
      },
      {
        name: "project",
        label: "D\u1EF1 \xC1n (Projects)",
        path: "content/projects",
        format: "json",
        ui: {
          router: () => `/projects`,
          itemProps: (item) => ({ label: item?.title?.vi || item?.title?.en || "D\u1EF1 \xE1n" })
        },
        fields: [
          {
            type: "object",
            name: "title",
            label: "Ti\xEAu \u0111\u1EC1 (Title)",
            fields: [
              { type: "string", name: "vi", label: "Ti\u1EBFng Vi\u1EC7t", required: true },
              { type: "string", name: "en", label: "English", required: true }
            ]
          },
          {
            type: "object",
            name: "description",
            label: "M\xF4 t\u1EA3 ng\u1EAFn (Description)",
            fields: [
              { type: "string", name: "vi", label: "Ti\u1EBFng Vi\u1EC7t", ui: { component: "textarea" } },
              { type: "string", name: "en", label: "English", ui: { component: "textarea" } }
            ]
          },
          {
            type: "string",
            name: "category",
            label: "Category",
            options: [
              { label: "Enterprise", value: "enterprise" },
              { label: "Frontend", value: "frontend" },
              { label: "Fullstack", value: "fullstack" },
              { label: "Web Apps", value: "webapps" }
            ]
          },
          {
            type: "string",
            name: "projectType",
            label: "Project Type",
            options: [
              { label: "Enterprise", value: "enterprise" },
              { label: "Personal", value: "personal" }
            ]
          },
          {
            type: "object",
            name: "status",
            label: "Tr\u1EA1ng th\xE1i d\u1EF1 \xE1n (Status)",
            fields: [
              { type: "string", name: "vi", label: "Ti\u1EBFng Vi\u1EC7t" },
              { type: "string", name: "en", label: "English" }
            ]
          },
          {
            type: "string",
            name: "company",
            label: "C\xF4ng ty / Kh\xE1ch h\xE0ng"
          },
          {
            type: "image",
            name: "image",
            label: "\u1EA2nh \u0111\u1EA1i di\u1EC7n (Image)"
          },
          {
            type: "string",
            name: "tags",
            label: "C\xF4ng ngh\u1EC7 (Tags)",
            list: true
          },
          {
            type: "string",
            name: "githubUrl",
            label: "GitHub Link"
          },
          {
            type: "string",
            name: "demoUrl",
            label: "Live Demo Link"
          },
          {
            type: "boolean",
            name: "featured",
            label: "D\u1EF1 \xE1n n\u1ED5i b\u1EADt (Featured)"
          },
          {
            type: "object",
            name: "highlights",
            label: "\u0110i\u1EC3m n\u1ED5i b\u1EADt (Highlights)",
            fields: [
              { type: "string", name: "vi", label: "Ti\u1EBFng Vi\u1EC7t", list: true },
              { type: "string", name: "en", label: "English", list: true }
            ]
          }
        ]
      },
      {
        name: "experience",
        label: "Kinh Nghi\u1EC7m L\xE0m Vi\u1EC7c (Experience)",
        path: "content/experiences",
        format: "json",
        ui: {
          itemProps: (item) => ({ label: `${item?.company || "C\xF4ng ty"} - ${item?.role?.vi || item?.role?.en || "V\u1ECB tr\xED"}` })
        },
        fields: [
          { type: "string", name: "company", label: "T\xEAn c\xF4ng ty", required: true },
          {
            type: "object",
            name: "role",
            label: "V\u1ECB tr\xED / Ch\u1EE9c danh",
            fields: [
              { type: "string", name: "vi", label: "Ti\u1EBFng Vi\u1EC7t", required: true },
              { type: "string", name: "en", label: "English", required: true }
            ]
          },
          {
            type: "object",
            name: "period",
            label: "Th\u1EDDi gian l\xE0m vi\u1EC7c (Period)",
            fields: [
              { type: "string", name: "vi", label: "Ti\u1EBFng Vi\u1EC7t" },
              { type: "string", name: "en", label: "English" }
            ]
          },
          {
            type: "object",
            name: "duration",
            label: "T\u1ED5ng th\u1EDDi gian (Duration)",
            fields: [
              { type: "string", name: "vi", label: "Ti\u1EBFng Vi\u1EC7t" },
              { type: "string", name: "en", label: "English" }
            ]
          },
          {
            type: "object",
            name: "employmentType",
            label: "H\xECnh th\u1EE9c l\xE0m vi\u1EC7c (Employment Type)",
            fields: [
              { type: "string", name: "vi", label: "Ti\u1EBFng Vi\u1EC7t" },
              { type: "string", name: "en", label: "English" }
            ]
          },
          {
            type: "object",
            name: "workplaceType",
            label: "\u0110\u1ECBa \u0111i\u1EC3m l\xE0m vi\u1EC7c (Workplace Type)",
            fields: [
              { type: "string", name: "vi", label: "Ti\u1EBFng Vi\u1EC7t" },
              { type: "string", name: "en", label: "English" }
            ]
          },
          {
            type: "object",
            name: "description",
            label: "M\xF4 t\u1EA3 c\xF4ng vi\u1EC7c (Description)",
            fields: [
              { type: "string", name: "vi", label: "Ti\u1EBFng Vi\u1EC7t", ui: { component: "textarea" } },
              { type: "string", name: "en", label: "English", ui: { component: "textarea" } }
            ]
          },
          {
            type: "string",
            name: "skills",
            label: "K\u1EF9 n\u0103ng s\u1EED d\u1EE5ng (Skills)",
            list: true
          }
        ]
      },
      {
        name: "post",
        label: "B\xE0i Vi\u1EBFt (Posts)",
        path: "content/posts",
        format: "mdx",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Ti\xEAu \u0111\u1EC1",
            isTitle: true,
            required: true
          },
          {
            type: "datetime",
            name: "date",
            label: "Ng\xE0y \u0111\u0103ng"
          },
          {
            type: "string",
            name: "description",
            label: "M\xF4 t\u1EA3 ng\u1EAFn"
          },
          {
            type: "image",
            name: "coverImage",
            label: "\u1EA2nh b\xECa"
          },
          {
            type: "string",
            name: "tags",
            label: "Tags",
            list: true
          },
          {
            type: "rich-text",
            name: "body",
            label: "N\u1ED9i dung",
            isBody: true
          }
        ]
      }
    ]
  }
});
export {
  config_default as default
};
