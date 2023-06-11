export interface IFormation {
  _id: string;
  formation_name: string;
  description: string;
  formation_type: string;
  tech_stacks: string[];
  is_completed: boolean;
  reward_link?: string;
  started_at: string;
  end_at: string;
}
