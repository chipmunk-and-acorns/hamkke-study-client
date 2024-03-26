import { IOptions } from "@/types/post";

const postTypes: IOptions[] = [
  { value: "project", label: "Project", key: "postType" },
  { value: "study", label: "Study", key: "postType" },
];

const recruitCount: IOptions[] = [
  { value: 0, label: "인원 미정", key: "recruitCount" },
  { value: 1, label: "1명", key: "recruitCount" },
  { value: 2, label: "2명", key: "recruitCount" },
  { value: 3, label: "3명", key: "recruitCount" },
  { value: 4, label: "4명", key: "recruitCount" },
  { value: 5, label: "5명", key: "recruitCount" },
  { value: 6, label: "6명", key: "recruitCount" },
  { value: 7, label: "7명", key: "recruitCount" },
  { value: 8, label: "8명", key: "recruitCount" },
  { value: 9, label: "9명", key: "recruitCount" },
  { value: 10, label: "10명 이상", key: "recruitCount" },
];

const stacks: IOptions[] = [
  // { value: "all", label: "전체", key: "stacks" },
  { value: "javaScript", label: "JavaScript", key: "stacks" },
  { value: "typeScript", label: "TypeScript", key: "stacks" },
  { value: "react", label: "React", key: "stacks" },
  { value: "vue", label: "Vue", key: "stacks" },
  { value: "svelte", label: "Svelte", key: "stacks" },
  { value: "nextJs", label: "nextJs", key: "stacks" },
  { value: "nodejs", label: "nodeJs", key: "stacks" },
  { value: "java", label: "Java", key: "stacks" },
  { value: "spring", label: "Spring", key: "stacks" },
  { value: "go", label: "Go", key: "stacks" },
  { value: "nestjs", label: "nestJs", key: "stacks" },
  { value: "kotlin", label: "Kotlin", key: "stacks" },
  { value: "express", label: "Express", key: "stacks" },
  { value: "mysql", label: "MySQL", key: "stacks" },
  { value: "python", label: "Python", key: "stacks" },
  { value: "django", label: "Django", key: "stacks" },
  { value: "php", label: "php", key: "stacks" },
  { value: "graphql", label: "GraphQL", key: "stacks" },
  { value: "firebase", label: "Firebase", key: "stacks" },
  { value: "flutter", label: "Flutter", key: "stacks" },
  { value: "swift", label: "Swift", key: "stacks" },
  { value: "reactNative", label: "ReactNative", key: "stacks" },
  { value: "unity", label: "Unity", key: "stacks" },
  { value: "aws", label: "AWS", key: "stacks" },
  { value: "kubernetes", label: "Kubernetes", key: "stacks" },
  { value: "docker", label: "Docker", key: "stacks" },
  { value: "git", label: "Git", key: "stacks" },
  { value: "figma", label: "Figma", key: "stacks" },
  { value: "zeplin", label: "Zeplin", key: "stacks" },
  { value: "jest", label: "Jest", key: "stacks" },
];

const position: IOptions[] = [
  // { value: "all", label: "전체", key: "position" },
  { value: "frontend", label: "프론트엔드", key: "position" },
  { value: "backend", label: "백엔드", key: "position" },
  { value: "designer", label: "디자이너", key: "position" },
  { value: "ios", label: "IOS", key: "position" },
  { value: "android", label: "안드로이드", key: "position" },
  { value: "devops", label: "데브옵스", key: "position" },
];

export { postTypes, recruitCount, stacks, position };
