import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import "./Coffe.css";
const CoffeeInsight = () => {
  const [data,setData] = useState([])
  useEffect(()=>{
    fetch("http://localhost:4000/api/v1/insight/63fc6d540c7b17a6babd1c95")
      .then(response => response.json())
      .then(json => setData(json.insight))
      .catch(error => console.error(error));
  },[])
  const [back,setBack] = useState(false);
  if(back){
    return <Navigate to={`/crops`} replace />
}
  return (
    <div>
          
  
  <button className="mt-16 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"  onClick={()=>setBack(true)}>Back</button>
      <div className="ml-20">
        <table className="products-4">
          <thead>
            <tr>
            <h2 className="p-2 font-bold" >Coffee Insights</h2>
              <th>
                <h3>Coffee</h3>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="heading" colspan="5">
                <span>Price Outlook</span>
              </td>
            </tr>
            <tr>
              <td class="label">Monthly Price Outlook </td>
              <td>
                <div class="spec" spec-title="Label">
                {data.monthly_price_insight}
                </div>
              </td>
            </tr>
            <tr>
              <td class="label"> Quarterly Price Outlook</td>
              <td>
                <div class="spec" spec-title="Label">
                {data.quarterly_price_insight}
                </div>
              </td>
            </tr>
            <tr>
              <td class="label"> Seasonal Price Outlook</td>
              <td>
                <div class="spec" spec-title="Label">
                {data.seasonal_price_insight}
                </div>
              </td>
            </tr>
            <tr>
              <td class="heading" colspan="5">
                <span>Summery & Review</span>
              </td>
            </tr>
            <tr>
              <td class="label">Monthly Summery & Review</td>
              <td>
                <div class="spec" spec-title="Label">
                {data.monthly_summary_insight}
                </div>
              </td>
            </tr>
            <tr>
              <td class="label">Quarterly Summery & Review</td>
              <td>
                <div class="spec" spec-title="Label">
                {data.quarterly_summary_insight}
                </div>
              </td>
            </tr>
            <tr>
              <td class="label">Seasonal Summery & Review</td>
              <td>
                <div class="spec" spec-title="Label">
                {data.seasonal_summary_insight}
                </div>
              </td>
            </tr>
            <tr>
              <td class="heading" colspan="5">
                <span>Bull & Bear Factor</span>
              </td>
            </tr>
            <tr>
              <td class="label">Monthly Bull & Bear Factor </td>
              <td>
                <div class="spec" spec-title="Label">
                {data.monthly_bull_insight}
                </div>
              </td>
            </tr>
            <tr>
              <td class="label">Quarterly Bull & Bear Factor </td>
              <td>
                <div class="spec" spec-title="Label">
                {data.quarterly_bull_insight}
                </div>
              </td>
            </tr>
            <tr>
              <td class="label">Seasonal Bull & Bear Factor </td>
              <td>
                <div class="spec" spec-title="Label">
                {data.seasonal_bull_insight}
                </div>
              </td>
            </tr>
           
          </tbody>
        </table>

     
      </div>
      
    </div>
  );
};

export default CoffeeInsight;
