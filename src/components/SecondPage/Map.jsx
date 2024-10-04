import '../../styles/prices.sass';
import map from '../../images/map.png'

const Map = () => {

    return (
        <section id='map' className="standart">
            <div className="container">
                <h1 id='map__title' className="standart__title">Карта клуба</h1>
                <img src={map} alt="" className="standart__img" />
            </div>
        </section>
    );
};

export default Map;
