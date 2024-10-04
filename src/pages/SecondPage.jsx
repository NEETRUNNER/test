import PricesFirst from "../components/SecondPage/Price_01";
import PricesSecond from "../components/SecondPage/Price_02";
import PricesThird from "../components/SecondPage/Price_03";
import Map from "../components/SecondPage/Map";

import { ProgressBar } from 'react-loader-spinner'
import useLoading from "../components/hooks/useLoading";

const SecondPage = () => {

    const loading = useLoading();

    const loadSpinner = loading ? <LoadSpinner/> : null;
    const loadContent = !loading ? <LoadContent/> : null;

    return (
        <>
            {loadSpinner}
            {loadContent}
        </>
    );
}

export default SecondPage;


const LoadSpinner = () => { // Функция-метод которая создаёт компонент спиннера

    return (
            <div className="spinner-container">
                <ProgressBar
                visible={true}
                height="400"
                width="400"
                color="#4fa94d"
                ariaLabel="progress-bar-loading"
                wrapperStyle={{}}
                wrapperClass="progressIcon"
                />
            </div>
    );
};

const LoadContent = () => {
    return (
        <>
            <PricesFirst/>
            <PricesSecond/>
            <PricesThird/>
            <Map/> 
        </>
    )
}