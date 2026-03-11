// --- 다국어 FAQ 데이터 ---
const faqContent = {
  ko: [
    {
      question: "1. 카드 오류",
      answer: `
1) 나가는 게이트와 들어오는 게이트가 서로 다릅니다. 알맞은 게이트(초록색 화살표)를 이용하세요.<br><br>
2) 카드를 찍어서 나오는 메시지를 확인하시고, 해당되는 에러코드를 선택하세요.<br>
*추가요금 발생하지 않음.
<br><br>

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
        "E-03": "집표가 안된 카드입니다(하차 처리 안된 카드).<br>비상게이트(휠체어게이트)를 통과하셔서 11번, 12번 출구 쪽에있는 역무실(Information)에 문의하세요.",
        "E-04": "개표가 안된 카드(승차 처리 안된 카드).<br>비상게이트(휠체어게이트)를 통과하셔서 11번, 12번 출구 쪽에있는 역무실(Information)에 문의하세요.",
        "E-05": "이용시간 초과.<br>비상게이트(휠체어게이트)를 통과하셔서 11번, 12번 출구 쪽에있는 역무실(Information)에 문의하세요.",
        "E-07": "카드 유효기간 경과.<br>비상게이트(휠체어게이트)를 통과하셔서 11번, 12번 출구 쪽에있는 역무실(Information)에 문의하세요.",
        "E-14": "잔액 부족. 정산기(발매기) 이용하여 충전 후 카드 다시 찍고 나가세요.",
        "E-27": "정기권 기간만료.<br>비상게이트(휠체어게이트)를 통과하셔서 11번, 12번 출구 쪽에있는 역무실(Information)에 문의하세요.",
        "E-33": "이미 개표된 카드입니다(이미 승차 처리된 카드).<br>비상게이트(휠체어게이트)를 지나가세요(소리가 나도 무시하세요)",
        "E-44": "이미 집표된 카드입니다(이미 하차 처리된 카드).<br>비상게이트(휠체어게이트)를 지나가세요(소리가 나도 무시하세요)"
      }
    },
    {
      question: "2. 방향을 잘못 탔어요(역을 지나쳤어요)",
      answer: `
1) 1회권인 경우:<br>헬프콜 버튼을 누른 뒤 반대편으로 건너가고 싶다고 말씀하세요.<br><br>
2) 티머니카드 또는 기후동행카드(Climate Card)인 경우:<br>
카드를 찍고 나가시고, 반대편 게이트에서 카드를 찍고 들어가세요.<br>(추가 요금 없음, 환승 1회만 차감)
      `
    },
    {
      question: "3. 3호선으로 환승하고 싶어요",
      answer: `카드를 찍지 마시고, 계단을 내려가셔서 주황색(3호선) 라인을 따라 쭉 걸어가세요.<br><br>
환승이 아닌 3호선만 이용하고자 하는 경우에는, 카드를 찍고 게이트 안쪽으로 들어간 뒤 계단을 내려가셔서 주황색(3호선) 라인을 따라 쭉 걸어가세요.
`
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
1) There are two separate gates for entry and exit. Please use the correct gate (green arrow).<br>
2) Check the message when tapping your card and select the corresponding error code.<br>
*No extra fare <br><br>

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
        "E-03": "The ticket has not been processed for exit.<br>Go through the emergency gate (wheelchair/speed gate) and visit the station office(Information) near Exit 11 & 12.",
        "E-04": "The ticket has not been processed for entry.<br>Go through the emergency gate (wheelchair/speed gate) and visit the station office(Information) near Exit 11 & 12.",
        "E-05": "Time exceeded.<br>Go through the emergency gate (wheelchair/speed gate) and visit the station office(Information) near Exit 11 & 12.",
        "E-07": "Card expired.<br>Go through the emergency gate (wheelchair/speed gate) and visit the station office(Information) near Exit 11 & 12.",
        "E-14": "Insufficient balance(Not enough money).<br>Use the machine(on your left or right) to recharge(reload) and tap your card again to exit.",
        "E-27": "Commuter pass expired.<br>Go through the emergency gate (wheelchair gate/speed gate) and visit the station office(Information) near Exit 11 & 12.",
        "E-33": "Already processed for entry(Card has already been tagged).<br>Pass through the emergency gate (Ignore the beep sound).",
        "E-44": "Already processed for exit(Card has already been tagged).<br>Pass through the emergency gate (Ignore the beep sound)."
      }
    },
    {
      question: "2. I went the wrong way(I missed my stop)",
      answer: `You can go to the opposite side to take the subway back. <br>
1) Single-journey ticket: Do not tap the card. Press the help call button and tell us that you want to go to opposite side.<br><br>
2) T-money(Transportation Card) or Climate Card: Tap to exit, then tap again at the opposite gate to enter.<br>(No extra fare, only one transfer counted.)
      `
    },
    {
      question: "3. How to transfer to Line 3",
      answer: `Do not tap your card. Go down the stairs and follow the orange Line 3 signs. Line 2 and Line 3 platforms are connected <br><br>
