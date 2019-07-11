## markdown-by-react



### Usage

- `yarn add markdown-to-jsx`
- 사용할 파일 상단에 `import Markdown from 'markdown-to-jsx';` 추가



### How to use

- #### markdown 문자열 -> web browser

  #### case 1 : Markdown태그에 바로 문자열 삽입

  ```react
  <Markdown># Hello world!</Markdown>
  ```

  

  #### case 2 : 문자열 상수를 지정해 놓은 뒤 Markdown태그에 삽입

  ```react
  const mdfile = `# Hello world!`
  
  const multiline_mdfile = `
  	# Hello world!
  	## Hello world?
  	### Hello world.
  `
  
  <Markdown>{mdfile}</Markdown>
  ```

   [**template literals**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/template_strings) : ES6에서 지원하는 여러 String 형식 참고

  

  #### case 3 : 문자열 상수를 Markdown의 children으로 부여

  ```react
  const mdfile = `
  	# Hello world!
  	## Hello world?
  	### Hello world.
  `
  
  <Markdown children={mdfile}/>
  ```



> 변수를 삽입하고 싶을 경우 : ${변수명} 형식사용
>
> ```react
> <Markdown>{`- ${value}`}</Markdown>
> ```



- #### HTML Tag의 표현을 Override하기

  #### case 1 : `options.overrides` prop를 전달

  ```react
  const MyParagraph = ({ children, ...props }) => (
      <div {...props}>{children}</div>
  );
   
  function Test() {
      return(
          <Markdown
          options={{
              overrides: {
                  h1: {
                      component: MyParagraph,
                      props: {
                          className: 'foo',
                      },
                  },
              },
          }}
      >
          # Hello world!
      </Markdown>
      );
  }
  
  /*
      renders:
     
      <div class="foo">
          Hello World
      </div>
   */
  ```



#### 	case 2 : 임의의 React Component 렌더링

```react

```

