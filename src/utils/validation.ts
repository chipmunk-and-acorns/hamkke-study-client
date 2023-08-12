/**
 * 유효성 검증
 *
 * email validation, username validation
 *  - 영문자, 숫자 | @ | . 이후 2~3 글자
 *
 * password validation
 *  - 영문자, 숫자, 특수문자(!@#$%^&*)를 각각 최소 1개 이상 포함하며 길이가 8자 이상 16자 이하인지 확인
 *
 * nickname validation
 *  - 영문자, 한글, 숫자만 입력, 2글자 이상 10글자 이하 입력가능
 *
 */
export const validation = {
  emailValidRule: new RegExp(`^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,3}$`),
  passwordValidRule: new RegExp(
    `^(?=.*[A-Za-z])(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{8,16}$`
  ),
  nicknameValidRule: new RegExp(`^[a-zA-Z가-힣0-9]{2,10}$`),
};
