import { useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton'

let Icon;

export default function ReactIconSvg(props) {
    const [value, setValue] = useState(false);
    let folderName, folderNameMain, fileName;
    folderName = props.name.split(/(?=[A-Z0-9])/);
    folderNameMain = folderName[0].toLowerCase();

    const setFileName = () => {
        if (folderNameMain === 'io') {
            let a = folderName.slice(0, 2).join("");
            if (a == 'IoIos') {
                folderNameMain = 'io'
            } else {
                folderNameMain = 'io5'
            }
        }
        fileName = props.name;
    }
    setFileName();

    useEffect(() => {
        const fetchIcon = async () => {
            const ReactIcon = await import('./icons');
            Icon = ReactIcon[folderNameMain][fileName];
            setValue(true);
        }
        fetchIcon()
    }, [value])

    return (
        <>
            {Icon && value ? <Icon {...props} /> : <IconSkeleton />}
        </>
    );
}


export function IconSkeleton() {
    return (<Skeleton className='w-full h-full' />)
}