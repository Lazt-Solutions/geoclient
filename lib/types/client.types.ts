export type Client = {
  id: string;
  user_id?: string;
  name: string;
  email?: string;
  phone?: string;
  status: "prospect" | "active" | "pending" | "inactive";
  created_at: string;
  updated_at: string;
  tags?: string[];
  notes?: { id: string; content: string; created_at: string }[];
};