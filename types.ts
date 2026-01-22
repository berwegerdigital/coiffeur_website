export interface Service {
  id: string;
  name: string;
  price: string;
  duration: string;
  category: 'Damen' | 'Herren' | 'Kinder' | 'Coloration';
}

export interface Review {
  id: number;
  author: string;
  rating: number;
  text: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}
