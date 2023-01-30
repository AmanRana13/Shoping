import React from "react"
import Tooltip from "../../Components/ToolTip"
import Image from "../../Components/Image"
import Images from "../../Assets/Images"

const Home: React.FC = () => {
  return (
    <article>
      <div style={{ height: "50px" }}></div>
      <Tooltip title={
        <>
          <Image src={Images.logo} />
          <p>hello aman </p>
        </>
      }>
        <button>
          submit
        </button>
      </Tooltip>

    </article>
  )
}

export default Home

