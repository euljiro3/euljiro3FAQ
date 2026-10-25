// --- 역 시설 안내 카드(아이콘 + 제목 + 설명) 만들기 도우미 ---
const SVG_OPEN = '<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#fff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">';
const ICON_ELEVATOR = SVG_OPEN + '<rect x="4" y="3" width="16" height="18" rx="2.5"/><path d="M9 10l3-3 3 3"/><path d="M9 14l3 3 3-3"/></svg>';
const ICON_TOILET = SVG_OPEN.replace('fill="none"', 'fill="#fff"').replace('stroke="#fff"', 'stroke="none"') +
  '<circle cx="7" cy="5" r="2"/><path d="M4.5 9.5h5V16H8v5H6v-5H4.5z"/><circle cx="17" cy="5" r="2"/><path d="M17 9l3.8 8.5H18.5V21h-3v-3.5h-2.3z"/>' +
  '<rect x="11.6" y="3" width="0.8" height="18" opacity=".6"/></svg>';
const ICON_LOCKER = SVG_OPEN + '<rect x="4" y="3" width="16" height="18" rx="2"/><path d="M12 3v18M4 12h16"/><path d="M9 7.5h.01M15 7.5h.01M9 16.5h.01M15 16.5h.01" stroke-width="2.4"/></svg>';

function facilitySub(label, text) {
  return '<div style="margin-top:10px;"><span style="font-weight:800;color:#004c97;text-decoration:underline;text-decoration-thickness:2px;text-underline-offset:4px;">' + label + '</span><br>' + text + '</div>';
}
function facilityCard(icon, title, bodyHtml) {
  return '<div style="display:flex;align-items:flex-start;gap:12px;background:#f2f7fd;border:1px solid #d6e4f5;border-radius:14px;padding:14px;margin-bottom:12px;">' +
    '<div style="flex:0 0 46px;height:46px;border-radius:50%;background:#004c97;display:flex;align-items:center;justify-content:center;">' + icon + '</div>' +
    '<div style="flex:1;min-width:0;"><div style="font-weight:800;font-size:1.08em;color:#004c97;">' + title + '</div>' + bodyHtml + '</div></div>';
}

