// --- 다국어 FAQ 데이터 ---
const faqContent = {
  ko: [
    {
      question: "1. 카드 오류",
      answer: `
1) 나가는 게이트와 들어오는 게이트가 서로 다릅니다. 알맞은 게이트(초록색 화살표)를 이용하세요.<br>
2) 카드를 찍어서 나오는 메시지를 확인하시고, 해당되는 에러코드를 선택하세요.<br><br>

<div class="error-buttons">
<button class="error-btn" data-code="E-03">E-03</button>
<button class="error-btn" data-code="E-04">E-04</button>
<button class="error-btn" data-code="E-05">E-05</button>
<button class="error-btn" data-code="E-07">E-07</button>
<button class="error-btn" data-code="E-14">E-14</button>
<button class="error-btn" data-code="E-27">E-27</button>
<button class="error-btn" data-code="E-33">E-33</button>
<button class="error-btn" data-code="E-44">E-44</button>
</div>

<div class="error-detail" id="error-detail"></div>
      `,
      errors: {
        "E-03": "집표가 안된 카드입니다.<br>비상게이트(휠체어게이트)를 통과하셔서 11번, 12번 출구 쪽에있는 역무실(Information)에 문의하세요.",
        "E-04": "개표가 안된 카드.<br>비상게이트(휠체어게이트)를 통과하셔서 11번, 12번 출구 쪽에있는 역무실(Information)에 문의하세요.",
        "E-05": "이용시간 초과.<br>비상게이트(휠체어게이트)를 통과하셔서 11번, 12번 출구 쪽에있는 역무실(Information)에 문의하세요.",
        "E-07": "카드 유효기간 경과.<br>비상게이트(휠체어게이트)를 통과하셔서 11번, 12번 출구 쪽에있는 역무실(Information)에 문의하세요.",
        "E-14": "잔액 부족. 정산기 이용 후 카드 다시 찍고 나가세요.",
        "E-27": "정기권 기간만료.<br>비상게이트(휠체어게이트)를 통과하셔서 11번, 12번 출구 쪽에있는 역무실(Information)에 문의하세요.",
        "E-33": "이미 개표된 카드입니다.<br>비상게이트를 지나가세요(소리가 나도 무시하세요)",
        "E-44": "이미 집표된 카드입니다.<br>비상게이트를 지나가세요(소리가 나도 무시하세요)"
      }
    },
    {
      question: "2. 방향을 잘못 탔어요",
      answer: `
1) 1회권인 경우:<br>헬프콜 버튼을 누르세요.<br><br>
2) 티머니카드 또는 Climate Card인 경우:<br>
카드를 찍고 나가시고, 반대편 게이트에서 카드를 찍고 들어가세요.<br>(추가 요금 없음, 환승 1회만 차감)
      `
    },
    {
      question: "3. 3호선으로 환승하고 싶어요",
      answer: `카드를 찍지 마시고, 계단을 내려가셔서 주황색(3호선) 라인을 따라 쭉 걸어가세요.`
    },
    {
      question: "4. 기타 문의",
      answer: `
헬프콜 버튼을 누르세요.<br><br>
또는<br><br>
비상게이트(휠체어게이트)를 통과하셔서 11번, 12번 출구 쪽에있는 역무실(Information)에 문의하세요.
      `
    }
  ],

  en: [
    {
      question: "1. Card Errors",
      answer: `
1) There are two different gates for entry and exit. Please use the correct gate (green arrow).<br>
2) Check the message when tapping your card and select the corresponding error code.<br><br>

<div class="error-buttons">
<button class="error-btn" data-code="E-03">E-03</button>
<button class="error-btn" data-code="E-04">E-04</button>
<button class="error-btn" data-code="E-05">E-05</button>
<button class="error-btn" data-code="E-07">E-07</button>
<button class="error-btn" data-code="E-14">E-14</button>
<button class="error-btn" data-code="E-27">E-27</button>
<button class="error-btn" data-code="E-33">E-33</button>
<button class="error-btn" data-code="E-44">E-44</button>
</div>

<div class="error-detail" id="error-detail"></div>
      `,
      errors: {
        "E-03": "Ticketing has not been applied.<br>Go through the emergency gate (wheelchair gate) and contact the station office near Exit 11.",
        "E-04": "Ticket has not been validated.<br>Go through the emergency gate and contact the station office near Exit 11.",
        "E-05": "Time exceeded.<br>Go through the emergency gate and contact the station office near Exit 11.",
        "E-07": "Card expired.<br>Go through the emergency gate and contact the station office near Exit 11.",
        "E-14": "Insufficient balance.<br>Use the fare adjustment machine(on your left or right) and tap the card again to exit.",
        "E-27": "Commuter pass expired.<br>Go through the emergency gate and contact the station office near Exit 11.",
        "E-33": "Card has already been tagged.<br>Pass through the emergency gate even if it beeps.",
        "E-44": "Card has already been tagged.<br>Pass through the emergency gate even if it beeps."
      }
    },
    {
      question: "2. I went the wrong way",
      answer: `
1) Single-way ticket: Press the help call button.<br><br>
2) T-money or Climate Card: Tap to exit, then enter again from the opposite gate.<br>(No extra fare, only one transfer counted.)
      `
    },
    {
      question: "3. How to transfer to Line 3",
      answer: `Do not tap your card. Go down the stairs and follow the orange Line 3 signs. Line  2 and Line 3 platforms are connected`
    },
    {
      question: "4. Other Inquiries",
      answer: `
Press the help call button.<br><br>
Or<br><br>
Go through the emergency gate and contact the station office near Exit 11.
      `
    }
  ],

  zh: [
    {
      question: "1. 卡片错误",
      answer: `
1) 出入口有两个不同的门，请使用正确的门（绿色箭头）。<br>
2) 点击您的卡片时，请查看信息并选择相应的错误代码。<br><br>

<div class="error-buttons">
<button class="error-btn" data-code="E-03">E-03</button>
<button class="error-btn" data-code="E-04">E-04</button>
<button class="error-btn" data-code="E-05">E-05</button>
<button class="error-btn" data-code="E-07">E-07</button>
<button class="error-btn" data-code="E-14">E-14</button>
<button class="error-btn" data-code="E-27">E-27</button>
<button class="error-btn" data-code="E-33">E-33</button>
<button class="error-btn" data-code="E-44">E-44</button>
</div>

<div class="error-detail" id="error-detail"></div>
      `,
      errors: {
        "E-03": "未应用票务。<br>通过紧急门（轮椅门）并联系11号出口附近的车站办公室。",
        "E-04": "票未验证。<br>通过紧急门并联系11号出口附近的车站办公室。",
        "E-05": "超时。<br>通过紧急门并联系11号出口附近的车站办公室。",
        "E-07": "卡片已过期。<br>通过紧急门并联系11号出口附近的车站办公室。",
        "E-14": "余额不足。<br>使用车费调整机（左侧或右侧）并再次点击卡片以退出。",
        "E-27": "通勤卡过期。<br>通过紧急门并联系11号出口附近的车站办公室。",
        "E-33": "卡片已标记。<br>即使有哔哔声，也可以通过紧急门。",
        "E-44": "卡片已标记。<br>即使有哔哔声，也可以通过紧急门。"
      }
    },
    {
      question: "2. 我走错路了",
      answer: `
1) 单程票：按帮助呼叫按钮。<br><br>
2) T-money或气候卡：点击退出后，再从相反的门进入。<br>（无额外费用，仅算作一次换乘。）
      `
    },
    {
      question: "3. 如何换乘到3号线",
      answer: `不要点击卡片。下楼后，跟随橙色的3号线标志。2号线和3号线平台是连接的`
    },
    {
      question: "4. 其他咨询",
      answer: `
按帮助呼叫按钮。<br><br>
或者<br><br>
通过紧急门并联系11号出口附近的车站办公室。
      `
    }
  ],

  ja: [
    {
      question: "1. カードエラー",
      answer: `
1) 入口と出口には2つの異なるゲートがあります。正しいゲート（緑の矢印）を使用してください。<br>
2) カードをタップした際のメッセージを確認し、対応するエラーコードを選択してください。<br><br>

<div class="error-buttons">
<button class="error-btn" data-code="E-03">E-03</button>
<button class="error-btn" data-code="E-04">E-04</button>
<button class="error-btn" data-code="E-05">E-05</button>
<button class="error-btn" data-code="E-07">E-07</button>
<button class="error-btn" data-code="E-14">E-14</button>
<button class="error-btn" data-code="E-27">E-27</button>
<button class="error-btn" data-code="E-33">E-33</button>
<button class="error-btn" data-code="E-44">E-44</button>
</div>

<div class="error-detail" id="error-detail"></div>
      `,
      errors: {
        "E-03": "チケットが適用されていません。<br>緊急ゲート（車椅子ゲート）を通り、11番出口付近の駅事務所に連絡してください。",
        "E-04": "チケットが検証されていません。<br>緊急ゲートを通り、11番出口付近の駅事務所に連絡してください。",
        "E-05": "時間が超過しました。<br>緊急ゲートを通り、11番出口付近の駅事務所に連絡してください。",
        "E-07": "カードの有効期限が切れました。<br>緊急ゲートを通り、11番出口付近の駅事務所に連絡してください。",
        "E-14": "残高不足。<br>運賃調整機（左または右にあります）を使用し、もう一度カードをタップして出口してください。",
        "E-27": "定期券が期限切れです。<br>緊急ゲートを通り、11番出口付近の駅事務所に連絡してください。",
        "E-33": "カードがすでにタッチされました。<br>ビープ音が鳴っても、緊急ゲートを通ってください。",
        "E-44": "カードがすでにタッチされました。<br>ビープ音が鳴っても、緊急ゲートを通ってください。"
      }
    },
    {
      question: "2. 道を間違えました",
      answer: `
1) 片道切符：ヘルプコールボタンを押してください。<br><br>
2) T-moneyまたは気候カード：カードをタップして出口し、反対側のゲートから再度入場してください。<br>（追加料金はなし、1回の乗り換えとしてカウントされます。）
      `
    },
    {
      question: "3. 3号線に乗り換える方法",
      answer: `カードをタップしないでください。階段を降りて、オレンジ色の3号線の標識に従ってください。2号線と3号線のプラットフォームはつながっています。`
    },
    {
      question: "4. その他のお問い合わせ",
      answer: `
ヘルプコールボタンを押してください。<br><br>
または<br><br>
緊急ゲートを通り、11番出口付近の駅事務所に連絡してください。
      `
    }
  ],

  es: [
    {
      question: "1. Errores de tarjeta",
      answer: `
1) Hay dos puertas diferentes para la entrada y la salida. Por favor, use la puerta correcta (flecha verde).<br>
2) Verifique el mensaje al tocar su tarjeta y seleccione el código de error correspondiente.<br><br>

<div class="error-buttons">
<button class="error-btn" data-code="E-03">E-03</button>
<button class="error-btn" data-code="E-04">E-04</button>
<button class="error-btn" data-code="E-05">E-05</button>
<button class="error-btn" data-code="E-07">E-07</button>
<button class="error-btn" data-code="E-14">E-14</button>
<button class="error-btn" data-code="E-27">E-27</button>
<button class="error-btn" data-code="E-33">E-33</button>
<button class="error-btn" data-code="E-44">E-44</button>
</div>

<div class="error-detail" id="error-detail"></div>
      `,
      errors: {
        "E-03": "El boleto no se ha aplicado. <br> Pase por la puerta de emergencia (puerta para sillas de ruedas) y comuníquese con la oficina de la estación cerca de la salida 11.",
        "E-04": "El boleto no ha sido validado. <br> Pase por la puerta de emergencia y comuníquese con la oficina de la estación cerca de la salida 11.",
        "E-05": "Se ha excedido el tiempo. <br> Pase por la puerta de emergencia y comuníquese con la oficina de la estación cerca de la salida 11.",
        "E-07": "La tarjeta ha expirado. <br> Pase por la puerta de emergencia y comuníquese con la oficina de la estación cerca de la salida 11.",
        "E-14": "Saldo insuficiente. <br> Use la máquina de ajuste de tarifas (a su izquierda o derecha) y toque nuevamente la tarjeta para salir.",
        "E-27": "El pase de transporte ha expirado. <br> Pase por la puerta de emergencia y comuníquese con la oficina de la estación cerca de la salida 11.",
        "E-33": "La tarjeta ya ha sido registrada. <br> Pase por la puerta de emergencia, aunque suene la alarma.",
        "E-44": "La tarjeta ya ha sido registrada. <br> Pase por la puerta de emergencia, aunque suene la alarma."
      }
    },
    {
      question: "2. Me equivoqué de dirección",
      answer: `
1) Boleto de ida: presione el botón de ayuda.<br><br>
2) Tarjeta T-money o Climate Card: toque para salir, luego ingrese nuevamente desde la puerta opuesta.<br>(No se cobrará un cargo adicional, solo se contará como una transferencia.)
      `
    },
    {
      question: "3. ¿Cómo hacer transbordo a la línea 3?",
      answer: `No toque su tarjeta. Baje las escaleras y siga las señales de la línea 3 (naranja). Las plataformas de la línea 2 y la línea 3 están conectadas.`
    },
    {
      question: "4. Otras consultas",
      answer: `
Presione el botón de ayuda.<br><br>
O<br><br>
Pase por la puerta de emergencia y comuníquese con la oficina de la estación cerca de la salida 11.
      `
    }
  ]
};

