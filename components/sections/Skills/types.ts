import { ReactElement } from "react";

export type AnimationStep = 'center' | 'distributed';

export interface CardLabel {
  label: string;
  icon: ReactElement;
}

export interface CardPosition {
  x: number;
  y: number;
  align: string;
}

export interface Skill {
  id: string;
  label: string;
  icon: ReactElement;
  group: string;
} 