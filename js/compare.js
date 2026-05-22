let carArr = [];

class Car {
    constructor(nome, preco, alturaCacamba, alturaVeiculo, alturaSolo, capacidadeCarga, motor, potencia, volumeCacamba, roda, image) {
        this.nome = nome;
        this.preco = preco;
        this.alturaCacamba = alturaCacamba;
        this.alturaVeiculo = alturaVeiculo;
        this.alturaSolo = alturaSolo;
        this.capacidadeCarga = capacidadeCarga;
        this.motor = motor;
        this.potencia = potencia;
        this.volumeCacamba = volumeCacamba;
        this.roda = roda;
        this.image = image;
    }
}

const carroXL = new Car(
    "XL Cabine Simples 2.2 Diesel 4X4 MT 2022",
    "R$ 183.850,00",
    "511",
    "1821",
    "232",
    "1234",
    "2.2",
    "160",
    "1420",
    "Aço Estampado 16",
    "img/XL Cabine.jpg"
);

const carroXLS = new Car(
    "XLS 2.2 Diesel 4X4 AT 2022",
    "R$ 220.690,00",
    "511",
    "1821",
    "232",
    "1076",
    "2.2",
    "160",
    "1180",
    "Liga Leve 17",
    "img/xls 2.2 diesel.jpg");

const carroStorm = new Car(
    "Storm 3.2 Diesel 4X4 AT 2022",
    "R$ 222.790,00",
    "511",
    "1821",
    "232",
    "1040",
    "3.2",
    "200",
    "1180",
    "Liga Leve 17",
    "img/storm.jpg");

function GetCarArrPosition(arr, carClass) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].nome === carClass.nome) {
            return i;
        }
    }

    return -1;}

function SetCarToCompare(el, carClass) {
    if (carClass instanceof Car) {
        if (el.checked) {
            if (carArr.length >= 2) {
                el.checked = false;
                alert("Você só pode comparar dois carros por vez.");
                return;
            }

            const position = GetCarArrPosition(carArr, carClass);

            if (position === -1) {
                carArr.push(carClass);
            }
        } else {
            const position = GetCarArrPosition(carArr, carClass);

            if (position !== -1) {
                carArr.splice(position, 1);
            }
        }
    } else {
        throw "You need set a Car Class";
    }
}

function ShowCompare() {
    if (carArr.length < 2) {
        alert("Precisa marcar 2 carros para apresentar a comparação");
        return;
    }

    UpdateCompareTable();
    document.getElementById("compare").style.display = "block";
}

function HideCompare() {
    document.getElementById("compare").style.display = "none";
}

function UpdateCompareTable() {
    for (let i = 0; i < carArr.length; i++) {
        document.getElementById(`compare_image_${i}`).src = carArr[i].image;

        document.getElementById(`compare_modelo_${i}`).innerText = carArr[i].nome;
        document.getElementById(`compare_alturaCacamba_${i}`).innerText = carArr[i].alturaCacamba;
        document.getElementById(`compare_alturaVeiculo_${i}`).innerText = carArr[i].alturaVeiculo;
        document.getElementById(`compare_alturaSolo_${i}`).innerText = carArr[i].alturaSolo;
        document.getElementById(`compare_capacidadeCarga_${i}`).innerText = carArr[i].capacidadeCarga;
        document.getElementById(`compare_motor_${i}`).innerText = carArr[i].motor;
        document.getElementById(`compare_potencia_${i}`).innerText = carArr[i].potencia;
        document.getElementById(`compare_volumeCacamba_${i}`).innerText = carArr[i].volumeCacamba;
        document.getElementById(`compare_roda_${i}`).innerText = carArr[i].roda;
        document.getElementById(`compare_preco_${i}`).innerText = carArr[i].preco;
    }
}

window.onload = function () {
    const checkboxes = document.querySelectorAll(".card input[type='checkbox']");
    const btnComparar = document.querySelector(".btn-comparar");

    checkboxes[0].addEventListener("change", function () {
        SetCarToCompare(this, carroXL);
    });

    checkboxes[1].addEventListener("change", function () {
        SetCarToCompare(this, carroXLS);
    });

    checkboxes[2].addEventListener("change", function () {
        SetCarToCompare(this, carroStorm);
    });

    btnComparar.addEventListener("click", ShowCompare);

};