

export const Banner = ({isDark = false, text = 'Hello World'}) => {
  return (
    <>
      <div
        style={isDark ? { background: "black" } : { background: "white" }}
        className="block"
      >
        <h1 style={isDark ? { color: "white" } : { color: "black" }}>
          {text}
        </h1>
        <img
          width="1000"
          alt="BannerImage"
          src="https://i.pinimg.com/originals/7a/0d/c2/7a0dc24f568b81a39ba1ce797f65d355.jpg"
        />
      </div>
    </>
  );
};
