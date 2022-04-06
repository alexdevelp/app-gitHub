export interface GithubRepository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}
