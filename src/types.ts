export interface Athlete {
  id: string;
  name: string;
  sport: string;
  delegation: string;
  image: string;
  rank?: number;
  record?: string;
  progress?: number;
}

export interface Delegation {
  id: string;
  name: string;
  gold: number;
  silver: number;
  bronze: number;
  rank: number;
}
