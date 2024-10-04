// Кастомный хук для создания загрузки страницы
import { useState, useEffect } from 'react';

const useLoading = (delay = 2000) => {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);

        const timer = setTimeout(() => {
            setLoading(false);
        }, delay);

        return () => clearTimeout(timer);
    }, [delay]);

    return loading;
};

export default useLoading;