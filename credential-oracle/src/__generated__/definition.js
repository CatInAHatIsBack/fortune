// This is an auto-generated file, do not edit manually
export const definition = {
  models: {
    GithubUser: {
      id: "kjzl6hvfrbw6c6iga46b1xj80g1a7m9p7y51qlw4yqyvtudk1yzbfprprcvfuhk",
      accountRelation: { type: "list" },
    },
  },
  objects: {
    GithubUserGithubAchievement: {
      name: { type: "string", required: true },
      x_val: { type: "integer", required: true },
    },
    GithubUser: {
      bio: { type: "string", required: false },
      url: { type: "string", required: true },
      blog: { type: "string", required: false },
      name: { type: "string", required: false },
      type: { type: "string", required: true },
      email: { type: "string", required: false },
      login: { type: "string", required: true },
      company: { type: "string", required: false },
      hireable: { type: "boolean", required: false },
      location: { type: "string", required: false },
      followers: { type: "integer", required: false },
      following: { type: "integer", required: false },
      github_id: { type: "integer", required: true },
      created_at: { type: "string", required: true },
      site_admin: { type: "boolean", required: false },
      achievements: {
        type: "list",
        required: false,
        item: {
          type: "reference",
          refType: "object",
          refName: "GithubUserGithubAchievement",
          required: false,
        },
      },
      public_gists: { type: "integer", required: false },
      public_repos: { type: "integer", required: false },
      user_account: { type: "string", required: true },
      twitter_username: { type: "string", required: false },
    },
  },
  enums: {},
  accountData: { githubUserList: { type: "connection", name: "GithubUser" } },
};