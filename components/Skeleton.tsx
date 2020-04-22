import styles from "./Skeleton.module.scss";
import clsx from "clsx";

type SkeletonProps = {
	className?: string;
	width?: number;
	height?: number;
};

export default function Skeleton({ width, height, className }: SkeletonProps) {
	return (
		<div
			className={clsx(styles.skeleton, className)}
			style={{ width: width, height: height }}
		></div>
	);
}
