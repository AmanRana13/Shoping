import React, { useEffect, useState } from "react";

import "./Tooltip.scss";


interface Props {
    title?: React.ReactNode,
    children: React.ReactNode
}

const Tooltip: React.FC<{ children: React.ReactNode, title: React.ReactNode }> = ({ children, title }: Props) => {
    const [visible, setVisible] = useState(false)

    const TooltipItemCoord = () => {
        let tooltip = document.getElementById("tooltip_data")
        if (tooltip) {
            let coords = tooltip.getBoundingClientRect();
            return coords
        }
    }

    function onHover(e: any) {
        try {
            const coords = TooltipItemCoord()
            if (coords) {
                let show = e.clientX >= coords.left && e.clientX <= coords.right && e.clientY <= coords.bottom && e.clientY >= coords.top
                show ? setVisible(!visible) : setVisible(false)
            }
        }
        catch (e) { }
    }
    
    useEffect(() => {
        document.addEventListener("mousedown", onHover)
    }, [])

    return (
        <div id="toolTip_container" className="tooltip_container">
            <span id="tooltip_data" className="tooltip_Inner_container">
                <div className="tooltip_data">
                    {children}
                </div>
                {visible && <div className="tooltip_main_container">
                    <div className="tooltip_arrow" />
                    <div className="tooltip_body">
                        {title}
                    </div>
                </div>}
            </span>
        </div>
    )
}

export default Tooltip