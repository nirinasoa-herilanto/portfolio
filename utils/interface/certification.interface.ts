export interface ICertification {
  _id: string;
  certification_name: string;
  description: string;
  tech_stacks: string[];
  certification_type: string;
  certification_link: string;
  is_completed: boolean;
  certified_at: string;
}
