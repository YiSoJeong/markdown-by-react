## markdown-by-react



### Usage

- `yarn add markdown-to-jsx`
- 사용할 파일 상단에 `import Markdown from 'markdown-to-jsx';` 추가



### How to use

#### case 1

```react
<Markdown># Hello world!</Markdown>
```



#### case 2

```react
const mdfile = `# Hello world!`

const multiline_mdfile = `
	# Hello world!
	## Hello world?
`

<Markdown>{mdfile}</Markdown>
```

 [**template literals**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/template_strings) : ES6에서 지원하는 여러 String 형식 참고