// --- 다국어 FAQ 데이터 (최종 검수 완료 버전) ---
const faqContent = {
  ko: [
    {
      question: "1. 카드 오류",
      answer: `
<div class="faq-item-row"><span class="faq-num">1)</span><span class="faq-text">나가는 게이트와 들어오는 게이트가 서로 다릅니다. <u>알맞은 게이트(초록색 화살표)를 이용하세요.</u></span></div>
<div class="faq-item-row"><span class="faq-num">2)</span><span class="faq-text"><u>카드를 다시 한 번 찍어주세요.</u> 나오는 메시지를 확인하시고, 해당되는 에러코드를 선택하세요.<br>*추가요금 발생하지 않음.</span></div>

<div class="error-buttons">
<button class="error-btn" data-code="E-03">E-03(집표가 안 된 카드)</button>
<button class="error-btn" data-code="E-04">E-04(개표가 안 된 카드)</button>
<button class="error-btn" data-code="E-14">E-14(잔액 부족)</button>
<button class="error-btn" data-code="E-27">E-27(정기권 기간만료)</button>
<button class="error-btn" data-code="E-32">E-32(미충전/환불상태)</button>
<button class="error-btn" data-code="E-33">E-33(이미 개표된 카드)</button>
<button class="error-btn" data-code="E-35">E-35(일회권 사용 완료)</button>
<button class="error-btn" data-code="E-44">E-44(이미 집표된 카드)</button>
<button class="error-btn" data-code="E-45">E-45(일회권 거리 초과)</button>
</div>

<div class="error-detail" id="error-detail"></div>
      `,
      errors: {
        "E-03": "집표가 안 된 카드(하차 처리 안 된 카드).<br><br>비상게이트(휠체어게이트)를 통과하셔서 11번, 12번 출구 쪽에 있는 역무실(Information)에 문의하세요.",
        "E-04": "개표가 안 된 카드(승차 처리 안 된 카드).<br><br>비상게이트(휠체어게이트)를 통과하셔서 11번, 12번 출구 쪽에 있는 역무실(Information)에 문의하세요.",
        "E-14": "잔액 부족.<br><br>정산기(발매기) 이용하여 충전 후 카드 다시 찍고 나가세요.",
        "E-27": "정기권 기간만료.<br><br>비상게이트(휠체어게이트)를 통과하셔서 11번, 12번 출구 쪽에 있는 역무실(Information)에 문의하세요.",
        "E-32": "사용할 수 없는 카드입니다.<br><br>발매기에서 충전하세요.",
        "E-33": "이미 개표된 카드(이미 승차 처리된 카드).<br><br>비상게이트(휠체어게이트)를 지나가세요(소리가 나도 무시하세요)",
        "E-35": "사용이 완료된 승차권입니다.<br><br>비상게이트(휠체어게이트)를 지나가세요(소리가 나도 무시하세요)<br><br>보증금은 보증금 환급기에서 환급받으세요.",
        "E-44": "이미 집표된 카드(이미 하차 처리된 카드).<br><br>비상게이트(휠체어게이트)를 지나가세요(소리가 나도 무시하세요)",
        "E-45": "일회권 거리가 초과하였습니다.<br><br>정산기를 이용해 충전해주세요.(현금만 가능)"
      }
    },
    {
      question: "2. 방향을 잘못 탔어요(반대편으로 가고 싶어요)",
      answer: `
<div class="faq-item-row"><span class="faq-num">1)</span><span class="faq-text">1회권 또는 무임권:<br>헬프콜 버튼을 누른 뒤 반대편으로 건너가고 싶다고 말씀하세요.</span></div>
<div class="faq-item-row"><span class="faq-num">2)</span><span class="faq-text">티머니 카드 또는 기후동행패스:<br>카드를 찍고 나가시고, 반대편 게이트에서 카드를 찍고 들어가세요.<br>(추가 요금 없음, 환승 1회만 차감)</span></div>
      `
    },
    {
      question: "3. 3호선으로 환승하고 싶어요",
      answer: `카드를 찍지 마시고, 계단을 내려가셔서 주황색(3호선) 라인을 따라 쭉 걸어가세요.<br><br>
환승이 아닌 3호선만 이용하고자 하는 경우에는, 카드를 찍고 게이트 안쪽으로 들어간 뒤 계단을 내려가셔서 주황색(3호선) 라인을 따라 쭉 걸어가세요.
`
    },
    {
      question: "4. 노선도",
      answer: `
<strong>Seoul Metro Map (서울 지하철 노선도)</strong>
<a href="images/map_english.jpg" target="_blank" rel="noopener"><img class="faq-photo" src="images/map_english.jpg" width="2576" height="2576" alt="Seoul Metro Map" loading="lazy" style="display:block;width:100%;max-width:100%;height:auto;margin:12px 0 8px;border-radius:12px;"></a>
<div style="font-size:0.85em;color:#5b6b7c;">지도를 누르면 크게 볼 수 있어요.</div>
<a href="http://www.seoulmetro.co.kr/en/cyberStation.do?menuIdx=337" target="_blank" rel="noopener" style="display:block;margin-top:14px;padding:12px 14px;border-radius:10px;background:#1f6fd6;color:#fff;text-decoration:none;font-weight:700;text-align:center;">서울교통공사 사이버스테이션 바로가기</a>
      `
    },
    {
      question: "5. 역 시설 위치",
      answer: `
${facilityCard(ICON_ELEVATOR, "엘리베이터", facilitySub("밖으로 나가는 엘리베이터", "12번 출구, 10번 출구 근처 엘리베이터를 이용하세요.") + facilitySub("승강장으로 내려가는 엘리베이터", "화장실 옆 게이트 안에 있는 엘리베이터를 이용하세요."))}
${facilityCard(ICON_TOILET, "화장실", '<div style="margin-top:6px;">9번, 10번 출구 방향 통로에 있습니다.<br>(게이트 밖)</div>')}
${facilityCard(ICON_LOCKER, "물품보관함", '<div style="margin-top:6px;">화장실 맞은편에 있습니다.</div>')}
      `
    },
    {
      question: "6. 기타 문의",
      answer: `
헬프콜 버튼을 누르세요.
<img class="faq-photo" style="display:block;width:100%;max-width:100%;height:auto;margin:14px 0 18px;border-radius:12px;" src="images/open_gate.jpg" width="1000" height="750" alt="Help call button">
또는<br><br>
비상게이트(휠체어게이트)를 통과하셔서 11번, 12번 출구 쪽에 있는 역무실(Information)에 문의하세요.
<img class="faq-photo" style="display:block;width:100%;max-width:100%;height:auto;margin:14px 0 18px;border-radius:12px;" src="images/gate.jpg" width="1000" height="750" alt="Emergency/Wide Gate">
      `
    }
  ],

  en: [
    {
      question: "1. Card Errors",
      answer: `
<div class="faq-item-row"><span class="faq-num">1)</span><span class="faq-text">There are two separate gates for entry and exit. <u>Please use the correct gate (green arrow).</u></span></div>
<div class="faq-item-row"><span class="faq-num">2)</span><span class="faq-text"><strong>Tap your card again (No extra fare).</strong> Check the message when tapping your card and <strong><u>select the corresponding error code.</u></strong></span></div>

<div class="error-buttons">
<button class="error-btn" data-code="E-03">E-03(Not processed for exit)</button>
<button class="error-btn" data-code="E-04">E-04(Not processed for entry)</button>
<button class="error-btn" data-code="E-14">E-14(Insufficient balance)</button>
<button class="error-btn" data-code="E-27">E-27(Commuter pass expired)</button>
<button class="error-btn" data-code="E-32">E-32(Ticket Not Available)</button>
<button class="error-btn" data-code="E-33">E-33(Already processed for entry)</button>
<button class="error-btn" data-code="E-35">E-35(Ticket has already been used)</button>
<button class="error-btn" data-code="E-44">E-44(Already processed for exit)</button>
<button class="error-btn" data-code="E-45">E-45(Ticket distance exceeded)</button>
</div>

<div class="error-detail" id="error-detail"></div>
      `,
      errors: {
        "E-03": "The ticket has not been processed for exit.<br><br>Go through the Emergency/Wide Gate and visit the station office (Information) near Exit 11 & 12.",
        "E-04": "The ticket has not been processed for entry.<br><br>Go through the Emergency/Wide Gate and visit the station office (Information) near Exit 11 & 12.",
        "E-14": "Insufficient balance (Not enough money).<br><br>Use the ticket machine (on your left or right) to recharge and tap your card again to exit.",
        "E-27": "Commuter pass expired.<br><br>Go through the Emergency/Wide Gate and visit the station office (Information) near Exit 11 & 12.",
        "E-32": "This ticket has not been charged.<br><br>Use the ticket machine to charge it.",
        "E-33": "Already processed for entry (Card has already been tagged).<br><br>Pass through the Emergency/Wide Gate (Ignore the beep sound).",
        "E-35": "This ticket has already been used.<br><br>Pass through the Emergency/Wide Gate (Ignore the beep sound).<br><br>Redeem your deposit from the deposit machine.",
        "E-44": "Already processed for exit (Card has already been tagged).<br><br>Pass through the Emergency/Wide Gate (Ignore the beep sound).",
        "E-45": "The distance limit of this single-journey ticket has been exceeded.<br><br>Use the ticket machine to recharge (cash only)."
      }
    },
    {
      question: "2. I went the wrong way (I want to go to the opposite side)",
      answer: `You can go to the opposite side to take the subway back. <br>
<div class="faq-item-row"><span class="faq-num"><strong>1)</strong></span><span class="faq-text"><strong>Single-journey ticket:</strong> Do not tap your card. Press the help call button and tell us that you want to go to the opposite side.</span></div>
<div class="faq-item-row"><span class="faq-num"><strong>2)</strong></span><span class="faq-text"><strong>T-money (Transportation Card) or Climate Card:</strong> Tap to exit, then tap again at the opposite gate to enter.<br>(No extra fare, only one transfer counted.)</span></div>
      `
    },
    {
      question: "3. How to transfer to Line 3",
      answer: `<strong>Do not tap your card.</strong> Go down the stairs and follow the orange Line 3 signs. Line 2 and Line 3 platforms are connected.<br><br>
If you just want to start your journey on Line 3 (not transferring), tap your card at the gate, go downstairs, and follow the orange Line 3 signs.
`
    },
    {
      question: "4. Metro Map",
      answer: `
<strong>Seoul Metro Map</strong>
<a href="images/map_english.jpg" target="_blank" rel="noopener"><img class="faq-photo" src="images/map_english.jpg" width="2576" height="2576" alt="Seoul Metro Map" loading="lazy" style="display:block;width:100%;max-width:100%;height:auto;margin:12px 0 8px;border-radius:12px;"></a>
<div style="font-size:0.85em;color:#5b6b7c;">Tap the map to view it larger.</div>
<a href="http://www.seoulmetro.co.kr/en/cyberStation.do?menuIdx=337" target="_blank" rel="noopener" style="display:block;margin-top:14px;padding:12px 14px;border-radius:10px;background:#1f6fd6;color:#fff;text-decoration:none;font-weight:700;text-align:center;">Cyber Station in Seoul Metro</a>
      `
    },
    {
      question: "5. Station Facilities",
      answer: `
${facilityCard(ICON_ELEVATOR, "Elevators", facilitySub("Elevator going outside", "Use the elevator near Exit 12 or Exit 10.") + facilitySub("Elevator going down to the platform", "Use the elevator inside the gate next to the restroom."))}
${facilityCard(ICON_TOILET, "Restrooms", '<div style="margin-top:6px;">They are in the passage toward Exits 9 and 10.<br>(Outside the gate)</div>')}
${facilityCard(ICON_LOCKER, "Lockers", '<div style="margin-top:6px;">The lockers are across from the restroom.</div>')}
      `
    },
    {
      question: "6. Other Inquiries",
      answer: `
Press the help call button.
<img class="faq-photo" style="display:block;width:100%;max-width:100%;height:auto;margin:14px 0 18px;border-radius:12px;" src="images/open_gate.jpg" width="1000" height="750" alt="Help call button">
Or<br><br>
Go through the Emergency/Wide Gate and visit the station office (Information) near Exit 11 & 12.
<img class="faq-photo" style="display:block;width:100%;max-width:100%;height:auto;margin:14px 0 18px;border-radius:12px;" src="images/gate.jpg" width="1000" height="750" alt="Emergency/Wide Gate">
      `
    }
  ],

  zh: [
    {
      question: "1. 卡片错误",
      answer: `
<div class="faq-item-row"><span class="faq-num">1)</span><span class="faq-text">进站和出站闸机是分开的。<u>请使用正确的闸机（绿色箭头）。</u></span></div>
<div class="faq-item-row"><span class="faq-num">2)</span><span class="faq-text"><strong>请再次刷卡（无额外费用）。</strong> 刷卡时请确认显示的提示信息，并 <strong><u>选择相应的错误代码。</u></strong></span></div>

<div class="error-buttons">
<button class="error-btn" data-code="E-03">E-03(上次出站未刷卡)</button>
<button class="error-btn" data-code="E-04">E-04(进站时未刷卡)</button>
<button class="error-btn" data-code="E-14">E-14(余额不足)</button>
<button class="error-btn" data-code="E-27">E-27(定期票已过期)</button>
<button class="error-btn" data-code="E-32">E-32(车票不可用)</button>
<button class="error-btn" data-code="E-33">E-33(已处理过进站)</button>
<button class="error-btn" data-code="E-35">E-35(车票已使用)</button>
<button class="error-btn" data-code="E-44">E-44(已处理过出站)</button>
<button class="error-btn" data-code="E-45">E-45(单程票超出里程)</button>
</div>

<div class="error-detail" id="error-detail"></div>
      `,
      errors: {
        "E-03": "上次出站未刷卡。<br><br>请通过 Emergency/Wide Gate，并前往11、12号出口附近的车站办公室（问讯处）咨询。",
        "E-04": "进站时未刷卡。<br><br>请通过 Emergency/Wide Gate，并前往11、12号出口附近的车站办公室（问讯处）咨询。",
        "E-14": "余额不足（金额不足）。<br><br>请使用充值机（在您的左侧或右侧）进行充值，然后再次刷卡出站。",
        "E-27": "定期票已过期。<br><br>请通过 Emergency/Wide Gate，并前往11、12号出口附近的车站办公室（问讯处）咨询。",
        "E-32": "此车票未充值。<br><br>请使用充值机进行充值。",
        "E-33": "已处理过进站（卡片已被标记）。<br><br>请通过 Emergency/Wide Gate（请忽略报警声）。",
        "E-35": "此车票已使用。<br><br>请通过 Emergency/Wide Gate（请忽略报警声）。<br><br>请在押金退还机办理押金退还。",
        "E-44": "已处理过出站（卡片已被标记）。<br><br>请通过 Emergency/Wide Gate（请忽略报警声）。",
        "E-45": "单程票已超出乘车里程。<br><br>请使用充值机进行充值（仅限现金）。"
      }
    },
    {
      question: "2. 我坐错方向了（我想去对面站台）",
      answer: `您可以前往对面再次乘坐地铁。<br>
<div class="faq-item-row"><span class="faq-num"><strong>1)</strong></span><span class="faq-text"><strong>单程票：</strong> 请勿刷卡。请按求助按钮，告知工作人员您想去对面站台。</span></div>
<div class="faq-item-row"><span class="faq-num"><strong>2)</strong></span><span class="faq-text"><strong>T-money卡或Climate Card：</strong> 刷卡出站后，从对面闸机再次刷卡进站。<br>（不产生额外费用，仅计为一次换乘。）</span></div>
      `
    },
    {
      question: "3. 如何换乘3号线",
      answer: `<strong>请不要刷卡。</strong>请下楼并跟随橙色（3号线）标识走。2号线和3号线站台是相连的。<br><br>
如果您只是想乘坐3号线（而非换乘），请在闸机处刷卡，然后下楼跟随橙色（3号线）标识走。`
    },
    {
      question: "4. 地铁线路图",
      answer: `
<strong>Seoul Metro Map（首尔地铁线路图）</strong>
<a href="images/map_english.jpg" target="_blank" rel="noopener"><img class="faq-photo" src="images/map_english.jpg" width="2576" height="2576" alt="Seoul Metro Map" loading="lazy" style="display:block;width:100%;max-width:100%;height:auto;margin:12px 0 8px;border-radius:12px;"></a>
<div style="font-size:0.85em;color:#5b6b7c;">点击地图可放大查看。</div>
<a href="http://www.seoulmetro.co.kr/en/cyberStation.do?menuIdx=337" target="_blank" rel="noopener" style="display:block;margin-top:14px;padding:12px 14px;border-radius:10px;background:#1f6fd6;color:#fff;text-decoration:none;font-weight:700;text-align:center;">前往首尔地铁 Cyber Station</a>
      `
    },
    {
      question: "5. 车站设施位置",
      answer: `
${facilityCard(ICON_ELEVATOR, "电梯", facilitySub("通往站外的电梯", "请使用12号出口、10号出口附近的电梯。") + facilitySub("通往站台的电梯", "请使用洗手间旁边闸机内的电梯。"))}
${facilityCard(ICON_TOILET, "洗手间", '<div style="margin-top:6px;">位于通往9号、10号出口方向的通道内。<br>（闸机外）</div>')}
${facilityCard(ICON_LOCKER, "储物柜", '<div style="margin-top:6px;">在洗手间对面。</div>')}
      `
    },
    {
      question: "6. 其他咨询",
      answer: `
请按求助按钮。
<img class="faq-photo" style="display:block;width:100%;max-width:100%;height:auto;margin:14px 0 18px;border-radius:12px;" src="images/open_gate.jpg" width="1000" height="750" alt="Help call button">
或者<br><br>
请通过 Emergency/Wide Gate，前往11、12号出口附近的车站办公室（问讯处）咨询。
<img class="faq-photo" style="display:block;width:100%;max-width:100%;height:auto;margin:14px 0 18px;border-radius:12px;" src="images/gate.jpg" width="1000" height="750" alt="Emergency/Wide Gate">
      `
    }
  ],

  ja: [
    {
      question: "1. カードエラー",
      answer: `
<div class="faq-item-row"><span class="faq-num">1)</span><span class="faq-text">入場用と退場用のゲートは分かれています。<u>正しいゲート（緑の矢印）を使用してください。</u></span></div>
<div class="faq-item-row"><span class="faq-num">2)</span><span class="faq-text"><strong>もう一度タッチしてください（追加料金なし）。</strong> カードをタッチした際のメッセージを確認し、<strong><u>対応するエラーコードを選択してください。</u></strong></span></div>

<div class="error-buttons">
<button class="error-btn" data-code="E-03">E-03(下車処理未完了)</button>
<button class="error-btn" data-code="E-04">E-04(乗車処理未完了)</button>
<button class="error-btn" data-code="E-14">E-14(残高不足)</button>
<button class="error-btn" data-code="E-27">E-27(定期券期限切れ)</button>
<button class="error-btn" data-code="E-32">E-32(利用不可のきっぷ)</button>
<button class="error-btn" data-code="E-33">E-33(既に乗車処理済み)</button>
<button class="error-btn" data-code="E-35">E-35(使用済みのきっぷ)</button>
<button class="error-btn" data-code="E-44">E-44(既に下車処理済み)</button>
<button class="error-btn" data-code="E-45">E-45(1回券の区間超過)</button>
</div>

<div class="error-detail" id="error-detail"></div>
      `,
      errors: {
        "E-03": "下車処理がされていません。<br><br>Emergency/Wide Gate を通り、11・12番出口付近の駅務室（Information）にお越しください。",
        "E-04": "乗車処理がされていません。<br><br>Emergency/Wide Gate を通り、11・12番出口付近の駅務室（Information）にお越しください。",
        "E-14": "残高不足（お金が足りません）。<br><br>左右にある精算機でチャージし、再度カードをタッチして出てください。",
        "E-27": "定期券の期限切れです。<br><br>Emergency/Wide Gate を通り、11・12番出口付近の駅務室（Information）にお越しください。",
        "E-32": "このきっぷはチャージされていません。<br><br>精算機でチャージしてください。",
        "E-33": "既に乗車処理済みです（既にタッチされています）。<br><br>Emergency/Wide Gate を通ってください（音が鳴っても無視してください）。",
        "E-35": "このきっぷは既に使用済みです。<br><br>Emergency/Wide Gate を通ってください（音が鳴っても無視してください）。<br><br>デポジットはデポジット返金機で払い戻してください。",
        "E-44": "既に下車処理済みです（既にタッチされています）。<br><br>Emergency/Wide Gate を通ってください（音が鳴っても無視してください）。",
        "E-45": "1回券の利用区間を超えています。<br><br>精算機でチャージしてください（現金のみ）。"
      }
    },
    {
      question: "2. 反対方向に乗ってしまいました（反対側に行きたいです）",
      answer: `反対側に移動して再度地下鉄に乗ることができます。<br>
<div class="faq-item-row"><span class="faq-num"><strong>1)</strong></span><span class="faq-text"><strong>1回券の場合：</strong> カードをタッチしないでください。ヘルプコールボタンを押し、反対側に移動したい旨を伝えてください。</span></div>
<div class="faq-item-row"><span class="faq-num"><strong>2)</strong></span><span class="faq-text"><strong>T-moneyまたはClimate Card：</strong> 一度タッチして出場し、反対側のゲートから再度タッチして入場してください。<br>（追加料金なし、乗り換え1回としてカウントされます。）</span></div>
      `
    },
    {
      question: "3. 3号線への乗り換え方法",
      answer: `<strong>カードをタッチしないでください。</strong>階段を降りて、オレンジ色の3号線の標識に従ってください。2号線と3号線のホームはつながっています。<br><br>
乗り換えではなく、3号線から利用を開始する場合は、ゲートでカードをタッチして入場し、階段を降りてオレンジ色の3号線の標識に従ってください。`
    },
    {
      question: "4. 路線図",
      answer: `
<strong>Seoul Metro Map（ソウル地下鉄路線図）</strong>
<a href="images/map_english.jpg" target="_blank" rel="noopener"><img class="faq-photo" src="images/map_english.jpg" width="2576" height="2576" alt="Seoul Metro Map" loading="lazy" style="display:block;width:100%;max-width:100%;height:auto;margin:12px 0 8px;border-radius:12px;"></a>
<div style="font-size:0.85em;color:#5b6b7c;">地図をタップすると大きく表示されます。</div>
<a href="http://www.seoulmetro.co.kr/en/cyberStation.do?menuIdx=337" target="_blank" rel="noopener" style="display:block;margin-top:14px;padding:12px 14px;border-radius:10px;background:#1f6fd6;color:#fff;text-decoration:none;font-weight:700;text-align:center;">ソウルメトロ Cyber Station を開く</a>
      `
    },
    {
      question: "5. 駅の設備の場所",
      answer: `
${facilityCard(ICON_ELEVATOR, "エレベーター", facilitySub("地上（外）に出るエレベーター", "12番出口、10番出口付近のエレベーターをご利用ください。") + facilitySub("ホームに降りるエレベーター", "トイレ横のゲート内にあるエレベーターをご利用ください。"))}
${facilityCard(ICON_TOILET, "トイレ", '<div style="margin-top:6px;">9番・10番出口方面の通路にあります。<br>（ゲートの外）</div>')}
${facilityCard(ICON_LOCKER, "ロッカー", '<div style="margin-top:6px;">トイレの向かい側にあります。</div>')}
      `
    },
    {
      question: "6. その他のお問い合わせ",
      answer: `
ヘルプコールボタンを押してください。
<img class="faq-photo" style="display:block;width:100%;max-width:100%;height:auto;margin:14px 0 18px;border-radius:12px;" src="images/open_gate.jpg" width="1000" height="750" alt="Help call button">
または<br><br>
Emergency/Wide Gate を通り、11・12番出口付近の駅務室（Information）にお越しください。
<img class="faq-photo" style="display:block;width:100%;max-width:100%;height:auto;margin:14px 0 18px;border-radius:12px;" src="images/gate.jpg" width="1000" height="750" alt="Emergency/Wide Gate">
      `
    }
  ],

  es: [
    {
      question: "1. Errores de tarjeta",
      answer: `
<div class="faq-item-row"><span class="faq-num">1)</span><span class="faq-text">Hay dos puertas separadas para la entrada y la salida. <u>Use la puerta correcta (flecha verde).</u></span></div>
<div class="faq-item-row"><span class="faq-num">2)</span><span class="faq-text"><strong>Pase su tarjeta de nuevo (Sin costo adicional).</strong> Verifique el mensaje al tocar su tarjeta y <strong><u>seleccione el código de error correspondiente.</u></strong></span></div>

<div class="error-buttons">
<button class="error-btn" data-code="E-03">E-03(Sin registro de salida)</button>
<button class="error-btn" data-code="E-04">E-04(Sin registro de entrada)</button>
<button class="error-btn" data-code="E-14">E-14(Saldo insuficiente)</button>
<button class="error-btn" data-code="E-27">E-27(Pase de transporte vencido)</button>
<button class="error-btn" data-code="E-32">E-32(Boleto no disponible)</button>
<button class="error-btn" data-code="E-33">E-33(Ya registrado entrada)</button>
<button class="error-btn" data-code="E-35">E-35(Boleto ya utilizado)</button>
<button class="error-btn" data-code="E-44">E-44(Ya registrado salida)</button>
<button class="error-btn" data-code="E-45">E-45(Distancia excedida)</button>
</div>

<div class="error-detail" id="error-detail"></div>
      `,
      errors: {
        "E-03": "El boleto no tiene registro de salida.<br><br>Pase por Emergency/Wide Gate y visite la oficina de la estación (Información) cerca de las salidas 11 y 12.",
        "E-04": "El boleto no tiene registro de entrada.<br><br>Pase por Emergency/Wide Gate y visite la oficina de la estación (Información) cerca de las salidas 11 y 12.",
        "E-14": "Saldo insuficiente (No hay suficiente dinero).<br><br>Use la máquina (a su izquierda o derecha) para recargar y toque la tarjeta nuevamente para salir.",
        "E-27": "Pase de transporte vencido.<br><br>Pase por Emergency/Wide Gate y visite la oficina de la estación (Información) cerca de las salidas 11 y 12.",
        "E-32": "Este boleto no ha sido cargado.<br><br>Use la máquina de boletos para cargarlo.",
        "E-33": "Entrada ya procesada (La tarjeta ya ha sido registrada).<br><br>Pase por Emergency/Wide Gate (Ignore el sonido de la alarma).",
        "E-35": "Este boleto ya fue utilizado.<br><br>Pase por Emergency/Wide Gate (Ignore el sonido de la alarma).<br><br>Recupere su depósito en la máquina de depósitos.",
        "E-44": "Salida ya procesada (La tarjeta ya ha sido registrada).<br><br>Pase por Emergency/Wide Gate (Ignore el sonido de la alarma).",
        "E-45": "Se excedió la distancia de este boleto de un solo viaje.<br><br>Use la máquina de boletos para recargar (solo efectivo)."
      }
    },
    {
      question: "2. Me equivoqué de dirección (Quiero ir al lado opuesto)",
      answer: `Puede ir al lado opuesto para tomar el metro de regreso.<br>
<div class="faq-item-row"><span class="faq-num"><strong>1)</strong></span><span class="faq-text"><strong>Boleto de un solo viaje:</strong> No toque la tarjeta. Presione el botón de ayuda y diga que quiere ir al lado opuesto.</span></div>
<div class="faq-item-row"><span class="faq-num"><strong>2)</strong></span><span class="faq-text"><strong>Tarjeta T-money o Climate Card:</strong> Pase la tarjeta para salir, luego pase de nuevo desde la puerta opuesta para entrar.<br>(Sin cargo adicional, solo se cuenta un transbordo).</span></div>
      `
    },
    {
      question: "3. Cómo transbordar a la Línea 3",
      answer: `<strong>No toque su tarjeta.</strong> Baje las escaleras y siga las señales naranjas de la Línea 3. Las plataformas de la Línea 2 y la Línea 3 están conectadas.<br><br>
Si solo desea iniciar su viaje en la Línea 3 (sin transbordo), toque su tarjeta en la puerta, baje las escaleras y siga las señales naranjas de la Línea 3.`
    },
    {
      question: "4. Mapa del metro",
      answer: `
<strong>Seoul Metro Map (Mapa del metro de Seúl)</strong>
<a href="images/map_english.jpg" target="_blank" rel="noopener"><img class="faq-photo" src="images/map_english.jpg" width="2576" height="2576" alt="Seoul Metro Map" loading="lazy" style="display:block;width:100%;max-width:100%;height:auto;margin:12px 0 8px;border-radius:12px;"></a>
<div style="font-size:0.85em;color:#5b6b7c;">Toque el mapa para verlo más grande.</div>
<a href="http://www.seoulmetro.co.kr/en/cyberStation.do?menuIdx=337" target="_blank" rel="noopener" style="display:block;margin-top:14px;padding:12px 14px;border-radius:10px;background:#1f6fd6;color:#fff;text-decoration:none;font-weight:700;text-align:center;">Abrir Cyber Station de Seoul Metro</a>
      `
    },
    {
      question: "5. Instalaciones de la estación",
      answer: `
${facilityCard(ICON_ELEVATOR, "Ascensores", facilitySub("Ascensor para salir al exterior", "Use el ascensor cerca de la Salida 12 o la Salida 10.") + facilitySub("Ascensor para bajar al andén", "Use el ascensor que está dentro de la puerta junto a los baños."))}
${facilityCard(ICON_TOILET, "Baños", '<div style="margin-top:6px;">Están en el pasillo hacia las Salidas 9 y 10.<br>(Fuera de la puerta)</div>')}
${facilityCard(ICON_LOCKER, "Casilleros", '<div style="margin-top:6px;">Los casilleros están frente a los baños.</div>')}
      `
    },
    {
      question: "6. Otras consultas",
      answer: `
Presione el botón de ayuda.
<img class="faq-photo" style="display:block;width:100%;max-width:100%;height:auto;margin:14px 0 18px;border-radius:12px;" src="images/open_gate.jpg" width="1000" height="750" alt="Help call button">
O<br><br>
Pase por Emergency/Wide Gate y visite la oficina de la estación (Información) cerca de las salidas 11 y 12.
<img class="faq-photo" style="display:block;width:100%;max-width:100%;height:auto;margin:14px 0 18px;border-radius:12px;" src="images/gate.jpg" width="1000" height="750" alt="Emergency/Wide Gate">
      `
    }
  ]
};

