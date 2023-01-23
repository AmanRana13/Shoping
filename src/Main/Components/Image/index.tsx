
type props = {
    src: string
}

const Image = ({ src }: props) => {
    return (
        <img src={src} height={"100%"} width={"100%"} loading="lazy" />
    )
}

export default Image