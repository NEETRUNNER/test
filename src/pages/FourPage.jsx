import Slider from "../components/FirstPage/Slider";

import { ProgressBar } from 'react-loader-spinner'
import useLoading from "../components/hooks/useLoading";

const FourPage = () => {
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

export default FourPage;

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
            <Slider/>
        </>
    )
}