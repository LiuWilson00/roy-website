const Phone = ({ style, children, image, width }) => {
  const phoneWidth = width ?? 100;
  const phoneHeight = width * 2.5;
  return (
    <div
      style={{
        backgroundImage: `url("/image/object/phone.png")`,
        width: phoneWidth,
        height: phoneHeight,
        backgroundPosition: "center",
        backgroundSize: "cover",
        display: "flex",
        ...style,
      }}
    >
      {image ? (
        <img
          style={{
            width: phoneWidth,
            height: phoneHeight * 0.73,
            margin: "34% 0.5%",
            borderRadius: 5,
          }}
          src={image}
        ></img>
      ) : (
        <div style={{ margin: "auto" }}>{children}</div>
      )}
    </div>
  );
};

export default Phone;
