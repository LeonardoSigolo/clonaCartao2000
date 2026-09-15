const nomeCartao = document.getElementById("nomeCartao");
const nomeInput = document.getElementById("nome");
const numeroCartao = document.getElementById("numeroCartao");
const numeroInput = document.getElementById("numero");
const validadeCartao = document.getElementById("validadeCartao");
const validadeInput = document.getElementById("validade");
const cvvCartao = document.getElementById("cvvCartao");
const cvvInput = document.getElementById("cvv");

nomeInput.addEventListener("input", () => {
  let nomeValue = nomeInput.value.replace(/[^a-zA-Z\s]/g, "").toUpperCase();
  if (nomeValue === "") {
    nomeCartao.textContent = "NOME NO CARTÃO";
  } else {
    nomeCartao.textContent = nomeValue;
  }
});

numeroInput.addEventListener("input", () => {
  let numeroValue = numeroInput.value.replace(/\D/g, "");
  numeroValue = numeroValue.substring(0, 16);
  numeroValue = numeroValue.replace(/(.{4})/g, "$1 ").trim();
  if (numeroValue === "") {
    numeroCartao.textContent = "0000 0000 0000 0000";
  } else {
    numeroCartao.textContent = numeroValue;
  }
  numeroInput.value = numeroValue;
});

validadeInput.addEventListener("input", () => {
  if (validadeInput.value === "") {
    validadeCartao.textContent = "MM/AA";
  } else {
    validadeCartao.textContent = validadeInput.value;
  }
});

cvvInput.addEventListener("input", () => {
  let cvvValue = cvvInput.value.replace(/\D/g, "");
  cvvValue = cvvValue.substring(0, 3);
  cvvInput.value = cvvValue;
  if (cvvValue === "") {
    cvvCartao.textContent = "000";
  } else {
    cvvCartao.textContent = cvvValue;
  }
});

function formatarData(input) {
  let valor = input.value.replace(/\D/g, "");
  if (valor.length > 2) {
    valor = valor.substring(0, 2) + "/" + valor.substring(2, 4);
  }
  input.value = valor;
}

const audio = new Audio();

audio.src = "aud/warning.mp3";

const enviar = () => {
  let nome = document.getElementById("nome").value;
  let numero = document.getElementById("numero").value;
  let validade = document.getElementById("validade").value;
  let cvv = document.getElementById("cvv").value;

  if (!nome || !numero || !validade || !cvv) {
    Swal.fire({
      title: "Dados incompletos",
      text: "Preencha todos os dados",
      icon: "error",
    });
  } else {
    audio.play();
    Swal.fire({
      title: "<Strong>Cuidado!</Strong>",
      html: "Nunca preencha os dados do seu cartão em sites suspeitos!<br>Você poderia ter caído em um <b>golpe!</b>",
      footer: "Não guardamos seus dados, este é um site de conscientização.",
      icon: "warning",
    }).then((resultado) => {
      if (resultado.isConfirmed) {
        Swal.fire({
          title: 'O nome desse golpe é "Phishing"',
          html: "Ele se baseia em fingir ser verdadeiro, imitando grandes sites, como <b>Mercado Livre, Amazon, Magazine Luize</b> e etc.",
          footer: "Não guardamos seus dados, este é um site de conscientização.",
        }).then((resultado) => {
          if (resultado.isConfirmed) {
            Swal.fire({
              imageUrl: "./img/livre.png",
              html: "Sempre se atente a URL dos sites que visita na internet e que te enviam por mensagem!",
              footer:
                "Não guardamos seus dados, este é um site de conscientização.",
            }).then((resultado) => {
              if (resultado.isConfirmed) {
                Swal.fire({
                  imageUrl: "./img/livri.png",
                  html: "Esse é um exemplo de um site malicioso, muitas vezes acaba passando despercebido por desavisados!",
                  footer:
                    "Não guardamos seus dados, este é um site de conscientização.",
                }).then((resultado) => {
                  if (resultado.isConfirmed) {
                    Swal.fire({
                      title: "Outro exemplo de site suspeito é este aqui!",
                      html: "Mas não se preocupe, não guardamos seus dados em lugar nenhum, pode conferir no repositório do projeto no github.",
                      showDenyButton: true,
                      confirmButtonText: "Ver projeto",
                      denyButtonText: "Sair",
                    }).then((resultado) => {
                      if (resultado.isConfirmed) {
                        window.open(
                          "https://github.com/LeonardoSigolo/clonaCartao2000.git",
                          "_blank",
                        );
                      }
                    });
                  }
                });
              }
            });
          }
        });
      }
    });
  }
};

const form = document.querySelector(".formulario");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  enviar();
});
