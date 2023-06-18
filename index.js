module.exports = {
    extends: [],
    plugins: [
        "destructuring"
    ],
    rules: {
        // Next
        "@next/next/no-img-element": "off",
        // JS
        "comma-dangle": [
            "error",
            "never"
        ],
        // Индентация установлена в 4
        // Опция "SwitchCase" устанавливает отступ между оператором case и телом case в конструкции switch равным 1.
        "indent": ["error", 4, { "SwitchCase": 1 }],
        "object-curly-newline": [
            "error",
            {
                "ObjectExpression": "always",
                "ObjectPattern": {
                    "multiline": true,
                    "minProperties": 2
                },
                "ImportDeclaration": {
                    "multiline": true,
                    "minProperties": 2
                },
                "ExportDeclaration": {
                    "multiline": true,
                    "minProperties": 2
                }
            }
        ],
        "object-curly-spacing": ["error", "always"],
        "newline-before-return": "error",
        // Стрелочные функции обязательно с фигурными скобками и командой return
        "arrow-body-style": ["error", "always"],
        // React
        // задает отступ 2 пробела для вложенной разметки
        "react/jsx-indent": [
            "error",
            4
        ],
        // задает отступ 2 пробела для атрибутов во вложенной разметке
        "react/jsx-indent-props": [
            "error",
            4
        ],
        // Это правило позволяет контролировать количество атрибутов на одной строке в JSX. Вы можете установить его значение на 1, чтобы установить ограничение на один атрибут на строку. Если количество атрибутов больше одного, они будут располагаться на новых строках
        "react/jsx-max-props-per-line": [
            "error",
            {
                "maximum": 1
            }
        ],
        // Это правило управляет расположением закрывающего символа > тега JSX.
        "react/jsx-closing-bracket-location": [
            "error",
            "line-aligned"
        ],
        // Правило "react/jsx-curly-spacing" определяет, должны ли быть пробелы вокруг фигурных скобок в JSX. Есть несколько вариантов настроек для этого правила:
        "react/jsx-curly-spacing": [
            2,
            {
                "when": "always"
            }
        ],
        // Правило "react/jsx-first-prop-new-line" управляет размещением первого атрибута на новой строке в JSX-элементах. Оно определяет, должен ли первый атрибут находиться на новой строке или на той же строке, где начинается тег JSX.
        "react/jsx-first-prop-new-line": [
            2,
            "multiline"
        ],
        // Запрещаем деструктуризацию в аргументах функции (https://github.com/lukeapage/eslint-plugin-destructuring/blob/master/docs/rules/in-params.md)
        "destructuring/in-params": [
            "error",
            {
                "max-params": 0
            }
        ]
    },
};
