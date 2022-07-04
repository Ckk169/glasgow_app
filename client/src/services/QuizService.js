const baseURL = 'http://localhost:9000/api/quiz/';

const QuizService = {

    getQuestions() {
        return fetch(baseURL)
            .then(res => res.json());
    },

    showSelectedQuestion(id) {
        return fetch(baseURL + id)
            .then(res => res.json());

    }
}
export default QuizService;