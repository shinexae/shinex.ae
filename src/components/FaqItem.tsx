const FaqItem = ({ question, answer, visibleQuestion, onClick }: any) => (
  <li onClick={onClick}>
    <h4 className='!font-bold'>{question}</h4>
    <p className={visibleQuestion === question ? "mt-3 opacity-60" : "hidden"}>
      {answer}
    </p>
  </li>
);

export default FaqItem;
