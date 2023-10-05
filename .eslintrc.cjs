module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', '@typescript-eslint', 'prettier'],
  extends: [
    'airbnb',
    'airbnb/hooks',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'prettier',
    'plugin:storybook/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  // [rules] 상세 규칙
  rules: {
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    'no-var': 'warn',
    // 불필요한 세미콜론 사용 시 에러 표시
    'no-extra-semi': 'error',
    // jsx 파일 확장자 .jx, .jsx, .ts, .tsx 허용
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    // 화살표 함수의 파라미터가 하나일때 괄호 생략
    'arrow-parens': ['warn', 'as-needed'],
    // 사용하지 않는 변수가 있을 때 발생하는 경고 비활성화
    'no-unused-vars': ['off'],
    // 콘솔 사용 시 발생하는 경고 비활성화
    'no-console': ['off'],
    // export문이 하나일 때 default export 사용 권장 경고 비활성화
    'import/prefer-default-export': ['off'],
    // react hooks의 의존성배열이 충분하지 않을 때 경고 표시
    'react-hooks/exhaustive-deps': ['warn'],
    // 컴포넌트 이름은 PascalCase로
    'react/jsx-pascal-case': 'warn',
    // 반복문으로 생성하는 요소에 key 강제
    'react/jsx-key': 'warn',
    // 디버그 허용
    'no-debugger': 'off',
    // 함수 컴포넌트 정의 스타일을 화살표 함수(arrow-function)로 강제
    'react/function-component-definition': [2, { namedComponents: 'arrow-function' }],
    'react/react-in-jsx-scope': 0,
    // 가능한 한 stateless 함수형 컴포넌트(functional component)를 사용하도록 강제
    'react/prefer-stateless-function': 0,
    // jsx 내에서 한 줄에 하나의 표현식만 있어야 한다는 것을 강제
    'react/jsx-one-expression-per-line': 0,
    // 중첩된 삼항 연산자(nested ternary operator)의 사용을 금지
    'no-nested-ternary': 0,
    // 파일의 경로가 틀렸는지 확인하는 옵션 false
    'import/no-unresolved': 0,
    'linebreak-style': 0,
    'import/extensions': 0,
    'no-use-before-define': 0,
    // 테스트 또는 개발환경을 구성 파일에서는 devDependency 사용 허용
    'import/no-extraneous-dependencies': 0,
    // 변수나 함수 이름이 외부 범위와 중복되는 것을 방지
    'no-shadow': 0,
    'jsx-a11y/no-noninteractive-element-interactions': 0,
    // props spreading 허용하지 않는 경고 표시
    'react/jsx-props-no-spreading': 0,
    // --noImplicitAny 옵션을 false로
    '@typescript-eslint/no-explicit-any': 'off',
    // 지정된 전역 변수를 허용하지 않음
    'no-restricted-globals': 'off',
    // 화살표 함수 인수와 관련
    'arrow-parens': 1,
    // 불필요한 fragment 허용하지 않기
    'react/jsx-no-useless-fragment': 0,
    // return 문에서 값을 항상 지정하거나 절대 지정하지 않도록 하는 옵션
    'consistent-return': 0,
    // React 컴포넌트의 props에 대한 기본값(defaultProps)을 명시적으로 지정하도록 하는 옵션
    'react/require-default-props': 0,
    // 옵션을 통해 특정 타입 밴 가능하고, 해당 타입 사용 시 warn
    '@typescript-eslint/ban-types': 0,
    // 사용하지 않는 표현식 금지하는 옵션
    'no-unused-expressions': 0,
    // Hook에 누락된 종속성이 있을 때 경고
    'react-hooks/exhaustive-deps': 0,
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.ts', '.tsx'],
      },
    },
  },
};
