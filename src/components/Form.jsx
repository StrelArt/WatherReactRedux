// const Form = ({getWeather}) => {
//     const getCity = e => {
//         e.preventDefault();
//         const city = e.target.city.value.trim();
//         getWeather(city);
//     }
//     return (
//         <form onSubmit={getCity}>
//             <input type="text" name='city'/>
//             <button type="submit">Get Weather</button>
//         </form>
//     );
// };
//
// export default Form;


import {useState} from "react";

const Form = ({getWeather}) => {
    const [city, setCity] = useState("");

    const getCity = e => {
        e.preventDefault();
        getWeather(city);
        setCity("");
    }

    // const handleChangeCity = e => {
    //     setCity(e.target.value.trim());
    // }


    return (
        <form onSubmit={getCity}>
            <input onChange={e => setCity(e.target.value)} type="text" value={city}/>
            <button type="submit">Get Weather</button>
        </form>
    );
};

export default Form;