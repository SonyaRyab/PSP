<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Drift Expo</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 20px; }
        h2 { margin-top: 30px; }
        textarea, input { width: 100%; margin-bottom: 10px; padding: 10px; }
        button { padding: 10px 15px; margin-top: 5px; }
        pre { background: #f4f4f4; padding: 10px; border-radius: 5px; }
    </style>
</head>
<body>

<h1>Drift Expo</h1>

<h2>1. Сравнение гонок (isEqualRace)</h2>
<textarea id="race1" placeholder='Первый объект гонки (например: {"name": "Race 1", "location": "Tokyo"})'></textarea>
<textarea id="race2" placeholder='Второй объект гонки (например: {"name": "Race 2", "location": "Tokyo"})'></textarea>
<button onclick="testIsEqualRace()">Проверить равенство гонок</button>
<pre id="outputRace"></pre>

<h2>2. Заполнение массива (fill)</h2>
<input id="carCount" type="number" placeholder="Количество автомобилей" />
<input id="feature" placeholder="Характеристика (например, 'Red')" />
<button onclick="testFill()">Создать массив</button>
<pre id="outputFill"></pre>

<h2>3. Проверка трансформации массивов (canTransform)</h2>
<textarea id="lineup1" placeholder='Первый массив гонщиков (например: ["Nissan", "Toyota"])'></textarea>
<textarea id="lineup2" placeholder='Второй массив гонщиков (например: ["Toyota", "Nissan"])'></textarea>
<button onclick="testCanTransform()">Проверить трансформацию</button>
<pre id="outputTransform"></pre>

<h2>4. Группировка анаграмм автомобилей (groupAnagramCars)</h2>
<textarea id="carModels" placeholder='Модели автомобилей (например: ["Nissan", "Nissan", "Sainn", "Toyota"])'></textarea>
<button onclick="testGroupAnagramCars()">Группировать анаграммы</button>
<pre id="outputAnagrams"></pre>

<script>
// 1.7
function isEqualRace(race1, race2) {
    if (race1 === race2) return true;
    if (typeof race1 !== 'object' || typeof race2 !== 'object' || race1 === null || race2 === null) {
        return false;
    }
    const raceKeys1 = Object.keys(race1);
    const raceKeys2 = Object.keys(race2);
    if (raceKeys1.length !== raceKeys2.length) return false;
    for (let param of raceKeys1) {
        if (!raceKeys2.includes(param)) return false;
        if (!isEqualRace(race1[param], race2[param])) return false;
    }
    return true;
}

// 1.9
function fill(carCount, feature) {
    return Array(carCount).fill(feature);
}

// 2.9
function canTransform(raceLineup1, raceLineup2) {
    const lineupStr = raceLineup1.join(',');
    const uniqueDriversSet = new Set(raceLineup2);

    if (raceLineup1.length !== raceLineup2.length) return false;
    const driverCount1 = {};
    const driverCount2 = {};

    for (let i = 0; i < raceLineup1.length; i++) {
        const driver = raceLineup1[i];
        driverCount1[driver] = (driverCount1[driver] || 0) + 1;
    }

    let idx = 0;
    do {
        const driver = raceLineup2[idx];
        driverCount2[driver] = (driverCount2[driver] || 0) + 1;
        idx++;
    } while (idx < raceLineup2.length);

    const participantKeys1 = Object.keys(driverCount1);
    const participantKeys2 = Object.keys(driverCount2);

    if (participantKeys1.length !== participantKeys2.length) return false;
    for (let racer of participantKeys1) {
        if (driverCount1[racer] !== driverCount2[racer]) {
            return false;
        }
    }
    return true;
}

// 3.5
function groupAnagramCars(carModels) {
    const modelMap = {};
    for (const model of carModels) {
        const key = model.split('').sort().join('');
        if (!modelMap[key]) {
            modelMap[key] = [];
        }
        modelMap[key].push(model);
    }
    const result = Object.values(modelMap)
        .filter(group => group.length > 1)
        .map(group => group.sort());
    result.sort((a, b) => a[0].localeCompare(b[0]));
    return result;
}

// Тестирование функций
function testIsEqualRace() {
    try {
        const race1 = JSON.parse(document.getElementById('race1').value);
        const race2 = JSON.parse(document.getElementById('race2').value);
        const result = isEqualRace(race1, race2);
        document.getElementById('outputRace').textContent = `Результат: ${result}`;
    } catch (e) {
        document.getElementById('outputRace').textContent = 'Ошибка: некорректный формат JSON';
    }
}

function testFill() {
    const carCount = parseInt(document.getElementById('carCount').value);
    const feature = document.getElementById('feature').value;
    const result = fill(carCount, feature);
    document.getElementById('outputFill').textContent = JSON.stringify(result);
}

function testCanTransform() {
    try {
        const raceLineup1 = JSON.parse(document.getElementById('lineup1').value);
        const raceLineup2 = JSON.parse(document.getElementById('lineup2').value);
        const result = canTransform(raceLineup1, raceLineup2);
        document.getElementById('outputTransform').textContent = `Результат: ${result}`;
    } catch (e) {
        document.getElementById('outputTransform').textContent = 'Ошибка: некорректный формат массива';
    }
}

function testGroupAnagramCars() {
    const carModels = JSON.parse(document.getElementById('carModels').value);
    const result = groupAnagramCars(carModels);
    document.getElementById('outputAnagrams').textContent = JSON.stringify(result, null, 2);
}
</script>

</body>
</html>
