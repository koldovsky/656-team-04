(async function () {
let questions;
const questionsList = document.querySelector('.questions_list');
const questioncards = [
    {
        title: 'Do you sell trees?',
        description: 'Yes, in our store, you can buy decorative trees for the garden.'
    },
    {
        title: 'Can I buy already grown-up plants?',
        description: 'Of course, we have a large greenhouse where we grow plants. You can buy an adult plant in a pot.'
    },
    {
        title: 'Can I buy plants online?',
        description: "No, we don't have an online store. To buy a plant, come to our offline store or leave us a message."
    }
]

const renderQuestions = question => {
        return `
            <div class="question_list__question">
                <div class="question_container">
                    <div class="question_list_title">
                        <h3 class="question_list_name">${question.title}</h3>
                        <div class="arrow arrow-bottom"></div>
                    </div>
                    <p class="question_list_answers">${question.description}</p>
                </div>
            </div>
        `
    }
    
    const fillHtmlList = () => {
        questioncards.forEach(question => {
            questionsList.innerHTML += renderQuestions(question);
        })
        questions = document.querySelectorAll('.question_container');
    }
    
    fillHtmlList();
    
    if(questions) {
        for(item of questions) {
            item.addEventListener('click', function() {
                if(this.classList.contains('active')) {
                    this.classList.remove('active');
                } else {
                    for(el of questions) {
                        el.classList.remove('active');
                    }
                    this.classList.add('active');
                }
            })
        }
        }
}
)();