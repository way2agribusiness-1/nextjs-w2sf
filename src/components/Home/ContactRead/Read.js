import { useState, useEffect } from "react";
import firebase from "firebase/compat/app";

import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import CallIcon from "@mui/icons-material/Call";
import DeleteIcon from "@mui/icons-material/Delete";
import SmsIcon from "@mui/icons-material/Sms";
import { useSelector } from "react-redux";





function ContactRead() {


  const [data, setData] = useState({});

  const { callbacks } = useSelector((state) => state.callbacks);

  const handleDelete = (key) => {
    const dbRef = firebase.database().ref("Customer/" + key);
    dbRef
      .remove()
      .then(() => {
        console.log("Data removed successfully!");
      })
      .catch((error) => {
        console.error("Error removing data: ", error);
      });
  };

  useEffect(() => {
    const dbRef = firebase.database().ref("Customer");
    dbRef.on("value", (snapshot) => {
      setData(snapshot.val());
    });
  }, []);

  const downloadData = () => {
    const csvData = [];
    csvData.push(["Name", "Phonenumber", "Place", "Message"]);
    Object.entries(data).forEach(([key, value]) => {
      csvData.push([
        value.Fullname,
        value.Phonenumber,
        value.Place,
        value.Message,
      ]);
    });
    const blob = new Blob([csvData.map((r) => r.join(",")).join("\n")], {
      type: "text/csv;charset=utf-8;",
    });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", "data.csv");
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // const handleCheckboxChange = (key) => {
  //   if (selectedItems.includes(key)) {
  //     setSelectedItems(selectedItems.filter((item) => item !== key));
  //   } else {
  //     setSelectedItems([...selectedItems, key]);
  //   }
  // };

  return (
    <div>
      <table className="displaycall" id="myTable">
        <thead>
          <tr>CallBack</tr>
          <tr>
            <th>Select</th>
            <th>Name</th>
            <th>Phone Number</th>
            <th>Place</th>
            <th>Messages</th>
            <th>Contact</th>
          </tr>
        </thead>
        {callbacks &&
          callbacks.map((callback) => (
            <tbody key={callback.id}>
              <tr key={callback.id} className="dispinner">
                {/* <td>{value.datetime}</td> */}
                <td>
                  <input type="checkbox" />
                </td>
                <td>{callback.name}</td>
                <td>{callback.phone}</td>
                <td>{callback.place}</td>
                <td>{callback.message}</td>

                <div style={{ display: "flex", gap: "10px", padding: "5px" }}>
                  <button onClick={() => handleDelete(callback.id)}>
                    <DeleteIcon />
                  </button>
                  <p>
                    <a href={`tel:${callback.phone}`}>
                      <CallIcon />
                    </a>
                  </p>
                  <p>
                    <a href={`sms:${callback.phone}`}>
                      <SmsIcon />
                    </a>
                    <a
                      aria-label="Chat on WhatsApp"
                      href={`https://wa.me/${callback.phone}`}
                    >
                      <WhatsAppIcon />
                    </a>
                  </p>
                </div>
              </tr>
            </tbody>
          ))}
      </table>
      <button onClick={downloadData} className="downloadbtn">
        Download
      </button>
    </div>
  );
}
export default ContactRead;
