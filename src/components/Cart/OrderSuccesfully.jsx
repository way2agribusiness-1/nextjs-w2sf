
import { Link } from 'react-router-dom';
import MetaData from '../Layouts/MetaData';
import successfull from '../../assets/images/Transaction/success.png';


const OrderSuccessfull = () => {

    
    // const [time, setTime] = useState(3);

    // useEffect(() => {
    //     if (time === 0) {
    //         if (success) {
    //             navigate("/orders")
    //         } else {
    //             navigate("/cart")
    //         }
    //         return;
    //     };
    //     const intervalId = setInterval(() => {
    //         setTime(time - 1);
    //     }, 1000);

    //     return () => clearInterval(intervalId);
    //     // eslint-disable-next-line
    // }, [time]);

    return (
        <>
            <MetaData title={`Transaction Successfull`} />

            <main className="w-full mt-20">

                {/* <!-- row --> */}
                <div className="flex flex-col gap-2 items-center justify-center sm:w-4/6 sm:mt-4  mb-7 bg-white shadow rounded  pb-12 m-auto">
                    <img draggable="false" className="w-1/2 h-60 object-contain" src={successfull } alt="Transaction Status" />
                    <h1 className="text-2xl font-semibold">Transaction Successfull</h1>
                    <p className="mt-4 text-lg text-gray-800">Redirect to Shopping</p>
                    <Link to={"/agritechproducts"} className="bg-primary-blue mt-2 py-2.5 px-6 text-white uppercase shadow hover:shadow-lg rounded-sm">go to Shopping</Link>
                </div>
                {/* <!-- row --> */}

            </main>
        </>
    );
};

export default OrderSuccessfull;
