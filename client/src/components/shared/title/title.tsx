type TitleProps = {
	variant?: number;
	children: string;
	className?: string;
};

export const Title = ({ variant = 1, children, className = "" }: TitleProps) => {
	const CustomTitle = `h${variant}` as keyof JSX.IntrinsicElements;

	return <CustomTitle className={className}>{children}</CustomTitle>;
};
