//1.7
function isEqualRace(race1, race2) {
    if (race1 === race2) return true;
    //проверка на то что оба аргумента race1 и race2 - объекты, а не примитивы
    if (typeof race1 !== 'object' || typeof race2 !== 'object' || race1 === null || race2 === null) {
      return false;
    }
    const raceKeys1 = Object.keys(race1);   // ключи первой гонки
    const raceKeys2 = Object.keys(race2);   // ключи второй гонки
    if (raceKeys1.length !== raceKeys2.length) return false;
    for (let param of raceKeys1) {
      if (!raceKeys2.includes(param)) return false;
      if (!isEqualRace(race1[param], race2[param])) return false;
    }
    return true;
}
  

//1.9 
/**
 * @param {number} carCount 
 * @param {*} feature 
 * @returns {Array} 
 */
function fill(carCount, feature) {
    return Array(carCount).fill(feature);
}


//2.9 Проверяет, можно ли получить из одного массива другой
/**
 * @param {Array} raceLineup1 
 * @param {Array} raceLineup2 
 * @returns {boolean}
 */
function canTransform(raceLineup1, raceLineup2) {
    const lineupStr = raceLineup1.join(',');       
    const uniqueDriversSet = new Set(raceLineup2); 
  
    if (raceLineup1.length !== raceLineup2.length) return false;
    const driverCount1 = {}; //объект-счетчик, хранит кол-во появлений гонщика
    const driverCount2 = {};
  
    for (let i = 0; i < raceLineup1.length; i++) {
      const driver = raceLineup1[i]; //получение текущего участника
      driverCount1[driver] = (driverCount1[driver] || 0) + 1; //гонщик есть -> текущее значение
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
  

//3.5
/**
 * @param {string[]} carModels 
 * @returns {string[][]} - двумерный массив с элементами - массивами строк
 */
function groupAnagramCars(carModels) {
    const modelMap = {};
    for (const model of carModels) {
        const key = model.split('').sort().join('');  // Ключ для группы — отсортированная модель
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
