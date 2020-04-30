import styles from "./Skeleton.module.css";
import clsx from "clsx";

type SkeletonProps = {
	className?: string;
	width?: number;
	height?: number;
	visible: boolean;
};

export default function Skeleton({
	width,
	height,
	className,
	visible,
}: SkeletonProps) {
	return (
		<div
			className={clsx(styles.skeleton, className)}
			style={{
				width: width,
				height: height,
				display: visible ? "block" : "none",
			}}
		></div>
	);
}
