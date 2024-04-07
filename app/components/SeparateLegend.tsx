const SeparateLegend = ({ legendData }: any) => (
  <div className="flex flex-col justify-center mt-4">
    {legendData.map(({ initials, name }: any) => (
      <div key={initials} className="flex items-center mb-2">
        <div
          className="w-4 h-4 mr-2"
          style={{ backgroundColor: "#8884d8" }}
        ></div>
        <span>{`${initials} - ${name}`}</span>
      </div>
    ))}
  </div>
);

export default SeparateLegend;
