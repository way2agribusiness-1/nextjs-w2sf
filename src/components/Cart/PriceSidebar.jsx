
const PriceSidebar = ({ cartItems }) => {
    return (
        <div className="flex sticky top-16 sm:h-screen flex-col sm:w-4/12 sm:px-1">

            {/* <!-- nav tiles --> */}
            <div className="flex flex-col bg-white rounded-sm shadow">
                <h1 className="px-6 py-3 border-b font-medium text-gray-500">Price Details</h1>

                <div className="flex flex-col gap-4 p-5 pb-3">
                    <p className="flex justify-between">Price ({cartItems.length} item) <span>₹{cartItems.reduce((sum, item) => sum + (item.cuttedPrice * item.quantity), 0).toLocaleString()}</span></p>
                    <p className="flex justify-between">Discount <span className="text-green-400">- ₹{cartItems.reduce((sum, item) => sum + ((item.cuttedPrice * item.quantity) - (item.price * item.quantity)), 0).toLocaleString()}</span></p>
                    <p className="flex justify-between">Delivery Charges <span className="text-green-400">FREE</span></p>

                    <div className="border border-dashed"></div>
                    <p className="flex justify-between text-lg font-medium">Total Amount <span>₹{cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0).toLocaleString()}</span></p>
                    <div className="border border-dashed"></div>

                    <p className="font-medium text-green-400">You will save ₹{cartItems.reduce((sum, item) => sum + ((item.cuttedPrice * item.quantity) - (item.price * item.quantity)), 0).toLocaleString()} on this order</p>

                </div>

            </div>
            {/* <!-- nav tiles --> */}

        </div>
    );
};

export default PriceSidebar;
