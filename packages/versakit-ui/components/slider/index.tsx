import { useEffect, useRef, useState } from "react";
import { sliderThumbVariants, sliderVariants } from "./index.variants";
import type { SliderProps } from "./types";

export const Slider = ({
	className,
	variant,
	size,
	disabled,
	"aria-label": ariaLabel,
	"aria-disabled": ariaDisabled,
	unstyled = false,
	pt,
	min = 0,
	max = 100,
	step = 1,
	value,
	defaultValue,
	onChange,
	...props
}: SliderProps) => {
	// 合并自定义属性
	const passThrough = pt || {};

	// 处理受控和非受控组件
	const [internalValue, setInternalValue] = useState<number>(
		defaultValue !== undefined ? defaultValue : value !== undefined ? value : min,
	);

	const currentValue = value !== undefined ? value : internalValue;
	const trackRef = useRef<HTMLDivElement>(null);
	const thumbRef = useRef<HTMLDivElement>(null);
	const isDragging = useRef(false);

	// 计算滑块位置百分比
	const getValuePercentage = () => {
		return ((currentValue - min) / (max - min)) * 100;
	};

	// 从位置计算值
	const getValueFromPosition = (position: number) => {
		const trackRect = trackRef.current?.getBoundingClientRect();
		if (!trackRect) return min;

		const percentage = Math.max(
			0,
			Math.min(100, ((position - trackRect.left) / trackRect.width) * 100),
		);
		const rawValue = min + (percentage / 100) * (max - min);
		const steppedValue = Math.round(rawValue / step) * step;

		return Math.max(min, Math.min(max, steppedValue));
	};

	// 处理鼠标按下
	const handleMouseDown = (e: React.MouseEvent) => {
		if (disabled) return;

		isDragging.current = true;
		document.addEventListener("mousemove", handleMouseMove);
		document.addEventListener("mouseup", handleMouseUp);

		// 立即更新值
		updateValue(e.clientX);
	};

	// 处理触摸开始
	const handleTouchStart = (e: React.TouchEvent) => {
		if (disabled) return;
		isDragging.current = true;
		document.addEventListener("touchmove", handleTouchMove);
		document.addEventListener("touchend", handleTouchEnd);

		// 立即更新值
		updateValue(e.touches[0].clientX);
	};

	// 处理鼠标移动
	const handleMouseMove = (e: MouseEvent) => {
		if (!isDragging.current) return;
		updateValue(e.clientX);
	};

	// 处理触摸移动
	const handleTouchMove = (e: TouchEvent) => {
		if (!isDragging.current) return;
		updateValue(e.touches[0].clientX);
	};

	// 处理鼠标抬起
	const handleMouseUp = () => {
		isDragging.current = false;
		document.removeEventListener("mousemove", handleMouseMove);
		document.removeEventListener("mouseup", handleMouseUp);
	};

	// 处理触摸结束
	const handleTouchEnd = () => {
		isDragging.current = false;
		document.removeEventListener("touchmove", handleTouchMove);
		document.removeEventListener("touchend", handleTouchEnd);
	};

	// 更新值
	const updateValue = (clientX: number) => {
		const newValue = getValueFromPosition(clientX);

		if (value === undefined) {
			setInternalValue(newValue);
		}

		onChange?.(newValue);
	};

	// 处理点击轨道
	const handleTrackClick = (e: React.MouseEvent) => {
		if (disabled) return;
		updateValue(e.clientX);
	};

	// 清理事件监听器
	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		return () => {
			document.removeEventListener("mousemove", handleMouseMove);
			document.removeEventListener("mouseup", handleMouseUp);
			document.removeEventListener("touchmove", handleTouchMove);
			document.removeEventListener("touchend", handleTouchEnd);
		};
	}, []);

	return (
		<div
			className={`relative ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
			{...passThrough}
			{...props}
		>
			{/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
			<div
				ref={trackRef}
				className={unstyled ? className : sliderVariants({ variant, size, class: className })}
				onClick={handleTrackClick}
				role="slider"
				aria-label={ariaLabel}
				aria-disabled={ariaDisabled || disabled}
				aria-valuemin={min}
				aria-valuemax={max}
				aria-valuenow={currentValue}
				tabIndex={disabled ? -1 : 0}
			>
				<div
					className="absolute h-full bg-blue-600 rounded-full"
					style={{ width: `${getValuePercentage()}%` }}
				/>
				{/* biome-ignore lint/nursery/noStaticElementInteractions: <explanation> */}
				<div
					ref={thumbRef}
					className={sliderThumbVariants({ size })}
					style={{ left: `${getValuePercentage()}%` }}
					onMouseDown={handleMouseDown}
					onTouchStart={handleTouchStart}
				/>
			</div>
		</div>
	);
};
