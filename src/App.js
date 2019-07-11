import React from 'react';
import './App.css';
import Markdown from 'markdown-to-jsx';

const userInfoTitle = `#### 개인정보 수집 및 활용 동의서(선택)`

const userInfoContent = `
- 수집하는 기본 개인정보 항목 : 성명(이종현) / 연락처(010-000-0000) / 주소(대한민국)
- 개인정보의 수집 및 이용목적 : 성명, 주소, 연락처 : 병원업무와 의학정보 안내 등 서비스 이용 안내
- 개인정보의 보유 및 이용기간 : 덴트웹치과의원은 수집된 고객의 개인정보를 보관하는 법정 기간 동안만 보유하여 그 이후는 DB에서 삭제하고 있습니다. 정보제공자가 개인정보 삭제를 요청할 경우 즉시 삭제합니다. 단, 타법령의 규정의 의해 보유하도록 한 기간 동안은 보관한 수 있습니다.
- 동의 거부 따른 제한사항 : 귀하는 개인정보 제공 동의를 거부할 권리가 있으며, 동의 거부에 따른 불이익은 전혀 없습니다.
`

const videoInfoTitle = `#### 영상정보(CCTV) 수집 동의서(필수)`

const videoInfoContent = `
- 영상정보의 수집 및 이용목적 : 시설안전, 방법, 화재예방 및 분쟁소지 자료확보
- 영상정보 녹화범위 및 보유기간 : 덴트웹치과의원 내부 / 영상정보 보유기간 : 7일
`

const thirdPartyTitle = `
#### 개인정보 제3자제공 동의서(선택)
`

const thirdPartyContent = `
- 개인정보를 제공받는 곳 : 조직검사, 혈액검사를 수행하는 수탁(의료)기관
- 제공하는 개인정보 항목 : 환자분의 이름, 주소, 연락처, 주민등록번호, 병력
- 개인정보의 제공목적 : 조직검사, 혈액검사 등의 검체검사 위탁시 수탁기관에서의 환자 구분, 검사기록 작성 및 보험청구를 위함
- 개인정보 제3자 제공 동의거부에 따른 제한사항 : 귀하는 개인정보 제공 동의를 거부할 권리가 있으며, 동의를 거부할 시 일반 진료에는 전혀 제한이 없으나, 조직검사, 혈액검사 등의 검체 위탁검사를 받으실 수 없습니다.
`

const notice =`
※ 개인정보를 제공자가 동의한 내용외의 다른 목적으로 활용하지 않으며, 제공된 개인정보의 이용을 거부하고자 할 때에는 개인정보 관리책임자를 통해 열람, 정정, 삭제를 요구할 수 있음

※ 만 14세 미만 아동인 경우 반드시 법적대리인의 동의가 필요합니다.
`
const closing = `
  ####2019년 06월 21일
  덴트웹치과의원 귀하
`

function App() {
  return (
    <div className="Agreement">
    <Markdown children={userInfoTitle}/>
    <input type="radio" name="user" value="agree"/> 개인정보 수집, 활용에 동의함
    <input type="radio" name="user" value="disagree"/> 개인정보 수집, 활용에 동의하지 않음
    <Markdown children={userInfoContent}/>
    <Markdown children={videoInfoTitle}/>
    <input type="radio" name="video" value="agree"/> 영상정보 수집에 동의함
    <input type="radio" name="video" value="disagree"/> 영상정보 수집에 동의하지 않음
    <Markdown children={videoInfoContent}/>
    <Markdown children={thirdPartyTitle}/>
    <input type="radio" name="thirdParty" value="agree"/> 개인정보 제3자 제공에 동의함
    <input type="radio" name="thirdParty" value="disagree"/> 개인정보 제3자 제공에 동의하지 않음
    <Markdown children={thirdPartyContent}/>
    <Markdown children={notice}/>
    <button type="button"> 전체 동의 </button>
    <br/>
    법정대리인 성명 <input type="text" name="fname"/>
    연락처 <input type="text" name="lname"/>

    법정대리인 관계
    <select>
      <option value="parent">부모</option>
      <option value="grandparent">조부모</option>
      <option value="any">아무</option>
      <option value="who">누구</option>
    </select>

    <br/>
    <Markdown children={closing}/>
    <br/>
    <button type="button"> 저장 </button>
    <button type="button"> 취소 </button>
    
    </div>
  );
}

export default App;
