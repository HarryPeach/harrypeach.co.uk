import { motion } from "framer-motion";

import styles from "./Dialog.module.css";

type DialogProps = {
    children?: React.ReactNode;
    open: boolean;
    onClose: (event: React.MouseEvent) => void;
}

export default function Dialog({ children, open, onClose }: DialogProps) {

    const onClickHandler = (event: React.MouseEvent) => {
        event.preventDefault();
        if (event.target === event.currentTarget) {
            onClose(event);
        }
    }

    if (open) {
        return (
            <motion.div className={styles.container} onClick={onClickHandler}>
                <motion.div className={styles.dialog}>
                    {children}
                </motion.div>
            </motion.div>
        );
    }

    return (<></>);
}