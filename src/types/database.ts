export type CompanyType = "product" | "service";

export interface Company {
  id: string;
  name: string;
  type: CompanyType;
  description: string;
  logo: string; // emoji or URL
  industry: string;
}

export interface Role {
  id: string;
  name: string;
  icon: string;
  description: string;
}

export interface Question {
  id: string;
  companyId: string;
  roleId: string;
  text: string;
  category: string;
  difficulty: "Easy" | "Medium" | "Hard";
}

export interface UserProgress {
  questionId: string;
  completed: boolean;
  completedAt?: string;
}

export interface TestQuestion {
  id: string;
  text: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface Test {
  id: string;
  companyId: string;
  roleId: string;
  title: string;
  duration: number; // minutes
  questions: TestQuestion[];
}

export interface TestResult {
  testId: string;
  score: number;
  total: number;
  completedAt: string;
}

export interface LearningTopic {
  id: string;
  name: string;
  icon: string;
  description: string;
  category: string;
}

export interface LearningResource {
  id: string;
  topicId: string;
  title: string;
  url: string;
  platform: string;
  type: "Article" | "Video" | "Course" | "Practice" | "Documentation";
  difficulty: "Beginner" | "Intermediate" | "Advanced";
}

export interface LeaderboardEntry {
  rank: number;
  name: string;
  avatar: string;
  questionsCompleted: number;
  testsCompleted: number;
  avgScore: number;
  streak: number;
}
