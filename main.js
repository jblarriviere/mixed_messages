//MIXED MESSAGES

const zodiacSigns = ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpius', 'Sagittarius', 'Capricornus', 'Aquarius', 'Pisces'];
const whatYoullBe = ['happy', 'loved', 'healthy', 'creative', 'optimistic', 'peacefull', 'adventurous', 'arrogant', 'depressive', 'impatient', 'jealous', 'unhappy'];
const howLong = ['days', 'weeks', 'month', 'year', 'decade', 'century'];

const pickRandom = array => array[Math.floor(Math.random()*array.length)];

const createRandomHoroscope = () => {
    let sign = pickRandom(zodiacSigns);
    let adjective = pickRandom(whatYoullBe);
    let duration = pickRandom(howLong);

    return `${sign} : due to the influence of the moon, you shoul'd feel quite ${adjective} over the next ${duration}.`;
}

const logRandomHoroscope = () => console.log(createRandomHoroscope());

logRandomHoroscope();
