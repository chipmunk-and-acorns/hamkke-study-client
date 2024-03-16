export type Options = {
  value: string | number;
  label: string | number;
};

const postTypes: Options[] = [
  { value: "project", label: "Project" },
  { value: "study", label: "Study" },
];

const recruitCount: Options[] = [
  { value: 0, label: "인원 미정" },
  { value: 1, label: "1명" },
  { value: 2, label: "2명" },
  { value: 3, label: "3명" },
  { value: 4, label: "4명" },
  { value: 5, label: "5명" },
  { value: 6, label: "6명" },
  { value: 7, label: "7명" },
  { value: 8, label: "8명" },
  { value: 9, label: "9명" },
  { value: 10, label: "10명 이상" },
];

const stacks: Options[] = [
  { value: "javaScript", label: "JavaScript" },
  { value: "typeScript", label: "TypeScript" },
  { value: "react", label: "React" },
  { value: "vue", label: "Vue" },
  { value: "svelte", label: "Svelte" },
  { value: "nextJs", label: "nextJs" },
  { value: "nodejs", label: "nodeJs" },
  { value: "java", label: "Java" },
  { value: "spring", label: "Spring" },
  { value: "go", label: "Go" },
  { value: "nestjs", label: "nestJs" },
  { value: "kotlin", label: "Kotlin" },
  { value: "express", label: "Express" },
  { value: "mysql", label: "MySQL" },
  { value: "python", label: "Python" },
  { value: "django", label: "Django" },
  { value: "php", label: "php" },
  { value: "graphql", label: "GraphQL" },
  { value: "firebase", label: "Firebase" },
  { value: "flutter", label: "Flutter" },
  { value: "swift", label: "Swift" },
  { value: "reactNative", label: "ReactNative" },
  { value: "unity", label: "Unity" },
  { value: "aws", label: "AWS" },
  { value: "kubernetes", label: "Kubernetes" },
  { value: "docker", label: "Docker" },
  { value: "git", label: "Git" },
  { value: "figma", label: "Figma" },
  { value: "zeplin", label: "Zeplin" },
  { value: "jest", label: "Jest" },
];

const position: Options[] = [
  { value: "all", label: "전체" },
  { value: "frontend", label: "프론트엔드" },
  { value: "backend", label: "백엔드" },
  { value: "designer", label: "디자이너" },
  { value: "ios", label: "IOS" },
  { value: "android", label: "안드로이드" },
  { value: "devops", label: "데브옵스" },
];

export { postTypes, recruitCount, stacks, position };
