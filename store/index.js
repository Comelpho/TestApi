export default {
    state () {
        return {
            categoryAnimals: [
                { 'lable': '3', 'value': '3', 'active': true },
                { 'lable': '6', 'value': '6', 'active': false },
                { 'lable': '9', 'value': '9', 'active': false },
            ]
        }
    },
    mutations: {
        setActiveRadioButton (state, afterActive) {
            for (var i = 0; i < state.categoryAnimals.length; i++) {

                if (state.categoryAnimals[i].value == afterActive) {
                    state.categoryAnimals[i].active = true
                }
                else {
                    state.categoryAnimals[i].active = false
                }
            }
        }
    },
    getters: {
        finActiveRadioButton: s => s.categoryAnimals.find(e => { return e.active })
    }
}
