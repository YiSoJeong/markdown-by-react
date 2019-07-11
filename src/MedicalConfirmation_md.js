import React from 'react';
import Markdown from 'markdown-to-jsx';

const md = `
#### 치료/수술 확인서

| 차트번호 | 이름 | 주민번호 |  발행일자  | 발급의사 | 문서번호 |
| :------: | :--: | :------: | :--------: | :------: | :------: |
|<input type="text"/>|<input type="text"/>|<input type="text"/>|<input type="date"/>|<select><option value="doc1">의사</option></select>|<input type="text"/>|

치료 기간 : <input type="date" name="from"/> 부터 <input type="date" name="to"/> 까지 <input type="checkbox" name="surgery"/> 수술일 <input type="date" name="surgery"/>

| 상병명 | 부위 |
| :----: | :--: |
|  <input type="text"/>  | <input type="text"/> |
|  <input type="text"/>  | <input type="text"/> |
|  <input type="text"/>  | <input type="text"/> |
|  <input type="text"/>  | <input type="text"/> |
|  <input type="text"/>  | <input type="text"/> |

| 용도      | <select><option value="doc1">보험회사 제출용</option></select> |
| -- | --------------------- |
| 비고      | <textarea rows="4" cols="120"/> |
| 치료 내용 | <textarea rows="12" cols="120"/> |

<button type="button"> 기존 자료 보기 </button>
<button type="button"> 초기 화면으로 </button>
<button type="button"> 편집 가능상태로 전환 </button>
<button type="button"> 전자서명/검증 </button>
<button type="button"> 저장 / 출력 </button>
<button type="button"> 저장하기 </button>
`

function MedicalConfirmation() {
    return(
        <div>
            <Markdown children={md}/>
        </div>
    );    
}

export default MedicalConfirmation;