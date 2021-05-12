class Answers {
    constructor() {
        this.data = {
            "oneLetter": [
                ["созыв", "ы"],
                ["отзыв (на публикацию)", "о"],
                ["отзыв (посла)", "ы"],
                ["добела", "а"],
                ["тубдиспансер", "е"],
                ["создавший", "а"],
                ["каталог", "о"],
                ["торты", "о"],
                ["обостренный", ["ё", "е"]],
                ["банты", "а"],
                ["досуг", "у"],
                ["поняла", "а"],
                ["звонит", "и"],
                ["сливовый (сок)", "и"]
            ],
            "whatSyllable": [
                ["оптовый", "2"],
                ["начaв", "2"],
                ["аэропорты", "4"],
                ["начать", "2"],
                ["украла", "2"],
                ["клала", "1"],
                ["приняли", "1"],
                ["торты", "1"],
                ["обостренный", "3"],
                ["банты", "1"],
                ["досуг", "2"],
                ["поняла", "3"],
                ["звонит", "2"],
                ["сливовый (сок)", "1"]
            ]
        };
    }
    get() {
        return this.data;
    }
    getQuest(type, number) {
        return this.data[type][number][0];
    }
    getQuests(type) {
        return this.data[type];
    }
    getTypes() {
        return Object.keys(this.data);
    }
    getAnswer(type, number) {
        return this.data[type][number][1];
    }
    setQuest(type, data) {
        if (Array.isArray(data)) {
            this.data[type].push(data);
        }
        else {
            return false;
        }
    }
    setType(type, data=null) {
        this.data[type] = data || [];
    }
}
export default Answers;