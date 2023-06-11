export interface IProject {
  _id: string;
  project_title: string;
  project_image?: string;
  project_description: string;
  tech_stacks: string[];
  repo_link: string;
  link: string;
  is_completed: boolean;
  started_at: string;
  end_at: string;
  slug: string;
}
