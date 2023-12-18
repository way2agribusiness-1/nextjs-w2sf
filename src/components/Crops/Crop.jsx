const Crop = ({ _id, name, images, description }) => {
  const croppedName = name.length > 85 ? `${name.substring(0, 85)}...` : name;
  const link = `/crop/${croppedName}/compare`;
  const linktwo = `/crop/${croppedName}/insight`;

  return (
    <div className="flex flex-col justify-center items-center shadow-lg m-1 rounded-lg p-2 mx-4">
      <img
        draggable="false"
        src={images && images[0].url}
        style={{ height: '215px' }}
        alt={name}
      />
      <div className="flex flex-col items-center justify-center">
        <h2 className="green-text font-bold mb-2">
          {name.length > 85 ? `${name.substring(0, 85)}...` : name}
        </h2>
        <div className=" flex flex-row justify-between">
          <button className="text-yellow-400 green-background p-2 rounded mr-2">
            <a href={link}>Compare</a>
          </button>
          <button className="text-yellow-400 green-background p-2 rounded ml-2">
            <a href={linktwo}>Insight</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Crop;
