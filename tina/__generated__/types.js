export function gql(strings, ...args) {
  let str = "";
  strings.forEach((string, i) => {
    str += string + (args[i] || "");
  });
  return str;
}
export const PersonalPartsFragmentDoc = gql`
    fragment PersonalParts on Personal {
  __typename
  name
  nickname
  handle
  avatar
  email
  location {
    __typename
    vi
    en
  }
  level {
    __typename
    vi
    en
  }
  roles {
    __typename
    vi
    en
  }
  bio {
    __typename
    vi
    en
  }
  aboutDetailed {
    __typename
    vi {
      __typename
      personalities
      intro
      visionQuote
      funFacts {
        __typename
        label
        value
      }
      highlights {
        __typename
        title
        desc
      }
    }
    en {
      __typename
      personalities
      intro
      visionQuote
      funFacts {
        __typename
        label
        value
      }
      highlights {
        __typename
        title
        desc
      }
    }
  }
  services {
    __typename
    vi {
      __typename
      title
      desc
    }
    en {
      __typename
      title
      desc
    }
  }
  socials {
    __typename
    github
    email
  }
}
    `;
export const SkillsPartsFragmentDoc = gql`
    fragment SkillsParts on Skills {
  __typename
  skills {
    __typename
    name
    level
    category
    icon
  }
  toolchains {
    __typename
    category {
      __typename
      vi
      en
    }
    items
  }
}
    `;
export const ProjectPartsFragmentDoc = gql`
    fragment ProjectParts on Project {
  __typename
  title {
    __typename
    vi
    en
  }
  description {
    __typename
    vi
    en
  }
  category
  projectType
  status {
    __typename
    vi
    en
  }
  company
  image
  tags
  githubUrl
  demoUrl
  featured
  highlights {
    __typename
    vi
    en
  }
}
    `;
export const ExperiencePartsFragmentDoc = gql`
    fragment ExperienceParts on Experience {
  __typename
  company
  role {
    __typename
    vi
    en
  }
  period {
    __typename
    vi
    en
  }
  duration {
    __typename
    vi
    en
  }
  employmentType {
    __typename
    vi
    en
  }
  workplaceType {
    __typename
    vi
    en
  }
  description {
    __typename
    vi
    en
  }
  skills
}
    `;
export const PostPartsFragmentDoc = gql`
    fragment PostParts on Post {
  __typename
  title
  date
  description
  coverImage
  tags
  body
}
    `;
export const PersonalDocument = gql`
    query personal($relativePath: String!) {
  personal(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...PersonalParts
  }
}
    ${PersonalPartsFragmentDoc}`;
export const PersonalConnectionDocument = gql`
    query personalConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: PersonalFilter) {
  personalConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...PersonalParts
      }
    }
  }
}
    ${PersonalPartsFragmentDoc}`;
export const SkillsDocument = gql`
    query skills($relativePath: String!) {
  skills(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...SkillsParts
  }
}
    ${SkillsPartsFragmentDoc}`;
export const SkillsConnectionDocument = gql`
    query skillsConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: SkillsFilter) {
  skillsConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...SkillsParts
      }
    }
  }
}
    ${SkillsPartsFragmentDoc}`;
export const ProjectDocument = gql`
    query project($relativePath: String!) {
  project(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...ProjectParts
  }
}
    ${ProjectPartsFragmentDoc}`;
export const ProjectConnectionDocument = gql`
    query projectConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: ProjectFilter) {
  projectConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...ProjectParts
      }
    }
  }
}
    ${ProjectPartsFragmentDoc}`;
export const ExperienceDocument = gql`
    query experience($relativePath: String!) {
  experience(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...ExperienceParts
  }
}
    ${ExperiencePartsFragmentDoc}`;
export const ExperienceConnectionDocument = gql`
    query experienceConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: ExperienceFilter) {
  experienceConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...ExperienceParts
      }
    }
  }
}
    ${ExperiencePartsFragmentDoc}`;
export const PostDocument = gql`
    query post($relativePath: String!) {
  post(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...PostParts
  }
}
    ${PostPartsFragmentDoc}`;
export const PostConnectionDocument = gql`
    query postConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: PostFilter) {
  postConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...PostParts
      }
    }
  }
}
    ${PostPartsFragmentDoc}`;
export function getSdk(requester) {
  return {
    personal(variables, options) {
      return requester(PersonalDocument, variables, options);
    },
    personalConnection(variables, options) {
      return requester(PersonalConnectionDocument, variables, options);
    },
    skills(variables, options) {
      return requester(SkillsDocument, variables, options);
    },
    skillsConnection(variables, options) {
      return requester(SkillsConnectionDocument, variables, options);
    },
    project(variables, options) {
      return requester(ProjectDocument, variables, options);
    },
    projectConnection(variables, options) {
      return requester(ProjectConnectionDocument, variables, options);
    },
    experience(variables, options) {
      return requester(ExperienceDocument, variables, options);
    },
    experienceConnection(variables, options) {
      return requester(ExperienceConnectionDocument, variables, options);
    },
    post(variables, options) {
      return requester(PostDocument, variables, options);
    },
    postConnection(variables, options) {
      return requester(PostConnectionDocument, variables, options);
    }
  };
}
import { createClient } from "tinacms/dist/client";
const generateRequester = (client) => {
  const requester = async (doc, vars, options) => {
    let url = client.apiUrl;
    if (options?.branch) {
      const index = client.apiUrl.lastIndexOf("/");
      url = client.apiUrl.substring(0, index + 1) + options.branch;
    }
    const data = await client.request({
      query: doc,
      variables: vars,
      url
    }, options);
    return { data: data?.data, errors: data?.errors, query: doc, variables: vars || {} };
  };
  return requester;
};
export const ExperimentalGetTinaClient = () => getSdk(
  generateRequester(
    createClient({
      url: "http://localhost:4001/graphql",
      queries
    })
  )
);
export const queries = (client) => {
  const requester = generateRequester(client);
  return getSdk(requester);
};
