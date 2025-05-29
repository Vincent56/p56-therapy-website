export interface TherapistData {
  name: string;
  title: string;
  bio: string;
  image?: string;
  specialties: string[];
}

export const therapistData: TherapistData = {
  name: "Dr. Sarah Johnson",
  title: "Licensed Clinical Psychologist",
  bio: "I am a licensed clinical psychologist with over 10 years of experience helping individuals navigate life's challenges. My approach is collaborative, compassionate, and evidence-based. I believe in creating a safe space where clients can explore their thoughts and feelings without judgment. Together, we'll work to develop practical strategies that help you achieve your goals and improve your overall well-being.",
  image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  specialties: [
    "Anxiety & Depression",
    "Trauma Recovery", 
    "Relationship Issues",
    "Work-Life Balance",
    "Stress Management",
    "Personal Growth"
  ]
}; 