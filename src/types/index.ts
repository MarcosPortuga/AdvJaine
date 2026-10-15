export interface PracticeArea {
  id: string;
  number: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  commonCases: string[];
  icon: string;
}

export interface Differential {
  number: string;
  title: string;
  description: string;
  highlight: string;
}

export interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
}
