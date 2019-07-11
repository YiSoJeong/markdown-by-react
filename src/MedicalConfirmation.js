import React from 'react';
import Markdown from 'markdown-to-jsx';

const title = `
### 치료/수술 확인서

<div className="chartInfo">
    <table border='1px solid black'>
        <tr>
            <th>차트번호</th>
            <th>이름</th>
            <th>주민번호</th>
            <th>발행일자</th>
            <th>발급의사</th>
            <th>문서번호</th>
        </tr>
        <tr>
            <td>
                <input type="text" name="chartNumber"/>
            </td>
            <td>
                <input type="text" name="name"/>
            </td>
            <td>
                <input type="text" name="SSN"/>
            </td>
            <td>
                <input type="date" name="bday"/>
            </td>
            <td>
                <select>
                    <option value="doc1">이닥터</option>
                    <option value="doc2">김닥터</option>
                    <option value="doc3">신닥터</option>
                    <option value="doc4">최닥터</option>
                </select>
            </td>
            <td>
                <input type="text" name="documentNumber"/>
            </td>
        </tr>
    </table>
</div>
            
<div className="treatmentPeriod">
    <table border='1px solid black'>
        <tr>
            <th>치료 기간</th>
            <td>
                <input type="date" name="bday"/> 부터
                <input type="date" name="bday"/> 까지
                <input type="checkbox" name="surgery" value="surgery"/> 수술일
                <input type="date" name="bday"/> 
            </td>
        </tr>
    </table>
</div>

<div className="diseaseInfo">
    <table border='1px solid black'>
        <tr>
            <th rowSpan='6'>상병명<br/>상병부위</th>
            <th>상병명</th>
            <th>부위</th>
        </tr>
        <tr>
            <td>
                <input type="text" name="name1"/>
            </td>
            <td>
                <input type="text" name="location1"/>
            </td>
        </tr>
        <tr>
            <td>
                <input type="text" name="name2"/>
            </td>
            <td>
                <input type="text" name="location2"/>
            </td>
        </tr>
        <tr>
            <td>
                <input type="text" name="name3"/>
            </td>
            <td>
                <input type="text" name="location3"/>
            </td>
        </tr>
        <tr>
            <td>
                <input type="text" name="name4"/>
            </td>
            <td>
                <input type="text" name="location4"/>
            </td>
        </tr>
        <tr>
            <td>
                <input type="text" name="name5"/>
            </td>
            <td>
                <input type="text" name="location5"/>
            </td>
        </tr>
    </table>
</div>

<div className="submitInfo">
    <table border='1px solid black'>
        <tr>
            <th>용도</th>
            <td>
                <select>
                    <option value="doc1">보험회사 제출용</option>
                    <option value="doc2">소정회사 제출용</option>
                    <option value="doc3">OO회사 제출용</option>
                    <option value="doc4">XX회사 제출용</option>
                </select>
            </td>
        </tr>
        <tr>
            <th>비고</th>
            <td>
                <textarea rows="4" cols="120"/>
            </td>
        </tr>
        <tr>
            <th>치료내용</th>
            <td>
                <textarea rows="12" cols="120"/>
            </td>
        </tr>
    </table>
</div>

<div className="buttons">
    <button type="button"> 기존 자료 보기 </button>
    <button type="button"> 초기 화면으로 </button>
    <button type="button"> 편집 가능상태로 전환 </button>
    <button type="button"> 전자서명/검증 </button>
    <button type="button"> 저장 / 출력 </button>
    <button type="button"> 저장하기 </button>
</div>
`

function MedicalConfirmation() {
    return(
        <div>
            <Markdown children={title}/>
        </div>
    );
}

export default MedicalConfirmation;