import { defineConfig } from "tinacms";

const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  process.env.NEXT_PUBLIC_TINA_BRANCH ||
  "main";

export default defineConfig({
  branch,
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID || null,
  token: process.env.TINA_TOKEN || null,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "uploads",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        name: "personal",
        label: "Thông Tin Cá Nhân (Personal Info)",
        path: "content/global",
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "personal",
        },
        fields: [
          { type: "string", name: "name", label: "Họ và Tên (Name)", required: true },
          { type: "string", name: "nickname", label: "Nickname" },
          { type: "string", name: "handle", label: "Handle (@...)" },
          { type: "image", name: "avatar", label: "Ảnh đại diện (Avatar)" },
          { type: "string", name: "email", label: "Email" },
          {
            type: "object",
            name: "location",
            label: "Địa điểm (Location)",
            fields: [
              { type: "string", name: "vi", label: "Tiếng Việt" },
              { type: "string", name: "en", label: "English" },
            ],
          },
          {
            type: "object",
            name: "level",
            label: "Trình độ / Level",
            fields: [
              { type: "string", name: "vi", label: "Tiếng Việt" },
              { type: "string", name: "en", label: "English" },
            ],
          },
          {
            type: "object",
            name: "roles",
            label: "Danh sách Vai trò (Roles Carousel)",
            fields: [
              { type: "string", name: "vi", label: "Tiếng Việt", list: true },
              { type: "string", name: "en", label: "English", list: true },
            ],
          },
          {
            type: "object",
            name: "bio",
            label: "Tiểu sử ngắn (Bio)",
            fields: [
              { type: "string", name: "vi", label: "Tiếng Việt", ui: { component: "textarea" } },
              { type: "string", name: "en", label: "English", ui: { component: "textarea" } },
            ],
          },
          {
            type: "object",
            name: "aboutDetailed",
            label: "Chi tiết Giới thiệu (About Detailed)",
            fields: [
              {
                type: "object",
                name: "vi",
                label: "Nội dung Tiếng Việt",
                fields: [
                  { type: "string", name: "personalities", label: "Hashtags cá nhân", list: true },
                  { type: "string", name: "intro", label: "Lời giới thiệu", ui: { component: "textarea" } },
                  { type: "string", name: "visionQuote", label: "Châm ngôn nghề nghiệp", ui: { component: "textarea" } },
                  {
                    type: "object",
                    name: "funFacts",
                    label: "Thông số / Fun Facts",
                    list: true,
                    fields: [
                      { type: "string", name: "label", label: "Nhãn" },
                      { type: "string", name: "value", label: "Giá trị" },
                    ],
                  },
                  {
                    type: "object",
                    name: "highlights",
                    label: "Điểm nổi bật",
                    list: true,
                    fields: [
                      { type: "string", name: "title", label: "Tiêu đề" },
                      { type: "string", name: "desc", label: "Mô tả", ui: { component: "textarea" } },
                    ],
                  },
                ],
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
                      { type: "string", name: "value", label: "Value" },
                    ],
                  },
                  {
                    type: "object",
                    name: "highlights",
                    label: "Highlights",
                    list: true,
                    fields: [
                      { type: "string", name: "title", label: "Title" },
                      { type: "string", name: "desc", label: "Description", ui: { component: "textarea" } },
                    ],
                  },
                ],
              },
            ],
          },
          {
            type: "object",
            name: "services",
            label: "Dịch vụ cung cấp (Services)",
            fields: [
              {
                type: "object",
                name: "vi",
                label: "Tiếng Việt",
                list: true,
                fields: [
                  { type: "string", name: "title", label: "Tiêu đề dịch vụ" },
                  { type: "string", name: "desc", label: "Mô tả", ui: { component: "textarea" } },
                ],
              },
              {
                type: "object",
                name: "en",
                label: "English",
                list: true,
                fields: [
                  { type: "string", name: "title", label: "Service Title" },
                  { type: "string", name: "desc", label: "Description", ui: { component: "textarea" } },
                ],
              },
            ],
          },
          {
            type: "object",
            name: "socials",
            label: "Mạng xã hội (Social Links)",
            fields: [
              { type: "string", name: "github", label: "GitHub URL" },
              { type: "string", name: "email", label: "Email Link (mailto:...)" },
            ],
          },
        ],
      },
      {
        name: "skills",
        label: "Kỹ Năng & Công Cụ (Skills & Tools)",
        path: "content/global",
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "skills",
        },
        fields: [
          {
            type: "object",
            name: "skills",
            label: "Danh sách Kỹ năng (Skills List)",
            list: true,
            ui: {
              itemProps: (item: any) => ({ label: `${item?.name || "Skill"} (${item?.level || 0}%)` }),
            },
            fields: [
              { type: "string", name: "name", label: "Tên kỹ năng", required: true },
              { type: "number", name: "level", label: "Mức độ (%) (0-100)" },
              {
                type: "string",
                name: "category",
                label: "Danh mục",
                options: [
                  { label: "Frontend", value: "frontend" },
                  { label: "Backend", value: "backend" },
                  { label: "Database", value: "database" },
                  { label: "Tools & DevOps", value: "tools" },
                ],
              },
              { type: "string", name: "icon", label: "Icon identifier" },
            ],
          },
          {
            type: "object",
            name: "toolchains",
            label: "Nhóm Công cụ (Toolchain Groups)",
            list: true,
            fields: [
              {
                type: "object",
                name: "category",
                label: "Tên nhóm",
                fields: [
                  { type: "string", name: "vi", label: "Tiếng Việt" },
                  { type: "string", name: "en", label: "English" },
                ],
              },
              { type: "string", name: "items", label: "Các công cụ", list: true },
            ],
          },
        ],
      },
      {
        name: "project",
        label: "Dự Án (Projects)",
        path: "content/projects",
        format: "json",
        ui: {
          router: () => `/projects`,
        },
        fields: [
          {
            type: "object",
            name: "title",
            label: "Tiêu đề (Title)",
            fields: [
              { type: "string", name: "vi", label: "Tiếng Việt", required: true },
              { type: "string", name: "en", label: "English", required: true },
            ],
          },
          {
            type: "object",
            name: "description",
            label: "Mô tả ngắn (Description)",
            fields: [
              { type: "string", name: "vi", label: "Tiếng Việt", ui: { component: "textarea" } },
              { type: "string", name: "en", label: "English", ui: { component: "textarea" } },
            ],
          },
          {
            type: "string",
            name: "category",
            label: "Category",
            options: [
              { label: "Enterprise", value: "enterprise" },
              { label: "Frontend", value: "frontend" },
              { label: "Fullstack", value: "fullstack" },
              { label: "Web Apps", value: "webapps" },
            ],
          },
          {
            type: "string",
            name: "projectType",
            label: "Project Type",
            options: [
              { label: "Enterprise", value: "enterprise" },
              { label: "Personal", value: "personal" },
            ],
          },
          {
            type: "object",
            name: "status",
            label: "Trạng thái dự án (Status)",
            fields: [
              { type: "string", name: "vi", label: "Tiếng Việt" },
              { type: "string", name: "en", label: "English" },
            ],
          },
          {
            type: "string",
            name: "company",
            label: "Công ty / Khách hàng",
          },
          {
            type: "image",
            name: "image",
            label: "Ảnh đại diện (Image)",
          },
          {
            type: "string",
            name: "tags",
            label: "Công nghệ (Tags)",
            list: true,
          },
          {
            type: "string",
            name: "githubUrl",
            label: "GitHub Link",
          },
          {
            type: "string",
            name: "demoUrl",
            label: "Live Demo Link",
          },
          {
            type: "boolean",
            name: "featured",
            label: "Dự án nổi bật (Featured)",
          },
          {
            type: "object",
            name: "highlights",
            label: "Điểm nổi bật (Highlights)",
            fields: [
              { type: "string", name: "vi", label: "Tiếng Việt", list: true },
              { type: "string", name: "en", label: "English", list: true },
            ],
          },
        ],
      },
      {
        name: "experience",
        label: "Kinh Nghiệm Làm Việc (Experience)",
        path: "content/experiences",
        format: "json",
        fields: [
          { type: "string", name: "company", label: "Tên công ty", required: true },
          {
            type: "object",
            name: "role",
            label: "Vị trí / Chức danh",
            fields: [
              { type: "string", name: "vi", label: "Tiếng Việt", required: true },
              { type: "string", name: "en", label: "English", required: true },
            ],
          },
          {
            type: "object",
            name: "period",
            label: "Thời gian làm việc (Period)",
            fields: [
              { type: "string", name: "vi", label: "Tiếng Việt" },
              { type: "string", name: "en", label: "English" },
            ],
          },
          {
            type: "object",
            name: "duration",
            label: "Tổng thời gian (Duration)",
            fields: [
              { type: "string", name: "vi", label: "Tiếng Việt" },
              { type: "string", name: "en", label: "English" },
            ],
          },
          {
            type: "object",
            name: "employmentType",
            label: "Hình thức làm việc (Employment Type)",
            fields: [
              { type: "string", name: "vi", label: "Tiếng Việt" },
              { type: "string", name: "en", label: "English" },
            ],
          },
          {
            type: "object",
            name: "workplaceType",
            label: "Địa điểm làm việc (Workplace Type)",
            fields: [
              { type: "string", name: "vi", label: "Tiếng Việt" },
              { type: "string", name: "en", label: "English" },
            ],
          },
          {
            type: "object",
            name: "description",
            label: "Mô tả công việc (Description)",
            fields: [
              { type: "string", name: "vi", label: "Tiếng Việt", ui: { component: "textarea" } },
              { type: "string", name: "en", label: "English", ui: { component: "textarea" } },
            ],
          },
          {
            type: "string",
            name: "skills",
            label: "Kỹ năng sử dụng (Skills)",
            list: true,
          },
        ],
      },
      {
        name: "post",
        label: "Bài Viết (Posts)",
        path: "content/posts",
        format: "mdx",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Tiêu đề",
            isTitle: true,
            required: true,
          },
          {
            type: "datetime",
            name: "date",
            label: "Ngày đăng",
          },
          {
            type: "string",
            name: "description",
            label: "Mô tả ngắn",
          },
          {
            type: "image",
            name: "coverImage",
            label: "Ảnh bìa",
          },
          {
            type: "string",
            name: "tags",
            label: "Tags",
            list: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Nội dung",
            isBody: true,
          },
        ],
      },
    ],
  },
});
