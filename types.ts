import { FunctionComponent } from "react";
import { IconType } from "react-icons";
export interface Service {
  Icon: IconType;
  title: string;
  about: string;
}

export interface Skill {
  Icon: string;
  name: string;
}

export interface IProject {
  name: string;
  description: string;
  image_path: string;
  deployed_url: string;
  github_url: string;
  category: Category[];
  key_techs: string[];
}

export type Category = "react" | "node" | "express" | "django" | "mongo";