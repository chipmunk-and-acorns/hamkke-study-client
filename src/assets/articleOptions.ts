// 모집 구분
const recruitmentCategoryOptions = [
  { value: 'study', label: 'Study' },
  { value: 'project', label: 'Project' },
];

// 모집 인원
const recruitmentNumberOfPeopleOptions = [
  // { value: 'undetermined', label: '인원 미정' },
  { value: '1', label: '1명' },
  { value: '2', label: '2명' },
  { value: '3', label: '3명' },
  { value: '4', label: '4명' },
  { value: '5', label: '5명' },
  { value: '6', label: '6명' },
  { value: '7', label: '7명' },
  { value: '8', label: '8명' },
  { value: '9', label: '9명' },
  // { value: 'more', label: '10명 이상' },
];

// 진행 박식
const workOptions = [
  { value: 'online', label: '온라인' },
  { value: 'offline', label: '오프라인' },
];

// 진행 기간
const durationOfProgress = [
  // { value: 'undetermined', label: '기간 미정' },
  { value: '1', label: '1개월' },
  { value: '2', label: '2개월' },
  { value: '3', label: '3개월' },
  { value: '4', label: '4개월' },
  { value: '5', label: '5개월' },
  { value: '6', label: '6개월' },
  // { value: 'more', label: '장기' },
];

// 기술 스택
const technologyStack = [
  { value: 'javascript', label: 'JavaScript' },
  { value: 'typescript', label: 'TypeScript' },
  { value: 'react', label: 'React' },
  { value: 'vue', label: 'Vue' },
  { value: 'nodejs', label: 'Nodejs' },
  { value: 'spring', label: 'Spring' },
  { value: 'java', label: 'Java' },
  { value: 'nextjs', label: 'Nextjs' },
  { value: 'nestjs', label: 'Nestjs' },
  { value: 'express', label: 'Express' },
  { value: 'go', label: 'Go' },
  { value: 'c', label: 'C' },
  { value: 'python', label: 'Python' },
  { value: 'django', label: 'Django' },
  { value: 'swift', label: 'Swift' },
  { value: 'kotlin', label: 'Kotlin' },
  { value: 'mysql', label: 'MySQL' },
  { value: 'mongodb', label: 'MongoDB' },
  { value: 'php', label: 'php' },
  { value: 'graphql', label: 'GraphQL' },
  { value: 'firebase', label: 'Firebase' },
  { value: 'reactnative', label: 'ReactNative' },
  { value: 'unity', label: 'Unity' },
  { value: 'flutter', label: 'Flutter' },
  { value: 'aws', label: 'AWS' },
  { value: 'kubernetes', label: 'Kubernetes' },
  { value: 'docker', label: 'Docker' },
  { value: 'git', label: 'Git' },
  { value: 'figma', label: 'Figma' },
  { value: 'zeplin', label: 'Zeplin' },
];

// 모집 포지션
const recruitmentPosition = [
  { value: 'all', label: '전체' },
  { value: 'frontend', label: '프론트엔드' },
  { value: 'backend', label: '백엔드' },
  { value: 'designer', label: '디자이너' },
  { value: 'ios', label: 'IOS' },
  { value: 'android', label: '안드로이드' },
  { value: 'devops', label: '데브옵스' },
  { value: 'pm', label: 'PM' },
];

export {
  recruitmentCategoryOptions,
  recruitmentNumberOfPeopleOptions,
  workOptions,
  durationOfProgress,
  technologyStack,
  recruitmentPosition,
};
