const FaqItem = ({ question, answer, visibleQuestion, onClick }: any) => (
  <li onClick={onClick}>
    <h3 className='font-bold !m-0 !text-2xl !capitalize'>{question}</h3>
    <p className={visibleQuestion === question ? "mt-3 opacity-60" : "hidden"}>
      {answer}
    </p>
  </li>
);

export default FaqItem;
