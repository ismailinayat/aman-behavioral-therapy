const SectionHeading = ({ text }: { text: string }) => {
  return (
    <div className="section__heading">
      <h3 className="section__heading--text">{text}</h3>
    </div>
  );
};

export default SectionHeading;
