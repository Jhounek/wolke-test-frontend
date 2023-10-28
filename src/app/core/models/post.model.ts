export interface PostModel {
    data:Array<typePost>;

}

export interface typePost{
  id?: number;
  img?: string;
  title?: string;
  description?: string;
  date?: string;
  image?: string;
  owner_id?: string;
  created_at?: string;
  updated_at?: string;
}

