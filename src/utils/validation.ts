import * as Yup from 'yup';

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

/**
 * signUp validation schema
 */
export const registerValidateSchema = Yup.object({
  username: Yup.string()
    .matches(validation.emailValidRule, '이메일 주소가 정확한지 확인해 주세요.')
    .required('이메일을 입력해주세요.'),
  password: Yup.string()
    .matches(
      validation.passwordValidRule,
      '8~16자의 영문 대/소문자, 숫자, 특수문자(!@#$%^&*)를 사용해주세요.'
    )
    .required('비밀번호를 입력해주세요.'),
  passwordConfirm: Yup.string()
    .equals([Yup.ref('password')], '비밀번호가 일치하지 않습니다.')
    .required('비밀번호 확인을 위해 필수로 입력해주셔야됩니다.'),
  nickname: Yup.string()
    .matches(
      validation.nicknameValidRule,
      '영문자, 숫자, 한글로 2자 이상 10자 이하로 입력가능합니다.'
    )
    .required('닉네임을 입력해주세요.'),
});

/**
 * signIn validation schema
 */
export const loginValidateSchema = Yup.object({
  username: Yup.string()
    .matches(validation.emailValidRule, '이메일 주소가 정확한지 확인해 주세요.')
    .required('이메일을 입력해주세요.'),
  password: Yup.string()
    .matches(
      validation.passwordValidRule,
      '8~16자의 영문 대/소문자, 숫자, 특수문자(!@#$%^&*)를 사용해주세요.'
    )
    .required('비밀번호를 입력해주세요.'),
});
