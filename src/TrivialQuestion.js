import './TrivialQuestion.css';

function TrivialQuestion() {
  return (
    <div class="game">
      <div class="game__question">
        Quel est la couleur du cheval blanc d'Henri 4 ?
      </div>
      <ul class="game__answers">
        <li class="game__answer">Bleu</li>
        <li class="game__answer">Rouge</li>
        <li class="game__answer">Vert</li>
        <li class="game__answer">Blanc</li>
      </ul>
    </div>
  );
}

export default TrivialQuestion;
