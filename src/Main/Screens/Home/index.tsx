import { Image, ToolTip } from "../../Components";
import Images from "../../Assets/Images";

const Home = () => {
  return (
    <article>
      <div style={{ height: "50px" }}></div>
      <ToolTip
        title={
          <>
            <div style={{ width: "50px", height: "50px" }}>
              <Image src={Images.logo} />
            </div>
            <p>Hello Aman </p>
          </>
        }
      >
        <button>submit</button>
      </ToolTip>
    </article>
  );
};
export default Home;