If you just want to start your journey on Line 3(not transferring), tap your card at the gate, go downstairs, and follow the orange Line 3 signs.
`
    },
    {
      question: "4. Other Inquiries",
      answer: `
Press the help call button.<br><br>
Or<br><br>
Go through the wheelchair/speed gate and visit the station office(Information) near Exit 11 & 12.
      `
    }
  ],

  zh: [
    {
      question: "1. 卡片错误",
      answer: `
1) 进站和出站闸机是分开的。请使用正确的闸机（绿色箭头）。<br>
2) 刷卡时请确认显示的提示信息，并选择相应的错误代码。<br>
*不会产生额外费用。<br><br>

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
        "E-03": "未处理下车票务。<br>请通过应急门（轮椅/快速通道），并前往11、12号出口附近的车站办公室（问讯处）咨询。",
        "E-04": "未处理进站票务。<br>请通过应急门（轮椅/快速通道），并前往11、12号出口附近的车站办公室（问讯处）咨询。",
        "E-05": "超过使用时间。<br>请通过应急门（轮椅/快速通道），并前往11、12号出口附近的车站办公室（问讯处）咨询。",
        "E-07": "卡片已过期。<br>请通过应急门（轮椅/快速通道），并前往11、12号出口附近的车站办公室（问讯处）咨询。",
        "E-14": "余额不足（金额不足）。<br>请使用充值机（在您的左侧或右侧）进行充值，然后再次刷卡出站。",
        "E-27": "定期票已过期。<br>请通过应急门（轮椅/快速通道），并前往11、12号出口附近的车站办公室（问讯处）咨询。",
        "E-33": "已处理过进站（卡片已被标记）。<br>请通过应急门（请忽略报警声）。",
        "E-44": "已处理过出站（卡片已被标记）。<br>请通过应急门（请忽略报警声）。"
      }
    },
    {
      question: "2. 我坐错方向了（坐过站了）",
      answer: `您可以前往对面再次乘坐地铁。<br>
1) 单程票：请勿刷卡。请按求助按钮，告知工作人员您想去对面站台。<br><br>
2) T-money卡或气候同行卡：刷卡出站后，从对面闸机再次刷卡进站。<br>（不产生额外费用，仅计为一次换乘。）
      `
    },
    {
      question: "3. 如何换乘3号线",
      answer: `请不要刷卡。请下楼并跟随橙色（3号线）标识走。2号线和3号线站台是相连的。<br><br>
如果您只是想乘坐3号线（而非换乘），请在闸机处刷卡，然后下楼跟随橙色（3号线）标识走。`
    },
    {
      question: "4. 其他咨询",
      answer: `
请按求助按钮。<br><br>
或者<br><br>
请通过轮椅/快速通道，前往11、12号出口附近的车站办公室（问讯处）咨询。
      `
    }
  ],

  ja: [
    {
      question: "1. カードのエラー",
      answer: `
1) 入場用と退場用のゲートは分かれています。正しいゲート（緑の矢印）を使用してください。<br>
2) カードをタッチした際のメッセージを確認し、対応するエラーコードを選択してください。<br>
*追加料金は発生しません。<br><br>

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
        "E-03": "下車処理がされていません。<br>非常ゲート（車椅子/スピードゲート）を通り、11・12番出口付近の駅務室（Information）にお越しください。",
        "E-04": "乗車処理がされていません。<br>非常ゲート（車椅子/スピードゲート）を通り、11・12番出口付近の駅務室（Information）にお越しください。",
        "E-05": "時間超過です。<br>非常ゲート（車椅子/スピードゲート）を通り、11・12番出口付近の駅務室（Information）にお越しください。",
        "E-07": "カードの期限切れです。<br>非常ゲート（車椅子/スピードゲート）を通り、11・12番出口付近の駅務室（Information）にお越しください。",
        "E-14": "残高不足（お金が足りません）。<br>左右にある精算機でチャージし、再度カードをタッチして出てください。",
        "E-27": "定期券の期限切れです。<br>非常ゲート（車椅子/スピードゲート）を通り、11・12番出口付近の駅務室（Information）にお越しください。",
        "E-33": "既に乗車処理済みです（既にタッチされています）。<br>非常ゲートを通ってください（音が鳴っても無視してください）。",
        "E-44": "既に下車処理済みです（既にタッチされています）。<br>非常ゲートを通ってください（音が鳴っても無視してください）。"
      }
    },
    {
      question: "2. 反対方向に乗ってしまいました（乗り越しました）",
      answer: `反対側に移動して再度地下鉄に乗ることができます。<br>
1) 1回券の場合：カードをタッチしないでください。ヘルプコールボタンを押し、反対側に移動したい旨を伝えてください。<br><br>
2) T-moneyまたは気候同行カード：一度タッチして出場し、反対側のゲートから再度タッチして入場してください。<br>（追加料金なし、乗り換え1回としてカウントされます。）
      `
    },
    {
      question: "3. 3号線への乗り換え方法",
      answer: `カードをタッチしないでください。階段を降りて、オレンジ色の3号線の標識に従ってください。2号線と3号線のホームはつながっています。<br><br>