// --- 언어 선택 ---
function selectLanguage(language) {
  const languageSelector = document.getElementById("language-selector");
  const faqContainer = document.getElementById("faq-container");
  const backButtonContainer = document.getElementById("back-button-container");

  const selectedFAQ = faqContent[language];
  if (!selectedFAQ) { alert("선택한 언어의 FAQ가 준비되지 않았습니다."); return; }

  languageSelector.style.display = "none";
  faqContainer.style.display = "block";
  backButtonContainer.style.display = "block";

  faqContainer.innerHTML = "";

  selectedFAQ.forEach(faq => {
    const faqItem = document.createElement("div");
    faqItem.className = "faq-item";

    const questionBtn = document.createElement("button");
    questionBtn.className = "faq-question";
    questionBtn.innerHTML = faq.question;

    const answerDiv = document.createElement("div");
    answerDiv.className = "faq-answer";
    answerDiv.style.display = "none";
    answerDiv.innerHTML = faq.answer;

    questionBtn.addEventListener("click", () => {
      answerDiv.style.display = answerDiv.style.display === "block" ? "none" : "block";

      // 에러코드 버튼 세로 배치 + 클릭 시 상세 내용 표시 + 스크롤 이동
      const errorButtons = answerDiv.querySelectorAll(".error-btn");
      const errorDetailDiv = answerDiv.querySelector("#error-detail");
      errorButtons.forEach(btn => {
        btn.style.display = "block";
        btn.style.width = "100%";
        btn.style.padding = "10px";
        btn.style.margin = "5px 0";
        btn.onclick = () => {
          const code = btn.getAttribute("data-code");
          if (faq.errors && errorDetailDiv) {
            errorDetailDiv.innerHTML = faq.errors[code] || "";
            errorDetailDiv.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        };
      });
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