// --- 화면 가운데로 부드럽게 스크롤 (요소가 화면보다 길면 맨 위 기준) ---
function scrollToCenter(element) {
  const isTall = element.offsetHeight > window.innerHeight;
  element.scrollIntoView({ behavior: 'smooth', block: isTall ? 'start' : 'center' });
}

// --- 게이트 사진을 보여줄 에러코드 (사진 파일은 index.html과 같은 위치의 images 폴더에 있어야 함) ---
const GATE_PHOTO_CODES = ["E-03", "E-04", "E-33", "E-35", "E-44"];

// --- 에러코드 버튼 선택 표시 (선택되면 파란색, 해제하면 원래 색) ---
function setErrorBtnSelected(btn, selected) {
  btn.style.backgroundColor = selected ? "#004c97" : "";
  btn.style.color = selected ? "#ffffff" : "";
  btn.style.borderColor = selected ? "#004c97" : "";
}

// --- 뒤로가기 버튼 문구 (선택한 언어에 맞게 표시) ---
const backText = {
  ko: '뒤로가기',
  en: 'Go Back',
  zh: '返回',
  ja: '戻る',
  es: 'Volver'
};

// --- 현재 역 정보 (다른 역에 쓸 때는 아래 번호와 문구만 바꾸면 됨) ---
const STATION_NUMBER = "203";
const stationText = {
  ko: '현재 역은 <strong>을지로3가</strong> 2호선입니다',
  en: 'You are now at <strong>Euljiro-3(sam)ga</strong>, Line&nbsp;2',
  zh: '您现在位于 2号线 <strong>乙支路3街站</strong>',
  ja: '現在地は 2号線 <strong>乙支路3街(ウルチロサムガ)駅</strong> です',
  es: 'Usted está ahora en <strong>Euljiro-3(sam)ga</strong>, Línea&nbsp;2'
};

