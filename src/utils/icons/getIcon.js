import * as bsIcons from "react-icons/bs";
import * as aiIcons from "react-icons/ai";
import * as biIcons from "react-icons/bi";
import * as giIcons from "react-icons/gi";
import * as faIcons from "react-icons/fa";
import * as tbIcons from "react-icons/tb";
import * as rxIcons from "react-icons/rx";



const IconHOC = ({ icon, className }) => {
    const getIconName = (iconName) => {
        const iconsMap = new Map();
        iconsMap.set("Bs", bsIcons);
        iconsMap.set("Ai", aiIcons);
        iconsMap.set("Bi", biIcons);
        iconsMap.set("Gi", giIcons);
        iconsMap.set("Fa", faIcons);
        iconsMap.set("Tb", tbIcons);
        iconsMap.set("Rx", rxIcons);
        return iconsMap.get(iconName.substring(0, 2));
    };

    const icons = getIconName(icon);
    const ReactIcon = icons[icon];

    return <ReactIcon className={className} />;
};

export default IconHOC;