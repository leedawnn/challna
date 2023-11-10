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
    // jsx 파일 확장자 .jx, .jsx, .ts, .tsx 허용
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    // 콘솔 사용 시 발생하는 경고 (예외: warn, error)
    'no-console': [
      'error',
      {
        allow: ['warn', 'error'],
      },
    ],
    // export문이 하나일 때 default export 사용 권장 경고 비활성화
    'import/prefer-default-export': ['off'],
    // react hooks의 의존성배열이 충분하지 않을 때 경고 표시
    'react-hooks/exhaustive-deps': ['off'],
    // 컴포넌트 이름은 PascalCase로
    'react/jsx-pascal-case': 'warn',
    // 반복문으로 생성하는 요소에 key 강제
    'react/jsx-key': 'warn',
    // 디버그 허용
    'no-debugger': 'off',
    // 함수 컴포넌트 정의 스타일을 화살표 함수(arrow-function)로 강제
    'react/function-component-definition': [2, { namedComponents: 'arrow-function' }],
    // jsx, tsx 확장자를 사용하는 경우 import React 명시
    'react/react-in-jsx-scope': 0,
    // 가능한 한 stateless 함수형 컴포넌트(functional component)를 사용하도록 강제
    'react/prefer-stateless-function': 0,
    // jsx 내에서 한 줄에 하나의 표현식만 있어야 한다는 것을 강제
    'react/jsx-one-expression-per-line': 0,
    // 중첩된 삼항 연산자(nested ternary operator)의 사용을 금지
    'no-nested-ternary': 0,
    // 파일의 경로가 틀렸는지 확인하는 옵션 false
    'import/no-unresolved': 0,
    // 확장자를 명시하라는 ESLint 규칙
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    // 선언되기 전에 변수를 사용할 경우, export default 아래 스타일 코드
    'no-use-before-define': 0,
    // 테스트 또는 개발환경을 구성 파일에서는 devDependency 사용 허용
    'import/no-extraneous-dependencies': 0,
    // 변수나 함수 이름이 외부 범위와 중복되는 것을 방지
    'no-shadow': 0,
    'jsx-a11y/no-noninteractive-element-interactions': 0,
    // props spreading 허용하지 않는 경고 표시
    'react/jsx-props-no-spreading': 0,
    // 화살표 함수 인수와 관련된 설정 'as-needed'로 설정할 경우 파라미터가 한 개일때 생략가능
    'arrow-parens': ['error', 'always'],
    // 불필요한 fragment 허용하지 않기
    'react/jsx-no-useless-fragment': [
      2,
      {
        allowExpressions: true,
      },
    ],
    // return 문에서 값을 항상 지정하거나 절대 지정하지 않도록 하는 옵션
    'consistent-return': 0,
    // --noImplicitAny 옵션을 false로
    '@typescript-eslint/no-explicit-any': 'off',
    // alert 옵션 설정
    'no-alert': 'off',
    'react-refresh/only-export-components': 0,
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.ts', '.tsx'],
      },
    },
  },
};
