
export interface CentumNews {
  id: number;
  title: string;
  excerpt: string;
  image_url: string;
  category: string;
  display_date: string;
  is_urgent: boolean;
  read_more_url: string;
  created_at?: string;
}

export interface CentumBlog {
  id: number;
  title: string;
  excerpt: string;
  image_url: string;
  category: string;
  author: string;
  display_date: string;
  read_time: string;
  slug: string;
  content_html: string;
  created_at?: string;
}

export interface CentumResult {
  id: number;
  student_name: string;
  rank: string;
  exam_type: string;
  score: string;
  image_url: string;
  achievement: string;
  exam_year: number;
  created_at?: string;
}

export interface CentumAnnouncement {
  id: number;
  title: string;
  description: string;
  read_more_url: string;
  priority: number;
  created_at?: string;
}

export interface CentumSubscriber {
  id: number;
  email: string;
  created_at?: string;
}

export interface CentumBrochure {
  id: number;
  image_url: string;
  description: string;
  created_at?: string;
}

export type TableName = 
  | 'centum_news' 
  | 'centum_blogs' 
  | 'centum_results' 
  | 'centum_announcements' 
  | 'centum_subscribers' 
  | 'centumbrosher';
