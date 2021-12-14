module.exports = {
  env: {
    //eslint를 통해서 코드 검사를 nodejs환경과 브라우저 환경 모두 코드검사를 할 것인지 설정
    browser: true,
    node: true
  },
  extends: [
    //vue 
    //'plugin:vue/vue3-essential', // 1단계
    'plugin:vue/vue3-strongly-recommended', //2단계
    //'plugin:vue/vue3-recommended' //3단계

    //js
    'eslint:recommended'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    //기본적인 규칙이 없는경우 빈 칸으로도 사용가능
    "vue/html-closing-bracket-newline": ["error", {
      "singleline": "never",
      "multiline": "never"
    }],
    "vue/html-self-closing": ["error", {
      "html": {
        "void": "always",
        "normal": "never",
        "component": "always"
      },
      "svg": "always",
      "math": "always"
    }]
  }
}