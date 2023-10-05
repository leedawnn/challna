module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
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
    'import/no-unresolved': ['error', { caseSensitive: false }],
    // props spreading 허용하지 않는 경고 표시
    'react/jsx-props-no-spreading': [1, { custom: 'ignore' }],
    'linebreak-style': 0,
    'import/extensions': 0,
    'no-use-before-define': 0,
    // 테스트 또는 개발환경을 구성 파일에서는 devDependency 사용 허용
    'import/no-extraneous-dependencies': 0,
    'no-shadow': 0,
    'jsx-a11y/no-noninteractive-element-interactions': 0,
    'react/jsx-props-no-spreading': 0,
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.ts', '.tsx'],
      },
    },
  },
};
