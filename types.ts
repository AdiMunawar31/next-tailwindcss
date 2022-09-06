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

export interface ICertificate {
  name: string;
  image_path: string;
  category: CategoryCertificate[];
}

export type Category = "javascript" | "react" | "vue" | "react-native" | "flutter"  | "blockchain";

export type CategoryCertificate = "random" | "lang" | "frontEnd" | "backEnd" | "devOps" | "flutter" | "android";