// types.ts
export interface TeamMember {
  name: string;
  role: string;
  experience: string;
  specialization: string;
  image: string;
  bio: string;
  education: string[];
  achievements: string[];
  email: string;
  phone: string;
  linkedin: string;
}

export interface CoreValue {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

export interface StatItem {
  number: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}
