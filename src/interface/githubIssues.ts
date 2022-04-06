export interface GithubIssues {
  id: number;
  title: string;
  html_url: string;
  user: {
    login: string;
  };
}
