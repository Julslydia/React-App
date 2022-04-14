import Item from "./Item";

const Offer = (props) => {
  const offerItems = props.itemList.map((offer) => {
    return <Item key={offer.id} isNew={offer.isNew} name={offer.name} />;
  });

  return (
    <section id="offer">
      <div className="padding1 container">
        <h1 id="align-center" className="header-white padding1">
          Czym się zajmuje nasza firma?
        </h1>
        <div className="offer_container">{offerItems}</div>
      </div>
    </section>
  );
};

export default Offer;
