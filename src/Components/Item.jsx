const Item = ({ isNew, name }) => {
  return (
    <div className="box">
      <h2 className="box_center">
        {isNew
          ? `${name}
          (nowość)`
          : `${name}`}
      </h2>
      {isNew ? <div className="new"></div> : null}
    </div>
  );
};

export default Item;
