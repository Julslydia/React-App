const Item = ({ isNew, name }) => {
  return (
    <div className="box">
      <div className="box_content">
        <h2>{isNew ? `${name} (nowość)` : `${name}`}</h2>
      </div>
      {isNew ? <div className="new"></div> : null}
    </div>
  );
};

export default Item;
