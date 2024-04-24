import React from 'react';

const OrderAnalysisCard = () => {
    const totalOrders = 200;
    const expectedGrowth = 490;

    // Calculate the width percentage for the progress bar
    const progressWidth = (totalOrders / expectedGrowth) * 100;

    return (
        <div className=" mx-16 max-w-sm p-4 border-radius bg-white shadow-lg" style={{ borderRadius: '15px', boxShadow: '0px 0px 4px 0px rgba(0, 0, 0, 0.25)' }}>
            <div className="flex justify-between items-center">
                <div>
                    <h3 className="text-lg font-semibold text-black mb-2">Total Orders this week</h3>
                    <p className="text-2xl font-bold text-teal-500">{totalOrders}</p>
                </div>
                <div>
                    <p className="text-sm font-medium text-gray-600 mt-8">Expected growth: {expectedGrowth}</p>
                </div>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mt-4">
                <div className="bg-teal-600 h-2.5 rounded-full" style={{ width: `${progressWidth}%` }}></div>
            </div>
        </div>
    );
};

export default OrderAnalysisCard;