乗り換えではなく、3号線から利用を開始する場合は、ゲートでカードをタッチして入場し、階段を降りてオレンジ色の3号線の標識に従ってください。`
    },
    {
      question: "4. その他のお問い合わせ",
      answer: `
ヘルプコールボタンを押してください。<br><br>
または<br><br>
車椅子/スピードゲートを通り、11・12番出口付近の駅務室（Information）にお越しください。
      `
    }
  ],

  es: [
    {
      question: "1. Errores de tarjeta",
      answer: `
1) Hay dos puertas separadas para la entrada y la salida. Use la puerta correcta (flecha verde).<br>
2) Verifique el mensaje al tocar su tarjeta y seleccione el código de error correspondiente.<br>
*Sin cargo adicional.<br><br>

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
        "E-03": "El boleto no tiene registro de salida.<br>Pase por la puerta de emergencia (silla de ruedas/puerta rápida) y visite la oficina de la estación (Información) cerca de las salidas 11 y 12.",
        "E-04": "El boleto no tiene registro de entrada.<br>Pase por la puerta de emergencia (silla de ruedas/puerta rápida) y visite la oficina de la estación (Información) cerca de las salidas 11 y 12.",
        "E-05": "Tiempo excedido.<br>Pase por la puerta de emergencia (silla de ruedas/puerta rápida) y visite la oficina de la estación (Información) cerca de las salidas 11 y 12.",
        "E-07": "Tarjeta expirada.<br>Pase por la puerta de emergencia (silla de ruedas/puerta rápida) y visite la oficina de la estación (Información) cerca de las salidas 11 y 12.",
        "E-14": "Saldo insuficiente (No hay suficiente dinero).<br>Use la máquina (a su izquierda o derecha) para recargar y toque la tarjeta nuevamente para salir.",
        "E-27": "Pase de transporte vencido.<br>Pase por la puerta de emergencia (silla de ruedas/puerta rápida) y visite la oficina de la estación (Información) cerca de las salidas 11 y 12.",
        "E-33": "Entrada ya procesada (La tarjeta ya ha sido registrada).<br>Pase por la puerta de emergencia (Ignore el sonido de la alarma).",
        "E-44": "Salida ya procesada (La tarjeta ya ha sido registrada).<br>Pase por la puerta de emergencia (Ignore el sonido de la alarma)."
      }
    },
    {
      question: "2. Me equivoqué de dirección (Me pasé mi parada)",
      answer: `Puede ir al lado opuesto para tomar el metro de regreso.<br>
1) Billete de un solo viaje: No toque la tarjeta. Presione el botón de ayuda y diga que quiere ir al lado opuesto.<br><br>
2) Tarjeta T-money o Climate Card: Toque para salir y luego toque de nuevo desde la puerta opuesta para entrar.<br>(Sin cargo adicional, solo se cuenta un transbordo).
      `
    },
    {
      question: "3. Cómo transbordar a la Línea 3",
      answer: `No toque su tarjeta. Baje las escaleras y siga las señales naranjas de la Línea 3. Las plataformas de la Línea 2 y la Línea 3 están conectadas.<br><br>
Si solo desea iniciar su viaje en la Línea 3 (sin transbordo), toque su tarjeta en la puerta, baje las escaleras y siga las señales naranjas de la Línea 3.`
    },
    {
      question: "4. Otras consultas",
      answer: `
Presione el botón de ayuda.<br><br>
O<br><br>
Pase por la puerta de silla de ruedas/puerta rápida y visite la oficina de la estación (Información) cerca de las salidas 11 y 12.
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
