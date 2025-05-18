import React from "react";

export interface TypeBadge {
  label: string;
  color: string;
  icon: React.ReactElement;
}

export interface Project {
  name: string;
  description: string;
  tags: string[];
  icon: React.ReactElement;
  fun: boolean;
  typeBadge: TypeBadge;
  url?: string;
}

export interface TypeBadges {
  [key: string]: TypeBadge;
} 