function createStationBanner(language) {
  const text = stationText[language];
  if (!text) return null;

  const banner = document.createElement("div");
  banner.style.textAlign = "center";
  banner.style.padding = "18px 12px";
  banner.style.margin = "0 0 20px";
  banner.style.background = "linear-gradient(135deg, #eef6ff 0%, #ffffff 100%)";
  banner.style.border = "1.5px solid #cfe0f2";
  banner.style.borderRadius = "16px";
  banner.style.boxShadow = "0 4px 12px rgba(0, 76, 151, 0.08)";

  const label = document.createElement("div");
  label.innerHTML = text;
  label.style.fontSize = "17px";
  label.style.fontWeight = "600";
  label.style.lineHeight = "1.6";
  label.style.color = "#004c97";
  label.style.marginBottom = "12px";

  // 2호선 초록색 원 안에 역 번호 표시
  const badge = document.createElement("div");
  badge.textContent = STATION_NUMBER;
  badge.style.display = "inline-flex";
  badge.style.alignItems = "center";
  badge.style.justifyContent = "center";
  badge.style.width = "60px";
  badge.style.height = "60px";
  badge.style.borderRadius = "50%";
  badge.style.backgroundColor = "#00a84d";
  badge.style.color = "#ffffff";
  badge.style.fontSize = "24px";
  badge.style.fontWeight = "800";
  badge.style.border = "3px solid #ffffff";
  badge.style.boxShadow = "0 0 0 2px #00a84d, 0 4px 10px rgba(0, 0, 0, 0.15)";

  banner.appendChild(label);
  banner.appendChild(badge);
  return banner;
}

