import Image from "next/image";

const Step = ({
  number,
  title,
  detail,
}: {
  number: string;
  title: string;
  detail: string;
}) => {
  return (
    <div className="step">
      <div className="step__number">
        <p>{number}</p>
      </div>

      <div className="step__icon">
        <Image
          src={`/icons/works-${number}.png`}
          width={80}
          height={85}
          alt="work icon"
        />
      </div>

      <div className="step__title">
        <h4>{title}</h4>
      </div>
      <div className="step__text">
        <p>{detail}</p>
      </div>
    </div>
  );
};

export default Step;
