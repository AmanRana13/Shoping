type props = {
    color?: string,
    height?: number,
    width?: number,
    id?: any,
    className?: string,
    cursor?: string,
    title?: string
}

const Icons = ({ color, height, width, id, className, cursor = "default", title = "" }: props) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            height={height}
            width={width}
            cursor={cursor}
            className={className}
            style={{ display: "block" }}
        >
            <defs>
                <svg
                    width={width}
                    height={height}
                    viewBox="0 0 15 15"
                    xmlns="http://www.w3.org/2000/svg"
                    fill={color}
                    className={className}
                    id="profile"
                >
                    <title>{title}</title>
                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                </svg>
            </defs>
            <use href={`#${id}`} />
        </svg>
    )
}

export default Icons