// --- 언어 선택 및 로직 (기존 스크롤 기능 유지) ---
// 일본어: 문단 끝 글자가 혼자 다음 줄로 넘어가지 않도록, 문단 마지막 6글자를 한 덩어리로 묶음
function keepJapaneseEnding(html) {
  return html
    .split("<br><br>")
    .map(par => {
      const chars = Array.from(par);
      if (chars.length <= 12) return par; // 짧은 문단은 그대로
      const head = chars.slice(0, -6).join("");
      const tail = chars.slice(-6).join("");
      return head + '<span style="white-space:nowrap">' + tail + "</span>";
    })
    .join("<br><br>");
}

function selectLanguage(language) {
  const languageSelector = document.getElementById("language-selector");
  const faqContainer = document.getElementById("faq-container");
  const backButtonContainer = document.getElementById("back-button-container");

  const selectedFAQ = faqContent[language];
  if (!selectedFAQ) { alert("선택한 언어의 FAQ가 준비되지 않았습니다."); return; }

  languageSelector.style.display = "none";
  faqContainer.style.display = "block";
  backButtonContainer.style.display = "block";

  const backBtn = backButtonContainer.querySelector(".back-btn");
  if (backBtn && backText[language]) backBtn.textContent = backText[language];

  faqContainer.innerHTML = "";
  faqContainer.setAttribute("lang", language);

  // 1번 메뉴 위에 현재 역 안내 표시
  const stationBanner = createStationBanner(language);
  if (stationBanner) faqContainer.appendChild(stationBanner);

  selectedFAQ.forEach(faq => {
    const faqItem = document.createElement("div");
    faqItem.className = "faq-item";

    const questionBtn = document.createElement("button");
    questionBtn.className = "faq-question";
    // 중국어·일본어는 글꼴에 따라 600 굵기가 얇게 보일 수 있어, 확실하게 굵은 글씨(700)로 지정
    if (language === "zh" || language === "ja") questionBtn.style.fontWeight = "700";
    questionBtn.innerHTML = faq.question;

    const answerDiv = document.createElement("div");
    answerDiv.className = "faq-answer";
    answerDiv.style.display = "none";
    answerDiv.innerHTML = faq.answer;

    // 기존의 빈 상세 칸(#error-detail)은 더 이상 쓰지 않으므로 숨김
    const oldDetail = answerDiv.querySelector("#error-detail");
    if (oldDetail) oldDetail.style.display = "none";

    // 에러코드 버튼 세로 배치 + 각 버튼 바로 아래에 상세 내용 자리 만들기 (한 번만 설정)
    answerDiv.querySelectorAll(".error-btn").forEach(btn => {
      btn.style.display = "block";
      btn.style.width = "100%";
      btn.style.padding = "10px";
      btn.style.margin = "5px 0";
      btn.style.textAlign = "left";

      // 영어·스페인어: 버튼 문구가 길어 두 줄이 되면 괄호 부분 전체를 둘째 줄로 내림
      // (괄호 부분 글자를 화면 폭에 맞춰 줄여서 세 줄까지 넘어가지 않게 함)
      if (language === "en" || language === "es") {
        const label = btn.textContent;
        const p = label.indexOf("(");
        if (p > 0) {
          btn.textContent = label.slice(0, p) + " ";
          const sub = document.createElement("span");
          sub.textContent = label.slice(p);
          sub.style.display = "inline-block";
          sub.style.fontWeight = "600";
          sub.style.lineHeight = "1.3";
          sub.style.fontSize = "13px";
          sub.style.fontSize = "min(14px, calc((90vw - 115px) / 16))";
          btn.appendChild(sub);
        }
      }

      const detailDiv = document.createElement("div");
      detailDiv.className = "error-detail-item";
      detailDiv.style.display = "none";
      detailDiv.style.margin = "6px 0 14px";
      detailDiv.style.padding = "16px";
      detailDiv.style.fontWeight = "600";
      detailDiv.style.fontSize = "16px";
      detailDiv.style.lineHeight = "1.7";
      detailDiv.style.color = "#222";
      detailDiv.style.backgroundColor = "#ffffff";
      detailDiv.style.border = "2px solid #004c97";
      detailDiv.style.borderRadius = "12px";
      detailDiv.style.boxShadow = "0 4px 12px rgba(0, 76, 151, 0.15)";
      btn.after(detailDiv);

      btn.onclick = () => {
        const code = btn.getAttribute("data-code");
        const willOpen = detailDiv.style.display !== "block";

        // 다른 에러코드 상세는 모두 접고, 선택 표시(파란색)도 모두 해제
        answerDiv.querySelectorAll(".error-detail-item").forEach(d => d.style.display = "none");
        answerDiv.querySelectorAll(".error-btn").forEach(b => setErrorBtnSelected(b, false));

        if (willOpen && faq.errors) {
          const detailHtml = faq.errors[code] || "";
          detailDiv.innerHTML = language === "ja" ? keepJapaneseEnding(detailHtml) : detailHtml;
          // 비상게이트 안내가 나가는 에러코드는 설명 맨 끝에 게이트 사진 추가
          if (GATE_PHOTO_CODES.includes(code)) {
            detailDiv.innerHTML += '<img class="faq-photo" style="display:block;width:100%;max-width:100%;height:auto;margin:14px 0 18px;border-radius:12px;" src="images/gate.jpg" width="1000" height="750" alt="Emergency/Wide Gate">';
          }
          detailDiv.style.display = "block";
          setErrorBtnSelected(btn, true);
          scrollToCenter(detailDiv);
        }
      };
    });

    questionBtn.addEventListener("click", () => {
      const willOpen = answerDiv.style.display !== "block";

      // 다른 메뉴 답변은 모두 접기 (열려 있던 에러코드 상세도 함께 초기화)
      faqContainer.querySelectorAll(".faq-answer").forEach(a => {
        a.style.display = "none";
        a.querySelectorAll(".error-detail-item").forEach(d => d.style.display = "none");
        a.querySelectorAll(".error-btn").forEach(b => setErrorBtnSelected(b, false));
      });

      // 눌린 메뉴가 닫혀 있었다면 열고 화면 가운데로 이동
      if (willOpen) {
        answerDiv.style.display = "block";

        // 답변이 길어서 가운데에 두면 질문 제목이 화면 밖으로 잘리는 경우에는, 제목이 위에 오도록 이동
        const limit = window.innerHeight - 2 * (questionBtn.offsetHeight + 20);
        if (answerDiv.offsetHeight > limit) {
          questionBtn.style.scrollMarginTop = "20px";
          questionBtn.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
          scrollToCenter(answerDiv);
        }
      }
    });

    faqItem.appendChild(questionBtn);
    faqItem.appendChild(answerDiv);
    faqContainer.appendChild(faqItem);
  });
}

// --- 뒤로가기 ---
function goBack() {
  document.getElementById("language-selector").style.display = "block";
  document.getElementById("faq-container").style.display = "none";
  document.getElementById("back-button-container").style.display = "none";
}
